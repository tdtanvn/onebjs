"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateScoreLeaderboardCommand = void 0;
const Request_1 = require("../../core/Request");
const BaseCommand_1 = require("../BaseCommand");
class UpdateScoreLeaderboardCommand extends BaseCommand_1.BaseCommand {
    constructor(param, classProtobuf) {
        super();
        this.serviceName = BaseCommand_1.ServiceName.LEADERBOARD;
        this.name = "updateScore";
        this.data = param;
        this.classP = classProtobuf;
        this.verb = Request_1.RequestVerb.POST;
    }
}
exports.UpdateScoreLeaderboardCommand = UpdateScoreLeaderboardCommand;
