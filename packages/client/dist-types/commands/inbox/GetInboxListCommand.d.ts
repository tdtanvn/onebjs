import { BaseCommand, ServiceName } from "../BaseCommand";
export declare class GetInboxListCommand<T> extends BaseCommand<T> {
    protected serviceName: ServiceName;
    constructor(classProtobuf?: any);
}
