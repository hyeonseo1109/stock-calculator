import { useEffect, useState } from "react";
import { useLogout } from "@/features/auth/model/useLogout";
import { getCurrentUser } from "@/features/auth/api";
import * as styles from "./style.css";

interface HeaderProps {
  variant?: "light" | "dark";
}

export const Header = ({ variant = "dark" }: HeaderProps) => {
  const { handleLogout } = useLogout();
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    getCurrentUser().then((user) => {
      if (user?.email) {
        setUsername(user.email.split("@")[0]);
      }
    });
  }, []);

  const isLight = variant === "light";

  return (
    <header className={isLight ? styles.headerLight : styles.headerDark}>
      <a href="/" className={isLight ? styles.logoLight : styles.logoDark}>
        주식 수익 계산기
      </a>

      <div className={styles.right}>
        {username && (
          <>
            <span
              className={isLight ? styles.greetingLight : styles.greetingDark}
            >
              {username}님, 안녕하세요.
            </span>
            <button
              className={
                isLight ? styles.logoutButtonLight : styles.logoutButtonDark
              }
              onClick={handleLogout}
            >
              로그아웃
            </button>
          </>
        )}
      </div>
    </header>
  );
};
