import { BaseCommand, ServiceName } from "../BaseCommand";

export class GetInboxListCommand<T> extends BaseCommand<T> {
  protected serviceName: ServiceName = ServiceName.INBOX;

  constructor(classProtobuf?: any) {
    super();
    this.name = 'me';
    this.classP = classProtobuf;
  }
}
