import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { supabase } from "@/shared/api";
import { LoginPage } from "@/pages/account/ui";
import { SignUpPage } from "@/pages/account/ui";
import { MainPage } from "@/pages/main/ui";

import "./global.css";

export function App() {
  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      console.log("로그인 상태 변경");

      console.log(session?.user);

      console.log(session?.user.email);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login-page" element={<LoginPage />} />
        <Route path="/sign-up-page" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}
