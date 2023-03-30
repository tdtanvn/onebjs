"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetInboxListCommand = void 0;
const BaseCommand_1 = require("../BaseCommand");
class GetInboxListCommand extends BaseCommand_1.BaseCommand {
    constructor(classProtobuf) {
        super();
        this.serviceName = BaseCommand_1.ServiceName.INBOX;
        this.name = "me";
        this.classP = classProtobuf;
    }
}
exports.GetInboxListCommand = GetInboxListCommand;
