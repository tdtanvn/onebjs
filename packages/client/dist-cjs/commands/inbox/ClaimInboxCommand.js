"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClaimInboxCommand = void 0;
const Request_1 = require("../../core/Request");
const BaseCommand_1 = require("../BaseCommand");
class ClaimInboxCommand extends BaseCommand_1.BaseCommand {
    constructor(param, classProtobuf) {
        super();
        this.serviceName = BaseCommand_1.ServiceName.INBOX;
        this.name = "claimItem";
        this.data = param;
        this.classP = classProtobuf;
        this.verb = Request_1.RequestVerb.POST;
    }
}
exports.ClaimInboxCommand = ClaimInboxCommand;
