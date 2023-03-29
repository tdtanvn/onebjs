import { Message } from "protobufjs";
import { Request, RequestVerb } from "../core/Request";
import { BaseCommand, ServiceName } from "./BaseCommand";

export class GetAuthTokenCommand<T> extends BaseCommand<T> {
  protected serviceName: ServiceName = ServiceName.AUTH;
  constructor(authTokenInput: T, classProtobuf?: any) {
    super();
    this.classP = classProtobuf;
    this.data = authTokenInput;
    this.name = "login";
    this.verb = RequestVerb.POST;
  }
  getBinRequest(): Request {
    const request = super.getBinRequest();
    request.param = "token";
    return request;
  }
}
