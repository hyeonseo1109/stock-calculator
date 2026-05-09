import * as styles from "./style.css";

export const LoginChat = () => {
  return (
    <>
      <div className={styles.loginTitle}>LoginChat</div>
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
          <button className={styles.loginChatButton}>LOGIN</button>
        </div>
      </form>
    </>
  );
};
