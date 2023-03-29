/// <reference types="node" />
export interface ISerializationOption {
    ContentType: string;
    Deserialize<T>(data: string | Buffer, messageClass: any): T;
}
