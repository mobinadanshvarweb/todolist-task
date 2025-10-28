import type { ButtonPros } from "../types/buttonType";

const Button = ({ title, style, icon, text, action }: ButtonPros) => {
  return (
    <button
      title={title}
      onClick={action}
      className={`cursor-pointer ${style}`}
    >
      {icon} {text}
    </button>
  );
};

export default Button;
