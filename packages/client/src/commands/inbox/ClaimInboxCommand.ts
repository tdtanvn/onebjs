import { BaseCommand, ServiceName } from "../BaseCommand";

export class ClaimInboxCommand<T> extends BaseCommand<T> {
  protected serviceName: ServiceName = ServiceName.INBOX;

  constructor(param?: T, classProtobuf?: any) {
    super();
    this.name = 'claim';
    this.data = param;
    this.classP = classProtobuf;
  }
}
