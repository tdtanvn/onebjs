import { RequestVerb } from "../core/Request";
import { BaseCommand, Prefix, ServiceName } from "./BaseCommand";

export class UpdatePlayerDataCommand<T> extends BaseCommand<T> {
  protected serviceName: ServiceName = ServiceName.PLAYER;
  constructor(dataName: string, data: T, classProtobuf?: any) {
    super();
    this.name = dataName;
    this.data = data;
    this.verb = RequestVerb.POST;
    this.classP = classProtobuf;
    this.prefix = Prefix.UPDATE;
  }
}
