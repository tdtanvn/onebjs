import { BaseCommand, ServiceName } from "./BaseCommand";
export declare class GetPlayerDataCommand<T> extends BaseCommand<T> {
    protected serviceName: ServiceName;
    constructor(dataName: string);
}
