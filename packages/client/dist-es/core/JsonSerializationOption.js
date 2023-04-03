export class JsonSerializationOption {
    constructor() {
        this.ContentType = "application/json";
    }
    Deserialize(text) {
        return text ? JSON.parse(text) : undefined;
    }
}
