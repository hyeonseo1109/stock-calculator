import { useLogout } from "@/features/auth/model/useLogout";
import * as styles from "./style.css";

export const Header = () => {
  const { handleLogout } = useLogout();

  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo}>
        주식계산기
      </a>
      <button className={styles.logoutButton} onClick={handleLogout}>
        로그아웃
      </button>
    </header>
  );
};
