import { IUpdateScoreLeaderboardInput } from "../../proto/proto";
import { BaseCommand, ServiceName } from "../BaseCommand";
export declare class UpdateScoreLeaderboardCommand<T = IUpdateScoreLeaderboardInput> extends BaseCommand<T> {
    protected serviceName: ServiceName;
    constructor(param?: T, classProtobuf?: any);
}
