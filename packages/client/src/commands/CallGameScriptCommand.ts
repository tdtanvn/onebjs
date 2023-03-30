import { Request, RequestVerb } from "../core/Request";
import { BaseCommand, ServiceName } from "./BaseCommand";

export class CallGameScriptCommand<T extends T & any> extends BaseCommand<T> {
  protected serviceName: ServiceName = ServiceName.GAMESCRIPT;
  constructor(scriptName: string, functionName: string, param?: T, classProtobuf?: any) {
    super();
    this.namespace = scriptName;
    this.name = functionName;
    this.verb = RequestVerb.POST;
    this.data = param;
    this.classP = classProtobuf;
  }
  getRequest(): Request {
    const request = super.getRequest();
    request.param = `${this.namespace}/${this.name}`;
    return request;
  }
}
