export declare enum RequestVerb {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE"
}
export declare class Request {
    query: string;
    param: string;
    service: string;
    verb: RequestVerb;
    body: string | Uint8Array;
}
