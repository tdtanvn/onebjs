import { Request } from "../core/Request";
import { BaseCommand, ServiceName } from "./BaseCommand";
export declare class GetAuthTokenCommand<T> extends BaseCommand<T> {
    protected serviceName: ServiceName;
    constructor(authTokenInput: T, classProtobuf?: any);
    getBinRequest(): Request;
}
