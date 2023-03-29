"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAuthTokenCommand = void 0;
const Request_1 = require("../core/Request");
const BaseCommand_1 = require("./BaseCommand");
class GetAuthTokenCommand extends BaseCommand_1.BaseCommand {
    constructor(authTokenInput, classProtobuf) {
        super();
        this.serviceName = BaseCommand_1.ServiceName.AUTH;
        this.classP = classProtobuf;
        this.data = authTokenInput;
        this.name = "login";
        this.verb = Request_1.RequestVerb.POST;
    }
    getBinRequest() {
        const request = super.getBinRequest();
        request.param = "token";
        return request;
    }
}
exports.GetAuthTokenCommand = GetAuthTokenCommand;
