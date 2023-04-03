import { ISerializationOption } from "./ISerializationOption";

export class JsonSerializationOption implements ISerializationOption {
  ContentType: string = "application/json";
  Deserialize<T>(text: string): T {
    return text ? (JSON.parse(text) as T) : (undefined as any);
  }
}
