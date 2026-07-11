export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "secondary" | "outline";
  rounded?: boolean;
  fullWidth?: boolean;
  isDisabled?: boolean;
}

const baseStyles =
  "px-8 py-5 text-xl rounded-bl-2xl rounded-tr-2xl font-semibold bg-(--color-green) text-(--button-text-color) hover:bg-(--color-green)/80 focus:outline-none";

const Button = (props: ButtonProps) => {
  const {
    className,
    style,
    rounded,
    fullWidth,
    isDisabled,
    disabled,
    children,
    ...rest
  } = props;

  return (
    <button
      className={[
        baseStyles,
        isDisabled ? "opacity-50 cursor-not-allowed" : "",
        fullWidth ? "w-full" : "",
        rounded ? "rounded-full!" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={style}
      disabled={disabled ?? isDisabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
