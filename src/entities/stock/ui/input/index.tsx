import * as styles from "./style.css";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = (props: Props) => {
  return <input {...props} />;
};
