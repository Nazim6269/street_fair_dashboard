import { useCallback, useEffect, useState, RefObject } from "react";

interface UseKeyboardNavOptions {
    isOpen: boolean;
    itemCount: number;
    onSelect: (index: number) => void;
    onClose: () => void;
    inputRef: RefObject<HTMLInputElement | null>;
}

export function useKeyboardNav({
    isOpen,
    itemCount,
    onSelect,
    onClose,
    inputRef,
}: UseKeyboardNavOptions) {
    const [activeIndex, setActiveIndex] = useState(-1);

    const resetIndex = useCallback(() => setActiveIndex(-1), []);

    useEffect(() => {
        if (!isOpen) {
            setActiveIndex(-1);
            return;
        }

        const handleKeyDown = (e: KeyboardEvent) => {
            switch (e.key) {
                case "ArrowDown":
                    e.preventDefault();
                    setActiveIndex((prev) => (prev + 1) % itemCount);
                    break;
                case "ArrowUp":
                    e.preventDefault();
                    setActiveIndex((prev) => (prev - 1 + itemCount) % itemCount);
                    break;
                case "Enter":
                    e.preventDefault();
                    if (activeIndex >= 0) onSelect(activeIndex);
                    break;
                case "Escape":
                    e.preventDefault();
                    onClose();
                    break;
            }
        };

        inputRef.current?.addEventListener("keydown", handleKeyDown);
        return () => inputRef.current?.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, itemCount, activeIndex, onSelect, onClose, inputRef]);

    return { activeIndex, resetIndex };
}
