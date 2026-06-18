import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  increment,
  onSnapshot,
  orderBy,
  query,
  runTransaction,
  serverTimestamp,
  setDoc,
  updateDoc,
  where
} from "firebase/firestore";
import { demoProjects } from "../data/projects";
import { db, firebaseConfigured } from "../lib/firebase";

function fallbackAvatar(name = "U") {
  return name.trim().slice(0, 1).toUpperCase() || "U";
}

function repoNameFromUrl(url = "") {
  const match = url.trim().match(/^https:\/\/github\.com\/([^/]+\/[^/#?]+)/);
  return match ? match[1] : "未绑定";
}

function normalizeProject(id, data = {}) {
  return {
    id,
    name: data.name || "",
    theme: data.theme || data.description || "",
    author: data.ownerName || data.author || "",
    avatar: data.ownerAvatar || data.avatar || fallbackAvatar(data.ownerName),
    stage: data.stage || "早期",
    tags: Array.isArray(data.tags) ? data.tags : [],
    star: data.starCount ?? data.star ?? 0,
    repoStars: data.repoStarsManual ?? data.repoStars ?? 0,
    aiScore: data.aiScoreManual ?? data.aiScore ?? 0,
    applicants: data.applicationCount ?? data.applicants ?? 0,
    isMine: data.isMine || false,
    ownerId: data.ownerId || "",
    githubUrl: data.githubUrl || "",
    githubRepo: data.githubRepo || repoNameFromUrl(data.githubUrl),
    githubBranch: data.githubBranch || "main",
    readmeSyncedAt: data.readmeSyncedAt || "手动填写",
    lastCommit: data.lastCommit || "GitHub API 未接入",
    repoHealth: data.repoHealth || "manual",
    demoHtml: data.demoHtml || "",
    readme: data.readme || data.description || "",
    createdAt: data.createdAt || null,
    updatedAt: data.updatedAt || null
  };
}

function timestampMs(value) {
  if (!value) return 0;
  if (typeof value.toMillis === "function") return value.toMillis();
  if (typeof value.seconds === "number") return value.seconds * 1000;
  return 0;
}

export function subscribeProjects(onNext, onError) {
  if (!firebaseConfigured || !db) {
    onNext(demoProjects);
    return () => {};
  }

  const projectsQuery = query(collection(db, "projects"), orderBy("createdAt", "desc"));

  return onSnapshot(
    projectsQuery,
    snapshot => {
      onNext(snapshot.docs.map(project => normalizeProject(project.id, project.data())));
    },
    onError
  );
}

export async function createProject({ form, user, profile }) {
  if (!firebaseConfigured || !db || !user) {
    return null;
  }

  const tags = form.tags
    .split(/[,\s]+/)
    .map(tag => tag.trim())
    .filter(Boolean)
    .map(tag => (tag.startsWith("#") ? tag : `#${tag}`));

  const ownerName = profile?.username || user.displayName || "AI Creator";
  const githubRepo = repoNameFromUrl(form.githubUrl);

  const projectRef = await addDoc(collection(db, "projects"), {
    name: form.name.trim(),
    theme: form.theme.trim(),
    description: form.description.trim(),
    stage: form.stage,
    tags,
    githubUrl: form.githubUrl.trim(),
    githubRepo,
    githubBranch: "main",
    demoHtml: form.demoHtml.trim(),
    readme: form.description.trim(),
    ownerId: user.uid,
    ownerName,
    ownerAvatar: profile?.avatar || fallbackAvatar(ownerName),
    starCount: 0,
    repoStarsManual: 0,
    aiScoreManual: 0,
    applicationCount: 0,
    repoHealth: form.githubUrl.trim() ? "manual" : "unbound",
    readmeSyncedAt: "手动填写",
    lastCommit: "GitHub API 未接入",
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  });

  await updateDoc(doc(db, "users", user.uid), {
    projectsCount: increment(1),
    repositoriesSynced: increment(form.githubUrl.trim() ? 1 : 0),
    updatedAt: serverTimestamp()
  });

  return projectRef.id;
}

export async function createApplication({ project, form, user, profile }) {
  if (!firebaseConfigured || !db || !user || !project) {
    return null;
  }

  const applicationRef = await addDoc(collection(db, "applications"), {
    projectId: project.id,
    projectName: project.name,
    projectOwnerId: project.ownerId,
    applicantId: user.uid,
    applicantName: profile?.username || user.displayName || form.github.trim(),
    applicantAvatar: profile?.avatar || fallbackAvatar(profile?.username || user.displayName),
    github: form.github.trim(),
    intro: form.intro.trim(),
    contribution: form.contribution.trim(),
    status: "pending",
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  });

  await updateDoc(doc(db, "projects", project.id), {
    applicationCount: increment(1),
    updatedAt: serverTimestamp()
  });

  return applicationRef.id;
}

export function subscribeOwnerApplications(ownerId, onNext, onError) {
  if (!firebaseConfigured || !db || !ownerId) {
    onNext([]);
    return () => {};
  }

  const applicationsQuery = query(
    collection(db, "applications"),
    where("projectOwnerId", "==", ownerId)
  );

  return onSnapshot(
    applicationsQuery,
    snapshot =>
      onNext(
        snapshot.docs
          .map(item => ({ id: item.id, ...item.data() }))
          .sort((a, b) => timestampMs(b.createdAt) - timestampMs(a.createdAt))
      ),
    onError
  );
}

export function subscribeUserStars(userId, onNext, onError) {
  if (!firebaseConfigured || !db || !userId) {
    onNext(new Set());
    return () => {};
  }

  const starsQuery = query(collection(db, "stars"), where("userId", "==", userId));

  return onSnapshot(
    starsQuery,
    snapshot => onNext(new Set(snapshot.docs.map(item => item.data().projectId))),
    onError
  );
}

export async function toggleProjectStar({ projectId, userId, isStarred }) {
  if (!firebaseConfigured || !db || !projectId || !userId) {
    return;
  }

  const starRef = doc(db, "stars", `${projectId}_${userId}`);
  const projectRef = doc(db, "projects", projectId);

  await runTransaction(db, async transaction => {
    const starSnap = await transaction.get(starRef);
    const projectSnap = await transaction.get(projectRef);

    if (!projectSnap.exists()) {
      return;
    }

    if (isStarred || starSnap.exists()) {
      transaction.delete(starRef);
      transaction.update(projectRef, {
        starCount: increment(-1),
        updatedAt: serverTimestamp()
      });
      return;
    }

    transaction.set(starRef, {
      projectId,
      userId,
      createdAt: serverTimestamp()
    });
    transaction.update(projectRef, {
      starCount: increment(1),
      updatedAt: serverTimestamp()
    });
  });
}

export async function setApplicationStatus(applicationId, status) {
  if (!firebaseConfigured || !db || !applicationId) {
    return;
  }

  await updateDoc(doc(db, "applications", applicationId), {
    status,
    updatedAt: serverTimestamp()
  });
}

export async function deleteProject(projectId) {
  if (!firebaseConfigured || !db || !projectId) {
    return;
  }

  await deleteDoc(doc(db, "projects", projectId));
}

export async function getProject(projectId) {
  if (!firebaseConfigured || !db || !projectId) {
    return null;
  }

  const projectSnap = await getDoc(doc(db, "projects", projectId));
  return projectSnap.exists() ? normalizeProject(projectSnap.id, projectSnap.data()) : null;
}

export async function upsertProject(projectId, data) {
  if (!firebaseConfigured || !db || !projectId) {
    return;
  }

  await setDoc(
    doc(db, "projects", projectId),
    {
      ...data,
      updatedAt: serverTimestamp()
    },
    { merge: true }
  );
}
