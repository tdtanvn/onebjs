import fetch from "node-fetch";
import { GetAuthTokenCommand } from "../commands/GetAuthTokenCommand";
import { AuthLogin, AuthResponse, IAuthLogin, IAuthResponse } from "../proto/proto";
import { APIType } from "./EAPIType";
import { Environment } from "./EEnvironment";
import { ICommand } from "./ICommand";
import { ISerializationOption } from "./ISerializationOption";
import { JsonSerializationOption } from "./JsonSerializationOption";
import { ProtoSerializationOption } from "./ProtoSerializationOption";
import { RequestVerb } from "./Request";
import { RequestException } from "./RequestException";
import http from "node:http";
import https from "node:https";

const httpAgent = new http.Agent({ keepAlive: true });
const httpsAgent = new https.Agent({ keepAlive: true });
const agent = (_parsedURL: URL) => (_parsedURL.protocol == "http:" ? httpAgent : httpsAgent);
const X_API_VERSION = "1";

export type ServiceConfig = {
  gameId: string;
  gameVersion?: string;
  apiType?: APIType;
  environment?: Environment;
  enableLog?: boolean;
};
export class OneBServicesClient {
  private baseURL = new Map<string, string>([
    ["LOCAL", "http://localhost:3000"],
    ["DEVELOPMENT", "https://dev.api.1bservices.com"],
    ["PRODUCTION", "https://api.1bservices.com"],
  ]);
  private accessToken?: string | null;
  private serializationOption!: ISerializationOption;

  private gameId!: string;
  private environment!: Environment;
  private gameVersion!: string;
  private apiType!: APIType;
  public enableLog!: boolean;

  public constructor(config: ServiceConfig) {
    this.gameId = config.gameId;
    this.gameVersion = config.gameVersion ?? "";
    this.environment = config.environment ?? Environment.DEVELOPMENT;
    this.enableLog = config.enableLog ?? false;
    this.apiType = config.apiType ?? APIType.JSON;
    this.accessToken = "";
    if (this.apiType === APIType.JSON) {
      this.serializationOption = new JsonSerializationOption();
    } else {
      this.serializationOption = new ProtoSerializationOption();
    }
  }

  public async send<TResponseType = any>(cmd: ICommand, classMessage?: any) {
    const request = this.apiType === APIType.JSON ? cmd.getRequest() : cmd.getBinRequest();
    const uri = `${this.baseURL.get(this.environment)}/${request.service}/${request.param}`;

    if (this.enableLog) {
      console.log(uri, request);
    }
    const response = await fetch(uri, {
      method: request.verb,
      body: request.verb === RequestVerb.POST ? request.body : undefined,
      headers: {
        "Content-Type": this.serializationOption.ContentType,
        Authorization: `Bearer ${this.accessToken}`,
        "X-API-Version": X_API_VERSION,
      },
      agent,
    });
    if (response.ok) {
      const responseData = this.apiType === APIType.JSON ? await response.text() : await response.buffer();
      if (this.enableLog) {
        console.log("Response:", responseData);
      }
      return this.serializationOption.Deserialize<TResponseType>(responseData, classMessage);
    } else {
      const errorMsg = await response.json();
      if (this.enableLog) {
        console.log("Error:", errorMsg);
      }
      throw new RequestException(errorMsg);
    }
  }
  public async login(loginInput: IAuthLogin) {
    const input = { ...loginInput, gameId: this.gameId, gameVersion: this.gameVersion };
    if (this.apiType === APIType.JSON) {
      const authInfo = await this.send<IAuthResponse>(new GetAuthTokenCommand<IAuthLogin>(input));
      this.accessToken = authInfo.accessToken;
      return this.accessToken;
    } else {
      const authInfo = await this.send<IAuthResponse>(new GetAuthTokenCommand<IAuthLogin>(input, AuthLogin), AuthResponse);
      this.accessToken = authInfo.accessToken;
      return this.accessToken;
    }
  }
}
