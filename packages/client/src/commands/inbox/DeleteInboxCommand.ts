import { RequestVerb } from "../../core/Request";
import { InboxDeleteInput } from "../../proto/proto";
import { IInboxDeleteInput } from "../../proto/proto";
import { BaseCommand, ServiceName } from "../BaseCommand";

export class DeleteInboxCommand<T = IInboxDeleteInput> extends BaseCommand<T> {
  protected serviceName: ServiceName = ServiceName.INBOX;

  constructor(param?: T, classProtobuf: any = InboxDeleteInput) {
    super();
    this.name = "markDeleteItem";
    this.data = param;
    this.classP = classProtobuf;
    this.verb = RequestVerb.POST;
  }
}
