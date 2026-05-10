type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
};

export const Button = ({ text, ...props }: Props) => {
  return <button {...props}>{text}</button>;
};
