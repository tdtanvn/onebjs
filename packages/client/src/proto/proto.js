/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const AuthLogin = $root.AuthLogin = (() => {

    /**
     * Properties of an AuthLogin.
     * @exports IAuthLogin
     * @interface IAuthLogin
     * @property {string|null} [playerId] AuthLogin playerId
     * @property {string|null} [secretKey] AuthLogin secretKey
     * @property {string|null} [gameId] AuthLogin gameId
     * @property {string|null} [gameVersion] AuthLogin gameVersion
     * @property {string|null} [playerName] AuthLogin playerName
     * @property {string|null} [country] AuthLogin country
     * @property {string|null} [platform] AuthLogin platform
     */

    /**
     * Constructs a new AuthLogin.
     * @exports AuthLogin
     * @classdesc Represents an AuthLogin.
     * @implements IAuthLogin
     * @constructor
     * @param {IAuthLogin=} [properties] Properties to set
     */
    function AuthLogin(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AuthLogin playerId.
     * @member {string} playerId
     * @memberof AuthLogin
     * @instance
     */
    AuthLogin.prototype.playerId = "";

    /**
     * AuthLogin secretKey.
     * @member {string} secretKey
     * @memberof AuthLogin
     * @instance
     */
    AuthLogin.prototype.secretKey = "";

    /**
     * AuthLogin gameId.
     * @member {string} gameId
     * @memberof AuthLogin
     * @instance
     */
    AuthLogin.prototype.gameId = "";

    /**
     * AuthLogin gameVersion.
     * @member {string} gameVersion
     * @memberof AuthLogin
     * @instance
     */
    AuthLogin.prototype.gameVersion = "";

    /**
     * AuthLogin playerName.
     * @member {string} playerName
     * @memberof AuthLogin
     * @instance
     */
    AuthLogin.prototype.playerName = "";

    /**
     * AuthLogin country.
     * @member {string} country
     * @memberof AuthLogin
     * @instance
     */
    AuthLogin.prototype.country = "";

    /**
     * AuthLogin platform.
     * @member {string} platform
     * @memberof AuthLogin
     * @instance
     */
    AuthLogin.prototype.platform = "";

    /**
     * Creates a new AuthLogin instance using the specified properties.
     * @function create
     * @memberof AuthLogin
     * @static
     * @param {IAuthLogin=} [properties] Properties to set
     * @returns {AuthLogin} AuthLogin instance
     */
    AuthLogin.create = function create(properties) {
        return new AuthLogin(properties);
    };

    /**
     * Encodes the specified AuthLogin message. Does not implicitly {@link AuthLogin.verify|verify} messages.
     * @function encode
     * @memberof AuthLogin
     * @static
     * @param {IAuthLogin} message AuthLogin message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AuthLogin.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.playerId);
        if (message.secretKey != null && Object.hasOwnProperty.call(message, "secretKey"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.secretKey);
        if (message.gameId != null && Object.hasOwnProperty.call(message, "gameId"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.gameId);
        if (message.gameVersion != null && Object.hasOwnProperty.call(message, "gameVersion"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.gameVersion);
        if (message.playerName != null && Object.hasOwnProperty.call(message, "playerName"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.playerName);
        if (message.country != null && Object.hasOwnProperty.call(message, "country"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.country);
        if (message.platform != null && Object.hasOwnProperty.call(message, "platform"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.platform);
        return writer;
    };

    /**
     * Encodes the specified AuthLogin message, length delimited. Does not implicitly {@link AuthLogin.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AuthLogin
     * @static
     * @param {IAuthLogin} message AuthLogin message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AuthLogin.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AuthLogin message from the specified reader or buffer.
     * @function decode
     * @memberof AuthLogin
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AuthLogin} AuthLogin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AuthLogin.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.AuthLogin();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.playerId = reader.string();
                    break;
                }
            case 2: {
                    message.secretKey = reader.string();
                    break;
                }
            case 3: {
                    message.gameId = reader.string();
                    break;
                }
            case 4: {
                    message.gameVersion = reader.string();
                    break;
                }
            case 5: {
                    message.playerName = reader.string();
                    break;
                }
            case 6: {
                    message.country = reader.string();
                    break;
                }
            case 7: {
                    message.platform = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AuthLogin message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AuthLogin
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AuthLogin} AuthLogin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AuthLogin.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AuthLogin message.
     * @function verify
     * @memberof AuthLogin
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AuthLogin.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.playerId != null && message.hasOwnProperty("playerId"))
            if (!$util.isString(message.playerId))
                return "playerId: string expected";
        if (message.secretKey != null && message.hasOwnProperty("secretKey"))
            if (!$util.isString(message.secretKey))
                return "secretKey: string expected";
        if (message.gameId != null && message.hasOwnProperty("gameId"))
            if (!$util.isString(message.gameId))
                return "gameId: string expected";
        if (message.gameVersion != null && message.hasOwnProperty("gameVersion"))
            if (!$util.isString(message.gameVersion))
                return "gameVersion: string expected";
        if (message.playerName != null && message.hasOwnProperty("playerName"))
            if (!$util.isString(message.playerName))
                return "playerName: string expected";
        if (message.country != null && message.hasOwnProperty("country"))
            if (!$util.isString(message.country))
                return "country: string expected";
        if (message.platform != null && message.hasOwnProperty("platform"))
            if (!$util.isString(message.platform))
                return "platform: string expected";
        return null;
    };

    /**
     * Creates an AuthLogin message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AuthLogin
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AuthLogin} AuthLogin
     */
    AuthLogin.fromObject = function fromObject(object) {
        if (object instanceof $root.AuthLogin)
            return object;
        let message = new $root.AuthLogin();
        if (object.playerId != null)
            message.playerId = String(object.playerId);
        if (object.secretKey != null)
            message.secretKey = String(object.secretKey);
        if (object.gameId != null)
            message.gameId = String(object.gameId);
        if (object.gameVersion != null)
            message.gameVersion = String(object.gameVersion);
        if (object.playerName != null)
            message.playerName = String(object.playerName);
        if (object.country != null)
            message.country = String(object.country);
        if (object.platform != null)
            message.platform = String(object.platform);
        return message;
    };

    /**
     * Creates a plain object from an AuthLogin message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AuthLogin
     * @static
     * @param {AuthLogin} message AuthLogin
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AuthLogin.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.playerId = "";
            object.secretKey = "";
            object.gameId = "";
            object.gameVersion = "";
            object.playerName = "";
            object.country = "";
            object.platform = "";
        }
        if (message.playerId != null && message.hasOwnProperty("playerId"))
            object.playerId = message.playerId;
        if (message.secretKey != null && message.hasOwnProperty("secretKey"))
            object.secretKey = message.secretKey;
        if (message.gameId != null && message.hasOwnProperty("gameId"))
            object.gameId = message.gameId;
        if (message.gameVersion != null && message.hasOwnProperty("gameVersion"))
            object.gameVersion = message.gameVersion;
        if (message.playerName != null && message.hasOwnProperty("playerName"))
            object.playerName = message.playerName;
        if (message.country != null && message.hasOwnProperty("country"))
            object.country = message.country;
        if (message.platform != null && message.hasOwnProperty("platform"))
            object.platform = message.platform;
        return object;
    };

    /**
     * Converts this AuthLogin to JSON.
     * @function toJSON
     * @memberof AuthLogin
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AuthLogin.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for AuthLogin
     * @function getTypeUrl
     * @memberof AuthLogin
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    AuthLogin.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/AuthLogin";
    };

    return AuthLogin;
})();

export const AuthResponse = $root.AuthResponse = (() => {

    /**
     * Properties of an AuthResponse.
     * @exports IAuthResponse
     * @interface IAuthResponse
     * @property {string|null} [accessToken] AuthResponse accessToken
     */

    /**
     * Constructs a new AuthResponse.
     * @exports AuthResponse
     * @classdesc Represents an AuthResponse.
     * @implements IAuthResponse
     * @constructor
     * @param {IAuthResponse=} [properties] Properties to set
     */
    function AuthResponse(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AuthResponse accessToken.
     * @member {string} accessToken
     * @memberof AuthResponse
     * @instance
     */
    AuthResponse.prototype.accessToken = "";

    /**
     * Creates a new AuthResponse instance using the specified properties.
     * @function create
     * @memberof AuthResponse
     * @static
     * @param {IAuthResponse=} [properties] Properties to set
     * @returns {AuthResponse} AuthResponse instance
     */
    AuthResponse.create = function create(properties) {
        return new AuthResponse(properties);
    };

    /**
     * Encodes the specified AuthResponse message. Does not implicitly {@link AuthResponse.verify|verify} messages.
     * @function encode
     * @memberof AuthResponse
     * @static
     * @param {IAuthResponse} message AuthResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AuthResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.accessToken != null && Object.hasOwnProperty.call(message, "accessToken"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.accessToken);
        return writer;
    };

    /**
     * Encodes the specified AuthResponse message, length delimited. Does not implicitly {@link AuthResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AuthResponse
     * @static
     * @param {IAuthResponse} message AuthResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AuthResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AuthResponse message from the specified reader or buffer.
     * @function decode
     * @memberof AuthResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AuthResponse} AuthResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AuthResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.AuthResponse();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.accessToken = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AuthResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AuthResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AuthResponse} AuthResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AuthResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AuthResponse message.
     * @function verify
     * @memberof AuthResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AuthResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.accessToken != null && message.hasOwnProperty("accessToken"))
            if (!$util.isString(message.accessToken))
                return "accessToken: string expected";
        return null;
    };

    /**
     * Creates an AuthResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AuthResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AuthResponse} AuthResponse
     */
    AuthResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.AuthResponse)
            return object;
        let message = new $root.AuthResponse();
        if (object.accessToken != null)
            message.accessToken = String(object.accessToken);
        return message;
    };

    /**
     * Creates a plain object from an AuthResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AuthResponse
     * @static
     * @param {AuthResponse} message AuthResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AuthResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.accessToken = "";
        if (message.accessToken != null && message.hasOwnProperty("accessToken"))
            object.accessToken = message.accessToken;
        return object;
    };

    /**
     * Converts this AuthResponse to JSON.
     * @function toJSON
     * @memberof AuthResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AuthResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for AuthResponse
     * @function getTypeUrl
     * @memberof AuthResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    AuthResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/AuthResponse";
    };

    return AuthResponse;
})();

export const ProtoMessage = $root.ProtoMessage = (() => {

    /**
     * Properties of a ProtoMessage.
     * @exports IProtoMessage
     * @interface IProtoMessage
     * @property {Service|null} [service] ProtoMessage service
     * @property {string|null} [functionName] ProtoMessage functionName
     * @property {string|null} [namespace] ProtoMessage namespace
     * @property {Uint8Array|null} [data] ProtoMessage data
     */

    /**
     * Constructs a new ProtoMessage.
     * @exports ProtoMessage
     * @classdesc Represents a ProtoMessage.
     * @implements IProtoMessage
     * @constructor
     * @param {IProtoMessage=} [properties] Properties to set
     */
    function ProtoMessage(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ProtoMessage service.
     * @member {Service} service
     * @memberof ProtoMessage
     * @instance
     */
    ProtoMessage.prototype.service = 0;

    /**
     * ProtoMessage functionName.
     * @member {string|null|undefined} functionName
     * @memberof ProtoMessage
     * @instance
     */
    ProtoMessage.prototype.functionName = null;

    /**
     * ProtoMessage namespace.
     * @member {string|null|undefined} namespace
     * @memberof ProtoMessage
     * @instance
     */
    ProtoMessage.prototype.namespace = null;

    /**
     * ProtoMessage data.
     * @member {Uint8Array|null|undefined} data
     * @memberof ProtoMessage
     * @instance
     */
    ProtoMessage.prototype.data = null;

    // OneOf field names bound to virtual getters and setters
    let $oneOfFields;

    /**
     * ProtoMessage _functionName.
     * @member {"functionName"|undefined} _functionName
     * @memberof ProtoMessage
     * @instance
     */
    Object.defineProperty(ProtoMessage.prototype, "_functionName", {
        get: $util.oneOfGetter($oneOfFields = ["functionName"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * ProtoMessage _namespace.
     * @member {"namespace"|undefined} _namespace
     * @memberof ProtoMessage
     * @instance
     */
    Object.defineProperty(ProtoMessage.prototype, "_namespace", {
        get: $util.oneOfGetter($oneOfFields = ["namespace"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * ProtoMessage _data.
     * @member {"data"|undefined} _data
     * @memberof ProtoMessage
     * @instance
     */
    Object.defineProperty(ProtoMessage.prototype, "_data", {
        get: $util.oneOfGetter($oneOfFields = ["data"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new ProtoMessage instance using the specified properties.
     * @function create
     * @memberof ProtoMessage
     * @static
     * @param {IProtoMessage=} [properties] Properties to set
     * @returns {ProtoMessage} ProtoMessage instance
     */
    ProtoMessage.create = function create(properties) {
        return new ProtoMessage(properties);
    };

    /**
     * Encodes the specified ProtoMessage message. Does not implicitly {@link ProtoMessage.verify|verify} messages.
     * @function encode
     * @memberof ProtoMessage
     * @static
     * @param {IProtoMessage} message ProtoMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProtoMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.service != null && Object.hasOwnProperty.call(message, "service"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.service);
        if (message.functionName != null && Object.hasOwnProperty.call(message, "functionName"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.functionName);
        if (message.data != null && Object.hasOwnProperty.call(message, "data"))
            writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.data);
        if (message.namespace != null && Object.hasOwnProperty.call(message, "namespace"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.namespace);
        return writer;
    };

    /**
     * Encodes the specified ProtoMessage message, length delimited. Does not implicitly {@link ProtoMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ProtoMessage
     * @static
     * @param {IProtoMessage} message ProtoMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProtoMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ProtoMessage message from the specified reader or buffer.
     * @function decode
     * @memberof ProtoMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ProtoMessage} ProtoMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProtoMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ProtoMessage();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.service = reader.int32();
                    break;
                }
            case 2: {
                    message.functionName = reader.string();
                    break;
                }
            case 4: {
                    message.namespace = reader.string();
                    break;
                }
            case 3: {
                    message.data = reader.bytes();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ProtoMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ProtoMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ProtoMessage} ProtoMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProtoMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ProtoMessage message.
     * @function verify
     * @memberof ProtoMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ProtoMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        let properties = {};
        if (message.service != null && message.hasOwnProperty("service"))
            switch (message.service) {
            default:
                return "service: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            }
        if (message.functionName != null && message.hasOwnProperty("functionName")) {
            properties._functionName = 1;
            if (!$util.isString(message.functionName))
                return "functionName: string expected";
        }
        if (message.namespace != null && message.hasOwnProperty("namespace")) {
            properties._namespace = 1;
            if (!$util.isString(message.namespace))
                return "namespace: string expected";
        }
        if (message.data != null && message.hasOwnProperty("data")) {
            properties._data = 1;
            if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                return "data: buffer expected";
        }
        return null;
    };

    /**
     * Creates a ProtoMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ProtoMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ProtoMessage} ProtoMessage
     */
    ProtoMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.ProtoMessage)
            return object;
        let message = new $root.ProtoMessage();
        switch (object.service) {
        default:
            if (typeof object.service === "number") {
                message.service = object.service;
                break;
            }
            break;
        case "NOT_USE":
        case 0:
            message.service = 0;
            break;
        case "BLUEPRINT":
        case 1:
            message.service = 1;
            break;
        case "PLAYER":
        case 2:
            message.service = 2;
            break;
        case "GAMESCRIPT":
        case 3:
            message.service = 3;
            break;
        case "INBOX":
        case 4:
            message.service = 4;
            break;
        case "LEADERBOARD":
        case 5:
            message.service = 5;
            break;
        }
        if (object.functionName != null)
            message.functionName = String(object.functionName);
        if (object.namespace != null)
            message.namespace = String(object.namespace);
        if (object.data != null)
            if (typeof object.data === "string")
                $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
            else if (object.data.length >= 0)
                message.data = object.data;
        return message;
    };

    /**
     * Creates a plain object from a ProtoMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ProtoMessage
     * @static
     * @param {ProtoMessage} message ProtoMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ProtoMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.service = options.enums === String ? "NOT_USE" : 0;
        if (message.service != null && message.hasOwnProperty("service"))
            object.service = options.enums === String ? $root.Service[message.service] === undefined ? message.service : $root.Service[message.service] : message.service;
        if (message.functionName != null && message.hasOwnProperty("functionName")) {
            object.functionName = message.functionName;
            if (options.oneofs)
                object._functionName = "functionName";
        }
        if (message.data != null && message.hasOwnProperty("data")) {
            object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            if (options.oneofs)
                object._data = "data";
        }
        if (message.namespace != null && message.hasOwnProperty("namespace")) {
            object.namespace = message.namespace;
            if (options.oneofs)
                object._namespace = "namespace";
        }
        return object;
    };

    /**
     * Converts this ProtoMessage to JSON.
     * @function toJSON
     * @memberof ProtoMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ProtoMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ProtoMessage
     * @function getTypeUrl
     * @memberof ProtoMessage
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ProtoMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ProtoMessage";
    };

    return ProtoMessage;
})();

export const InboxList = $root.InboxList = (() => {

    /**
     * Properties of an InboxList.
     * @exports IInboxList
     * @interface IInboxList
     * @property {Array.<InboxList.IItems>|null} [items] InboxList items
     */

    /**
     * Constructs a new InboxList.
     * @exports InboxList
     * @classdesc Represents an InboxList.
     * @implements IInboxList
     * @constructor
     * @param {IInboxList=} [properties] Properties to set
     */
    function InboxList(properties) {
        this.items = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * InboxList items.
     * @member {Array.<InboxList.IItems>} items
     * @memberof InboxList
     * @instance
     */
    InboxList.prototype.items = $util.emptyArray;

    /**
     * Creates a new InboxList instance using the specified properties.
     * @function create
     * @memberof InboxList
     * @static
     * @param {IInboxList=} [properties] Properties to set
     * @returns {InboxList} InboxList instance
     */
    InboxList.create = function create(properties) {
        return new InboxList(properties);
    };

    /**
     * Encodes the specified InboxList message. Does not implicitly {@link InboxList.verify|verify} messages.
     * @function encode
     * @memberof InboxList
     * @static
     * @param {IInboxList} message InboxList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    InboxList.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.items != null && message.items.length)
            for (let i = 0; i < message.items.length; ++i)
                $root.InboxList.Items.encode(message.items[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified InboxList message, length delimited. Does not implicitly {@link InboxList.verify|verify} messages.
     * @function encodeDelimited
     * @memberof InboxList
     * @static
     * @param {IInboxList} message InboxList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    InboxList.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an InboxList message from the specified reader or buffer.
     * @function decode
     * @memberof InboxList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {InboxList} InboxList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    InboxList.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.InboxList();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.items && message.items.length))
                        message.items = [];
                    message.items.push($root.InboxList.Items.decode(reader, reader.uint32()));
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an InboxList message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof InboxList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {InboxList} InboxList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    InboxList.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an InboxList message.
     * @function verify
     * @memberof InboxList
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    InboxList.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.items != null && message.hasOwnProperty("items")) {
            if (!Array.isArray(message.items))
                return "items: array expected";
            for (let i = 0; i < message.items.length; ++i) {
                let error = $root.InboxList.Items.verify(message.items[i]);
                if (error)
                    return "items." + error;
            }
        }
        return null;
    };

    /**
     * Creates an InboxList message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof InboxList
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {InboxList} InboxList
     */
    InboxList.fromObject = function fromObject(object) {
        if (object instanceof $root.InboxList)
            return object;
        let message = new $root.InboxList();
        if (object.items) {
            if (!Array.isArray(object.items))
                throw TypeError(".InboxList.items: array expected");
            message.items = [];
            for (let i = 0; i < object.items.length; ++i) {
                if (typeof object.items[i] !== "object")
                    throw TypeError(".InboxList.items: object expected");
                message.items[i] = $root.InboxList.Items.fromObject(object.items[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from an InboxList message. Also converts values to other types if specified.
     * @function toObject
     * @memberof InboxList
     * @static
     * @param {InboxList} message InboxList
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    InboxList.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.items = [];
        if (message.items && message.items.length) {
            object.items = [];
            for (let j = 0; j < message.items.length; ++j)
                object.items[j] = $root.InboxList.Items.toObject(message.items[j], options);
        }
        return object;
    };

    /**
     * Converts this InboxList to JSON.
     * @function toJSON
     * @memberof InboxList
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    InboxList.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for InboxList
     * @function getTypeUrl
     * @memberof InboxList
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    InboxList.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/InboxList";
    };

    InboxList.Conditions = (function() {

        /**
         * Properties of a Conditions.
         * @memberof InboxList
         * @interface IConditions
         * @property {string|null} [value] Conditions value
         * @property {string|null} [operator] Conditions operator
         * @property {string|null} [fieldName] Conditions fieldName
         */

        /**
         * Constructs a new Conditions.
         * @memberof InboxList
         * @classdesc Represents a Conditions.
         * @implements IConditions
         * @constructor
         * @param {InboxList.IConditions=} [properties] Properties to set
         */
        function Conditions(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Conditions value.
         * @member {string} value
         * @memberof InboxList.Conditions
         * @instance
         */
        Conditions.prototype.value = "";

        /**
         * Conditions operator.
         * @member {string} operator
         * @memberof InboxList.Conditions
         * @instance
         */
        Conditions.prototype.operator = "";

        /**
         * Conditions fieldName.
         * @member {string} fieldName
         * @memberof InboxList.Conditions
         * @instance
         */
        Conditions.prototype.fieldName = "";

        /**
         * Creates a new Conditions instance using the specified properties.
         * @function create
         * @memberof InboxList.Conditions
         * @static
         * @param {InboxList.IConditions=} [properties] Properties to set
         * @returns {InboxList.Conditions} Conditions instance
         */
        Conditions.create = function create(properties) {
            return new Conditions(properties);
        };

        /**
         * Encodes the specified Conditions message. Does not implicitly {@link InboxList.Conditions.verify|verify} messages.
         * @function encode
         * @memberof InboxList.Conditions
         * @static
         * @param {InboxList.IConditions} message Conditions message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Conditions.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.value);
            if (message.operator != null && Object.hasOwnProperty.call(message, "operator"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.operator);
            if (message.fieldName != null && Object.hasOwnProperty.call(message, "fieldName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.fieldName);
            return writer;
        };

        /**
         * Encodes the specified Conditions message, length delimited. Does not implicitly {@link InboxList.Conditions.verify|verify} messages.
         * @function encodeDelimited
         * @memberof InboxList.Conditions
         * @static
         * @param {InboxList.IConditions} message Conditions message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Conditions.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Conditions message from the specified reader or buffer.
         * @function decode
         * @memberof InboxList.Conditions
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {InboxList.Conditions} Conditions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Conditions.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.InboxList.Conditions();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.value = reader.string();
                        break;
                    }
                case 2: {
                        message.operator = reader.string();
                        break;
                    }
                case 3: {
                        message.fieldName = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Conditions message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof InboxList.Conditions
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {InboxList.Conditions} Conditions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Conditions.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Conditions message.
         * @function verify
         * @memberof InboxList.Conditions
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Conditions.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isString(message.value))
                    return "value: string expected";
            if (message.operator != null && message.hasOwnProperty("operator"))
                if (!$util.isString(message.operator))
                    return "operator: string expected";
            if (message.fieldName != null && message.hasOwnProperty("fieldName"))
                if (!$util.isString(message.fieldName))
                    return "fieldName: string expected";
            return null;
        };

        /**
         * Creates a Conditions message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof InboxList.Conditions
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {InboxList.Conditions} Conditions
         */
        Conditions.fromObject = function fromObject(object) {
            if (object instanceof $root.InboxList.Conditions)
                return object;
            let message = new $root.InboxList.Conditions();
            if (object.value != null)
                message.value = String(object.value);
            if (object.operator != null)
                message.operator = String(object.operator);
            if (object.fieldName != null)
                message.fieldName = String(object.fieldName);
            return message;
        };

        /**
         * Creates a plain object from a Conditions message. Also converts values to other types if specified.
         * @function toObject
         * @memberof InboxList.Conditions
         * @static
         * @param {InboxList.Conditions} message Conditions
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Conditions.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.value = "";
                object.operator = "";
                object.fieldName = "";
            }
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            if (message.operator != null && message.hasOwnProperty("operator"))
                object.operator = message.operator;
            if (message.fieldName != null && message.hasOwnProperty("fieldName"))
                object.fieldName = message.fieldName;
            return object;
        };

        /**
         * Converts this Conditions to JSON.
         * @function toJSON
         * @memberof InboxList.Conditions
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Conditions.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Conditions
         * @function getTypeUrl
         * @memberof InboxList.Conditions
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Conditions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/InboxList.Conditions";
        };

        return Conditions;
    })();

    InboxList.Gifts = (function() {

        /**
         * Properties of a Gifts.
         * @memberof InboxList
         * @interface IGifts
         * @property {string|null} [itemId] Gifts itemId
         * @property {number|null} [amount] Gifts amount
         */

        /**
         * Constructs a new Gifts.
         * @memberof InboxList
         * @classdesc Represents a Gifts.
         * @implements IGifts
         * @constructor
         * @param {InboxList.IGifts=} [properties] Properties to set
         */
        function Gifts(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Gifts itemId.
         * @member {string} itemId
         * @memberof InboxList.Gifts
         * @instance
         */
        Gifts.prototype.itemId = "";

        /**
         * Gifts amount.
         * @member {number} amount
         * @memberof InboxList.Gifts
         * @instance
         */
        Gifts.prototype.amount = 0;

        /**
         * Creates a new Gifts instance using the specified properties.
         * @function create
         * @memberof InboxList.Gifts
         * @static
         * @param {InboxList.IGifts=} [properties] Properties to set
         * @returns {InboxList.Gifts} Gifts instance
         */
        Gifts.create = function create(properties) {
            return new Gifts(properties);
        };

        /**
         * Encodes the specified Gifts message. Does not implicitly {@link InboxList.Gifts.verify|verify} messages.
         * @function encode
         * @memberof InboxList.Gifts
         * @static
         * @param {InboxList.IGifts} message Gifts message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Gifts.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.itemId != null && Object.hasOwnProperty.call(message, "itemId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.itemId);
            if (message.amount != null && Object.hasOwnProperty.call(message, "amount"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.amount);
            return writer;
        };

        /**
         * Encodes the specified Gifts message, length delimited. Does not implicitly {@link InboxList.Gifts.verify|verify} messages.
         * @function encodeDelimited
         * @memberof InboxList.Gifts
         * @static
         * @param {InboxList.IGifts} message Gifts message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Gifts.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Gifts message from the specified reader or buffer.
         * @function decode
         * @memberof InboxList.Gifts
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {InboxList.Gifts} Gifts
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Gifts.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.InboxList.Gifts();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.itemId = reader.string();
                        break;
                    }
                case 2: {
                        message.amount = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Gifts message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof InboxList.Gifts
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {InboxList.Gifts} Gifts
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Gifts.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Gifts message.
         * @function verify
         * @memberof InboxList.Gifts
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Gifts.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.itemId != null && message.hasOwnProperty("itemId"))
                if (!$util.isString(message.itemId))
                    return "itemId: string expected";
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (!$util.isInteger(message.amount))
                    return "amount: integer expected";
            return null;
        };

        /**
         * Creates a Gifts message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof InboxList.Gifts
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {InboxList.Gifts} Gifts
         */
        Gifts.fromObject = function fromObject(object) {
            if (object instanceof $root.InboxList.Gifts)
                return object;
            let message = new $root.InboxList.Gifts();
            if (object.itemId != null)
                message.itemId = String(object.itemId);
            if (object.amount != null)
                message.amount = object.amount >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a Gifts message. Also converts values to other types if specified.
         * @function toObject
         * @memberof InboxList.Gifts
         * @static
         * @param {InboxList.Gifts} message Gifts
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Gifts.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.itemId = "";
                object.amount = 0;
            }
            if (message.itemId != null && message.hasOwnProperty("itemId"))
                object.itemId = message.itemId;
            if (message.amount != null && message.hasOwnProperty("amount"))
                object.amount = message.amount;
            return object;
        };

        /**
         * Converts this Gifts to JSON.
         * @function toJSON
         * @memberof InboxList.Gifts
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Gifts.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Gifts
         * @function getTypeUrl
         * @memberof InboxList.Gifts
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Gifts.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/InboxList.Gifts";
        };

        return Gifts;
    })();

    InboxList.Items = (function() {

        /**
         * Properties of an Items.
         * @memberof InboxList
         * @interface IItems
         * @property {string|null} [content] Items content
         * @property {Array.<InboxList.IConditions>|null} [conditions] Items conditions
         * @property {Array.<InboxList.IGifts>|null} [gifts] Items gifts
         * @property {number|null} [expiryDate] Items expiryDate
         * @property {string|null} [id] Items id
         * @property {string|null} [title] Items title
         * @property {boolean|null} [canClaim] Items canClaim
         */

        /**
         * Constructs a new Items.
         * @memberof InboxList
         * @classdesc Represents an Items.
         * @implements IItems
         * @constructor
         * @param {InboxList.IItems=} [properties] Properties to set
         */
        function Items(properties) {
            this.conditions = [];
            this.gifts = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Items content.
         * @member {string} content
         * @memberof InboxList.Items
         * @instance
         */
        Items.prototype.content = "";

        /**
         * Items conditions.
         * @member {Array.<InboxList.IConditions>} conditions
         * @memberof InboxList.Items
         * @instance
         */
        Items.prototype.conditions = $util.emptyArray;

        /**
         * Items gifts.
         * @member {Array.<InboxList.IGifts>} gifts
         * @memberof InboxList.Items
         * @instance
         */
        Items.prototype.gifts = $util.emptyArray;

        /**
         * Items expiryDate.
         * @member {number} expiryDate
         * @memberof InboxList.Items
         * @instance
         */
        Items.prototype.expiryDate = 0;

        /**
         * Items id.
         * @member {string} id
         * @memberof InboxList.Items
         * @instance
         */
        Items.prototype.id = "";

        /**
         * Items title.
         * @member {string} title
         * @memberof InboxList.Items
         * @instance
         */
        Items.prototype.title = "";

        /**
         * Items canClaim.
         * @member {boolean} canClaim
         * @memberof InboxList.Items
         * @instance
         */
        Items.prototype.canClaim = false;

        /**
         * Creates a new Items instance using the specified properties.
         * @function create
         * @memberof InboxList.Items
         * @static
         * @param {InboxList.IItems=} [properties] Properties to set
         * @returns {InboxList.Items} Items instance
         */
        Items.create = function create(properties) {
            return new Items(properties);
        };

        /**
         * Encodes the specified Items message. Does not implicitly {@link InboxList.Items.verify|verify} messages.
         * @function encode
         * @memberof InboxList.Items
         * @static
         * @param {InboxList.IItems} message Items message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Items.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.content);
            if (message.conditions != null && message.conditions.length)
                for (let i = 0; i < message.conditions.length; ++i)
                    $root.InboxList.Conditions.encode(message.conditions[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.gifts != null && message.gifts.length)
                for (let i = 0; i < message.gifts.length; ++i)
                    $root.InboxList.Gifts.encode(message.gifts[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.expiryDate != null && Object.hasOwnProperty.call(message, "expiryDate"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.expiryDate);
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.id);
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.title);
            if (message.canClaim != null && Object.hasOwnProperty.call(message, "canClaim"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.canClaim);
            return writer;
        };

        /**
         * Encodes the specified Items message, length delimited. Does not implicitly {@link InboxList.Items.verify|verify} messages.
         * @function encodeDelimited
         * @memberof InboxList.Items
         * @static
         * @param {InboxList.IItems} message Items message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Items.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Items message from the specified reader or buffer.
         * @function decode
         * @memberof InboxList.Items
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {InboxList.Items} Items
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Items.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.InboxList.Items();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.content = reader.string();
                        break;
                    }
                case 2: {
                        if (!(message.conditions && message.conditions.length))
                            message.conditions = [];
                        message.conditions.push($root.InboxList.Conditions.decode(reader, reader.uint32()));
                        break;
                    }
                case 3: {
                        if (!(message.gifts && message.gifts.length))
                            message.gifts = [];
                        message.gifts.push($root.InboxList.Gifts.decode(reader, reader.uint32()));
                        break;
                    }
                case 4: {
                        message.expiryDate = reader.uint32();
                        break;
                    }
                case 5: {
                        message.id = reader.string();
                        break;
                    }
                case 6: {
                        message.title = reader.string();
                        break;
                    }
                case 7: {
                        message.canClaim = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Items message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof InboxList.Items
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {InboxList.Items} Items
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Items.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Items message.
         * @function verify
         * @memberof InboxList.Items
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Items.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            if (message.conditions != null && message.hasOwnProperty("conditions")) {
                if (!Array.isArray(message.conditions))
                    return "conditions: array expected";
                for (let i = 0; i < message.conditions.length; ++i) {
                    let error = $root.InboxList.Conditions.verify(message.conditions[i]);
                    if (error)
                        return "conditions." + error;
                }
            }
            if (message.gifts != null && message.hasOwnProperty("gifts")) {
                if (!Array.isArray(message.gifts))
                    return "gifts: array expected";
                for (let i = 0; i < message.gifts.length; ++i) {
                    let error = $root.InboxList.Gifts.verify(message.gifts[i]);
                    if (error)
                        return "gifts." + error;
                }
            }
            if (message.expiryDate != null && message.hasOwnProperty("expiryDate"))
                if (!$util.isInteger(message.expiryDate))
                    return "expiryDate: integer expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.canClaim != null && message.hasOwnProperty("canClaim"))
                if (typeof message.canClaim !== "boolean")
                    return "canClaim: boolean expected";
            return null;
        };

        /**
         * Creates an Items message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof InboxList.Items
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {InboxList.Items} Items
         */
        Items.fromObject = function fromObject(object) {
            if (object instanceof $root.InboxList.Items)
                return object;
            let message = new $root.InboxList.Items();
            if (object.content != null)
                message.content = String(object.content);
            if (object.conditions) {
                if (!Array.isArray(object.conditions))
                    throw TypeError(".InboxList.Items.conditions: array expected");
                message.conditions = [];
                for (let i = 0; i < object.conditions.length; ++i) {
                    if (typeof object.conditions[i] !== "object")
                        throw TypeError(".InboxList.Items.conditions: object expected");
                    message.conditions[i] = $root.InboxList.Conditions.fromObject(object.conditions[i]);
                }
            }
            if (object.gifts) {
                if (!Array.isArray(object.gifts))
                    throw TypeError(".InboxList.Items.gifts: array expected");
                message.gifts = [];
                for (let i = 0; i < object.gifts.length; ++i) {
                    if (typeof object.gifts[i] !== "object")
                        throw TypeError(".InboxList.Items.gifts: object expected");
                    message.gifts[i] = $root.InboxList.Gifts.fromObject(object.gifts[i]);
                }
            }
            if (object.expiryDate != null)
                message.expiryDate = object.expiryDate >>> 0;
            if (object.id != null)
                message.id = String(object.id);
            if (object.title != null)
                message.title = String(object.title);
            if (object.canClaim != null)
                message.canClaim = Boolean(object.canClaim);
            return message;
        };

        /**
         * Creates a plain object from an Items message. Also converts values to other types if specified.
         * @function toObject
         * @memberof InboxList.Items
         * @static
         * @param {InboxList.Items} message Items
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Items.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.conditions = [];
                object.gifts = [];
            }
            if (options.defaults) {
                object.content = "";
                object.expiryDate = 0;
                object.id = "";
                object.title = "";
                object.canClaim = false;
            }
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            if (message.conditions && message.conditions.length) {
                object.conditions = [];
                for (let j = 0; j < message.conditions.length; ++j)
                    object.conditions[j] = $root.InboxList.Conditions.toObject(message.conditions[j], options);
            }
            if (message.gifts && message.gifts.length) {
                object.gifts = [];
                for (let j = 0; j < message.gifts.length; ++j)
                    object.gifts[j] = $root.InboxList.Gifts.toObject(message.gifts[j], options);
            }
            if (message.expiryDate != null && message.hasOwnProperty("expiryDate"))
                object.expiryDate = message.expiryDate;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.canClaim != null && message.hasOwnProperty("canClaim"))
                object.canClaim = message.canClaim;
            return object;
        };

        /**
         * Converts this Items to JSON.
         * @function toJSON
         * @memberof InboxList.Items
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Items.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Items
         * @function getTypeUrl
         * @memberof InboxList.Items
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Items.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/InboxList.Items";
        };

        return Items;
    })();

    return InboxList;
})();

export const InboxClaimInput = $root.InboxClaimInput = (() => {

    /**
     * Properties of an InboxClaimInput.
     * @exports IInboxClaimInput
     * @interface IInboxClaimInput
     * @property {Array.<string>|null} [inboxList] InboxClaimInput inboxList
     */

    /**
     * Constructs a new InboxClaimInput.
     * @exports InboxClaimInput
     * @classdesc Represents an InboxClaimInput.
     * @implements IInboxClaimInput
     * @constructor
     * @param {IInboxClaimInput=} [properties] Properties to set
     */
    function InboxClaimInput(properties) {
        this.inboxList = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * InboxClaimInput inboxList.
     * @member {Array.<string>} inboxList
     * @memberof InboxClaimInput
     * @instance
     */
    InboxClaimInput.prototype.inboxList = $util.emptyArray;

    /**
     * Creates a new InboxClaimInput instance using the specified properties.
     * @function create
     * @memberof InboxClaimInput
     * @static
     * @param {IInboxClaimInput=} [properties] Properties to set
     * @returns {InboxClaimInput} InboxClaimInput instance
     */
    InboxClaimInput.create = function create(properties) {
        return new InboxClaimInput(properties);
    };

    /**
     * Encodes the specified InboxClaimInput message. Does not implicitly {@link InboxClaimInput.verify|verify} messages.
     * @function encode
     * @memberof InboxClaimInput
     * @static
     * @param {IInboxClaimInput} message InboxClaimInput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    InboxClaimInput.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.inboxList != null && message.inboxList.length)
            for (let i = 0; i < message.inboxList.length; ++i)
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.inboxList[i]);
        return writer;
    };

    /**
     * Encodes the specified InboxClaimInput message, length delimited. Does not implicitly {@link InboxClaimInput.verify|verify} messages.
     * @function encodeDelimited
     * @memberof InboxClaimInput
     * @static
     * @param {IInboxClaimInput} message InboxClaimInput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    InboxClaimInput.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an InboxClaimInput message from the specified reader or buffer.
     * @function decode
     * @memberof InboxClaimInput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {InboxClaimInput} InboxClaimInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    InboxClaimInput.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.InboxClaimInput();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.inboxList && message.inboxList.length))
                        message.inboxList = [];
                    message.inboxList.push(reader.string());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an InboxClaimInput message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof InboxClaimInput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {InboxClaimInput} InboxClaimInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    InboxClaimInput.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an InboxClaimInput message.
     * @function verify
     * @memberof InboxClaimInput
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    InboxClaimInput.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.inboxList != null && message.hasOwnProperty("inboxList")) {
            if (!Array.isArray(message.inboxList))
                return "inboxList: array expected";
            for (let i = 0; i < message.inboxList.length; ++i)
                if (!$util.isString(message.inboxList[i]))
                    return "inboxList: string[] expected";
        }
        return null;
    };

    /**
     * Creates an InboxClaimInput message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof InboxClaimInput
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {InboxClaimInput} InboxClaimInput
     */
    InboxClaimInput.fromObject = function fromObject(object) {
        if (object instanceof $root.InboxClaimInput)
            return object;
        let message = new $root.InboxClaimInput();
        if (object.inboxList) {
            if (!Array.isArray(object.inboxList))
                throw TypeError(".InboxClaimInput.inboxList: array expected");
            message.inboxList = [];
            for (let i = 0; i < object.inboxList.length; ++i)
                message.inboxList[i] = String(object.inboxList[i]);
        }
        return message;
    };

    /**
     * Creates a plain object from an InboxClaimInput message. Also converts values to other types if specified.
     * @function toObject
     * @memberof InboxClaimInput
     * @static
     * @param {InboxClaimInput} message InboxClaimInput
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    InboxClaimInput.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.inboxList = [];
        if (message.inboxList && message.inboxList.length) {
            object.inboxList = [];
            for (let j = 0; j < message.inboxList.length; ++j)
                object.inboxList[j] = message.inboxList[j];
        }
        return object;
    };

    /**
     * Converts this InboxClaimInput to JSON.
     * @function toJSON
     * @memberof InboxClaimInput
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    InboxClaimInput.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for InboxClaimInput
     * @function getTypeUrl
     * @memberof InboxClaimInput
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    InboxClaimInput.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/InboxClaimInput";
    };

    return InboxClaimInput;
})();

export const InboxClaimOutput = $root.InboxClaimOutput = (() => {

    /**
     * Properties of an InboxClaimOutput.
     * @exports IInboxClaimOutput
     * @interface IInboxClaimOutput
     * @property {Array.<InboxClaimOutput.IInventory>|null} [inventory] InboxClaimOutput inventory
     * @property {Array.<string>|null} [inboxList] InboxClaimOutput inboxList
     */

    /**
     * Constructs a new InboxClaimOutput.
     * @exports InboxClaimOutput
     * @classdesc Represents an InboxClaimOutput.
     * @implements IInboxClaimOutput
     * @constructor
     * @param {IInboxClaimOutput=} [properties] Properties to set
     */
    function InboxClaimOutput(properties) {
        this.inventory = [];
        this.inboxList = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * InboxClaimOutput inventory.
     * @member {Array.<InboxClaimOutput.IInventory>} inventory
     * @memberof InboxClaimOutput
     * @instance
     */
    InboxClaimOutput.prototype.inventory = $util.emptyArray;

    /**
     * InboxClaimOutput inboxList.
     * @member {Array.<string>} inboxList
     * @memberof InboxClaimOutput
     * @instance
     */
    InboxClaimOutput.prototype.inboxList = $util.emptyArray;

    /**
     * Creates a new InboxClaimOutput instance using the specified properties.
     * @function create
     * @memberof InboxClaimOutput
     * @static
     * @param {IInboxClaimOutput=} [properties] Properties to set
     * @returns {InboxClaimOutput} InboxClaimOutput instance
     */
    InboxClaimOutput.create = function create(properties) {
        return new InboxClaimOutput(properties);
    };

    /**
     * Encodes the specified InboxClaimOutput message. Does not implicitly {@link InboxClaimOutput.verify|verify} messages.
     * @function encode
     * @memberof InboxClaimOutput
     * @static
     * @param {IInboxClaimOutput} message InboxClaimOutput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    InboxClaimOutput.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.inventory != null && message.inventory.length)
            for (let i = 0; i < message.inventory.length; ++i)
                $root.InboxClaimOutput.Inventory.encode(message.inventory[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.inboxList != null && message.inboxList.length)
            for (let i = 0; i < message.inboxList.length; ++i)
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.inboxList[i]);
        return writer;
    };

    /**
     * Encodes the specified InboxClaimOutput message, length delimited. Does not implicitly {@link InboxClaimOutput.verify|verify} messages.
     * @function encodeDelimited
     * @memberof InboxClaimOutput
     * @static
     * @param {IInboxClaimOutput} message InboxClaimOutput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    InboxClaimOutput.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an InboxClaimOutput message from the specified reader or buffer.
     * @function decode
     * @memberof InboxClaimOutput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {InboxClaimOutput} InboxClaimOutput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    InboxClaimOutput.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.InboxClaimOutput();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.inventory && message.inventory.length))
                        message.inventory = [];
                    message.inventory.push($root.InboxClaimOutput.Inventory.decode(reader, reader.uint32()));
                    break;
                }
            case 2: {
                    if (!(message.inboxList && message.inboxList.length))
                        message.inboxList = [];
                    message.inboxList.push(reader.string());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an InboxClaimOutput message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof InboxClaimOutput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {InboxClaimOutput} InboxClaimOutput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    InboxClaimOutput.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an InboxClaimOutput message.
     * @function verify
     * @memberof InboxClaimOutput
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    InboxClaimOutput.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.inventory != null && message.hasOwnProperty("inventory")) {
            if (!Array.isArray(message.inventory))
                return "inventory: array expected";
            for (let i = 0; i < message.inventory.length; ++i) {
                let error = $root.InboxClaimOutput.Inventory.verify(message.inventory[i]);
                if (error)
                    return "inventory." + error;
            }
        }
        if (message.inboxList != null && message.hasOwnProperty("inboxList")) {
            if (!Array.isArray(message.inboxList))
                return "inboxList: array expected";
            for (let i = 0; i < message.inboxList.length; ++i)
                if (!$util.isString(message.inboxList[i]))
                    return "inboxList: string[] expected";
        }
        return null;
    };

    /**
     * Creates an InboxClaimOutput message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof InboxClaimOutput
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {InboxClaimOutput} InboxClaimOutput
     */
    InboxClaimOutput.fromObject = function fromObject(object) {
        if (object instanceof $root.InboxClaimOutput)
            return object;
        let message = new $root.InboxClaimOutput();
        if (object.inventory) {
            if (!Array.isArray(object.inventory))
                throw TypeError(".InboxClaimOutput.inventory: array expected");
            message.inventory = [];
            for (let i = 0; i < object.inventory.length; ++i) {
                if (typeof object.inventory[i] !== "object")
                    throw TypeError(".InboxClaimOutput.inventory: object expected");
                message.inventory[i] = $root.InboxClaimOutput.Inventory.fromObject(object.inventory[i]);
            }
        }
        if (object.inboxList) {
            if (!Array.isArray(object.inboxList))
                throw TypeError(".InboxClaimOutput.inboxList: array expected");
            message.inboxList = [];
            for (let i = 0; i < object.inboxList.length; ++i)
                message.inboxList[i] = String(object.inboxList[i]);
        }
        return message;
    };

    /**
     * Creates a plain object from an InboxClaimOutput message. Also converts values to other types if specified.
     * @function toObject
     * @memberof InboxClaimOutput
     * @static
     * @param {InboxClaimOutput} message InboxClaimOutput
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    InboxClaimOutput.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults) {
            object.inventory = [];
            object.inboxList = [];
        }
        if (message.inventory && message.inventory.length) {
            object.inventory = [];
            for (let j = 0; j < message.inventory.length; ++j)
                object.inventory[j] = $root.InboxClaimOutput.Inventory.toObject(message.inventory[j], options);
        }
        if (message.inboxList && message.inboxList.length) {
            object.inboxList = [];
            for (let j = 0; j < message.inboxList.length; ++j)
                object.inboxList[j] = message.inboxList[j];
        }
        return object;
    };

    /**
     * Converts this InboxClaimOutput to JSON.
     * @function toJSON
     * @memberof InboxClaimOutput
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    InboxClaimOutput.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for InboxClaimOutput
     * @function getTypeUrl
     * @memberof InboxClaimOutput
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    InboxClaimOutput.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/InboxClaimOutput";
    };

    InboxClaimOutput.Inventory = (function() {

        /**
         * Properties of an Inventory.
         * @memberof InboxClaimOutput
         * @interface IInventory
         * @property {string|null} [itemId] Inventory itemId
         * @property {number|null} [amount] Inventory amount
         */

        /**
         * Constructs a new Inventory.
         * @memberof InboxClaimOutput
         * @classdesc Represents an Inventory.
         * @implements IInventory
         * @constructor
         * @param {InboxClaimOutput.IInventory=} [properties] Properties to set
         */
        function Inventory(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Inventory itemId.
         * @member {string} itemId
         * @memberof InboxClaimOutput.Inventory
         * @instance
         */
        Inventory.prototype.itemId = "";

        /**
         * Inventory amount.
         * @member {number} amount
         * @memberof InboxClaimOutput.Inventory
         * @instance
         */
        Inventory.prototype.amount = 0;

        /**
         * Creates a new Inventory instance using the specified properties.
         * @function create
         * @memberof InboxClaimOutput.Inventory
         * @static
         * @param {InboxClaimOutput.IInventory=} [properties] Properties to set
         * @returns {InboxClaimOutput.Inventory} Inventory instance
         */
        Inventory.create = function create(properties) {
            return new Inventory(properties);
        };

        /**
         * Encodes the specified Inventory message. Does not implicitly {@link InboxClaimOutput.Inventory.verify|verify} messages.
         * @function encode
         * @memberof InboxClaimOutput.Inventory
         * @static
         * @param {InboxClaimOutput.IInventory} message Inventory message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Inventory.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.itemId != null && Object.hasOwnProperty.call(message, "itemId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.itemId);
            if (message.amount != null && Object.hasOwnProperty.call(message, "amount"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.amount);
            return writer;
        };

        /**
         * Encodes the specified Inventory message, length delimited. Does not implicitly {@link InboxClaimOutput.Inventory.verify|verify} messages.
         * @function encodeDelimited
         * @memberof InboxClaimOutput.Inventory
         * @static
         * @param {InboxClaimOutput.IInventory} message Inventory message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Inventory.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Inventory message from the specified reader or buffer.
         * @function decode
         * @memberof InboxClaimOutput.Inventory
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {InboxClaimOutput.Inventory} Inventory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Inventory.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.InboxClaimOutput.Inventory();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.itemId = reader.string();
                        break;
                    }
                case 2: {
                        message.amount = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Inventory message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof InboxClaimOutput.Inventory
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {InboxClaimOutput.Inventory} Inventory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Inventory.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Inventory message.
         * @function verify
         * @memberof InboxClaimOutput.Inventory
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Inventory.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.itemId != null && message.hasOwnProperty("itemId"))
                if (!$util.isString(message.itemId))
                    return "itemId: string expected";
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (!$util.isInteger(message.amount))
                    return "amount: integer expected";
            return null;
        };

        /**
         * Creates an Inventory message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof InboxClaimOutput.Inventory
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {InboxClaimOutput.Inventory} Inventory
         */
        Inventory.fromObject = function fromObject(object) {
            if (object instanceof $root.InboxClaimOutput.Inventory)
                return object;
            let message = new $root.InboxClaimOutput.Inventory();
            if (object.itemId != null)
                message.itemId = String(object.itemId);
            if (object.amount != null)
                message.amount = object.amount >>> 0;
            return message;
        };

        /**
         * Creates a plain object from an Inventory message. Also converts values to other types if specified.
         * @function toObject
         * @memberof InboxClaimOutput.Inventory
         * @static
         * @param {InboxClaimOutput.Inventory} message Inventory
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Inventory.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.itemId = "";
                object.amount = 0;
            }
            if (message.itemId != null && message.hasOwnProperty("itemId"))
                object.itemId = message.itemId;
            if (message.amount != null && message.hasOwnProperty("amount"))
                object.amount = message.amount;
            return object;
        };

        /**
         * Converts this Inventory to JSON.
         * @function toJSON
         * @memberof InboxClaimOutput.Inventory
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Inventory.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Inventory
         * @function getTypeUrl
         * @memberof InboxClaimOutput.Inventory
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Inventory.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/InboxClaimOutput.Inventory";
        };

        return Inventory;
    })();

    return InboxClaimOutput;
})();

export const InboxDeleteInput = $root.InboxDeleteInput = (() => {

    /**
     * Properties of an InboxDeleteInput.
     * @exports IInboxDeleteInput
     * @interface IInboxDeleteInput
     * @property {Array.<string>|null} [inboxList] InboxDeleteInput inboxList
     */

    /**
     * Constructs a new InboxDeleteInput.
     * @exports InboxDeleteInput
     * @classdesc Represents an InboxDeleteInput.
     * @implements IInboxDeleteInput
     * @constructor
     * @param {IInboxDeleteInput=} [properties] Properties to set
     */
    function InboxDeleteInput(properties) {
        this.inboxList = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * InboxDeleteInput inboxList.
     * @member {Array.<string>} inboxList
     * @memberof InboxDeleteInput
     * @instance
     */
    InboxDeleteInput.prototype.inboxList = $util.emptyArray;

    /**
     * Creates a new InboxDeleteInput instance using the specified properties.
     * @function create
     * @memberof InboxDeleteInput
     * @static
     * @param {IInboxDeleteInput=} [properties] Properties to set
     * @returns {InboxDeleteInput} InboxDeleteInput instance
     */
    InboxDeleteInput.create = function create(properties) {
        return new InboxDeleteInput(properties);
    };

    /**
     * Encodes the specified InboxDeleteInput message. Does not implicitly {@link InboxDeleteInput.verify|verify} messages.
     * @function encode
     * @memberof InboxDeleteInput
     * @static
     * @param {IInboxDeleteInput} message InboxDeleteInput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    InboxDeleteInput.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.inboxList != null && message.inboxList.length)
            for (let i = 0; i < message.inboxList.length; ++i)
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.inboxList[i]);
        return writer;
    };

    /**
     * Encodes the specified InboxDeleteInput message, length delimited. Does not implicitly {@link InboxDeleteInput.verify|verify} messages.
     * @function encodeDelimited
     * @memberof InboxDeleteInput
     * @static
     * @param {IInboxDeleteInput} message InboxDeleteInput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    InboxDeleteInput.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an InboxDeleteInput message from the specified reader or buffer.
     * @function decode
     * @memberof InboxDeleteInput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {InboxDeleteInput} InboxDeleteInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    InboxDeleteInput.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.InboxDeleteInput();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.inboxList && message.inboxList.length))
                        message.inboxList = [];
                    message.inboxList.push(reader.string());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an InboxDeleteInput message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof InboxDeleteInput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {InboxDeleteInput} InboxDeleteInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    InboxDeleteInput.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an InboxDeleteInput message.
     * @function verify
     * @memberof InboxDeleteInput
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    InboxDeleteInput.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.inboxList != null && message.hasOwnProperty("inboxList")) {
            if (!Array.isArray(message.inboxList))
                return "inboxList: array expected";
            for (let i = 0; i < message.inboxList.length; ++i)
                if (!$util.isString(message.inboxList[i]))
                    return "inboxList: string[] expected";
        }
        return null;
    };

    /**
     * Creates an InboxDeleteInput message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof InboxDeleteInput
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {InboxDeleteInput} InboxDeleteInput
     */
    InboxDeleteInput.fromObject = function fromObject(object) {
        if (object instanceof $root.InboxDeleteInput)
            return object;
        let message = new $root.InboxDeleteInput();
        if (object.inboxList) {
            if (!Array.isArray(object.inboxList))
                throw TypeError(".InboxDeleteInput.inboxList: array expected");
            message.inboxList = [];
            for (let i = 0; i < object.inboxList.length; ++i)
                message.inboxList[i] = String(object.inboxList[i]);
        }
        return message;
    };

    /**
     * Creates a plain object from an InboxDeleteInput message. Also converts values to other types if specified.
     * @function toObject
     * @memberof InboxDeleteInput
     * @static
     * @param {InboxDeleteInput} message InboxDeleteInput
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    InboxDeleteInput.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.inboxList = [];
        if (message.inboxList && message.inboxList.length) {
            object.inboxList = [];
            for (let j = 0; j < message.inboxList.length; ++j)
                object.inboxList[j] = message.inboxList[j];
        }
        return object;
    };

    /**
     * Converts this InboxDeleteInput to JSON.
     * @function toJSON
     * @memberof InboxDeleteInput
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    InboxDeleteInput.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for InboxDeleteInput
     * @function getTypeUrl
     * @memberof InboxDeleteInput
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    InboxDeleteInput.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/InboxDeleteInput";
    };

    return InboxDeleteInput;
})();

export const InboxDeleteOutput = $root.InboxDeleteOutput = (() => {

    /**
     * Properties of an InboxDeleteOutput.
     * @exports IInboxDeleteOutput
     * @interface IInboxDeleteOutput
     * @property {Array.<string>|null} [inboxList] InboxDeleteOutput inboxList
     */

    /**
     * Constructs a new InboxDeleteOutput.
     * @exports InboxDeleteOutput
     * @classdesc Represents an InboxDeleteOutput.
     * @implements IInboxDeleteOutput
     * @constructor
     * @param {IInboxDeleteOutput=} [properties] Properties to set
     */
    function InboxDeleteOutput(properties) {
        this.inboxList = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * InboxDeleteOutput inboxList.
     * @member {Array.<string>} inboxList
     * @memberof InboxDeleteOutput
     * @instance
     */
    InboxDeleteOutput.prototype.inboxList = $util.emptyArray;

    /**
     * Creates a new InboxDeleteOutput instance using the specified properties.
     * @function create
     * @memberof InboxDeleteOutput
     * @static
     * @param {IInboxDeleteOutput=} [properties] Properties to set
     * @returns {InboxDeleteOutput} InboxDeleteOutput instance
     */
    InboxDeleteOutput.create = function create(properties) {
        return new InboxDeleteOutput(properties);
    };

    /**
     * Encodes the specified InboxDeleteOutput message. Does not implicitly {@link InboxDeleteOutput.verify|verify} messages.
     * @function encode
     * @memberof InboxDeleteOutput
     * @static
     * @param {IInboxDeleteOutput} message InboxDeleteOutput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    InboxDeleteOutput.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.inboxList != null && message.inboxList.length)
            for (let i = 0; i < message.inboxList.length; ++i)
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.inboxList[i]);
        return writer;
    };

    /**
     * Encodes the specified InboxDeleteOutput message, length delimited. Does not implicitly {@link InboxDeleteOutput.verify|verify} messages.
     * @function encodeDelimited
     * @memberof InboxDeleteOutput
     * @static
     * @param {IInboxDeleteOutput} message InboxDeleteOutput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    InboxDeleteOutput.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an InboxDeleteOutput message from the specified reader or buffer.
     * @function decode
     * @memberof InboxDeleteOutput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {InboxDeleteOutput} InboxDeleteOutput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    InboxDeleteOutput.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.InboxDeleteOutput();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.inboxList && message.inboxList.length))
                        message.inboxList = [];
                    message.inboxList.push(reader.string());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an InboxDeleteOutput message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof InboxDeleteOutput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {InboxDeleteOutput} InboxDeleteOutput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    InboxDeleteOutput.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an InboxDeleteOutput message.
     * @function verify
     * @memberof InboxDeleteOutput
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    InboxDeleteOutput.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.inboxList != null && message.hasOwnProperty("inboxList")) {
            if (!Array.isArray(message.inboxList))
                return "inboxList: array expected";
            for (let i = 0; i < message.inboxList.length; ++i)
                if (!$util.isString(message.inboxList[i]))
                    return "inboxList: string[] expected";
        }
        return null;
    };

    /**
     * Creates an InboxDeleteOutput message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof InboxDeleteOutput
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {InboxDeleteOutput} InboxDeleteOutput
     */
    InboxDeleteOutput.fromObject = function fromObject(object) {
        if (object instanceof $root.InboxDeleteOutput)
            return object;
        let message = new $root.InboxDeleteOutput();
        if (object.inboxList) {
            if (!Array.isArray(object.inboxList))
                throw TypeError(".InboxDeleteOutput.inboxList: array expected");
            message.inboxList = [];
            for (let i = 0; i < object.inboxList.length; ++i)
                message.inboxList[i] = String(object.inboxList[i]);
        }
        return message;
    };

    /**
     * Creates a plain object from an InboxDeleteOutput message. Also converts values to other types if specified.
     * @function toObject
     * @memberof InboxDeleteOutput
     * @static
     * @param {InboxDeleteOutput} message InboxDeleteOutput
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    InboxDeleteOutput.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.inboxList = [];
        if (message.inboxList && message.inboxList.length) {
            object.inboxList = [];
            for (let j = 0; j < message.inboxList.length; ++j)
                object.inboxList[j] = message.inboxList[j];
        }
        return object;
    };

    /**
     * Converts this InboxDeleteOutput to JSON.
     * @function toJSON
     * @memberof InboxDeleteOutput
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    InboxDeleteOutput.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for InboxDeleteOutput
     * @function getTypeUrl
     * @memberof InboxDeleteOutput
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    InboxDeleteOutput.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/InboxDeleteOutput";
    };

    return InboxDeleteOutput;
})();

export const GetTopLeaderboardInput = $root.GetTopLeaderboardInput = (() => {

    /**
     * Properties of a GetTopLeaderboardInput.
     * @exports IGetTopLeaderboardInput
     * @interface IGetTopLeaderboardInput
     * @property {string|null} [name] GetTopLeaderboardInput name
     * @property {number|null} [offset] GetTopLeaderboardInput offset
     * @property {string|null} [country] GetTopLeaderboardInput country
     * @property {number|null} [count] GetTopLeaderboardInput count
     * @property {boolean|null} [reverseOrder] GetTopLeaderboardInput reverseOrder
     */

    /**
     * Constructs a new GetTopLeaderboardInput.
     * @exports GetTopLeaderboardInput
     * @classdesc Represents a GetTopLeaderboardInput.
     * @implements IGetTopLeaderboardInput
     * @constructor
     * @param {IGetTopLeaderboardInput=} [properties] Properties to set
     */
    function GetTopLeaderboardInput(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetTopLeaderboardInput name.
     * @member {string|null|undefined} name
     * @memberof GetTopLeaderboardInput
     * @instance
     */
    GetTopLeaderboardInput.prototype.name = null;

    /**
     * GetTopLeaderboardInput offset.
     * @member {number} offset
     * @memberof GetTopLeaderboardInput
     * @instance
     */
    GetTopLeaderboardInput.prototype.offset = 0;

    /**
     * GetTopLeaderboardInput country.
     * @member {string} country
     * @memberof GetTopLeaderboardInput
     * @instance
     */
    GetTopLeaderboardInput.prototype.country = "";

    /**
     * GetTopLeaderboardInput count.
     * @member {number|null|undefined} count
     * @memberof GetTopLeaderboardInput
     * @instance
     */
    GetTopLeaderboardInput.prototype.count = null;

    /**
     * GetTopLeaderboardInput reverseOrder.
     * @member {boolean} reverseOrder
     * @memberof GetTopLeaderboardInput
     * @instance
     */
    GetTopLeaderboardInput.prototype.reverseOrder = false;

    // OneOf field names bound to virtual getters and setters
    let $oneOfFields;

    /**
     * GetTopLeaderboardInput _name.
     * @member {"name"|undefined} _name
     * @memberof GetTopLeaderboardInput
     * @instance
     */
    Object.defineProperty(GetTopLeaderboardInput.prototype, "_name", {
        get: $util.oneOfGetter($oneOfFields = ["name"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * GetTopLeaderboardInput _count.
     * @member {"count"|undefined} _count
     * @memberof GetTopLeaderboardInput
     * @instance
     */
    Object.defineProperty(GetTopLeaderboardInput.prototype, "_count", {
        get: $util.oneOfGetter($oneOfFields = ["count"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new GetTopLeaderboardInput instance using the specified properties.
     * @function create
     * @memberof GetTopLeaderboardInput
     * @static
     * @param {IGetTopLeaderboardInput=} [properties] Properties to set
     * @returns {GetTopLeaderboardInput} GetTopLeaderboardInput instance
     */
    GetTopLeaderboardInput.create = function create(properties) {
        return new GetTopLeaderboardInput(properties);
    };

    /**
     * Encodes the specified GetTopLeaderboardInput message. Does not implicitly {@link GetTopLeaderboardInput.verify|verify} messages.
     * @function encode
     * @memberof GetTopLeaderboardInput
     * @static
     * @param {IGetTopLeaderboardInput} message GetTopLeaderboardInput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetTopLeaderboardInput.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        if (message.offset != null && Object.hasOwnProperty.call(message, "offset"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.offset);
        if (message.country != null && Object.hasOwnProperty.call(message, "country"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.country);
        if (message.count != null && Object.hasOwnProperty.call(message, "count"))
            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.count);
        if (message.reverseOrder != null && Object.hasOwnProperty.call(message, "reverseOrder"))
            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.reverseOrder);
        return writer;
    };

    /**
     * Encodes the specified GetTopLeaderboardInput message, length delimited. Does not implicitly {@link GetTopLeaderboardInput.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GetTopLeaderboardInput
     * @static
     * @param {IGetTopLeaderboardInput} message GetTopLeaderboardInput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetTopLeaderboardInput.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetTopLeaderboardInput message from the specified reader or buffer.
     * @function decode
     * @memberof GetTopLeaderboardInput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetTopLeaderboardInput} GetTopLeaderboardInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetTopLeaderboardInput.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetTopLeaderboardInput();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.name = reader.string();
                    break;
                }
            case 2: {
                    message.offset = reader.uint32();
                    break;
                }
            case 3: {
                    message.country = reader.string();
                    break;
                }
            case 4: {
                    message.count = reader.uint32();
                    break;
                }
            case 5: {
                    message.reverseOrder = reader.bool();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GetTopLeaderboardInput message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GetTopLeaderboardInput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GetTopLeaderboardInput} GetTopLeaderboardInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetTopLeaderboardInput.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GetTopLeaderboardInput message.
     * @function verify
     * @memberof GetTopLeaderboardInput
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetTopLeaderboardInput.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        let properties = {};
        if (message.name != null && message.hasOwnProperty("name")) {
            properties._name = 1;
            if (!$util.isString(message.name))
                return "name: string expected";
        }
        if (message.offset != null && message.hasOwnProperty("offset"))
            if (!$util.isInteger(message.offset))
                return "offset: integer expected";
        if (message.country != null && message.hasOwnProperty("country"))
            if (!$util.isString(message.country))
                return "country: string expected";
        if (message.count != null && message.hasOwnProperty("count")) {
            properties._count = 1;
            if (!$util.isInteger(message.count))
                return "count: integer expected";
        }
        if (message.reverseOrder != null && message.hasOwnProperty("reverseOrder"))
            if (typeof message.reverseOrder !== "boolean")
                return "reverseOrder: boolean expected";
        return null;
    };

    /**
     * Creates a GetTopLeaderboardInput message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GetTopLeaderboardInput
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GetTopLeaderboardInput} GetTopLeaderboardInput
     */
    GetTopLeaderboardInput.fromObject = function fromObject(object) {
        if (object instanceof $root.GetTopLeaderboardInput)
            return object;
        let message = new $root.GetTopLeaderboardInput();
        if (object.name != null)
            message.name = String(object.name);
        if (object.offset != null)
            message.offset = object.offset >>> 0;
        if (object.country != null)
            message.country = String(object.country);
        if (object.count != null)
            message.count = object.count >>> 0;
        if (object.reverseOrder != null)
            message.reverseOrder = Boolean(object.reverseOrder);
        return message;
    };

    /**
     * Creates a plain object from a GetTopLeaderboardInput message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GetTopLeaderboardInput
     * @static
     * @param {GetTopLeaderboardInput} message GetTopLeaderboardInput
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetTopLeaderboardInput.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.offset = 0;
            object.country = "";
            object.reverseOrder = false;
        }
        if (message.name != null && message.hasOwnProperty("name")) {
            object.name = message.name;
            if (options.oneofs)
                object._name = "name";
        }
        if (message.offset != null && message.hasOwnProperty("offset"))
            object.offset = message.offset;
        if (message.country != null && message.hasOwnProperty("country"))
            object.country = message.country;
        if (message.count != null && message.hasOwnProperty("count")) {
            object.count = message.count;
            if (options.oneofs)
                object._count = "count";
        }
        if (message.reverseOrder != null && message.hasOwnProperty("reverseOrder"))
            object.reverseOrder = message.reverseOrder;
        return object;
    };

    /**
     * Converts this GetTopLeaderboardInput to JSON.
     * @function toJSON
     * @memberof GetTopLeaderboardInput
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetTopLeaderboardInput.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for GetTopLeaderboardInput
     * @function getTypeUrl
     * @memberof GetTopLeaderboardInput
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    GetTopLeaderboardInput.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/GetTopLeaderboardInput";
    };

    return GetTopLeaderboardInput;
})();

export const TopLeaderboard = $root.TopLeaderboard = (() => {

    /**
     * Properties of a TopLeaderboard.
     * @exports ITopLeaderboard
     * @interface ITopLeaderboard
     * @property {Array.<TopLeaderboard.IItems>|null} [items] TopLeaderboard items
     */

    /**
     * Constructs a new TopLeaderboard.
     * @exports TopLeaderboard
     * @classdesc Represents a TopLeaderboard.
     * @implements ITopLeaderboard
     * @constructor
     * @param {ITopLeaderboard=} [properties] Properties to set
     */
    function TopLeaderboard(properties) {
        this.items = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TopLeaderboard items.
     * @member {Array.<TopLeaderboard.IItems>} items
     * @memberof TopLeaderboard
     * @instance
     */
    TopLeaderboard.prototype.items = $util.emptyArray;

    /**
     * Creates a new TopLeaderboard instance using the specified properties.
     * @function create
     * @memberof TopLeaderboard
     * @static
     * @param {ITopLeaderboard=} [properties] Properties to set
     * @returns {TopLeaderboard} TopLeaderboard instance
     */
    TopLeaderboard.create = function create(properties) {
        return new TopLeaderboard(properties);
    };

    /**
     * Encodes the specified TopLeaderboard message. Does not implicitly {@link TopLeaderboard.verify|verify} messages.
     * @function encode
     * @memberof TopLeaderboard
     * @static
     * @param {ITopLeaderboard} message TopLeaderboard message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TopLeaderboard.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.items != null && message.items.length)
            for (let i = 0; i < message.items.length; ++i)
                $root.TopLeaderboard.Items.encode(message.items[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified TopLeaderboard message, length delimited. Does not implicitly {@link TopLeaderboard.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TopLeaderboard
     * @static
     * @param {ITopLeaderboard} message TopLeaderboard message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TopLeaderboard.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TopLeaderboard message from the specified reader or buffer.
     * @function decode
     * @memberof TopLeaderboard
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TopLeaderboard} TopLeaderboard
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TopLeaderboard.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.TopLeaderboard();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.items && message.items.length))
                        message.items = [];
                    message.items.push($root.TopLeaderboard.Items.decode(reader, reader.uint32()));
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a TopLeaderboard message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TopLeaderboard
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TopLeaderboard} TopLeaderboard
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TopLeaderboard.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TopLeaderboard message.
     * @function verify
     * @memberof TopLeaderboard
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TopLeaderboard.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.items != null && message.hasOwnProperty("items")) {
            if (!Array.isArray(message.items))
                return "items: array expected";
            for (let i = 0; i < message.items.length; ++i) {
                let error = $root.TopLeaderboard.Items.verify(message.items[i]);
                if (error)
                    return "items." + error;
            }
        }
        return null;
    };

    /**
     * Creates a TopLeaderboard message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TopLeaderboard
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TopLeaderboard} TopLeaderboard
     */
    TopLeaderboard.fromObject = function fromObject(object) {
        if (object instanceof $root.TopLeaderboard)
            return object;
        let message = new $root.TopLeaderboard();
        if (object.items) {
            if (!Array.isArray(object.items))
                throw TypeError(".TopLeaderboard.items: array expected");
            message.items = [];
            for (let i = 0; i < object.items.length; ++i) {
                if (typeof object.items[i] !== "object")
                    throw TypeError(".TopLeaderboard.items: object expected");
                message.items[i] = $root.TopLeaderboard.Items.fromObject(object.items[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a TopLeaderboard message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TopLeaderboard
     * @static
     * @param {TopLeaderboard} message TopLeaderboard
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TopLeaderboard.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.items = [];
        if (message.items && message.items.length) {
            object.items = [];
            for (let j = 0; j < message.items.length; ++j)
                object.items[j] = $root.TopLeaderboard.Items.toObject(message.items[j], options);
        }
        return object;
    };

    /**
     * Converts this TopLeaderboard to JSON.
     * @function toJSON
     * @memberof TopLeaderboard
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TopLeaderboard.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for TopLeaderboard
     * @function getTypeUrl
     * @memberof TopLeaderboard
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    TopLeaderboard.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/TopLeaderboard";
    };

    TopLeaderboard.Items = (function() {

        /**
         * Properties of an Items.
         * @memberof TopLeaderboard
         * @interface IItems
         * @property {string|null} [playerName] Items playerName
         * @property {string|null} [playerId] Items playerId
         * @property {string|null} [country] Items country
         * @property {number|null} [score] Items score
         * @property {number|null} [rank] Items rank
         */

        /**
         * Constructs a new Items.
         * @memberof TopLeaderboard
         * @classdesc Represents an Items.
         * @implements IItems
         * @constructor
         * @param {TopLeaderboard.IItems=} [properties] Properties to set
         */
        function Items(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Items playerName.
         * @member {string} playerName
         * @memberof TopLeaderboard.Items
         * @instance
         */
        Items.prototype.playerName = "";

        /**
         * Items playerId.
         * @member {string} playerId
         * @memberof TopLeaderboard.Items
         * @instance
         */
        Items.prototype.playerId = "";

        /**
         * Items country.
         * @member {string} country
         * @memberof TopLeaderboard.Items
         * @instance
         */
        Items.prototype.country = "";

        /**
         * Items score.
         * @member {number} score
         * @memberof TopLeaderboard.Items
         * @instance
         */
        Items.prototype.score = 0;

        /**
         * Items rank.
         * @member {number} rank
         * @memberof TopLeaderboard.Items
         * @instance
         */
        Items.prototype.rank = 0;

        /**
         * Creates a new Items instance using the specified properties.
         * @function create
         * @memberof TopLeaderboard.Items
         * @static
         * @param {TopLeaderboard.IItems=} [properties] Properties to set
         * @returns {TopLeaderboard.Items} Items instance
         */
        Items.create = function create(properties) {
            return new Items(properties);
        };

        /**
         * Encodes the specified Items message. Does not implicitly {@link TopLeaderboard.Items.verify|verify} messages.
         * @function encode
         * @memberof TopLeaderboard.Items
         * @static
         * @param {TopLeaderboard.IItems} message Items message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Items.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.playerName != null && Object.hasOwnProperty.call(message, "playerName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.playerName);
            if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.playerId);
            if (message.country != null && Object.hasOwnProperty.call(message, "country"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.country);
            if (message.score != null && Object.hasOwnProperty.call(message, "score"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.score);
            if (message.rank != null && Object.hasOwnProperty.call(message, "rank"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.rank);
            return writer;
        };

        /**
         * Encodes the specified Items message, length delimited. Does not implicitly {@link TopLeaderboard.Items.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TopLeaderboard.Items
         * @static
         * @param {TopLeaderboard.IItems} message Items message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Items.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Items message from the specified reader or buffer.
         * @function decode
         * @memberof TopLeaderboard.Items
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TopLeaderboard.Items} Items
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Items.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.TopLeaderboard.Items();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.playerName = reader.string();
                        break;
                    }
                case 2: {
                        message.playerId = reader.string();
                        break;
                    }
                case 3: {
                        message.country = reader.string();
                        break;
                    }
                case 4: {
                        message.score = reader.uint32();
                        break;
                    }
                case 5: {
                        message.rank = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Items message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TopLeaderboard.Items
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TopLeaderboard.Items} Items
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Items.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Items message.
         * @function verify
         * @memberof TopLeaderboard.Items
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Items.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.playerName != null && message.hasOwnProperty("playerName"))
                if (!$util.isString(message.playerName))
                    return "playerName: string expected";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (!$util.isString(message.playerId))
                    return "playerId: string expected";
            if (message.country != null && message.hasOwnProperty("country"))
                if (!$util.isString(message.country))
                    return "country: string expected";
            if (message.score != null && message.hasOwnProperty("score"))
                if (!$util.isInteger(message.score))
                    return "score: integer expected";
            if (message.rank != null && message.hasOwnProperty("rank"))
                if (!$util.isInteger(message.rank))
                    return "rank: integer expected";
            return null;
        };

        /**
         * Creates an Items message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TopLeaderboard.Items
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TopLeaderboard.Items} Items
         */
        Items.fromObject = function fromObject(object) {
            if (object instanceof $root.TopLeaderboard.Items)
                return object;
            let message = new $root.TopLeaderboard.Items();
            if (object.playerName != null)
                message.playerName = String(object.playerName);
            if (object.playerId != null)
                message.playerId = String(object.playerId);
            if (object.country != null)
                message.country = String(object.country);
            if (object.score != null)
                message.score = object.score >>> 0;
            if (object.rank != null)
                message.rank = object.rank >>> 0;
            return message;
        };

        /**
         * Creates a plain object from an Items message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TopLeaderboard.Items
         * @static
         * @param {TopLeaderboard.Items} message Items
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Items.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.playerName = "";
                object.playerId = "";
                object.country = "";
                object.score = 0;
                object.rank = 0;
            }
            if (message.playerName != null && message.hasOwnProperty("playerName"))
                object.playerName = message.playerName;
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                object.playerId = message.playerId;
            if (message.country != null && message.hasOwnProperty("country"))
                object.country = message.country;
            if (message.score != null && message.hasOwnProperty("score"))
                object.score = message.score;
            if (message.rank != null && message.hasOwnProperty("rank"))
                object.rank = message.rank;
            return object;
        };

        /**
         * Converts this Items to JSON.
         * @function toJSON
         * @memberof TopLeaderboard.Items
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Items.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Items
         * @function getTypeUrl
         * @memberof TopLeaderboard.Items
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Items.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/TopLeaderboard.Items";
        };

        return Items;
    })();

    return TopLeaderboard;
})();

export const GetMyRankLeaderboardInput = $root.GetMyRankLeaderboardInput = (() => {

    /**
     * Properties of a GetMyRankLeaderboardInput.
     * @exports IGetMyRankLeaderboardInput
     * @interface IGetMyRankLeaderboardInput
     * @property {string|null} [name] GetMyRankLeaderboardInput name
     * @property {string|null} [country] GetMyRankLeaderboardInput country
     * @property {boolean|null} [reverseOrder] GetMyRankLeaderboardInput reverseOrder
     */

    /**
     * Constructs a new GetMyRankLeaderboardInput.
     * @exports GetMyRankLeaderboardInput
     * @classdesc Represents a GetMyRankLeaderboardInput.
     * @implements IGetMyRankLeaderboardInput
     * @constructor
     * @param {IGetMyRankLeaderboardInput=} [properties] Properties to set
     */
    function GetMyRankLeaderboardInput(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetMyRankLeaderboardInput name.
     * @member {string} name
     * @memberof GetMyRankLeaderboardInput
     * @instance
     */
    GetMyRankLeaderboardInput.prototype.name = "";

    /**
     * GetMyRankLeaderboardInput country.
     * @member {string} country
     * @memberof GetMyRankLeaderboardInput
     * @instance
     */
    GetMyRankLeaderboardInput.prototype.country = "";

    /**
     * GetMyRankLeaderboardInput reverseOrder.
     * @member {boolean} reverseOrder
     * @memberof GetMyRankLeaderboardInput
     * @instance
     */
    GetMyRankLeaderboardInput.prototype.reverseOrder = false;

    /**
     * Creates a new GetMyRankLeaderboardInput instance using the specified properties.
     * @function create
     * @memberof GetMyRankLeaderboardInput
     * @static
     * @param {IGetMyRankLeaderboardInput=} [properties] Properties to set
     * @returns {GetMyRankLeaderboardInput} GetMyRankLeaderboardInput instance
     */
    GetMyRankLeaderboardInput.create = function create(properties) {
        return new GetMyRankLeaderboardInput(properties);
    };

    /**
     * Encodes the specified GetMyRankLeaderboardInput message. Does not implicitly {@link GetMyRankLeaderboardInput.verify|verify} messages.
     * @function encode
     * @memberof GetMyRankLeaderboardInput
     * @static
     * @param {IGetMyRankLeaderboardInput} message GetMyRankLeaderboardInput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetMyRankLeaderboardInput.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        if (message.country != null && Object.hasOwnProperty.call(message, "country"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.country);
        if (message.reverseOrder != null && Object.hasOwnProperty.call(message, "reverseOrder"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.reverseOrder);
        return writer;
    };

    /**
     * Encodes the specified GetMyRankLeaderboardInput message, length delimited. Does not implicitly {@link GetMyRankLeaderboardInput.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GetMyRankLeaderboardInput
     * @static
     * @param {IGetMyRankLeaderboardInput} message GetMyRankLeaderboardInput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetMyRankLeaderboardInput.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetMyRankLeaderboardInput message from the specified reader or buffer.
     * @function decode
     * @memberof GetMyRankLeaderboardInput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetMyRankLeaderboardInput} GetMyRankLeaderboardInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetMyRankLeaderboardInput.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetMyRankLeaderboardInput();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.name = reader.string();
                    break;
                }
            case 2: {
                    message.country = reader.string();
                    break;
                }
            case 3: {
                    message.reverseOrder = reader.bool();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GetMyRankLeaderboardInput message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GetMyRankLeaderboardInput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GetMyRankLeaderboardInput} GetMyRankLeaderboardInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetMyRankLeaderboardInput.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GetMyRankLeaderboardInput message.
     * @function verify
     * @memberof GetMyRankLeaderboardInput
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetMyRankLeaderboardInput.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.country != null && message.hasOwnProperty("country"))
            if (!$util.isString(message.country))
                return "country: string expected";
        if (message.reverseOrder != null && message.hasOwnProperty("reverseOrder"))
            if (typeof message.reverseOrder !== "boolean")
                return "reverseOrder: boolean expected";
        return null;
    };

    /**
     * Creates a GetMyRankLeaderboardInput message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GetMyRankLeaderboardInput
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GetMyRankLeaderboardInput} GetMyRankLeaderboardInput
     */
    GetMyRankLeaderboardInput.fromObject = function fromObject(object) {
        if (object instanceof $root.GetMyRankLeaderboardInput)
            return object;
        let message = new $root.GetMyRankLeaderboardInput();
        if (object.name != null)
            message.name = String(object.name);
        if (object.country != null)
            message.country = String(object.country);
        if (object.reverseOrder != null)
            message.reverseOrder = Boolean(object.reverseOrder);
        return message;
    };

    /**
     * Creates a plain object from a GetMyRankLeaderboardInput message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GetMyRankLeaderboardInput
     * @static
     * @param {GetMyRankLeaderboardInput} message GetMyRankLeaderboardInput
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetMyRankLeaderboardInput.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.name = "";
            object.country = "";
            object.reverseOrder = false;
        }
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.country != null && message.hasOwnProperty("country"))
            object.country = message.country;
        if (message.reverseOrder != null && message.hasOwnProperty("reverseOrder"))
            object.reverseOrder = message.reverseOrder;
        return object;
    };

    /**
     * Converts this GetMyRankLeaderboardInput to JSON.
     * @function toJSON
     * @memberof GetMyRankLeaderboardInput
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetMyRankLeaderboardInput.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for GetMyRankLeaderboardInput
     * @function getTypeUrl
     * @memberof GetMyRankLeaderboardInput
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    GetMyRankLeaderboardInput.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/GetMyRankLeaderboardInput";
    };

    return GetMyRankLeaderboardInput;
})();

export const GetMyRankLeaderboardOutput = $root.GetMyRankLeaderboardOutput = (() => {

    /**
     * Properties of a GetMyRankLeaderboardOutput.
     * @exports IGetMyRankLeaderboardOutput
     * @interface IGetMyRankLeaderboardOutput
     * @property {number|null} [rank] GetMyRankLeaderboardOutput rank
     * @property {number|null} [minRank] GetMyRankLeaderboardOutput minRank
     * @property {number|null} [score] GetMyRankLeaderboardOutput score
     * @property {string|null} [playerName] GetMyRankLeaderboardOutput playerName
     * @property {string|null} [playerId] GetMyRankLeaderboardOutput playerId
     * @property {string|null} [country] GetMyRankLeaderboardOutput country
     */

    /**
     * Constructs a new GetMyRankLeaderboardOutput.
     * @exports GetMyRankLeaderboardOutput
     * @classdesc Represents a GetMyRankLeaderboardOutput.
     * @implements IGetMyRankLeaderboardOutput
     * @constructor
     * @param {IGetMyRankLeaderboardOutput=} [properties] Properties to set
     */
    function GetMyRankLeaderboardOutput(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetMyRankLeaderboardOutput rank.
     * @member {number} rank
     * @memberof GetMyRankLeaderboardOutput
     * @instance
     */
    GetMyRankLeaderboardOutput.prototype.rank = 0;

    /**
     * GetMyRankLeaderboardOutput minRank.
     * @member {number} minRank
     * @memberof GetMyRankLeaderboardOutput
     * @instance
     */
    GetMyRankLeaderboardOutput.prototype.minRank = 0;

    /**
     * GetMyRankLeaderboardOutput score.
     * @member {number} score
     * @memberof GetMyRankLeaderboardOutput
     * @instance
     */
    GetMyRankLeaderboardOutput.prototype.score = 0;

    /**
     * GetMyRankLeaderboardOutput playerName.
     * @member {string} playerName
     * @memberof GetMyRankLeaderboardOutput
     * @instance
     */
    GetMyRankLeaderboardOutput.prototype.playerName = "";

    /**
     * GetMyRankLeaderboardOutput playerId.
     * @member {string} playerId
     * @memberof GetMyRankLeaderboardOutput
     * @instance
     */
    GetMyRankLeaderboardOutput.prototype.playerId = "";

    /**
     * GetMyRankLeaderboardOutput country.
     * @member {string} country
     * @memberof GetMyRankLeaderboardOutput
     * @instance
     */
    GetMyRankLeaderboardOutput.prototype.country = "";

    /**
     * Creates a new GetMyRankLeaderboardOutput instance using the specified properties.
     * @function create
     * @memberof GetMyRankLeaderboardOutput
     * @static
     * @param {IGetMyRankLeaderboardOutput=} [properties] Properties to set
     * @returns {GetMyRankLeaderboardOutput} GetMyRankLeaderboardOutput instance
     */
    GetMyRankLeaderboardOutput.create = function create(properties) {
        return new GetMyRankLeaderboardOutput(properties);
    };

    /**
     * Encodes the specified GetMyRankLeaderboardOutput message. Does not implicitly {@link GetMyRankLeaderboardOutput.verify|verify} messages.
     * @function encode
     * @memberof GetMyRankLeaderboardOutput
     * @static
     * @param {IGetMyRankLeaderboardOutput} message GetMyRankLeaderboardOutput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetMyRankLeaderboardOutput.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.rank != null && Object.hasOwnProperty.call(message, "rank"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.rank);
        if (message.minRank != null && Object.hasOwnProperty.call(message, "minRank"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.minRank);
        if (message.score != null && Object.hasOwnProperty.call(message, "score"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.score);
        if (message.playerName != null && Object.hasOwnProperty.call(message, "playerName"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.playerName);
        if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.playerId);
        if (message.country != null && Object.hasOwnProperty.call(message, "country"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.country);
        return writer;
    };

    /**
     * Encodes the specified GetMyRankLeaderboardOutput message, length delimited. Does not implicitly {@link GetMyRankLeaderboardOutput.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GetMyRankLeaderboardOutput
     * @static
     * @param {IGetMyRankLeaderboardOutput} message GetMyRankLeaderboardOutput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetMyRankLeaderboardOutput.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetMyRankLeaderboardOutput message from the specified reader or buffer.
     * @function decode
     * @memberof GetMyRankLeaderboardOutput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetMyRankLeaderboardOutput} GetMyRankLeaderboardOutput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetMyRankLeaderboardOutput.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetMyRankLeaderboardOutput();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.rank = reader.uint32();
                    break;
                }
            case 2: {
                    message.minRank = reader.uint32();
                    break;
                }
            case 3: {
                    message.score = reader.uint32();
                    break;
                }
            case 4: {
                    message.playerName = reader.string();
                    break;
                }
            case 5: {
                    message.playerId = reader.string();
                    break;
                }
            case 6: {
                    message.country = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GetMyRankLeaderboardOutput message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GetMyRankLeaderboardOutput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GetMyRankLeaderboardOutput} GetMyRankLeaderboardOutput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetMyRankLeaderboardOutput.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GetMyRankLeaderboardOutput message.
     * @function verify
     * @memberof GetMyRankLeaderboardOutput
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetMyRankLeaderboardOutput.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.rank != null && message.hasOwnProperty("rank"))
            if (!$util.isInteger(message.rank))
                return "rank: integer expected";
        if (message.minRank != null && message.hasOwnProperty("minRank"))
            if (!$util.isInteger(message.minRank))
                return "minRank: integer expected";
        if (message.score != null && message.hasOwnProperty("score"))
            if (!$util.isInteger(message.score))
                return "score: integer expected";
        if (message.playerName != null && message.hasOwnProperty("playerName"))
            if (!$util.isString(message.playerName))
                return "playerName: string expected";
        if (message.playerId != null && message.hasOwnProperty("playerId"))
            if (!$util.isString(message.playerId))
                return "playerId: string expected";
        if (message.country != null && message.hasOwnProperty("country"))
            if (!$util.isString(message.country))
                return "country: string expected";
        return null;
    };

    /**
     * Creates a GetMyRankLeaderboardOutput message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GetMyRankLeaderboardOutput
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GetMyRankLeaderboardOutput} GetMyRankLeaderboardOutput
     */
    GetMyRankLeaderboardOutput.fromObject = function fromObject(object) {
        if (object instanceof $root.GetMyRankLeaderboardOutput)
            return object;
        let message = new $root.GetMyRankLeaderboardOutput();
        if (object.rank != null)
            message.rank = object.rank >>> 0;
        if (object.minRank != null)
            message.minRank = object.minRank >>> 0;
        if (object.score != null)
            message.score = object.score >>> 0;
        if (object.playerName != null)
            message.playerName = String(object.playerName);
        if (object.playerId != null)
            message.playerId = String(object.playerId);
        if (object.country != null)
            message.country = String(object.country);
        return message;
    };

    /**
     * Creates a plain object from a GetMyRankLeaderboardOutput message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GetMyRankLeaderboardOutput
     * @static
     * @param {GetMyRankLeaderboardOutput} message GetMyRankLeaderboardOutput
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetMyRankLeaderboardOutput.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.rank = 0;
            object.minRank = 0;
            object.score = 0;
            object.playerName = "";
            object.playerId = "";
            object.country = "";
        }
        if (message.rank != null && message.hasOwnProperty("rank"))
            object.rank = message.rank;
        if (message.minRank != null && message.hasOwnProperty("minRank"))
            object.minRank = message.minRank;
        if (message.score != null && message.hasOwnProperty("score"))
            object.score = message.score;
        if (message.playerName != null && message.hasOwnProperty("playerName"))
            object.playerName = message.playerName;
        if (message.playerId != null && message.hasOwnProperty("playerId"))
            object.playerId = message.playerId;
        if (message.country != null && message.hasOwnProperty("country"))
            object.country = message.country;
        return object;
    };

    /**
     * Converts this GetMyRankLeaderboardOutput to JSON.
     * @function toJSON
     * @memberof GetMyRankLeaderboardOutput
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetMyRankLeaderboardOutput.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for GetMyRankLeaderboardOutput
     * @function getTypeUrl
     * @memberof GetMyRankLeaderboardOutput
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    GetMyRankLeaderboardOutput.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/GetMyRankLeaderboardOutput";
    };

    return GetMyRankLeaderboardOutput;
})();

export const UpdateScoreLeaderboardInput = $root.UpdateScoreLeaderboardInput = (() => {

    /**
     * Properties of an UpdateScoreLeaderboardInput.
     * @exports IUpdateScoreLeaderboardInput
     * @interface IUpdateScoreLeaderboardInput
     * @property {Array.<UpdateScoreLeaderboardInput.IItems>|null} [items] UpdateScoreLeaderboardInput items
     */

    /**
     * Constructs a new UpdateScoreLeaderboardInput.
     * @exports UpdateScoreLeaderboardInput
     * @classdesc Represents an UpdateScoreLeaderboardInput.
     * @implements IUpdateScoreLeaderboardInput
     * @constructor
     * @param {IUpdateScoreLeaderboardInput=} [properties] Properties to set
     */
    function UpdateScoreLeaderboardInput(properties) {
        this.items = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UpdateScoreLeaderboardInput items.
     * @member {Array.<UpdateScoreLeaderboardInput.IItems>} items
     * @memberof UpdateScoreLeaderboardInput
     * @instance
     */
    UpdateScoreLeaderboardInput.prototype.items = $util.emptyArray;

    /**
     * Creates a new UpdateScoreLeaderboardInput instance using the specified properties.
     * @function create
     * @memberof UpdateScoreLeaderboardInput
     * @static
     * @param {IUpdateScoreLeaderboardInput=} [properties] Properties to set
     * @returns {UpdateScoreLeaderboardInput} UpdateScoreLeaderboardInput instance
     */
    UpdateScoreLeaderboardInput.create = function create(properties) {
        return new UpdateScoreLeaderboardInput(properties);
    };

    /**
     * Encodes the specified UpdateScoreLeaderboardInput message. Does not implicitly {@link UpdateScoreLeaderboardInput.verify|verify} messages.
     * @function encode
     * @memberof UpdateScoreLeaderboardInput
     * @static
     * @param {IUpdateScoreLeaderboardInput} message UpdateScoreLeaderboardInput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UpdateScoreLeaderboardInput.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.items != null && message.items.length)
            for (let i = 0; i < message.items.length; ++i)
                $root.UpdateScoreLeaderboardInput.Items.encode(message.items[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified UpdateScoreLeaderboardInput message, length delimited. Does not implicitly {@link UpdateScoreLeaderboardInput.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UpdateScoreLeaderboardInput
     * @static
     * @param {IUpdateScoreLeaderboardInput} message UpdateScoreLeaderboardInput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UpdateScoreLeaderboardInput.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an UpdateScoreLeaderboardInput message from the specified reader or buffer.
     * @function decode
     * @memberof UpdateScoreLeaderboardInput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UpdateScoreLeaderboardInput} UpdateScoreLeaderboardInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UpdateScoreLeaderboardInput.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.UpdateScoreLeaderboardInput();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.items && message.items.length))
                        message.items = [];
                    message.items.push($root.UpdateScoreLeaderboardInput.Items.decode(reader, reader.uint32()));
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an UpdateScoreLeaderboardInput message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UpdateScoreLeaderboardInput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UpdateScoreLeaderboardInput} UpdateScoreLeaderboardInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UpdateScoreLeaderboardInput.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an UpdateScoreLeaderboardInput message.
     * @function verify
     * @memberof UpdateScoreLeaderboardInput
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UpdateScoreLeaderboardInput.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.items != null && message.hasOwnProperty("items")) {
            if (!Array.isArray(message.items))
                return "items: array expected";
            for (let i = 0; i < message.items.length; ++i) {
                let error = $root.UpdateScoreLeaderboardInput.Items.verify(message.items[i]);
                if (error)
                    return "items." + error;
            }
        }
        return null;
    };

    /**
     * Creates an UpdateScoreLeaderboardInput message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UpdateScoreLeaderboardInput
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UpdateScoreLeaderboardInput} UpdateScoreLeaderboardInput
     */
    UpdateScoreLeaderboardInput.fromObject = function fromObject(object) {
        if (object instanceof $root.UpdateScoreLeaderboardInput)
            return object;
        let message = new $root.UpdateScoreLeaderboardInput();
        if (object.items) {
            if (!Array.isArray(object.items))
                throw TypeError(".UpdateScoreLeaderboardInput.items: array expected");
            message.items = [];
            for (let i = 0; i < object.items.length; ++i) {
                if (typeof object.items[i] !== "object")
                    throw TypeError(".UpdateScoreLeaderboardInput.items: object expected");
                message.items[i] = $root.UpdateScoreLeaderboardInput.Items.fromObject(object.items[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from an UpdateScoreLeaderboardInput message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UpdateScoreLeaderboardInput
     * @static
     * @param {UpdateScoreLeaderboardInput} message UpdateScoreLeaderboardInput
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UpdateScoreLeaderboardInput.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.items = [];
        if (message.items && message.items.length) {
            object.items = [];
            for (let j = 0; j < message.items.length; ++j)
                object.items[j] = $root.UpdateScoreLeaderboardInput.Items.toObject(message.items[j], options);
        }
        return object;
    };

    /**
     * Converts this UpdateScoreLeaderboardInput to JSON.
     * @function toJSON
     * @memberof UpdateScoreLeaderboardInput
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UpdateScoreLeaderboardInput.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for UpdateScoreLeaderboardInput
     * @function getTypeUrl
     * @memberof UpdateScoreLeaderboardInput
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    UpdateScoreLeaderboardInput.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/UpdateScoreLeaderboardInput";
    };

    UpdateScoreLeaderboardInput.Items = (function() {

        /**
         * Properties of an Items.
         * @memberof UpdateScoreLeaderboardInput
         * @interface IItems
         * @property {number|null} [score] Items score
         * @property {string|null} [option] Items option
         * @property {string|null} [country] Items country
         * @property {string|null} [name] Items name
         */

        /**
         * Constructs a new Items.
         * @memberof UpdateScoreLeaderboardInput
         * @classdesc Represents an Items.
         * @implements IItems
         * @constructor
         * @param {UpdateScoreLeaderboardInput.IItems=} [properties] Properties to set
         */
        function Items(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Items score.
         * @member {number} score
         * @memberof UpdateScoreLeaderboardInput.Items
         * @instance
         */
        Items.prototype.score = 0;

        /**
         * Items option.
         * @member {string} option
         * @memberof UpdateScoreLeaderboardInput.Items
         * @instance
         */
        Items.prototype.option = "";

        /**
         * Items country.
         * @member {string} country
         * @memberof UpdateScoreLeaderboardInput.Items
         * @instance
         */
        Items.prototype.country = "";

        /**
         * Items name.
         * @member {string} name
         * @memberof UpdateScoreLeaderboardInput.Items
         * @instance
         */
        Items.prototype.name = "";

        /**
         * Creates a new Items instance using the specified properties.
         * @function create
         * @memberof UpdateScoreLeaderboardInput.Items
         * @static
         * @param {UpdateScoreLeaderboardInput.IItems=} [properties] Properties to set
         * @returns {UpdateScoreLeaderboardInput.Items} Items instance
         */
        Items.create = function create(properties) {
            return new Items(properties);
        };

        /**
         * Encodes the specified Items message. Does not implicitly {@link UpdateScoreLeaderboardInput.Items.verify|verify} messages.
         * @function encode
         * @memberof UpdateScoreLeaderboardInput.Items
         * @static
         * @param {UpdateScoreLeaderboardInput.IItems} message Items message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Items.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.score != null && Object.hasOwnProperty.call(message, "score"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.score);
            if (message.option != null && Object.hasOwnProperty.call(message, "option"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.option);
            if (message.country != null && Object.hasOwnProperty.call(message, "country"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.country);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified Items message, length delimited. Does not implicitly {@link UpdateScoreLeaderboardInput.Items.verify|verify} messages.
         * @function encodeDelimited
         * @memberof UpdateScoreLeaderboardInput.Items
         * @static
         * @param {UpdateScoreLeaderboardInput.IItems} message Items message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Items.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Items message from the specified reader or buffer.
         * @function decode
         * @memberof UpdateScoreLeaderboardInput.Items
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {UpdateScoreLeaderboardInput.Items} Items
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Items.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.UpdateScoreLeaderboardInput.Items();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.score = reader.uint32();
                        break;
                    }
                case 2: {
                        message.option = reader.string();
                        break;
                    }
                case 3: {
                        message.country = reader.string();
                        break;
                    }
                case 4: {
                        message.name = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Items message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof UpdateScoreLeaderboardInput.Items
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {UpdateScoreLeaderboardInput.Items} Items
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Items.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Items message.
         * @function verify
         * @memberof UpdateScoreLeaderboardInput.Items
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Items.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.score != null && message.hasOwnProperty("score"))
                if (!$util.isInteger(message.score))
                    return "score: integer expected";
            if (message.option != null && message.hasOwnProperty("option"))
                if (!$util.isString(message.option))
                    return "option: string expected";
            if (message.country != null && message.hasOwnProperty("country"))
                if (!$util.isString(message.country))
                    return "country: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates an Items message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof UpdateScoreLeaderboardInput.Items
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {UpdateScoreLeaderboardInput.Items} Items
         */
        Items.fromObject = function fromObject(object) {
            if (object instanceof $root.UpdateScoreLeaderboardInput.Items)
                return object;
            let message = new $root.UpdateScoreLeaderboardInput.Items();
            if (object.score != null)
                message.score = object.score >>> 0;
            if (object.option != null)
                message.option = String(object.option);
            if (object.country != null)
                message.country = String(object.country);
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from an Items message. Also converts values to other types if specified.
         * @function toObject
         * @memberof UpdateScoreLeaderboardInput.Items
         * @static
         * @param {UpdateScoreLeaderboardInput.Items} message Items
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Items.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.score = 0;
                object.option = "";
                object.country = "";
                object.name = "";
            }
            if (message.score != null && message.hasOwnProperty("score"))
                object.score = message.score;
            if (message.option != null && message.hasOwnProperty("option"))
                object.option = message.option;
            if (message.country != null && message.hasOwnProperty("country"))
                object.country = message.country;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this Items to JSON.
         * @function toJSON
         * @memberof UpdateScoreLeaderboardInput.Items
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Items.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Items
         * @function getTypeUrl
         * @memberof UpdateScoreLeaderboardInput.Items
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Items.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/UpdateScoreLeaderboardInput.Items";
        };

        return Items;
    })();

    return UpdateScoreLeaderboardInput;
})();

export const UpdateScoreLeaderboardOutput = $root.UpdateScoreLeaderboardOutput = (() => {

    /**
     * Properties of an UpdateScoreLeaderboardOutput.
     * @exports IUpdateScoreLeaderboardOutput
     * @interface IUpdateScoreLeaderboardOutput
     * @property {string|null} [status] UpdateScoreLeaderboardOutput status
     */

    /**
     * Constructs a new UpdateScoreLeaderboardOutput.
     * @exports UpdateScoreLeaderboardOutput
     * @classdesc Represents an UpdateScoreLeaderboardOutput.
     * @implements IUpdateScoreLeaderboardOutput
     * @constructor
     * @param {IUpdateScoreLeaderboardOutput=} [properties] Properties to set
     */
    function UpdateScoreLeaderboardOutput(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UpdateScoreLeaderboardOutput status.
     * @member {string} status
     * @memberof UpdateScoreLeaderboardOutput
     * @instance
     */
    UpdateScoreLeaderboardOutput.prototype.status = "";

    /**
     * Creates a new UpdateScoreLeaderboardOutput instance using the specified properties.
     * @function create
     * @memberof UpdateScoreLeaderboardOutput
     * @static
     * @param {IUpdateScoreLeaderboardOutput=} [properties] Properties to set
     * @returns {UpdateScoreLeaderboardOutput} UpdateScoreLeaderboardOutput instance
     */
    UpdateScoreLeaderboardOutput.create = function create(properties) {
        return new UpdateScoreLeaderboardOutput(properties);
    };

    /**
     * Encodes the specified UpdateScoreLeaderboardOutput message. Does not implicitly {@link UpdateScoreLeaderboardOutput.verify|verify} messages.
     * @function encode
     * @memberof UpdateScoreLeaderboardOutput
     * @static
     * @param {IUpdateScoreLeaderboardOutput} message UpdateScoreLeaderboardOutput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UpdateScoreLeaderboardOutput.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.status != null && Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.status);
        return writer;
    };

    /**
     * Encodes the specified UpdateScoreLeaderboardOutput message, length delimited. Does not implicitly {@link UpdateScoreLeaderboardOutput.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UpdateScoreLeaderboardOutput
     * @static
     * @param {IUpdateScoreLeaderboardOutput} message UpdateScoreLeaderboardOutput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UpdateScoreLeaderboardOutput.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an UpdateScoreLeaderboardOutput message from the specified reader or buffer.
     * @function decode
     * @memberof UpdateScoreLeaderboardOutput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UpdateScoreLeaderboardOutput} UpdateScoreLeaderboardOutput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UpdateScoreLeaderboardOutput.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.UpdateScoreLeaderboardOutput();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.status = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an UpdateScoreLeaderboardOutput message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UpdateScoreLeaderboardOutput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UpdateScoreLeaderboardOutput} UpdateScoreLeaderboardOutput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UpdateScoreLeaderboardOutput.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an UpdateScoreLeaderboardOutput message.
     * @function verify
     * @memberof UpdateScoreLeaderboardOutput
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UpdateScoreLeaderboardOutput.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.status != null && message.hasOwnProperty("status"))
            if (!$util.isString(message.status))
                return "status: string expected";
        return null;
    };

    /**
     * Creates an UpdateScoreLeaderboardOutput message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UpdateScoreLeaderboardOutput
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UpdateScoreLeaderboardOutput} UpdateScoreLeaderboardOutput
     */
    UpdateScoreLeaderboardOutput.fromObject = function fromObject(object) {
        if (object instanceof $root.UpdateScoreLeaderboardOutput)
            return object;
        let message = new $root.UpdateScoreLeaderboardOutput();
        if (object.status != null)
            message.status = String(object.status);
        return message;
    };

    /**
     * Creates a plain object from an UpdateScoreLeaderboardOutput message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UpdateScoreLeaderboardOutput
     * @static
     * @param {UpdateScoreLeaderboardOutput} message UpdateScoreLeaderboardOutput
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UpdateScoreLeaderboardOutput.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.status = "";
        if (message.status != null && message.hasOwnProperty("status"))
            object.status = message.status;
        return object;
    };

    /**
     * Converts this UpdateScoreLeaderboardOutput to JSON.
     * @function toJSON
     * @memberof UpdateScoreLeaderboardOutput
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UpdateScoreLeaderboardOutput.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for UpdateScoreLeaderboardOutput
     * @function getTypeUrl
     * @memberof UpdateScoreLeaderboardOutput
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    UpdateScoreLeaderboardOutput.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/UpdateScoreLeaderboardOutput";
    };

    return UpdateScoreLeaderboardOutput;
})();

export const Empty = $root.Empty = (() => {

    /**
     * Properties of an Empty.
     * @exports IEmpty
     * @interface IEmpty
     */

    /**
     * Constructs a new Empty.
     * @exports Empty
     * @classdesc Represents an Empty.
     * @implements IEmpty
     * @constructor
     * @param {IEmpty=} [properties] Properties to set
     */
    function Empty(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new Empty instance using the specified properties.
     * @function create
     * @memberof Empty
     * @static
     * @param {IEmpty=} [properties] Properties to set
     * @returns {Empty} Empty instance
     */
    Empty.create = function create(properties) {
        return new Empty(properties);
    };

    /**
     * Encodes the specified Empty message. Does not implicitly {@link Empty.verify|verify} messages.
     * @function encode
     * @memberof Empty
     * @static
     * @param {IEmpty} message Empty message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Empty.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified Empty message, length delimited. Does not implicitly {@link Empty.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Empty
     * @static
     * @param {IEmpty} message Empty message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Empty.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Empty message from the specified reader or buffer.
     * @function decode
     * @memberof Empty
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Empty} Empty
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Empty.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Empty();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an Empty message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Empty
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Empty} Empty
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Empty.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Empty message.
     * @function verify
     * @memberof Empty
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Empty.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates an Empty message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Empty
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Empty} Empty
     */
    Empty.fromObject = function fromObject(object) {
        if (object instanceof $root.Empty)
            return object;
        return new $root.Empty();
    };

    /**
     * Creates a plain object from an Empty message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Empty
     * @static
     * @param {Empty} message Empty
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Empty.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this Empty to JSON.
     * @function toJSON
     * @memberof Empty
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Empty.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Empty
     * @function getTypeUrl
     * @memberof Empty
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Empty.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Empty";
    };

    return Empty;
})();

/**
 * Service enum.
 * @exports Service
 * @enum {number}
 * @property {number} NOT_USE=0 NOT_USE value
 * @property {number} BLUEPRINT=1 BLUEPRINT value
 * @property {number} PLAYER=2 PLAYER value
 * @property {number} GAMESCRIPT=3 GAMESCRIPT value
 * @property {number} INBOX=4 INBOX value
 * @property {number} LEADERBOARD=5 LEADERBOARD value
 */
export const Service = $root.Service = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "NOT_USE"] = 0;
    values[valuesById[1] = "BLUEPRINT"] = 1;
    values[valuesById[2] = "PLAYER"] = 2;
    values[valuesById[3] = "GAMESCRIPT"] = 3;
    values[valuesById[4] = "INBOX"] = 4;
    values[valuesById[5] = "LEADERBOARD"] = 5;
    return values;
})();

module.exports = $root;
