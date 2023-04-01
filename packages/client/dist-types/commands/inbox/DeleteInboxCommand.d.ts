import { IInboxDeleteInput } from "../../proto/proto";
import { BaseCommand, ServiceName } from "../BaseCommand";
export declare class DeleteInboxCommand<T = IInboxDeleteInput> extends BaseCommand<T> {
    protected serviceName: ServiceName;
    constructor(param?: T, classProtobuf?: any);
}
