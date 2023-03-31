import { BaseCommand, ServiceName } from "../BaseCommand";
export declare class GetTopScoreLeaderboardCommand<T> extends BaseCommand<T> {
    protected serviceName: ServiceName;
    constructor(param?: T, classProtobuf?: any);
}
