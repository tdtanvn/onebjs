import { BaseCommand, ServiceName } from "./BaseCommand";
export declare class UpdatePlayerDataCommand<T = any> extends BaseCommand<T> {
    protected serviceName: ServiceName;
    constructor(dataName: string, data: T, classProtobuf?: any);
}
