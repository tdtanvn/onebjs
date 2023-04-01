import { IInboxClaimInput } from "../../proto/proto";
import { BaseCommand, ServiceName } from "../BaseCommand";
export declare class ClaimInboxCommand<T = IInboxClaimInput> extends BaseCommand<T> {
    protected serviceName: ServiceName;
    constructor(param?: T, classProtobuf?: any);
}
