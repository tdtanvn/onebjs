import { RequestVerb } from "../../core/Request";
import { BaseCommand, ServiceName } from "../BaseCommand";
export class ClaimInboxCommand extends BaseCommand {
    constructor(param, classProtobuf) {
        super();
        this.serviceName = ServiceName.INBOX;
        this.name = "claimItem";
        this.data = param;
        this.classP = classProtobuf;
        this.verb = RequestVerb.POST;
    }
}
