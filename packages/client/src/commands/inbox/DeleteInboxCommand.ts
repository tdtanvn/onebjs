import { RequestVerb } from "../../core/Request";
import { BaseCommand, ServiceName } from "../BaseCommand";

export class DeleteInboxCommand<T> extends BaseCommand<T> {
  protected serviceName: ServiceName = ServiceName.INBOX;

  constructor(param?: T, classProtobuf?: any) {
    super();
    this.name = "markdelete";
    this.data = param;
    this.classP = classProtobuf;
    this.verb = RequestVerb.POST;
  }
}
