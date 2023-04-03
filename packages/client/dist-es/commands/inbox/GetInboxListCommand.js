import { BaseCommand, ServiceName } from "../BaseCommand";
export class GetInboxListCommand extends BaseCommand {
    constructor(classProtobuf) {
        super();
        this.serviceName = ServiceName.INBOX;
        this.name = "GetInfo";
        this.classP = classProtobuf;
    }
}
