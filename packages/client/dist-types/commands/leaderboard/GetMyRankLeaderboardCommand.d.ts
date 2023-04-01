import { IGetMyRankLeaderboardInput } from "../../proto/proto";
import { BaseCommand, ServiceName } from "../BaseCommand";
export declare class GetMyRankLeaderboardCommand<T = IGetMyRankLeaderboardInput> extends BaseCommand<T> {
    protected serviceName: ServiceName;
    constructor(param?: T, classProtobuf?: any);
}
