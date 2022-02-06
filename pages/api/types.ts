type Status = {
    code: number;
    success: boolean;
}

export type StatusEPResponse = {
    status: Status;
    message?: string;
    error?: TypeError | null;
    cause?: any;
}