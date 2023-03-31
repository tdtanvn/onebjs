"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMyRankLeaderboardCommand = void 0;
const Request_1 = require("../../core/Request");
const BaseCommand_1 = require("../BaseCommand");
class GetMyRankLeaderboardCommand extends BaseCommand_1.BaseCommand {
    constructor(param, classProtobuf) {
        super();
        this.serviceName = BaseCommand_1.ServiceName.LEADERBOARD;
        this.name = "getMyRank";
        this.data = param;
        this.classP = classProtobuf;
        this.verb = Request_1.RequestVerb.POST;
    }
}
exports.GetMyRankLeaderboardCommand = GetMyRankLeaderboardCommand;
