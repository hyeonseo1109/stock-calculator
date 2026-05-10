import { LoginButton, LoginInput } from "@/entities/login-chat/ui";
import * as styles from "./style.css";

export const Login = () => {
  return (
    <div className={styles.loginBox}>
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
            <p className={styles.signUpText}>
              Don't have an account?{" "}
              <a className={styles.signUpLink} href="/sign-up-page">
                Sign up
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
