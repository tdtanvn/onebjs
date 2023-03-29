import { BaseCommand, Prefix, ServiceName } from "./BaseCommand";

export class GetPlayerDataCommand<T> extends BaseCommand<T> {
  protected serviceName: ServiceName = ServiceName.PLAYER;
  constructor(dataName: string) {
    super();
    this.name = dataName;
    this.prefix = Prefix.GET;
  }
}
