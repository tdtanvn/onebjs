import { Request } from "../core/Request";
import { BaseCommand, ServiceName } from "./BaseCommand";
export declare class GetInboxCommand<T extends T & any> extends BaseCommand<T> {
    protected serviceName: ServiceName;
    data: T & any;
    constructor(scriptName: string, functionName: string, param?: T, classProtobuf?: any);
    getRequest(): Request;
}
