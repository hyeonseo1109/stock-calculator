import * as styles from "./style.css";
import { LoginButton, LoginInput } from "@/entities/login-chat/ui";

export const SignUp = () => {
  return (
    <div className={styles.loginBox}>
      <div className={styles.allLogin}>
        <div className={styles.loginTitle}>
          <h2 className={styles.title}>Hello!</h2>
          <p className={styles.miniTitle}>Create Account</p>
        </div>

        <form action="">
          <div className={styles.loginChatButtonWrapper}>
            <div className={styles.loginChatWrapper}>
              <LoginInput type="text" placeholder="아이디" />
              <LoginInput type="password" placeholder="비밀번호" />
            </div>
            <LoginButton />
            <p className={styles.signUpText}>
              Already have an account?{" "}
              <a className={styles.signUpLink} href="sign-in">
                Sign in
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
