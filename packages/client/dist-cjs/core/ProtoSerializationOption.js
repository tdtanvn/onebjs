"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtoSerializationOption = void 0;
class ProtoSerializationOption {
    constructor() {
        this.ContentType = "application/octet-stream";
        this.decodeOptions = {
            longs: Number,
            enums: Number,
            bytes: Number,
            arrays: true,
            objects: true
        };
    }
    Deserialize(data, messageClass) {
        const decodedMessage = messageClass.decode(data);
        const result = messageClass.toObject(decodedMessage, this.decodeOptions);
        return result;
    }
}
exports.ProtoSerializationOption = ProtoSerializationOption;
