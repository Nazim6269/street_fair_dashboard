import React, { memo } from "react";
import { cn } from "@/lib/utils";
import { sizeConfig } from "./input.size";
import { InputWrapperProps } from "./input.type.d";

function ErrorIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="7" cy="7" r="6" stroke="#EF4444" strokeWidth="1.5" />
      <path d="M7 4V7.5" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="7" cy="10" r="0.75" fill="#EF4444" />
    </svg>
  );
}

function SuccessIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="7" cy="7" r="6" stroke="#10B981" strokeWidth="1.5" />
      <path d="M4.5 7L6.5 9L9.5 5" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function buildLabelClass(size: string, disabled: boolean, extra?: string): string {
  const s = sizeConfig[size as keyof typeof sizeConfig];
  return cn(
    "block select-none",
    s?.label || "text-xs font-medium mb-0.5",
    disabled && "opacity-50",
    extra,
  );
}

export const InputWrapper = memo<InputWrapperProps>(function InputWrapper({
  id,
  label,
  error,
  helperText,
  successText,
  required,
  fullWidth,
  wrapperClassName,
  labelClassName,
  errorClassName,
  helperClassName,
  size = "sm",
  children,
  disabled,
}) {
  const errorMessages = Array.isArray(error) ? error : error ? [error] : [];
  const hasError = errorMessages.length > 0;
  const s = sizeConfig[size as keyof typeof sizeConfig];

  return (
    <div
      className={cn(
        "flex flex-col",
        fullWidth ? "w-full" : "w-full",
        wrapperClassName,
      )}
    >
      {label && (
        <label
          htmlFor={id}
          className={buildLabelClass(size, !!disabled, labelClassName)}
        >
          {label}
          {required && (
            <span className="ml-1 text-red-500 select-none" aria-hidden="true">*</span>
          )}
        </label>
      )}

      {children}

      {hasError && (
        <div role="alert" aria-live="polite" className={cn("flex flex-col gap-0.5", s?.helper || "text-[11px] mt-0.5")}>
          {errorMessages.map((msg, i) => (
            <span
              key={i}
              className={cn("flex items-center gap-1 text-red-500", errorClassName)}
            >
              <ErrorIcon />
              {msg}
            </span>
          ))}
        </div>
      )}

      {!hasError && successText && (
        <span className={cn("flex items-center gap-1 text-emerald-600", s?.helper || "text-[11px] mt-0.5", helperClassName)}>
          <SuccessIcon />
          {successText}
        </span>
      )}

      {!hasError && !successText && helperText && (
        <span className={cn("text-slate-500", s?.helper || "text-[11px] mt-0.5", helperClassName)}>
          {helperText}
        </span>
      )}
    </div>
  );
});
