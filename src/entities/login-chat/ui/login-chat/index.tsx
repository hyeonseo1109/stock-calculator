import { LoginButton } from "../login-button";
import { LoginInput } from "../login-input";
import * as styles from "./style.css";

export const LoginChat = () => {
  return (
    <div className={styles.allLogin}>
      <div className={styles.loginTitle}>
        <h2 className={styles.title}>Hello!</h2>
        <p className={styles.miniTitle}>Sign in to your account</p>
      </div>

      <form action="">
        <div className={styles.loginChatButtonWrapper}>
          <div className={styles.loginChatWrapper}>
            <LoginInput type="text" placeholder="아이디" />
            <LoginInput type="password" placeholder="비밀번호" />
          </div>
          <LoginButton />
        </div>
      </form>
    </div>
  );
};
