import { RequestVerb } from "../../core/Request";
import { BaseCommand, ServiceName } from "../BaseCommand";

export class GetTopScoreLeaderboardCommand<T> extends BaseCommand<T> {
  protected serviceName: ServiceName = ServiceName.LEADERBOARD;

  constructor(param?: T, classProtobuf?: any) {
    super();
    this.name = "getTopScore";
    this.data = param;
    this.classP = classProtobuf;
    this.verb = RequestVerb.POST
  }
}
