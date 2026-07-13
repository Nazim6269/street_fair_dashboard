import { useState, useEffect, useRef } from "react";
import { SearchStatus } from "@/types/searchType";

interface UseSearchOptions<T> {
    query: string;
    enabled: boolean;
    onSearch?: (query: string) => void | Promise<T[]>;
    maxResults?: number;
    filterResults?: (item: T) => boolean;
}

interface UseSearchResult<T> {
    results: T[];
    status: SearchStatus;
    error: Error | null;
}

export function useSearch<T>({
    query,
    enabled,
    onSearch,
    maxResults = 50,
    filterResults,
}: UseSearchOptions<T>): UseSearchResult<T> {
    const [results, setResults] = useState<T[]>([]);
    const [status, setStatus] = useState<SearchStatus>("idle");
    const [error, setError] = useState<Error | null>(null);
    const abortRef = useRef<AbortController | null>(null);

    useEffect(() => {
        if (!enabled || !query.trim()) {
            setResults([]);
            setStatus("idle");
            return;
        }

        abortRef.current?.abort();
        const controller = new AbortController();
        abortRef.current = controller;

        setStatus("loading");
        setError(null);

        const run = async () => {
            try {
                const raw = await (onSearch?.(query) ?? []);
                if (controller.signal.aborted) return;
                let filtered = filterResults ? raw.filter(filterResults) : raw;
                if (maxResults) filtered = filtered.slice(0, maxResults);
                setResults(filtered);
                setStatus("success");
            } catch (err) {
                if (controller.signal.aborted) return;
                setError(err instanceof Error ? err : new Error(String(err)));
                setStatus("error");
            }
        };

        run();

        return () => controller.abort();
    }, [query, enabled, onSearch, maxResults, filterResults]);

    return { results, status, error };
}
