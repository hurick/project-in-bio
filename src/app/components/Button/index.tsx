import { ButtonHTMLAttributes } from "react";

import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary";
}

export function Button({
  variant = "primary",
  type = "button",
  className,
  children,
  ...props
}: ButtonProps) {
  const buttonVariants = {
    primary: "bg-accent-purple hover:bg-accent-purple/80",
    secondary: "bg-background-tertiary hover:bg-background-tertiary/80",
    tertiary: "border-border-secondary hover:bg-background-tertiary",
  };

  const buttonClassNames = twMerge(
    "text-white rounded-xl p-3 font-bold cursor-pointer border border-transparent transition-colors",
    buttonVariants[variant],
    className
  );

  return (
    <button type={type} className={buttonClassNames} {...props}>
      {children}
    </button>
  );
}
