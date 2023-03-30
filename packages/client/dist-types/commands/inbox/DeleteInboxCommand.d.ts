import { BaseCommand, ServiceName } from "../BaseCommand";
export declare class DeleteInboxCommand<T> extends BaseCommand<T> {
    protected serviceName: ServiceName;
    constructor(param?: T, classProtobuf?: any);
}
