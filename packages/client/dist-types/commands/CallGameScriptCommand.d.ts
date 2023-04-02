import { Request } from "../core/Request";
import { BaseCommand, ServiceName } from "./BaseCommand";
export declare class CallGameScriptCommand<T = any> extends BaseCommand<T> {
    protected serviceName: ServiceName;
    constructor(scriptName: string, functionName: string, param?: T, classProtobuf?: any);
    getRequest(): Request;
}
