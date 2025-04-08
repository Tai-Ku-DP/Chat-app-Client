import React from "react";
import { cn } from "~/lib/common/utils";

export type IProps = {
  label: string;
  className?: string;
  htmlFor?: string;
  err?: string;

  isRequired?: boolean;

  children: React.ReactNode;
};
export const FormItem: React.FC<IProps> = ({
  label,
  className,
  htmlFor,
  err,

  isRequired,

  children,
}) => {
  return (
    <div className={cn("grid gap-2", className)}>
      <label
        htmlFor={htmlFor}
        className="font-medium text-sm leading-none flex items-center gap-1"
      >
        {label}
        {isRequired && <span className="text-red-400">*</span>}
      </label>

      {children}

      {err && (
        <span className="text-red-400 transition-all duration-300 overflow-hidden text-sm">
          {err}
        </span>
      )}
    </div>
  );
};
