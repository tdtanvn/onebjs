import { RequestVerb } from "../../core/Request";
import { BaseCommand, ServiceName } from "../BaseCommand";
export class GetMyRankLeaderboardCommand extends BaseCommand {
    constructor(param, classProtobuf) {
        super();
        this.serviceName = ServiceName.LEADERBOARD;
        this.name = "getMyRank";
        this.data = param;
        this.classP = classProtobuf;
        this.verb = RequestVerb.POST;
    }
}
