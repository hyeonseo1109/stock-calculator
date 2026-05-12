import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "@/features/auth/api";

export const useSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      navigate("/calculate-page");
    } catch (error) {
      console.error(error);

      alert("회원가입 실패");
    }
  };

  return {
    email,
    password,

    setEmail,
    setPassword,

    handleSignUp,
  };
};
