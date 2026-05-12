import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { getCurrentUser } from "@/features/auth/api";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const [status, setStatus] = useState<"loading" | "auth" | "unauth">(
    "loading",
  );

  useEffect(() => {
    getCurrentUser().then((user) => {
      setStatus(user ? "auth" : "unauth");
    });
  }, []);

  if (status === "loading") return null; // 또는 로딩 스피너
  if (status === "unauth") return <Navigate to="/login-page" replace />;
  return <>{children}</>;
};
