"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Method = exports.Service = exports.UpdateScoreLeaderboardOutput = exports.UpdateScoreLeaderboardInput = exports.GetMyRankLeaderboardOutput = exports.GetMyRankLeaderboardInput = exports.TopLeaderboard = exports.GetTopLeaderboardInput = exports.InboxDeleteOutput = exports.InboxDeleteInput = exports.InboxClaimOutput = exports.InboxClaimInput = exports.InboxList = exports.LuckyWheelClaimItemOutput = exports.LuckyWheelCanClaimOutput = exports.LuckyWheel = exports.DailyRewardsClaimRewardsOutput = exports.DailyRewardsCanClaimRewardOutput = exports.DailyQuestClaimQuestOutput = exports.DailyQuestClaimQuestInput = exports.DailyQuestUpdateQuestOutput = exports.DailyQuestUpdateQuestInput = exports.DailyQuestDefaultOutput = exports.ProtoMessage = exports.AuthResponse = exports.AuthLogin = void 0;
var $protobuf = require("protobufjs/minimal");
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
exports.AuthLogin = $root.AuthLogin = (() => {
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
exports.AuthResponse = $root.AuthResponse = (() => {
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
exports.ProtoMessage = $root.ProtoMessage = (() => {
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
                case 4:
                case 5:
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
            object.service = options.enums === String ? "NOT_USE" : 0;
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
exports.DailyQuestDefaultOutput = $root.DailyQuestDefaultOutput = (() => {
    function DailyQuestDefaultOutput(properties) {
        this.dailyQuest = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    DailyQuestDefaultOutput.prototype.dailyQuest = $util.emptyArray;
    DailyQuestDefaultOutput.create = function create(properties) {
        return new DailyQuestDefaultOutput(properties);
    };
    DailyQuestDefaultOutput.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.dailyQuest != null && message.dailyQuest.length)
            for (let i = 0; i < message.dailyQuest.length; ++i)
                $root.DailyQuestDefaultOutput.Dailyquest.encode(message.dailyQuest[i], writer.uint32(10).fork()).ldelim();
        return writer;
    };
    DailyQuestDefaultOutput.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    DailyQuestDefaultOutput.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DailyQuestDefaultOutput();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (!(message.dailyQuest && message.dailyQuest.length))
                        message.dailyQuest = [];
                    message.dailyQuest.push($root.DailyQuestDefaultOutput.Dailyquest.decode(reader, reader.uint32()));
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    DailyQuestDefaultOutput.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    DailyQuestDefaultOutput.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.dailyQuest != null && message.hasOwnProperty("dailyQuest")) {
            if (!Array.isArray(message.dailyQuest))
                return "dailyQuest: array expected";
            for (let i = 0; i < message.dailyQuest.length; ++i) {
                let error = $root.DailyQuestDefaultOutput.Dailyquest.verify(message.dailyQuest[i]);
                if (error)
                    return "dailyQuest." + error;
            }
        }
        return null;
    };
    DailyQuestDefaultOutput.fromObject = function fromObject(object) {
        if (object instanceof $root.DailyQuestDefaultOutput)
            return object;
        let message = new $root.DailyQuestDefaultOutput();
        if (object.dailyQuest) {
            if (!Array.isArray(object.dailyQuest))
                throw TypeError(".DailyQuestDefaultOutput.dailyQuest: array expected");
            message.dailyQuest = [];
            for (let i = 0; i < object.dailyQuest.length; ++i) {
                if (typeof object.dailyQuest[i] !== "object")
                    throw TypeError(".DailyQuestDefaultOutput.dailyQuest: object expected");
                message.dailyQuest[i] = $root.DailyQuestDefaultOutput.Dailyquest.fromObject(object.dailyQuest[i]);
            }
        }
        return message;
    };
    DailyQuestDefaultOutput.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.dailyQuest = [];
        if (message.dailyQuest && message.dailyQuest.length) {
            object.dailyQuest = [];
            for (let j = 0; j < message.dailyQuest.length; ++j)
                object.dailyQuest[j] = $root.DailyQuestDefaultOutput.Dailyquest.toObject(message.dailyQuest[j], options);
        }
        return object;
    };
    DailyQuestDefaultOutput.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    DailyQuestDefaultOutput.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/DailyQuestDefaultOutput";
    };
    DailyQuestDefaultOutput.Dailyquest = (function () {
        function Dailyquest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
        Dailyquest.prototype.conditionReach = 0;
        Dailyquest.prototype.rewardQuantity = 0;
        Dailyquest.prototype.condition = "";
        Dailyquest.prototype.rewardId = "";
        Dailyquest.prototype.id = "";
        Dailyquest.prototype.questName = "";
        Dailyquest.prototype.progress = 0;
        Dailyquest.prototype.canClaim = false;
        Dailyquest.create = function create(properties) {
            return new Dailyquest(properties);
        };
        Dailyquest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.conditionReach != null && Object.hasOwnProperty.call(message, "conditionReach"))
                writer.uint32(8).uint32(message.conditionReach);
            if (message.rewardQuantity != null && Object.hasOwnProperty.call(message, "rewardQuantity"))
                writer.uint32(16).uint32(message.rewardQuantity);
            if (message.condition != null && Object.hasOwnProperty.call(message, "condition"))
                writer.uint32(26).string(message.condition);
            if (message.rewardId != null && Object.hasOwnProperty.call(message, "rewardId"))
                writer.uint32(34).string(message.rewardId);
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(42).string(message.id);
            if (message.questName != null && Object.hasOwnProperty.call(message, "questName"))
                writer.uint32(50).string(message.questName);
            if (message.progress != null && Object.hasOwnProperty.call(message, "progress"))
                writer.uint32(56).uint32(message.progress);
            if (message.canClaim != null && Object.hasOwnProperty.call(message, "canClaim"))
                writer.uint32(64).bool(message.canClaim);
            return writer;
        };
        Dailyquest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
        Dailyquest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DailyQuestDefaultOutput.Dailyquest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1: {
                        message.conditionReach = reader.uint32();
                        break;
                    }
                    case 2: {
                        message.rewardQuantity = reader.uint32();
                        break;
                    }
                    case 3: {
                        message.condition = reader.string();
                        break;
                    }
                    case 4: {
                        message.rewardId = reader.string();
                        break;
                    }
                    case 5: {
                        message.id = reader.string();
                        break;
                    }
                    case 6: {
                        message.questName = reader.string();
                        break;
                    }
                    case 7: {
                        message.progress = reader.uint32();
                        break;
                    }
                    case 8: {
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
        Dailyquest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
        Dailyquest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.conditionReach != null && message.hasOwnProperty("conditionReach"))
                if (!$util.isInteger(message.conditionReach))
                    return "conditionReach: integer expected";
            if (message.rewardQuantity != null && message.hasOwnProperty("rewardQuantity"))
                if (!$util.isInteger(message.rewardQuantity))
                    return "rewardQuantity: integer expected";
            if (message.condition != null && message.hasOwnProperty("condition"))
                if (!$util.isString(message.condition))
                    return "condition: string expected";
            if (message.rewardId != null && message.hasOwnProperty("rewardId"))
                if (!$util.isString(message.rewardId))
                    return "rewardId: string expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.questName != null && message.hasOwnProperty("questName"))
                if (!$util.isString(message.questName))
                    return "questName: string expected";
            if (message.progress != null && message.hasOwnProperty("progress"))
                if (!$util.isInteger(message.progress))
                    return "progress: integer expected";
            if (message.canClaim != null && message.hasOwnProperty("canClaim"))
                if (typeof message.canClaim !== "boolean")
                    return "canClaim: boolean expected";
            return null;
        };
        Dailyquest.fromObject = function fromObject(object) {
            if (object instanceof $root.DailyQuestDefaultOutput.Dailyquest)
                return object;
            let message = new $root.DailyQuestDefaultOutput.Dailyquest();
            if (object.conditionReach != null)
                message.conditionReach = object.conditionReach >>> 0;
            if (object.rewardQuantity != null)
                message.rewardQuantity = object.rewardQuantity >>> 0;
            if (object.condition != null)
                message.condition = String(object.condition);
            if (object.rewardId != null)
                message.rewardId = String(object.rewardId);
            if (object.id != null)
                message.id = String(object.id);
            if (object.questName != null)
                message.questName = String(object.questName);
            if (object.progress != null)
                message.progress = object.progress >>> 0;
            if (object.canClaim != null)
                message.canClaim = Boolean(object.canClaim);
            return message;
        };
        Dailyquest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.conditionReach = 0;
                object.rewardQuantity = 0;
                object.condition = "";
                object.rewardId = "";
                object.id = "";
                object.questName = "";
                object.progress = 0;
                object.canClaim = false;
            }
            if (message.conditionReach != null && message.hasOwnProperty("conditionReach"))
                object.conditionReach = message.conditionReach;
            if (message.rewardQuantity != null && message.hasOwnProperty("rewardQuantity"))
                object.rewardQuantity = message.rewardQuantity;
            if (message.condition != null && message.hasOwnProperty("condition"))
                object.condition = message.condition;
            if (message.rewardId != null && message.hasOwnProperty("rewardId"))
                object.rewardId = message.rewardId;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.questName != null && message.hasOwnProperty("questName"))
                object.questName = message.questName;
            if (message.progress != null && message.hasOwnProperty("progress"))
                object.progress = message.progress;
            if (message.canClaim != null && message.hasOwnProperty("canClaim"))
                object.canClaim = message.canClaim;
            return object;
        };
        Dailyquest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        Dailyquest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/DailyQuestDefaultOutput.Dailyquest";
        };
        return Dailyquest;
    })();
    return DailyQuestDefaultOutput;
})();
exports.DailyQuestUpdateQuestInput = $root.DailyQuestUpdateQuestInput = (() => {
    function DailyQuestUpdateQuestInput(properties) {
        this.items = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    DailyQuestUpdateQuestInput.prototype.items = $util.emptyArray;
    DailyQuestUpdateQuestInput.create = function create(properties) {
        return new DailyQuestUpdateQuestInput(properties);
    };
    DailyQuestUpdateQuestInput.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.items != null && message.items.length)
            for (let i = 0; i < message.items.length; ++i)
                $root.DailyQuestUpdateQuestInput.Items.encode(message.items[i], writer.uint32(10).fork()).ldelim();
        return writer;
    };
    DailyQuestUpdateQuestInput.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    DailyQuestUpdateQuestInput.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DailyQuestUpdateQuestInput();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (!(message.items && message.items.length))
                        message.items = [];
                    message.items.push($root.DailyQuestUpdateQuestInput.Items.decode(reader, reader.uint32()));
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    DailyQuestUpdateQuestInput.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    DailyQuestUpdateQuestInput.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.items != null && message.hasOwnProperty("items")) {
            if (!Array.isArray(message.items))
                return "items: array expected";
            for (let i = 0; i < message.items.length; ++i) {
                let error = $root.DailyQuestUpdateQuestInput.Items.verify(message.items[i]);
                if (error)
                    return "items." + error;
            }
        }
        return null;
    };
    DailyQuestUpdateQuestInput.fromObject = function fromObject(object) {
        if (object instanceof $root.DailyQuestUpdateQuestInput)
            return object;
        let message = new $root.DailyQuestUpdateQuestInput();
        if (object.items) {
            if (!Array.isArray(object.items))
                throw TypeError(".DailyQuestUpdateQuestInput.items: array expected");
            message.items = [];
            for (let i = 0; i < object.items.length; ++i) {
                if (typeof object.items[i] !== "object")
                    throw TypeError(".DailyQuestUpdateQuestInput.items: object expected");
                message.items[i] = $root.DailyQuestUpdateQuestInput.Items.fromObject(object.items[i]);
            }
        }
        return message;
    };
    DailyQuestUpdateQuestInput.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.items = [];
        if (message.items && message.items.length) {
            object.items = [];
            for (let j = 0; j < message.items.length; ++j)
                object.items[j] = $root.DailyQuestUpdateQuestInput.Items.toObject(message.items[j], options);
        }
        return object;
    };
    DailyQuestUpdateQuestInput.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    DailyQuestUpdateQuestInput.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/DailyQuestUpdateQuestInput";
    };
    DailyQuestUpdateQuestInput.Items = (function () {
        function Items(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
        Items.prototype.id = "";
        Items.prototype.amount = 0;
        Items.create = function create(properties) {
            return new Items(properties);
        };
        Items.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(10).string(message.id);
            if (message.amount != null && Object.hasOwnProperty.call(message, "amount"))
                writer.uint32(16).uint32(message.amount);
            return writer;
        };
        Items.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
        Items.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DailyQuestUpdateQuestInput.Items();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1: {
                        message.id = reader.string();
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
        Items.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
        Items.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (!$util.isInteger(message.amount))
                    return "amount: integer expected";
            return null;
        };
        Items.fromObject = function fromObject(object) {
            if (object instanceof $root.DailyQuestUpdateQuestInput.Items)
                return object;
            let message = new $root.DailyQuestUpdateQuestInput.Items();
            if (object.id != null)
                message.id = String(object.id);
            if (object.amount != null)
                message.amount = object.amount >>> 0;
            return message;
        };
        Items.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = "";
                object.amount = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.amount != null && message.hasOwnProperty("amount"))
                object.amount = message.amount;
            return object;
        };
        Items.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        Items.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/DailyQuestUpdateQuestInput.Items";
        };
        return Items;
    })();
    return DailyQuestUpdateQuestInput;
})();
exports.DailyQuestUpdateQuestOutput = $root.DailyQuestUpdateQuestOutput = (() => {
    function DailyQuestUpdateQuestOutput(properties) {
        this.questsCanClaim = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    DailyQuestUpdateQuestOutput.prototype.questsCanClaim = $util.emptyArray;
    DailyQuestUpdateQuestOutput.create = function create(properties) {
        return new DailyQuestUpdateQuestOutput(properties);
    };
    DailyQuestUpdateQuestOutput.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.questsCanClaim != null && message.questsCanClaim.length)
            for (let i = 0; i < message.questsCanClaim.length; ++i)
                writer.uint32(18).string(message.questsCanClaim[i]);
        return writer;
    };
    DailyQuestUpdateQuestOutput.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    DailyQuestUpdateQuestOutput.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DailyQuestUpdateQuestOutput();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
                case 2: {
                    if (!(message.questsCanClaim && message.questsCanClaim.length))
                        message.questsCanClaim = [];
                    message.questsCanClaim.push(reader.string());
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    DailyQuestUpdateQuestOutput.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    DailyQuestUpdateQuestOutput.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.questsCanClaim != null && message.hasOwnProperty("questsCanClaim")) {
            if (!Array.isArray(message.questsCanClaim))
                return "questsCanClaim: array expected";
            for (let i = 0; i < message.questsCanClaim.length; ++i)
                if (!$util.isString(message.questsCanClaim[i]))
                    return "questsCanClaim: string[] expected";
        }
        return null;
    };
    DailyQuestUpdateQuestOutput.fromObject = function fromObject(object) {
        if (object instanceof $root.DailyQuestUpdateQuestOutput)
            return object;
        let message = new $root.DailyQuestUpdateQuestOutput();
        if (object.questsCanClaim) {
            if (!Array.isArray(object.questsCanClaim))
                throw TypeError(".DailyQuestUpdateQuestOutput.questsCanClaim: array expected");
            message.questsCanClaim = [];
            for (let i = 0; i < object.questsCanClaim.length; ++i)
                message.questsCanClaim[i] = String(object.questsCanClaim[i]);
        }
        return message;
    };
    DailyQuestUpdateQuestOutput.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.questsCanClaim = [];
        if (message.questsCanClaim && message.questsCanClaim.length) {
            object.questsCanClaim = [];
            for (let j = 0; j < message.questsCanClaim.length; ++j)
                object.questsCanClaim[j] = message.questsCanClaim[j];
        }
        return object;
    };
    DailyQuestUpdateQuestOutput.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    DailyQuestUpdateQuestOutput.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/DailyQuestUpdateQuestOutput";
    };
    return DailyQuestUpdateQuestOutput;
})();
exports.DailyQuestClaimQuestInput = $root.DailyQuestClaimQuestInput = (() => {
    function DailyQuestClaimQuestInput(properties) {
        this.items = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    DailyQuestClaimQuestInput.prototype.items = $util.emptyArray;
    DailyQuestClaimQuestInput.create = function create(properties) {
        return new DailyQuestClaimQuestInput(properties);
    };
    DailyQuestClaimQuestInput.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.items != null && message.items.length)
            for (let i = 0; i < message.items.length; ++i)
                writer.uint32(10).string(message.items[i]);
        return writer;
    };
    DailyQuestClaimQuestInput.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    DailyQuestClaimQuestInput.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DailyQuestClaimQuestInput();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (!(message.items && message.items.length))
                        message.items = [];
                    message.items.push(reader.string());
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    DailyQuestClaimQuestInput.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    DailyQuestClaimQuestInput.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.items != null && message.hasOwnProperty("items")) {
            if (!Array.isArray(message.items))
                return "items: array expected";
            for (let i = 0; i < message.items.length; ++i)
                if (!$util.isString(message.items[i]))
                    return "items: string[] expected";
        }
        return null;
    };
    DailyQuestClaimQuestInput.fromObject = function fromObject(object) {
        if (object instanceof $root.DailyQuestClaimQuestInput)
            return object;
        let message = new $root.DailyQuestClaimQuestInput();
        if (object.items) {
            if (!Array.isArray(object.items))
                throw TypeError(".DailyQuestClaimQuestInput.items: array expected");
            message.items = [];
            for (let i = 0; i < object.items.length; ++i)
                message.items[i] = String(object.items[i]);
        }
        return message;
    };
    DailyQuestClaimQuestInput.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.items = [];
        if (message.items && message.items.length) {
            object.items = [];
            for (let j = 0; j < message.items.length; ++j)
                object.items[j] = message.items[j];
        }
        return object;
    };
    DailyQuestClaimQuestInput.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    DailyQuestClaimQuestInput.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/DailyQuestClaimQuestInput";
    };
    return DailyQuestClaimQuestInput;
})();
exports.DailyQuestClaimQuestOutput = $root.DailyQuestClaimQuestOutput = (() => {
    function DailyQuestClaimQuestOutput(properties) {
        this.rewards = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    DailyQuestClaimQuestOutput.prototype.rewards = $util.emptyArray;
    DailyQuestClaimQuestOutput.create = function create(properties) {
        return new DailyQuestClaimQuestOutput(properties);
    };
    DailyQuestClaimQuestOutput.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.rewards != null && message.rewards.length)
            for (let i = 0; i < message.rewards.length; ++i)
                $root.DailyQuestClaimQuestOutput.Rewards.encode(message.rewards[i], writer.uint32(10).fork()).ldelim();
        return writer;
    };
    DailyQuestClaimQuestOutput.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    DailyQuestClaimQuestOutput.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DailyQuestClaimQuestOutput();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (!(message.rewards && message.rewards.length))
                        message.rewards = [];
                    message.rewards.push($root.DailyQuestClaimQuestOutput.Rewards.decode(reader, reader.uint32()));
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    DailyQuestClaimQuestOutput.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    DailyQuestClaimQuestOutput.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.rewards != null && message.hasOwnProperty("rewards")) {
            if (!Array.isArray(message.rewards))
                return "rewards: array expected";
            for (let i = 0; i < message.rewards.length; ++i) {
                let error = $root.DailyQuestClaimQuestOutput.Rewards.verify(message.rewards[i]);
                if (error)
                    return "rewards." + error;
            }
        }
        return null;
    };
    DailyQuestClaimQuestOutput.fromObject = function fromObject(object) {
        if (object instanceof $root.DailyQuestClaimQuestOutput)
            return object;
        let message = new $root.DailyQuestClaimQuestOutput();
        if (object.rewards) {
            if (!Array.isArray(object.rewards))
                throw TypeError(".DailyQuestClaimQuestOutput.rewards: array expected");
            message.rewards = [];
            for (let i = 0; i < object.rewards.length; ++i) {
                if (typeof object.rewards[i] !== "object")
                    throw TypeError(".DailyQuestClaimQuestOutput.rewards: object expected");
                message.rewards[i] = $root.DailyQuestClaimQuestOutput.Rewards.fromObject(object.rewards[i]);
            }
        }
        return message;
    };
    DailyQuestClaimQuestOutput.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.rewards = [];
        if (message.rewards && message.rewards.length) {
            object.rewards = [];
            for (let j = 0; j < message.rewards.length; ++j)
                object.rewards[j] = $root.DailyQuestClaimQuestOutput.Rewards.toObject(message.rewards[j], options);
        }
        return object;
    };
    DailyQuestClaimQuestOutput.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    DailyQuestClaimQuestOutput.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/DailyQuestClaimQuestOutput";
    };
    DailyQuestClaimQuestOutput.Rewards = (function () {
        function Rewards(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
        Rewards.prototype.itemId = "";
        Rewards.prototype.amount = 0;
        Rewards.create = function create(properties) {
            return new Rewards(properties);
        };
        Rewards.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.itemId != null && Object.hasOwnProperty.call(message, "itemId"))
                writer.uint32(10).string(message.itemId);
            if (message.amount != null && Object.hasOwnProperty.call(message, "amount"))
                writer.uint32(16).uint32(message.amount);
            return writer;
        };
        Rewards.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
        Rewards.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DailyQuestClaimQuestOutput.Rewards();
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
        Rewards.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
        Rewards.verify = function verify(message) {
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
        Rewards.fromObject = function fromObject(object) {
            if (object instanceof $root.DailyQuestClaimQuestOutput.Rewards)
                return object;
            let message = new $root.DailyQuestClaimQuestOutput.Rewards();
            if (object.itemId != null)
                message.itemId = String(object.itemId);
            if (object.amount != null)
                message.amount = object.amount >>> 0;
            return message;
        };
        Rewards.toObject = function toObject(message, options) {
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
        Rewards.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        Rewards.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/DailyQuestClaimQuestOutput.Rewards";
        };
        return Rewards;
    })();
    return DailyQuestClaimQuestOutput;
})();
exports.DailyRewardsCanClaimRewardOutput = $root.DailyRewardsCanClaimRewardOutput = (() => {
    function DailyRewardsCanClaimRewardOutput(properties) {
        this.rewards = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    DailyRewardsCanClaimRewardOutput.prototype.curStep = 0;
    DailyRewardsCanClaimRewardOutput.prototype.rewards = $util.emptyArray;
    DailyRewardsCanClaimRewardOutput.create = function create(properties) {
        return new DailyRewardsCanClaimRewardOutput(properties);
    };
    DailyRewardsCanClaimRewardOutput.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.curStep != null && Object.hasOwnProperty.call(message, "curStep"))
            writer.uint32(8).uint32(message.curStep);
        if (message.rewards != null && message.rewards.length)
            for (let i = 0; i < message.rewards.length; ++i)
                $root.DailyRewardsCanClaimRewardOutput.Rewards.encode(message.rewards[i], writer.uint32(18).fork()).ldelim();
        return writer;
    };
    DailyRewardsCanClaimRewardOutput.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    DailyRewardsCanClaimRewardOutput.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DailyRewardsCanClaimRewardOutput();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    message.curStep = reader.uint32();
                    break;
                }
                case 2: {
                    if (!(message.rewards && message.rewards.length))
                        message.rewards = [];
                    message.rewards.push($root.DailyRewardsCanClaimRewardOutput.Rewards.decode(reader, reader.uint32()));
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    DailyRewardsCanClaimRewardOutput.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    DailyRewardsCanClaimRewardOutput.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.curStep != null && message.hasOwnProperty("curStep"))
            if (!$util.isInteger(message.curStep))
                return "curStep: integer expected";
        if (message.rewards != null && message.hasOwnProperty("rewards")) {
            if (!Array.isArray(message.rewards))
                return "rewards: array expected";
            for (let i = 0; i < message.rewards.length; ++i) {
                let error = $root.DailyRewardsCanClaimRewardOutput.Rewards.verify(message.rewards[i]);
                if (error)
                    return "rewards." + error;
            }
        }
        return null;
    };
    DailyRewardsCanClaimRewardOutput.fromObject = function fromObject(object) {
        if (object instanceof $root.DailyRewardsCanClaimRewardOutput)
            return object;
        let message = new $root.DailyRewardsCanClaimRewardOutput();
        if (object.curStep != null)
            message.curStep = object.curStep >>> 0;
        if (object.rewards) {
            if (!Array.isArray(object.rewards))
                throw TypeError(".DailyRewardsCanClaimRewardOutput.rewards: array expected");
            message.rewards = [];
            for (let i = 0; i < object.rewards.length; ++i) {
                if (typeof object.rewards[i] !== "object")
                    throw TypeError(".DailyRewardsCanClaimRewardOutput.rewards: object expected");
                message.rewards[i] = $root.DailyRewardsCanClaimRewardOutput.Rewards.fromObject(object.rewards[i]);
            }
        }
        return message;
    };
    DailyRewardsCanClaimRewardOutput.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.rewards = [];
        if (options.defaults)
            object.curStep = 0;
        if (message.curStep != null && message.hasOwnProperty("curStep"))
            object.curStep = message.curStep;
        if (message.rewards && message.rewards.length) {
            object.rewards = [];
            for (let j = 0; j < message.rewards.length; ++j)
                object.rewards[j] = $root.DailyRewardsCanClaimRewardOutput.Rewards.toObject(message.rewards[j], options);
        }
        return object;
    };
    DailyRewardsCanClaimRewardOutput.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    DailyRewardsCanClaimRewardOutput.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/DailyRewardsCanClaimRewardOutput";
    };
    DailyRewardsCanClaimRewardOutput.Rewards = (function () {
        function Rewards(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
        Rewards.prototype.itemId = "";
        Rewards.prototype.step = 0;
        Rewards.prototype.amount = 0;
        Rewards.create = function create(properties) {
            return new Rewards(properties);
        };
        Rewards.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.itemId != null && Object.hasOwnProperty.call(message, "itemId"))
                writer.uint32(10).string(message.itemId);
            if (message.step != null && Object.hasOwnProperty.call(message, "step"))
                writer.uint32(16).uint32(message.step);
            if (message.amount != null && Object.hasOwnProperty.call(message, "amount"))
                writer.uint32(24).uint32(message.amount);
            return writer;
        };
        Rewards.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
        Rewards.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DailyRewardsCanClaimRewardOutput.Rewards();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1: {
                        message.itemId = reader.string();
                        break;
                    }
                    case 2: {
                        message.step = reader.uint32();
                        break;
                    }
                    case 3: {
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
        Rewards.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
        Rewards.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.itemId != null && message.hasOwnProperty("itemId"))
                if (!$util.isString(message.itemId))
                    return "itemId: string expected";
            if (message.step != null && message.hasOwnProperty("step"))
                if (!$util.isInteger(message.step))
                    return "step: integer expected";
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (!$util.isInteger(message.amount))
                    return "amount: integer expected";
            return null;
        };
        Rewards.fromObject = function fromObject(object) {
            if (object instanceof $root.DailyRewardsCanClaimRewardOutput.Rewards)
                return object;
            let message = new $root.DailyRewardsCanClaimRewardOutput.Rewards();
            if (object.itemId != null)
                message.itemId = String(object.itemId);
            if (object.step != null)
                message.step = object.step >>> 0;
            if (object.amount != null)
                message.amount = object.amount >>> 0;
            return message;
        };
        Rewards.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.itemId = "";
                object.step = 0;
                object.amount = 0;
            }
            if (message.itemId != null && message.hasOwnProperty("itemId"))
                object.itemId = message.itemId;
            if (message.step != null && message.hasOwnProperty("step"))
                object.step = message.step;
            if (message.amount != null && message.hasOwnProperty("amount"))
                object.amount = message.amount;
            return object;
        };
        Rewards.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        Rewards.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/DailyRewardsCanClaimRewardOutput.Rewards";
        };
        return Rewards;
    })();
    return DailyRewardsCanClaimRewardOutput;
})();
exports.DailyRewardsClaimRewardsOutput = $root.DailyRewardsClaimRewardsOutput = (() => {
    function DailyRewardsClaimRewardsOutput(properties) {
        this.rewards = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    DailyRewardsClaimRewardsOutput.prototype.rewards = $util.emptyArray;
    DailyRewardsClaimRewardsOutput.create = function create(properties) {
        return new DailyRewardsClaimRewardsOutput(properties);
    };
    DailyRewardsClaimRewardsOutput.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.rewards != null && message.rewards.length)
            for (let i = 0; i < message.rewards.length; ++i)
                $root.DailyRewardsClaimRewardsOutput.Rewards.encode(message.rewards[i], writer.uint32(10).fork()).ldelim();
        return writer;
    };
    DailyRewardsClaimRewardsOutput.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    DailyRewardsClaimRewardsOutput.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DailyRewardsClaimRewardsOutput();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (!(message.rewards && message.rewards.length))
                        message.rewards = [];
                    message.rewards.push($root.DailyRewardsClaimRewardsOutput.Rewards.decode(reader, reader.uint32()));
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    DailyRewardsClaimRewardsOutput.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    DailyRewardsClaimRewardsOutput.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.rewards != null && message.hasOwnProperty("rewards")) {
            if (!Array.isArray(message.rewards))
                return "rewards: array expected";
            for (let i = 0; i < message.rewards.length; ++i) {
                let error = $root.DailyRewardsClaimRewardsOutput.Rewards.verify(message.rewards[i]);
                if (error)
                    return "rewards." + error;
            }
        }
        return null;
    };
    DailyRewardsClaimRewardsOutput.fromObject = function fromObject(object) {
        if (object instanceof $root.DailyRewardsClaimRewardsOutput)
            return object;
        let message = new $root.DailyRewardsClaimRewardsOutput();
        if (object.rewards) {
            if (!Array.isArray(object.rewards))
                throw TypeError(".DailyRewardsClaimRewardsOutput.rewards: array expected");
            message.rewards = [];
            for (let i = 0; i < object.rewards.length; ++i) {
                if (typeof object.rewards[i] !== "object")
                    throw TypeError(".DailyRewardsClaimRewardsOutput.rewards: object expected");
                message.rewards[i] = $root.DailyRewardsClaimRewardsOutput.Rewards.fromObject(object.rewards[i]);
            }
        }
        return message;
    };
    DailyRewardsClaimRewardsOutput.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.rewards = [];
        if (message.rewards && message.rewards.length) {
            object.rewards = [];
            for (let j = 0; j < message.rewards.length; ++j)
                object.rewards[j] = $root.DailyRewardsClaimRewardsOutput.Rewards.toObject(message.rewards[j], options);
        }
        return object;
    };
    DailyRewardsClaimRewardsOutput.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    DailyRewardsClaimRewardsOutput.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/DailyRewardsClaimRewardsOutput";
    };
    DailyRewardsClaimRewardsOutput.Rewards = (function () {
        function Rewards(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
        Rewards.prototype.itemId = "";
        Rewards.prototype.amount = 0;
        Rewards.create = function create(properties) {
            return new Rewards(properties);
        };
        Rewards.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.itemId != null && Object.hasOwnProperty.call(message, "itemId"))
                writer.uint32(10).string(message.itemId);
            if (message.amount != null && Object.hasOwnProperty.call(message, "amount"))
                writer.uint32(16).uint32(message.amount);
            return writer;
        };
        Rewards.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
        Rewards.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DailyRewardsClaimRewardsOutput.Rewards();
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
        Rewards.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
        Rewards.verify = function verify(message) {
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
        Rewards.fromObject = function fromObject(object) {
            if (object instanceof $root.DailyRewardsClaimRewardsOutput.Rewards)
                return object;
            let message = new $root.DailyRewardsClaimRewardsOutput.Rewards();
            if (object.itemId != null)
                message.itemId = String(object.itemId);
            if (object.amount != null)
                message.amount = object.amount >>> 0;
            return message;
        };
        Rewards.toObject = function toObject(message, options) {
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
        Rewards.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        Rewards.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/DailyRewardsClaimRewardsOutput.Rewards";
        };
        return Rewards;
    })();
    return DailyRewardsClaimRewardsOutput;
})();
exports.LuckyWheel = $root.LuckyWheel = (() => {
    function LuckyWheel(properties) {
        this.items = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    LuckyWheel.prototype.maxFullSpins = 0;
    LuckyWheel.prototype.minFullSpins = 0;
    LuckyWheel.prototype.dailyLimit = 0;
    LuckyWheel.prototype.items = $util.emptyArray;
    LuckyWheel.create = function create(properties) {
        return new LuckyWheel(properties);
    };
    LuckyWheel.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.maxFullSpins != null && Object.hasOwnProperty.call(message, "maxFullSpins"))
            writer.uint32(8).uint32(message.maxFullSpins);
        if (message.minFullSpins != null && Object.hasOwnProperty.call(message, "minFullSpins"))
            writer.uint32(16).uint32(message.minFullSpins);
        if (message.dailyLimit != null && Object.hasOwnProperty.call(message, "dailyLimit"))
            writer.uint32(24).uint32(message.dailyLimit);
        if (message.items != null && message.items.length)
            for (let i = 0; i < message.items.length; ++i)
                $root.LuckyWheel.Items.encode(message.items[i], writer.uint32(34).fork()).ldelim();
        return writer;
    };
    LuckyWheel.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    LuckyWheel.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.LuckyWheel();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    message.maxFullSpins = reader.uint32();
                    break;
                }
                case 2: {
                    message.minFullSpins = reader.uint32();
                    break;
                }
                case 3: {
                    message.dailyLimit = reader.uint32();
                    break;
                }
                case 4: {
                    if (!(message.items && message.items.length))
                        message.items = [];
                    message.items.push($root.LuckyWheel.Items.decode(reader, reader.uint32()));
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    LuckyWheel.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    LuckyWheel.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.maxFullSpins != null && message.hasOwnProperty("maxFullSpins"))
            if (!$util.isInteger(message.maxFullSpins))
                return "maxFullSpins: integer expected";
        if (message.minFullSpins != null && message.hasOwnProperty("minFullSpins"))
            if (!$util.isInteger(message.minFullSpins))
                return "minFullSpins: integer expected";
        if (message.dailyLimit != null && message.hasOwnProperty("dailyLimit"))
            if (!$util.isInteger(message.dailyLimit))
                return "dailyLimit: integer expected";
        if (message.items != null && message.hasOwnProperty("items")) {
            if (!Array.isArray(message.items))
                return "items: array expected";
            for (let i = 0; i < message.items.length; ++i) {
                let error = $root.LuckyWheel.Items.verify(message.items[i]);
                if (error)
                    return "items." + error;
            }
        }
        return null;
    };
    LuckyWheel.fromObject = function fromObject(object) {
        if (object instanceof $root.LuckyWheel)
            return object;
        let message = new $root.LuckyWheel();
        if (object.maxFullSpins != null)
            message.maxFullSpins = object.maxFullSpins >>> 0;
        if (object.minFullSpins != null)
            message.minFullSpins = object.minFullSpins >>> 0;
        if (object.dailyLimit != null)
            message.dailyLimit = object.dailyLimit >>> 0;
        if (object.items) {
            if (!Array.isArray(object.items))
                throw TypeError(".LuckyWheel.items: array expected");
            message.items = [];
            for (let i = 0; i < object.items.length; ++i) {
                if (typeof object.items[i] !== "object")
                    throw TypeError(".LuckyWheel.items: object expected");
                message.items[i] = $root.LuckyWheel.Items.fromObject(object.items[i]);
            }
        }
        return message;
    };
    LuckyWheel.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.items = [];
        if (options.defaults) {
            object.maxFullSpins = 0;
            object.minFullSpins = 0;
            object.dailyLimit = 0;
        }
        if (message.maxFullSpins != null && message.hasOwnProperty("maxFullSpins"))
            object.maxFullSpins = message.maxFullSpins;
        if (message.minFullSpins != null && message.hasOwnProperty("minFullSpins"))
            object.minFullSpins = message.minFullSpins;
        if (message.dailyLimit != null && message.hasOwnProperty("dailyLimit"))
            object.dailyLimit = message.dailyLimit;
        if (message.items && message.items.length) {
            object.items = [];
            for (let j = 0; j < message.items.length; ++j)
                object.items[j] = $root.LuckyWheel.Items.toObject(message.items[j], options);
        }
        return object;
    };
    LuckyWheel.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    LuckyWheel.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/LuckyWheel";
    };
    LuckyWheel.Items = (function () {
        function Items(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
        Items.prototype.itemId = "";
        Items.prototype.weight = 0;
        Items.prototype.quantity = 0;
        Items.create = function create(properties) {
            return new Items(properties);
        };
        Items.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.itemId != null && Object.hasOwnProperty.call(message, "itemId"))
                writer.uint32(10).string(message.itemId);
            if (message.weight != null && Object.hasOwnProperty.call(message, "weight"))
                writer.uint32(16).uint32(message.weight);
            if (message.quantity != null && Object.hasOwnProperty.call(message, "quantity"))
                writer.uint32(24).uint32(message.quantity);
            return writer;
        };
        Items.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
        Items.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.LuckyWheel.Items();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1: {
                        message.itemId = reader.string();
                        break;
                    }
                    case 2: {
                        message.weight = reader.uint32();
                        break;
                    }
                    case 3: {
                        message.quantity = reader.uint32();
                        break;
                    }
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };
        Items.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
        Items.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.itemId != null && message.hasOwnProperty("itemId"))
                if (!$util.isString(message.itemId))
                    return "itemId: string expected";
            if (message.weight != null && message.hasOwnProperty("weight"))
                if (!$util.isInteger(message.weight))
                    return "weight: integer expected";
            if (message.quantity != null && message.hasOwnProperty("quantity"))
                if (!$util.isInteger(message.quantity))
                    return "quantity: integer expected";
            return null;
        };
        Items.fromObject = function fromObject(object) {
            if (object instanceof $root.LuckyWheel.Items)
                return object;
            let message = new $root.LuckyWheel.Items();
            if (object.itemId != null)
                message.itemId = String(object.itemId);
            if (object.weight != null)
                message.weight = object.weight >>> 0;
            if (object.quantity != null)
                message.quantity = object.quantity >>> 0;
            return message;
        };
        Items.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.itemId = "";
                object.weight = 0;
                object.quantity = 0;
            }
            if (message.itemId != null && message.hasOwnProperty("itemId"))
                object.itemId = message.itemId;
            if (message.weight != null && message.hasOwnProperty("weight"))
                object.weight = message.weight;
            if (message.quantity != null && message.hasOwnProperty("quantity"))
                object.quantity = message.quantity;
            return object;
        };
        Items.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        Items.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/LuckyWheel.Items";
        };
        return Items;
    })();
    return LuckyWheel;
})();
exports.LuckyWheelCanClaimOutput = $root.LuckyWheelCanClaimOutput = (() => {
    function LuckyWheelCanClaimOutput(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    LuckyWheelCanClaimOutput.prototype.canClaim = false;
    LuckyWheelCanClaimOutput.create = function create(properties) {
        return new LuckyWheelCanClaimOutput(properties);
    };
    LuckyWheelCanClaimOutput.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.canClaim != null && Object.hasOwnProperty.call(message, "canClaim"))
            writer.uint32(8).bool(message.canClaim);
        return writer;
    };
    LuckyWheelCanClaimOutput.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    LuckyWheelCanClaimOutput.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.LuckyWheelCanClaimOutput();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
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
    LuckyWheelCanClaimOutput.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    LuckyWheelCanClaimOutput.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.canClaim != null && message.hasOwnProperty("canClaim"))
            if (typeof message.canClaim !== "boolean")
                return "canClaim: boolean expected";
        return null;
    };
    LuckyWheelCanClaimOutput.fromObject = function fromObject(object) {
        if (object instanceof $root.LuckyWheelCanClaimOutput)
            return object;
        let message = new $root.LuckyWheelCanClaimOutput();
        if (object.canClaim != null)
            message.canClaim = Boolean(object.canClaim);
        return message;
    };
    LuckyWheelCanClaimOutput.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.canClaim = false;
        if (message.canClaim != null && message.hasOwnProperty("canClaim"))
            object.canClaim = message.canClaim;
        return object;
    };
    LuckyWheelCanClaimOutput.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    LuckyWheelCanClaimOutput.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/LuckyWheelCanClaimOutput";
    };
    return LuckyWheelCanClaimOutput;
})();
exports.LuckyWheelClaimItemOutput = $root.LuckyWheelClaimItemOutput = (() => {
    function LuckyWheelClaimItemOutput(properties) {
        this.inventory = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    LuckyWheelClaimItemOutput.prototype.itemReward = null;
    LuckyWheelClaimItemOutput.prototype.inventory = $util.emptyArray;
    LuckyWheelClaimItemOutput.create = function create(properties) {
        return new LuckyWheelClaimItemOutput(properties);
    };
    LuckyWheelClaimItemOutput.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.itemReward != null && Object.hasOwnProperty.call(message, "itemReward"))
            $root.LuckyWheelClaimItemOutput.Itemreward.encode(message.itemReward, writer.uint32(10).fork()).ldelim();
        if (message.inventory != null && message.inventory.length)
            for (let i = 0; i < message.inventory.length; ++i)
                $root.LuckyWheelClaimItemOutput.Inventory.encode(message.inventory[i], writer.uint32(18).fork()).ldelim();
        return writer;
    };
    LuckyWheelClaimItemOutput.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    LuckyWheelClaimItemOutput.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.LuckyWheelClaimItemOutput();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    message.itemReward = $root.LuckyWheelClaimItemOutput.Itemreward.decode(reader, reader.uint32());
                    break;
                }
                case 2: {
                    if (!(message.inventory && message.inventory.length))
                        message.inventory = [];
                    message.inventory.push($root.LuckyWheelClaimItemOutput.Inventory.decode(reader, reader.uint32()));
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    LuckyWheelClaimItemOutput.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    LuckyWheelClaimItemOutput.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.itemReward != null && message.hasOwnProperty("itemReward")) {
            let error = $root.LuckyWheelClaimItemOutput.Itemreward.verify(message.itemReward);
            if (error)
                return "itemReward." + error;
        }
        if (message.inventory != null && message.hasOwnProperty("inventory")) {
            if (!Array.isArray(message.inventory))
                return "inventory: array expected";
            for (let i = 0; i < message.inventory.length; ++i) {
                let error = $root.LuckyWheelClaimItemOutput.Inventory.verify(message.inventory[i]);
                if (error)
                    return "inventory." + error;
            }
        }
        return null;
    };
    LuckyWheelClaimItemOutput.fromObject = function fromObject(object) {
        if (object instanceof $root.LuckyWheelClaimItemOutput)
            return object;
        let message = new $root.LuckyWheelClaimItemOutput();
        if (object.itemReward != null) {
            if (typeof object.itemReward !== "object")
                throw TypeError(".LuckyWheelClaimItemOutput.itemReward: object expected");
            message.itemReward = $root.LuckyWheelClaimItemOutput.Itemreward.fromObject(object.itemReward);
        }
        if (object.inventory) {
            if (!Array.isArray(object.inventory))
                throw TypeError(".LuckyWheelClaimItemOutput.inventory: array expected");
            message.inventory = [];
            for (let i = 0; i < object.inventory.length; ++i) {
                if (typeof object.inventory[i] !== "object")
                    throw TypeError(".LuckyWheelClaimItemOutput.inventory: object expected");
                message.inventory[i] = $root.LuckyWheelClaimItemOutput.Inventory.fromObject(object.inventory[i]);
            }
        }
        return message;
    };
    LuckyWheelClaimItemOutput.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.inventory = [];
        if (options.defaults)
            object.itemReward = null;
        if (message.itemReward != null && message.hasOwnProperty("itemReward"))
            object.itemReward = $root.LuckyWheelClaimItemOutput.Itemreward.toObject(message.itemReward, options);
        if (message.inventory && message.inventory.length) {
            object.inventory = [];
            for (let j = 0; j < message.inventory.length; ++j)
                object.inventory[j] = $root.LuckyWheelClaimItemOutput.Inventory.toObject(message.inventory[j], options);
        }
        return object;
    };
    LuckyWheelClaimItemOutput.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    LuckyWheelClaimItemOutput.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/LuckyWheelClaimItemOutput";
    };
    LuckyWheelClaimItemOutput.Itemreward = (function () {
        function Itemreward(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
        Itemreward.prototype.itemId = "";
        Itemreward.prototype.weight = 0;
        Itemreward.prototype.quantity = 0;
        Itemreward.create = function create(properties) {
            return new Itemreward(properties);
        };
        Itemreward.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.itemId != null && Object.hasOwnProperty.call(message, "itemId"))
                writer.uint32(10).string(message.itemId);
            if (message.weight != null && Object.hasOwnProperty.call(message, "weight"))
                writer.uint32(16).uint32(message.weight);
            if (message.quantity != null && Object.hasOwnProperty.call(message, "quantity"))
                writer.uint32(24).uint32(message.quantity);
            return writer;
        };
        Itemreward.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
        Itemreward.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.LuckyWheelClaimItemOutput.Itemreward();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1: {
                        message.itemId = reader.string();
                        break;
                    }
                    case 2: {
                        message.weight = reader.uint32();
                        break;
                    }
                    case 3: {
                        message.quantity = reader.uint32();
                        break;
                    }
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };
        Itemreward.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
        Itemreward.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.itemId != null && message.hasOwnProperty("itemId"))
                if (!$util.isString(message.itemId))
                    return "itemId: string expected";
            if (message.weight != null && message.hasOwnProperty("weight"))
                if (!$util.isInteger(message.weight))
                    return "weight: integer expected";
            if (message.quantity != null && message.hasOwnProperty("quantity"))
                if (!$util.isInteger(message.quantity))
                    return "quantity: integer expected";
            return null;
        };
        Itemreward.fromObject = function fromObject(object) {
            if (object instanceof $root.LuckyWheelClaimItemOutput.Itemreward)
                return object;
            let message = new $root.LuckyWheelClaimItemOutput.Itemreward();
            if (object.itemId != null)
                message.itemId = String(object.itemId);
            if (object.weight != null)
                message.weight = object.weight >>> 0;
            if (object.quantity != null)
                message.quantity = object.quantity >>> 0;
            return message;
        };
        Itemreward.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.itemId = "";
                object.weight = 0;
                object.quantity = 0;
            }
            if (message.itemId != null && message.hasOwnProperty("itemId"))
                object.itemId = message.itemId;
            if (message.weight != null && message.hasOwnProperty("weight"))
                object.weight = message.weight;
            if (message.quantity != null && message.hasOwnProperty("quantity"))
                object.quantity = message.quantity;
            return object;
        };
        Itemreward.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        Itemreward.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/LuckyWheelClaimItemOutput.Itemreward";
        };
        return Itemreward;
    })();
    LuckyWheelClaimItemOutput.Inventory = (function () {
        function Inventory(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
        Inventory.prototype.itemId = "";
        Inventory.prototype.amount = 0;
        Inventory.create = function create(properties) {
            return new Inventory(properties);
        };
        Inventory.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.itemId != null && Object.hasOwnProperty.call(message, "itemId"))
                writer.uint32(10).string(message.itemId);
            if (message.amount != null && Object.hasOwnProperty.call(message, "amount"))
                writer.uint32(16).uint32(message.amount);
            return writer;
        };
        Inventory.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
        Inventory.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.LuckyWheelClaimItemOutput.Inventory();
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
        Inventory.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
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
        Inventory.fromObject = function fromObject(object) {
            if (object instanceof $root.LuckyWheelClaimItemOutput.Inventory)
                return object;
            let message = new $root.LuckyWheelClaimItemOutput.Inventory();
            if (object.itemId != null)
                message.itemId = String(object.itemId);
            if (object.amount != null)
                message.amount = object.amount >>> 0;
            return message;
        };
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
        Inventory.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        Inventory.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/LuckyWheelClaimItemOutput.Inventory";
        };
        return Inventory;
    })();
    return LuckyWheelClaimItemOutput;
})();
exports.InboxList = $root.InboxList = (() => {
    function InboxList(properties) {
        this.items = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    InboxList.prototype.items = $util.emptyArray;
    InboxList.create = function create(properties) {
        return new InboxList(properties);
    };
    InboxList.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.items != null && message.items.length)
            for (let i = 0; i < message.items.length; ++i)
                $root.InboxList.Items.encode(message.items[i], writer.uint32(10).fork()).ldelim();
        return writer;
    };
    InboxList.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
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
    InboxList.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
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
    InboxList.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    InboxList.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/InboxList";
    };
    InboxList.Conditions = (function () {
        function Conditions(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
        Conditions.prototype.value = "";
        Conditions.prototype.operator = "";
        Conditions.prototype.fieldName = "";
        Conditions.create = function create(properties) {
            return new Conditions(properties);
        };
        Conditions.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(10).string(message.value);
            if (message.operator != null && Object.hasOwnProperty.call(message, "operator"))
                writer.uint32(18).string(message.operator);
            if (message.fieldName != null && Object.hasOwnProperty.call(message, "fieldName"))
                writer.uint32(26).string(message.fieldName);
            return writer;
        };
        Conditions.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
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
        Conditions.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
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
        Conditions.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        Conditions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/InboxList.Conditions";
        };
        return Conditions;
    })();
    InboxList.Gifts = (function () {
        function Gifts(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
        Gifts.prototype.itemId = "";
        Gifts.prototype.amount = 0;
        Gifts.create = function create(properties) {
            return new Gifts(properties);
        };
        Gifts.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.itemId != null && Object.hasOwnProperty.call(message, "itemId"))
                writer.uint32(10).string(message.itemId);
            if (message.amount != null && Object.hasOwnProperty.call(message, "amount"))
                writer.uint32(16).uint32(message.amount);
            return writer;
        };
        Gifts.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
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
        Gifts.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
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
        Gifts.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        Gifts.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/InboxList.Gifts";
        };
        return Gifts;
    })();
    InboxList.Items = (function () {
        function Items(properties) {
            this.conditions = [];
            this.gifts = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
        Items.prototype.content = "";
        Items.prototype.conditions = $util.emptyArray;
        Items.prototype.gifts = $util.emptyArray;
        Items.prototype.expiryDate = 0;
        Items.prototype.id = "";
        Items.prototype.title = "";
        Items.prototype.canClaim = false;
        Items.create = function create(properties) {
            return new Items(properties);
        };
        Items.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                writer.uint32(10).string(message.content);
            if (message.conditions != null && message.conditions.length)
                for (let i = 0; i < message.conditions.length; ++i)
                    $root.InboxList.Conditions.encode(message.conditions[i], writer.uint32(18).fork()).ldelim();
            if (message.gifts != null && message.gifts.length)
                for (let i = 0; i < message.gifts.length; ++i)
                    $root.InboxList.Gifts.encode(message.gifts[i], writer.uint32(26).fork()).ldelim();
            if (message.expiryDate != null && Object.hasOwnProperty.call(message, "expiryDate"))
                writer.uint32(32).uint32(message.expiryDate);
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(42).string(message.id);
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                writer.uint32(50).string(message.title);
            if (message.canClaim != null && Object.hasOwnProperty.call(message, "canClaim"))
                writer.uint32(56).bool(message.canClaim);
            return writer;
        };
        Items.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
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
        Items.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
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
        Items.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
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
exports.InboxClaimInput = $root.InboxClaimInput = (() => {
    function InboxClaimInput(properties) {
        this.inboxList = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    InboxClaimInput.prototype.inboxList = $util.emptyArray;
    InboxClaimInput.create = function create(properties) {
        return new InboxClaimInput(properties);
    };
    InboxClaimInput.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.inboxList != null && message.inboxList.length)
            for (let i = 0; i < message.inboxList.length; ++i)
                writer.uint32(10).string(message.inboxList[i]);
        return writer;
    };
    InboxClaimInput.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
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
    InboxClaimInput.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
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
    InboxClaimInput.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    InboxClaimInput.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/InboxClaimInput";
    };
    return InboxClaimInput;
})();
exports.InboxClaimOutput = $root.InboxClaimOutput = (() => {
    function InboxClaimOutput(properties) {
        this.inventory = [];
        this.inboxList = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    InboxClaimOutput.prototype.inventory = $util.emptyArray;
    InboxClaimOutput.prototype.inboxList = $util.emptyArray;
    InboxClaimOutput.create = function create(properties) {
        return new InboxClaimOutput(properties);
    };
    InboxClaimOutput.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.inventory != null && message.inventory.length)
            for (let i = 0; i < message.inventory.length; ++i)
                $root.InboxClaimOutput.Inventory.encode(message.inventory[i], writer.uint32(10).fork()).ldelim();
        if (message.inboxList != null && message.inboxList.length)
            for (let i = 0; i < message.inboxList.length; ++i)
                writer.uint32(18).string(message.inboxList[i]);
        return writer;
    };
    InboxClaimOutput.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
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
    InboxClaimOutput.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
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
    InboxClaimOutput.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    InboxClaimOutput.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/InboxClaimOutput";
    };
    InboxClaimOutput.Inventory = (function () {
        function Inventory(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
        Inventory.prototype.itemId = "";
        Inventory.prototype.amount = 0;
        Inventory.create = function create(properties) {
            return new Inventory(properties);
        };
        Inventory.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.itemId != null && Object.hasOwnProperty.call(message, "itemId"))
                writer.uint32(10).string(message.itemId);
            if (message.amount != null && Object.hasOwnProperty.call(message, "amount"))
                writer.uint32(16).uint32(message.amount);
            return writer;
        };
        Inventory.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
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
        Inventory.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
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
        Inventory.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
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
exports.InboxDeleteInput = $root.InboxDeleteInput = (() => {
    function InboxDeleteInput(properties) {
        this.inboxList = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    InboxDeleteInput.prototype.inboxList = $util.emptyArray;
    InboxDeleteInput.create = function create(properties) {
        return new InboxDeleteInput(properties);
    };
    InboxDeleteInput.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.inboxList != null && message.inboxList.length)
            for (let i = 0; i < message.inboxList.length; ++i)
                writer.uint32(10).string(message.inboxList[i]);
        return writer;
    };
    InboxDeleteInput.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
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
    InboxDeleteInput.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
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
    InboxDeleteInput.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    InboxDeleteInput.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/InboxDeleteInput";
    };
    return InboxDeleteInput;
})();
exports.InboxDeleteOutput = $root.InboxDeleteOutput = (() => {
    function InboxDeleteOutput(properties) {
        this.inboxList = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    InboxDeleteOutput.prototype.inboxList = $util.emptyArray;
    InboxDeleteOutput.create = function create(properties) {
        return new InboxDeleteOutput(properties);
    };
    InboxDeleteOutput.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.inboxList != null && message.inboxList.length)
            for (let i = 0; i < message.inboxList.length; ++i)
                writer.uint32(10).string(message.inboxList[i]);
        return writer;
    };
    InboxDeleteOutput.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
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
    InboxDeleteOutput.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
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
    InboxDeleteOutput.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    InboxDeleteOutput.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/InboxDeleteOutput";
    };
    return InboxDeleteOutput;
})();
exports.GetTopLeaderboardInput = $root.GetTopLeaderboardInput = (() => {
    function GetTopLeaderboardInput(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    GetTopLeaderboardInput.prototype.name = null;
    GetTopLeaderboardInput.prototype.offset = 0;
    GetTopLeaderboardInput.prototype.country = "";
    GetTopLeaderboardInput.prototype.count = null;
    GetTopLeaderboardInput.prototype.reverseOrder = false;
    let $oneOfFields;
    Object.defineProperty(GetTopLeaderboardInput.prototype, "_name", {
        get: $util.oneOfGetter($oneOfFields = ["name"]),
        set: $util.oneOfSetter($oneOfFields)
    });
    Object.defineProperty(GetTopLeaderboardInput.prototype, "_count", {
        get: $util.oneOfGetter($oneOfFields = ["count"]),
        set: $util.oneOfSetter($oneOfFields)
    });
    GetTopLeaderboardInput.create = function create(properties) {
        return new GetTopLeaderboardInput(properties);
    };
    GetTopLeaderboardInput.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(10).string(message.name);
        if (message.offset != null && Object.hasOwnProperty.call(message, "offset"))
            writer.uint32(16).uint32(message.offset);
        if (message.country != null && Object.hasOwnProperty.call(message, "country"))
            writer.uint32(26).string(message.country);
        if (message.count != null && Object.hasOwnProperty.call(message, "count"))
            writer.uint32(32).uint32(message.count);
        if (message.reverseOrder != null && Object.hasOwnProperty.call(message, "reverseOrder"))
            writer.uint32(40).bool(message.reverseOrder);
        return writer;
    };
    GetTopLeaderboardInput.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
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
    GetTopLeaderboardInput.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
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
    GetTopLeaderboardInput.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    GetTopLeaderboardInput.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/GetTopLeaderboardInput";
    };
    return GetTopLeaderboardInput;
})();
exports.TopLeaderboard = $root.TopLeaderboard = (() => {
    function TopLeaderboard(properties) {
        this.items = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    TopLeaderboard.prototype.items = $util.emptyArray;
    TopLeaderboard.create = function create(properties) {
        return new TopLeaderboard(properties);
    };
    TopLeaderboard.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.items != null && message.items.length)
            for (let i = 0; i < message.items.length; ++i)
                $root.TopLeaderboard.Items.encode(message.items[i], writer.uint32(10).fork()).ldelim();
        return writer;
    };
    TopLeaderboard.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
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
    TopLeaderboard.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
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
    TopLeaderboard.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    TopLeaderboard.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/TopLeaderboard";
    };
    TopLeaderboard.Items = (function () {
        function Items(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
        Items.prototype.playerName = "";
        Items.prototype.playerId = "";
        Items.prototype.country = "";
        Items.prototype.score = 0;
        Items.prototype.rank = 0;
        Items.create = function create(properties) {
            return new Items(properties);
        };
        Items.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.playerName != null && Object.hasOwnProperty.call(message, "playerName"))
                writer.uint32(10).string(message.playerName);
            if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                writer.uint32(18).string(message.playerId);
            if (message.country != null && Object.hasOwnProperty.call(message, "country"))
                writer.uint32(26).string(message.country);
            if (message.score != null && Object.hasOwnProperty.call(message, "score"))
                writer.uint32(32).uint32(message.score);
            if (message.rank != null && Object.hasOwnProperty.call(message, "rank"))
                writer.uint32(40).uint32(message.rank);
            return writer;
        };
        Items.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
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
        Items.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
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
        Items.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
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
exports.GetMyRankLeaderboardInput = $root.GetMyRankLeaderboardInput = (() => {
    function GetMyRankLeaderboardInput(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    GetMyRankLeaderboardInput.prototype.name = "";
    GetMyRankLeaderboardInput.prototype.country = "";
    GetMyRankLeaderboardInput.prototype.reverseOrder = false;
    GetMyRankLeaderboardInput.create = function create(properties) {
        return new GetMyRankLeaderboardInput(properties);
    };
    GetMyRankLeaderboardInput.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(10).string(message.name);
        if (message.country != null && Object.hasOwnProperty.call(message, "country"))
            writer.uint32(18).string(message.country);
        if (message.reverseOrder != null && Object.hasOwnProperty.call(message, "reverseOrder"))
            writer.uint32(24).bool(message.reverseOrder);
        return writer;
    };
    GetMyRankLeaderboardInput.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
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
    GetMyRankLeaderboardInput.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
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
    GetMyRankLeaderboardInput.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    GetMyRankLeaderboardInput.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/GetMyRankLeaderboardInput";
    };
    return GetMyRankLeaderboardInput;
})();
exports.GetMyRankLeaderboardOutput = $root.GetMyRankLeaderboardOutput = (() => {
    function GetMyRankLeaderboardOutput(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    GetMyRankLeaderboardOutput.prototype.rank = 0;
    GetMyRankLeaderboardOutput.prototype.minRank = 0;
    GetMyRankLeaderboardOutput.prototype.score = 0;
    GetMyRankLeaderboardOutput.prototype.playerName = "";
    GetMyRankLeaderboardOutput.prototype.playerId = "";
    GetMyRankLeaderboardOutput.prototype.country = "";
    GetMyRankLeaderboardOutput.create = function create(properties) {
        return new GetMyRankLeaderboardOutput(properties);
    };
    GetMyRankLeaderboardOutput.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.rank != null && Object.hasOwnProperty.call(message, "rank"))
            writer.uint32(8).uint32(message.rank);
        if (message.minRank != null && Object.hasOwnProperty.call(message, "minRank"))
            writer.uint32(16).uint32(message.minRank);
        if (message.score != null && Object.hasOwnProperty.call(message, "score"))
            writer.uint32(24).uint32(message.score);
        if (message.playerName != null && Object.hasOwnProperty.call(message, "playerName"))
            writer.uint32(34).string(message.playerName);
        if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
            writer.uint32(42).string(message.playerId);
        if (message.country != null && Object.hasOwnProperty.call(message, "country"))
            writer.uint32(50).string(message.country);
        return writer;
    };
    GetMyRankLeaderboardOutput.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
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
    GetMyRankLeaderboardOutput.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
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
    GetMyRankLeaderboardOutput.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    GetMyRankLeaderboardOutput.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/GetMyRankLeaderboardOutput";
    };
    return GetMyRankLeaderboardOutput;
})();
exports.UpdateScoreLeaderboardInput = $root.UpdateScoreLeaderboardInput = (() => {
    function UpdateScoreLeaderboardInput(properties) {
        this.items = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    UpdateScoreLeaderboardInput.prototype.items = $util.emptyArray;
    UpdateScoreLeaderboardInput.create = function create(properties) {
        return new UpdateScoreLeaderboardInput(properties);
    };
    UpdateScoreLeaderboardInput.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.items != null && message.items.length)
            for (let i = 0; i < message.items.length; ++i)
                $root.UpdateScoreLeaderboardInput.Items.encode(message.items[i], writer.uint32(10).fork()).ldelim();
        return writer;
    };
    UpdateScoreLeaderboardInput.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
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
    UpdateScoreLeaderboardInput.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
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
    UpdateScoreLeaderboardInput.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    UpdateScoreLeaderboardInput.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/UpdateScoreLeaderboardInput";
    };
    UpdateScoreLeaderboardInput.Items = (function () {
        function Items(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
        Items.prototype.score = 0;
        Items.prototype.option = "";
        Items.prototype.country = "";
        Items.prototype.name = "";
        Items.create = function create(properties) {
            return new Items(properties);
        };
        Items.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.score != null && Object.hasOwnProperty.call(message, "score"))
                writer.uint32(8).uint32(message.score);
            if (message.option != null && Object.hasOwnProperty.call(message, "option"))
                writer.uint32(18).string(message.option);
            if (message.country != null && Object.hasOwnProperty.call(message, "country"))
                writer.uint32(26).string(message.country);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(34).string(message.name);
            return writer;
        };
        Items.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
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
        Items.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
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
        Items.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
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
exports.UpdateScoreLeaderboardOutput = $root.UpdateScoreLeaderboardOutput = (() => {
    function UpdateScoreLeaderboardOutput(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    UpdateScoreLeaderboardOutput.prototype.status = "";
    UpdateScoreLeaderboardOutput.create = function create(properties) {
        return new UpdateScoreLeaderboardOutput(properties);
    };
    UpdateScoreLeaderboardOutput.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.status != null && Object.hasOwnProperty.call(message, "status"))
            writer.uint32(10).string(message.status);
        return writer;
    };
    UpdateScoreLeaderboardOutput.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
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
    UpdateScoreLeaderboardOutput.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    UpdateScoreLeaderboardOutput.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.status != null && message.hasOwnProperty("status"))
            if (!$util.isString(message.status))
                return "status: string expected";
        return null;
    };
    UpdateScoreLeaderboardOutput.fromObject = function fromObject(object) {
        if (object instanceof $root.UpdateScoreLeaderboardOutput)
            return object;
        let message = new $root.UpdateScoreLeaderboardOutput();
        if (object.status != null)
            message.status = String(object.status);
        return message;
    };
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
    UpdateScoreLeaderboardOutput.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    UpdateScoreLeaderboardOutput.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/UpdateScoreLeaderboardOutput";
    };
    return UpdateScoreLeaderboardOutput;
})();
exports.Service = $root.Service = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "NOT_USE"] = 0;
    values[valuesById[1] = "BLUEPRINT"] = 1;
    values[valuesById[2] = "PLAYER"] = 2;
    values[valuesById[3] = "GAMESCRIPT"] = 3;
    values[valuesById[4] = "INBOX"] = 4;
    values[valuesById[5] = "LEADERBOARD"] = 5;
    return values;
})();
exports.Method = $root.Method = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "NOT_USE"] = 0;
    values[valuesById[1] = "GET"] = 1;
    values[valuesById[2] = "POST"] = 2;
    return values;
})();
module.exports = $root;
