import { LoginPage } from "@/pages/account/ui/login-page";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./global.css";
import { SignUpPage } from "@/pages/account/ui";
import { MainPage } from "@/pages/main/ui";

export function App() {
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
