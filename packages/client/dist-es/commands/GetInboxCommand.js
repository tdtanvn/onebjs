import { RequestVerb } from "../core/Request";
import { BaseCommand, ServiceName } from "./BaseCommand";
export class GetInboxCommand extends BaseCommand {
    constructor(scriptName, functionName, param, classProtobuf) {
        super();
        this.serviceName = ServiceName.INBOX;
        this.namespace = scriptName;
        this.name = functionName;
        this.verb = RequestVerb.POST;
        this.data = param;
        this.classP = classProtobuf;
    }
    getRequest() {
        const request = super.getRequest();
        request.param = `${this.namespace}/${this.name}`;
        return request;
    }
}
