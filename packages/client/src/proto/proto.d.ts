import * as $protobuf from "protobufjs";
import Long = require("long");
/** Properties of a ProtoMessage. */
export interface IProtoMessage {

    /** ProtoMessage service */
    service?: (Service|null);

    /** ProtoMessage functionName */
    functionName?: (string|null);

    /** ProtoMessage namespace */
    namespace?: (string|null);

    /** ProtoMessage data */
    data?: (number[]|null);
}

/** Represents a ProtoMessage. */
export class ProtoMessage implements IProtoMessage {

    /**
     * Constructs a new ProtoMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoMessage);

    /** ProtoMessage service. */
    public service: Service;

    /** ProtoMessage functionName. */
    public functionName: string;

    /** ProtoMessage namespace. */
    public namespace: string;

    /** ProtoMessage data. */
    public data: number[];

    /**
     * Creates a new ProtoMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoMessage instance
     */
    public static create(properties?: IProtoMessage): ProtoMessage;

    /**
     * Encodes the specified ProtoMessage message. Does not implicitly {@link ProtoMessage.verify|verify} messages.
     * @param message ProtoMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoMessage message, length delimited. Does not implicitly {@link ProtoMessage.verify|verify} messages.
     * @param message ProtoMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoMessage;

    /**
     * Decodes a ProtoMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoMessage;

    /**
     * Verifies a ProtoMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoMessage
     */
    public static fromObject(object: { [k: string]: any }): ProtoMessage;

    /**
     * Creates a plain object from a ProtoMessage message. Also converts values to other types if specified.
     * @param message ProtoMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoMessage
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of an AuthLogin. */
export interface IAuthLogin {

    /** AuthLogin playerId */
    playerId?: (string|null);

    /** AuthLogin secretKey */
    secretKey?: (string|null);

    /** AuthLogin gameId */
    gameId?: (string|null);

    /** AuthLogin gameVersion */
    gameVersion?: (string|null);

    /** AuthLogin playerName */
    playerName?: (string|null);

    /** AuthLogin country */
    country?: (string|null);

    /** AuthLogin platform */
    platform?: (string|null);
}

/** Represents an AuthLogin. */
export class AuthLogin implements IAuthLogin {

    /**
     * Constructs a new AuthLogin.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAuthLogin);

    /** AuthLogin playerId. */
    public playerId: string;

    /** AuthLogin secretKey. */
    public secretKey: string;

    /** AuthLogin gameId. */
    public gameId: string;

    /** AuthLogin gameVersion. */
    public gameVersion: string;

    /** AuthLogin playerName. */
    public playerName: string;

    /** AuthLogin country. */
    public country: string;

    /** AuthLogin platform. */
    public platform: string;

    /**
     * Creates a new AuthLogin instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AuthLogin instance
     */
    public static create(properties?: IAuthLogin): AuthLogin;

    /**
     * Encodes the specified AuthLogin message. Does not implicitly {@link AuthLogin.verify|verify} messages.
     * @param message AuthLogin message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAuthLogin, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AuthLogin message, length delimited. Does not implicitly {@link AuthLogin.verify|verify} messages.
     * @param message AuthLogin message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAuthLogin, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AuthLogin message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AuthLogin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AuthLogin;

    /**
     * Decodes an AuthLogin message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AuthLogin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AuthLogin;

    /**
     * Verifies an AuthLogin message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an AuthLogin message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AuthLogin
     */
    public static fromObject(object: { [k: string]: any }): AuthLogin;

    /**
     * Creates a plain object from an AuthLogin message. Also converts values to other types if specified.
     * @param message AuthLogin
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AuthLogin, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AuthLogin to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for AuthLogin
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of an AuthResponse. */
export interface IAuthResponse {

    /** AuthResponse accessToken */
    accessToken?: (string|null);
}

/** Represents an AuthResponse. */
export class AuthResponse implements IAuthResponse {

    /**
     * Constructs a new AuthResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAuthResponse);

    /** AuthResponse accessToken. */
    public accessToken: string;

    /**
     * Creates a new AuthResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AuthResponse instance
     */
    public static create(properties?: IAuthResponse): AuthResponse;

    /**
     * Encodes the specified AuthResponse message. Does not implicitly {@link AuthResponse.verify|verify} messages.
     * @param message AuthResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAuthResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AuthResponse message, length delimited. Does not implicitly {@link AuthResponse.verify|verify} messages.
     * @param message AuthResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAuthResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AuthResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AuthResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AuthResponse;

    /**
     * Decodes an AuthResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AuthResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AuthResponse;

    /**
     * Verifies an AuthResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an AuthResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AuthResponse
     */
    public static fromObject(object: { [k: string]: any }): AuthResponse;

    /**
     * Creates a plain object from an AuthResponse message. Also converts values to other types if specified.
     * @param message AuthResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AuthResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AuthResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for AuthResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Method enum. */
export enum Method {
    NOT_USE_THIS = 0,
    GET = 1,
    POST = 2
}

/** Service enum. */
export enum Service {
    NOT_USE_THIS = 0,
    BLUEPRINT = 1,
    PLAYER = 2,
    GAMESCRIPT = 3
}
