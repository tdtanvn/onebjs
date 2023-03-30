export class RequestException {
    constructor(error) {
        this.message = error.message;
        this.statusCode = error.statusCode;
        this.error = error.error;
    }
}
