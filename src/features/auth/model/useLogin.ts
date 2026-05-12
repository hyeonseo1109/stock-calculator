import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "@/features/auth/api";

export const useLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);

    try {
      await signIn(email, password);
      navigate("/calculate-page");
    } catch {
      setError(true);
    }
  };

  return { email, password, setEmail, setPassword, handleLogin, error };
};
