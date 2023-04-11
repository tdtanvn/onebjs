/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Blueprint = (function() {

    /**
     * Constructs a new Blueprint service.
     * @exports Blueprint
     * @classdesc Represents a Blueprint
     * @extends $protobuf.rpc.Service
     * @constructor
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     */
    function Blueprint(rpcImpl, requestDelimited, responseDelimited) {
        $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
    }

    (Blueprint.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Blueprint;

    /**
     * Creates new Blueprint service using the specified rpc implementation.
     * @function create
     * @memberof Blueprint
     * @static
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     * @returns {Blueprint} RPC service. Useful where requests and/or responses are streamed.
     */
    Blueprint.create = function create(rpcImpl, requestDelimited, responseDelimited) {
        return new this(rpcImpl, requestDelimited, responseDelimited);
    };

    /**
     * Callback as used by {@link Blueprint#getDailyQuests}.
     * @memberof Blueprint
     * @typedef GetDailyQuestsCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {DailyQuests} [response] DailyQuests
     */

    /**
     * Calls GetDailyQuests.
     * @function getDailyQuests
     * @memberof Blueprint
     * @instance
     * @param {IEmpty} request Empty message or plain object
     * @param {Blueprint.GetDailyQuestsCallback} callback Node-style callback called with the error, if any, and DailyQuests
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Blueprint.prototype.getDailyQuests = function getDailyQuests(request, callback) {
        return this.rpcCall(getDailyQuests, $root.Empty, $root.DailyQuests, request, callback);
    }, "name", { value: "GetDailyQuests" });

    /**
     * Calls GetDailyQuests.
     * @function getDailyQuests
     * @memberof Blueprint
     * @instance
     * @param {IEmpty} request Empty message or plain object
     * @returns {Promise<DailyQuests>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link Blueprint#getDailyRewards}.
     * @memberof Blueprint
     * @typedef GetDailyRewardsCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {DailyRewards} [response] DailyRewards
     */

    /**
     * Calls GetDailyRewards.
     * @function getDailyRewards
     * @memberof Blueprint
     * @instance
     * @param {IEmpty} request Empty message or plain object
     * @param {Blueprint.GetDailyRewardsCallback} callback Node-style callback called with the error, if any, and DailyRewards
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Blueprint.prototype.getDailyRewards = function getDailyRewards(request, callback) {
        return this.rpcCall(getDailyRewards, $root.Empty, $root.DailyRewards, request, callback);
    }, "name", { value: "GetDailyRewards" });

    /**
     * Calls GetDailyRewards.
     * @function getDailyRewards
     * @memberof Blueprint
     * @instance
     * @param {IEmpty} request Empty message or plain object
     * @returns {Promise<DailyRewards>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link Blueprint#getItemTable}.
     * @memberof Blueprint
     * @typedef GetItemTableCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {ItemTable} [response] ItemTable
     */

    /**
     * Calls GetItemTable.
     * @function getItemTable
     * @memberof Blueprint
     * @instance
     * @param {IEmpty} request Empty message or plain object
     * @param {Blueprint.GetItemTableCallback} callback Node-style callback called with the error, if any, and ItemTable
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Blueprint.prototype.getItemTable = function getItemTable(request, callback) {
        return this.rpcCall(getItemTable, $root.Empty, $root.ItemTable, request, callback);
    }, "name", { value: "GetItemTable" });

    /**
     * Calls GetItemTable.
     * @function getItemTable
     * @memberof Blueprint
     * @instance
     * @param {IEmpty} request Empty message or plain object
     * @returns {Promise<ItemTable>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link Blueprint#getLuckyWheel}.
     * @memberof Blueprint
     * @typedef GetLuckyWheelCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {LuckyWheel} [response] LuckyWheel
     */

    /**
     * Calls GetLuckyWheel.
     * @function getLuckyWheel
     * @memberof Blueprint
     * @instance
     * @param {IEmpty} request Empty message or plain object
     * @param {Blueprint.GetLuckyWheelCallback} callback Node-style callback called with the error, if any, and LuckyWheel
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Blueprint.prototype.getLuckyWheel = function getLuckyWheel(request, callback) {
        return this.rpcCall(getLuckyWheel, $root.Empty, $root.LuckyWheel, request, callback);
    }, "name", { value: "GetLuckyWheel" });

    /**
     * Calls GetLuckyWheel.
     * @function getLuckyWheel
     * @memberof Blueprint
     * @instance
     * @param {IEmpty} request Empty message or plain object
     * @returns {Promise<LuckyWheel>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link Blueprint#getProgressQuests}.
     * @memberof Blueprint
     * @typedef GetProgressQuestsCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {ProgressQuests} [response] ProgressQuests
     */

    /**
     * Calls GetProgressQuests.
     * @function getProgressQuests
     * @memberof Blueprint
     * @instance
     * @param {IEmpty} request Empty message or plain object
     * @param {Blueprint.GetProgressQuestsCallback} callback Node-style callback called with the error, if any, and ProgressQuests
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Blueprint.prototype.getProgressQuests = function getProgressQuests(request, callback) {
        return this.rpcCall(getProgressQuests, $root.Empty, $root.ProgressQuests, request, callback);
    }, "name", { value: "GetProgressQuests" });

    /**
     * Calls GetProgressQuests.
     * @function getProgressQuests
     * @memberof Blueprint
     * @instance
     * @param {IEmpty} request Empty message or plain object
     * @returns {Promise<ProgressQuests>} Promise
     * @variation 2
     */

    return Blueprint;
})();

$root.DailyQuests = (function() {

    /**
     * Properties of a DailyQuests.
     * @exports IDailyQuests
     * @interface IDailyQuests
     * @property {Array.<DailyQuests.IQuests>|null} [quests] DailyQuests quests
     */

    /**
     * Constructs a new DailyQuests.
     * @exports DailyQuests
     * @classdesc Represents a DailyQuests.
     * @implements IDailyQuests
     * @constructor
     * @param {IDailyQuests=} [properties] Properties to set
     */
    function DailyQuests(properties) {
        this.quests = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DailyQuests quests.
     * @member {Array.<DailyQuests.IQuests>} quests
     * @memberof DailyQuests
     * @instance
     */
    DailyQuests.prototype.quests = $util.emptyArray;

    /**
     * Creates a new DailyQuests instance using the specified properties.
     * @function create
     * @memberof DailyQuests
     * @static
     * @param {IDailyQuests=} [properties] Properties to set
     * @returns {DailyQuests} DailyQuests instance
     */
    DailyQuests.create = function create(properties) {
        return new DailyQuests(properties);
    };

    /**
     * Encodes the specified DailyQuests message. Does not implicitly {@link DailyQuests.verify|verify} messages.
     * @function encode
     * @memberof DailyQuests
     * @static
     * @param {IDailyQuests} message DailyQuests message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DailyQuests.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.quests != null && message.quests.length)
            for (var i = 0; i < message.quests.length; ++i)
                $root.DailyQuests.Quests.encode(message.quests[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified DailyQuests message, length delimited. Does not implicitly {@link DailyQuests.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DailyQuests
     * @static
     * @param {IDailyQuests} message DailyQuests message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DailyQuests.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DailyQuests message from the specified reader or buffer.
     * @function decode
     * @memberof DailyQuests
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DailyQuests} DailyQuests
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DailyQuests.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DailyQuests();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.quests && message.quests.length))
                        message.quests = [];
                    message.quests.push($root.DailyQuests.Quests.decode(reader, reader.uint32()));
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
     * Decodes a DailyQuests message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DailyQuests
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DailyQuests} DailyQuests
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DailyQuests.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DailyQuests message.
     * @function verify
     * @memberof DailyQuests
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DailyQuests.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.quests != null && message.hasOwnProperty("quests")) {
            if (!Array.isArray(message.quests))
                return "quests: array expected";
            for (var i = 0; i < message.quests.length; ++i) {
                var error = $root.DailyQuests.Quests.verify(message.quests[i]);
                if (error)
                    return "quests." + error;
            }
        }
        return null;
    };

    /**
     * Creates a DailyQuests message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DailyQuests
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DailyQuests} DailyQuests
     */
    DailyQuests.fromObject = function fromObject(object) {
        if (object instanceof $root.DailyQuests)
            return object;
        var message = new $root.DailyQuests();
        if (object.quests) {
            if (!Array.isArray(object.quests))
                throw TypeError(".DailyQuests.quests: array expected");
            message.quests = [];
            for (var i = 0; i < object.quests.length; ++i) {
                if (typeof object.quests[i] !== "object")
                    throw TypeError(".DailyQuests.quests: object expected");
                message.quests[i] = $root.DailyQuests.Quests.fromObject(object.quests[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a DailyQuests message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DailyQuests
     * @static
     * @param {DailyQuests} message DailyQuests
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DailyQuests.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.quests = [];
        if (message.quests && message.quests.length) {
            object.quests = [];
            for (var j = 0; j < message.quests.length; ++j)
                object.quests[j] = $root.DailyQuests.Quests.toObject(message.quests[j], options);
        }
        return object;
    };

    /**
     * Converts this DailyQuests to JSON.
     * @function toJSON
     * @memberof DailyQuests
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DailyQuests.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for DailyQuests
     * @function getTypeUrl
     * @memberof DailyQuests
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    DailyQuests.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/DailyQuests";
    };

    DailyQuests.Quests = (function() {

        /**
         * Properties of a Quests.
         * @memberof DailyQuests
         * @interface IQuests
         * @property {string|null} [name] Quests name
         * @property {DailyQuests.Quests.IReward|null} [reward] Quests reward
         * @property {string|null} [description] Quests description
         * @property {string|null} [id] Quests id
         * @property {string|null} [type] Quests type
         * @property {number|null} [target] Quests target
         */

        /**
         * Constructs a new Quests.
         * @memberof DailyQuests
         * @classdesc Represents a Quests.
         * @implements IQuests
         * @constructor
         * @param {DailyQuests.IQuests=} [properties] Properties to set
         */
        function Quests(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Quests name.
         * @member {string} name
         * @memberof DailyQuests.Quests
         * @instance
         */
        Quests.prototype.name = "";

        /**
         * Quests reward.
         * @member {DailyQuests.Quests.IReward|null|undefined} reward
         * @memberof DailyQuests.Quests
         * @instance
         */
        Quests.prototype.reward = null;

        /**
         * Quests description.
         * @member {string} description
         * @memberof DailyQuests.Quests
         * @instance
         */
        Quests.prototype.description = "";

        /**
         * Quests id.
         * @member {string} id
         * @memberof DailyQuests.Quests
         * @instance
         */
        Quests.prototype.id = "";

        /**
         * Quests type.
         * @member {string} type
         * @memberof DailyQuests.Quests
         * @instance
         */
        Quests.prototype.type = "";

        /**
         * Quests target.
         * @member {number} target
         * @memberof DailyQuests.Quests
         * @instance
         */
        Quests.prototype.target = 0;

        /**
         * Creates a new Quests instance using the specified properties.
         * @function create
         * @memberof DailyQuests.Quests
         * @static
         * @param {DailyQuests.IQuests=} [properties] Properties to set
         * @returns {DailyQuests.Quests} Quests instance
         */
        Quests.create = function create(properties) {
            return new Quests(properties);
        };

        /**
         * Encodes the specified Quests message. Does not implicitly {@link DailyQuests.Quests.verify|verify} messages.
         * @function encode
         * @memberof DailyQuests.Quests
         * @static
         * @param {DailyQuests.IQuests} message Quests message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Quests.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.reward != null && Object.hasOwnProperty.call(message, "reward"))
                $root.DailyQuests.Quests.Reward.encode(message.reward, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.description);
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.id);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.type);
            if (message.target != null && Object.hasOwnProperty.call(message, "target"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.target);
            return writer;
        };

        /**
         * Encodes the specified Quests message, length delimited. Does not implicitly {@link DailyQuests.Quests.verify|verify} messages.
         * @function encodeDelimited
         * @memberof DailyQuests.Quests
         * @static
         * @param {DailyQuests.IQuests} message Quests message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Quests.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Quests message from the specified reader or buffer.
         * @function decode
         * @memberof DailyQuests.Quests
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {DailyQuests.Quests} Quests
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Quests.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DailyQuests.Quests();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        message.reward = $root.DailyQuests.Quests.Reward.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.description = reader.string();
                        break;
                    }
                case 4: {
                        message.id = reader.string();
                        break;
                    }
                case 5: {
                        message.type = reader.string();
                        break;
                    }
                case 6: {
                        message.target = reader.int32();
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
         * Decodes a Quests message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof DailyQuests.Quests
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {DailyQuests.Quests} Quests
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Quests.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Quests message.
         * @function verify
         * @memberof DailyQuests.Quests
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Quests.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.reward != null && message.hasOwnProperty("reward")) {
                var error = $root.DailyQuests.Quests.Reward.verify(message.reward);
                if (error)
                    return "reward." + error;
            }
            if (message.description != null && message.hasOwnProperty("description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.target != null && message.hasOwnProperty("target"))
                if (!$util.isInteger(message.target))
                    return "target: integer expected";
            return null;
        };

        /**
         * Creates a Quests message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof DailyQuests.Quests
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {DailyQuests.Quests} Quests
         */
        Quests.fromObject = function fromObject(object) {
            if (object instanceof $root.DailyQuests.Quests)
                return object;
            var message = new $root.DailyQuests.Quests();
            if (object.name != null)
                message.name = String(object.name);
            if (object.reward != null) {
                if (typeof object.reward !== "object")
                    throw TypeError(".DailyQuests.Quests.reward: object expected");
                message.reward = $root.DailyQuests.Quests.Reward.fromObject(object.reward);
            }
            if (object.description != null)
                message.description = String(object.description);
            if (object.id != null)
                message.id = String(object.id);
            if (object.type != null)
                message.type = String(object.type);
            if (object.target != null)
                message.target = object.target | 0;
            return message;
        };

        /**
         * Creates a plain object from a Quests message. Also converts values to other types if specified.
         * @function toObject
         * @memberof DailyQuests.Quests
         * @static
         * @param {DailyQuests.Quests} message Quests
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Quests.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.reward = null;
                object.description = "";
                object.id = "";
                object.type = "";
                object.target = 0;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.reward != null && message.hasOwnProperty("reward"))
                object.reward = $root.DailyQuests.Quests.Reward.toObject(message.reward, options);
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.target != null && message.hasOwnProperty("target"))
                object.target = message.target;
            return object;
        };

        /**
         * Converts this Quests to JSON.
         * @function toJSON
         * @memberof DailyQuests.Quests
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Quests.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Quests
         * @function getTypeUrl
         * @memberof DailyQuests.Quests
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Quests.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/DailyQuests.Quests";
        };

        Quests.Reward = (function() {

            /**
             * Properties of a Reward.
             * @memberof DailyQuests.Quests
             * @interface IReward
             * @property {string|null} [id] Reward id
             * @property {number|null} [quantity] Reward quantity
             */

            /**
             * Constructs a new Reward.
             * @memberof DailyQuests.Quests
             * @classdesc Represents a Reward.
             * @implements IReward
             * @constructor
             * @param {DailyQuests.Quests.IReward=} [properties] Properties to set
             */
            function Reward(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Reward id.
             * @member {string} id
             * @memberof DailyQuests.Quests.Reward
             * @instance
             */
            Reward.prototype.id = "";

            /**
             * Reward quantity.
             * @member {number} quantity
             * @memberof DailyQuests.Quests.Reward
             * @instance
             */
            Reward.prototype.quantity = 0;

            /**
             * Creates a new Reward instance using the specified properties.
             * @function create
             * @memberof DailyQuests.Quests.Reward
             * @static
             * @param {DailyQuests.Quests.IReward=} [properties] Properties to set
             * @returns {DailyQuests.Quests.Reward} Reward instance
             */
            Reward.create = function create(properties) {
                return new Reward(properties);
            };

            /**
             * Encodes the specified Reward message. Does not implicitly {@link DailyQuests.Quests.Reward.verify|verify} messages.
             * @function encode
             * @memberof DailyQuests.Quests.Reward
             * @static
             * @param {DailyQuests.Quests.IReward} message Reward message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Reward.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.quantity != null && Object.hasOwnProperty.call(message, "quantity"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.quantity);
                return writer;
            };

            /**
             * Encodes the specified Reward message, length delimited. Does not implicitly {@link DailyQuests.Quests.Reward.verify|verify} messages.
             * @function encodeDelimited
             * @memberof DailyQuests.Quests.Reward
             * @static
             * @param {DailyQuests.Quests.IReward} message Reward message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Reward.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Reward message from the specified reader or buffer.
             * @function decode
             * @memberof DailyQuests.Quests.Reward
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {DailyQuests.Quests.Reward} Reward
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Reward.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DailyQuests.Quests.Reward();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.id = reader.string();
                            break;
                        }
                    case 2: {
                            message.quantity = reader.int32();
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
             * Decodes a Reward message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof DailyQuests.Quests.Reward
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {DailyQuests.Quests.Reward} Reward
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Reward.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Reward message.
             * @function verify
             * @memberof DailyQuests.Quests.Reward
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Reward.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.quantity != null && message.hasOwnProperty("quantity"))
                    if (!$util.isInteger(message.quantity))
                        return "quantity: integer expected";
                return null;
            };

            /**
             * Creates a Reward message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof DailyQuests.Quests.Reward
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {DailyQuests.Quests.Reward} Reward
             */
            Reward.fromObject = function fromObject(object) {
                if (object instanceof $root.DailyQuests.Quests.Reward)
                    return object;
                var message = new $root.DailyQuests.Quests.Reward();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.quantity != null)
                    message.quantity = object.quantity | 0;
                return message;
            };

            /**
             * Creates a plain object from a Reward message. Also converts values to other types if specified.
             * @function toObject
             * @memberof DailyQuests.Quests.Reward
             * @static
             * @param {DailyQuests.Quests.Reward} message Reward
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Reward.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.quantity = 0;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.quantity != null && message.hasOwnProperty("quantity"))
                    object.quantity = message.quantity;
                return object;
            };

            /**
             * Converts this Reward to JSON.
             * @function toJSON
             * @memberof DailyQuests.Quests.Reward
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Reward.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Reward
             * @function getTypeUrl
             * @memberof DailyQuests.Quests.Reward
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Reward.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/DailyQuests.Quests.Reward";
            };

            return Reward;
        })();

        return Quests;
    })();

    return DailyQuests;
})();

$root.DailyRewards = (function() {

    /**
     * Properties of a DailyRewards.
     * @exports IDailyRewards
     * @interface IDailyRewards
     * @property {number|null} [hoursToReceive] DailyRewards hoursToReceive
     * @property {boolean|null} [resetIfFail] DailyRewards resetIfFail
     * @property {Array.<DailyRewards.ISteps>|null} [steps] DailyRewards steps
     * @property {boolean|null} [enabled] DailyRewards enabled
     * @property {DailyRewards.IDefaultRewardIfAlreadyOwned|null} [defaultRewardIfAlreadyOwned] DailyRewards defaultRewardIfAlreadyOwned
     */

    /**
     * Constructs a new DailyRewards.
     * @exports DailyRewards
     * @classdesc Represents a DailyRewards.
     * @implements IDailyRewards
     * @constructor
     * @param {IDailyRewards=} [properties] Properties to set
     */
    function DailyRewards(properties) {
        this.steps = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DailyRewards hoursToReceive.
     * @member {number} hoursToReceive
     * @memberof DailyRewards
     * @instance
     */
    DailyRewards.prototype.hoursToReceive = 0;

    /**
     * DailyRewards resetIfFail.
     * @member {boolean} resetIfFail
     * @memberof DailyRewards
     * @instance
     */
    DailyRewards.prototype.resetIfFail = false;

    /**
     * DailyRewards steps.
     * @member {Array.<DailyRewards.ISteps>} steps
     * @memberof DailyRewards
     * @instance
     */
    DailyRewards.prototype.steps = $util.emptyArray;

    /**
     * DailyRewards enabled.
     * @member {boolean} enabled
     * @memberof DailyRewards
     * @instance
     */
    DailyRewards.prototype.enabled = false;

    /**
     * DailyRewards defaultRewardIfAlreadyOwned.
     * @member {DailyRewards.IDefaultRewardIfAlreadyOwned|null|undefined} defaultRewardIfAlreadyOwned
     * @memberof DailyRewards
     * @instance
     */
    DailyRewards.prototype.defaultRewardIfAlreadyOwned = null;

    /**
     * Creates a new DailyRewards instance using the specified properties.
     * @function create
     * @memberof DailyRewards
     * @static
     * @param {IDailyRewards=} [properties] Properties to set
     * @returns {DailyRewards} DailyRewards instance
     */
    DailyRewards.create = function create(properties) {
        return new DailyRewards(properties);
    };

    /**
     * Encodes the specified DailyRewards message. Does not implicitly {@link DailyRewards.verify|verify} messages.
     * @function encode
     * @memberof DailyRewards
     * @static
     * @param {IDailyRewards} message DailyRewards message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DailyRewards.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.hoursToReceive != null && Object.hasOwnProperty.call(message, "hoursToReceive"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.hoursToReceive);
        if (message.resetIfFail != null && Object.hasOwnProperty.call(message, "resetIfFail"))
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.resetIfFail);
        if (message.steps != null && message.steps.length)
            for (var i = 0; i < message.steps.length; ++i)
                $root.DailyRewards.Steps.encode(message.steps[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.enabled != null && Object.hasOwnProperty.call(message, "enabled"))
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.enabled);
        if (message.defaultRewardIfAlreadyOwned != null && Object.hasOwnProperty.call(message, "defaultRewardIfAlreadyOwned"))
            $root.DailyRewards.DefaultRewardIfAlreadyOwned.encode(message.defaultRewardIfAlreadyOwned, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified DailyRewards message, length delimited. Does not implicitly {@link DailyRewards.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DailyRewards
     * @static
     * @param {IDailyRewards} message DailyRewards message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DailyRewards.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DailyRewards message from the specified reader or buffer.
     * @function decode
     * @memberof DailyRewards
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DailyRewards} DailyRewards
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DailyRewards.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DailyRewards();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.hoursToReceive = reader.int32();
                    break;
                }
            case 2: {
                    message.resetIfFail = reader.bool();
                    break;
                }
            case 3: {
                    if (!(message.steps && message.steps.length))
                        message.steps = [];
                    message.steps.push($root.DailyRewards.Steps.decode(reader, reader.uint32()));
                    break;
                }
            case 4: {
                    message.enabled = reader.bool();
                    break;
                }
            case 5: {
                    message.defaultRewardIfAlreadyOwned = $root.DailyRewards.DefaultRewardIfAlreadyOwned.decode(reader, reader.uint32());
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
     * Decodes a DailyRewards message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DailyRewards
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DailyRewards} DailyRewards
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DailyRewards.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DailyRewards message.
     * @function verify
     * @memberof DailyRewards
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DailyRewards.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.hoursToReceive != null && message.hasOwnProperty("hoursToReceive"))
            if (!$util.isInteger(message.hoursToReceive))
                return "hoursToReceive: integer expected";
        if (message.resetIfFail != null && message.hasOwnProperty("resetIfFail"))
            if (typeof message.resetIfFail !== "boolean")
                return "resetIfFail: boolean expected";
        if (message.steps != null && message.hasOwnProperty("steps")) {
            if (!Array.isArray(message.steps))
                return "steps: array expected";
            for (var i = 0; i < message.steps.length; ++i) {
                var error = $root.DailyRewards.Steps.verify(message.steps[i]);
                if (error)
                    return "steps." + error;
            }
        }
        if (message.enabled != null && message.hasOwnProperty("enabled"))
            if (typeof message.enabled !== "boolean")
                return "enabled: boolean expected";
        if (message.defaultRewardIfAlreadyOwned != null && message.hasOwnProperty("defaultRewardIfAlreadyOwned")) {
            var error = $root.DailyRewards.DefaultRewardIfAlreadyOwned.verify(message.defaultRewardIfAlreadyOwned);
            if (error)
                return "defaultRewardIfAlreadyOwned." + error;
        }
        return null;
    };

    /**
     * Creates a DailyRewards message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DailyRewards
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DailyRewards} DailyRewards
     */
    DailyRewards.fromObject = function fromObject(object) {
        if (object instanceof $root.DailyRewards)
            return object;
        var message = new $root.DailyRewards();
        if (object.hoursToReceive != null)
            message.hoursToReceive = object.hoursToReceive | 0;
        if (object.resetIfFail != null)
            message.resetIfFail = Boolean(object.resetIfFail);
        if (object.steps) {
            if (!Array.isArray(object.steps))
                throw TypeError(".DailyRewards.steps: array expected");
            message.steps = [];
            for (var i = 0; i < object.steps.length; ++i) {
                if (typeof object.steps[i] !== "object")
                    throw TypeError(".DailyRewards.steps: object expected");
                message.steps[i] = $root.DailyRewards.Steps.fromObject(object.steps[i]);
            }
        }
        if (object.enabled != null)
            message.enabled = Boolean(object.enabled);
        if (object.defaultRewardIfAlreadyOwned != null) {
            if (typeof object.defaultRewardIfAlreadyOwned !== "object")
                throw TypeError(".DailyRewards.defaultRewardIfAlreadyOwned: object expected");
            message.defaultRewardIfAlreadyOwned = $root.DailyRewards.DefaultRewardIfAlreadyOwned.fromObject(object.defaultRewardIfAlreadyOwned);
        }
        return message;
    };

    /**
     * Creates a plain object from a DailyRewards message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DailyRewards
     * @static
     * @param {DailyRewards} message DailyRewards
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DailyRewards.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.steps = [];
        if (options.defaults) {
            object.hoursToReceive = 0;
            object.resetIfFail = false;
            object.enabled = false;
            object.defaultRewardIfAlreadyOwned = null;
        }
        if (message.hoursToReceive != null && message.hasOwnProperty("hoursToReceive"))
            object.hoursToReceive = message.hoursToReceive;
        if (message.resetIfFail != null && message.hasOwnProperty("resetIfFail"))
            object.resetIfFail = message.resetIfFail;
        if (message.steps && message.steps.length) {
            object.steps = [];
            for (var j = 0; j < message.steps.length; ++j)
                object.steps[j] = $root.DailyRewards.Steps.toObject(message.steps[j], options);
        }
        if (message.enabled != null && message.hasOwnProperty("enabled"))
            object.enabled = message.enabled;
        if (message.defaultRewardIfAlreadyOwned != null && message.hasOwnProperty("defaultRewardIfAlreadyOwned"))
            object.defaultRewardIfAlreadyOwned = $root.DailyRewards.DefaultRewardIfAlreadyOwned.toObject(message.defaultRewardIfAlreadyOwned, options);
        return object;
    };

    /**
     * Converts this DailyRewards to JSON.
     * @function toJSON
     * @memberof DailyRewards
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DailyRewards.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for DailyRewards
     * @function getTypeUrl
     * @memberof DailyRewards
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    DailyRewards.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/DailyRewards";
    };

    DailyRewards.Steps = (function() {

        /**
         * Properties of a Steps.
         * @memberof DailyRewards
         * @interface ISteps
         * @property {string|null} [itemId] Steps itemId
         * @property {number|null} [step] Steps step
         * @property {number|null} [amount] Steps amount
         */

        /**
         * Constructs a new Steps.
         * @memberof DailyRewards
         * @classdesc Represents a Steps.
         * @implements ISteps
         * @constructor
         * @param {DailyRewards.ISteps=} [properties] Properties to set
         */
        function Steps(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Steps itemId.
         * @member {string} itemId
         * @memberof DailyRewards.Steps
         * @instance
         */
        Steps.prototype.itemId = "";

        /**
         * Steps step.
         * @member {number} step
         * @memberof DailyRewards.Steps
         * @instance
         */
        Steps.prototype.step = 0;

        /**
         * Steps amount.
         * @member {number} amount
         * @memberof DailyRewards.Steps
         * @instance
         */
        Steps.prototype.amount = 0;

        /**
         * Creates a new Steps instance using the specified properties.
         * @function create
         * @memberof DailyRewards.Steps
         * @static
         * @param {DailyRewards.ISteps=} [properties] Properties to set
         * @returns {DailyRewards.Steps} Steps instance
         */
        Steps.create = function create(properties) {
            return new Steps(properties);
        };

        /**
         * Encodes the specified Steps message. Does not implicitly {@link DailyRewards.Steps.verify|verify} messages.
         * @function encode
         * @memberof DailyRewards.Steps
         * @static
         * @param {DailyRewards.ISteps} message Steps message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Steps.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.itemId != null && Object.hasOwnProperty.call(message, "itemId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.itemId);
            if (message.step != null && Object.hasOwnProperty.call(message, "step"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.step);
            if (message.amount != null && Object.hasOwnProperty.call(message, "amount"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.amount);
            return writer;
        };

        /**
         * Encodes the specified Steps message, length delimited. Does not implicitly {@link DailyRewards.Steps.verify|verify} messages.
         * @function encodeDelimited
         * @memberof DailyRewards.Steps
         * @static
         * @param {DailyRewards.ISteps} message Steps message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Steps.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Steps message from the specified reader or buffer.
         * @function decode
         * @memberof DailyRewards.Steps
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {DailyRewards.Steps} Steps
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Steps.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DailyRewards.Steps();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.itemId = reader.string();
                        break;
                    }
                case 2: {
                        message.step = reader.int32();
                        break;
                    }
                case 3: {
                        message.amount = reader.int32();
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
         * Decodes a Steps message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof DailyRewards.Steps
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {DailyRewards.Steps} Steps
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Steps.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Steps message.
         * @function verify
         * @memberof DailyRewards.Steps
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Steps.verify = function verify(message) {
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

        /**
         * Creates a Steps message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof DailyRewards.Steps
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {DailyRewards.Steps} Steps
         */
        Steps.fromObject = function fromObject(object) {
            if (object instanceof $root.DailyRewards.Steps)
                return object;
            var message = new $root.DailyRewards.Steps();
            if (object.itemId != null)
                message.itemId = String(object.itemId);
            if (object.step != null)
                message.step = object.step | 0;
            if (object.amount != null)
                message.amount = object.amount | 0;
            return message;
        };

        /**
         * Creates a plain object from a Steps message. Also converts values to other types if specified.
         * @function toObject
         * @memberof DailyRewards.Steps
         * @static
         * @param {DailyRewards.Steps} message Steps
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Steps.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
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

        /**
         * Converts this Steps to JSON.
         * @function toJSON
         * @memberof DailyRewards.Steps
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Steps.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Steps
         * @function getTypeUrl
         * @memberof DailyRewards.Steps
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Steps.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/DailyRewards.Steps";
        };

        return Steps;
    })();

    DailyRewards.DefaultRewardIfAlreadyOwned = (function() {

        /**
         * Properties of a DefaultRewardIfAlreadyOwned.
         * @memberof DailyRewards
         * @interface IDefaultRewardIfAlreadyOwned
         * @property {string|null} [itemId] DefaultRewardIfAlreadyOwned itemId
         * @property {number|null} [amount] DefaultRewardIfAlreadyOwned amount
         */

        /**
         * Constructs a new DefaultRewardIfAlreadyOwned.
         * @memberof DailyRewards
         * @classdesc Represents a DefaultRewardIfAlreadyOwned.
         * @implements IDefaultRewardIfAlreadyOwned
         * @constructor
         * @param {DailyRewards.IDefaultRewardIfAlreadyOwned=} [properties] Properties to set
         */
        function DefaultRewardIfAlreadyOwned(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DefaultRewardIfAlreadyOwned itemId.
         * @member {string} itemId
         * @memberof DailyRewards.DefaultRewardIfAlreadyOwned
         * @instance
         */
        DefaultRewardIfAlreadyOwned.prototype.itemId = "";

        /**
         * DefaultRewardIfAlreadyOwned amount.
         * @member {number} amount
         * @memberof DailyRewards.DefaultRewardIfAlreadyOwned
         * @instance
         */
        DefaultRewardIfAlreadyOwned.prototype.amount = 0;

        /**
         * Creates a new DefaultRewardIfAlreadyOwned instance using the specified properties.
         * @function create
         * @memberof DailyRewards.DefaultRewardIfAlreadyOwned
         * @static
         * @param {DailyRewards.IDefaultRewardIfAlreadyOwned=} [properties] Properties to set
         * @returns {DailyRewards.DefaultRewardIfAlreadyOwned} DefaultRewardIfAlreadyOwned instance
         */
        DefaultRewardIfAlreadyOwned.create = function create(properties) {
            return new DefaultRewardIfAlreadyOwned(properties);
        };

        /**
         * Encodes the specified DefaultRewardIfAlreadyOwned message. Does not implicitly {@link DailyRewards.DefaultRewardIfAlreadyOwned.verify|verify} messages.
         * @function encode
         * @memberof DailyRewards.DefaultRewardIfAlreadyOwned
         * @static
         * @param {DailyRewards.IDefaultRewardIfAlreadyOwned} message DefaultRewardIfAlreadyOwned message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DefaultRewardIfAlreadyOwned.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.itemId != null && Object.hasOwnProperty.call(message, "itemId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.itemId);
            if (message.amount != null && Object.hasOwnProperty.call(message, "amount"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.amount);
            return writer;
        };

        /**
         * Encodes the specified DefaultRewardIfAlreadyOwned message, length delimited. Does not implicitly {@link DailyRewards.DefaultRewardIfAlreadyOwned.verify|verify} messages.
         * @function encodeDelimited
         * @memberof DailyRewards.DefaultRewardIfAlreadyOwned
         * @static
         * @param {DailyRewards.IDefaultRewardIfAlreadyOwned} message DefaultRewardIfAlreadyOwned message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DefaultRewardIfAlreadyOwned.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DefaultRewardIfAlreadyOwned message from the specified reader or buffer.
         * @function decode
         * @memberof DailyRewards.DefaultRewardIfAlreadyOwned
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {DailyRewards.DefaultRewardIfAlreadyOwned} DefaultRewardIfAlreadyOwned
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DefaultRewardIfAlreadyOwned.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DailyRewards.DefaultRewardIfAlreadyOwned();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.itemId = reader.string();
                        break;
                    }
                case 2: {
                        message.amount = reader.int32();
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
         * Decodes a DefaultRewardIfAlreadyOwned message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof DailyRewards.DefaultRewardIfAlreadyOwned
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {DailyRewards.DefaultRewardIfAlreadyOwned} DefaultRewardIfAlreadyOwned
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DefaultRewardIfAlreadyOwned.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DefaultRewardIfAlreadyOwned message.
         * @function verify
         * @memberof DailyRewards.DefaultRewardIfAlreadyOwned
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DefaultRewardIfAlreadyOwned.verify = function verify(message) {
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
         * Creates a DefaultRewardIfAlreadyOwned message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof DailyRewards.DefaultRewardIfAlreadyOwned
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {DailyRewards.DefaultRewardIfAlreadyOwned} DefaultRewardIfAlreadyOwned
         */
        DefaultRewardIfAlreadyOwned.fromObject = function fromObject(object) {
            if (object instanceof $root.DailyRewards.DefaultRewardIfAlreadyOwned)
                return object;
            var message = new $root.DailyRewards.DefaultRewardIfAlreadyOwned();
            if (object.itemId != null)
                message.itemId = String(object.itemId);
            if (object.amount != null)
                message.amount = object.amount | 0;
            return message;
        };

        /**
         * Creates a plain object from a DefaultRewardIfAlreadyOwned message. Also converts values to other types if specified.
         * @function toObject
         * @memberof DailyRewards.DefaultRewardIfAlreadyOwned
         * @static
         * @param {DailyRewards.DefaultRewardIfAlreadyOwned} message DefaultRewardIfAlreadyOwned
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DefaultRewardIfAlreadyOwned.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
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
         * Converts this DefaultRewardIfAlreadyOwned to JSON.
         * @function toJSON
         * @memberof DailyRewards.DefaultRewardIfAlreadyOwned
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DefaultRewardIfAlreadyOwned.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DefaultRewardIfAlreadyOwned
         * @function getTypeUrl
         * @memberof DailyRewards.DefaultRewardIfAlreadyOwned
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DefaultRewardIfAlreadyOwned.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/DailyRewards.DefaultRewardIfAlreadyOwned";
        };

        return DefaultRewardIfAlreadyOwned;
    })();

    return DailyRewards;
})();

$root.ItemTable = (function() {

    /**
     * Properties of an ItemTable.
     * @exports IItemTable
     * @interface IItemTable
     * @property {Array.<ItemTable.IItems>|null} [items] ItemTable items
     */

    /**
     * Constructs a new ItemTable.
     * @exports ItemTable
     * @classdesc Represents an ItemTable.
     * @implements IItemTable
     * @constructor
     * @param {IItemTable=} [properties] Properties to set
     */
    function ItemTable(properties) {
        this.items = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ItemTable items.
     * @member {Array.<ItemTable.IItems>} items
     * @memberof ItemTable
     * @instance
     */
    ItemTable.prototype.items = $util.emptyArray;

    /**
     * Creates a new ItemTable instance using the specified properties.
     * @function create
     * @memberof ItemTable
     * @static
     * @param {IItemTable=} [properties] Properties to set
     * @returns {ItemTable} ItemTable instance
     */
    ItemTable.create = function create(properties) {
        return new ItemTable(properties);
    };

    /**
     * Encodes the specified ItemTable message. Does not implicitly {@link ItemTable.verify|verify} messages.
     * @function encode
     * @memberof ItemTable
     * @static
     * @param {IItemTable} message ItemTable message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ItemTable.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.items != null && message.items.length)
            for (var i = 0; i < message.items.length; ++i)
                $root.ItemTable.Items.encode(message.items[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ItemTable message, length delimited. Does not implicitly {@link ItemTable.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ItemTable
     * @static
     * @param {IItemTable} message ItemTable message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ItemTable.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an ItemTable message from the specified reader or buffer.
     * @function decode
     * @memberof ItemTable
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ItemTable} ItemTable
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ItemTable.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ItemTable();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.items && message.items.length))
                        message.items = [];
                    message.items.push($root.ItemTable.Items.decode(reader, reader.uint32()));
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
     * Decodes an ItemTable message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ItemTable
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ItemTable} ItemTable
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ItemTable.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an ItemTable message.
     * @function verify
     * @memberof ItemTable
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ItemTable.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.items != null && message.hasOwnProperty("items")) {
            if (!Array.isArray(message.items))
                return "items: array expected";
            for (var i = 0; i < message.items.length; ++i) {
                var error = $root.ItemTable.Items.verify(message.items[i]);
                if (error)
                    return "items." + error;
            }
        }
        return null;
    };

    /**
     * Creates an ItemTable message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ItemTable
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ItemTable} ItemTable
     */
    ItemTable.fromObject = function fromObject(object) {
        if (object instanceof $root.ItemTable)
            return object;
        var message = new $root.ItemTable();
        if (object.items) {
            if (!Array.isArray(object.items))
                throw TypeError(".ItemTable.items: array expected");
            message.items = [];
            for (var i = 0; i < object.items.length; ++i) {
                if (typeof object.items[i] !== "object")
                    throw TypeError(".ItemTable.items: object expected");
                message.items[i] = $root.ItemTable.Items.fromObject(object.items[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from an ItemTable message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ItemTable
     * @static
     * @param {ItemTable} message ItemTable
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ItemTable.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.items = [];
        if (message.items && message.items.length) {
            object.items = [];
            for (var j = 0; j < message.items.length; ++j)
                object.items[j] = $root.ItemTable.Items.toObject(message.items[j], options);
        }
        return object;
    };

    /**
     * Converts this ItemTable to JSON.
     * @function toJSON
     * @memberof ItemTable
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ItemTable.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ItemTable
     * @function getTypeUrl
     * @memberof ItemTable
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ItemTable.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ItemTable";
    };

    ItemTable.Items = (function() {

        /**
         * Properties of an Items.
         * @memberof ItemTable
         * @interface IItems
         * @property {string|null} [name] Items name
         * @property {string|null} [type] Items type
         * @property {string|null} [itemId] Items itemId
         */

        /**
         * Constructs a new Items.
         * @memberof ItemTable
         * @classdesc Represents an Items.
         * @implements IItems
         * @constructor
         * @param {ItemTable.IItems=} [properties] Properties to set
         */
        function Items(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Items name.
         * @member {string} name
         * @memberof ItemTable.Items
         * @instance
         */
        Items.prototype.name = "";

        /**
         * Items type.
         * @member {string} type
         * @memberof ItemTable.Items
         * @instance
         */
        Items.prototype.type = "";

        /**
         * Items itemId.
         * @member {string} itemId
         * @memberof ItemTable.Items
         * @instance
         */
        Items.prototype.itemId = "";

        /**
         * Creates a new Items instance using the specified properties.
         * @function create
         * @memberof ItemTable.Items
         * @static
         * @param {ItemTable.IItems=} [properties] Properties to set
         * @returns {ItemTable.Items} Items instance
         */
        Items.create = function create(properties) {
            return new Items(properties);
        };

        /**
         * Encodes the specified Items message. Does not implicitly {@link ItemTable.Items.verify|verify} messages.
         * @function encode
         * @memberof ItemTable.Items
         * @static
         * @param {ItemTable.IItems} message Items message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Items.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.type);
            if (message.itemId != null && Object.hasOwnProperty.call(message, "itemId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.itemId);
            return writer;
        };

        /**
         * Encodes the specified Items message, length delimited. Does not implicitly {@link ItemTable.Items.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ItemTable.Items
         * @static
         * @param {ItemTable.IItems} message Items message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Items.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Items message from the specified reader or buffer.
         * @function decode
         * @memberof ItemTable.Items
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ItemTable.Items} Items
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Items.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ItemTable.Items();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        message.type = reader.string();
                        break;
                    }
                case 3: {
                        message.itemId = reader.string();
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
         * @memberof ItemTable.Items
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ItemTable.Items} Items
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
         * @memberof ItemTable.Items
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Items.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.itemId != null && message.hasOwnProperty("itemId"))
                if (!$util.isString(message.itemId))
                    return "itemId: string expected";
            return null;
        };

        /**
         * Creates an Items message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ItemTable.Items
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ItemTable.Items} Items
         */
        Items.fromObject = function fromObject(object) {
            if (object instanceof $root.ItemTable.Items)
                return object;
            var message = new $root.ItemTable.Items();
            if (object.name != null)
                message.name = String(object.name);
            if (object.type != null)
                message.type = String(object.type);
            if (object.itemId != null)
                message.itemId = String(object.itemId);
            return message;
        };

        /**
         * Creates a plain object from an Items message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ItemTable.Items
         * @static
         * @param {ItemTable.Items} message Items
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Items.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.type = "";
                object.itemId = "";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.itemId != null && message.hasOwnProperty("itemId"))
                object.itemId = message.itemId;
            return object;
        };

        /**
         * Converts this Items to JSON.
         * @function toJSON
         * @memberof ItemTable.Items
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Items.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Items
         * @function getTypeUrl
         * @memberof ItemTable.Items
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Items.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ItemTable.Items";
        };

        return Items;
    })();

    return ItemTable;
})();

$root.LuckyWheel = (function() {

    /**
     * Properties of a LuckyWheel.
     * @exports ILuckyWheel
     * @interface ILuckyWheel
     * @property {number|null} [minFullSpins] LuckyWheel minFullSpins
     * @property {number|null} [maxFullSpins] LuckyWheel maxFullSpins
     * @property {Array.<LuckyWheel.IItems>|null} [items] LuckyWheel items
     * @property {number|null} [dailyLimit] LuckyWheel dailyLimit
     */

    /**
     * Constructs a new LuckyWheel.
     * @exports LuckyWheel
     * @classdesc Represents a LuckyWheel.
     * @implements ILuckyWheel
     * @constructor
     * @param {ILuckyWheel=} [properties] Properties to set
     */
    function LuckyWheel(properties) {
        this.items = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * LuckyWheel minFullSpins.
     * @member {number} minFullSpins
     * @memberof LuckyWheel
     * @instance
     */
    LuckyWheel.prototype.minFullSpins = 0;

    /**
     * LuckyWheel maxFullSpins.
     * @member {number} maxFullSpins
     * @memberof LuckyWheel
     * @instance
     */
    LuckyWheel.prototype.maxFullSpins = 0;

    /**
     * LuckyWheel items.
     * @member {Array.<LuckyWheel.IItems>} items
     * @memberof LuckyWheel
     * @instance
     */
    LuckyWheel.prototype.items = $util.emptyArray;

    /**
     * LuckyWheel dailyLimit.
     * @member {number} dailyLimit
     * @memberof LuckyWheel
     * @instance
     */
    LuckyWheel.prototype.dailyLimit = 0;

    /**
     * Creates a new LuckyWheel instance using the specified properties.
     * @function create
     * @memberof LuckyWheel
     * @static
     * @param {ILuckyWheel=} [properties] Properties to set
     * @returns {LuckyWheel} LuckyWheel instance
     */
    LuckyWheel.create = function create(properties) {
        return new LuckyWheel(properties);
    };

    /**
     * Encodes the specified LuckyWheel message. Does not implicitly {@link LuckyWheel.verify|verify} messages.
     * @function encode
     * @memberof LuckyWheel
     * @static
     * @param {ILuckyWheel} message LuckyWheel message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LuckyWheel.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.minFullSpins != null && Object.hasOwnProperty.call(message, "minFullSpins"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.minFullSpins);
        if (message.maxFullSpins != null && Object.hasOwnProperty.call(message, "maxFullSpins"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.maxFullSpins);
        if (message.items != null && message.items.length)
            for (var i = 0; i < message.items.length; ++i)
                $root.LuckyWheel.Items.encode(message.items[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.dailyLimit != null && Object.hasOwnProperty.call(message, "dailyLimit"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.dailyLimit);
        return writer;
    };

    /**
     * Encodes the specified LuckyWheel message, length delimited. Does not implicitly {@link LuckyWheel.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LuckyWheel
     * @static
     * @param {ILuckyWheel} message LuckyWheel message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LuckyWheel.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LuckyWheel message from the specified reader or buffer.
     * @function decode
     * @memberof LuckyWheel
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LuckyWheel} LuckyWheel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LuckyWheel.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LuckyWheel();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.minFullSpins = reader.int32();
                    break;
                }
            case 2: {
                    message.maxFullSpins = reader.int32();
                    break;
                }
            case 3: {
                    if (!(message.items && message.items.length))
                        message.items = [];
                    message.items.push($root.LuckyWheel.Items.decode(reader, reader.uint32()));
                    break;
                }
            case 4: {
                    message.dailyLimit = reader.int32();
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
     * Decodes a LuckyWheel message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LuckyWheel
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LuckyWheel} LuckyWheel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LuckyWheel.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LuckyWheel message.
     * @function verify
     * @memberof LuckyWheel
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LuckyWheel.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.minFullSpins != null && message.hasOwnProperty("minFullSpins"))
            if (!$util.isInteger(message.minFullSpins))
                return "minFullSpins: integer expected";
        if (message.maxFullSpins != null && message.hasOwnProperty("maxFullSpins"))
            if (!$util.isInteger(message.maxFullSpins))
                return "maxFullSpins: integer expected";
        if (message.items != null && message.hasOwnProperty("items")) {
            if (!Array.isArray(message.items))
                return "items: array expected";
            for (var i = 0; i < message.items.length; ++i) {
                var error = $root.LuckyWheel.Items.verify(message.items[i]);
                if (error)
                    return "items." + error;
            }
        }
        if (message.dailyLimit != null && message.hasOwnProperty("dailyLimit"))
            if (!$util.isInteger(message.dailyLimit))
                return "dailyLimit: integer expected";
        return null;
    };

    /**
     * Creates a LuckyWheel message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LuckyWheel
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LuckyWheel} LuckyWheel
     */
    LuckyWheel.fromObject = function fromObject(object) {
        if (object instanceof $root.LuckyWheel)
            return object;
        var message = new $root.LuckyWheel();
        if (object.minFullSpins != null)
            message.minFullSpins = object.minFullSpins | 0;
        if (object.maxFullSpins != null)
            message.maxFullSpins = object.maxFullSpins | 0;
        if (object.items) {
            if (!Array.isArray(object.items))
                throw TypeError(".LuckyWheel.items: array expected");
            message.items = [];
            for (var i = 0; i < object.items.length; ++i) {
                if (typeof object.items[i] !== "object")
                    throw TypeError(".LuckyWheel.items: object expected");
                message.items[i] = $root.LuckyWheel.Items.fromObject(object.items[i]);
            }
        }
        if (object.dailyLimit != null)
            message.dailyLimit = object.dailyLimit | 0;
        return message;
    };

    /**
     * Creates a plain object from a LuckyWheel message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LuckyWheel
     * @static
     * @param {LuckyWheel} message LuckyWheel
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LuckyWheel.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.items = [];
        if (options.defaults) {
            object.minFullSpins = 0;
            object.maxFullSpins = 0;
            object.dailyLimit = 0;
        }
        if (message.minFullSpins != null && message.hasOwnProperty("minFullSpins"))
            object.minFullSpins = message.minFullSpins;
        if (message.maxFullSpins != null && message.hasOwnProperty("maxFullSpins"))
            object.maxFullSpins = message.maxFullSpins;
        if (message.items && message.items.length) {
            object.items = [];
            for (var j = 0; j < message.items.length; ++j)
                object.items[j] = $root.LuckyWheel.Items.toObject(message.items[j], options);
        }
        if (message.dailyLimit != null && message.hasOwnProperty("dailyLimit"))
            object.dailyLimit = message.dailyLimit;
        return object;
    };

    /**
     * Converts this LuckyWheel to JSON.
     * @function toJSON
     * @memberof LuckyWheel
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LuckyWheel.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for LuckyWheel
     * @function getTypeUrl
     * @memberof LuckyWheel
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    LuckyWheel.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/LuckyWheel";
    };

    LuckyWheel.Items = (function() {

        /**
         * Properties of an Items.
         * @memberof LuckyWheel
         * @interface IItems
         * @property {string|null} [itemId] Items itemId
         * @property {number|null} [weight] Items weight
         * @property {number|null} [quantity] Items quantity
         */

        /**
         * Constructs a new Items.
         * @memberof LuckyWheel
         * @classdesc Represents an Items.
         * @implements IItems
         * @constructor
         * @param {LuckyWheel.IItems=} [properties] Properties to set
         */
        function Items(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Items itemId.
         * @member {string} itemId
         * @memberof LuckyWheel.Items
         * @instance
         */
        Items.prototype.itemId = "";

        /**
         * Items weight.
         * @member {number} weight
         * @memberof LuckyWheel.Items
         * @instance
         */
        Items.prototype.weight = 0;

        /**
         * Items quantity.
         * @member {number} quantity
         * @memberof LuckyWheel.Items
         * @instance
         */
        Items.prototype.quantity = 0;

        /**
         * Creates a new Items instance using the specified properties.
         * @function create
         * @memberof LuckyWheel.Items
         * @static
         * @param {LuckyWheel.IItems=} [properties] Properties to set
         * @returns {LuckyWheel.Items} Items instance
         */
        Items.create = function create(properties) {
            return new Items(properties);
        };

        /**
         * Encodes the specified Items message. Does not implicitly {@link LuckyWheel.Items.verify|verify} messages.
         * @function encode
         * @memberof LuckyWheel.Items
         * @static
         * @param {LuckyWheel.IItems} message Items message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Items.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.itemId != null && Object.hasOwnProperty.call(message, "itemId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.itemId);
            if (message.weight != null && Object.hasOwnProperty.call(message, "weight"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.weight);
            if (message.quantity != null && Object.hasOwnProperty.call(message, "quantity"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.quantity);
            return writer;
        };

        /**
         * Encodes the specified Items message, length delimited. Does not implicitly {@link LuckyWheel.Items.verify|verify} messages.
         * @function encodeDelimited
         * @memberof LuckyWheel.Items
         * @static
         * @param {LuckyWheel.IItems} message Items message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Items.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Items message from the specified reader or buffer.
         * @function decode
         * @memberof LuckyWheel.Items
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {LuckyWheel.Items} Items
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Items.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LuckyWheel.Items();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.itemId = reader.string();
                        break;
                    }
                case 2: {
                        message.weight = reader.int32();
                        break;
                    }
                case 3: {
                        message.quantity = reader.int32();
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
         * @memberof LuckyWheel.Items
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {LuckyWheel.Items} Items
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
         * @memberof LuckyWheel.Items
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
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

        /**
         * Creates an Items message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof LuckyWheel.Items
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {LuckyWheel.Items} Items
         */
        Items.fromObject = function fromObject(object) {
            if (object instanceof $root.LuckyWheel.Items)
                return object;
            var message = new $root.LuckyWheel.Items();
            if (object.itemId != null)
                message.itemId = String(object.itemId);
            if (object.weight != null)
                message.weight = object.weight | 0;
            if (object.quantity != null)
                message.quantity = object.quantity | 0;
            return message;
        };

        /**
         * Creates a plain object from an Items message. Also converts values to other types if specified.
         * @function toObject
         * @memberof LuckyWheel.Items
         * @static
         * @param {LuckyWheel.Items} message Items
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Items.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
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

        /**
         * Converts this Items to JSON.
         * @function toJSON
         * @memberof LuckyWheel.Items
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Items.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Items
         * @function getTypeUrl
         * @memberof LuckyWheel.Items
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
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

$root.ProgressQuests = (function() {

    /**
     * Properties of a ProgressQuests.
     * @exports IProgressQuests
     * @interface IProgressQuests
     * @property {Array.<ProgressQuests.IQuests>|null} [quests] ProgressQuests quests
     */

    /**
     * Constructs a new ProgressQuests.
     * @exports ProgressQuests
     * @classdesc Represents a ProgressQuests.
     * @implements IProgressQuests
     * @constructor
     * @param {IProgressQuests=} [properties] Properties to set
     */
    function ProgressQuests(properties) {
        this.quests = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ProgressQuests quests.
     * @member {Array.<ProgressQuests.IQuests>} quests
     * @memberof ProgressQuests
     * @instance
     */
    ProgressQuests.prototype.quests = $util.emptyArray;

    /**
     * Creates a new ProgressQuests instance using the specified properties.
     * @function create
     * @memberof ProgressQuests
     * @static
     * @param {IProgressQuests=} [properties] Properties to set
     * @returns {ProgressQuests} ProgressQuests instance
     */
    ProgressQuests.create = function create(properties) {
        return new ProgressQuests(properties);
    };

    /**
     * Encodes the specified ProgressQuests message. Does not implicitly {@link ProgressQuests.verify|verify} messages.
     * @function encode
     * @memberof ProgressQuests
     * @static
     * @param {IProgressQuests} message ProgressQuests message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProgressQuests.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.quests != null && message.quests.length)
            for (var i = 0; i < message.quests.length; ++i)
                $root.ProgressQuests.Quests.encode(message.quests[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ProgressQuests message, length delimited. Does not implicitly {@link ProgressQuests.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ProgressQuests
     * @static
     * @param {IProgressQuests} message ProgressQuests message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProgressQuests.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ProgressQuests message from the specified reader or buffer.
     * @function decode
     * @memberof ProgressQuests
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ProgressQuests} ProgressQuests
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProgressQuests.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ProgressQuests();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.quests && message.quests.length))
                        message.quests = [];
                    message.quests.push($root.ProgressQuests.Quests.decode(reader, reader.uint32()));
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
     * Decodes a ProgressQuests message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ProgressQuests
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ProgressQuests} ProgressQuests
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProgressQuests.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ProgressQuests message.
     * @function verify
     * @memberof ProgressQuests
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ProgressQuests.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.quests != null && message.hasOwnProperty("quests")) {
            if (!Array.isArray(message.quests))
                return "quests: array expected";
            for (var i = 0; i < message.quests.length; ++i) {
                var error = $root.ProgressQuests.Quests.verify(message.quests[i]);
                if (error)
                    return "quests." + error;
            }
        }
        return null;
    };

    /**
     * Creates a ProgressQuests message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ProgressQuests
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ProgressQuests} ProgressQuests
     */
    ProgressQuests.fromObject = function fromObject(object) {
        if (object instanceof $root.ProgressQuests)
            return object;
        var message = new $root.ProgressQuests();
        if (object.quests) {
            if (!Array.isArray(object.quests))
                throw TypeError(".ProgressQuests.quests: array expected");
            message.quests = [];
            for (var i = 0; i < object.quests.length; ++i) {
                if (typeof object.quests[i] !== "object")
                    throw TypeError(".ProgressQuests.quests: object expected");
                message.quests[i] = $root.ProgressQuests.Quests.fromObject(object.quests[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a ProgressQuests message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ProgressQuests
     * @static
     * @param {ProgressQuests} message ProgressQuests
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ProgressQuests.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.quests = [];
        if (message.quests && message.quests.length) {
            object.quests = [];
            for (var j = 0; j < message.quests.length; ++j)
                object.quests[j] = $root.ProgressQuests.Quests.toObject(message.quests[j], options);
        }
        return object;
    };

    /**
     * Converts this ProgressQuests to JSON.
     * @function toJSON
     * @memberof ProgressQuests
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ProgressQuests.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ProgressQuests
     * @function getTypeUrl
     * @memberof ProgressQuests
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ProgressQuests.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ProgressQuests";
    };

    ProgressQuests.Quests = (function() {

        /**
         * Properties of a Quests.
         * @memberof ProgressQuests
         * @interface IQuests
         * @property {string|null} [name] Quests name
         * @property {ProgressQuests.Quests.IReward|null} [reward] Quests reward
         * @property {string|null} [description] Quests description
         * @property {string|null} [id] Quests id
         * @property {string|null} [type] Quests type
         * @property {number|null} [target] Quests target
         */

        /**
         * Constructs a new Quests.
         * @memberof ProgressQuests
         * @classdesc Represents a Quests.
         * @implements IQuests
         * @constructor
         * @param {ProgressQuests.IQuests=} [properties] Properties to set
         */
        function Quests(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Quests name.
         * @member {string} name
         * @memberof ProgressQuests.Quests
         * @instance
         */
        Quests.prototype.name = "";

        /**
         * Quests reward.
         * @member {ProgressQuests.Quests.IReward|null|undefined} reward
         * @memberof ProgressQuests.Quests
         * @instance
         */
        Quests.prototype.reward = null;

        /**
         * Quests description.
         * @member {string} description
         * @memberof ProgressQuests.Quests
         * @instance
         */
        Quests.prototype.description = "";

        /**
         * Quests id.
         * @member {string} id
         * @memberof ProgressQuests.Quests
         * @instance
         */
        Quests.prototype.id = "";

        /**
         * Quests type.
         * @member {string} type
         * @memberof ProgressQuests.Quests
         * @instance
         */
        Quests.prototype.type = "";

        /**
         * Quests target.
         * @member {number} target
         * @memberof ProgressQuests.Quests
         * @instance
         */
        Quests.prototype.target = 0;

        /**
         * Creates a new Quests instance using the specified properties.
         * @function create
         * @memberof ProgressQuests.Quests
         * @static
         * @param {ProgressQuests.IQuests=} [properties] Properties to set
         * @returns {ProgressQuests.Quests} Quests instance
         */
        Quests.create = function create(properties) {
            return new Quests(properties);
        };

        /**
         * Encodes the specified Quests message. Does not implicitly {@link ProgressQuests.Quests.verify|verify} messages.
         * @function encode
         * @memberof ProgressQuests.Quests
         * @static
         * @param {ProgressQuests.IQuests} message Quests message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Quests.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.reward != null && Object.hasOwnProperty.call(message, "reward"))
                $root.ProgressQuests.Quests.Reward.encode(message.reward, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.description);
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.id);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.type);
            if (message.target != null && Object.hasOwnProperty.call(message, "target"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.target);
            return writer;
        };

        /**
         * Encodes the specified Quests message, length delimited. Does not implicitly {@link ProgressQuests.Quests.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ProgressQuests.Quests
         * @static
         * @param {ProgressQuests.IQuests} message Quests message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Quests.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Quests message from the specified reader or buffer.
         * @function decode
         * @memberof ProgressQuests.Quests
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ProgressQuests.Quests} Quests
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Quests.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ProgressQuests.Quests();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        message.reward = $root.ProgressQuests.Quests.Reward.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.description = reader.string();
                        break;
                    }
                case 4: {
                        message.id = reader.string();
                        break;
                    }
                case 5: {
                        message.type = reader.string();
                        break;
                    }
                case 6: {
                        message.target = reader.int32();
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
         * Decodes a Quests message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ProgressQuests.Quests
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ProgressQuests.Quests} Quests
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Quests.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Quests message.
         * @function verify
         * @memberof ProgressQuests.Quests
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Quests.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.reward != null && message.hasOwnProperty("reward")) {
                var error = $root.ProgressQuests.Quests.Reward.verify(message.reward);
                if (error)
                    return "reward." + error;
            }
            if (message.description != null && message.hasOwnProperty("description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.target != null && message.hasOwnProperty("target"))
                if (!$util.isInteger(message.target))
                    return "target: integer expected";
            return null;
        };

        /**
         * Creates a Quests message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ProgressQuests.Quests
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ProgressQuests.Quests} Quests
         */
        Quests.fromObject = function fromObject(object) {
            if (object instanceof $root.ProgressQuests.Quests)
                return object;
            var message = new $root.ProgressQuests.Quests();
            if (object.name != null)
                message.name = String(object.name);
            if (object.reward != null) {
                if (typeof object.reward !== "object")
                    throw TypeError(".ProgressQuests.Quests.reward: object expected");
                message.reward = $root.ProgressQuests.Quests.Reward.fromObject(object.reward);
            }
            if (object.description != null)
                message.description = String(object.description);
            if (object.id != null)
                message.id = String(object.id);
            if (object.type != null)
                message.type = String(object.type);
            if (object.target != null)
                message.target = object.target | 0;
            return message;
        };

        /**
         * Creates a plain object from a Quests message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ProgressQuests.Quests
         * @static
         * @param {ProgressQuests.Quests} message Quests
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Quests.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.reward = null;
                object.description = "";
                object.id = "";
                object.type = "";
                object.target = 0;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.reward != null && message.hasOwnProperty("reward"))
                object.reward = $root.ProgressQuests.Quests.Reward.toObject(message.reward, options);
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.target != null && message.hasOwnProperty("target"))
                object.target = message.target;
            return object;
        };

        /**
         * Converts this Quests to JSON.
         * @function toJSON
         * @memberof ProgressQuests.Quests
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Quests.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Quests
         * @function getTypeUrl
         * @memberof ProgressQuests.Quests
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Quests.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ProgressQuests.Quests";
        };

        Quests.Reward = (function() {

            /**
             * Properties of a Reward.
             * @memberof ProgressQuests.Quests
             * @interface IReward
             * @property {string|null} [id] Reward id
             * @property {number|null} [quantity] Reward quantity
             */

            /**
             * Constructs a new Reward.
             * @memberof ProgressQuests.Quests
             * @classdesc Represents a Reward.
             * @implements IReward
             * @constructor
             * @param {ProgressQuests.Quests.IReward=} [properties] Properties to set
             */
            function Reward(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Reward id.
             * @member {string} id
             * @memberof ProgressQuests.Quests.Reward
             * @instance
             */
            Reward.prototype.id = "";

            /**
             * Reward quantity.
             * @member {number} quantity
             * @memberof ProgressQuests.Quests.Reward
             * @instance
             */
            Reward.prototype.quantity = 0;

            /**
             * Creates a new Reward instance using the specified properties.
             * @function create
             * @memberof ProgressQuests.Quests.Reward
             * @static
             * @param {ProgressQuests.Quests.IReward=} [properties] Properties to set
             * @returns {ProgressQuests.Quests.Reward} Reward instance
             */
            Reward.create = function create(properties) {
                return new Reward(properties);
            };

            /**
             * Encodes the specified Reward message. Does not implicitly {@link ProgressQuests.Quests.Reward.verify|verify} messages.
             * @function encode
             * @memberof ProgressQuests.Quests.Reward
             * @static
             * @param {ProgressQuests.Quests.IReward} message Reward message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Reward.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.quantity != null && Object.hasOwnProperty.call(message, "quantity"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.quantity);
                return writer;
            };

            /**
             * Encodes the specified Reward message, length delimited. Does not implicitly {@link ProgressQuests.Quests.Reward.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ProgressQuests.Quests.Reward
             * @static
             * @param {ProgressQuests.Quests.IReward} message Reward message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Reward.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Reward message from the specified reader or buffer.
             * @function decode
             * @memberof ProgressQuests.Quests.Reward
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ProgressQuests.Quests.Reward} Reward
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Reward.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ProgressQuests.Quests.Reward();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.id = reader.string();
                            break;
                        }
                    case 2: {
                            message.quantity = reader.int32();
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
             * Decodes a Reward message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ProgressQuests.Quests.Reward
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ProgressQuests.Quests.Reward} Reward
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Reward.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Reward message.
             * @function verify
             * @memberof ProgressQuests.Quests.Reward
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Reward.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.quantity != null && message.hasOwnProperty("quantity"))
                    if (!$util.isInteger(message.quantity))
                        return "quantity: integer expected";
                return null;
            };

            /**
             * Creates a Reward message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ProgressQuests.Quests.Reward
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ProgressQuests.Quests.Reward} Reward
             */
            Reward.fromObject = function fromObject(object) {
                if (object instanceof $root.ProgressQuests.Quests.Reward)
                    return object;
                var message = new $root.ProgressQuests.Quests.Reward();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.quantity != null)
                    message.quantity = object.quantity | 0;
                return message;
            };

            /**
             * Creates a plain object from a Reward message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ProgressQuests.Quests.Reward
             * @static
             * @param {ProgressQuests.Quests.Reward} message Reward
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Reward.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.quantity = 0;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.quantity != null && message.hasOwnProperty("quantity"))
                    object.quantity = message.quantity;
                return object;
            };

            /**
             * Converts this Reward to JSON.
             * @function toJSON
             * @memberof ProgressQuests.Quests.Reward
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Reward.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Reward
             * @function getTypeUrl
             * @memberof ProgressQuests.Quests.Reward
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Reward.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/ProgressQuests.Quests.Reward";
            };

            return Reward;
        })();

        return Quests;
    })();

    return ProgressQuests;
})();

$root.Empty = (function() {

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
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
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
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Empty();
        while (reader.pos < end) {
            var tag = reader.uint32();
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

$root.GameScripts = (function() {

    /**
     * Constructs a new GameScripts service.
     * @exports GameScripts
     * @classdesc Represents a GameScripts
     * @extends $protobuf.rpc.Service
     * @constructor
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     */
    function GameScripts(rpcImpl, requestDelimited, responseDelimited) {
        $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
    }

    (GameScripts.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = GameScripts;

    /**
     * Creates new GameScripts service using the specified rpc implementation.
     * @function create
     * @memberof GameScripts
     * @static
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     * @returns {GameScripts} RPC service. Useful where requests and/or responses are streamed.
     */
    GameScripts.create = function create(rpcImpl, requestDelimited, responseDelimited) {
        return new this(rpcImpl, requestDelimited, responseDelimited);
    };

    GameScripts.LuckyWheel = (function() {

        /**
         * Constructs a new LuckyWheel service.
         * @memberof GameScripts
         * @classdesc Represents a LuckyWheel
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function LuckyWheel(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (LuckyWheel.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = LuckyWheel;

        /**
         * Creates new LuckyWheel service using the specified rpc implementation.
         * @function create
         * @memberof GameScripts.LuckyWheel
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {LuckyWheel} RPC service. Useful where requests and/or responses are streamed.
         */
        LuckyWheel.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link GameScripts.LuckyWheel#claimItem}.
         * @memberof GameScripts.LuckyWheel
         * @typedef ClaimItemCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {LuckyWheelClaimItemOutput} [response] LuckyWheelClaimItemOutput
         */

        /**
         * Calls ClaimItem.
         * @function claimItem
         * @memberof GameScripts.LuckyWheel
         * @instance
         * @param {IEmpty} request Empty message or plain object
         * @param {GameScripts.LuckyWheel.ClaimItemCallback} callback Node-style callback called with the error, if any, and LuckyWheelClaimItemOutput
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(LuckyWheel.prototype.claimItem = function claimItem(request, callback) {
            return this.rpcCall(claimItem, $root.Empty, $root.LuckyWheelClaimItemOutput, request, callback);
        }, "name", { value: "ClaimItem" });

        /**
         * Calls ClaimItem.
         * @function claimItem
         * @memberof GameScripts.LuckyWheel
         * @instance
         * @param {IEmpty} request Empty message or plain object
         * @returns {Promise<LuckyWheelClaimItemOutput>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link GameScripts.LuckyWheel#canClaimItem}.
         * @memberof GameScripts.LuckyWheel
         * @typedef CanClaimItemCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {LuckyWheelCanClaimOutput} [response] LuckyWheelCanClaimOutput
         */

        /**
         * Calls CanClaimItem.
         * @function canClaimItem
         * @memberof GameScripts.LuckyWheel
         * @instance
         * @param {IEmpty} request Empty message or plain object
         * @param {GameScripts.LuckyWheel.CanClaimItemCallback} callback Node-style callback called with the error, if any, and LuckyWheelCanClaimOutput
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(LuckyWheel.prototype.canClaimItem = function canClaimItem(request, callback) {
            return this.rpcCall(canClaimItem, $root.Empty, $root.LuckyWheelCanClaimOutput, request, callback);
        }, "name", { value: "CanClaimItem" });

        /**
         * Calls CanClaimItem.
         * @function canClaimItem
         * @memberof GameScripts.LuckyWheel
         * @instance
         * @param {IEmpty} request Empty message or plain object
         * @returns {Promise<LuckyWheelCanClaimOutput>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link GameScripts.LuckyWheel#getList}.
         * @memberof GameScripts.LuckyWheel
         * @typedef GetListCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {LuckyWheel} [response] LuckyWheel
         */

        /**
         * Calls GetList.
         * @function getList
         * @memberof GameScripts.LuckyWheel
         * @instance
         * @param {IEmpty} request Empty message or plain object
         * @param {GameScripts.LuckyWheel.GetListCallback} callback Node-style callback called with the error, if any, and LuckyWheel
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(LuckyWheel.prototype.getList = function getList(request, callback) {
            return this.rpcCall(getList, $root.Empty, $root.LuckyWheel, request, callback);
        }, "name", { value: "GetList" });

        /**
         * Calls GetList.
         * @function getList
         * @memberof GameScripts.LuckyWheel
         * @instance
         * @param {IEmpty} request Empty message or plain object
         * @returns {Promise<LuckyWheel>} Promise
         * @variation 2
         */

        return LuckyWheel;
    })();

    GameScripts.DailyRewards = (function() {

        /**
         * Constructs a new DailyRewards service.
         * @memberof GameScripts
         * @classdesc Represents a DailyRewards
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function DailyRewards(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (DailyRewards.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = DailyRewards;

        /**
         * Creates new DailyRewards service using the specified rpc implementation.
         * @function create
         * @memberof GameScripts.DailyRewards
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {DailyRewards} RPC service. Useful where requests and/or responses are streamed.
         */
        DailyRewards.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link GameScripts.DailyRewards#canClaimRewards}.
         * @memberof GameScripts.DailyRewards
         * @typedef CanClaimRewardsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {DailyRewardsCanClaimRewardOutput} [response] DailyRewardsCanClaimRewardOutput
         */

        /**
         * Calls CanClaimRewards.
         * @function canClaimRewards
         * @memberof GameScripts.DailyRewards
         * @instance
         * @param {IEmpty} request Empty message or plain object
         * @param {GameScripts.DailyRewards.CanClaimRewardsCallback} callback Node-style callback called with the error, if any, and DailyRewardsCanClaimRewardOutput
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(DailyRewards.prototype.canClaimRewards = function canClaimRewards(request, callback) {
            return this.rpcCall(canClaimRewards, $root.Empty, $root.DailyRewardsCanClaimRewardOutput, request, callback);
        }, "name", { value: "CanClaimRewards" });

        /**
         * Calls CanClaimRewards.
         * @function canClaimRewards
         * @memberof GameScripts.DailyRewards
         * @instance
         * @param {IEmpty} request Empty message or plain object
         * @returns {Promise<DailyRewardsCanClaimRewardOutput>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link GameScripts.DailyRewards#claimRewards}.
         * @memberof GameScripts.DailyRewards
         * @typedef ClaimRewardsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {DailyRewardsClaimRewardsOutput} [response] DailyRewardsClaimRewardsOutput
         */

        /**
         * Calls ClaimRewards.
         * @function claimRewards
         * @memberof GameScripts.DailyRewards
         * @instance
         * @param {IEmpty} request Empty message or plain object
         * @param {GameScripts.DailyRewards.ClaimRewardsCallback} callback Node-style callback called with the error, if any, and DailyRewardsClaimRewardsOutput
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(DailyRewards.prototype.claimRewards = function claimRewards(request, callback) {
            return this.rpcCall(claimRewards, $root.Empty, $root.DailyRewardsClaimRewardsOutput, request, callback);
        }, "name", { value: "ClaimRewards" });

        /**
         * Calls ClaimRewards.
         * @function claimRewards
         * @memberof GameScripts.DailyRewards
         * @instance
         * @param {IEmpty} request Empty message or plain object
         * @returns {Promise<DailyRewardsClaimRewardsOutput>} Promise
         * @variation 2
         */

        return DailyRewards;
    })();

    GameScripts.DailyQuests = (function() {

        /**
         * Constructs a new DailyQuests service.
         * @memberof GameScripts
         * @classdesc Represents a DailyQuests
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function DailyQuests(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (DailyQuests.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = DailyQuests;

        /**
         * Creates new DailyQuests service using the specified rpc implementation.
         * @function create
         * @memberof GameScripts.DailyQuests
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {DailyQuests} RPC service. Useful where requests and/or responses are streamed.
         */
        DailyQuests.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link GameScripts.DailyQuests#getList}.
         * @memberof GameScripts.DailyQuests
         * @typedef GetListCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {DailyQuestsOutput} [response] DailyQuestsOutput
         */

        /**
         * Calls GetList.
         * @function getList
         * @memberof GameScripts.DailyQuests
         * @instance
         * @param {IEmpty} request Empty message or plain object
         * @param {GameScripts.DailyQuests.GetListCallback} callback Node-style callback called with the error, if any, and DailyQuestsOutput
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(DailyQuests.prototype.getList = function getList(request, callback) {
            return this.rpcCall(getList, $root.Empty, $root.DailyQuestsOutput, request, callback);
        }, "name", { value: "GetList" });

        /**
         * Calls GetList.
         * @function getList
         * @memberof GameScripts.DailyQuests
         * @instance
         * @param {IEmpty} request Empty message or plain object
         * @returns {Promise<DailyQuestsOutput>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link GameScripts.DailyQuests#updateQuest}.
         * @memberof GameScripts.DailyQuests
         * @typedef UpdateQuestCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {DailyQuestsUpdateQuestOutput} [response] DailyQuestsUpdateQuestOutput
         */

        /**
         * Calls UpdateQuest.
         * @function updateQuest
         * @memberof GameScripts.DailyQuests
         * @instance
         * @param {IDailyQuestsUpdateQuestInput} request DailyQuestsUpdateQuestInput message or plain object
         * @param {GameScripts.DailyQuests.UpdateQuestCallback} callback Node-style callback called with the error, if any, and DailyQuestsUpdateQuestOutput
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(DailyQuests.prototype.updateQuest = function updateQuest(request, callback) {
            return this.rpcCall(updateQuest, $root.DailyQuestsUpdateQuestInput, $root.DailyQuestsUpdateQuestOutput, request, callback);
        }, "name", { value: "UpdateQuest" });

        /**
         * Calls UpdateQuest.
         * @function updateQuest
         * @memberof GameScripts.DailyQuests
         * @instance
         * @param {IDailyQuestsUpdateQuestInput} request DailyQuestsUpdateQuestInput message or plain object
         * @returns {Promise<DailyQuestsUpdateQuestOutput>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link GameScripts.DailyQuests#claimQuest}.
         * @memberof GameScripts.DailyQuests
         * @typedef ClaimQuestCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {DailyQuestsClaimQuestOutput} [response] DailyQuestsClaimQuestOutput
         */

        /**
         * Calls ClaimQuest.
         * @function claimQuest
         * @memberof GameScripts.DailyQuests
         * @instance
         * @param {IDailyQuestsClaimQuestInput} request DailyQuestsClaimQuestInput message or plain object
         * @param {GameScripts.DailyQuests.ClaimQuestCallback} callback Node-style callback called with the error, if any, and DailyQuestsClaimQuestOutput
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(DailyQuests.prototype.claimQuest = function claimQuest(request, callback) {
            return this.rpcCall(claimQuest, $root.DailyQuestsClaimQuestInput, $root.DailyQuestsClaimQuestOutput, request, callback);
        }, "name", { value: "ClaimQuest" });

        /**
         * Calls ClaimQuest.
         * @function claimQuest
         * @memberof GameScripts.DailyQuests
         * @instance
         * @param {IDailyQuestsClaimQuestInput} request DailyQuestsClaimQuestInput message or plain object
         * @returns {Promise<DailyQuestsClaimQuestOutput>} Promise
         * @variation 2
         */

        return DailyQuests;
    })();

    return GameScripts;
})();

$root.TestHelloWorldRes = (function() {

    /**
     * Properties of a TestHelloWorldRes.
     * @exports ITestHelloWorldRes
     * @interface ITestHelloWorldRes
     * @property {number|null} [counter] TestHelloWorldRes counter
     * @property {string|null} [name] TestHelloWorldRes name
     */

    /**
     * Constructs a new TestHelloWorldRes.
     * @exports TestHelloWorldRes
     * @classdesc Represents a TestHelloWorldRes.
     * @implements ITestHelloWorldRes
     * @constructor
     * @param {ITestHelloWorldRes=} [properties] Properties to set
     */
    function TestHelloWorldRes(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TestHelloWorldRes counter.
     * @member {number} counter
     * @memberof TestHelloWorldRes
     * @instance
     */
    TestHelloWorldRes.prototype.counter = 0;

    /**
     * TestHelloWorldRes name.
     * @member {string} name
     * @memberof TestHelloWorldRes
     * @instance
     */
    TestHelloWorldRes.prototype.name = "";

    /**
     * Creates a new TestHelloWorldRes instance using the specified properties.
     * @function create
     * @memberof TestHelloWorldRes
     * @static
     * @param {ITestHelloWorldRes=} [properties] Properties to set
     * @returns {TestHelloWorldRes} TestHelloWorldRes instance
     */
    TestHelloWorldRes.create = function create(properties) {
        return new TestHelloWorldRes(properties);
    };

    /**
     * Encodes the specified TestHelloWorldRes message. Does not implicitly {@link TestHelloWorldRes.verify|verify} messages.
     * @function encode
     * @memberof TestHelloWorldRes
     * @static
     * @param {ITestHelloWorldRes} message TestHelloWorldRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TestHelloWorldRes.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.counter != null && Object.hasOwnProperty.call(message, "counter"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.counter);
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
        return writer;
    };

    /**
     * Encodes the specified TestHelloWorldRes message, length delimited. Does not implicitly {@link TestHelloWorldRes.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TestHelloWorldRes
     * @static
     * @param {ITestHelloWorldRes} message TestHelloWorldRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TestHelloWorldRes.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TestHelloWorldRes message from the specified reader or buffer.
     * @function decode
     * @memberof TestHelloWorldRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TestHelloWorldRes} TestHelloWorldRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TestHelloWorldRes.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TestHelloWorldRes();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.counter = reader.uint32();
                    break;
                }
            case 2: {
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
     * Decodes a TestHelloWorldRes message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TestHelloWorldRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TestHelloWorldRes} TestHelloWorldRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TestHelloWorldRes.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TestHelloWorldRes message.
     * @function verify
     * @memberof TestHelloWorldRes
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TestHelloWorldRes.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.counter != null && message.hasOwnProperty("counter"))
            if (!$util.isInteger(message.counter))
                return "counter: integer expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        return null;
    };

    /**
     * Creates a TestHelloWorldRes message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TestHelloWorldRes
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TestHelloWorldRes} TestHelloWorldRes
     */
    TestHelloWorldRes.fromObject = function fromObject(object) {
        if (object instanceof $root.TestHelloWorldRes)
            return object;
        var message = new $root.TestHelloWorldRes();
        if (object.counter != null)
            message.counter = object.counter >>> 0;
        if (object.name != null)
            message.name = String(object.name);
        return message;
    };

    /**
     * Creates a plain object from a TestHelloWorldRes message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TestHelloWorldRes
     * @static
     * @param {TestHelloWorldRes} message TestHelloWorldRes
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TestHelloWorldRes.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.counter = 0;
            object.name = "";
        }
        if (message.counter != null && message.hasOwnProperty("counter"))
            object.counter = message.counter;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        return object;
    };

    /**
     * Converts this TestHelloWorldRes to JSON.
     * @function toJSON
     * @memberof TestHelloWorldRes
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TestHelloWorldRes.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for TestHelloWorldRes
     * @function getTypeUrl
     * @memberof TestHelloWorldRes
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    TestHelloWorldRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/TestHelloWorldRes";
    };

    return TestHelloWorldRes;
})();

$root.DailyQuestsOutput = (function() {

    /**
     * Properties of a DailyQuestsOutput.
     * @exports IDailyQuestsOutput
     * @interface IDailyQuestsOutput
     * @property {Array.<DailyQuestsOutput.IDailyquests>|null} [dailyQuests] DailyQuestsOutput dailyQuests
     */

    /**
     * Constructs a new DailyQuestsOutput.
     * @exports DailyQuestsOutput
     * @classdesc Represents a DailyQuestsOutput.
     * @implements IDailyQuestsOutput
     * @constructor
     * @param {IDailyQuestsOutput=} [properties] Properties to set
     */
    function DailyQuestsOutput(properties) {
        this.dailyQuests = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DailyQuestsOutput dailyQuests.
     * @member {Array.<DailyQuestsOutput.IDailyquests>} dailyQuests
     * @memberof DailyQuestsOutput
     * @instance
     */
    DailyQuestsOutput.prototype.dailyQuests = $util.emptyArray;

    /**
     * Creates a new DailyQuestsOutput instance using the specified properties.
     * @function create
     * @memberof DailyQuestsOutput
     * @static
     * @param {IDailyQuestsOutput=} [properties] Properties to set
     * @returns {DailyQuestsOutput} DailyQuestsOutput instance
     */
    DailyQuestsOutput.create = function create(properties) {
        return new DailyQuestsOutput(properties);
    };

    /**
     * Encodes the specified DailyQuestsOutput message. Does not implicitly {@link DailyQuestsOutput.verify|verify} messages.
     * @function encode
     * @memberof DailyQuestsOutput
     * @static
     * @param {IDailyQuestsOutput} message DailyQuestsOutput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DailyQuestsOutput.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.dailyQuests != null && message.dailyQuests.length)
            for (var i = 0; i < message.dailyQuests.length; ++i)
                $root.DailyQuestsOutput.Dailyquests.encode(message.dailyQuests[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified DailyQuestsOutput message, length delimited. Does not implicitly {@link DailyQuestsOutput.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DailyQuestsOutput
     * @static
     * @param {IDailyQuestsOutput} message DailyQuestsOutput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DailyQuestsOutput.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DailyQuestsOutput message from the specified reader or buffer.
     * @function decode
     * @memberof DailyQuestsOutput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DailyQuestsOutput} DailyQuestsOutput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DailyQuestsOutput.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DailyQuestsOutput();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.dailyQuests && message.dailyQuests.length))
                        message.dailyQuests = [];
                    message.dailyQuests.push($root.DailyQuestsOutput.Dailyquests.decode(reader, reader.uint32()));
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
     * Decodes a DailyQuestsOutput message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DailyQuestsOutput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DailyQuestsOutput} DailyQuestsOutput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DailyQuestsOutput.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DailyQuestsOutput message.
     * @function verify
     * @memberof DailyQuestsOutput
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DailyQuestsOutput.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.dailyQuests != null && message.hasOwnProperty("dailyQuests")) {
            if (!Array.isArray(message.dailyQuests))
                return "dailyQuests: array expected";
            for (var i = 0; i < message.dailyQuests.length; ++i) {
                var error = $root.DailyQuestsOutput.Dailyquests.verify(message.dailyQuests[i]);
                if (error)
                    return "dailyQuests." + error;
            }
        }
        return null;
    };

    /**
     * Creates a DailyQuestsOutput message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DailyQuestsOutput
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DailyQuestsOutput} DailyQuestsOutput
     */
    DailyQuestsOutput.fromObject = function fromObject(object) {
        if (object instanceof $root.DailyQuestsOutput)
            return object;
        var message = new $root.DailyQuestsOutput();
        if (object.dailyQuests) {
            if (!Array.isArray(object.dailyQuests))
                throw TypeError(".DailyQuestsOutput.dailyQuests: array expected");
            message.dailyQuests = [];
            for (var i = 0; i < object.dailyQuests.length; ++i) {
                if (typeof object.dailyQuests[i] !== "object")
                    throw TypeError(".DailyQuestsOutput.dailyQuests: object expected");
                message.dailyQuests[i] = $root.DailyQuestsOutput.Dailyquests.fromObject(object.dailyQuests[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a DailyQuestsOutput message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DailyQuestsOutput
     * @static
     * @param {DailyQuestsOutput} message DailyQuestsOutput
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DailyQuestsOutput.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.dailyQuests = [];
        if (message.dailyQuests && message.dailyQuests.length) {
            object.dailyQuests = [];
            for (var j = 0; j < message.dailyQuests.length; ++j)
                object.dailyQuests[j] = $root.DailyQuestsOutput.Dailyquests.toObject(message.dailyQuests[j], options);
        }
        return object;
    };

    /**
     * Converts this DailyQuestsOutput to JSON.
     * @function toJSON
     * @memberof DailyQuestsOutput
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DailyQuestsOutput.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for DailyQuestsOutput
     * @function getTypeUrl
     * @memberof DailyQuestsOutput
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    DailyQuestsOutput.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/DailyQuestsOutput";
    };

    DailyQuestsOutput.Reward = (function() {

        /**
         * Properties of a Reward.
         * @memberof DailyQuestsOutput
         * @interface IReward
         * @property {string|null} [id] Reward id
         * @property {number|null} [quantity] Reward quantity
         */

        /**
         * Constructs a new Reward.
         * @memberof DailyQuestsOutput
         * @classdesc Represents a Reward.
         * @implements IReward
         * @constructor
         * @param {DailyQuestsOutput.IReward=} [properties] Properties to set
         */
        function Reward(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Reward id.
         * @member {string} id
         * @memberof DailyQuestsOutput.Reward
         * @instance
         */
        Reward.prototype.id = "";

        /**
         * Reward quantity.
         * @member {number} quantity
         * @memberof DailyQuestsOutput.Reward
         * @instance
         */
        Reward.prototype.quantity = 0;

        /**
         * Creates a new Reward instance using the specified properties.
         * @function create
         * @memberof DailyQuestsOutput.Reward
         * @static
         * @param {DailyQuestsOutput.IReward=} [properties] Properties to set
         * @returns {DailyQuestsOutput.Reward} Reward instance
         */
        Reward.create = function create(properties) {
            return new Reward(properties);
        };

        /**
         * Encodes the specified Reward message. Does not implicitly {@link DailyQuestsOutput.Reward.verify|verify} messages.
         * @function encode
         * @memberof DailyQuestsOutput.Reward
         * @static
         * @param {DailyQuestsOutput.IReward} message Reward message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Reward.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.quantity != null && Object.hasOwnProperty.call(message, "quantity"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.quantity);
            return writer;
        };

        /**
         * Encodes the specified Reward message, length delimited. Does not implicitly {@link DailyQuestsOutput.Reward.verify|verify} messages.
         * @function encodeDelimited
         * @memberof DailyQuestsOutput.Reward
         * @static
         * @param {DailyQuestsOutput.IReward} message Reward message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Reward.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Reward message from the specified reader or buffer.
         * @function decode
         * @memberof DailyQuestsOutput.Reward
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {DailyQuestsOutput.Reward} Reward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Reward.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DailyQuestsOutput.Reward();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
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

        /**
         * Decodes a Reward message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof DailyQuestsOutput.Reward
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {DailyQuestsOutput.Reward} Reward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Reward.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Reward message.
         * @function verify
         * @memberof DailyQuestsOutput.Reward
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Reward.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.quantity != null && message.hasOwnProperty("quantity"))
                if (!$util.isInteger(message.quantity))
                    return "quantity: integer expected";
            return null;
        };

        /**
         * Creates a Reward message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof DailyQuestsOutput.Reward
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {DailyQuestsOutput.Reward} Reward
         */
        Reward.fromObject = function fromObject(object) {
            if (object instanceof $root.DailyQuestsOutput.Reward)
                return object;
            var message = new $root.DailyQuestsOutput.Reward();
            if (object.id != null)
                message.id = String(object.id);
            if (object.quantity != null)
                message.quantity = object.quantity >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a Reward message. Also converts values to other types if specified.
         * @function toObject
         * @memberof DailyQuestsOutput.Reward
         * @static
         * @param {DailyQuestsOutput.Reward} message Reward
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Reward.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.quantity = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.quantity != null && message.hasOwnProperty("quantity"))
                object.quantity = message.quantity;
            return object;
        };

        /**
         * Converts this Reward to JSON.
         * @function toJSON
         * @memberof DailyQuestsOutput.Reward
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Reward.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Reward
         * @function getTypeUrl
         * @memberof DailyQuestsOutput.Reward
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Reward.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/DailyQuestsOutput.Reward";
        };

        return Reward;
    })();

    DailyQuestsOutput.Dailyquests = (function() {

        /**
         * Properties of a Dailyquests.
         * @memberof DailyQuestsOutput
         * @interface IDailyquests
         * @property {string|null} [name] Dailyquests name
         * @property {DailyQuestsOutput.IReward|null} [reward] Dailyquests reward
         * @property {string|null} [description] Dailyquests description
         * @property {string|null} [id] Dailyquests id
         * @property {string|null} [type] Dailyquests type
         * @property {number|null} [target] Dailyquests target
         * @property {number|null} [progress] Dailyquests progress
         * @property {boolean|null} [canClaim] Dailyquests canClaim
         */

        /**
         * Constructs a new Dailyquests.
         * @memberof DailyQuestsOutput
         * @classdesc Represents a Dailyquests.
         * @implements IDailyquests
         * @constructor
         * @param {DailyQuestsOutput.IDailyquests=} [properties] Properties to set
         */
        function Dailyquests(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Dailyquests name.
         * @member {string} name
         * @memberof DailyQuestsOutput.Dailyquests
         * @instance
         */
        Dailyquests.prototype.name = "";

        /**
         * Dailyquests reward.
         * @member {DailyQuestsOutput.IReward|null|undefined} reward
         * @memberof DailyQuestsOutput.Dailyquests
         * @instance
         */
        Dailyquests.prototype.reward = null;

        /**
         * Dailyquests description.
         * @member {string} description
         * @memberof DailyQuestsOutput.Dailyquests
         * @instance
         */
        Dailyquests.prototype.description = "";

        /**
         * Dailyquests id.
         * @member {string} id
         * @memberof DailyQuestsOutput.Dailyquests
         * @instance
         */
        Dailyquests.prototype.id = "";

        /**
         * Dailyquests type.
         * @member {string} type
         * @memberof DailyQuestsOutput.Dailyquests
         * @instance
         */
        Dailyquests.prototype.type = "";

        /**
         * Dailyquests target.
         * @member {number} target
         * @memberof DailyQuestsOutput.Dailyquests
         * @instance
         */
        Dailyquests.prototype.target = 0;

        /**
         * Dailyquests progress.
         * @member {number} progress
         * @memberof DailyQuestsOutput.Dailyquests
         * @instance
         */
        Dailyquests.prototype.progress = 0;

        /**
         * Dailyquests canClaim.
         * @member {boolean} canClaim
         * @memberof DailyQuestsOutput.Dailyquests
         * @instance
         */
        Dailyquests.prototype.canClaim = false;

        /**
         * Creates a new Dailyquests instance using the specified properties.
         * @function create
         * @memberof DailyQuestsOutput.Dailyquests
         * @static
         * @param {DailyQuestsOutput.IDailyquests=} [properties] Properties to set
         * @returns {DailyQuestsOutput.Dailyquests} Dailyquests instance
         */
        Dailyquests.create = function create(properties) {
            return new Dailyquests(properties);
        };

        /**
         * Encodes the specified Dailyquests message. Does not implicitly {@link DailyQuestsOutput.Dailyquests.verify|verify} messages.
         * @function encode
         * @memberof DailyQuestsOutput.Dailyquests
         * @static
         * @param {DailyQuestsOutput.IDailyquests} message Dailyquests message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Dailyquests.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.reward != null && Object.hasOwnProperty.call(message, "reward"))
                $root.DailyQuestsOutput.Reward.encode(message.reward, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.description);
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.id);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.type);
            if (message.target != null && Object.hasOwnProperty.call(message, "target"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.target);
            if (message.progress != null && Object.hasOwnProperty.call(message, "progress"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.progress);
            if (message.canClaim != null && Object.hasOwnProperty.call(message, "canClaim"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.canClaim);
            return writer;
        };

        /**
         * Encodes the specified Dailyquests message, length delimited. Does not implicitly {@link DailyQuestsOutput.Dailyquests.verify|verify} messages.
         * @function encodeDelimited
         * @memberof DailyQuestsOutput.Dailyquests
         * @static
         * @param {DailyQuestsOutput.IDailyquests} message Dailyquests message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Dailyquests.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Dailyquests message from the specified reader or buffer.
         * @function decode
         * @memberof DailyQuestsOutput.Dailyquests
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {DailyQuestsOutput.Dailyquests} Dailyquests
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Dailyquests.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DailyQuestsOutput.Dailyquests();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        message.reward = $root.DailyQuestsOutput.Reward.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.description = reader.string();
                        break;
                    }
                case 4: {
                        message.id = reader.string();
                        break;
                    }
                case 5: {
                        message.type = reader.string();
                        break;
                    }
                case 6: {
                        message.target = reader.uint32();
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

        /**
         * Decodes a Dailyquests message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof DailyQuestsOutput.Dailyquests
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {DailyQuestsOutput.Dailyquests} Dailyquests
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Dailyquests.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Dailyquests message.
         * @function verify
         * @memberof DailyQuestsOutput.Dailyquests
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Dailyquests.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.reward != null && message.hasOwnProperty("reward")) {
                var error = $root.DailyQuestsOutput.Reward.verify(message.reward);
                if (error)
                    return "reward." + error;
            }
            if (message.description != null && message.hasOwnProperty("description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.target != null && message.hasOwnProperty("target"))
                if (!$util.isInteger(message.target))
                    return "target: integer expected";
            if (message.progress != null && message.hasOwnProperty("progress"))
                if (!$util.isInteger(message.progress))
                    return "progress: integer expected";
            if (message.canClaim != null && message.hasOwnProperty("canClaim"))
                if (typeof message.canClaim !== "boolean")
                    return "canClaim: boolean expected";
            return null;
        };

        /**
         * Creates a Dailyquests message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof DailyQuestsOutput.Dailyquests
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {DailyQuestsOutput.Dailyquests} Dailyquests
         */
        Dailyquests.fromObject = function fromObject(object) {
            if (object instanceof $root.DailyQuestsOutput.Dailyquests)
                return object;
            var message = new $root.DailyQuestsOutput.Dailyquests();
            if (object.name != null)
                message.name = String(object.name);
            if (object.reward != null) {
                if (typeof object.reward !== "object")
                    throw TypeError(".DailyQuestsOutput.Dailyquests.reward: object expected");
                message.reward = $root.DailyQuestsOutput.Reward.fromObject(object.reward);
            }
            if (object.description != null)
                message.description = String(object.description);
            if (object.id != null)
                message.id = String(object.id);
            if (object.type != null)
                message.type = String(object.type);
            if (object.target != null)
                message.target = object.target >>> 0;
            if (object.progress != null)
                message.progress = object.progress >>> 0;
            if (object.canClaim != null)
                message.canClaim = Boolean(object.canClaim);
            return message;
        };

        /**
         * Creates a plain object from a Dailyquests message. Also converts values to other types if specified.
         * @function toObject
         * @memberof DailyQuestsOutput.Dailyquests
         * @static
         * @param {DailyQuestsOutput.Dailyquests} message Dailyquests
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Dailyquests.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.reward = null;
                object.description = "";
                object.id = "";
                object.type = "";
                object.target = 0;
                object.progress = 0;
                object.canClaim = false;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.reward != null && message.hasOwnProperty("reward"))
                object.reward = $root.DailyQuestsOutput.Reward.toObject(message.reward, options);
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.target != null && message.hasOwnProperty("target"))
                object.target = message.target;
            if (message.progress != null && message.hasOwnProperty("progress"))
                object.progress = message.progress;
            if (message.canClaim != null && message.hasOwnProperty("canClaim"))
                object.canClaim = message.canClaim;
            return object;
        };

        /**
         * Converts this Dailyquests to JSON.
         * @function toJSON
         * @memberof DailyQuestsOutput.Dailyquests
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Dailyquests.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Dailyquests
         * @function getTypeUrl
         * @memberof DailyQuestsOutput.Dailyquests
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Dailyquests.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/DailyQuestsOutput.Dailyquests";
        };

        return Dailyquests;
    })();

    return DailyQuestsOutput;
})();

$root.DailyQuestsUpdateQuestInput = (function() {

    /**
     * Properties of a DailyQuestsUpdateQuestInput.
     * @exports IDailyQuestsUpdateQuestInput
     * @interface IDailyQuestsUpdateQuestInput
     * @property {Array.<DailyQuestsUpdateQuestInput.IQuestProgress>|null} [questProgress] DailyQuestsUpdateQuestInput questProgress
     */

    /**
     * Constructs a new DailyQuestsUpdateQuestInput.
     * @exports DailyQuestsUpdateQuestInput
     * @classdesc Represents a DailyQuestsUpdateQuestInput.
     * @implements IDailyQuestsUpdateQuestInput
     * @constructor
     * @param {IDailyQuestsUpdateQuestInput=} [properties] Properties to set
     */
    function DailyQuestsUpdateQuestInput(properties) {
        this.questProgress = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DailyQuestsUpdateQuestInput questProgress.
     * @member {Array.<DailyQuestsUpdateQuestInput.IQuestProgress>} questProgress
     * @memberof DailyQuestsUpdateQuestInput
     * @instance
     */
    DailyQuestsUpdateQuestInput.prototype.questProgress = $util.emptyArray;

    /**
     * Creates a new DailyQuestsUpdateQuestInput instance using the specified properties.
     * @function create
     * @memberof DailyQuestsUpdateQuestInput
     * @static
     * @param {IDailyQuestsUpdateQuestInput=} [properties] Properties to set
     * @returns {DailyQuestsUpdateQuestInput} DailyQuestsUpdateQuestInput instance
     */
    DailyQuestsUpdateQuestInput.create = function create(properties) {
        return new DailyQuestsUpdateQuestInput(properties);
    };

    /**
     * Encodes the specified DailyQuestsUpdateQuestInput message. Does not implicitly {@link DailyQuestsUpdateQuestInput.verify|verify} messages.
     * @function encode
     * @memberof DailyQuestsUpdateQuestInput
     * @static
     * @param {IDailyQuestsUpdateQuestInput} message DailyQuestsUpdateQuestInput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DailyQuestsUpdateQuestInput.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.questProgress != null && message.questProgress.length)
            for (var i = 0; i < message.questProgress.length; ++i)
                $root.DailyQuestsUpdateQuestInput.QuestProgress.encode(message.questProgress[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified DailyQuestsUpdateQuestInput message, length delimited. Does not implicitly {@link DailyQuestsUpdateQuestInput.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DailyQuestsUpdateQuestInput
     * @static
     * @param {IDailyQuestsUpdateQuestInput} message DailyQuestsUpdateQuestInput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DailyQuestsUpdateQuestInput.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DailyQuestsUpdateQuestInput message from the specified reader or buffer.
     * @function decode
     * @memberof DailyQuestsUpdateQuestInput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DailyQuestsUpdateQuestInput} DailyQuestsUpdateQuestInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DailyQuestsUpdateQuestInput.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DailyQuestsUpdateQuestInput();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.questProgress && message.questProgress.length))
                        message.questProgress = [];
                    message.questProgress.push($root.DailyQuestsUpdateQuestInput.QuestProgress.decode(reader, reader.uint32()));
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
     * Decodes a DailyQuestsUpdateQuestInput message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DailyQuestsUpdateQuestInput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DailyQuestsUpdateQuestInput} DailyQuestsUpdateQuestInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DailyQuestsUpdateQuestInput.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DailyQuestsUpdateQuestInput message.
     * @function verify
     * @memberof DailyQuestsUpdateQuestInput
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DailyQuestsUpdateQuestInput.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.questProgress != null && message.hasOwnProperty("questProgress")) {
            if (!Array.isArray(message.questProgress))
                return "questProgress: array expected";
            for (var i = 0; i < message.questProgress.length; ++i) {
                var error = $root.DailyQuestsUpdateQuestInput.QuestProgress.verify(message.questProgress[i]);
                if (error)
                    return "questProgress." + error;
            }
        }
        return null;
    };

    /**
     * Creates a DailyQuestsUpdateQuestInput message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DailyQuestsUpdateQuestInput
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DailyQuestsUpdateQuestInput} DailyQuestsUpdateQuestInput
     */
    DailyQuestsUpdateQuestInput.fromObject = function fromObject(object) {
        if (object instanceof $root.DailyQuestsUpdateQuestInput)
            return object;
        var message = new $root.DailyQuestsUpdateQuestInput();
        if (object.questProgress) {
            if (!Array.isArray(object.questProgress))
                throw TypeError(".DailyQuestsUpdateQuestInput.questProgress: array expected");
            message.questProgress = [];
            for (var i = 0; i < object.questProgress.length; ++i) {
                if (typeof object.questProgress[i] !== "object")
                    throw TypeError(".DailyQuestsUpdateQuestInput.questProgress: object expected");
                message.questProgress[i] = $root.DailyQuestsUpdateQuestInput.QuestProgress.fromObject(object.questProgress[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a DailyQuestsUpdateQuestInput message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DailyQuestsUpdateQuestInput
     * @static
     * @param {DailyQuestsUpdateQuestInput} message DailyQuestsUpdateQuestInput
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DailyQuestsUpdateQuestInput.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.questProgress = [];
        if (message.questProgress && message.questProgress.length) {
            object.questProgress = [];
            for (var j = 0; j < message.questProgress.length; ++j)
                object.questProgress[j] = $root.DailyQuestsUpdateQuestInput.QuestProgress.toObject(message.questProgress[j], options);
        }
        return object;
    };

    /**
     * Converts this DailyQuestsUpdateQuestInput to JSON.
     * @function toJSON
     * @memberof DailyQuestsUpdateQuestInput
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DailyQuestsUpdateQuestInput.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for DailyQuestsUpdateQuestInput
     * @function getTypeUrl
     * @memberof DailyQuestsUpdateQuestInput
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    DailyQuestsUpdateQuestInput.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/DailyQuestsUpdateQuestInput";
    };

    DailyQuestsUpdateQuestInput.QuestProgress = (function() {

        /**
         * Properties of a QuestProgress.
         * @memberof DailyQuestsUpdateQuestInput
         * @interface IQuestProgress
         * @property {string|null} [id] QuestProgress id
         * @property {number|null} [amount] QuestProgress amount
         */

        /**
         * Constructs a new QuestProgress.
         * @memberof DailyQuestsUpdateQuestInput
         * @classdesc Represents a QuestProgress.
         * @implements IQuestProgress
         * @constructor
         * @param {DailyQuestsUpdateQuestInput.IQuestProgress=} [properties] Properties to set
         */
        function QuestProgress(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * QuestProgress id.
         * @member {string} id
         * @memberof DailyQuestsUpdateQuestInput.QuestProgress
         * @instance
         */
        QuestProgress.prototype.id = "";

        /**
         * QuestProgress amount.
         * @member {number} amount
         * @memberof DailyQuestsUpdateQuestInput.QuestProgress
         * @instance
         */
        QuestProgress.prototype.amount = 0;

        /**
         * Creates a new QuestProgress instance using the specified properties.
         * @function create
         * @memberof DailyQuestsUpdateQuestInput.QuestProgress
         * @static
         * @param {DailyQuestsUpdateQuestInput.IQuestProgress=} [properties] Properties to set
         * @returns {DailyQuestsUpdateQuestInput.QuestProgress} QuestProgress instance
         */
        QuestProgress.create = function create(properties) {
            return new QuestProgress(properties);
        };

        /**
         * Encodes the specified QuestProgress message. Does not implicitly {@link DailyQuestsUpdateQuestInput.QuestProgress.verify|verify} messages.
         * @function encode
         * @memberof DailyQuestsUpdateQuestInput.QuestProgress
         * @static
         * @param {DailyQuestsUpdateQuestInput.IQuestProgress} message QuestProgress message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QuestProgress.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.amount != null && Object.hasOwnProperty.call(message, "amount"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.amount);
            return writer;
        };

        /**
         * Encodes the specified QuestProgress message, length delimited. Does not implicitly {@link DailyQuestsUpdateQuestInput.QuestProgress.verify|verify} messages.
         * @function encodeDelimited
         * @memberof DailyQuestsUpdateQuestInput.QuestProgress
         * @static
         * @param {DailyQuestsUpdateQuestInput.IQuestProgress} message QuestProgress message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QuestProgress.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a QuestProgress message from the specified reader or buffer.
         * @function decode
         * @memberof DailyQuestsUpdateQuestInput.QuestProgress
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {DailyQuestsUpdateQuestInput.QuestProgress} QuestProgress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QuestProgress.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DailyQuestsUpdateQuestInput.QuestProgress();
            while (reader.pos < end) {
                var tag = reader.uint32();
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

        /**
         * Decodes a QuestProgress message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof DailyQuestsUpdateQuestInput.QuestProgress
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {DailyQuestsUpdateQuestInput.QuestProgress} QuestProgress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QuestProgress.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a QuestProgress message.
         * @function verify
         * @memberof DailyQuestsUpdateQuestInput.QuestProgress
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        QuestProgress.verify = function verify(message) {
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

        /**
         * Creates a QuestProgress message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof DailyQuestsUpdateQuestInput.QuestProgress
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {DailyQuestsUpdateQuestInput.QuestProgress} QuestProgress
         */
        QuestProgress.fromObject = function fromObject(object) {
            if (object instanceof $root.DailyQuestsUpdateQuestInput.QuestProgress)
                return object;
            var message = new $root.DailyQuestsUpdateQuestInput.QuestProgress();
            if (object.id != null)
                message.id = String(object.id);
            if (object.amount != null)
                message.amount = object.amount >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a QuestProgress message. Also converts values to other types if specified.
         * @function toObject
         * @memberof DailyQuestsUpdateQuestInput.QuestProgress
         * @static
         * @param {DailyQuestsUpdateQuestInput.QuestProgress} message QuestProgress
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        QuestProgress.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
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

        /**
         * Converts this QuestProgress to JSON.
         * @function toJSON
         * @memberof DailyQuestsUpdateQuestInput.QuestProgress
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        QuestProgress.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for QuestProgress
         * @function getTypeUrl
         * @memberof DailyQuestsUpdateQuestInput.QuestProgress
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        QuestProgress.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/DailyQuestsUpdateQuestInput.QuestProgress";
        };

        return QuestProgress;
    })();

    return DailyQuestsUpdateQuestInput;
})();

$root.DailyQuestsUpdateQuestOutput = (function() {

    /**
     * Properties of a DailyQuestsUpdateQuestOutput.
     * @exports IDailyQuestsUpdateQuestOutput
     * @interface IDailyQuestsUpdateQuestOutput
     * @property {Array.<string>|null} [questsCanClaim] DailyQuestsUpdateQuestOutput questsCanClaim
     */

    /**
     * Constructs a new DailyQuestsUpdateQuestOutput.
     * @exports DailyQuestsUpdateQuestOutput
     * @classdesc Represents a DailyQuestsUpdateQuestOutput.
     * @implements IDailyQuestsUpdateQuestOutput
     * @constructor
     * @param {IDailyQuestsUpdateQuestOutput=} [properties] Properties to set
     */
    function DailyQuestsUpdateQuestOutput(properties) {
        this.questsCanClaim = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DailyQuestsUpdateQuestOutput questsCanClaim.
     * @member {Array.<string>} questsCanClaim
     * @memberof DailyQuestsUpdateQuestOutput
     * @instance
     */
    DailyQuestsUpdateQuestOutput.prototype.questsCanClaim = $util.emptyArray;

    /**
     * Creates a new DailyQuestsUpdateQuestOutput instance using the specified properties.
     * @function create
     * @memberof DailyQuestsUpdateQuestOutput
     * @static
     * @param {IDailyQuestsUpdateQuestOutput=} [properties] Properties to set
     * @returns {DailyQuestsUpdateQuestOutput} DailyQuestsUpdateQuestOutput instance
     */
    DailyQuestsUpdateQuestOutput.create = function create(properties) {
        return new DailyQuestsUpdateQuestOutput(properties);
    };

    /**
     * Encodes the specified DailyQuestsUpdateQuestOutput message. Does not implicitly {@link DailyQuestsUpdateQuestOutput.verify|verify} messages.
     * @function encode
     * @memberof DailyQuestsUpdateQuestOutput
     * @static
     * @param {IDailyQuestsUpdateQuestOutput} message DailyQuestsUpdateQuestOutput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DailyQuestsUpdateQuestOutput.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.questsCanClaim != null && message.questsCanClaim.length)
            for (var i = 0; i < message.questsCanClaim.length; ++i)
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.questsCanClaim[i]);
        return writer;
    };

    /**
     * Encodes the specified DailyQuestsUpdateQuestOutput message, length delimited. Does not implicitly {@link DailyQuestsUpdateQuestOutput.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DailyQuestsUpdateQuestOutput
     * @static
     * @param {IDailyQuestsUpdateQuestOutput} message DailyQuestsUpdateQuestOutput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DailyQuestsUpdateQuestOutput.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DailyQuestsUpdateQuestOutput message from the specified reader or buffer.
     * @function decode
     * @memberof DailyQuestsUpdateQuestOutput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DailyQuestsUpdateQuestOutput} DailyQuestsUpdateQuestOutput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DailyQuestsUpdateQuestOutput.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DailyQuestsUpdateQuestOutput();
        while (reader.pos < end) {
            var tag = reader.uint32();
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

    /**
     * Decodes a DailyQuestsUpdateQuestOutput message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DailyQuestsUpdateQuestOutput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DailyQuestsUpdateQuestOutput} DailyQuestsUpdateQuestOutput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DailyQuestsUpdateQuestOutput.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DailyQuestsUpdateQuestOutput message.
     * @function verify
     * @memberof DailyQuestsUpdateQuestOutput
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DailyQuestsUpdateQuestOutput.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.questsCanClaim != null && message.hasOwnProperty("questsCanClaim")) {
            if (!Array.isArray(message.questsCanClaim))
                return "questsCanClaim: array expected";
            for (var i = 0; i < message.questsCanClaim.length; ++i)
                if (!$util.isString(message.questsCanClaim[i]))
                    return "questsCanClaim: string[] expected";
        }
        return null;
    };

    /**
     * Creates a DailyQuestsUpdateQuestOutput message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DailyQuestsUpdateQuestOutput
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DailyQuestsUpdateQuestOutput} DailyQuestsUpdateQuestOutput
     */
    DailyQuestsUpdateQuestOutput.fromObject = function fromObject(object) {
        if (object instanceof $root.DailyQuestsUpdateQuestOutput)
            return object;
        var message = new $root.DailyQuestsUpdateQuestOutput();
        if (object.questsCanClaim) {
            if (!Array.isArray(object.questsCanClaim))
                throw TypeError(".DailyQuestsUpdateQuestOutput.questsCanClaim: array expected");
            message.questsCanClaim = [];
            for (var i = 0; i < object.questsCanClaim.length; ++i)
                message.questsCanClaim[i] = String(object.questsCanClaim[i]);
        }
        return message;
    };

    /**
     * Creates a plain object from a DailyQuestsUpdateQuestOutput message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DailyQuestsUpdateQuestOutput
     * @static
     * @param {DailyQuestsUpdateQuestOutput} message DailyQuestsUpdateQuestOutput
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DailyQuestsUpdateQuestOutput.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.questsCanClaim = [];
        if (message.questsCanClaim && message.questsCanClaim.length) {
            object.questsCanClaim = [];
            for (var j = 0; j < message.questsCanClaim.length; ++j)
                object.questsCanClaim[j] = message.questsCanClaim[j];
        }
        return object;
    };

    /**
     * Converts this DailyQuestsUpdateQuestOutput to JSON.
     * @function toJSON
     * @memberof DailyQuestsUpdateQuestOutput
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DailyQuestsUpdateQuestOutput.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for DailyQuestsUpdateQuestOutput
     * @function getTypeUrl
     * @memberof DailyQuestsUpdateQuestOutput
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    DailyQuestsUpdateQuestOutput.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/DailyQuestsUpdateQuestOutput";
    };

    return DailyQuestsUpdateQuestOutput;
})();

$root.DailyQuestsClaimQuestInput = (function() {

    /**
     * Properties of a DailyQuestsClaimQuestInput.
     * @exports IDailyQuestsClaimQuestInput
     * @interface IDailyQuestsClaimQuestInput
     * @property {Array.<string>|null} [items] DailyQuestsClaimQuestInput items
     */

    /**
     * Constructs a new DailyQuestsClaimQuestInput.
     * @exports DailyQuestsClaimQuestInput
     * @classdesc Represents a DailyQuestsClaimQuestInput.
     * @implements IDailyQuestsClaimQuestInput
     * @constructor
     * @param {IDailyQuestsClaimQuestInput=} [properties] Properties to set
     */
    function DailyQuestsClaimQuestInput(properties) {
        this.items = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DailyQuestsClaimQuestInput items.
     * @member {Array.<string>} items
     * @memberof DailyQuestsClaimQuestInput
     * @instance
     */
    DailyQuestsClaimQuestInput.prototype.items = $util.emptyArray;

    /**
     * Creates a new DailyQuestsClaimQuestInput instance using the specified properties.
     * @function create
     * @memberof DailyQuestsClaimQuestInput
     * @static
     * @param {IDailyQuestsClaimQuestInput=} [properties] Properties to set
     * @returns {DailyQuestsClaimQuestInput} DailyQuestsClaimQuestInput instance
     */
    DailyQuestsClaimQuestInput.create = function create(properties) {
        return new DailyQuestsClaimQuestInput(properties);
    };

    /**
     * Encodes the specified DailyQuestsClaimQuestInput message. Does not implicitly {@link DailyQuestsClaimQuestInput.verify|verify} messages.
     * @function encode
     * @memberof DailyQuestsClaimQuestInput
     * @static
     * @param {IDailyQuestsClaimQuestInput} message DailyQuestsClaimQuestInput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DailyQuestsClaimQuestInput.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.items != null && message.items.length)
            for (var i = 0; i < message.items.length; ++i)
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.items[i]);
        return writer;
    };

    /**
     * Encodes the specified DailyQuestsClaimQuestInput message, length delimited. Does not implicitly {@link DailyQuestsClaimQuestInput.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DailyQuestsClaimQuestInput
     * @static
     * @param {IDailyQuestsClaimQuestInput} message DailyQuestsClaimQuestInput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DailyQuestsClaimQuestInput.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DailyQuestsClaimQuestInput message from the specified reader or buffer.
     * @function decode
     * @memberof DailyQuestsClaimQuestInput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DailyQuestsClaimQuestInput} DailyQuestsClaimQuestInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DailyQuestsClaimQuestInput.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DailyQuestsClaimQuestInput();
        while (reader.pos < end) {
            var tag = reader.uint32();
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

    /**
     * Decodes a DailyQuestsClaimQuestInput message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DailyQuestsClaimQuestInput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DailyQuestsClaimQuestInput} DailyQuestsClaimQuestInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DailyQuestsClaimQuestInput.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DailyQuestsClaimQuestInput message.
     * @function verify
     * @memberof DailyQuestsClaimQuestInput
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DailyQuestsClaimQuestInput.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.items != null && message.hasOwnProperty("items")) {
            if (!Array.isArray(message.items))
                return "items: array expected";
            for (var i = 0; i < message.items.length; ++i)
                if (!$util.isString(message.items[i]))
                    return "items: string[] expected";
        }
        return null;
    };

    /**
     * Creates a DailyQuestsClaimQuestInput message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DailyQuestsClaimQuestInput
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DailyQuestsClaimQuestInput} DailyQuestsClaimQuestInput
     */
    DailyQuestsClaimQuestInput.fromObject = function fromObject(object) {
        if (object instanceof $root.DailyQuestsClaimQuestInput)
            return object;
        var message = new $root.DailyQuestsClaimQuestInput();
        if (object.items) {
            if (!Array.isArray(object.items))
                throw TypeError(".DailyQuestsClaimQuestInput.items: array expected");
            message.items = [];
            for (var i = 0; i < object.items.length; ++i)
                message.items[i] = String(object.items[i]);
        }
        return message;
    };

    /**
     * Creates a plain object from a DailyQuestsClaimQuestInput message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DailyQuestsClaimQuestInput
     * @static
     * @param {DailyQuestsClaimQuestInput} message DailyQuestsClaimQuestInput
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DailyQuestsClaimQuestInput.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.items = [];
        if (message.items && message.items.length) {
            object.items = [];
            for (var j = 0; j < message.items.length; ++j)
                object.items[j] = message.items[j];
        }
        return object;
    };

    /**
     * Converts this DailyQuestsClaimQuestInput to JSON.
     * @function toJSON
     * @memberof DailyQuestsClaimQuestInput
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DailyQuestsClaimQuestInput.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for DailyQuestsClaimQuestInput
     * @function getTypeUrl
     * @memberof DailyQuestsClaimQuestInput
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    DailyQuestsClaimQuestInput.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/DailyQuestsClaimQuestInput";
    };

    return DailyQuestsClaimQuestInput;
})();

$root.DailyQuestsClaimQuestOutput = (function() {

    /**
     * Properties of a DailyQuestsClaimQuestOutput.
     * @exports IDailyQuestsClaimQuestOutput
     * @interface IDailyQuestsClaimQuestOutput
     * @property {Array.<DailyQuestsClaimQuestOutput.IRewards>|null} [rewards] DailyQuestsClaimQuestOutput rewards
     */

    /**
     * Constructs a new DailyQuestsClaimQuestOutput.
     * @exports DailyQuestsClaimQuestOutput
     * @classdesc Represents a DailyQuestsClaimQuestOutput.
     * @implements IDailyQuestsClaimQuestOutput
     * @constructor
     * @param {IDailyQuestsClaimQuestOutput=} [properties] Properties to set
     */
    function DailyQuestsClaimQuestOutput(properties) {
        this.rewards = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DailyQuestsClaimQuestOutput rewards.
     * @member {Array.<DailyQuestsClaimQuestOutput.IRewards>} rewards
     * @memberof DailyQuestsClaimQuestOutput
     * @instance
     */
    DailyQuestsClaimQuestOutput.prototype.rewards = $util.emptyArray;

    /**
     * Creates a new DailyQuestsClaimQuestOutput instance using the specified properties.
     * @function create
     * @memberof DailyQuestsClaimQuestOutput
     * @static
     * @param {IDailyQuestsClaimQuestOutput=} [properties] Properties to set
     * @returns {DailyQuestsClaimQuestOutput} DailyQuestsClaimQuestOutput instance
     */
    DailyQuestsClaimQuestOutput.create = function create(properties) {
        return new DailyQuestsClaimQuestOutput(properties);
    };

    /**
     * Encodes the specified DailyQuestsClaimQuestOutput message. Does not implicitly {@link DailyQuestsClaimQuestOutput.verify|verify} messages.
     * @function encode
     * @memberof DailyQuestsClaimQuestOutput
     * @static
     * @param {IDailyQuestsClaimQuestOutput} message DailyQuestsClaimQuestOutput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DailyQuestsClaimQuestOutput.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.rewards != null && message.rewards.length)
            for (var i = 0; i < message.rewards.length; ++i)
                $root.DailyQuestsClaimQuestOutput.Rewards.encode(message.rewards[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified DailyQuestsClaimQuestOutput message, length delimited. Does not implicitly {@link DailyQuestsClaimQuestOutput.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DailyQuestsClaimQuestOutput
     * @static
     * @param {IDailyQuestsClaimQuestOutput} message DailyQuestsClaimQuestOutput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DailyQuestsClaimQuestOutput.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DailyQuestsClaimQuestOutput message from the specified reader or buffer.
     * @function decode
     * @memberof DailyQuestsClaimQuestOutput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DailyQuestsClaimQuestOutput} DailyQuestsClaimQuestOutput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DailyQuestsClaimQuestOutput.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DailyQuestsClaimQuestOutput();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.rewards && message.rewards.length))
                        message.rewards = [];
                    message.rewards.push($root.DailyQuestsClaimQuestOutput.Rewards.decode(reader, reader.uint32()));
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
     * Decodes a DailyQuestsClaimQuestOutput message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DailyQuestsClaimQuestOutput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DailyQuestsClaimQuestOutput} DailyQuestsClaimQuestOutput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DailyQuestsClaimQuestOutput.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DailyQuestsClaimQuestOutput message.
     * @function verify
     * @memberof DailyQuestsClaimQuestOutput
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DailyQuestsClaimQuestOutput.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.rewards != null && message.hasOwnProperty("rewards")) {
            if (!Array.isArray(message.rewards))
                return "rewards: array expected";
            for (var i = 0; i < message.rewards.length; ++i) {
                var error = $root.DailyQuestsClaimQuestOutput.Rewards.verify(message.rewards[i]);
                if (error)
                    return "rewards." + error;
            }
        }
        return null;
    };

    /**
     * Creates a DailyQuestsClaimQuestOutput message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DailyQuestsClaimQuestOutput
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DailyQuestsClaimQuestOutput} DailyQuestsClaimQuestOutput
     */
    DailyQuestsClaimQuestOutput.fromObject = function fromObject(object) {
        if (object instanceof $root.DailyQuestsClaimQuestOutput)
            return object;
        var message = new $root.DailyQuestsClaimQuestOutput();
        if (object.rewards) {
            if (!Array.isArray(object.rewards))
                throw TypeError(".DailyQuestsClaimQuestOutput.rewards: array expected");
            message.rewards = [];
            for (var i = 0; i < object.rewards.length; ++i) {
                if (typeof object.rewards[i] !== "object")
                    throw TypeError(".DailyQuestsClaimQuestOutput.rewards: object expected");
                message.rewards[i] = $root.DailyQuestsClaimQuestOutput.Rewards.fromObject(object.rewards[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a DailyQuestsClaimQuestOutput message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DailyQuestsClaimQuestOutput
     * @static
     * @param {DailyQuestsClaimQuestOutput} message DailyQuestsClaimQuestOutput
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DailyQuestsClaimQuestOutput.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.rewards = [];
        if (message.rewards && message.rewards.length) {
            object.rewards = [];
            for (var j = 0; j < message.rewards.length; ++j)
                object.rewards[j] = $root.DailyQuestsClaimQuestOutput.Rewards.toObject(message.rewards[j], options);
        }
        return object;
    };

    /**
     * Converts this DailyQuestsClaimQuestOutput to JSON.
     * @function toJSON
     * @memberof DailyQuestsClaimQuestOutput
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DailyQuestsClaimQuestOutput.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for DailyQuestsClaimQuestOutput
     * @function getTypeUrl
     * @memberof DailyQuestsClaimQuestOutput
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    DailyQuestsClaimQuestOutput.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/DailyQuestsClaimQuestOutput";
    };

    DailyQuestsClaimQuestOutput.Rewards = (function() {

        /**
         * Properties of a Rewards.
         * @memberof DailyQuestsClaimQuestOutput
         * @interface IRewards
         * @property {string|null} [itemId] Rewards itemId
         * @property {number|null} [amount] Rewards amount
         */

        /**
         * Constructs a new Rewards.
         * @memberof DailyQuestsClaimQuestOutput
         * @classdesc Represents a Rewards.
         * @implements IRewards
         * @constructor
         * @param {DailyQuestsClaimQuestOutput.IRewards=} [properties] Properties to set
         */
        function Rewards(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Rewards itemId.
         * @member {string} itemId
         * @memberof DailyQuestsClaimQuestOutput.Rewards
         * @instance
         */
        Rewards.prototype.itemId = "";

        /**
         * Rewards amount.
         * @member {number} amount
         * @memberof DailyQuestsClaimQuestOutput.Rewards
         * @instance
         */
        Rewards.prototype.amount = 0;

        /**
         * Creates a new Rewards instance using the specified properties.
         * @function create
         * @memberof DailyQuestsClaimQuestOutput.Rewards
         * @static
         * @param {DailyQuestsClaimQuestOutput.IRewards=} [properties] Properties to set
         * @returns {DailyQuestsClaimQuestOutput.Rewards} Rewards instance
         */
        Rewards.create = function create(properties) {
            return new Rewards(properties);
        };

        /**
         * Encodes the specified Rewards message. Does not implicitly {@link DailyQuestsClaimQuestOutput.Rewards.verify|verify} messages.
         * @function encode
         * @memberof DailyQuestsClaimQuestOutput.Rewards
         * @static
         * @param {DailyQuestsClaimQuestOutput.IRewards} message Rewards message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Rewards.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.itemId != null && Object.hasOwnProperty.call(message, "itemId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.itemId);
            if (message.amount != null && Object.hasOwnProperty.call(message, "amount"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.amount);
            return writer;
        };

        /**
         * Encodes the specified Rewards message, length delimited. Does not implicitly {@link DailyQuestsClaimQuestOutput.Rewards.verify|verify} messages.
         * @function encodeDelimited
         * @memberof DailyQuestsClaimQuestOutput.Rewards
         * @static
         * @param {DailyQuestsClaimQuestOutput.IRewards} message Rewards message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Rewards.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Rewards message from the specified reader or buffer.
         * @function decode
         * @memberof DailyQuestsClaimQuestOutput.Rewards
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {DailyQuestsClaimQuestOutput.Rewards} Rewards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Rewards.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DailyQuestsClaimQuestOutput.Rewards();
            while (reader.pos < end) {
                var tag = reader.uint32();
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
         * Decodes a Rewards message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof DailyQuestsClaimQuestOutput.Rewards
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {DailyQuestsClaimQuestOutput.Rewards} Rewards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Rewards.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Rewards message.
         * @function verify
         * @memberof DailyQuestsClaimQuestOutput.Rewards
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
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

        /**
         * Creates a Rewards message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof DailyQuestsClaimQuestOutput.Rewards
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {DailyQuestsClaimQuestOutput.Rewards} Rewards
         */
        Rewards.fromObject = function fromObject(object) {
            if (object instanceof $root.DailyQuestsClaimQuestOutput.Rewards)
                return object;
            var message = new $root.DailyQuestsClaimQuestOutput.Rewards();
            if (object.itemId != null)
                message.itemId = String(object.itemId);
            if (object.amount != null)
                message.amount = object.amount >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a Rewards message. Also converts values to other types if specified.
         * @function toObject
         * @memberof DailyQuestsClaimQuestOutput.Rewards
         * @static
         * @param {DailyQuestsClaimQuestOutput.Rewards} message Rewards
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Rewards.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
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
         * Converts this Rewards to JSON.
         * @function toJSON
         * @memberof DailyQuestsClaimQuestOutput.Rewards
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Rewards.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Rewards
         * @function getTypeUrl
         * @memberof DailyQuestsClaimQuestOutput.Rewards
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Rewards.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/DailyQuestsClaimQuestOutput.Rewards";
        };

        return Rewards;
    })();

    return DailyQuestsClaimQuestOutput;
})();

$root.DailyRewardsCanClaimRewardOutput = (function() {

    /**
     * Properties of a DailyRewardsCanClaimRewardOutput.
     * @exports IDailyRewardsCanClaimRewardOutput
     * @interface IDailyRewardsCanClaimRewardOutput
     * @property {number|null} [curStep] DailyRewardsCanClaimRewardOutput curStep
     * @property {Array.<DailyRewardsCanClaimRewardOutput.IRewards>|null} [rewards] DailyRewardsCanClaimRewardOutput rewards
     */

    /**
     * Constructs a new DailyRewardsCanClaimRewardOutput.
     * @exports DailyRewardsCanClaimRewardOutput
     * @classdesc Represents a DailyRewardsCanClaimRewardOutput.
     * @implements IDailyRewardsCanClaimRewardOutput
     * @constructor
     * @param {IDailyRewardsCanClaimRewardOutput=} [properties] Properties to set
     */
    function DailyRewardsCanClaimRewardOutput(properties) {
        this.rewards = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DailyRewardsCanClaimRewardOutput curStep.
     * @member {number} curStep
     * @memberof DailyRewardsCanClaimRewardOutput
     * @instance
     */
    DailyRewardsCanClaimRewardOutput.prototype.curStep = 0;

    /**
     * DailyRewardsCanClaimRewardOutput rewards.
     * @member {Array.<DailyRewardsCanClaimRewardOutput.IRewards>} rewards
     * @memberof DailyRewardsCanClaimRewardOutput
     * @instance
     */
    DailyRewardsCanClaimRewardOutput.prototype.rewards = $util.emptyArray;

    /**
     * Creates a new DailyRewardsCanClaimRewardOutput instance using the specified properties.
     * @function create
     * @memberof DailyRewardsCanClaimRewardOutput
     * @static
     * @param {IDailyRewardsCanClaimRewardOutput=} [properties] Properties to set
     * @returns {DailyRewardsCanClaimRewardOutput} DailyRewardsCanClaimRewardOutput instance
     */
    DailyRewardsCanClaimRewardOutput.create = function create(properties) {
        return new DailyRewardsCanClaimRewardOutput(properties);
    };

    /**
     * Encodes the specified DailyRewardsCanClaimRewardOutput message. Does not implicitly {@link DailyRewardsCanClaimRewardOutput.verify|verify} messages.
     * @function encode
     * @memberof DailyRewardsCanClaimRewardOutput
     * @static
     * @param {IDailyRewardsCanClaimRewardOutput} message DailyRewardsCanClaimRewardOutput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DailyRewardsCanClaimRewardOutput.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.curStep != null && Object.hasOwnProperty.call(message, "curStep"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.curStep);
        if (message.rewards != null && message.rewards.length)
            for (var i = 0; i < message.rewards.length; ++i)
                $root.DailyRewardsCanClaimRewardOutput.Rewards.encode(message.rewards[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified DailyRewardsCanClaimRewardOutput message, length delimited. Does not implicitly {@link DailyRewardsCanClaimRewardOutput.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DailyRewardsCanClaimRewardOutput
     * @static
     * @param {IDailyRewardsCanClaimRewardOutput} message DailyRewardsCanClaimRewardOutput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DailyRewardsCanClaimRewardOutput.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DailyRewardsCanClaimRewardOutput message from the specified reader or buffer.
     * @function decode
     * @memberof DailyRewardsCanClaimRewardOutput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DailyRewardsCanClaimRewardOutput} DailyRewardsCanClaimRewardOutput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DailyRewardsCanClaimRewardOutput.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DailyRewardsCanClaimRewardOutput();
        while (reader.pos < end) {
            var tag = reader.uint32();
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

    /**
     * Decodes a DailyRewardsCanClaimRewardOutput message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DailyRewardsCanClaimRewardOutput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DailyRewardsCanClaimRewardOutput} DailyRewardsCanClaimRewardOutput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DailyRewardsCanClaimRewardOutput.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DailyRewardsCanClaimRewardOutput message.
     * @function verify
     * @memberof DailyRewardsCanClaimRewardOutput
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DailyRewardsCanClaimRewardOutput.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.curStep != null && message.hasOwnProperty("curStep"))
            if (!$util.isInteger(message.curStep))
                return "curStep: integer expected";
        if (message.rewards != null && message.hasOwnProperty("rewards")) {
            if (!Array.isArray(message.rewards))
                return "rewards: array expected";
            for (var i = 0; i < message.rewards.length; ++i) {
                var error = $root.DailyRewardsCanClaimRewardOutput.Rewards.verify(message.rewards[i]);
                if (error)
                    return "rewards." + error;
            }
        }
        return null;
    };

    /**
     * Creates a DailyRewardsCanClaimRewardOutput message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DailyRewardsCanClaimRewardOutput
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DailyRewardsCanClaimRewardOutput} DailyRewardsCanClaimRewardOutput
     */
    DailyRewardsCanClaimRewardOutput.fromObject = function fromObject(object) {
        if (object instanceof $root.DailyRewardsCanClaimRewardOutput)
            return object;
        var message = new $root.DailyRewardsCanClaimRewardOutput();
        if (object.curStep != null)
            message.curStep = object.curStep >>> 0;
        if (object.rewards) {
            if (!Array.isArray(object.rewards))
                throw TypeError(".DailyRewardsCanClaimRewardOutput.rewards: array expected");
            message.rewards = [];
            for (var i = 0; i < object.rewards.length; ++i) {
                if (typeof object.rewards[i] !== "object")
                    throw TypeError(".DailyRewardsCanClaimRewardOutput.rewards: object expected");
                message.rewards[i] = $root.DailyRewardsCanClaimRewardOutput.Rewards.fromObject(object.rewards[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a DailyRewardsCanClaimRewardOutput message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DailyRewardsCanClaimRewardOutput
     * @static
     * @param {DailyRewardsCanClaimRewardOutput} message DailyRewardsCanClaimRewardOutput
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DailyRewardsCanClaimRewardOutput.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.rewards = [];
        if (options.defaults)
            object.curStep = 0;
        if (message.curStep != null && message.hasOwnProperty("curStep"))
            object.curStep = message.curStep;
        if (message.rewards && message.rewards.length) {
            object.rewards = [];
            for (var j = 0; j < message.rewards.length; ++j)
                object.rewards[j] = $root.DailyRewardsCanClaimRewardOutput.Rewards.toObject(message.rewards[j], options);
        }
        return object;
    };

    /**
     * Converts this DailyRewardsCanClaimRewardOutput to JSON.
     * @function toJSON
     * @memberof DailyRewardsCanClaimRewardOutput
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DailyRewardsCanClaimRewardOutput.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for DailyRewardsCanClaimRewardOutput
     * @function getTypeUrl
     * @memberof DailyRewardsCanClaimRewardOutput
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    DailyRewardsCanClaimRewardOutput.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/DailyRewardsCanClaimRewardOutput";
    };

    DailyRewardsCanClaimRewardOutput.Rewards = (function() {

        /**
         * Properties of a Rewards.
         * @memberof DailyRewardsCanClaimRewardOutput
         * @interface IRewards
         * @property {string|null} [itemId] Rewards itemId
         * @property {number|null} [step] Rewards step
         * @property {number|null} [amount] Rewards amount
         */

        /**
         * Constructs a new Rewards.
         * @memberof DailyRewardsCanClaimRewardOutput
         * @classdesc Represents a Rewards.
         * @implements IRewards
         * @constructor
         * @param {DailyRewardsCanClaimRewardOutput.IRewards=} [properties] Properties to set
         */
        function Rewards(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Rewards itemId.
         * @member {string} itemId
         * @memberof DailyRewardsCanClaimRewardOutput.Rewards
         * @instance
         */
        Rewards.prototype.itemId = "";

        /**
         * Rewards step.
         * @member {number} step
         * @memberof DailyRewardsCanClaimRewardOutput.Rewards
         * @instance
         */
        Rewards.prototype.step = 0;

        /**
         * Rewards amount.
         * @member {number} amount
         * @memberof DailyRewardsCanClaimRewardOutput.Rewards
         * @instance
         */
        Rewards.prototype.amount = 0;

        /**
         * Creates a new Rewards instance using the specified properties.
         * @function create
         * @memberof DailyRewardsCanClaimRewardOutput.Rewards
         * @static
         * @param {DailyRewardsCanClaimRewardOutput.IRewards=} [properties] Properties to set
         * @returns {DailyRewardsCanClaimRewardOutput.Rewards} Rewards instance
         */
        Rewards.create = function create(properties) {
            return new Rewards(properties);
        };

        /**
         * Encodes the specified Rewards message. Does not implicitly {@link DailyRewardsCanClaimRewardOutput.Rewards.verify|verify} messages.
         * @function encode
         * @memberof DailyRewardsCanClaimRewardOutput.Rewards
         * @static
         * @param {DailyRewardsCanClaimRewardOutput.IRewards} message Rewards message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Rewards.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.itemId != null && Object.hasOwnProperty.call(message, "itemId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.itemId);
            if (message.step != null && Object.hasOwnProperty.call(message, "step"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.step);
            if (message.amount != null && Object.hasOwnProperty.call(message, "amount"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.amount);
            return writer;
        };

        /**
         * Encodes the specified Rewards message, length delimited. Does not implicitly {@link DailyRewardsCanClaimRewardOutput.Rewards.verify|verify} messages.
         * @function encodeDelimited
         * @memberof DailyRewardsCanClaimRewardOutput.Rewards
         * @static
         * @param {DailyRewardsCanClaimRewardOutput.IRewards} message Rewards message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Rewards.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Rewards message from the specified reader or buffer.
         * @function decode
         * @memberof DailyRewardsCanClaimRewardOutput.Rewards
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {DailyRewardsCanClaimRewardOutput.Rewards} Rewards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Rewards.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DailyRewardsCanClaimRewardOutput.Rewards();
            while (reader.pos < end) {
                var tag = reader.uint32();
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

        /**
         * Decodes a Rewards message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof DailyRewardsCanClaimRewardOutput.Rewards
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {DailyRewardsCanClaimRewardOutput.Rewards} Rewards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Rewards.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Rewards message.
         * @function verify
         * @memberof DailyRewardsCanClaimRewardOutput.Rewards
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
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

        /**
         * Creates a Rewards message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof DailyRewardsCanClaimRewardOutput.Rewards
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {DailyRewardsCanClaimRewardOutput.Rewards} Rewards
         */
        Rewards.fromObject = function fromObject(object) {
            if (object instanceof $root.DailyRewardsCanClaimRewardOutput.Rewards)
                return object;
            var message = new $root.DailyRewardsCanClaimRewardOutput.Rewards();
            if (object.itemId != null)
                message.itemId = String(object.itemId);
            if (object.step != null)
                message.step = object.step >>> 0;
            if (object.amount != null)
                message.amount = object.amount >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a Rewards message. Also converts values to other types if specified.
         * @function toObject
         * @memberof DailyRewardsCanClaimRewardOutput.Rewards
         * @static
         * @param {DailyRewardsCanClaimRewardOutput.Rewards} message Rewards
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Rewards.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
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

        /**
         * Converts this Rewards to JSON.
         * @function toJSON
         * @memberof DailyRewardsCanClaimRewardOutput.Rewards
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Rewards.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Rewards
         * @function getTypeUrl
         * @memberof DailyRewardsCanClaimRewardOutput.Rewards
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
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

$root.DailyRewardsClaimRewardsOutput = (function() {

    /**
     * Properties of a DailyRewardsClaimRewardsOutput.
     * @exports IDailyRewardsClaimRewardsOutput
     * @interface IDailyRewardsClaimRewardsOutput
     * @property {Array.<DailyRewardsClaimRewardsOutput.IRewards>|null} [rewards] DailyRewardsClaimRewardsOutput rewards
     */

    /**
     * Constructs a new DailyRewardsClaimRewardsOutput.
     * @exports DailyRewardsClaimRewardsOutput
     * @classdesc Represents a DailyRewardsClaimRewardsOutput.
     * @implements IDailyRewardsClaimRewardsOutput
     * @constructor
     * @param {IDailyRewardsClaimRewardsOutput=} [properties] Properties to set
     */
    function DailyRewardsClaimRewardsOutput(properties) {
        this.rewards = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DailyRewardsClaimRewardsOutput rewards.
     * @member {Array.<DailyRewardsClaimRewardsOutput.IRewards>} rewards
     * @memberof DailyRewardsClaimRewardsOutput
     * @instance
     */
    DailyRewardsClaimRewardsOutput.prototype.rewards = $util.emptyArray;

    /**
     * Creates a new DailyRewardsClaimRewardsOutput instance using the specified properties.
     * @function create
     * @memberof DailyRewardsClaimRewardsOutput
     * @static
     * @param {IDailyRewardsClaimRewardsOutput=} [properties] Properties to set
     * @returns {DailyRewardsClaimRewardsOutput} DailyRewardsClaimRewardsOutput instance
     */
    DailyRewardsClaimRewardsOutput.create = function create(properties) {
        return new DailyRewardsClaimRewardsOutput(properties);
    };

    /**
     * Encodes the specified DailyRewardsClaimRewardsOutput message. Does not implicitly {@link DailyRewardsClaimRewardsOutput.verify|verify} messages.
     * @function encode
     * @memberof DailyRewardsClaimRewardsOutput
     * @static
     * @param {IDailyRewardsClaimRewardsOutput} message DailyRewardsClaimRewardsOutput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DailyRewardsClaimRewardsOutput.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.rewards != null && message.rewards.length)
            for (var i = 0; i < message.rewards.length; ++i)
                $root.DailyRewardsClaimRewardsOutput.Rewards.encode(message.rewards[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified DailyRewardsClaimRewardsOutput message, length delimited. Does not implicitly {@link DailyRewardsClaimRewardsOutput.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DailyRewardsClaimRewardsOutput
     * @static
     * @param {IDailyRewardsClaimRewardsOutput} message DailyRewardsClaimRewardsOutput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DailyRewardsClaimRewardsOutput.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DailyRewardsClaimRewardsOutput message from the specified reader or buffer.
     * @function decode
     * @memberof DailyRewardsClaimRewardsOutput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DailyRewardsClaimRewardsOutput} DailyRewardsClaimRewardsOutput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DailyRewardsClaimRewardsOutput.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DailyRewardsClaimRewardsOutput();
        while (reader.pos < end) {
            var tag = reader.uint32();
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

    /**
     * Decodes a DailyRewardsClaimRewardsOutput message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DailyRewardsClaimRewardsOutput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DailyRewardsClaimRewardsOutput} DailyRewardsClaimRewardsOutput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DailyRewardsClaimRewardsOutput.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DailyRewardsClaimRewardsOutput message.
     * @function verify
     * @memberof DailyRewardsClaimRewardsOutput
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DailyRewardsClaimRewardsOutput.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.rewards != null && message.hasOwnProperty("rewards")) {
            if (!Array.isArray(message.rewards))
                return "rewards: array expected";
            for (var i = 0; i < message.rewards.length; ++i) {
                var error = $root.DailyRewardsClaimRewardsOutput.Rewards.verify(message.rewards[i]);
                if (error)
                    return "rewards." + error;
            }
        }
        return null;
    };

    /**
     * Creates a DailyRewardsClaimRewardsOutput message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DailyRewardsClaimRewardsOutput
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DailyRewardsClaimRewardsOutput} DailyRewardsClaimRewardsOutput
     */
    DailyRewardsClaimRewardsOutput.fromObject = function fromObject(object) {
        if (object instanceof $root.DailyRewardsClaimRewardsOutput)
            return object;
        var message = new $root.DailyRewardsClaimRewardsOutput();
        if (object.rewards) {
            if (!Array.isArray(object.rewards))
                throw TypeError(".DailyRewardsClaimRewardsOutput.rewards: array expected");
            message.rewards = [];
            for (var i = 0; i < object.rewards.length; ++i) {
                if (typeof object.rewards[i] !== "object")
                    throw TypeError(".DailyRewardsClaimRewardsOutput.rewards: object expected");
                message.rewards[i] = $root.DailyRewardsClaimRewardsOutput.Rewards.fromObject(object.rewards[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a DailyRewardsClaimRewardsOutput message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DailyRewardsClaimRewardsOutput
     * @static
     * @param {DailyRewardsClaimRewardsOutput} message DailyRewardsClaimRewardsOutput
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DailyRewardsClaimRewardsOutput.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.rewards = [];
        if (message.rewards && message.rewards.length) {
            object.rewards = [];
            for (var j = 0; j < message.rewards.length; ++j)
                object.rewards[j] = $root.DailyRewardsClaimRewardsOutput.Rewards.toObject(message.rewards[j], options);
        }
        return object;
    };

    /**
     * Converts this DailyRewardsClaimRewardsOutput to JSON.
     * @function toJSON
     * @memberof DailyRewardsClaimRewardsOutput
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DailyRewardsClaimRewardsOutput.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for DailyRewardsClaimRewardsOutput
     * @function getTypeUrl
     * @memberof DailyRewardsClaimRewardsOutput
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    DailyRewardsClaimRewardsOutput.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/DailyRewardsClaimRewardsOutput";
    };

    DailyRewardsClaimRewardsOutput.Rewards = (function() {

        /**
         * Properties of a Rewards.
         * @memberof DailyRewardsClaimRewardsOutput
         * @interface IRewards
         * @property {string|null} [itemId] Rewards itemId
         * @property {number|null} [amount] Rewards amount
         */

        /**
         * Constructs a new Rewards.
         * @memberof DailyRewardsClaimRewardsOutput
         * @classdesc Represents a Rewards.
         * @implements IRewards
         * @constructor
         * @param {DailyRewardsClaimRewardsOutput.IRewards=} [properties] Properties to set
         */
        function Rewards(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Rewards itemId.
         * @member {string} itemId
         * @memberof DailyRewardsClaimRewardsOutput.Rewards
         * @instance
         */
        Rewards.prototype.itemId = "";

        /**
         * Rewards amount.
         * @member {number} amount
         * @memberof DailyRewardsClaimRewardsOutput.Rewards
         * @instance
         */
        Rewards.prototype.amount = 0;

        /**
         * Creates a new Rewards instance using the specified properties.
         * @function create
         * @memberof DailyRewardsClaimRewardsOutput.Rewards
         * @static
         * @param {DailyRewardsClaimRewardsOutput.IRewards=} [properties] Properties to set
         * @returns {DailyRewardsClaimRewardsOutput.Rewards} Rewards instance
         */
        Rewards.create = function create(properties) {
            return new Rewards(properties);
        };

        /**
         * Encodes the specified Rewards message. Does not implicitly {@link DailyRewardsClaimRewardsOutput.Rewards.verify|verify} messages.
         * @function encode
         * @memberof DailyRewardsClaimRewardsOutput.Rewards
         * @static
         * @param {DailyRewardsClaimRewardsOutput.IRewards} message Rewards message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Rewards.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.itemId != null && Object.hasOwnProperty.call(message, "itemId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.itemId);
            if (message.amount != null && Object.hasOwnProperty.call(message, "amount"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.amount);
            return writer;
        };

        /**
         * Encodes the specified Rewards message, length delimited. Does not implicitly {@link DailyRewardsClaimRewardsOutput.Rewards.verify|verify} messages.
         * @function encodeDelimited
         * @memberof DailyRewardsClaimRewardsOutput.Rewards
         * @static
         * @param {DailyRewardsClaimRewardsOutput.IRewards} message Rewards message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Rewards.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Rewards message from the specified reader or buffer.
         * @function decode
         * @memberof DailyRewardsClaimRewardsOutput.Rewards
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {DailyRewardsClaimRewardsOutput.Rewards} Rewards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Rewards.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DailyRewardsClaimRewardsOutput.Rewards();
            while (reader.pos < end) {
                var tag = reader.uint32();
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
         * Decodes a Rewards message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof DailyRewardsClaimRewardsOutput.Rewards
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {DailyRewardsClaimRewardsOutput.Rewards} Rewards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Rewards.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Rewards message.
         * @function verify
         * @memberof DailyRewardsClaimRewardsOutput.Rewards
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
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

        /**
         * Creates a Rewards message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof DailyRewardsClaimRewardsOutput.Rewards
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {DailyRewardsClaimRewardsOutput.Rewards} Rewards
         */
        Rewards.fromObject = function fromObject(object) {
            if (object instanceof $root.DailyRewardsClaimRewardsOutput.Rewards)
                return object;
            var message = new $root.DailyRewardsClaimRewardsOutput.Rewards();
            if (object.itemId != null)
                message.itemId = String(object.itemId);
            if (object.amount != null)
                message.amount = object.amount >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a Rewards message. Also converts values to other types if specified.
         * @function toObject
         * @memberof DailyRewardsClaimRewardsOutput.Rewards
         * @static
         * @param {DailyRewardsClaimRewardsOutput.Rewards} message Rewards
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Rewards.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
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
         * Converts this Rewards to JSON.
         * @function toJSON
         * @memberof DailyRewardsClaimRewardsOutput.Rewards
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Rewards.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Rewards
         * @function getTypeUrl
         * @memberof DailyRewardsClaimRewardsOutput.Rewards
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
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

$root.LuckyWheelCanClaimOutput = (function() {

    /**
     * Properties of a LuckyWheelCanClaimOutput.
     * @exports ILuckyWheelCanClaimOutput
     * @interface ILuckyWheelCanClaimOutput
     * @property {boolean|null} [canClaim] LuckyWheelCanClaimOutput canClaim
     */

    /**
     * Constructs a new LuckyWheelCanClaimOutput.
     * @exports LuckyWheelCanClaimOutput
     * @classdesc Represents a LuckyWheelCanClaimOutput.
     * @implements ILuckyWheelCanClaimOutput
     * @constructor
     * @param {ILuckyWheelCanClaimOutput=} [properties] Properties to set
     */
    function LuckyWheelCanClaimOutput(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * LuckyWheelCanClaimOutput canClaim.
     * @member {boolean} canClaim
     * @memberof LuckyWheelCanClaimOutput
     * @instance
     */
    LuckyWheelCanClaimOutput.prototype.canClaim = false;

    /**
     * Creates a new LuckyWheelCanClaimOutput instance using the specified properties.
     * @function create
     * @memberof LuckyWheelCanClaimOutput
     * @static
     * @param {ILuckyWheelCanClaimOutput=} [properties] Properties to set
     * @returns {LuckyWheelCanClaimOutput} LuckyWheelCanClaimOutput instance
     */
    LuckyWheelCanClaimOutput.create = function create(properties) {
        return new LuckyWheelCanClaimOutput(properties);
    };

    /**
     * Encodes the specified LuckyWheelCanClaimOutput message. Does not implicitly {@link LuckyWheelCanClaimOutput.verify|verify} messages.
     * @function encode
     * @memberof LuckyWheelCanClaimOutput
     * @static
     * @param {ILuckyWheelCanClaimOutput} message LuckyWheelCanClaimOutput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LuckyWheelCanClaimOutput.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.canClaim != null && Object.hasOwnProperty.call(message, "canClaim"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.canClaim);
        return writer;
    };

    /**
     * Encodes the specified LuckyWheelCanClaimOutput message, length delimited. Does not implicitly {@link LuckyWheelCanClaimOutput.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LuckyWheelCanClaimOutput
     * @static
     * @param {ILuckyWheelCanClaimOutput} message LuckyWheelCanClaimOutput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LuckyWheelCanClaimOutput.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LuckyWheelCanClaimOutput message from the specified reader or buffer.
     * @function decode
     * @memberof LuckyWheelCanClaimOutput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LuckyWheelCanClaimOutput} LuckyWheelCanClaimOutput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LuckyWheelCanClaimOutput.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LuckyWheelCanClaimOutput();
        while (reader.pos < end) {
            var tag = reader.uint32();
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

    /**
     * Decodes a LuckyWheelCanClaimOutput message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LuckyWheelCanClaimOutput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LuckyWheelCanClaimOutput} LuckyWheelCanClaimOutput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LuckyWheelCanClaimOutput.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LuckyWheelCanClaimOutput message.
     * @function verify
     * @memberof LuckyWheelCanClaimOutput
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LuckyWheelCanClaimOutput.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.canClaim != null && message.hasOwnProperty("canClaim"))
            if (typeof message.canClaim !== "boolean")
                return "canClaim: boolean expected";
        return null;
    };

    /**
     * Creates a LuckyWheelCanClaimOutput message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LuckyWheelCanClaimOutput
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LuckyWheelCanClaimOutput} LuckyWheelCanClaimOutput
     */
    LuckyWheelCanClaimOutput.fromObject = function fromObject(object) {
        if (object instanceof $root.LuckyWheelCanClaimOutput)
            return object;
        var message = new $root.LuckyWheelCanClaimOutput();
        if (object.canClaim != null)
            message.canClaim = Boolean(object.canClaim);
        return message;
    };

    /**
     * Creates a plain object from a LuckyWheelCanClaimOutput message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LuckyWheelCanClaimOutput
     * @static
     * @param {LuckyWheelCanClaimOutput} message LuckyWheelCanClaimOutput
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LuckyWheelCanClaimOutput.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.canClaim = false;
        if (message.canClaim != null && message.hasOwnProperty("canClaim"))
            object.canClaim = message.canClaim;
        return object;
    };

    /**
     * Converts this LuckyWheelCanClaimOutput to JSON.
     * @function toJSON
     * @memberof LuckyWheelCanClaimOutput
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LuckyWheelCanClaimOutput.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for LuckyWheelCanClaimOutput
     * @function getTypeUrl
     * @memberof LuckyWheelCanClaimOutput
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    LuckyWheelCanClaimOutput.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/LuckyWheelCanClaimOutput";
    };

    return LuckyWheelCanClaimOutput;
})();

$root.LuckyWheelClaimItemOutput = (function() {

    /**
     * Properties of a LuckyWheelClaimItemOutput.
     * @exports ILuckyWheelClaimItemOutput
     * @interface ILuckyWheelClaimItemOutput
     * @property {LuckyWheelClaimItemOutput.IItemreward|null} [itemReward] LuckyWheelClaimItemOutput itemReward
     * @property {Array.<LuckyWheelClaimItemOutput.IInventory>|null} [inventory] LuckyWheelClaimItemOutput inventory
     * @property {LuckyWheelClaimItemOutput.I_luckywheel|null} [_luckyWheel] LuckyWheelClaimItemOutput _luckyWheel
     */

    /**
     * Constructs a new LuckyWheelClaimItemOutput.
     * @exports LuckyWheelClaimItemOutput
     * @classdesc Represents a LuckyWheelClaimItemOutput.
     * @implements ILuckyWheelClaimItemOutput
     * @constructor
     * @param {ILuckyWheelClaimItemOutput=} [properties] Properties to set
     */
    function LuckyWheelClaimItemOutput(properties) {
        this.inventory = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * LuckyWheelClaimItemOutput itemReward.
     * @member {LuckyWheelClaimItemOutput.IItemreward|null|undefined} itemReward
     * @memberof LuckyWheelClaimItemOutput
     * @instance
     */
    LuckyWheelClaimItemOutput.prototype.itemReward = null;

    /**
     * LuckyWheelClaimItemOutput inventory.
     * @member {Array.<LuckyWheelClaimItemOutput.IInventory>} inventory
     * @memberof LuckyWheelClaimItemOutput
     * @instance
     */
    LuckyWheelClaimItemOutput.prototype.inventory = $util.emptyArray;

    /**
     * LuckyWheelClaimItemOutput _luckyWheel.
     * @member {LuckyWheelClaimItemOutput.I_luckywheel|null|undefined} _luckyWheel
     * @memberof LuckyWheelClaimItemOutput
     * @instance
     */
    LuckyWheelClaimItemOutput.prototype._luckyWheel = null;

    /**
     * Creates a new LuckyWheelClaimItemOutput instance using the specified properties.
     * @function create
     * @memberof LuckyWheelClaimItemOutput
     * @static
     * @param {ILuckyWheelClaimItemOutput=} [properties] Properties to set
     * @returns {LuckyWheelClaimItemOutput} LuckyWheelClaimItemOutput instance
     */
    LuckyWheelClaimItemOutput.create = function create(properties) {
        return new LuckyWheelClaimItemOutput(properties);
    };

    /**
     * Encodes the specified LuckyWheelClaimItemOutput message. Does not implicitly {@link LuckyWheelClaimItemOutput.verify|verify} messages.
     * @function encode
     * @memberof LuckyWheelClaimItemOutput
     * @static
     * @param {ILuckyWheelClaimItemOutput} message LuckyWheelClaimItemOutput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LuckyWheelClaimItemOutput.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.itemReward != null && Object.hasOwnProperty.call(message, "itemReward"))
            $root.LuckyWheelClaimItemOutput.Itemreward.encode(message.itemReward, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.inventory != null && message.inventory.length)
            for (var i = 0; i < message.inventory.length; ++i)
                $root.LuckyWheelClaimItemOutput.Inventory.encode(message.inventory[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message._luckyWheel != null && Object.hasOwnProperty.call(message, "_luckyWheel"))
            $root.LuckyWheelClaimItemOutput._luckywheel.encode(message._luckyWheel, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified LuckyWheelClaimItemOutput message, length delimited. Does not implicitly {@link LuckyWheelClaimItemOutput.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LuckyWheelClaimItemOutput
     * @static
     * @param {ILuckyWheelClaimItemOutput} message LuckyWheelClaimItemOutput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LuckyWheelClaimItemOutput.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LuckyWheelClaimItemOutput message from the specified reader or buffer.
     * @function decode
     * @memberof LuckyWheelClaimItemOutput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LuckyWheelClaimItemOutput} LuckyWheelClaimItemOutput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LuckyWheelClaimItemOutput.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LuckyWheelClaimItemOutput();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
            case 3: {
                    message._luckyWheel = $root.LuckyWheelClaimItemOutput._luckywheel.decode(reader, reader.uint32());
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
     * Decodes a LuckyWheelClaimItemOutput message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LuckyWheelClaimItemOutput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LuckyWheelClaimItemOutput} LuckyWheelClaimItemOutput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LuckyWheelClaimItemOutput.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LuckyWheelClaimItemOutput message.
     * @function verify
     * @memberof LuckyWheelClaimItemOutput
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LuckyWheelClaimItemOutput.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.itemReward != null && message.hasOwnProperty("itemReward")) {
            var error = $root.LuckyWheelClaimItemOutput.Itemreward.verify(message.itemReward);
            if (error)
                return "itemReward." + error;
        }
        if (message.inventory != null && message.hasOwnProperty("inventory")) {
            if (!Array.isArray(message.inventory))
                return "inventory: array expected";
            for (var i = 0; i < message.inventory.length; ++i) {
                var error = $root.LuckyWheelClaimItemOutput.Inventory.verify(message.inventory[i]);
                if (error)
                    return "inventory." + error;
            }
        }
        if (message._luckyWheel != null && message.hasOwnProperty("_luckyWheel")) {
            var error = $root.LuckyWheelClaimItemOutput._luckywheel.verify(message._luckyWheel);
            if (error)
                return "_luckyWheel." + error;
        }
        return null;
    };

    /**
     * Creates a LuckyWheelClaimItemOutput message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LuckyWheelClaimItemOutput
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LuckyWheelClaimItemOutput} LuckyWheelClaimItemOutput
     */
    LuckyWheelClaimItemOutput.fromObject = function fromObject(object) {
        if (object instanceof $root.LuckyWheelClaimItemOutput)
            return object;
        var message = new $root.LuckyWheelClaimItemOutput();
        if (object.itemReward != null) {
            if (typeof object.itemReward !== "object")
                throw TypeError(".LuckyWheelClaimItemOutput.itemReward: object expected");
            message.itemReward = $root.LuckyWheelClaimItemOutput.Itemreward.fromObject(object.itemReward);
        }
        if (object.inventory) {
            if (!Array.isArray(object.inventory))
                throw TypeError(".LuckyWheelClaimItemOutput.inventory: array expected");
            message.inventory = [];
            for (var i = 0; i < object.inventory.length; ++i) {
                if (typeof object.inventory[i] !== "object")
                    throw TypeError(".LuckyWheelClaimItemOutput.inventory: object expected");
                message.inventory[i] = $root.LuckyWheelClaimItemOutput.Inventory.fromObject(object.inventory[i]);
            }
        }
        if (object._luckyWheel != null) {
            if (typeof object._luckyWheel !== "object")
                throw TypeError(".LuckyWheelClaimItemOutput._luckyWheel: object expected");
            message._luckyWheel = $root.LuckyWheelClaimItemOutput._luckywheel.fromObject(object._luckyWheel);
        }
        return message;
    };

    /**
     * Creates a plain object from a LuckyWheelClaimItemOutput message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LuckyWheelClaimItemOutput
     * @static
     * @param {LuckyWheelClaimItemOutput} message LuckyWheelClaimItemOutput
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LuckyWheelClaimItemOutput.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.inventory = [];
        if (options.defaults) {
            object.itemReward = null;
            object._luckyWheel = null;
        }
        if (message.itemReward != null && message.hasOwnProperty("itemReward"))
            object.itemReward = $root.LuckyWheelClaimItemOutput.Itemreward.toObject(message.itemReward, options);
        if (message.inventory && message.inventory.length) {
            object.inventory = [];
            for (var j = 0; j < message.inventory.length; ++j)
                object.inventory[j] = $root.LuckyWheelClaimItemOutput.Inventory.toObject(message.inventory[j], options);
        }
        if (message._luckyWheel != null && message.hasOwnProperty("_luckyWheel"))
            object._luckyWheel = $root.LuckyWheelClaimItemOutput._luckywheel.toObject(message._luckyWheel, options);
        return object;
    };

    /**
     * Converts this LuckyWheelClaimItemOutput to JSON.
     * @function toJSON
     * @memberof LuckyWheelClaimItemOutput
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LuckyWheelClaimItemOutput.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for LuckyWheelClaimItemOutput
     * @function getTypeUrl
     * @memberof LuckyWheelClaimItemOutput
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    LuckyWheelClaimItemOutput.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/LuckyWheelClaimItemOutput";
    };

    LuckyWheelClaimItemOutput.Itemreward = (function() {

        /**
         * Properties of an Itemreward.
         * @memberof LuckyWheelClaimItemOutput
         * @interface IItemreward
         * @property {string|null} [itemId] Itemreward itemId
         * @property {number|null} [weight] Itemreward weight
         * @property {number|null} [quantity] Itemreward quantity
         */

        /**
         * Constructs a new Itemreward.
         * @memberof LuckyWheelClaimItemOutput
         * @classdesc Represents an Itemreward.
         * @implements IItemreward
         * @constructor
         * @param {LuckyWheelClaimItemOutput.IItemreward=} [properties] Properties to set
         */
        function Itemreward(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Itemreward itemId.
         * @member {string} itemId
         * @memberof LuckyWheelClaimItemOutput.Itemreward
         * @instance
         */
        Itemreward.prototype.itemId = "";

        /**
         * Itemreward weight.
         * @member {number} weight
         * @memberof LuckyWheelClaimItemOutput.Itemreward
         * @instance
         */
        Itemreward.prototype.weight = 0;

        /**
         * Itemreward quantity.
         * @member {number} quantity
         * @memberof LuckyWheelClaimItemOutput.Itemreward
         * @instance
         */
        Itemreward.prototype.quantity = 0;

        /**
         * Creates a new Itemreward instance using the specified properties.
         * @function create
         * @memberof LuckyWheelClaimItemOutput.Itemreward
         * @static
         * @param {LuckyWheelClaimItemOutput.IItemreward=} [properties] Properties to set
         * @returns {LuckyWheelClaimItemOutput.Itemreward} Itemreward instance
         */
        Itemreward.create = function create(properties) {
            return new Itemreward(properties);
        };

        /**
         * Encodes the specified Itemreward message. Does not implicitly {@link LuckyWheelClaimItemOutput.Itemreward.verify|verify} messages.
         * @function encode
         * @memberof LuckyWheelClaimItemOutput.Itemreward
         * @static
         * @param {LuckyWheelClaimItemOutput.IItemreward} message Itemreward message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Itemreward.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.itemId != null && Object.hasOwnProperty.call(message, "itemId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.itemId);
            if (message.weight != null && Object.hasOwnProperty.call(message, "weight"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.weight);
            if (message.quantity != null && Object.hasOwnProperty.call(message, "quantity"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.quantity);
            return writer;
        };

        /**
         * Encodes the specified Itemreward message, length delimited. Does not implicitly {@link LuckyWheelClaimItemOutput.Itemreward.verify|verify} messages.
         * @function encodeDelimited
         * @memberof LuckyWheelClaimItemOutput.Itemreward
         * @static
         * @param {LuckyWheelClaimItemOutput.IItemreward} message Itemreward message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Itemreward.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Itemreward message from the specified reader or buffer.
         * @function decode
         * @memberof LuckyWheelClaimItemOutput.Itemreward
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {LuckyWheelClaimItemOutput.Itemreward} Itemreward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Itemreward.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LuckyWheelClaimItemOutput.Itemreward();
            while (reader.pos < end) {
                var tag = reader.uint32();
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

        /**
         * Decodes an Itemreward message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof LuckyWheelClaimItemOutput.Itemreward
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {LuckyWheelClaimItemOutput.Itemreward} Itemreward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Itemreward.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Itemreward message.
         * @function verify
         * @memberof LuckyWheelClaimItemOutput.Itemreward
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
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

        /**
         * Creates an Itemreward message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof LuckyWheelClaimItemOutput.Itemreward
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {LuckyWheelClaimItemOutput.Itemreward} Itemreward
         */
        Itemreward.fromObject = function fromObject(object) {
            if (object instanceof $root.LuckyWheelClaimItemOutput.Itemreward)
                return object;
            var message = new $root.LuckyWheelClaimItemOutput.Itemreward();
            if (object.itemId != null)
                message.itemId = String(object.itemId);
            if (object.weight != null)
                message.weight = object.weight >>> 0;
            if (object.quantity != null)
                message.quantity = object.quantity >>> 0;
            return message;
        };

        /**
         * Creates a plain object from an Itemreward message. Also converts values to other types if specified.
         * @function toObject
         * @memberof LuckyWheelClaimItemOutput.Itemreward
         * @static
         * @param {LuckyWheelClaimItemOutput.Itemreward} message Itemreward
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Itemreward.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
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

        /**
         * Converts this Itemreward to JSON.
         * @function toJSON
         * @memberof LuckyWheelClaimItemOutput.Itemreward
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Itemreward.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Itemreward
         * @function getTypeUrl
         * @memberof LuckyWheelClaimItemOutput.Itemreward
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Itemreward.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/LuckyWheelClaimItemOutput.Itemreward";
        };

        return Itemreward;
    })();

    LuckyWheelClaimItemOutput.Inventory = (function() {

        /**
         * Properties of an Inventory.
         * @memberof LuckyWheelClaimItemOutput
         * @interface IInventory
         * @property {string|null} [itemId] Inventory itemId
         * @property {number|null} [amount] Inventory amount
         */

        /**
         * Constructs a new Inventory.
         * @memberof LuckyWheelClaimItemOutput
         * @classdesc Represents an Inventory.
         * @implements IInventory
         * @constructor
         * @param {LuckyWheelClaimItemOutput.IInventory=} [properties] Properties to set
         */
        function Inventory(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Inventory itemId.
         * @member {string} itemId
         * @memberof LuckyWheelClaimItemOutput.Inventory
         * @instance
         */
        Inventory.prototype.itemId = "";

        /**
         * Inventory amount.
         * @member {number} amount
         * @memberof LuckyWheelClaimItemOutput.Inventory
         * @instance
         */
        Inventory.prototype.amount = 0;

        /**
         * Creates a new Inventory instance using the specified properties.
         * @function create
         * @memberof LuckyWheelClaimItemOutput.Inventory
         * @static
         * @param {LuckyWheelClaimItemOutput.IInventory=} [properties] Properties to set
         * @returns {LuckyWheelClaimItemOutput.Inventory} Inventory instance
         */
        Inventory.create = function create(properties) {
            return new Inventory(properties);
        };

        /**
         * Encodes the specified Inventory message. Does not implicitly {@link LuckyWheelClaimItemOutput.Inventory.verify|verify} messages.
         * @function encode
         * @memberof LuckyWheelClaimItemOutput.Inventory
         * @static
         * @param {LuckyWheelClaimItemOutput.IInventory} message Inventory message or plain object to encode
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
         * Encodes the specified Inventory message, length delimited. Does not implicitly {@link LuckyWheelClaimItemOutput.Inventory.verify|verify} messages.
         * @function encodeDelimited
         * @memberof LuckyWheelClaimItemOutput.Inventory
         * @static
         * @param {LuckyWheelClaimItemOutput.IInventory} message Inventory message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Inventory.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Inventory message from the specified reader or buffer.
         * @function decode
         * @memberof LuckyWheelClaimItemOutput.Inventory
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {LuckyWheelClaimItemOutput.Inventory} Inventory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Inventory.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LuckyWheelClaimItemOutput.Inventory();
            while (reader.pos < end) {
                var tag = reader.uint32();
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
         * @memberof LuckyWheelClaimItemOutput.Inventory
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {LuckyWheelClaimItemOutput.Inventory} Inventory
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
         * @memberof LuckyWheelClaimItemOutput.Inventory
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
         * @memberof LuckyWheelClaimItemOutput.Inventory
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {LuckyWheelClaimItemOutput.Inventory} Inventory
         */
        Inventory.fromObject = function fromObject(object) {
            if (object instanceof $root.LuckyWheelClaimItemOutput.Inventory)
                return object;
            var message = new $root.LuckyWheelClaimItemOutput.Inventory();
            if (object.itemId != null)
                message.itemId = String(object.itemId);
            if (object.amount != null)
                message.amount = object.amount >>> 0;
            return message;
        };

        /**
         * Creates a plain object from an Inventory message. Also converts values to other types if specified.
         * @function toObject
         * @memberof LuckyWheelClaimItemOutput.Inventory
         * @static
         * @param {LuckyWheelClaimItemOutput.Inventory} message Inventory
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Inventory.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
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
         * @memberof LuckyWheelClaimItemOutput.Inventory
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Inventory.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Inventory
         * @function getTypeUrl
         * @memberof LuckyWheelClaimItemOutput.Inventory
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Inventory.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/LuckyWheelClaimItemOutput.Inventory";
        };

        return Inventory;
    })();

    LuckyWheelClaimItemOutput._luckywheel = (function() {

        /**
         * Properties of a _luckywheel.
         * @memberof LuckyWheelClaimItemOutput
         * @interface I_luckywheel
         * @property {string|null} [lastClaim] _luckywheel lastClaim
         * @property {number|null} [dailySpins] _luckywheel dailySpins
         */

        /**
         * Constructs a new _luckywheel.
         * @memberof LuckyWheelClaimItemOutput
         * @classdesc Represents a _luckywheel.
         * @implements I_luckywheel
         * @constructor
         * @param {LuckyWheelClaimItemOutput.I_luckywheel=} [properties] Properties to set
         */
        function _luckywheel(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * _luckywheel lastClaim.
         * @member {string} lastClaim
         * @memberof LuckyWheelClaimItemOutput._luckywheel
         * @instance
         */
        _luckywheel.prototype.lastClaim = "";

        /**
         * _luckywheel dailySpins.
         * @member {number} dailySpins
         * @memberof LuckyWheelClaimItemOutput._luckywheel
         * @instance
         */
        _luckywheel.prototype.dailySpins = 0;

        /**
         * Creates a new _luckywheel instance using the specified properties.
         * @function create
         * @memberof LuckyWheelClaimItemOutput._luckywheel
         * @static
         * @param {LuckyWheelClaimItemOutput.I_luckywheel=} [properties] Properties to set
         * @returns {LuckyWheelClaimItemOutput._luckywheel} _luckywheel instance
         */
        _luckywheel.create = function create(properties) {
            return new _luckywheel(properties);
        };

        /**
         * Encodes the specified _luckywheel message. Does not implicitly {@link LuckyWheelClaimItemOutput._luckywheel.verify|verify} messages.
         * @function encode
         * @memberof LuckyWheelClaimItemOutput._luckywheel
         * @static
         * @param {LuckyWheelClaimItemOutput.I_luckywheel} message _luckywheel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        _luckywheel.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.lastClaim != null && Object.hasOwnProperty.call(message, "lastClaim"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.lastClaim);
            if (message.dailySpins != null && Object.hasOwnProperty.call(message, "dailySpins"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.dailySpins);
            return writer;
        };

        /**
         * Encodes the specified _luckywheel message, length delimited. Does not implicitly {@link LuckyWheelClaimItemOutput._luckywheel.verify|verify} messages.
         * @function encodeDelimited
         * @memberof LuckyWheelClaimItemOutput._luckywheel
         * @static
         * @param {LuckyWheelClaimItemOutput.I_luckywheel} message _luckywheel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        _luckywheel.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a _luckywheel message from the specified reader or buffer.
         * @function decode
         * @memberof LuckyWheelClaimItemOutput._luckywheel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {LuckyWheelClaimItemOutput._luckywheel} _luckywheel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        _luckywheel.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LuckyWheelClaimItemOutput._luckywheel();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.lastClaim = reader.string();
                        break;
                    }
                case 2: {
                        message.dailySpins = reader.uint32();
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
         * Decodes a _luckywheel message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof LuckyWheelClaimItemOutput._luckywheel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {LuckyWheelClaimItemOutput._luckywheel} _luckywheel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        _luckywheel.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a _luckywheel message.
         * @function verify
         * @memberof LuckyWheelClaimItemOutput._luckywheel
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        _luckywheel.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.lastClaim != null && message.hasOwnProperty("lastClaim"))
                if (!$util.isString(message.lastClaim))
                    return "lastClaim: string expected";
            if (message.dailySpins != null && message.hasOwnProperty("dailySpins"))
                if (!$util.isInteger(message.dailySpins))
                    return "dailySpins: integer expected";
            return null;
        };

        /**
         * Creates a _luckywheel message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof LuckyWheelClaimItemOutput._luckywheel
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {LuckyWheelClaimItemOutput._luckywheel} _luckywheel
         */
        _luckywheel.fromObject = function fromObject(object) {
            if (object instanceof $root.LuckyWheelClaimItemOutput._luckywheel)
                return object;
            var message = new $root.LuckyWheelClaimItemOutput._luckywheel();
            if (object.lastClaim != null)
                message.lastClaim = String(object.lastClaim);
            if (object.dailySpins != null)
                message.dailySpins = object.dailySpins >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a _luckywheel message. Also converts values to other types if specified.
         * @function toObject
         * @memberof LuckyWheelClaimItemOutput._luckywheel
         * @static
         * @param {LuckyWheelClaimItemOutput._luckywheel} message _luckywheel
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        _luckywheel.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.lastClaim = "";
                object.dailySpins = 0;
            }
            if (message.lastClaim != null && message.hasOwnProperty("lastClaim"))
                object.lastClaim = message.lastClaim;
            if (message.dailySpins != null && message.hasOwnProperty("dailySpins"))
                object.dailySpins = message.dailySpins;
            return object;
        };

        /**
         * Converts this _luckywheel to JSON.
         * @function toJSON
         * @memberof LuckyWheelClaimItemOutput._luckywheel
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        _luckywheel.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for _luckywheel
         * @function getTypeUrl
         * @memberof LuckyWheelClaimItemOutput._luckywheel
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        _luckywheel.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/LuckyWheelClaimItemOutput._luckywheel";
        };

        return _luckywheel;
    })();

    return LuckyWheelClaimItemOutput;
})();

$root.Inbox = (function() {

    /**
     * Constructs a new Inbox service.
     * @exports Inbox
     * @classdesc Represents an Inbox
     * @extends $protobuf.rpc.Service
     * @constructor
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     */
    function Inbox(rpcImpl, requestDelimited, responseDelimited) {
        $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
    }

    (Inbox.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Inbox;

    /**
     * Creates new Inbox service using the specified rpc implementation.
     * @function create
     * @memberof Inbox
     * @static
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     * @returns {Inbox} RPC service. Useful where requests and/or responses are streamed.
     */
    Inbox.create = function create(rpcImpl, requestDelimited, responseDelimited) {
        return new this(rpcImpl, requestDelimited, responseDelimited);
    };

    /**
     * Callback as used by {@link Inbox#getInfo}.
     * @memberof Inbox
     * @typedef GetInfoCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {InboxList} [response] InboxList
     */

    /**
     * Calls GetInfo.
     * @function getInfo
     * @memberof Inbox
     * @instance
     * @param {IEmpty} request Empty message or plain object
     * @param {Inbox.GetInfoCallback} callback Node-style callback called with the error, if any, and InboxList
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Inbox.prototype.getInfo = function getInfo(request, callback) {
        return this.rpcCall(getInfo, $root.Empty, $root.InboxList, request, callback);
    }, "name", { value: "GetInfo" });

    /**
     * Calls GetInfo.
     * @function getInfo
     * @memberof Inbox
     * @instance
     * @param {IEmpty} request Empty message or plain object
     * @returns {Promise<InboxList>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link Inbox#claimItem}.
     * @memberof Inbox
     * @typedef ClaimItemCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {InboxClaimOutput} [response] InboxClaimOutput
     */

    /**
     * Calls ClaimItem.
     * @function claimItem
     * @memberof Inbox
     * @instance
     * @param {IInboxClaimInput} request InboxClaimInput message or plain object
     * @param {Inbox.ClaimItemCallback} callback Node-style callback called with the error, if any, and InboxClaimOutput
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Inbox.prototype.claimItem = function claimItem(request, callback) {
        return this.rpcCall(claimItem, $root.InboxClaimInput, $root.InboxClaimOutput, request, callback);
    }, "name", { value: "ClaimItem" });

    /**
     * Calls ClaimItem.
     * @function claimItem
     * @memberof Inbox
     * @instance
     * @param {IInboxClaimInput} request InboxClaimInput message or plain object
     * @returns {Promise<InboxClaimOutput>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link Inbox#markDeleteItem}.
     * @memberof Inbox
     * @typedef MarkDeleteItemCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {InboxDeleteOutput} [response] InboxDeleteOutput
     */

    /**
     * Calls MarkDeleteItem.
     * @function markDeleteItem
     * @memberof Inbox
     * @instance
     * @param {IInboxDeleteInput} request InboxDeleteInput message or plain object
     * @param {Inbox.MarkDeleteItemCallback} callback Node-style callback called with the error, if any, and InboxDeleteOutput
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Inbox.prototype.markDeleteItem = function markDeleteItem(request, callback) {
        return this.rpcCall(markDeleteItem, $root.InboxDeleteInput, $root.InboxDeleteOutput, request, callback);
    }, "name", { value: "MarkDeleteItem" });

    /**
     * Calls MarkDeleteItem.
     * @function markDeleteItem
     * @memberof Inbox
     * @instance
     * @param {IInboxDeleteInput} request InboxDeleteInput message or plain object
     * @returns {Promise<InboxDeleteOutput>} Promise
     * @variation 2
     */

    return Inbox;
})();

$root.InboxList = (function() {

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
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
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
            for (var i = 0; i < message.items.length; ++i)
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
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.InboxList();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
            for (var i = 0; i < message.items.length; ++i) {
                var error = $root.InboxList.Items.verify(message.items[i]);
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
        var message = new $root.InboxList();
        if (object.items) {
            if (!Array.isArray(object.items))
                throw TypeError(".InboxList.items: array expected");
            message.items = [];
            for (var i = 0; i < object.items.length; ++i) {
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
        var object = {};
        if (options.arrays || options.defaults)
            object.items = [];
        if (message.items && message.items.length) {
            object.items = [];
            for (var j = 0; j < message.items.length; ++j)
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
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
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
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.InboxList.Conditions();
            while (reader.pos < end) {
                var tag = reader.uint32();
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
            var message = new $root.InboxList.Conditions();
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
            var object = {};
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
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
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
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.InboxList.Gifts();
            while (reader.pos < end) {
                var tag = reader.uint32();
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
            var message = new $root.InboxList.Gifts();
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
            var object = {};
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
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
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
                for (var i = 0; i < message.conditions.length; ++i)
                    $root.InboxList.Conditions.encode(message.conditions[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.gifts != null && message.gifts.length)
                for (var i = 0; i < message.gifts.length; ++i)
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
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.InboxList.Items();
            while (reader.pos < end) {
                var tag = reader.uint32();
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
                for (var i = 0; i < message.conditions.length; ++i) {
                    var error = $root.InboxList.Conditions.verify(message.conditions[i]);
                    if (error)
                        return "conditions." + error;
                }
            }
            if (message.gifts != null && message.hasOwnProperty("gifts")) {
                if (!Array.isArray(message.gifts))
                    return "gifts: array expected";
                for (var i = 0; i < message.gifts.length; ++i) {
                    var error = $root.InboxList.Gifts.verify(message.gifts[i]);
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
            var message = new $root.InboxList.Items();
            if (object.content != null)
                message.content = String(object.content);
            if (object.conditions) {
                if (!Array.isArray(object.conditions))
                    throw TypeError(".InboxList.Items.conditions: array expected");
                message.conditions = [];
                for (var i = 0; i < object.conditions.length; ++i) {
                    if (typeof object.conditions[i] !== "object")
                        throw TypeError(".InboxList.Items.conditions: object expected");
                    message.conditions[i] = $root.InboxList.Conditions.fromObject(object.conditions[i]);
                }
            }
            if (object.gifts) {
                if (!Array.isArray(object.gifts))
                    throw TypeError(".InboxList.Items.gifts: array expected");
                message.gifts = [];
                for (var i = 0; i < object.gifts.length; ++i) {
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
            var object = {};
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
                for (var j = 0; j < message.conditions.length; ++j)
                    object.conditions[j] = $root.InboxList.Conditions.toObject(message.conditions[j], options);
            }
            if (message.gifts && message.gifts.length) {
                object.gifts = [];
                for (var j = 0; j < message.gifts.length; ++j)
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

$root.InboxClaimInput = (function() {

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
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
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
            for (var i = 0; i < message.inboxList.length; ++i)
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
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.InboxClaimInput();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
            for (var i = 0; i < message.inboxList.length; ++i)
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
        var message = new $root.InboxClaimInput();
        if (object.inboxList) {
            if (!Array.isArray(object.inboxList))
                throw TypeError(".InboxClaimInput.inboxList: array expected");
            message.inboxList = [];
            for (var i = 0; i < object.inboxList.length; ++i)
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
        var object = {};
        if (options.arrays || options.defaults)
            object.inboxList = [];
        if (message.inboxList && message.inboxList.length) {
            object.inboxList = [];
            for (var j = 0; j < message.inboxList.length; ++j)
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

$root.InboxClaimOutput = (function() {

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
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
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
            for (var i = 0; i < message.inventory.length; ++i)
                $root.InboxClaimOutput.Inventory.encode(message.inventory[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.inboxList != null && message.inboxList.length)
            for (var i = 0; i < message.inboxList.length; ++i)
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
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.InboxClaimOutput();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
            for (var i = 0; i < message.inventory.length; ++i) {
                var error = $root.InboxClaimOutput.Inventory.verify(message.inventory[i]);
                if (error)
                    return "inventory." + error;
            }
        }
        if (message.inboxList != null && message.hasOwnProperty("inboxList")) {
            if (!Array.isArray(message.inboxList))
                return "inboxList: array expected";
            for (var i = 0; i < message.inboxList.length; ++i)
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
        var message = new $root.InboxClaimOutput();
        if (object.inventory) {
            if (!Array.isArray(object.inventory))
                throw TypeError(".InboxClaimOutput.inventory: array expected");
            message.inventory = [];
            for (var i = 0; i < object.inventory.length; ++i) {
                if (typeof object.inventory[i] !== "object")
                    throw TypeError(".InboxClaimOutput.inventory: object expected");
                message.inventory[i] = $root.InboxClaimOutput.Inventory.fromObject(object.inventory[i]);
            }
        }
        if (object.inboxList) {
            if (!Array.isArray(object.inboxList))
                throw TypeError(".InboxClaimOutput.inboxList: array expected");
            message.inboxList = [];
            for (var i = 0; i < object.inboxList.length; ++i)
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
        var object = {};
        if (options.arrays || options.defaults) {
            object.inventory = [];
            object.inboxList = [];
        }
        if (message.inventory && message.inventory.length) {
            object.inventory = [];
            for (var j = 0; j < message.inventory.length; ++j)
                object.inventory[j] = $root.InboxClaimOutput.Inventory.toObject(message.inventory[j], options);
        }
        if (message.inboxList && message.inboxList.length) {
            object.inboxList = [];
            for (var j = 0; j < message.inboxList.length; ++j)
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
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
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
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.InboxClaimOutput.Inventory();
            while (reader.pos < end) {
                var tag = reader.uint32();
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
            var message = new $root.InboxClaimOutput.Inventory();
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
            var object = {};
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

$root.InboxDeleteInput = (function() {

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
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
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
            for (var i = 0; i < message.inboxList.length; ++i)
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
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.InboxDeleteInput();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
            for (var i = 0; i < message.inboxList.length; ++i)
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
        var message = new $root.InboxDeleteInput();
        if (object.inboxList) {
            if (!Array.isArray(object.inboxList))
                throw TypeError(".InboxDeleteInput.inboxList: array expected");
            message.inboxList = [];
            for (var i = 0; i < object.inboxList.length; ++i)
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
        var object = {};
        if (options.arrays || options.defaults)
            object.inboxList = [];
        if (message.inboxList && message.inboxList.length) {
            object.inboxList = [];
            for (var j = 0; j < message.inboxList.length; ++j)
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

$root.InboxDeleteOutput = (function() {

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
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
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
            for (var i = 0; i < message.inboxList.length; ++i)
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
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.InboxDeleteOutput();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
            for (var i = 0; i < message.inboxList.length; ++i)
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
        var message = new $root.InboxDeleteOutput();
        if (object.inboxList) {
            if (!Array.isArray(object.inboxList))
                throw TypeError(".InboxDeleteOutput.inboxList: array expected");
            message.inboxList = [];
            for (var i = 0; i < object.inboxList.length; ++i)
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
        var object = {};
        if (options.arrays || options.defaults)
            object.inboxList = [];
        if (message.inboxList && message.inboxList.length) {
            object.inboxList = [];
            for (var j = 0; j < message.inboxList.length; ++j)
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

$root.Leaderboard = (function() {

    /**
     * Constructs a new Leaderboard service.
     * @exports Leaderboard
     * @classdesc Represents a Leaderboard
     * @extends $protobuf.rpc.Service
     * @constructor
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     */
    function Leaderboard(rpcImpl, requestDelimited, responseDelimited) {
        $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
    }

    (Leaderboard.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Leaderboard;

    /**
     * Creates new Leaderboard service using the specified rpc implementation.
     * @function create
     * @memberof Leaderboard
     * @static
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     * @returns {Leaderboard} RPC service. Useful where requests and/or responses are streamed.
     */
    Leaderboard.create = function create(rpcImpl, requestDelimited, responseDelimited) {
        return new this(rpcImpl, requestDelimited, responseDelimited);
    };

    /**
     * Callback as used by {@link Leaderboard#getTopScore}.
     * @memberof Leaderboard
     * @typedef GetTopScoreCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {TopLeaderboard} [response] TopLeaderboard
     */

    /**
     * Calls GetTopScore.
     * @function getTopScore
     * @memberof Leaderboard
     * @instance
     * @param {IGetTopLeaderboardInput} request GetTopLeaderboardInput message or plain object
     * @param {Leaderboard.GetTopScoreCallback} callback Node-style callback called with the error, if any, and TopLeaderboard
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Leaderboard.prototype.getTopScore = function getTopScore(request, callback) {
        return this.rpcCall(getTopScore, $root.GetTopLeaderboardInput, $root.TopLeaderboard, request, callback);
    }, "name", { value: "GetTopScore" });

    /**
     * Calls GetTopScore.
     * @function getTopScore
     * @memberof Leaderboard
     * @instance
     * @param {IGetTopLeaderboardInput} request GetTopLeaderboardInput message or plain object
     * @returns {Promise<TopLeaderboard>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link Leaderboard#getMyRank}.
     * @memberof Leaderboard
     * @typedef GetMyRankCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {GetMyRankLeaderboardOutput} [response] GetMyRankLeaderboardOutput
     */

    /**
     * Calls GetMyRank.
     * @function getMyRank
     * @memberof Leaderboard
     * @instance
     * @param {IGetMyRankLeaderboardInput} request GetMyRankLeaderboardInput message or plain object
     * @param {Leaderboard.GetMyRankCallback} callback Node-style callback called with the error, if any, and GetMyRankLeaderboardOutput
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Leaderboard.prototype.getMyRank = function getMyRank(request, callback) {
        return this.rpcCall(getMyRank, $root.GetMyRankLeaderboardInput, $root.GetMyRankLeaderboardOutput, request, callback);
    }, "name", { value: "GetMyRank" });

    /**
     * Calls GetMyRank.
     * @function getMyRank
     * @memberof Leaderboard
     * @instance
     * @param {IGetMyRankLeaderboardInput} request GetMyRankLeaderboardInput message or plain object
     * @returns {Promise<GetMyRankLeaderboardOutput>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link Leaderboard#updateScore}.
     * @memberof Leaderboard
     * @typedef UpdateScoreCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {UpdateScoreLeaderboardOutput} [response] UpdateScoreLeaderboardOutput
     */

    /**
     * Calls UpdateScore.
     * @function updateScore
     * @memberof Leaderboard
     * @instance
     * @param {IUpdateScoreLeaderboardInput} request UpdateScoreLeaderboardInput message or plain object
     * @param {Leaderboard.UpdateScoreCallback} callback Node-style callback called with the error, if any, and UpdateScoreLeaderboardOutput
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Leaderboard.prototype.updateScore = function updateScore(request, callback) {
        return this.rpcCall(updateScore, $root.UpdateScoreLeaderboardInput, $root.UpdateScoreLeaderboardOutput, request, callback);
    }, "name", { value: "UpdateScore" });

    /**
     * Calls UpdateScore.
     * @function updateScore
     * @memberof Leaderboard
     * @instance
     * @param {IUpdateScoreLeaderboardInput} request UpdateScoreLeaderboardInput message or plain object
     * @returns {Promise<UpdateScoreLeaderboardOutput>} Promise
     * @variation 2
     */

    return Leaderboard;
})();

$root.GetTopLeaderboardInput = (function() {

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
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetTopLeaderboardInput name.
     * @member {string} name
     * @memberof GetTopLeaderboardInput
     * @instance
     */
    GetTopLeaderboardInput.prototype.name = "";

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
     * @member {number} count
     * @memberof GetTopLeaderboardInput
     * @instance
     */
    GetTopLeaderboardInput.prototype.count = 0;

    /**
     * GetTopLeaderboardInput reverseOrder.
     * @member {boolean} reverseOrder
     * @memberof GetTopLeaderboardInput
     * @instance
     */
    GetTopLeaderboardInput.prototype.reverseOrder = false;

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
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetTopLeaderboardInput();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.offset != null && message.hasOwnProperty("offset"))
            if (!$util.isInteger(message.offset))
                return "offset: integer expected";
        if (message.country != null && message.hasOwnProperty("country"))
            if (!$util.isString(message.country))
                return "country: string expected";
        if (message.count != null && message.hasOwnProperty("count"))
            if (!$util.isInteger(message.count))
                return "count: integer expected";
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
        var message = new $root.GetTopLeaderboardInput();
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
        var object = {};
        if (options.defaults) {
            object.name = "";
            object.offset = 0;
            object.country = "";
            object.count = 0;
            object.reverseOrder = false;
        }
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.offset != null && message.hasOwnProperty("offset"))
            object.offset = message.offset;
        if (message.country != null && message.hasOwnProperty("country"))
            object.country = message.country;
        if (message.count != null && message.hasOwnProperty("count"))
            object.count = message.count;
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

$root.TopLeaderboard = (function() {

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
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
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
            for (var i = 0; i < message.items.length; ++i)
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
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TopLeaderboard();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
            for (var i = 0; i < message.items.length; ++i) {
                var error = $root.TopLeaderboard.Items.verify(message.items[i]);
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
        var message = new $root.TopLeaderboard();
        if (object.items) {
            if (!Array.isArray(object.items))
                throw TypeError(".TopLeaderboard.items: array expected");
            message.items = [];
            for (var i = 0; i < object.items.length; ++i) {
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
        var object = {};
        if (options.arrays || options.defaults)
            object.items = [];
        if (message.items && message.items.length) {
            object.items = [];
            for (var j = 0; j < message.items.length; ++j)
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
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
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
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TopLeaderboard.Items();
            while (reader.pos < end) {
                var tag = reader.uint32();
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
            var message = new $root.TopLeaderboard.Items();
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
            var object = {};
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

$root.GetMyRankLeaderboardInput = (function() {

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
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
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
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetMyRankLeaderboardInput();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
        var message = new $root.GetMyRankLeaderboardInput();
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
        var object = {};
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

$root.GetMyRankLeaderboardOutput = (function() {

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
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
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
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetMyRankLeaderboardOutput();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
        var message = new $root.GetMyRankLeaderboardOutput();
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
        var object = {};
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

$root.UpdateScoreLeaderboardInput = (function() {

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
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
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
            for (var i = 0; i < message.items.length; ++i)
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
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UpdateScoreLeaderboardInput();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
            for (var i = 0; i < message.items.length; ++i) {
                var error = $root.UpdateScoreLeaderboardInput.Items.verify(message.items[i]);
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
        var message = new $root.UpdateScoreLeaderboardInput();
        if (object.items) {
            if (!Array.isArray(object.items))
                throw TypeError(".UpdateScoreLeaderboardInput.items: array expected");
            message.items = [];
            for (var i = 0; i < object.items.length; ++i) {
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
        var object = {};
        if (options.arrays || options.defaults)
            object.items = [];
        if (message.items && message.items.length) {
            object.items = [];
            for (var j = 0; j < message.items.length; ++j)
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
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
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
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UpdateScoreLeaderboardInput.Items();
            while (reader.pos < end) {
                var tag = reader.uint32();
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
            var message = new $root.UpdateScoreLeaderboardInput.Items();
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
            var object = {};
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

$root.UpdateScoreLeaderboardOutput = (function() {

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
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
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
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UpdateScoreLeaderboardOutput();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
        var message = new $root.UpdateScoreLeaderboardOutput();
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
        var object = {};
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

$root.Player = (function() {

    /**
     * Constructs a new Player service.
     * @exports Player
     * @classdesc Represents a Player
     * @extends $protobuf.rpc.Service
     * @constructor
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     */
    function Player(rpcImpl, requestDelimited, responseDelimited) {
        $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
    }

    (Player.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Player;

    /**
     * Creates new Player service using the specified rpc implementation.
     * @function create
     * @memberof Player
     * @static
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     * @returns {Player} RPC service. Useful where requests and/or responses are streamed.
     */
    Player.create = function create(rpcImpl, requestDelimited, responseDelimited) {
        return new this(rpcImpl, requestDelimited, responseDelimited);
    };

    /**
     * Callback as used by {@link Player#getProfile}.
     * @memberof Player
     * @typedef GetProfileCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {PlayerProfileRes} [response] PlayerProfileRes
     */

    /**
     * Calls GetProfile.
     * @function getProfile
     * @memberof Player
     * @instance
     * @param {IEmpty} request Empty message or plain object
     * @param {Player.GetProfileCallback} callback Node-style callback called with the error, if any, and PlayerProfileRes
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Player.prototype.getProfile = function getProfile(request, callback) {
        return this.rpcCall(getProfile, $root.Empty, $root.PlayerProfileRes, request, callback);
    }, "name", { value: "GetProfile" });

    /**
     * Calls GetProfile.
     * @function getProfile
     * @memberof Player
     * @instance
     * @param {IEmpty} request Empty message or plain object
     * @returns {Promise<PlayerProfileRes>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link Player#updateProfile}.
     * @memberof Player
     * @typedef UpdateProfileCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {PlayerProfileRes} [response] PlayerProfileRes
     */

    /**
     * Calls UpdateProfile.
     * @function updateProfile
     * @memberof Player
     * @instance
     * @param {IPlayerProfileReq} request PlayerProfileReq message or plain object
     * @param {Player.UpdateProfileCallback} callback Node-style callback called with the error, if any, and PlayerProfileRes
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Player.prototype.updateProfile = function updateProfile(request, callback) {
        return this.rpcCall(updateProfile, $root.PlayerProfileReq, $root.PlayerProfileRes, request, callback);
    }, "name", { value: "UpdateProfile" });

    /**
     * Calls UpdateProfile.
     * @function updateProfile
     * @memberof Player
     * @instance
     * @param {IPlayerProfileReq} request PlayerProfileReq message or plain object
     * @returns {Promise<PlayerProfileRes>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link Player#getData}.
     * @memberof Player
     * @typedef GetDataCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {PlayerDataRes} [response] PlayerDataRes
     */

    /**
     * Calls GetData.
     * @function getData
     * @memberof Player
     * @instance
     * @param {IEmpty} request Empty message or plain object
     * @param {Player.GetDataCallback} callback Node-style callback called with the error, if any, and PlayerDataRes
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Player.prototype.getData = function getData(request, callback) {
        return this.rpcCall(getData, $root.Empty, $root.PlayerDataRes, request, callback);
    }, "name", { value: "GetData" });

    /**
     * Calls GetData.
     * @function getData
     * @memberof Player
     * @instance
     * @param {IEmpty} request Empty message or plain object
     * @returns {Promise<PlayerDataRes>} Promise
     * @variation 2
     */

    return Player;
})();

$root.PlayerProfileRes = (function() {

    /**
     * Properties of a PlayerProfileRes.
     * @exports IPlayerProfileRes
     * @interface IPlayerProfileRes
     * @property {string|null} [playerName] PlayerProfileRes playerName
     * @property {number|Long|null} [created] PlayerProfileRes created
     * @property {string|null} [playerId] PlayerProfileRes playerId
     * @property {string|null} [gameId] PlayerProfileRes gameId
     * @property {string|null} [country] PlayerProfileRes country
     * @property {number|Long|null} [lastLogin] PlayerProfileRes lastLogin
     * @property {boolean|null} [ban] PlayerProfileRes ban
     */

    /**
     * Constructs a new PlayerProfileRes.
     * @exports PlayerProfileRes
     * @classdesc Represents a PlayerProfileRes.
     * @implements IPlayerProfileRes
     * @constructor
     * @param {IPlayerProfileRes=} [properties] Properties to set
     */
    function PlayerProfileRes(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PlayerProfileRes playerName.
     * @member {string} playerName
     * @memberof PlayerProfileRes
     * @instance
     */
    PlayerProfileRes.prototype.playerName = "";

    /**
     * PlayerProfileRes created.
     * @member {number|Long} created
     * @memberof PlayerProfileRes
     * @instance
     */
    PlayerProfileRes.prototype.created = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * PlayerProfileRes playerId.
     * @member {string} playerId
     * @memberof PlayerProfileRes
     * @instance
     */
    PlayerProfileRes.prototype.playerId = "";

    /**
     * PlayerProfileRes gameId.
     * @member {string} gameId
     * @memberof PlayerProfileRes
     * @instance
     */
    PlayerProfileRes.prototype.gameId = "";

    /**
     * PlayerProfileRes country.
     * @member {string} country
     * @memberof PlayerProfileRes
     * @instance
     */
    PlayerProfileRes.prototype.country = "";

    /**
     * PlayerProfileRes lastLogin.
     * @member {number|Long} lastLogin
     * @memberof PlayerProfileRes
     * @instance
     */
    PlayerProfileRes.prototype.lastLogin = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * PlayerProfileRes ban.
     * @member {boolean} ban
     * @memberof PlayerProfileRes
     * @instance
     */
    PlayerProfileRes.prototype.ban = false;

    /**
     * Creates a new PlayerProfileRes instance using the specified properties.
     * @function create
     * @memberof PlayerProfileRes
     * @static
     * @param {IPlayerProfileRes=} [properties] Properties to set
     * @returns {PlayerProfileRes} PlayerProfileRes instance
     */
    PlayerProfileRes.create = function create(properties) {
        return new PlayerProfileRes(properties);
    };

    /**
     * Encodes the specified PlayerProfileRes message. Does not implicitly {@link PlayerProfileRes.verify|verify} messages.
     * @function encode
     * @memberof PlayerProfileRes
     * @static
     * @param {IPlayerProfileRes} message PlayerProfileRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PlayerProfileRes.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.playerName != null && Object.hasOwnProperty.call(message, "playerName"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.playerName);
        if (message.created != null && Object.hasOwnProperty.call(message, "created"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.created);
        if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.playerId);
        if (message.gameId != null && Object.hasOwnProperty.call(message, "gameId"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.gameId);
        if (message.country != null && Object.hasOwnProperty.call(message, "country"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.country);
        if (message.lastLogin != null && Object.hasOwnProperty.call(message, "lastLogin"))
            writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.lastLogin);
        if (message.ban != null && Object.hasOwnProperty.call(message, "ban"))
            writer.uint32(/* id 7, wireType 0 =*/56).bool(message.ban);
        return writer;
    };

    /**
     * Encodes the specified PlayerProfileRes message, length delimited. Does not implicitly {@link PlayerProfileRes.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PlayerProfileRes
     * @static
     * @param {IPlayerProfileRes} message PlayerProfileRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PlayerProfileRes.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PlayerProfileRes message from the specified reader or buffer.
     * @function decode
     * @memberof PlayerProfileRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PlayerProfileRes} PlayerProfileRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PlayerProfileRes.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PlayerProfileRes();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.playerName = reader.string();
                    break;
                }
            case 2: {
                    message.created = reader.uint64();
                    break;
                }
            case 3: {
                    message.playerId = reader.string();
                    break;
                }
            case 4: {
                    message.gameId = reader.string();
                    break;
                }
            case 5: {
                    message.country = reader.string();
                    break;
                }
            case 6: {
                    message.lastLogin = reader.uint64();
                    break;
                }
            case 7: {
                    message.ban = reader.bool();
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
     * Decodes a PlayerProfileRes message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PlayerProfileRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PlayerProfileRes} PlayerProfileRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PlayerProfileRes.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PlayerProfileRes message.
     * @function verify
     * @memberof PlayerProfileRes
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PlayerProfileRes.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.playerName != null && message.hasOwnProperty("playerName"))
            if (!$util.isString(message.playerName))
                return "playerName: string expected";
        if (message.created != null && message.hasOwnProperty("created"))
            if (!$util.isInteger(message.created) && !(message.created && $util.isInteger(message.created.low) && $util.isInteger(message.created.high)))
                return "created: integer|Long expected";
        if (message.playerId != null && message.hasOwnProperty("playerId"))
            if (!$util.isString(message.playerId))
                return "playerId: string expected";
        if (message.gameId != null && message.hasOwnProperty("gameId"))
            if (!$util.isString(message.gameId))
                return "gameId: string expected";
        if (message.country != null && message.hasOwnProperty("country"))
            if (!$util.isString(message.country))
                return "country: string expected";
        if (message.lastLogin != null && message.hasOwnProperty("lastLogin"))
            if (!$util.isInteger(message.lastLogin) && !(message.lastLogin && $util.isInteger(message.lastLogin.low) && $util.isInteger(message.lastLogin.high)))
                return "lastLogin: integer|Long expected";
        if (message.ban != null && message.hasOwnProperty("ban"))
            if (typeof message.ban !== "boolean")
                return "ban: boolean expected";
        return null;
    };

    /**
     * Creates a PlayerProfileRes message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PlayerProfileRes
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PlayerProfileRes} PlayerProfileRes
     */
    PlayerProfileRes.fromObject = function fromObject(object) {
        if (object instanceof $root.PlayerProfileRes)
            return object;
        var message = new $root.PlayerProfileRes();
        if (object.playerName != null)
            message.playerName = String(object.playerName);
        if (object.created != null)
            if ($util.Long)
                (message.created = $util.Long.fromValue(object.created)).unsigned = true;
            else if (typeof object.created === "string")
                message.created = parseInt(object.created, 10);
            else if (typeof object.created === "number")
                message.created = object.created;
            else if (typeof object.created === "object")
                message.created = new $util.LongBits(object.created.low >>> 0, object.created.high >>> 0).toNumber(true);
        if (object.playerId != null)
            message.playerId = String(object.playerId);
        if (object.gameId != null)
            message.gameId = String(object.gameId);
        if (object.country != null)
            message.country = String(object.country);
        if (object.lastLogin != null)
            if ($util.Long)
                (message.lastLogin = $util.Long.fromValue(object.lastLogin)).unsigned = true;
            else if (typeof object.lastLogin === "string")
                message.lastLogin = parseInt(object.lastLogin, 10);
            else if (typeof object.lastLogin === "number")
                message.lastLogin = object.lastLogin;
            else if (typeof object.lastLogin === "object")
                message.lastLogin = new $util.LongBits(object.lastLogin.low >>> 0, object.lastLogin.high >>> 0).toNumber(true);
        if (object.ban != null)
            message.ban = Boolean(object.ban);
        return message;
    };

    /**
     * Creates a plain object from a PlayerProfileRes message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PlayerProfileRes
     * @static
     * @param {PlayerProfileRes} message PlayerProfileRes
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PlayerProfileRes.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.playerName = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.created = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.created = options.longs === String ? "0" : 0;
            object.playerId = "";
            object.gameId = "";
            object.country = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.lastLogin = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.lastLogin = options.longs === String ? "0" : 0;
            object.ban = false;
        }
        if (message.playerName != null && message.hasOwnProperty("playerName"))
            object.playerName = message.playerName;
        if (message.created != null && message.hasOwnProperty("created"))
            if (typeof message.created === "number")
                object.created = options.longs === String ? String(message.created) : message.created;
            else
                object.created = options.longs === String ? $util.Long.prototype.toString.call(message.created) : options.longs === Number ? new $util.LongBits(message.created.low >>> 0, message.created.high >>> 0).toNumber(true) : message.created;
        if (message.playerId != null && message.hasOwnProperty("playerId"))
            object.playerId = message.playerId;
        if (message.gameId != null && message.hasOwnProperty("gameId"))
            object.gameId = message.gameId;
        if (message.country != null && message.hasOwnProperty("country"))
            object.country = message.country;
        if (message.lastLogin != null && message.hasOwnProperty("lastLogin"))
            if (typeof message.lastLogin === "number")
                object.lastLogin = options.longs === String ? String(message.lastLogin) : message.lastLogin;
            else
                object.lastLogin = options.longs === String ? $util.Long.prototype.toString.call(message.lastLogin) : options.longs === Number ? new $util.LongBits(message.lastLogin.low >>> 0, message.lastLogin.high >>> 0).toNumber(true) : message.lastLogin;
        if (message.ban != null && message.hasOwnProperty("ban"))
            object.ban = message.ban;
        return object;
    };

    /**
     * Converts this PlayerProfileRes to JSON.
     * @function toJSON
     * @memberof PlayerProfileRes
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PlayerProfileRes.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for PlayerProfileRes
     * @function getTypeUrl
     * @memberof PlayerProfileRes
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    PlayerProfileRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/PlayerProfileRes";
    };

    return PlayerProfileRes;
})();

$root.PlayerProfileReq = (function() {

    /**
     * Properties of a PlayerProfileReq.
     * @exports IPlayerProfileReq
     * @interface IPlayerProfileReq
     * @property {string|null} [playerName] PlayerProfileReq playerName
     * @property {string|null} [country] PlayerProfileReq country
     */

    /**
     * Constructs a new PlayerProfileReq.
     * @exports PlayerProfileReq
     * @classdesc Represents a PlayerProfileReq.
     * @implements IPlayerProfileReq
     * @constructor
     * @param {IPlayerProfileReq=} [properties] Properties to set
     */
    function PlayerProfileReq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PlayerProfileReq playerName.
     * @member {string} playerName
     * @memberof PlayerProfileReq
     * @instance
     */
    PlayerProfileReq.prototype.playerName = "";

    /**
     * PlayerProfileReq country.
     * @member {string} country
     * @memberof PlayerProfileReq
     * @instance
     */
    PlayerProfileReq.prototype.country = "";

    /**
     * Creates a new PlayerProfileReq instance using the specified properties.
     * @function create
     * @memberof PlayerProfileReq
     * @static
     * @param {IPlayerProfileReq=} [properties] Properties to set
     * @returns {PlayerProfileReq} PlayerProfileReq instance
     */
    PlayerProfileReq.create = function create(properties) {
        return new PlayerProfileReq(properties);
    };

    /**
     * Encodes the specified PlayerProfileReq message. Does not implicitly {@link PlayerProfileReq.verify|verify} messages.
     * @function encode
     * @memberof PlayerProfileReq
     * @static
     * @param {IPlayerProfileReq} message PlayerProfileReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PlayerProfileReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.playerName != null && Object.hasOwnProperty.call(message, "playerName"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.playerName);
        if (message.country != null && Object.hasOwnProperty.call(message, "country"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.country);
        return writer;
    };

    /**
     * Encodes the specified PlayerProfileReq message, length delimited. Does not implicitly {@link PlayerProfileReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PlayerProfileReq
     * @static
     * @param {IPlayerProfileReq} message PlayerProfileReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PlayerProfileReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PlayerProfileReq message from the specified reader or buffer.
     * @function decode
     * @memberof PlayerProfileReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PlayerProfileReq} PlayerProfileReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PlayerProfileReq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PlayerProfileReq();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.playerName = reader.string();
                    break;
                }
            case 2: {
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
     * Decodes a PlayerProfileReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PlayerProfileReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PlayerProfileReq} PlayerProfileReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PlayerProfileReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PlayerProfileReq message.
     * @function verify
     * @memberof PlayerProfileReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PlayerProfileReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.playerName != null && message.hasOwnProperty("playerName"))
            if (!$util.isString(message.playerName))
                return "playerName: string expected";
        if (message.country != null && message.hasOwnProperty("country"))
            if (!$util.isString(message.country))
                return "country: string expected";
        return null;
    };

    /**
     * Creates a PlayerProfileReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PlayerProfileReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PlayerProfileReq} PlayerProfileReq
     */
    PlayerProfileReq.fromObject = function fromObject(object) {
        if (object instanceof $root.PlayerProfileReq)
            return object;
        var message = new $root.PlayerProfileReq();
        if (object.playerName != null)
            message.playerName = String(object.playerName);
        if (object.country != null)
            message.country = String(object.country);
        return message;
    };

    /**
     * Creates a plain object from a PlayerProfileReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PlayerProfileReq
     * @static
     * @param {PlayerProfileReq} message PlayerProfileReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PlayerProfileReq.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.playerName = "";
            object.country = "";
        }
        if (message.playerName != null && message.hasOwnProperty("playerName"))
            object.playerName = message.playerName;
        if (message.country != null && message.hasOwnProperty("country"))
            object.country = message.country;
        return object;
    };

    /**
     * Converts this PlayerProfileReq to JSON.
     * @function toJSON
     * @memberof PlayerProfileReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PlayerProfileReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for PlayerProfileReq
     * @function getTypeUrl
     * @memberof PlayerProfileReq
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    PlayerProfileReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/PlayerProfileReq";
    };

    return PlayerProfileReq;
})();

$root.PlayerDataRes = (function() {

    /**
     * Properties of a PlayerDataRes.
     * @exports IPlayerDataRes
     * @interface IPlayerDataRes
     * @property {string|null} [customField] PlayerDataRes customField
     * @property {Array.<PlayerDataRes.IInventory>|null} [inventory] PlayerDataRes inventory
     * @property {number|null} [level] PlayerDataRes level
     */

    /**
     * Constructs a new PlayerDataRes.
     * @exports PlayerDataRes
     * @classdesc Represents a PlayerDataRes.
     * @implements IPlayerDataRes
     * @constructor
     * @param {IPlayerDataRes=} [properties] Properties to set
     */
    function PlayerDataRes(properties) {
        this.inventory = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PlayerDataRes customField.
     * @member {string} customField
     * @memberof PlayerDataRes
     * @instance
     */
    PlayerDataRes.prototype.customField = "";

    /**
     * PlayerDataRes inventory.
     * @member {Array.<PlayerDataRes.IInventory>} inventory
     * @memberof PlayerDataRes
     * @instance
     */
    PlayerDataRes.prototype.inventory = $util.emptyArray;

    /**
     * PlayerDataRes level.
     * @member {number} level
     * @memberof PlayerDataRes
     * @instance
     */
    PlayerDataRes.prototype.level = 0;

    /**
     * Creates a new PlayerDataRes instance using the specified properties.
     * @function create
     * @memberof PlayerDataRes
     * @static
     * @param {IPlayerDataRes=} [properties] Properties to set
     * @returns {PlayerDataRes} PlayerDataRes instance
     */
    PlayerDataRes.create = function create(properties) {
        return new PlayerDataRes(properties);
    };

    /**
     * Encodes the specified PlayerDataRes message. Does not implicitly {@link PlayerDataRes.verify|verify} messages.
     * @function encode
     * @memberof PlayerDataRes
     * @static
     * @param {IPlayerDataRes} message PlayerDataRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PlayerDataRes.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.customField != null && Object.hasOwnProperty.call(message, "customField"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.customField);
        if (message.inventory != null && message.inventory.length)
            for (var i = 0; i < message.inventory.length; ++i)
                $root.PlayerDataRes.Inventory.encode(message.inventory[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.level != null && Object.hasOwnProperty.call(message, "level"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.level);
        return writer;
    };

    /**
     * Encodes the specified PlayerDataRes message, length delimited. Does not implicitly {@link PlayerDataRes.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PlayerDataRes
     * @static
     * @param {IPlayerDataRes} message PlayerDataRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PlayerDataRes.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PlayerDataRes message from the specified reader or buffer.
     * @function decode
     * @memberof PlayerDataRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PlayerDataRes} PlayerDataRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PlayerDataRes.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PlayerDataRes();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.customField = reader.string();
                    break;
                }
            case 2: {
                    if (!(message.inventory && message.inventory.length))
                        message.inventory = [];
                    message.inventory.push($root.PlayerDataRes.Inventory.decode(reader, reader.uint32()));
                    break;
                }
            case 3: {
                    message.level = reader.uint32();
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
     * Decodes a PlayerDataRes message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PlayerDataRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PlayerDataRes} PlayerDataRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PlayerDataRes.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PlayerDataRes message.
     * @function verify
     * @memberof PlayerDataRes
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PlayerDataRes.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.customField != null && message.hasOwnProperty("customField"))
            if (!$util.isString(message.customField))
                return "customField: string expected";
        if (message.inventory != null && message.hasOwnProperty("inventory")) {
            if (!Array.isArray(message.inventory))
                return "inventory: array expected";
            for (var i = 0; i < message.inventory.length; ++i) {
                var error = $root.PlayerDataRes.Inventory.verify(message.inventory[i]);
                if (error)
                    return "inventory." + error;
            }
        }
        if (message.level != null && message.hasOwnProperty("level"))
            if (!$util.isInteger(message.level))
                return "level: integer expected";
        return null;
    };

    /**
     * Creates a PlayerDataRes message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PlayerDataRes
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PlayerDataRes} PlayerDataRes
     */
    PlayerDataRes.fromObject = function fromObject(object) {
        if (object instanceof $root.PlayerDataRes)
            return object;
        var message = new $root.PlayerDataRes();
        if (object.customField != null)
            message.customField = String(object.customField);
        if (object.inventory) {
            if (!Array.isArray(object.inventory))
                throw TypeError(".PlayerDataRes.inventory: array expected");
            message.inventory = [];
            for (var i = 0; i < object.inventory.length; ++i) {
                if (typeof object.inventory[i] !== "object")
                    throw TypeError(".PlayerDataRes.inventory: object expected");
                message.inventory[i] = $root.PlayerDataRes.Inventory.fromObject(object.inventory[i]);
            }
        }
        if (object.level != null)
            message.level = object.level >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a PlayerDataRes message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PlayerDataRes
     * @static
     * @param {PlayerDataRes} message PlayerDataRes
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PlayerDataRes.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.inventory = [];
        if (options.defaults) {
            object.customField = "";
            object.level = 0;
        }
        if (message.customField != null && message.hasOwnProperty("customField"))
            object.customField = message.customField;
        if (message.inventory && message.inventory.length) {
            object.inventory = [];
            for (var j = 0; j < message.inventory.length; ++j)
                object.inventory[j] = $root.PlayerDataRes.Inventory.toObject(message.inventory[j], options);
        }
        if (message.level != null && message.hasOwnProperty("level"))
            object.level = message.level;
        return object;
    };

    /**
     * Converts this PlayerDataRes to JSON.
     * @function toJSON
     * @memberof PlayerDataRes
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PlayerDataRes.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for PlayerDataRes
     * @function getTypeUrl
     * @memberof PlayerDataRes
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    PlayerDataRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/PlayerDataRes";
    };

    PlayerDataRes.Inventory = (function() {

        /**
         * Properties of an Inventory.
         * @memberof PlayerDataRes
         * @interface IInventory
         * @property {string|null} [itemId] Inventory itemId
         * @property {number|null} [amount] Inventory amount
         */

        /**
         * Constructs a new Inventory.
         * @memberof PlayerDataRes
         * @classdesc Represents an Inventory.
         * @implements IInventory
         * @constructor
         * @param {PlayerDataRes.IInventory=} [properties] Properties to set
         */
        function Inventory(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Inventory itemId.
         * @member {string} itemId
         * @memberof PlayerDataRes.Inventory
         * @instance
         */
        Inventory.prototype.itemId = "";

        /**
         * Inventory amount.
         * @member {number} amount
         * @memberof PlayerDataRes.Inventory
         * @instance
         */
        Inventory.prototype.amount = 0;

        /**
         * Creates a new Inventory instance using the specified properties.
         * @function create
         * @memberof PlayerDataRes.Inventory
         * @static
         * @param {PlayerDataRes.IInventory=} [properties] Properties to set
         * @returns {PlayerDataRes.Inventory} Inventory instance
         */
        Inventory.create = function create(properties) {
            return new Inventory(properties);
        };

        /**
         * Encodes the specified Inventory message. Does not implicitly {@link PlayerDataRes.Inventory.verify|verify} messages.
         * @function encode
         * @memberof PlayerDataRes.Inventory
         * @static
         * @param {PlayerDataRes.IInventory} message Inventory message or plain object to encode
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
         * Encodes the specified Inventory message, length delimited. Does not implicitly {@link PlayerDataRes.Inventory.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PlayerDataRes.Inventory
         * @static
         * @param {PlayerDataRes.IInventory} message Inventory message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Inventory.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Inventory message from the specified reader or buffer.
         * @function decode
         * @memberof PlayerDataRes.Inventory
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PlayerDataRes.Inventory} Inventory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Inventory.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PlayerDataRes.Inventory();
            while (reader.pos < end) {
                var tag = reader.uint32();
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
         * @memberof PlayerDataRes.Inventory
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PlayerDataRes.Inventory} Inventory
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
         * @memberof PlayerDataRes.Inventory
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
         * @memberof PlayerDataRes.Inventory
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PlayerDataRes.Inventory} Inventory
         */
        Inventory.fromObject = function fromObject(object) {
            if (object instanceof $root.PlayerDataRes.Inventory)
                return object;
            var message = new $root.PlayerDataRes.Inventory();
            if (object.itemId != null)
                message.itemId = String(object.itemId);
            if (object.amount != null)
                message.amount = object.amount >>> 0;
            return message;
        };

        /**
         * Creates a plain object from an Inventory message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PlayerDataRes.Inventory
         * @static
         * @param {PlayerDataRes.Inventory} message Inventory
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Inventory.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
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
         * @memberof PlayerDataRes.Inventory
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Inventory.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Inventory
         * @function getTypeUrl
         * @memberof PlayerDataRes.Inventory
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Inventory.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/PlayerDataRes.Inventory";
        };

        return Inventory;
    })();

    return PlayerDataRes;
})();

module.exports = $root;
