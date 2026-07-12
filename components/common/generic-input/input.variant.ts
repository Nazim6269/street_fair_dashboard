import type { InputVariant } from "./input.type.d";

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
    base: "border border-slate-300 bg-white",
    focus: "focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20",
    error: "border-red-400 focus:border-red-500 focus:ring-red-500/20",
    success: "border-emerald-400 focus:border-emerald-500 focus:ring-emerald-500/20",
    disabled: "border-slate-300 bg-white cursor-not-allowed opacity-60",
  },
  filled: {
    base: "border border-transparent bg-slate-100 shadow-sm",
    focus: "focus:bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20",
    error: "bg-red-50 border-red-400 focus:border-red-500 focus:ring-red-500/20",
    success: "bg-emerald-50 border-emerald-400 focus:border-emerald-500 focus:ring-emerald-500/20",
    disabled: "cursor-not-allowed opacity-60",
  },
  ghost: {
    base: "border-b border-slate-300 bg-transparent rounded-none px-0",
    focus: "focus:border-purple-500 focus:ring-0",
    error: "border-red-400 focus:border-red-500",
    success: "border-emerald-400 focus:border-emerald-500",
    disabled: "border-slate-200 cursor-not-allowed opacity-60",
  },
};
