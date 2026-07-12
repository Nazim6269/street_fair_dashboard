import { sizeConfig } from "@/components/tokens/tokens/input.size";
import { variantConfig } from "@/components/tokens/tokens/input.variant";
import { cn } from "@/components/utils/cn";
import { InputSize, InputVariant } from "@/types/inputType";

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

  // Adjust horizontal padding when prefix/suffix present
  const prefixPad = hasPrefix && variant !== "ghost" ? "pl-9" : "";
  const suffixPad = hasSuffix && variant !== "ghost" ? "pr-9" : "";

  return cn(
    "w-full outline-none transition-all duration-150",
    "text-blue46 ",
    "placeholder:text-grayBlack ",
    "[&::-webkit-datetime-edit]:text-grayBlack",
    "disabled:opacity-60",
    "[&::-webkit-calendar-picker-indicator]:hidden",
    s.input,
    s.radius,
    stateClass,
    prefixPad,
    suffixPad,
    fullWidth ? "block" : "block sm:inline-block",
    extra,
  );
}

// ─── Label class builder ──────────────────────────────────────────────────────

export function buildLabelClass(
  size: InputSize,
  disabled: boolean,
  extra?: string,
): string {
  return cn(
    "block select-none ",
    sizeConfig[size].label,
    disabled && "opacity-50",
    extra,
  );
}
