import { sizeConfig } from "./input.size";
import { variantConfig } from "./input.variant";
import { cn } from "@/lib/utils";
import type { InputSize, InputVariant } from "./input.type.d";

interface BuildInputClassOptions {
  size: InputSize;
  variant: InputVariant;
  hasError: boolean;
  hasSuccess: boolean;
  disabled: boolean;
  hasPrefix: boolean;
  hasSuffix: boolean;
  fullWidth: boolean;
  extra?: string;
}

export function buildInputClass({
  size,
  variant,
  hasError,
  hasSuccess,
  disabled,
  hasPrefix,
  hasSuffix,
  fullWidth,
  extra,
}: BuildInputClassOptions): string {
  const s = sizeConfig[size];
  const v = variantConfig[variant];

  const stateClass = disabled
    ? v.disabled
    : hasError
      ? `${v.base} ${v.error}`
      : hasSuccess
        ? `${v.base} ${v.success}`
        : `${v.base} ${v.focus}`;

  const prefixPad = hasPrefix && variant !== "ghost" ? "pl-10" : "";
  const suffixPad = hasSuffix && variant !== "ghost" ? "pr-10" : "";

  return cn(
    "w-full outline-none transition-all duration-150",
    "text-slate-800",
    "placeholder:text-slate-400",
    "disabled:opacity-60",
    s.input,
    s.radius,
    stateClass,
    prefixPad,
    suffixPad,
    fullWidth ? "block" : "block sm:inline-block",
    extra,
  );
}

export function buildLabelClass(
  size: InputSize,
  disabled: boolean,
  extra?: string,
): string {
  return cn(
    "block select-none",
    sizeConfig[size].label,
    disabled && "opacity-50",
    extra,
  );
}
