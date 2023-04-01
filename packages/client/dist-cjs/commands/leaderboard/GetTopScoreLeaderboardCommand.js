"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTopScoreLeaderboardCommand = void 0;
const Request_1 = require("../../core/Request");
const proto_1 = require("../../proto/proto");
const BaseCommand_1 = require("../BaseCommand");
class GetTopScoreLeaderboardCommand extends BaseCommand_1.BaseCommand {
    constructor(param, classProtobuf = proto_1.GetTopLeaderboardInput) {
        super();
        this.serviceName = BaseCommand_1.ServiceName.LEADERBOARD;
        this.name = "getTopScore";
        this.data = param;
        this.classP = classProtobuf;
        this.verb = Request_1.RequestVerb.POST;
    }
}
exports.GetTopScoreLeaderboardCommand = GetTopScoreLeaderboardCommand;
