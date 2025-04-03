import { InputHTMLAttributes } from "react";

import { twMerge } from "tailwind-merge";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelClassName?: string;
  wrapperClassName?: string;
  name: string;
}

export function Input({
  label,
  type = "text",
  inputMode = "text",
  className,
  labelClassName,
  wrapperClassName,
  name,
  ...props
}: InputProps) {
  const wrapperClassNames = twMerge(
    "inline-flex",
    label && "flex flex-col items-start gap-1",
    wrapperClassName
  );

  const labelClassNames = twMerge("font-bold text-white", labelClassName);

  const inputClassNames = twMerge(
    "bg-background-secondary p-3 rounded-xl outline-none border border-transparent transition-colors",
    "placeholder:placeholder-content-placeholder placeholder:transition-colors",
    "hover:placeholder:text-content-body hover:border-border-secondary",
    "focus:border-border-tertiary",
    className
  );

  return (
    <div className={wrapperClassNames}>
      {label && (
        <label htmlFor={props.id ?? name} className={labelClassNames}>
          {label}
        </label>
      )}

      <input
        className={inputClassNames}
        inputMode={inputMode}
        id={props.id ?? name}
        name={name}
        type={type}
        {...props}
      />
    </div>
  );
}
