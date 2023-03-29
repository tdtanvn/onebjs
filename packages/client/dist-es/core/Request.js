export var RequestVerb;
(function (RequestVerb) {
    RequestVerb["GET"] = "GET";
    RequestVerb["POST"] = "POST";
    RequestVerb["PUT"] = "PUT";
    RequestVerb["DELETE"] = "DELETE";
})(RequestVerb || (RequestVerb = {}));
export class Request {
    constructor() {
        this.param = "";
        this.verb = RequestVerb.GET;
    }
}
