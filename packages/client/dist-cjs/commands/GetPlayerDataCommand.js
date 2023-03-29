"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPlayerDataCommand = void 0;
const BaseCommand_1 = require("./BaseCommand");
class GetPlayerDataCommand extends BaseCommand_1.BaseCommand {
    constructor(dataName) {
        super();
        this.serviceName = BaseCommand_1.ServiceName.PLAYER;
        this.name = dataName;
        this.prefix = BaseCommand_1.Prefix.GET;
    }
}
exports.GetPlayerDataCommand = GetPlayerDataCommand;
