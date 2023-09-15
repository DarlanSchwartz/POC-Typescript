export declare const ErrorType: {
    CONFLICT: string;
    NOT_FOUND: string;
    UNPROCESSABLE: string;
    BAD_REQUEST: string;
    INTERNAL: string;
};
export declare class CustomError extends Error {
    type: string;
    constructor(type: string, message: string);
}
