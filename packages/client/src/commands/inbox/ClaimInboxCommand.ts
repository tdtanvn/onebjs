import { RequestVerb } from "../../core/Request";
import { IInboxClaimInput, InboxClaimInput } from "../../proto/proto";
import { BaseCommand, ServiceName } from "../BaseCommand";

export class ClaimInboxCommand<T = IInboxClaimInput> extends BaseCommand<T> {
  protected serviceName: ServiceName = ServiceName.INBOX;

  constructor(param?: T, classProtobuf: any = InboxClaimInput) {
    super();
    this.name = "claimItem";
    this.data = param;
    this.classP = classProtobuf;
    this.verb = RequestVerb.POST;
  }
}
