import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "@/features/auth/api";

const translateError = (message: string): string => {
  if (message.includes("Invalid login credentials")) {
    return "이메일 또는 비밀번호가 올바르지 않습니다.";
  }
  return message;
};

export const useLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await signIn(email, password);
      navigate("/calculate-page");
    } catch (err) {
      if (err instanceof Error) {
        setError(translateError(err.message));
      } else {
        setError("로그인에 실패했습니다. 다시 시도해주세요.");
      }
    }
  };

  return { email, password, setEmail, setPassword, handleLogin, error };
};
