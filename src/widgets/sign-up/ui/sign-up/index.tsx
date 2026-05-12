import * as styles from "./style.css";
import { LoginButton, LoginInput } from "@/entities/login-chat/ui";
import { useSignUp } from "@/features/auth/model";

export const SignUp = () => {
  const {
    email,
    password,

    setEmail,
    setPassword,

    handleSignUp,
  } = useSignUp();

  return (
    <div className={styles.loginBox}>
      <div className={styles.allSignUp}>
        <div className={styles.signUpTitle}>
          <h2 className={styles.title}>Welcome!</h2>

          <p className={styles.miniTitle}>Create your account to get started</p>
        </div>

        <form onSubmit={handleSignUp}>
          <div className={styles.signUpChatButtonWrapper}>
            <div className={styles.signUpChatWrapper}>
              <LoginInput
                type="text"
                placeholder="이메일"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <LoginInput
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <LoginButton text="SIGN UP" type="submit" />

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
