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
            <input
              className={styles.loginChatInput}
              type="text"
              placeholder="아이디"
            />
            <input
              className={styles.loginChatInput}
              type="password"
              placeholder="비밀번호"
            />
          </div>
          <button className={styles.loginChatButton}>SIGN IN</button>
        </div>
      </form>
    </div>
  );
};
