import * as styles from "./style.css";

interface LoginButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export const LoginButton = ({ text, ...props }: LoginButtonProps) => {
  return (
    <button className={styles.loginChatButton} {...props}>
      {text}
    </button>
  );
};
