import {
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  SelectHTMLAttributes,
  ReactNode,
  Ref,
} from "react";

export type InputSize = "sm" | "xsm";
export type InputVariant = "outlined" | "filled" | "ghost";
export type InputState =
  | "default"
  | "error"
  | "success"
  | "warning"
  | "disabled";
export type InputType =
  | "text"
  | "password"
  | "textarea"
  | "email"
  | "number"
  | "tel"
  | "url"
  | "search"
  | "date"
  | "time"
  | "datetime-local"
  | "month"
  | "week"
  | "color"
  | "range"
  | "file"
  | "hidden"
  | "radio"
  | "checkbox";

export interface InputStyleConfig {
  wrapperClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  errorClassName?: string;
  helperClassName?: string;
  prefixClassName?: string;
  suffixClassName?: string;
  requiredClassName?: string;
}

export interface BaseInputProps extends InputStyleConfig {
  id?: string;
  name?: string;
  label?: ReactNode;
  error?: string | string[];
  helperText?: ReactNode;
  successText?: string;
  size?: InputSize;
  variant?: InputVariant;
  fullWidth?: boolean;
  prefix?: ReactNode;
  suffix?: ReactNode;
  loading?: boolean;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  darkMode?: boolean;
}

export interface TextInputProps
  extends
    BaseInputProps,
    Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "prefix" | "suffix"> {
  type?: InputType;
  clearable?: boolean;
  passwordToggle?: boolean;
  ref?: Ref<HTMLInputElement>;
}

export interface TextareaProps
  extends
    BaseInputProps,
    Omit<
      TextareaHTMLAttributes<HTMLTextAreaElement>,
      "size" | "prefix" | "suffix"
    > {
  autoResize?: boolean;
  rows?: number;
  showCount?: boolean;
  maxLength?: number;
  maxLength?: number;
  ref?: Ref<HTMLTextAreaElement>;
}

// ─── InputWrapper ────────────────────────────────────────────────────────────

export interface InputWrapperProps {
  id: string;
  label?: ReactNode;
  error?: string | string[];
  helperText?: ReactNode;
  successText?: string;
  required?: boolean;
  fullWidth?: boolean;
  wrapperClassName?: string;
  labelClassName?: string;
  errorClassName?: string;
  helperClassName?: string;
  requiredClassName?: string;
  size?: InputSize;
  children: ReactNode;
  disabled?: boolean;
}
