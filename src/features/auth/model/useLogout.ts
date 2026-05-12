import { useNavigate, useLocation } from "react-router-dom";
import { signOut } from "@/features/auth/api";

export const useLogout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    try {
      await signOut();

      if (location.pathname !== "/") {
        navigate("/login-page");
      } else {
        // 메인페이지면 그대로, 헤더 상태만 갱신되도록 새로고침
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
      alert("로그아웃 실패");
    }
  };

  return { handleLogout };
};
