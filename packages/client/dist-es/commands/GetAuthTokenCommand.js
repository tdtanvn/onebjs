import { RequestVerb } from "../core/Request";
import { BaseCommand, ServiceName } from "./BaseCommand";
export class GetAuthTokenCommand extends BaseCommand {
    constructor(authTokenInput, classProtobuf) {
        super();
        this.serviceName = ServiceName.AUTH;
        this.classP = classProtobuf;
        this.data = authTokenInput;
        this.name = "login";
        this.verb = RequestVerb.POST;
    }
    getBinRequest() {
        const request = super.getBinRequest();
        request.param = "token";
        return request;
    }
}
