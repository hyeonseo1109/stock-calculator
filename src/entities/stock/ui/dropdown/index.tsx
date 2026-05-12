import { useState } from "react";
import * as styles from "./style.css";

interface Option {
  text: string;
}

interface DropDownProps {
  placeholder: string;
  options: Option[];

  value?: string;

  onSelect?: (value: string) => void;
}

export const DropDown = ({
  placeholder,
  options,
  value,
  onSelect,
}: DropDownProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.trigger} onClick={() => setOpen((prev) => !prev)}>
        <span className={styles.triggerText}>{value || placeholder}</span>

        <span className={styles.icon}>{open ? "▲" : "▼"}</span>
      </div>

      {open && (
        <div className={styles.menu}>
          {options.map((option) => (
            <div
              key={option.text}
              className={styles.option}
              onClick={() => {
                onSelect?.(option.text);
                setOpen(false);
              }}
            >
              {option.text}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
