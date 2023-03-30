"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetInboxCommand = void 0;
const Request_1 = require("../core/Request");
const BaseCommand_1 = require("./BaseCommand");
class GetInboxCommand extends BaseCommand_1.BaseCommand {
    constructor(scriptName, functionName, param, classProtobuf) {
        super();
        this.serviceName = BaseCommand_1.ServiceName.INBOX;
        this.namespace = scriptName;
        this.name = functionName;
        this.verb = Request_1.RequestVerb.POST;
        this.data = param;
        this.classP = classProtobuf;
    }
    getRequest() {
        const request = super.getRequest();
        request.param = `${this.namespace}/${this.name}`;
        return request;
    }
}
exports.GetInboxCommand = GetInboxCommand;
