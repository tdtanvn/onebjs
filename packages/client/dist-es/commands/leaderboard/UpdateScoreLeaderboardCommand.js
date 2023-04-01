import { RequestVerb } from "../../core/Request";
import { UpdateScoreLeaderboardInput } from "../../proto/proto";
import { BaseCommand, ServiceName } from "../BaseCommand";
export class UpdateScoreLeaderboardCommand extends BaseCommand {
    constructor(param, classProtobuf = UpdateScoreLeaderboardInput) {
        super();
        this.serviceName = ServiceName.LEADERBOARD;
        this.name = "updateScore";
        this.data = param;
        this.classP = classProtobuf;
        this.verb = RequestVerb.POST;
    }
}
