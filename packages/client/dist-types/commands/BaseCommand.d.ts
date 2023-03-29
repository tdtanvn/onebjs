import { ICommand } from "../core/ICommand";
import { Request, RequestVerb } from "../core/Request";
import { Service } from "../proto/proto";
export declare enum ServiceName {
    "PLAYER" = "player",
    "BLUEPRINT" = "blueprint",
    "GAMESCRIPT" = "gamescript",
    "AUTH" = "auth"
}
export declare enum Prefix {
    "GET" = "Get",
    "UPDATE" = "Update"
}
export declare abstract class BaseCommand<T> implements ICommand {
    protected serviceName: ServiceName;
    protected services: Map<ServiceName, Service>;
    protected namespace?: string;
    protected name: string;
    protected verb: RequestVerb;
    protected data?: T | number[];
    protected classP?: any;
    protected prefix?: Prefix;
    getRequest(): Request;
    getBinRequest(): Request;
}
