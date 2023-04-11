import { ICommand } from "../core/ICommand";
import { Request, RequestVerb } from "../core/Request";
import { IProtoMessage, ProtoMessage, Service } from "../proto/proto";

export enum ServiceName {
  "PLAYER" = "player",
  "BLUEPRINT" = "blueprint",
  "GAMESCRIPT" = "gamescript",
  "AUTH" = "auth",
  "INBOX" = "inbox",
  "LEADERBOARD" = "leaderboard",
}
export enum Prefix {
  "GET" = "Get",
  "UPDATE" = "Update",
}
export abstract class BaseCommand<T> implements ICommand {
  protected serviceName!: ServiceName;
  protected services = new Map<ServiceName, Service>([
    [ServiceName.PLAYER, Service.PLAYER],
    [ServiceName.BLUEPRINT, Service.BLUEPRINT],
    [ServiceName.GAMESCRIPT, Service.GAMESCRIPT],
    [ServiceName.INBOX, Service.INBOX],
    [ServiceName.LEADERBOARD, Service.LEADERBOARD],
  ]);
  protected namespace?: string;
  protected name!: string;
  protected verb: RequestVerb = RequestVerb.GET;
  protected data?: T | number[];
  protected classP?: any;
  protected prefix?: Prefix;
  getRequest(): Request {
    const request = new Request();
    request.service = this.serviceName;
    request.verb = this.verb;
    request.param = this.name;
    request.body = this.data ? JSON.stringify(this.data) : JSON.stringify({});
    return request;
  }
  getBinRequest(): Request {
    const request = new Request();
    request.verb = RequestVerb.POST;
    request.service = "bin";
    const rawJson: IProtoMessage = {
      service: this.services.get(this.serviceName),
      functionName: this.prefix && !this.name.startsWith(this.prefix) ? this.prefix + this.name : this.name,
      namespace: this.namespace,
    };
    if (this.classP) {
      const err = this.classP.verify(this.data);
      if (err) throw Error(err);
      const dataMsg = this.classP.create(this.data);
      const dataBuffer = this.classP.encode(dataMsg).finish();
      rawJson.data = dataBuffer;
    } else {
      rawJson.data = this.data as Uint8Array;
    }
    const protoMsg = ProtoMessage.create(rawJson);
    const buffer = ProtoMessage.encode(protoMsg).finish();
    request.body = buffer;
    return request;
  }
}
