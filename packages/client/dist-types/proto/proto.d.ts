import * as $protobuf from "protobufjs";
import Long = require("long");
export interface IAuthLogin {
    playerId?: (string|null);
    secretKey?: (string|null);
    gameId?: (string|null);
    gameVersion?: (string|null);
    playerName?: (string|null);
    country?: (string|null);
    platform?: (string|null);
}

export class AuthLogin implements IAuthLogin {
    constructor(properties?: IAuthLogin);
    public playerId: string;
    public secretKey: string;
    public gameId: string;
    public gameVersion: string;
    public playerName: string;
    public country: string;
    public platform: string;
    public static create(properties?: IAuthLogin): AuthLogin;
    public static encode(message: IAuthLogin, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IAuthLogin, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AuthLogin;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AuthLogin;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): AuthLogin;
    public static toObject(message: AuthLogin, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export interface IAuthResponse {
    accessToken?: (string|null);
}

export class AuthResponse implements IAuthResponse {
    constructor(properties?: IAuthResponse);
    public accessToken: string;
    public static create(properties?: IAuthResponse): AuthResponse;
    public static encode(message: IAuthResponse, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IAuthResponse, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AuthResponse;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AuthResponse;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): AuthResponse;
    public static toObject(message: AuthResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export interface IProtoMessage {
    service?: (Service|null);
    functionName?: (string|null);
    namespace?: (string|null);
    data?: (number[]|null);
}

export class ProtoMessage implements IProtoMessage {
    constructor(properties?: IProtoMessage);
    public service: Service;
    public functionName: string;
    public namespace: string;
    public data: number[];
    public static create(properties?: IProtoMessage): ProtoMessage;
    public static encode(message: IProtoMessage, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IProtoMessage, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoMessage;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoMessage;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): ProtoMessage;
    public static toObject(message: ProtoMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export enum Service {
    NOT_USE = 0,
    BLUEPRINT = 1,
    PLAYER = 2,
    GAMESCRIPT = 3,
    INBOX = 4,
    LEADERBOARD = 5
}

export enum Method {
    NOT_USE = 0,
    GET = 1,
    POST = 2
}
