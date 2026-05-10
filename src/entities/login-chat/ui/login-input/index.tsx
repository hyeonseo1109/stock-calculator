import * as styles from "./style.css";

interface LoginInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const LoginInput = (props: LoginInputProps) => {
  return <input className={styles.loginInput} {...props} />;
};
