export const selectTokens = {
  base: "flex items-center justify-between transition-all duration-200",

  variants: {
    dark: {
      trigger: "bg-surface-base border text-text-muted",
      dropdown: "bg-surface-overlay border border-border-base shadow-xl",
      item: "text-text-base",
      itemHover:
        "hover:bg-si-hover-bg focus:bg-si-hover-bg hover:text-si-hover-text focus:text-si-hover-text rounded-md",
    },
    light: {
      trigger: "bg-purple-50 border border-purple-200 text-[#4C1D95] hover:bg-purple-100",
      dropdown: "bg-white border border-purple-200 shadow-xl",
      item: "text-[#4A4C56]",
      itemHover:
        "hover:bg-purple-50 focus:bg-purple-50 hover:text-[#4C1D95] focus:text-[#4C1D95] rounded-md",
    },
  },

  sizes: {
    sm: "h-8 px-2 text-xs ",
    md: "h-10 px-3 text-sm ",
    lg: "p-3 h-9 text-sm ",
    xlg: "p-4 h-12 text-sm ",
  },

  radius: {
    sm: "rounded-md",
    md: "rounded-lg",
    lg: "rounded-xl",
  },
};
