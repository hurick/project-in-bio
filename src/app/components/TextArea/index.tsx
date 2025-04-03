import { TextareaHTMLAttributes } from "react";

import { twMerge } from "tailwind-merge";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  labelClassName?: string;
  wrapperClassName?: string;
  name: string;
}

export function TextArea({
  name,
  label,
  rows = 5,
  cols = 50,
  className,
  labelClassName,
  wrapperClassName,
  ...props
}: TextAreaProps) {
  const wrapperClassNames = twMerge(
    "inline-flex",
    label && "flex flex-col items-start gap-1",
    wrapperClassName
  );

  const labelClassNames = twMerge("font-bold text-white", labelClassName);

  const inputClassNames = twMerge(
    "bg-background-secondary p-3 rounded-xl outline-none border border-transparent transition-colors resize-none",
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

      <textarea
        className={inputClassNames}
        id={props.id ?? name}
        name={name}
        rows={rows}
        cols={cols}
        {...props}
      />
    </div>
  );
}
