import { RequestVerb } from "../../core/Request";
import { UpdateScoreLeaderboardInput } from "../../proto/proto";
import { IUpdateScoreLeaderboardInput } from "../../proto/proto";
import { BaseCommand, ServiceName } from "../BaseCommand";

export class UpdateScoreLeaderboardCommand<T = IUpdateScoreLeaderboardInput> extends BaseCommand<T> {
  protected serviceName: ServiceName = ServiceName.LEADERBOARD;

  constructor(param?: T, classProtobuf: any = UpdateScoreLeaderboardInput) {
    super();
    this.name = "UpdateScore";
    this.data = param;
    this.classP = classProtobuf;
    this.verb = RequestVerb.POST;
  }
}
