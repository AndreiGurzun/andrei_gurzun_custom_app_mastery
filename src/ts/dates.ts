export type DateConfig = {
    format?: string;
    from?: string;
    params?: LuxonDateParams;
    local?: boolean;
    zone?: boolean;
    utc?: boolean;
    width?: number;
    height?: number;
    plus?: Record<string, number>;
};

export type LuxonDateParams = {
    zone: string;
};
