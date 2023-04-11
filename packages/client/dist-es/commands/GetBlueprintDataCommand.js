import { BaseCommand, Prefix, ServiceName } from "./BaseCommand";
export class GetBlueprintDataCommand extends BaseCommand {
    constructor(dataName) {
        super();
        this.serviceName = ServiceName.BLUEPRINT;
        this.name = dataName;
        this.prefix = Prefix.GET;
    }
}
