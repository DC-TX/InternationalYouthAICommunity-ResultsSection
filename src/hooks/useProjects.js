import { useEffect, useState } from "react";
import { subscribeProjects } from "../services/projectsService";

export default function useProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    const unsubscribe = subscribeProjects(
      nextProjects => {
        setProjects(nextProjects);
        setLoading(false);
      },
      issue => {
        setError(issue.message || "项目数据加载失败");
        setLoading(false);
      }
    );

    return unsubscribe;
  }, []);

  return { projects, loading, error };
}
