"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClaimInboxCommand = void 0;
const BaseCommand_1 = require("../BaseCommand");
class ClaimInboxCommand extends BaseCommand_1.BaseCommand {
    constructor(param, classProtobuf) {
        super();
        this.serviceName = BaseCommand_1.ServiceName.INBOX;
        this.name = "claim";
        this.data = param;
        this.classP = classProtobuf;
    }
}
exports.ClaimInboxCommand = ClaimInboxCommand;
