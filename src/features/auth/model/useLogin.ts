import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "@/features/auth/api";

export const useLogin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const data = await signIn(email, password);
      console.log(data);
      alert("로그인 성공");

      navigate("/calculate-page");
    } catch (error) {
      console.error(error);

      alert("로그인 실패");
    }
  };

  return {
    email,
    password,

    setEmail,
    setPassword,

    handleLogin,
  };
};
