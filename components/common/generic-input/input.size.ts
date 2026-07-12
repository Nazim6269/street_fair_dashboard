import { InputSize } from "@/types/inputType";

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
    input: "h-12 px-4.5 py-3.5 text-sm",
    label: "text-xs font-medium mb-0.5",
    helper: "text-[11px] mt-0.5",
    icon: "w-3.5 h-3.5",
    iconPad: "px-2",
    radius: "rounded-md",
  },
  xsm: {
    input: "h-10 px-3.5 py-3.3 text-sm",
    label: "text-xs font-medium mb-0.5",
    helper: "text-[11px] mt-0.5",
    icon: "w-3.5 h-3.5",
    iconPad: "px-2",
    radius: "rounded-md",
  },
};
