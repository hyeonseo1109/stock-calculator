import * as styles from "./style.css";

export const LoginChat = () => {
  return (
    <>
      <div className={styles.loginChat}>LoginChat</div>
      <div>
        <div className={styles.loginChatInput}>
          <input type="text" placeholder="아이디" />
          <input type="password" placeholder="비밀번호" />
        </div>
        <button className={styles.loginChatButton}>로그인</button>
      </div>
    </>
  );
};
