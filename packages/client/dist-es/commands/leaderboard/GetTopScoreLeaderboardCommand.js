import { RequestVerb } from "../../core/Request";
import { GetTopLeaderboardInput } from "../../proto/proto";
import { BaseCommand, ServiceName } from "../BaseCommand";
export class GetTopScoreLeaderboardCommand extends BaseCommand {
    constructor(param, classProtobuf = GetTopLeaderboardInput) {
        super();
        this.serviceName = ServiceName.LEADERBOARD;
        this.name = "GetTopScore";
        this.data = param;
        this.classP = classProtobuf;
        this.verb = RequestVerb.POST;
    }
}
