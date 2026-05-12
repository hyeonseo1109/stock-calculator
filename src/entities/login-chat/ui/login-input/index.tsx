import { useState } from "react";
import * as styles from "./style.css";
import visibleIcon from "@/assets/visible.png";
import invisibleIcon from "@/assets/invisible.png";

interface LoginInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const LoginInput = ({ type, ...props }: LoginInputProps) => {
  const [visible, setVisible] = useState(false);

  const isPassword = type === "password";

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.loginInput}
        type={isPassword ? (visible ? "text" : "password") : type}
        {...props}
      />
      {isPassword && (
        <button
          type="button"
          className={styles.toggleButton}
          onClick={() => setVisible((prev) => !prev)}
        >
          {visible ? (
            <img
              className={styles.toggleIcon}
              src={visibleIcon}
              alt="Visible"
            />
          ) : (
            <img
              className={styles.toggleIcon}
              src={invisibleIcon}
              alt="Invisible"
            />
          )}
        </button>
      )}
    </div>
  );
};
