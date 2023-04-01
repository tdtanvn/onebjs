import { IAuthLogin } from "../proto/proto";
import { APIType } from "./EAPIType";
import { Environment } from "./EEnvironment";
import { ICommand } from "./ICommand";
export type ServiceConfig = {
    gameId: string;
    gameVersion?: string;
    apiType?: APIType;
    environment?: Environment;
    enableLog?: boolean;
};
export declare class OneBServicesClient {
    private baseURL;
    private accessToken?;
    private serializationOption;
    private gameId;
    private environment;
    private gameVersion;
    private apiType;
    private apiVersion;
    enableLog: boolean;
    constructor(config: ServiceConfig);
    send<TResponseType = any>(cmd: ICommand, classMessage?: any): Promise<TResponseType>;
    login(loginInput: IAuthLogin): Promise<string>;
}
