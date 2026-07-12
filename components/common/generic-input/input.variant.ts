//input.variant.ts
import { InputVariant } from "@/types/inputType";

export const variantConfig: Record<
  InputVariant,
  {
    base: string;
    focus: string;
    error: string;
    success: string;
    disabled: string;
  }
> = {
  outlined: {
    base: "border bg-blue10 border-borderColor/18",
    focus: "focus:border-violet-500 focus:ring-0 dark:focus:border-violet-400",
    error:
      "border-red-400 focus:border-red-500 focus:ring-red-500/20 dark:border-red-500",
    success:
      "border-emerald-400 focus:border-emerald-500 focus:ring-emerald-500/20",
    disabled: "border-slate-200 cursor-not-allowed dark:border-slate-700",
  },
  filled: {
    base: "border border-transparent bg-white hadow-sm",
    focus:
      "focus:bg-white focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 ",
    error:
      "bg-red-50 border-red-400 focus:border-red-500 focus:ring-red-500/20 dark:bg-red-900/20 dark:border-red-500",
    success:
      "bg-emerald-50 border-emerald-400 focus:border-emerald-500 focus:ring-emerald-500/20",
    disabled: " cursor-not-allowed opacity-60 ",
  },
  ghost: {
    base: "border-b border-slate-300 bg-transparent rounded-none px-0 dark:border-slate-600",
    focus: "focus:border-violet-500 focus:ring-0 dark:focus:border-violet-400",
    error: "border-red-400 focus:border-red-500 dark:border-red-500",
    success: "border-emerald-400 focus:border-emerald-500",
    disabled:
      "border-slate-200 cursor-not-allowed opacity-60 dark:border-slate-700",
  },
};
