/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.ProtoMessage = (function() {

    /**
     * Properties of a ProtoMessage.
     * @exports IProtoMessage
     * @interface IProtoMessage
     * @property {Service|null} [service] ProtoMessage service
     * @property {string|null} [functionName] ProtoMessage functionName
     * @property {string|null} [namespace] ProtoMessage namespace
     * @property {Array.<number>|null} [data] ProtoMessage data
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
        this.data = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
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
     * @member {string} functionName
     * @memberof ProtoMessage
     * @instance
     */
    ProtoMessage.prototype.functionName = "";

    /**
     * ProtoMessage namespace.
     * @member {string} namespace
     * @memberof ProtoMessage
     * @instance
     */
    ProtoMessage.prototype.namespace = "";

    /**
     * ProtoMessage data.
     * @member {Array.<number>} data
     * @memberof ProtoMessage
     * @instance
     */
    ProtoMessage.prototype.data = $util.emptyArray;

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
        if (message.data != null && message.data.length) {
            writer.uint32(/* id 3, wireType 2 =*/26).fork();
            for (var i = 0; i < message.data.length; ++i)
                writer.uint32(message.data[i]);
            writer.ldelim();
        }
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
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ProtoMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
                    if (!(message.data && message.data.length))
                        message.data = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.data.push(reader.uint32());
                    } else
                        message.data.push(reader.uint32());
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
        if (message.service != null && message.hasOwnProperty("service"))
            switch (message.service) {
            default:
                return "service: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
                break;
            }
        if (message.functionName != null && message.hasOwnProperty("functionName"))
            if (!$util.isString(message.functionName))
                return "functionName: string expected";
        if (message.namespace != null && message.hasOwnProperty("namespace"))
            if (!$util.isString(message.namespace))
                return "namespace: string expected";
        if (message.data != null && message.hasOwnProperty("data")) {
            if (!Array.isArray(message.data))
                return "data: array expected";
            for (var i = 0; i < message.data.length; ++i)
                if (!$util.isInteger(message.data[i]))
                    return "data: integer[] expected";
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
        var message = new $root.ProtoMessage();
        switch (object.service) {
        default:
            if (typeof object.service === "number") {
                message.service = object.service;
                break;
            }
            break;
        case "NOT_USE_THIS":
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
        }
        if (object.functionName != null)
            message.functionName = String(object.functionName);
        if (object.namespace != null)
            message.namespace = String(object.namespace);
        if (object.data) {
            if (!Array.isArray(object.data))
                throw TypeError(".ProtoMessage.data: array expected");
            message.data = [];
            for (var i = 0; i < object.data.length; ++i)
                message.data[i] = object.data[i] >>> 0;
        }
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
        var object = {};
        if (options.arrays || options.defaults)
            object.data = [];
        if (options.defaults) {
            object.service = options.enums === String ? "NOT_USE_THIS" : 0;
            object.functionName = "";
            object.namespace = "";
        }
        if (message.service != null && message.hasOwnProperty("service"))
            object.service = options.enums === String ? $root.Service[message.service] === undefined ? message.service : $root.Service[message.service] : message.service;
        if (message.functionName != null && message.hasOwnProperty("functionName"))
            object.functionName = message.functionName;
        if (message.data && message.data.length) {
            object.data = [];
            for (var j = 0; j < message.data.length; ++j)
                object.data[j] = message.data[j];
        }
        if (message.namespace != null && message.hasOwnProperty("namespace"))
            object.namespace = message.namespace;
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

$root.AuthLogin = (function() {

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
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
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
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AuthLogin();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
        var message = new $root.AuthLogin();
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
        var object = {};
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

$root.AuthResponse = (function() {

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
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
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
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AuthResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
        var message = new $root.AuthResponse();
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
        var object = {};
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

/**
 * Method enum.
 * @exports Method
 * @enum {number}
 * @property {number} NOT_USE_THIS=0 NOT_USE_THIS value
 * @property {number} GET=1 GET value
 * @property {number} POST=2 POST value
 */
$root.Method = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "NOT_USE_THIS"] = 0;
    values[valuesById[1] = "GET"] = 1;
    values[valuesById[2] = "POST"] = 2;
    return values;
})();

/**
 * Service enum.
 * @exports Service
 * @enum {number}
 * @property {number} NOT_USE_THIS=0 NOT_USE_THIS value
 * @property {number} BLUEPRINT=1 BLUEPRINT value
 * @property {number} PLAYER=2 PLAYER value
 * @property {number} GAMESCRIPT=3 GAMESCRIPT value
 */
$root.Service = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "NOT_USE_THIS"] = 0;
    values[valuesById[1] = "BLUEPRINT"] = 1;
    values[valuesById[2] = "PLAYER"] = 2;
    values[valuesById[3] = "GAMESCRIPT"] = 3;
    return values;
})();

module.exports = $root;
