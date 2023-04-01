import { IGetTopLeaderboardInput } from "../../proto/proto";
import { BaseCommand, ServiceName } from "../BaseCommand";
export declare class GetTopScoreLeaderboardCommand<T = IGetTopLeaderboardInput> extends BaseCommand<T> {
    protected serviceName: ServiceName;
    constructor(param?: T, classProtobuf?: any);
}
