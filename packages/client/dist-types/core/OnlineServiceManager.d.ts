import { IAuthLogin } from "../proto/proto";
import { APIType } from "./EAPIType";
import { Environment } from "./EEnvironment";
import { ICommand } from "./ICommand";
export type ServiceInitParam = {
    gameId: string;
    gameVersion?: string;
    apiType?: APIType;
    environment?: Environment;
    enableLog?: boolean;
};
export declare class OnlineServiceManager {
    private baseURL;
    private static instance;
    private accessToken?;
    private serializationOption;
    private gameId;
    private environment;
    private gameVersion;
    private apiType;
    enableLog: boolean;
    private constructor();
    static getInstance(): OnlineServiceManager;
    init(param: ServiceInitParam): void;
    send<TResponseType>(cmd: ICommand, classMessage?: any): Promise<TResponseType>;
    login(loginInput: IAuthLogin): Promise<string>;
}
