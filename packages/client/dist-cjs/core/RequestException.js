"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestException = void 0;
class RequestException {
    constructor(error) {
        this.message = error.message;
        this.statusCode = error.statusCode;
        this.error = error.error;
    }
}
exports.RequestException = RequestException;
