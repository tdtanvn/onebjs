"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Request = exports.RequestVerb = void 0;
var RequestVerb;
(function (RequestVerb) {
    RequestVerb["GET"] = "GET";
    RequestVerb["POST"] = "POST";
    RequestVerb["PUT"] = "PUT";
    RequestVerb["DELETE"] = "DELETE";
})(RequestVerb = exports.RequestVerb || (exports.RequestVerb = {}));
class Request {
    constructor() {
        this.param = "";
        this.verb = RequestVerb.GET;
    }
}
exports.Request = Request;
