import { RequestVerb } from "../../core/Request";
import { GetMyRankLeaderboardInput } from "../../proto/proto";
import { IGetMyRankLeaderboardInput } from "../../proto/proto";
import { BaseCommand, ServiceName } from "../BaseCommand";

export class GetMyRankLeaderboardCommand<T = IGetMyRankLeaderboardInput> extends BaseCommand<T> {
  protected serviceName: ServiceName = ServiceName.LEADERBOARD;

  constructor(param?: T, classProtobuf: any = GetMyRankLeaderboardInput) {
    super();
    this.name = "getMyRank";
    this.data = param;
    this.classP = classProtobuf;
    this.verb = RequestVerb.POST;
  }
}
