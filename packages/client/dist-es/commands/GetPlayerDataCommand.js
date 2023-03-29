import { BaseCommand, Prefix, ServiceName } from "./BaseCommand";
export class GetPlayerDataCommand extends BaseCommand {
    constructor(dataName) {
        super();
        this.serviceName = ServiceName.PLAYER;
        this.name = dataName;
        this.prefix = Prefix.GET;
    }
}
