import { RequestVerb } from "../../core/Request";
import { GetTopLeaderboardInput } from "../../proto/proto";
import { IGetTopLeaderboardInput } from "../../proto/proto";
import { BaseCommand, ServiceName } from "../BaseCommand";

export class GetTopScoreLeaderboardCommand<T = IGetTopLeaderboardInput> extends BaseCommand<T> {
  protected serviceName: ServiceName = ServiceName.LEADERBOARD;

  constructor(param?: T, classProtobuf: any = GetTopLeaderboardInput) {
    super();
    this.name = "getTopScore";
    this.data = param;
    this.classP = classProtobuf;
    this.verb = RequestVerb.POST
  }
}
