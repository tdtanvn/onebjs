export class ProtoSerializationOption {
    constructor() {
        this.ContentType = "application/octet-stream";
        this.decodeOptions = {
            longs: Number,
            enums: Number,
            bytes: Number,
        };
    }
    Deserialize(data, messageClass) {
        const decodedMessage = messageClass.decode(data);
        const result = messageClass.toObject(decodedMessage, this.decodeOptions);
        return result;
    }
}
