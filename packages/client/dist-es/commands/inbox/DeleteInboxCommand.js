import { RequestVerb } from "../../core/Request";
import { InboxDeleteInput } from "../../proto/proto";
import { BaseCommand, ServiceName } from "../BaseCommand";
export class DeleteInboxCommand extends BaseCommand {
    constructor(param, classProtobuf = InboxDeleteInput) {
        super();
        this.serviceName = ServiceName.INBOX;
        this.name = "MarkDeleteItem";
        this.data = param;
        this.classP = classProtobuf;
        this.verb = RequestVerb.POST;
    }
}
