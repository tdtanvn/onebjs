"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetBlueprintDataCommand = void 0;
const BaseCommand_1 = require("./BaseCommand");
class GetBlueprintDataCommand extends BaseCommand_1.BaseCommand {
    constructor(dataName) {
        super();
        this.serviceName = BaseCommand_1.ServiceName.BLUEPRINT;
        this.name = dataName;
        this.prefix = BaseCommand_1.Prefix.GET;
    }
}
exports.GetBlueprintDataCommand = GetBlueprintDataCommand;
