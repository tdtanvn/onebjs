import { BaseCommand, ServiceName } from "./BaseCommand";

export class GetBlueprintDataCommand<T> extends BaseCommand<T> {
  protected serviceName: ServiceName = ServiceName.BLUEPRINT;
  constructor(dataName: string) {
    super();
    this.name = dataName;
  }
}
