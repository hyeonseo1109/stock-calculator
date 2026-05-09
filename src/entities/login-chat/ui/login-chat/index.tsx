import * as styles from "./style.css";

export const LoginChat = () => {
  return (
    <>
      <div className={styles.loginChat}>LoginChat</div>
      <div>
        <input type="text" placeholder="아이디" />
        <input type="password" placeholder="비밀번호" />
      </div>
    </>
  );
};
