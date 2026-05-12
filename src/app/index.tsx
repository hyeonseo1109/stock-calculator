import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "@/pages/account/ui";
import { SignUpPage } from "@/pages/account/ui";
import { MainPage } from "@/pages/main/ui";
import { CalculatePage } from "@/pages/calculate/ui";
import { ProtectedRoute } from "@/shared/ui/protected-route";

import "./global.css";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login-page" element={<LoginPage />} />
        <Route path="/sign-up-page" element={<SignUpPage />} />
        <Route
          path="/calculate-page"
          element={
            <ProtectedRoute>
              <CalculatePage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
