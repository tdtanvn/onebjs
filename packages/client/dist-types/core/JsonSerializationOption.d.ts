import { ISerializationOption } from "./ISerializationOption";
export declare class JsonSerializationOption implements ISerializationOption {
    ContentType: string;
    Deserialize<T>(text: string): T;
}
