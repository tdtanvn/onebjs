"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseCommand = exports.Prefix = exports.ServiceName = void 0;
const Request_1 = require("../core/Request");
const proto_1 = require("../proto/proto");
var ServiceName;
(function (ServiceName) {
    ServiceName["PLAYER"] = "player";
    ServiceName["BLUEPRINT"] = "blueprint";
    ServiceName["GAMESCRIPT"] = "gamescript";
    ServiceName["AUTH"] = "auth";
    ServiceName["INBOX"] = "inbox";
    ServiceName["LEADERBOARD"] = "leaderboard";
})(ServiceName = exports.ServiceName || (exports.ServiceName = {}));
var Prefix;
(function (Prefix) {
    Prefix["GET"] = "Get";
    Prefix["UPDATE"] = "Update";
})(Prefix = exports.Prefix || (exports.Prefix = {}));
class BaseCommand {
    constructor() {
        this.services = new Map([
            [ServiceName.PLAYER, proto_1.Service.PLAYER],
            [ServiceName.BLUEPRINT, proto_1.Service.BLUEPRINT],
            [ServiceName.GAMESCRIPT, proto_1.Service.GAMESCRIPT],
        ]);
        this.verb = Request_1.RequestVerb.GET;
    }
    getRequest() {
        const request = new Request_1.Request();
        request.service = this.serviceName;
        request.verb = this.verb;
        request.param = this.name;
        request.body = this.data ? JSON.stringify(this.data) : JSON.stringify({});
        return request;
    }
    getBinRequest() {
        const request = new Request_1.Request();
        request.verb = Request_1.RequestVerb.POST;
        request.service = "bin";
        const rawJson = {
            service: this.services.get(this.serviceName),
            functionName: this.prefix && !this.name.startsWith(this.prefix) ? this.prefix + this.name : this.name,
            namespace: this.namespace,
        };
        if (this.classP) {
            const err = this.classP.verify(this.data);
            if (err)
                throw Error(err);
            const dataMsg = this.classP.create(this.data);
            const dataBuffer = this.classP.encode(dataMsg).finish();
            rawJson.data = dataBuffer;
        }
        else {
            rawJson.data = this.data;
        }
        const protoMsg = proto_1.ProtoMessage.create(rawJson);
        const buffer = proto_1.ProtoMessage.encode(protoMsg).finish();
        request.body = buffer;
        return request;
    }
}
exports.BaseCommand = BaseCommand;
