import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { subscribeUserStars } from "../services/projectsService";

export default function useUserStars() {
  const { user } = useAuth();
  const [starredProjectIds, setStarredProjectIds] = useState(new Set());
  const [error, setError] = useState("");

  useEffect(() => {
    const unsubscribe = subscribeUserStars(
      user?.uid,
      setStarredProjectIds,
      issue => setError(issue.message || "Star 数据加载失败")
    );

    return unsubscribe;
  }, [user?.uid]);

  return { starredProjectIds, error };
}
