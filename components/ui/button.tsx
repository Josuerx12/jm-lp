export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "secondary" | "outline";
  rounded?: boolean;
  fullWidth?: boolean;
  isDisabled?: boolean;
}

const baseStyles =
  "min-h-12 px-5 py-3.5 text-base sm:px-8 sm:py-5 sm:text-xl border border-(--color-green) rounded-bl-2xl rounded-tr-2xl font-semibold bg-(--color-green) text-(--button-text-color) hover:bg-(--color-green)/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-green)";

const Button = (props: ButtonProps) => {
  const {
    className,
    style,
    rounded,
    fullWidth,
    isDisabled,
    disabled,
    variant,
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
        variant === "secondary"
          ? "bg-transparent text-(--color-foreground) hover:bg-foreground/10"
          : "",
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
