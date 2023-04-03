import { RequestVerb } from "../../core/Request";
import { GetMyRankLeaderboardInput } from "../../proto/proto";
import { BaseCommand, ServiceName } from "../BaseCommand";
export class GetMyRankLeaderboardCommand extends BaseCommand {
    constructor(param, classProtobuf = GetMyRankLeaderboardInput) {
        super();
        this.serviceName = ServiceName.LEADERBOARD;
        this.name = "GetMyRank";
        this.data = param;
        this.classP = classProtobuf;
        this.verb = RequestVerb.POST;
    }
}
