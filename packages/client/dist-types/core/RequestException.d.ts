export type IRequestException = {
    statusCode?: number;
    message?: string | string[];
    error?: string;
};
export declare class RequestException {
    statusCode?: number;
    message?: string | string[];
    error?: string;
    constructor(error: IRequestException);
}
