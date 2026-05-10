import * as styles from "./style.css";
import { LoginButton, LoginInput } from "@/entities/login-chat/ui";

export const SignUp = () => {
  return (
    <div className={styles.loginBox}>
      <div className={styles.allSignUp}>
        <div className={styles.signUpTitle}>
          <h2 className={styles.title}>Welcome!</h2>
          <p className={styles.miniTitle}>Create your account to get started</p>
        </div>

        <form action="">
          <div className={styles.signUpChatButtonWrapper}>
            <div className={styles.signUpChatWrapper}>
              <LoginInput type="text" placeholder="아이디" />
              <LoginInput type="password" placeholder="비밀번호" />
            </div>
            <LoginButton text="SIGN UP" />
            <p className={styles.loginText}>
              Don't have an account?{" "}
              <a className={styles.loginLink} href="login-page">
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
