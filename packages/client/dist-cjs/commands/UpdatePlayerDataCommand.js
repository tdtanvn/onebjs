"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePlayerDataCommand = void 0;
const Request_1 = require("../core/Request");
const BaseCommand_1 = require("./BaseCommand");
class UpdatePlayerDataCommand extends BaseCommand_1.BaseCommand {
    constructor(dataName, data, classProtobuf) {
        super();
        this.serviceName = BaseCommand_1.ServiceName.PLAYER;
        this.name = dataName;
        this.data = data;
        this.verb = Request_1.RequestVerb.POST;
        this.classP = classProtobuf;
        this.prefix = BaseCommand_1.Prefix.UPDATE;
    }
}
exports.UpdatePlayerDataCommand = UpdatePlayerDataCommand;
