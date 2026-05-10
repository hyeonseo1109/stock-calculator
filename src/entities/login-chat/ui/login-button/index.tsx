import * as styles from "./style.css";

export const LoginButton = ({ text }: { text: string }) => {
  return <button className={styles.loginChatButton}>{text}</button>;
};
