import { Message, Type } from "protobufjs";
 
export interface ISerializationOption {
  ContentType: string;
  Deserialize<T>(data: string | Buffer, messageClass: any ): T;
}
