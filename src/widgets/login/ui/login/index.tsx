import { LoginButton, LoginInput } from "@/entities/login-chat/ui";
import { useLogin } from "@/features/auth/model";
import * as styles from "./style.css";

export const Login = () => {
  const { email, password, setEmail, setPassword, handleLogin, error } =
    useLogin();

  return (
    <div className={styles.loginBox}>
      <div className={styles.allLogin}>
        <div className={styles.loginTitle}>
          <h2 className={styles.title}>Hello!</h2>
          <p className={styles.miniTitle}>Sign in to your account</p>
        </div>

        <form onSubmit={handleLogin}>
          <div className={styles.loginChatButtonWrapper}>
            <div className={styles.loginChatWrapper}>
              <LoginInput
                type="text"
                placeholder="이메일"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={error ? { boxShadow: "0 0 0 1.5px #e05555" } : {}}
              />
              <LoginInput
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={error ? { boxShadow: "0 0 0 1.5px #e05555" } : {}}
              />
              {error && <p className={styles.errorText}>{error}</p>}
            </div>

            <LoginButton text="LOGIN" type="submit" />

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
