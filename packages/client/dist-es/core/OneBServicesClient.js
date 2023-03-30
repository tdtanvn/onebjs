import fetch from "node-fetch";
import { GetAuthTokenCommand } from "../commands/GetAuthTokenCommand";
import { AuthLogin, AuthResponse } from "../proto/proto";
import { APIType } from "./EAPIType";
import { Environment } from "./EEnvironment";
import { JsonSerializationOption } from "./JsonSerializationOption";
import { ProtoSerializationOption } from "./ProtoSerializationOption";
import { RequestVerb } from "./Request";
import { RequestException } from "./RequestException";
export class OneBServicesClient {
    constructor(config) {
        this.baseURL = new Map([
            ["LOCAL", "http://localhost:3000"],
            ["DEVELOPMENT", "https://dev.api.1bservices.com"],
            ["PRODUCTION", "https://api.1bservices.com"],
        ]);
        this.gameId = config.gameId;
        this.gameVersion = config.gameVersion ?? "";
        this.environment = config.environment ?? Environment.DEVELOPMENT;
        this.enableLog = config.enableLog ?? false;
        this.apiType = config.apiType ?? APIType.JSON;
        this.accessToken = "";
        if (this.apiType === APIType.JSON) {
            this.serializationOption = new JsonSerializationOption();
        }
        else {
            this.serializationOption = new ProtoSerializationOption();
        }
    }
    async send(cmd, classMessage) {
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
            return this.serializationOption.Deserialize(responseData, classMessage);
        }
        else {
            const errorMsg = await response.json();
            if (this.enableLog) {
                console.log("Error:", errorMsg);
            }
            throw new RequestException(errorMsg);
        }
    }
    async login(loginInput) {
        const input = { ...loginInput, gameId: this.gameId, gameVersion: this.gameVersion };
        if (this.apiType === APIType.JSON) {
            const authInfo = await this.send(new GetAuthTokenCommand(input));
            this.accessToken = authInfo.accessToken;
            return this.accessToken;
        }
        else {
            const authInfo = await this.send(new GetAuthTokenCommand(input, AuthLogin), AuthResponse);
            this.accessToken = authInfo.accessToken;
            return this.accessToken;
        }
    }
}
