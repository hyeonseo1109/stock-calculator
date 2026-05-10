import { LoginChat } from "@/entities/login-chat/ui";
import * as styles from "./style.css";

export const Login = () => {
  return (
    <div className={styles.loginBox}>
      <LoginChat />
    </div>
  );
};
