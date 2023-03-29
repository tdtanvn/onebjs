/// <reference types="node" />
import { ISerializationOption } from "./ISerializationOption";
export declare class ProtoSerializationOption implements ISerializationOption {
    ContentType: string;
    decodeOptions: {
        longs: NumberConstructor;
        enums: NumberConstructor;
        bytes: NumberConstructor;
    };
    Deserialize<T>(data: Buffer, messageClass: any): T;
}
