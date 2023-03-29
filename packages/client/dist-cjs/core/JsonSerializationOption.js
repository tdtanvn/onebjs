"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonSerializationOption = void 0;
class JsonSerializationOption {
    constructor() {
        this.ContentType = "application/json";
    }
    Deserialize(text) {
        return JSON.parse(text);
    }
}
exports.JsonSerializationOption = JsonSerializationOption;
