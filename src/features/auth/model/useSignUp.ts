import { useState } from "react";

import { signUp } from "@/features/auth/api";

export const useSignUp = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const data = await signUp(email, password);

      console.log(data);

      alert("회원가입 성공");
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
