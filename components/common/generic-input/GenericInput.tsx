import React, { forwardRef, useCallback, useState } from "react";
import { InputWrapper } from "./InputWrapper";
import { sizeConfig } from "./input.size";
import { variantConfig } from "./input.variant";
import { buildInputClass } from "./input.style";
import { cn } from "@/lib/utils";
import type { TextInputProps, InputSize, InputVariant } from "./input.type.d";

function Spinner({ className }: { className?: string }) {
  return (
    <svg className={cn("animate-spin", className)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function EyeOffIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function FileUploadIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" y1="3" x2="12" y2="15" />
    </svg>
  );
}

function useInputId(providedId?: string): string {
  const [id] = useState(() => providedId || `input-${Math.random().toString(36).slice(2, 9)}`);
  return id;
}

function usePasswordToggle() {
  const [visible, setVisible] = useState(false);
  const toggle = useCallback(() => setVisible((v) => !v), []);
  const inputType = visible ? "text" : "password";
  return { visible, toggle, inputType };
}

export const GenericInput = forwardRef<HTMLInputElement, TextInputProps>(
  function GenericInput(
    {
      id: providedId,
      name,
      type = "text",
      size = "md",
      variant = "outlined",
      fullWidth = false,
      label,
      wrapperClassName,
      labelClassName,
      errorClassName,
      helperClassName,
      error,
      helperText,
      successText,
      required,
      prefix,
      suffix,
      prefixClassName,
      suffixClassName,
      loading = false,
      clearable = false,
      passwordToggle: passwordToggleProp,
      disabled = false,
      readOnly = false,
      value,
      defaultValue,
      onChange,
      inputClassName,
      className,
      placeholder,
      ...rest
    },
    ref,
  ) {
    const isRadio = type === "radio";
    const isFile = type === "file";
    const id = useInputId(providedId);
    const isPassword = type === "password";
    const showPasswordToggle = passwordToggleProp ?? isPassword;
    const { visible, toggle, inputType } = usePasswordToggle();

    const resolvedType = isPassword ? inputType : type;
    const hasError = !!error && (Array.isArray(error) ? error.length > 0 : true);
    const hasSuccess = !hasError && !!successText;

    const s = sizeConfig[size as keyof typeof sizeConfig];

    const hasValue =
      value !== undefined
        ? String(value).length > 0
        : defaultValue !== undefined
          ? String(defaultValue).length > 0
          : false;

    const handleClear = useCallback(
      (e: React.MouseEvent) => {
        e.preventDefault();
        const nativeInput = (ref as React.RefObject<HTMLInputElement>)?.current;
        if (nativeInput) {
          const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
            window.HTMLInputElement.prototype,
            "value",
          )?.set;
          nativeInputValueSetter?.call(nativeInput, "");
          nativeInput.dispatchEvent(new Event("input", { bubbles: true }));
        }
      },
      [ref],
    );

    const resolvedSuffix = loading ? (
      <Spinner className={cn(s?.icon || "w-4 h-4", "text-slate-400")} />
    ) : showPasswordToggle && isPassword ? (
      <button
        type="button"
        tabIndex={-1}
        onClick={toggle}
        aria-label={visible ? "Hide password" : "Show password"}
        className={cn("flex items-center justify-center hover:text-slate-600 transition-colors", s?.icon || "w-4 h-4")}
      >
        {visible ? <EyeOffIcon /> : <EyeIcon />}
      </button>
    ) : clearable && hasValue ? (
      <button
        type="button"
        tabIndex={-1}
        onClick={handleClear}
        aria-label="Clear input"
        className={cn("flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors rounded-full", s?.icon || "w-4 h-4")}
      >
        <XIcon />
      </button>
    ) : (
      suffix
    );

    const hasSuffix = !!resolvedSuffix;
    const hasPrefix = !!prefix;

    const inputClass = buildInputClass({
      size: size as InputSize,
      variant: variant as InputVariant,
      hasError,
      hasSuccess,
      disabled,
      hasPrefix,
      hasSuffix,
      fullWidth,
      extra: inputClassName ?? className,
    });

    if (isFile) {
      return (
        <div className={cn("flex items-center gap-2", className)}>
          <input
            ref={ref}
            id={id}
            name={name}
            type="file"
            disabled={disabled}
            readOnly={readOnly}
            required={required}
            onChange={onChange}
            aria-invalid={hasError ? "true" : undefined}
            className="hidden"
            {...rest}
          />
          <label
            htmlFor={id}
            className={cn("cursor-pointer flex items-center justify-center", disabled && "cursor-not-allowed opacity-50")}
          >
            <FileUploadIcon />
          </label>
          {label && (
            <span className={cn("text-sm text-gray-700", disabled ? "cursor-not-allowed opacity-50" : "", labelClassName)}>
              {label}
            </span>
          )}
        </div>
      );
    }

    if (isRadio) {
      return (
        <label className={cn("flex items-center gap-2", className)}>
          <input
            ref={ref}
            type="radio"
            name={name}
            value={value}
            onChange={onChange}
            disabled={disabled}
            className="peer sr-only"
            {...rest}
          />
          <div
            className={cn(
              "w-5 h-5 rounded-full border border-gray-400 flex items-center justify-center transition",
              "peer-checked:border-[#4A3A2F]",
              "peer-focus:ring-2 peer-focus:ring-[#4A3A2F]",
              "[&>div]:scale-0 peer-checked:[&>div]:scale-100",
              disabled && "opacity-50 cursor-not-allowed",
            )}
          >
            <div className="w-3.5 h-3.5 rounded-full bg-[#4A3A2F] transition-transform duration-150" />
          </div>
          {label && <span className="font-semibold text-lg sm:text-2xl">{label}</span>}
        </label>
      );
    }

    return (
      <InputWrapper
        id={id}
        label={label}
        error={error}
        helperText={helperText}
        successText={successText}
        required={required}
        fullWidth={fullWidth}
        wrapperClassName={wrapperClassName}
        labelClassName={labelClassName}
        errorClassName={errorClassName}
        helperClassName={helperClassName}
        size={size as any}
        disabled={disabled}
      >
        <div className="relative flex items-center w-full">
          {hasPrefix && (
            <span
              className={cn(
                "absolute left-0 flex items-center justify-center pointer-events-none",
                s?.icon || "w-4 h-4",
                "ml-3",
                prefixClassName,
              )}
            >
              {prefix}
            </span>
          )}

          <input
            ref={ref}
            id={id}
            name={name}
            type={resolvedType}
            disabled={disabled}
            readOnly={readOnly}
            required={required}
            value={value}
            defaultValue={defaultValue}
            onChange={onChange}
            placeholder={placeholder}
            aria-invalid={hasError ? "true" : undefined}
            aria-describedby={
              hasError ? `${id}-error` : helperText ? `${id}-helper` : undefined
            }
            className={inputClass}
            {...rest}
          />

          {hasSuffix && (
            <span
              className={cn(
                "absolute right-0 flex items-center justify-center text-black",
                s?.icon || "w-4 h-4",
                "mr-3",
                suffixClassName,
              )}
            >
              {resolvedSuffix}
            </span>
          )}
        </div>
      </InputWrapper>
    );
  },
);

export default GenericInput;
