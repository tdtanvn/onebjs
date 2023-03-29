export class JsonSerializationOption {
    constructor() {
        this.ContentType = "application/json";
    }
    Deserialize(text) {
        return JSON.parse(text);
    }
}
