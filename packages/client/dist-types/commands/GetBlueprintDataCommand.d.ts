import { BaseCommand, ServiceName } from "./BaseCommand";
export declare class GetBlueprintDataCommand<T> extends BaseCommand<T> {
    protected serviceName: ServiceName;
    constructor(dataName: string);
}
