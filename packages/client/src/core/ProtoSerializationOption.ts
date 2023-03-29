import { ISerializationOption } from "./ISerializationOption";

export class ProtoSerializationOption implements ISerializationOption {
  ContentType: string = "application/octet-stream";
  decodeOptions = {
    longs: Number,
    enums: Number,
    bytes: Number,
  };
  Deserialize<T>(data: Buffer, messageClass: any): T {
    const decodedMessage = messageClass.decode(data);
    const result = messageClass.toObject(decodedMessage, this.decodeOptions);
    return result as T;
  }
}
