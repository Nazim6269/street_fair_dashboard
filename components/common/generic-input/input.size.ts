import type { InputSize } from "./input.type.d";

export const sizeConfig: Record<
  InputSize,
  {
    input: string;
    label: string;
    helper: string;
    icon: string;
    iconPad: string;
    radius: string;
  }
> = {
  sm: {
    input: "h-9 px-4 py-3 text-sm",
    label: "text-xs font-medium mb-1",
    helper: "text-[11px] mt-0.5",
    icon: "w-4 h-4",
    iconPad: "px-2",
    radius: "rounded-lg",
  },
  xsm: {
    input: "h-10 px-3.5 py-2.5 text-sm",
    label: "text-xs font-medium mb-1",
    helper: "text-[11px] mt-0.5",
    icon: "w-4 h-4",
    iconPad: "px-2",
    radius: "rounded-lg",
  },
  md: {
    input: "h-12 px-4 py-3 text-sm",
    label: "text-sm font-medium mb-1.5",
    helper: "text-xs mt-0.5",
    icon: "w-5 h-5",
    iconPad: "px-3",
    radius: "rounded-xl",
  },
  lg: {
    input: "h-14 px-5 py-4 text-base",
    label: "text-sm font-medium mb-1.5",
    helper: "text-xs mt-1",
    icon: "w-5 h-5",
    iconPad: "px-3",
    radius: "rounded-xl",
  },
};
