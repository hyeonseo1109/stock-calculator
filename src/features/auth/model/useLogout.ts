import { useNavigate } from "react-router-dom";
import { signOut } from "@/features/auth/api";

export const useLogout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut();

      alert("로그아웃 완료");

      navigate("/login-page");
    } catch (error) {
      console.error(error);

      alert("로그아웃 실패");
    }
  };

  return { handleLogout };
};
