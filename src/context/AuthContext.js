import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import {
  doc,
  getDoc,
  onSnapshot,
  serverTimestamp,
  setDoc,
  updateDoc
} from "firebase/firestore";
import { auth, db, firebaseConfigured, githubProvider } from "../lib/firebase";

const AuthContext = createContext(null);

function getFallbackAvatarText(user) {
  return (user?.displayName || user?.email || "U").slice(0, 1).toUpperCase();
}

function getGithubAccount(user) {
  const githubProfile = user?.providerData?.find(
    provider => provider.providerId === "github.com"
  );

  return githubProfile?.displayName || user?.displayName || "";
}

async function ensureUserProfile(user) {
  const ref = doc(db, "users", user.uid);
  const snapshot = await getDoc(ref);

  if (snapshot.exists()) return;

  const githubAccount = getGithubAccount(user);

  await setDoc(ref, {
    uid: user.uid,
    username: user.displayName || githubAccount || "New Creator",
    displayName: user.displayName || githubAccount || "New Creator",
    handle: githubAccount || user.uid.slice(0, 8),
    avatar: getFallbackAvatarText(user),
    avatarText: getFallbackAvatarText(user),
    githubAccount,
    githubProfile: githubAccount ? `https://github.com/${githubAccount}` : "",
    photoURL: user.photoURL || "",
    email: user.email || "",
    totalStars: 0,
    projectsCount: 0,
    repositoriesSynced: 0,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  });
}

function normalizeProfile(data) {
  if (!data) return null;

  return {
    ...data,
    username: data.username || data.displayName || "New Creator",
    avatar: data.avatar || data.avatarText || "U",
    handle: data.handle || data.githubAccount || "",
    totalStars: data.totalStars || 0,
    projectsCount: data.projectsCount || 0,
    repositoriesSynced: data.repositoriesSynced || 0
  };
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(firebaseConfigured);
  const [authError, setAuthError] = useState("");

  useEffect(() => {
    if (!firebaseConfigured || !auth || !db) {
      setLoading(false);
      return undefined;
    }

    let profileUnsubscribe = null;

    const unsubscribe = onAuthStateChanged(auth, async nextUser => {
      setUser(nextUser);
      setAuthError("");

      if (profileUnsubscribe) {
        profileUnsubscribe();
        profileUnsubscribe = null;
      }

      if (!nextUser) {
        setProfile(null);
        setLoading(false);
        return;
      }

      try {
        await ensureUserProfile(nextUser);
        profileUnsubscribe = onSnapshot(doc(db, "users", nextUser.uid), snapshot => {
          setProfile(snapshot.exists() ? normalizeProfile(snapshot.data()) : null);
          setLoading(false);
        });
      } catch (error) {
        setAuthError(error.message);
        setLoading(false);
      }
    });

    return () => {
      unsubscribe();
      if (profileUnsubscribe) profileUnsubscribe();
    };
  }, []);

  async function signInWithGitHub() {
    if (!firebaseConfigured || !auth) {
      setAuthError("Firebase 尚未配置。请先在 Netlify 环境变量中填写 Firebase 配置。");
      return;
    }

    await signInWithPopup(auth, githubProvider);
  }

  async function signOutUser() {
    if (!firebaseConfigured || !auth) return;
    await signOut(auth);
  }

  async function updateProfileFields(fields) {
    if (!firebaseConfigured || !db || !user) return;

    await updateDoc(doc(db, "users", user.uid), {
      ...fields,
      updatedAt: serverTimestamp()
    });
  }

  const value = useMemo(
    () => ({
      user,
      profile,
      loading,
      authError,
      firebaseConfigured,
      signInWithGitHub,
      signOutUser,
      updateProfileFields
    }),
    [user, profile, loading, authError]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
}
