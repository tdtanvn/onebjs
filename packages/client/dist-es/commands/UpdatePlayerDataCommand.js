import { RequestVerb } from "../core/Request";
import { BaseCommand, Prefix, ServiceName } from "./BaseCommand";
export class UpdatePlayerDataCommand extends BaseCommand {
    constructor(dataName, data, classProtobuf) {
        super();
        this.serviceName = ServiceName.PLAYER;
        this.name = dataName;
        this.data = data;
        this.verb = RequestVerb.POST;
        this.classP = classProtobuf;
        this.prefix = Prefix.UPDATE;
    }
}
