import * as styles from "./style.css";

interface LoginInputProps {
  type: string;
  placeholder: string;
}

export const LoginInput = ({ type, placeholder }: LoginInputProps) => {
  return (
    <input
      className={styles.loginInput}
      type={type}
      placeholder={placeholder}
    />
  );
};
