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

export type ServiceInitParam = {
  gameId: string;
  gameVersion?: string;
  apiType?: APIType;
  environment?: Environment;
  enableLog?: boolean;
};
export class OnlineServiceManager {
  private baseURL = new Map<string, string>([
    ["LOCAL", "http://localhost:3000"],
    ["DEVELOPMENT", "https://dev.api.1bservices.com"],
    ["PRODUCTION", "https://api.1bservices.com"],
  ]);
  private static instance: OnlineServiceManager;
  private accessToken?: string | null;
  private serializationOption!: ISerializationOption;

  private gameId!: string;
  private environment!: Environment;
  private gameVersion!: string;
  private apiType!: APIType;

  public enableLog!: boolean;

  private constructor() {
    if (OnlineServiceManager.instance) {
      return OnlineServiceManager.instance;
    }
    OnlineServiceManager.instance = this;
  }

  public static getInstance(): OnlineServiceManager {
    if (!OnlineServiceManager.instance) {
      OnlineServiceManager.instance = new OnlineServiceManager();
    }

    return OnlineServiceManager.instance;
  }

  public init(param: ServiceInitParam) {
    this.gameId = param.gameId;
    this.gameVersion = param.gameVersion ?? "";
    this.environment = param.environment ?? Environment.DEVELOPMENT;
    this.enableLog = param.enableLog ?? false;
    this.apiType = param.apiType ?? APIType.JSON;
    this.accessToken = "";
    if (this.apiType === APIType.JSON) {
      this.serializationOption = new JsonSerializationOption();
    } else {
      this.serializationOption = new ProtoSerializationOption();
    }
  }
  public async send<TResponseType>(cmd: ICommand, classMessage?: any) {
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
      },
    });
    if (response.ok) {
      const responseData = this.apiType === APIType.JSON ? await response.text() : await response.buffer();
      if (this.enableLog) {
        console.log("Response:", responseData);
      }
      return this.serializationOption.Deserialize<TResponseType>(responseData, classMessage);
    } else {
      const errorMsg = await response.json();
      console.log("Error:", errorMsg);
      return undefined as TResponseType;
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
