import { RequestVerb } from "../../core/Request";
import { BaseCommand, ServiceName } from "../BaseCommand";
export class GetTopScoreLeaderboardCommand extends BaseCommand {
    constructor(param, classProtobuf) {
        super();
        this.serviceName = ServiceName.LEADERBOARD;
        this.name = "getTopScore";
        this.data = param;
        this.classP = classProtobuf;
        this.verb = RequestVerb.POST;
    }
}
