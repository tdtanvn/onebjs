"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteInboxCommand = void 0;
const Request_1 = require("../../core/Request");
const proto_1 = require("../../proto/proto");
const BaseCommand_1 = require("../BaseCommand");
class DeleteInboxCommand extends BaseCommand_1.BaseCommand {
    constructor(param, classProtobuf = proto_1.InboxDeleteInput) {
        super();
        this.serviceName = BaseCommand_1.ServiceName.INBOX;
        this.name = "markDeleteItem";
        this.data = param;
        this.classP = classProtobuf;
        this.verb = Request_1.RequestVerb.POST;
    }
}
exports.DeleteInboxCommand = DeleteInboxCommand;
