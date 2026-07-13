import React from "react";

export interface SearchResult {
    id: string;
    label: string;
    [key: string]: unknown;
}

export type SearchStatus = "idle" | "loading" | "success" | "error";

export interface DropdownProps<T extends SearchResult> {
    items: T[];
    id: string;
    error: Error | null;
    status: SearchStatus;
    renderError?: (error: Error) => React.ReactNode;
    renderLoading?: () => React.ReactNode;
    activeIndex: number;
    onSelect: (item: T) => void;
    renderEmpty?: (query: string) => React.ReactNode;
    renderResult?: (item: T, query: string) => React.ReactNode;
    query: string;
    className?: string;
    groupBy?: (item: T) => string;
}

export interface GenericSearchProps<T extends SearchResult> {
    value?: string;
    defaultValue?: string;
    onSearch?: (query: string) => void | Promise<T[]>;
    onSelect?: (item: T) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onClear?: () => void;
    onChange?: (value: string) => void;
    placeholder?: string;
    debounceMs?: number;
    minChars?: number;
    maxResults?: number;
    size?: "sm" | "md" | "lg";
    showIcon?: boolean;
    showClear?: boolean;
    showRecentSearches?: boolean;
    recentSearches?: T[];
    renderResult?: (item: T, query: string) => React.ReactNode;
    renderEmpty?: (query: string) => React.ReactNode;
    renderLoading?: () => React.ReactNode;
    renderError?: (error: Error) => React.ReactNode;
    groupBy?: (item: T) => string;
    filterResults?: (item: T) => boolean;
    className?: string;
    inputClassName?: string;
    dropdownClassName?: string;
    disabled?: boolean;
    autoFocus?: boolean;
    ariaLabel?: string;
    id?: string;
}

export interface GenericSearchHandle {
    focus: () => void;
    blur: () => void;
    clear: () => void;
    getValue: () => string;
}
