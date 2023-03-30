export type IRequestException = {
    statusCode?: number;
    message?: string;
    error?: string;
};
export declare class RequestException {
    statusCode?: number;
    message?: string;
    error?: string;
    constructor(error: IRequestException);
}
