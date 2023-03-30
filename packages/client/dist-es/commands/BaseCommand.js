import { Request, RequestVerb } from "../core/Request";
import { ProtoMessage, Service } from "../proto/proto";
export var ServiceName;
(function (ServiceName) {
    ServiceName["PLAYER"] = "player";
    ServiceName["BLUEPRINT"] = "blueprint";
    ServiceName["GAMESCRIPT"] = "gamescript";
    ServiceName["AUTH"] = "auth";
    ServiceName["INBOX"] = "inbox";
    ServiceName["LEADERBOARD"] = "leaderboard";
})(ServiceName || (ServiceName = {}));
export var Prefix;
(function (Prefix) {
    Prefix["GET"] = "Get";
    Prefix["UPDATE"] = "Update";
})(Prefix || (Prefix = {}));
export class BaseCommand {
    constructor() {
        this.services = new Map([
            [ServiceName.PLAYER, Service.PLAYER],
            [ServiceName.BLUEPRINT, Service.BLUEPRINT],
            [ServiceName.GAMESCRIPT, Service.GAMESCRIPT],
            [ServiceName.INBOX, Service.INBOX],
            [ServiceName.LEADERBOARD, Service.LEADERBOARD]
        ]);
        this.verb = RequestVerb.GET;
    }
    getRequest() {
        const request = new Request();
        request.service = this.serviceName;
        request.verb = this.verb;
        request.param = this.name;
        request.body = this.data ? JSON.stringify(this.data) : JSON.stringify({});
        return request;
    }
    getBinRequest() {
        const request = new Request();
        request.verb = RequestVerb.POST;
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
        const protoMsg = ProtoMessage.create(rawJson);
        console.log(protoMsg);
        const buffer = ProtoMessage.encode(protoMsg).finish();
        request.body = buffer;
        return request;
    }
}
