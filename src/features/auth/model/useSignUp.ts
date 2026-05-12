import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "@/features/auth/api";

export const useSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await signUp(email, password);
      navigate("/calculate-page");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Sign up failed. Please try again.");
      }
    }
  };

  return { email, password, setEmail, setPassword, handleSignUp, error };
};
