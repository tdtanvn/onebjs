"use strict";
var $protobuf = require("protobufjs/minimal");
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
export const ProtoMessage = $root.ProtoMessage = (() => {
    function ProtoMessage(properties) {
        this.data = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    ProtoMessage.prototype.service = 0;
    ProtoMessage.prototype.functionName = "";
    ProtoMessage.prototype.namespace = "";
    ProtoMessage.prototype.data = $util.emptyArray;
    ProtoMessage.create = function create(properties) {
        return new ProtoMessage(properties);
    };
    ProtoMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.service != null && Object.hasOwnProperty.call(message, "service"))
            writer.uint32(8).int32(message.service);
        if (message.functionName != null && Object.hasOwnProperty.call(message, "functionName"))
            writer.uint32(18).string(message.functionName);
        if (message.data != null && message.data.length) {
            writer.uint32(26).fork();
            for (let i = 0; i < message.data.length; ++i)
                writer.uint32(message.data[i]);
            writer.ldelim();
        }
        if (message.namespace != null && Object.hasOwnProperty.call(message, "namespace"))
            writer.uint32(34).string(message.namespace);
        return writer;
    };
    ProtoMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
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
                    if (!(message.data && message.data.length))
                        message.data = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.data.push(reader.uint32());
                    }
                    else
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
    ProtoMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
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
            for (let i = 0; i < message.data.length; ++i)
                if (!$util.isInteger(message.data[i]))
                    return "data: integer[] expected";
        }
        return null;
    };
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
            for (let i = 0; i < object.data.length; ++i)
                message.data[i] = object.data[i] >>> 0;
        }
        return message;
    };
    ProtoMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
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
            for (let j = 0; j < message.data.length; ++j)
                object.data[j] = message.data[j];
        }
        if (message.namespace != null && message.hasOwnProperty("namespace"))
            object.namespace = message.namespace;
        return object;
    };
    ProtoMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    ProtoMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ProtoMessage";
    };
    return ProtoMessage;
})();
export const AuthLogin = $root.AuthLogin = (() => {
    function AuthLogin(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    AuthLogin.prototype.playerId = "";
    AuthLogin.prototype.secretKey = "";
    AuthLogin.prototype.gameId = "";
    AuthLogin.prototype.gameVersion = "";
    AuthLogin.prototype.playerName = "";
    AuthLogin.prototype.country = "";
    AuthLogin.prototype.platform = "";
    AuthLogin.create = function create(properties) {
        return new AuthLogin(properties);
    };
    AuthLogin.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
            writer.uint32(10).string(message.playerId);
        if (message.secretKey != null && Object.hasOwnProperty.call(message, "secretKey"))
            writer.uint32(18).string(message.secretKey);
        if (message.gameId != null && Object.hasOwnProperty.call(message, "gameId"))
            writer.uint32(26).string(message.gameId);
        if (message.gameVersion != null && Object.hasOwnProperty.call(message, "gameVersion"))
            writer.uint32(34).string(message.gameVersion);
        if (message.playerName != null && Object.hasOwnProperty.call(message, "playerName"))
            writer.uint32(42).string(message.playerName);
        if (message.country != null && Object.hasOwnProperty.call(message, "country"))
            writer.uint32(50).string(message.country);
        if (message.platform != null && Object.hasOwnProperty.call(message, "platform"))
            writer.uint32(58).string(message.platform);
        return writer;
    };
    AuthLogin.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
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
    AuthLogin.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
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
    AuthLogin.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    AuthLogin.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/AuthLogin";
    };
    return AuthLogin;
})();
export const AuthResponse = $root.AuthResponse = (() => {
    function AuthResponse(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    AuthResponse.prototype.accessToken = "";
    AuthResponse.create = function create(properties) {
        return new AuthResponse(properties);
    };
    AuthResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.accessToken != null && Object.hasOwnProperty.call(message, "accessToken"))
            writer.uint32(10).string(message.accessToken);
        return writer;
    };
    AuthResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
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
    AuthResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    AuthResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.accessToken != null && message.hasOwnProperty("accessToken"))
            if (!$util.isString(message.accessToken))
                return "accessToken: string expected";
        return null;
    };
    AuthResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.AuthResponse)
            return object;
        let message = new $root.AuthResponse();
        if (object.accessToken != null)
            message.accessToken = String(object.accessToken);
        return message;
    };
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
    AuthResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    AuthResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/AuthResponse";
    };
    return AuthResponse;
})();
export const Method = $root.Method = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "NOT_USE_THIS"] = 0;
    values[valuesById[1] = "GET"] = 1;
    values[valuesById[2] = "POST"] = 2;
    return values;
})();
export const Service = $root.Service = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "NOT_USE_THIS"] = 0;
    values[valuesById[1] = "BLUEPRINT"] = 1;
    values[valuesById[2] = "PLAYER"] = 2;
    values[valuesById[3] = "GAMESCRIPT"] = 3;
    return values;
})();
module.exports = $root;
