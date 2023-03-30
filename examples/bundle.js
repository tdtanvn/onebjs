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
     * Callback as used by {@link Blueprint#characters}.
     * @memberof Blueprint
     * @typedef charactersCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {CHARACTERS} [response] CHARACTERS
     */

    /**
     * Calls characters.
     * @function characters
     * @memberof Blueprint
     * @instance
     * @param {IEmpty} request Empty message or plain object
     * @param {Blueprint.charactersCallback} callback Node-style callback called with the error, if any, and CHARACTERS
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Blueprint.prototype.characters = function characters(request, callback) {
        return this.rpcCall(characters, $root.Empty, $root.CHARACTERS, request, callback);
    }, "name", { value: "characters" });

    /**
     * Calls characters.
     * @function characters
     * @memberof Blueprint
     * @instance
     * @param {IEmpty} request Empty message or plain object
     * @returns {Promise<CHARACTERS>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link Blueprint#daily_quest}.
     * @memberof Blueprint
     * @typedef daily_questCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {DAILY_QUEST} [response] DAILY_QUEST
     */

    /**
     * Calls daily_quest.
     * @function daily_quest
     * @memberof Blueprint
     * @instance
     * @param {IEmpty} request Empty message or plain object
     * @param {Blueprint.daily_questCallback} callback Node-style callback called with the error, if any, and DAILY_QUEST
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Blueprint.prototype.daily_quest = function daily_quest(request, callback) {
        return this.rpcCall(daily_quest, $root.Empty, $root.DAILY_QUEST, request, callback);
    }, "name", { value: "daily_quest" });

    /**
     * Calls daily_quest.
     * @function daily_quest
     * @memberof Blueprint
     * @instance
     * @param {IEmpty} request Empty message or plain object
     * @returns {Promise<DAILY_QUEST>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link Blueprint#daily_rewards}.
     * @memberof Blueprint
     * @typedef daily_rewardsCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {DAILY_REWARDS} [response] DAILY_REWARDS
     */

    /**
     * Calls daily_rewards.
     * @function daily_rewards
     * @memberof Blueprint
     * @instance
     * @param {IEmpty} request Empty message or plain object
     * @param {Blueprint.daily_rewardsCallback} callback Node-style callback called with the error, if any, and DAILY_REWARDS
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Blueprint.prototype.daily_rewards = function daily_rewards(request, callback) {
        return this.rpcCall(daily_rewards, $root.Empty, $root.DAILY_REWARDS, request, callback);
    }, "name", { value: "daily_rewards" });

    /**
     * Calls daily_rewards.
     * @function daily_rewards
     * @memberof Blueprint
     * @instance
     * @param {IEmpty} request Empty message or plain object
     * @returns {Promise<DAILY_REWARDS>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link Blueprint#equipments}.
     * @memberof Blueprint
     * @typedef equipmentsCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {EQUIPMENTS} [response] EQUIPMENTS
     */

    /**
     * Calls equipments.
     * @function equipments
     * @memberof Blueprint
     * @instance
     * @param {IEmpty} request Empty message or plain object
     * @param {Blueprint.equipmentsCallback} callback Node-style callback called with the error, if any, and EQUIPMENTS
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Blueprint.prototype.equipments = function equipments(request, callback) {
        return this.rpcCall(equipments, $root.Empty, $root.EQUIPMENTS, request, callback);
    }, "name", { value: "equipments" });

    /**
     * Calls equipments.
     * @function equipments
     * @memberof Blueprint
     * @instance
     * @param {IEmpty} request Empty message or plain object
     * @returns {Promise<EQUIPMENTS>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link Blueprint#item_table}.
     * @memberof Blueprint
     * @typedef item_tableCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {ITEM_TABLE} [response] ITEM_TABLE
     */

    /**
     * Calls item_table.
     * @function item_table
     * @memberof Blueprint
     * @instance
     * @param {IEmpty} request Empty message or plain object
     * @param {Blueprint.item_tableCallback} callback Node-style callback called with the error, if any, and ITEM_TABLE
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Blueprint.prototype.item_table = function item_table(request, callback) {
        return this.rpcCall(item_table, $root.Empty, $root.ITEM_TABLE, request, callback);
    }, "name", { value: "item_table" });

    /**
     * Calls item_table.
     * @function item_table
     * @memberof Blueprint
     * @instance
     * @param {IEmpty} request Empty message or plain object
     * @returns {Promise<ITEM_TABLE>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link Blueprint#lucky_wheel}.
     * @memberof Blueprint
     * @typedef lucky_wheelCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {LUCKY_WHEEL} [response] LUCKY_WHEEL
     */

    /**
     * Calls lucky_wheel.
     * @function lucky_wheel
     * @memberof Blueprint
     * @instance
     * @param {IEmpty} request Empty message or plain object
     * @param {Blueprint.lucky_wheelCallback} callback Node-style callback called with the error, if any, and LUCKY_WHEEL
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Blueprint.prototype.lucky_wheel = function lucky_wheel(request, callback) {
        return this.rpcCall(lucky_wheel, $root.Empty, $root.LUCKY_WHEEL, request, callback);
    }, "name", { value: "lucky_wheel" });

    /**
     * Calls lucky_wheel.
     * @function lucky_wheel
     * @memberof Blueprint
     * @instance
     * @param {IEmpty} request Empty message or plain object
     * @returns {Promise<LUCKY_WHEEL>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link Blueprint#progress_quest}.
     * @memberof Blueprint
     * @typedef progress_questCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {PROGRESS_QUEST} [response] PROGRESS_QUEST
     */

    /**
     * Calls progress_quest.
     * @function progress_quest
     * @memberof Blueprint
     * @instance
     * @param {IEmpty} request Empty message or plain object
     * @param {Blueprint.progress_questCallback} callback Node-style callback called with the error, if any, and PROGRESS_QUEST
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Blueprint.prototype.progress_quest = function progress_quest(request, callback) {
        return this.rpcCall(progress_quest, $root.Empty, $root.PROGRESS_QUEST, request, callback);
    }, "name", { value: "progress_quest" });

    /**
     * Calls progress_quest.
     * @function progress_quest
     * @memberof Blueprint
     * @instance
     * @param {IEmpty} request Empty message or plain object
     * @returns {Promise<PROGRESS_QUEST>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link Blueprint#test}.
     * @memberof Blueprint
     * @typedef testCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {TEST} [response] TEST
     */

    /**
     * Calls test.
     * @function test
     * @memberof Blueprint
     * @instance
     * @param {IEmpty} request Empty message or plain object
     * @param {Blueprint.testCallback} callback Node-style callback called with the error, if any, and TEST
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Blueprint.prototype.test = function test(request, callback) {
        return this.rpcCall(test, $root.Empty, $root.TEST, request, callback);
    }, "name", { value: "test" });

    /**
     * Calls test.
     * @function test
     * @memberof Blueprint
     * @instance
     * @param {IEmpty} request Empty message or plain object
     * @returns {Promise<TEST>} Promise
     * @variation 2
     */

    return Blueprint;
})();

$root.CHARACTERS = (function() {

    /**
     * Properties of a CHARACTERS.
     * @exports ICHARACTERS
     * @interface ICHARACTERS
     * @property {string|null} [name] CHARACTERS name
     * @property {Array.<CHARACTERS.IItems>|null} [items] CHARACTERS items
     */

    /**
     * Constructs a new CHARACTERS.
     * @exports CHARACTERS
     * @classdesc Represents a CHARACTERS.
     * @implements ICHARACTERS
     * @constructor
     * @param {ICHARACTERS=} [properties] Properties to set
     */
    function CHARACTERS(properties) {
        this.items = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CHARACTERS name.
     * @member {string} name
     * @memberof CHARACTERS
     * @instance
     */
    CHARACTERS.prototype.name = "";

    /**
     * CHARACTERS items.
     * @member {Array.<CHARACTERS.IItems>} items
     * @memberof CHARACTERS
     * @instance
     */
    CHARACTERS.prototype.items = $util.emptyArray;

    /**
     * Creates a new CHARACTERS instance using the specified properties.
     * @function create
     * @memberof CHARACTERS
     * @static
     * @param {ICHARACTERS=} [properties] Properties to set
     * @returns {CHARACTERS} CHARACTERS instance
     */
    CHARACTERS.create = function create(properties) {
        return new CHARACTERS(properties);
    };

    /**
     * Encodes the specified CHARACTERS message. Does not implicitly {@link CHARACTERS.verify|verify} messages.
     * @function encode
     * @memberof CHARACTERS
     * @static
     * @param {ICHARACTERS} message CHARACTERS message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CHARACTERS.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        if (message.items != null && message.items.length)
            for (var i = 0; i < message.items.length; ++i)
                $root.CHARACTERS.Items.encode(message.items[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified CHARACTERS message, length delimited. Does not implicitly {@link CHARACTERS.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CHARACTERS
     * @static
     * @param {ICHARACTERS} message CHARACTERS message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CHARACTERS.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CHARACTERS message from the specified reader or buffer.
     * @function decode
     * @memberof CHARACTERS
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CHARACTERS} CHARACTERS
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CHARACTERS.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CHARACTERS();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.name = reader.string();
                    break;
                }
            case 2: {
                    if (!(message.items && message.items.length))
                        message.items = [];
                    message.items.push($root.CHARACTERS.Items.decode(reader, reader.uint32()));
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
     * Decodes a CHARACTERS message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CHARACTERS
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CHARACTERS} CHARACTERS
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CHARACTERS.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CHARACTERS message.
     * @function verify
     * @memberof CHARACTERS
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CHARACTERS.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.items != null && message.hasOwnProperty("items")) {
            if (!Array.isArray(message.items))
                return "items: array expected";
            for (var i = 0; i < message.items.length; ++i) {
                var error = $root.CHARACTERS.Items.verify(message.items[i]);
                if (error)
                    return "items." + error;
            }
        }
        return null;
    };

    /**
     * Creates a CHARACTERS message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CHARACTERS
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CHARACTERS} CHARACTERS
     */
    CHARACTERS.fromObject = function fromObject(object) {
        if (object instanceof $root.CHARACTERS)
            return object;
        var message = new $root.CHARACTERS();
        if (object.name != null)
            message.name = String(object.name);
        if (object.items) {
            if (!Array.isArray(object.items))
                throw TypeError(".CHARACTERS.items: array expected");
            message.items = [];
            for (var i = 0; i < object.items.length; ++i) {
                if (typeof object.items[i] !== "object")
                    throw TypeError(".CHARACTERS.items: object expected");
                message.items[i] = $root.CHARACTERS.Items.fromObject(object.items[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a CHARACTERS message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CHARACTERS
     * @static
     * @param {CHARACTERS} message CHARACTERS
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CHARACTERS.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.items = [];
        if (options.defaults)
            object.name = "";
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.items && message.items.length) {
            object.items = [];
            for (var j = 0; j < message.items.length; ++j)
                object.items[j] = $root.CHARACTERS.Items.toObject(message.items[j], options);
        }
        return object;
    };

    /**
     * Converts this CHARACTERS to JSON.
     * @function toJSON
     * @memberof CHARACTERS
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CHARACTERS.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CHARACTERS
     * @function getTypeUrl
     * @memberof CHARACTERS
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CHARACTERS.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CHARACTERS";
    };

    CHARACTERS.Items = (function() {

        /**
         * Properties of an Items.
         * @memberof CHARACTERS
         * @interface IItems
         * @property {number|null} [basePointsSpecialAttack] Items basePointsSpecialAttack
         * @property {number|null} [basePointsCriticalHit] Items basePointsCriticalHit
         * @property {number|null} [basePointsDefense] Items basePointsDefense
         * @property {number|null} [basePointsAttack] Items basePointsAttack
         * @property {number|null} [basePointsLife] Items basePointsLife
         * @property {string|null} [characterName] Items characterName
         * @property {string|null} [id] Items id
         * @property {string|null} [bioTitle] Items bioTitle
         * @property {number|null} [basePointsAttackSpeed] Items basePointsAttackSpeed
         */

        /**
         * Constructs a new Items.
         * @memberof CHARACTERS
         * @classdesc Represents an Items.
         * @implements IItems
         * @constructor
         * @param {CHARACTERS.IItems=} [properties] Properties to set
         */
        function Items(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Items basePointsSpecialAttack.
         * @member {number} basePointsSpecialAttack
         * @memberof CHARACTERS.Items
         * @instance
         */
        Items.prototype.basePointsSpecialAttack = 0;

        /**
         * Items basePointsCriticalHit.
         * @member {number} basePointsCriticalHit
         * @memberof CHARACTERS.Items
         * @instance
         */
        Items.prototype.basePointsCriticalHit = 0;

        /**
         * Items basePointsDefense.
         * @member {number} basePointsDefense
         * @memberof CHARACTERS.Items
         * @instance
         */
        Items.prototype.basePointsDefense = 0;

        /**
         * Items basePointsAttack.
         * @member {number} basePointsAttack
         * @memberof CHARACTERS.Items
         * @instance
         */
        Items.prototype.basePointsAttack = 0;

        /**
         * Items basePointsLife.
         * @member {number} basePointsLife
         * @memberof CHARACTERS.Items
         * @instance
         */
        Items.prototype.basePointsLife = 0;

        /**
         * Items characterName.
         * @member {string} characterName
         * @memberof CHARACTERS.Items
         * @instance
         */
        Items.prototype.characterName = "";

        /**
         * Items id.
         * @member {string} id
         * @memberof CHARACTERS.Items
         * @instance
         */
        Items.prototype.id = "";

        /**
         * Items bioTitle.
         * @member {string} bioTitle
         * @memberof CHARACTERS.Items
         * @instance
         */
        Items.prototype.bioTitle = "";

        /**
         * Items basePointsAttackSpeed.
         * @member {number} basePointsAttackSpeed
         * @memberof CHARACTERS.Items
         * @instance
         */
        Items.prototype.basePointsAttackSpeed = 0;

        /**
         * Creates a new Items instance using the specified properties.
         * @function create
         * @memberof CHARACTERS.Items
         * @static
         * @param {CHARACTERS.IItems=} [properties] Properties to set
         * @returns {CHARACTERS.Items} Items instance
         */
        Items.create = function create(properties) {
            return new Items(properties);
        };

        /**
         * Encodes the specified Items message. Does not implicitly {@link CHARACTERS.Items.verify|verify} messages.
         * @function encode
         * @memberof CHARACTERS.Items
         * @static
         * @param {CHARACTERS.IItems} message Items message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Items.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.basePointsSpecialAttack != null && Object.hasOwnProperty.call(message, "basePointsSpecialAttack"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.basePointsSpecialAttack);
            if (message.basePointsCriticalHit != null && Object.hasOwnProperty.call(message, "basePointsCriticalHit"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.basePointsCriticalHit);
            if (message.basePointsDefense != null && Object.hasOwnProperty.call(message, "basePointsDefense"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.basePointsDefense);
            if (message.basePointsAttack != null && Object.hasOwnProperty.call(message, "basePointsAttack"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.basePointsAttack);
            if (message.basePointsLife != null && Object.hasOwnProperty.call(message, "basePointsLife"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.basePointsLife);
            if (message.characterName != null && Object.hasOwnProperty.call(message, "characterName"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.characterName);
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.id);
            if (message.bioTitle != null && Object.hasOwnProperty.call(message, "bioTitle"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.bioTitle);
            if (message.basePointsAttackSpeed != null && Object.hasOwnProperty.call(message, "basePointsAttackSpeed"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.basePointsAttackSpeed);
            return writer;
        };

        /**
         * Encodes the specified Items message, length delimited. Does not implicitly {@link CHARACTERS.Items.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CHARACTERS.Items
         * @static
         * @param {CHARACTERS.IItems} message Items message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Items.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Items message from the specified reader or buffer.
         * @function decode
         * @memberof CHARACTERS.Items
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CHARACTERS.Items} Items
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Items.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CHARACTERS.Items();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.basePointsSpecialAttack = reader.int32();
                        break;
                    }
                case 2: {
                        message.basePointsCriticalHit = reader.int32();
                        break;
                    }
                case 3: {
                        message.basePointsDefense = reader.int32();
                        break;
                    }
                case 4: {
                        message.basePointsAttack = reader.int32();
                        break;
                    }
                case 5: {
                        message.basePointsLife = reader.int32();
                        break;
                    }
                case 6: {
                        message.characterName = reader.string();
                        break;
                    }
                case 7: {
                        message.id = reader.string();
                        break;
                    }
                case 8: {
                        message.bioTitle = reader.string();
                        break;
                    }
                case 9: {
                        message.basePointsAttackSpeed = reader.int32();
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
         * @memberof CHARACTERS.Items
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CHARACTERS.Items} Items
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
         * @memberof CHARACTERS.Items
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Items.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.basePointsSpecialAttack != null && message.hasOwnProperty("basePointsSpecialAttack"))
                if (!$util.isInteger(message.basePointsSpecialAttack))
                    return "basePointsSpecialAttack: integer expected";
            if (message.basePointsCriticalHit != null && message.hasOwnProperty("basePointsCriticalHit"))
                if (!$util.isInteger(message.basePointsCriticalHit))
                    return "basePointsCriticalHit: integer expected";
            if (message.basePointsDefense != null && message.hasOwnProperty("basePointsDefense"))
                if (!$util.isInteger(message.basePointsDefense))
                    return "basePointsDefense: integer expected";
            if (message.basePointsAttack != null && message.hasOwnProperty("basePointsAttack"))
                if (!$util.isInteger(message.basePointsAttack))
                    return "basePointsAttack: integer expected";
            if (message.basePointsLife != null && message.hasOwnProperty("basePointsLife"))
                if (!$util.isInteger(message.basePointsLife))
                    return "basePointsLife: integer expected";
            if (message.characterName != null && message.hasOwnProperty("characterName"))
                if (!$util.isString(message.characterName))
                    return "characterName: string expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.bioTitle != null && message.hasOwnProperty("bioTitle"))
                if (!$util.isString(message.bioTitle))
                    return "bioTitle: string expected";
            if (message.basePointsAttackSpeed != null && message.hasOwnProperty("basePointsAttackSpeed"))
                if (!$util.isInteger(message.basePointsAttackSpeed))
                    return "basePointsAttackSpeed: integer expected";
            return null;
        };

        /**
         * Creates an Items message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CHARACTERS.Items
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CHARACTERS.Items} Items
         */
        Items.fromObject = function fromObject(object) {
            if (object instanceof $root.CHARACTERS.Items)
                return object;
            var message = new $root.CHARACTERS.Items();
            if (object.basePointsSpecialAttack != null)
                message.basePointsSpecialAttack = object.basePointsSpecialAttack | 0;
            if (object.basePointsCriticalHit != null)
                message.basePointsCriticalHit = object.basePointsCriticalHit | 0;
            if (object.basePointsDefense != null)
                message.basePointsDefense = object.basePointsDefense | 0;
            if (object.basePointsAttack != null)
                message.basePointsAttack = object.basePointsAttack | 0;
            if (object.basePointsLife != null)
                message.basePointsLife = object.basePointsLife | 0;
            if (object.characterName != null)
                message.characterName = String(object.characterName);
            if (object.id != null)
                message.id = String(object.id);
            if (object.bioTitle != null)
                message.bioTitle = String(object.bioTitle);
            if (object.basePointsAttackSpeed != null)
                message.basePointsAttackSpeed = object.basePointsAttackSpeed | 0;
            return message;
        };

        /**
         * Creates a plain object from an Items message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CHARACTERS.Items
         * @static
         * @param {CHARACTERS.Items} message Items
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Items.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.basePointsSpecialAttack = 0;
                object.basePointsCriticalHit = 0;
                object.basePointsDefense = 0;
                object.basePointsAttack = 0;
                object.basePointsLife = 0;
                object.characterName = "";
                object.id = "";
                object.bioTitle = "";
                object.basePointsAttackSpeed = 0;
            }
            if (message.basePointsSpecialAttack != null && message.hasOwnProperty("basePointsSpecialAttack"))
                object.basePointsSpecialAttack = message.basePointsSpecialAttack;
            if (message.basePointsCriticalHit != null && message.hasOwnProperty("basePointsCriticalHit"))
                object.basePointsCriticalHit = message.basePointsCriticalHit;
            if (message.basePointsDefense != null && message.hasOwnProperty("basePointsDefense"))
                object.basePointsDefense = message.basePointsDefense;
            if (message.basePointsAttack != null && message.hasOwnProperty("basePointsAttack"))
                object.basePointsAttack = message.basePointsAttack;
            if (message.basePointsLife != null && message.hasOwnProperty("basePointsLife"))
                object.basePointsLife = message.basePointsLife;
            if (message.characterName != null && message.hasOwnProperty("characterName"))
                object.characterName = message.characterName;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.bioTitle != null && message.hasOwnProperty("bioTitle"))
                object.bioTitle = message.bioTitle;
            if (message.basePointsAttackSpeed != null && message.hasOwnProperty("basePointsAttackSpeed"))
                object.basePointsAttackSpeed = message.basePointsAttackSpeed;
            return object;
        };

        /**
         * Converts this Items to JSON.
         * @function toJSON
         * @memberof CHARACTERS.Items
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Items.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Items
         * @function getTypeUrl
         * @memberof CHARACTERS.Items
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Items.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CHARACTERS.Items";
        };

        return Items;
    })();

    return CHARACTERS;
})();

$root.DAILY_QUEST = (function() {

    /**
     * Properties of a DAILY_QUEST.
     * @exports IDAILY_QUEST
     * @interface IDAILY_QUEST
     * @property {Array.<DAILY_QUEST.IItems>|null} [items] DAILY_QUEST items
     */

    /**
     * Constructs a new DAILY_QUEST.
     * @exports DAILY_QUEST
     * @classdesc Represents a DAILY_QUEST.
     * @implements IDAILY_QUEST
     * @constructor
     * @param {IDAILY_QUEST=} [properties] Properties to set
     */
    function DAILY_QUEST(properties) {
        this.items = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DAILY_QUEST items.
     * @member {Array.<DAILY_QUEST.IItems>} items
     * @memberof DAILY_QUEST
     * @instance
     */
    DAILY_QUEST.prototype.items = $util.emptyArray;

    /**
     * Creates a new DAILY_QUEST instance using the specified properties.
     * @function create
     * @memberof DAILY_QUEST
     * @static
     * @param {IDAILY_QUEST=} [properties] Properties to set
     * @returns {DAILY_QUEST} DAILY_QUEST instance
     */
    DAILY_QUEST.create = function create(properties) {
        return new DAILY_QUEST(properties);
    };

    /**
     * Encodes the specified DAILY_QUEST message. Does not implicitly {@link DAILY_QUEST.verify|verify} messages.
     * @function encode
     * @memberof DAILY_QUEST
     * @static
     * @param {IDAILY_QUEST} message DAILY_QUEST message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DAILY_QUEST.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.items != null && message.items.length)
            for (var i = 0; i < message.items.length; ++i)
                $root.DAILY_QUEST.Items.encode(message.items[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified DAILY_QUEST message, length delimited. Does not implicitly {@link DAILY_QUEST.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DAILY_QUEST
     * @static
     * @param {IDAILY_QUEST} message DAILY_QUEST message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DAILY_QUEST.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DAILY_QUEST message from the specified reader or buffer.
     * @function decode
     * @memberof DAILY_QUEST
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DAILY_QUEST} DAILY_QUEST
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DAILY_QUEST.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DAILY_QUEST();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.items && message.items.length))
                        message.items = [];
                    message.items.push($root.DAILY_QUEST.Items.decode(reader, reader.uint32()));
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
     * Decodes a DAILY_QUEST message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DAILY_QUEST
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DAILY_QUEST} DAILY_QUEST
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DAILY_QUEST.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DAILY_QUEST message.
     * @function verify
     * @memberof DAILY_QUEST
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DAILY_QUEST.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.items != null && message.hasOwnProperty("items")) {
            if (!Array.isArray(message.items))
                return "items: array expected";
            for (var i = 0; i < message.items.length; ++i) {
                var error = $root.DAILY_QUEST.Items.verify(message.items[i]);
                if (error)
                    return "items." + error;
            }
        }
        return null;
    };

    /**
     * Creates a DAILY_QUEST message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DAILY_QUEST
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DAILY_QUEST} DAILY_QUEST
     */
    DAILY_QUEST.fromObject = function fromObject(object) {
        if (object instanceof $root.DAILY_QUEST)
            return object;
        var message = new $root.DAILY_QUEST();
        if (object.items) {
            if (!Array.isArray(object.items))
                throw TypeError(".DAILY_QUEST.items: array expected");
            message.items = [];
            for (var i = 0; i < object.items.length; ++i) {
                if (typeof object.items[i] !== "object")
                    throw TypeError(".DAILY_QUEST.items: object expected");
                message.items[i] = $root.DAILY_QUEST.Items.fromObject(object.items[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a DAILY_QUEST message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DAILY_QUEST
     * @static
     * @param {DAILY_QUEST} message DAILY_QUEST
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DAILY_QUEST.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.items = [];
        if (message.items && message.items.length) {
            object.items = [];
            for (var j = 0; j < message.items.length; ++j)
                object.items[j] = $root.DAILY_QUEST.Items.toObject(message.items[j], options);
        }
        return object;
    };

    /**
     * Converts this DAILY_QUEST to JSON.
     * @function toJSON
     * @memberof DAILY_QUEST
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DAILY_QUEST.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for DAILY_QUEST
     * @function getTypeUrl
     * @memberof DAILY_QUEST
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    DAILY_QUEST.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/DAILY_QUEST";
    };

    DAILY_QUEST.Items = (function() {

        /**
         * Properties of an Items.
         * @memberof DAILY_QUEST
         * @interface IItems
         * @property {number|null} [conditionReach] Items conditionReach
         * @property {number|null} [rewardQuantity] Items rewardQuantity
         * @property {string|null} [condition] Items condition
         * @property {string|null} [rewardId] Items rewardId
         * @property {string|null} [id] Items id
         * @property {string|null} [questName] Items questName
         */

        /**
         * Constructs a new Items.
         * @memberof DAILY_QUEST
         * @classdesc Represents an Items.
         * @implements IItems
         * @constructor
         * @param {DAILY_QUEST.IItems=} [properties] Properties to set
         */
        function Items(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Items conditionReach.
         * @member {number} conditionReach
         * @memberof DAILY_QUEST.Items
         * @instance
         */
        Items.prototype.conditionReach = 0;

        /**
         * Items rewardQuantity.
         * @member {number} rewardQuantity
         * @memberof DAILY_QUEST.Items
         * @instance
         */
        Items.prototype.rewardQuantity = 0;

        /**
         * Items condition.
         * @member {string} condition
         * @memberof DAILY_QUEST.Items
         * @instance
         */
        Items.prototype.condition = "";

        /**
         * Items rewardId.
         * @member {string} rewardId
         * @memberof DAILY_QUEST.Items
         * @instance
         */
        Items.prototype.rewardId = "";

        /**
         * Items id.
         * @member {string} id
         * @memberof DAILY_QUEST.Items
         * @instance
         */
        Items.prototype.id = "";

        /**
         * Items questName.
         * @member {string} questName
         * @memberof DAILY_QUEST.Items
         * @instance
         */
        Items.prototype.questName = "";

        /**
         * Creates a new Items instance using the specified properties.
         * @function create
         * @memberof DAILY_QUEST.Items
         * @static
         * @param {DAILY_QUEST.IItems=} [properties] Properties to set
         * @returns {DAILY_QUEST.Items} Items instance
         */
        Items.create = function create(properties) {
            return new Items(properties);
        };

        /**
         * Encodes the specified Items message. Does not implicitly {@link DAILY_QUEST.Items.verify|verify} messages.
         * @function encode
         * @memberof DAILY_QUEST.Items
         * @static
         * @param {DAILY_QUEST.IItems} message Items message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Items.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.conditionReach != null && Object.hasOwnProperty.call(message, "conditionReach"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.conditionReach);
            if (message.rewardQuantity != null && Object.hasOwnProperty.call(message, "rewardQuantity"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.rewardQuantity);
            if (message.condition != null && Object.hasOwnProperty.call(message, "condition"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.condition);
            if (message.rewardId != null && Object.hasOwnProperty.call(message, "rewardId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.rewardId);
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.id);
            if (message.questName != null && Object.hasOwnProperty.call(message, "questName"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.questName);
            return writer;
        };

        /**
         * Encodes the specified Items message, length delimited. Does not implicitly {@link DAILY_QUEST.Items.verify|verify} messages.
         * @function encodeDelimited
         * @memberof DAILY_QUEST.Items
         * @static
         * @param {DAILY_QUEST.IItems} message Items message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Items.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Items message from the specified reader or buffer.
         * @function decode
         * @memberof DAILY_QUEST.Items
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {DAILY_QUEST.Items} Items
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Items.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DAILY_QUEST.Items();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.conditionReach = reader.int32();
                        break;
                    }
                case 2: {
                        message.rewardQuantity = reader.int32();
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
         * @memberof DAILY_QUEST.Items
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {DAILY_QUEST.Items} Items
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
         * @memberof DAILY_QUEST.Items
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Items.verify = function verify(message) {
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
            return null;
        };

        /**
         * Creates an Items message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof DAILY_QUEST.Items
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {DAILY_QUEST.Items} Items
         */
        Items.fromObject = function fromObject(object) {
            if (object instanceof $root.DAILY_QUEST.Items)
                return object;
            var message = new $root.DAILY_QUEST.Items();
            if (object.conditionReach != null)
                message.conditionReach = object.conditionReach | 0;
            if (object.rewardQuantity != null)
                message.rewardQuantity = object.rewardQuantity | 0;
            if (object.condition != null)
                message.condition = String(object.condition);
            if (object.rewardId != null)
                message.rewardId = String(object.rewardId);
            if (object.id != null)
                message.id = String(object.id);
            if (object.questName != null)
                message.questName = String(object.questName);
            return message;
        };

        /**
         * Creates a plain object from an Items message. Also converts values to other types if specified.
         * @function toObject
         * @memberof DAILY_QUEST.Items
         * @static
         * @param {DAILY_QUEST.Items} message Items
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Items.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.conditionReach = 0;
                object.rewardQuantity = 0;
                object.condition = "";
                object.rewardId = "";
                object.id = "";
                object.questName = "";
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
            return object;
        };

        /**
         * Converts this Items to JSON.
         * @function toJSON
         * @memberof DAILY_QUEST.Items
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Items.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Items
         * @function getTypeUrl
         * @memberof DAILY_QUEST.Items
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Items.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/DAILY_QUEST.Items";
        };

        return Items;
    })();

    return DAILY_QUEST;
})();

$root.DAILY_REWARDS = (function() {

    /**
     * Properties of a DAILY_REWARDS.
     * @exports IDAILY_REWARDS
     * @interface IDAILY_REWARDS
     * @property {number|null} [hoursToReceive] DAILY_REWARDS hoursToReceive
     * @property {boolean|null} [resetIfFail] DAILY_REWARDS resetIfFail
     * @property {Array.<DAILY_REWARDS.ISteps>|null} [steps] DAILY_REWARDS steps
     * @property {boolean|null} [enabled] DAILY_REWARDS enabled
     * @property {DAILY_REWARDS.IDefaultRewardIfAlreadyOwned|null} [defaultRewardIfAlreadyOwned] DAILY_REWARDS defaultRewardIfAlreadyOwned
     */

    /**
     * Constructs a new DAILY_REWARDS.
     * @exports DAILY_REWARDS
     * @classdesc Represents a DAILY_REWARDS.
     * @implements IDAILY_REWARDS
     * @constructor
     * @param {IDAILY_REWARDS=} [properties] Properties to set
     */
    function DAILY_REWARDS(properties) {
        this.steps = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DAILY_REWARDS hoursToReceive.
     * @member {number} hoursToReceive
     * @memberof DAILY_REWARDS
     * @instance
     */
    DAILY_REWARDS.prototype.hoursToReceive = 0;

    /**
     * DAILY_REWARDS resetIfFail.
     * @member {boolean} resetIfFail
     * @memberof DAILY_REWARDS
     * @instance
     */
    DAILY_REWARDS.prototype.resetIfFail = false;

    /**
     * DAILY_REWARDS steps.
     * @member {Array.<DAILY_REWARDS.ISteps>} steps
     * @memberof DAILY_REWARDS
     * @instance
     */
    DAILY_REWARDS.prototype.steps = $util.emptyArray;

    /**
     * DAILY_REWARDS enabled.
     * @member {boolean} enabled
     * @memberof DAILY_REWARDS
     * @instance
     */
    DAILY_REWARDS.prototype.enabled = false;

    /**
     * DAILY_REWARDS defaultRewardIfAlreadyOwned.
     * @member {DAILY_REWARDS.IDefaultRewardIfAlreadyOwned|null|undefined} defaultRewardIfAlreadyOwned
     * @memberof DAILY_REWARDS
     * @instance
     */
    DAILY_REWARDS.prototype.defaultRewardIfAlreadyOwned = null;

    /**
     * Creates a new DAILY_REWARDS instance using the specified properties.
     * @function create
     * @memberof DAILY_REWARDS
     * @static
     * @param {IDAILY_REWARDS=} [properties] Properties to set
     * @returns {DAILY_REWARDS} DAILY_REWARDS instance
     */
    DAILY_REWARDS.create = function create(properties) {
        return new DAILY_REWARDS(properties);
    };

    /**
     * Encodes the specified DAILY_REWARDS message. Does not implicitly {@link DAILY_REWARDS.verify|verify} messages.
     * @function encode
     * @memberof DAILY_REWARDS
     * @static
     * @param {IDAILY_REWARDS} message DAILY_REWARDS message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DAILY_REWARDS.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.hoursToReceive != null && Object.hasOwnProperty.call(message, "hoursToReceive"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.hoursToReceive);
        if (message.resetIfFail != null && Object.hasOwnProperty.call(message, "resetIfFail"))
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.resetIfFail);
        if (message.steps != null && message.steps.length)
            for (var i = 0; i < message.steps.length; ++i)
                $root.DAILY_REWARDS.Steps.encode(message.steps[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.enabled != null && Object.hasOwnProperty.call(message, "enabled"))
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.enabled);
        if (message.defaultRewardIfAlreadyOwned != null && Object.hasOwnProperty.call(message, "defaultRewardIfAlreadyOwned"))
            $root.DAILY_REWARDS.DefaultRewardIfAlreadyOwned.encode(message.defaultRewardIfAlreadyOwned, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified DAILY_REWARDS message, length delimited. Does not implicitly {@link DAILY_REWARDS.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DAILY_REWARDS
     * @static
     * @param {IDAILY_REWARDS} message DAILY_REWARDS message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DAILY_REWARDS.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DAILY_REWARDS message from the specified reader or buffer.
     * @function decode
     * @memberof DAILY_REWARDS
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DAILY_REWARDS} DAILY_REWARDS
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DAILY_REWARDS.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DAILY_REWARDS();
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
                    message.steps.push($root.DAILY_REWARDS.Steps.decode(reader, reader.uint32()));
                    break;
                }
            case 4: {
                    message.enabled = reader.bool();
                    break;
                }
            case 5: {
                    message.defaultRewardIfAlreadyOwned = $root.DAILY_REWARDS.DefaultRewardIfAlreadyOwned.decode(reader, reader.uint32());
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
     * Decodes a DAILY_REWARDS message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DAILY_REWARDS
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DAILY_REWARDS} DAILY_REWARDS
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DAILY_REWARDS.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DAILY_REWARDS message.
     * @function verify
     * @memberof DAILY_REWARDS
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DAILY_REWARDS.verify = function verify(message) {
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
                var error = $root.DAILY_REWARDS.Steps.verify(message.steps[i]);
                if (error)
                    return "steps." + error;
            }
        }
        if (message.enabled != null && message.hasOwnProperty("enabled"))
            if (typeof message.enabled !== "boolean")
                return "enabled: boolean expected";
        if (message.defaultRewardIfAlreadyOwned != null && message.hasOwnProperty("defaultRewardIfAlreadyOwned")) {
            var error = $root.DAILY_REWARDS.DefaultRewardIfAlreadyOwned.verify(message.defaultRewardIfAlreadyOwned);
            if (error)
                return "defaultRewardIfAlreadyOwned." + error;
        }
        return null;
    };

    /**
     * Creates a DAILY_REWARDS message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DAILY_REWARDS
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DAILY_REWARDS} DAILY_REWARDS
     */
    DAILY_REWARDS.fromObject = function fromObject(object) {
        if (object instanceof $root.DAILY_REWARDS)
            return object;
        var message = new $root.DAILY_REWARDS();
        if (object.hoursToReceive != null)
            message.hoursToReceive = object.hoursToReceive | 0;
        if (object.resetIfFail != null)
            message.resetIfFail = Boolean(object.resetIfFail);
        if (object.steps) {
            if (!Array.isArray(object.steps))
                throw TypeError(".DAILY_REWARDS.steps: array expected");
            message.steps = [];
            for (var i = 0; i < object.steps.length; ++i) {
                if (typeof object.steps[i] !== "object")
                    throw TypeError(".DAILY_REWARDS.steps: object expected");
                message.steps[i] = $root.DAILY_REWARDS.Steps.fromObject(object.steps[i]);
            }
        }
        if (object.enabled != null)
            message.enabled = Boolean(object.enabled);
        if (object.defaultRewardIfAlreadyOwned != null) {
            if (typeof object.defaultRewardIfAlreadyOwned !== "object")
                throw TypeError(".DAILY_REWARDS.defaultRewardIfAlreadyOwned: object expected");
            message.defaultRewardIfAlreadyOwned = $root.DAILY_REWARDS.DefaultRewardIfAlreadyOwned.fromObject(object.defaultRewardIfAlreadyOwned);
        }
        return message;
    };

    /**
     * Creates a plain object from a DAILY_REWARDS message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DAILY_REWARDS
     * @static
     * @param {DAILY_REWARDS} message DAILY_REWARDS
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DAILY_REWARDS.toObject = function toObject(message, options) {
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
                object.steps[j] = $root.DAILY_REWARDS.Steps.toObject(message.steps[j], options);
        }
        if (message.enabled != null && message.hasOwnProperty("enabled"))
            object.enabled = message.enabled;
        if (message.defaultRewardIfAlreadyOwned != null && message.hasOwnProperty("defaultRewardIfAlreadyOwned"))
            object.defaultRewardIfAlreadyOwned = $root.DAILY_REWARDS.DefaultRewardIfAlreadyOwned.toObject(message.defaultRewardIfAlreadyOwned, options);
        return object;
    };

    /**
     * Converts this DAILY_REWARDS to JSON.
     * @function toJSON
     * @memberof DAILY_REWARDS
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DAILY_REWARDS.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for DAILY_REWARDS
     * @function getTypeUrl
     * @memberof DAILY_REWARDS
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    DAILY_REWARDS.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/DAILY_REWARDS";
    };

    DAILY_REWARDS.Steps = (function() {

        /**
         * Properties of a Steps.
         * @memberof DAILY_REWARDS
         * @interface ISteps
         * @property {string|null} [itemId] Steps itemId
         * @property {number|null} [step] Steps step
         * @property {number|null} [amount] Steps amount
         */

        /**
         * Constructs a new Steps.
         * @memberof DAILY_REWARDS
         * @classdesc Represents a Steps.
         * @implements ISteps
         * @constructor
         * @param {DAILY_REWARDS.ISteps=} [properties] Properties to set
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
         * @memberof DAILY_REWARDS.Steps
         * @instance
         */
        Steps.prototype.itemId = "";

        /**
         * Steps step.
         * @member {number} step
         * @memberof DAILY_REWARDS.Steps
         * @instance
         */
        Steps.prototype.step = 0;

        /**
         * Steps amount.
         * @member {number} amount
         * @memberof DAILY_REWARDS.Steps
         * @instance
         */
        Steps.prototype.amount = 0;

        /**
         * Creates a new Steps instance using the specified properties.
         * @function create
         * @memberof DAILY_REWARDS.Steps
         * @static
         * @param {DAILY_REWARDS.ISteps=} [properties] Properties to set
         * @returns {DAILY_REWARDS.Steps} Steps instance
         */
        Steps.create = function create(properties) {
            return new Steps(properties);
        };

        /**
         * Encodes the specified Steps message. Does not implicitly {@link DAILY_REWARDS.Steps.verify|verify} messages.
         * @function encode
         * @memberof DAILY_REWARDS.Steps
         * @static
         * @param {DAILY_REWARDS.ISteps} message Steps message or plain object to encode
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
         * Encodes the specified Steps message, length delimited. Does not implicitly {@link DAILY_REWARDS.Steps.verify|verify} messages.
         * @function encodeDelimited
         * @memberof DAILY_REWARDS.Steps
         * @static
         * @param {DAILY_REWARDS.ISteps} message Steps message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Steps.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Steps message from the specified reader or buffer.
         * @function decode
         * @memberof DAILY_REWARDS.Steps
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {DAILY_REWARDS.Steps} Steps
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Steps.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DAILY_REWARDS.Steps();
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
         * @memberof DAILY_REWARDS.Steps
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {DAILY_REWARDS.Steps} Steps
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
         * @memberof DAILY_REWARDS.Steps
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
         * @memberof DAILY_REWARDS.Steps
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {DAILY_REWARDS.Steps} Steps
         */
        Steps.fromObject = function fromObject(object) {
            if (object instanceof $root.DAILY_REWARDS.Steps)
                return object;
            var message = new $root.DAILY_REWARDS.Steps();
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
         * @memberof DAILY_REWARDS.Steps
         * @static
         * @param {DAILY_REWARDS.Steps} message Steps
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
         * @memberof DAILY_REWARDS.Steps
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Steps.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Steps
         * @function getTypeUrl
         * @memberof DAILY_REWARDS.Steps
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Steps.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/DAILY_REWARDS.Steps";
        };

        return Steps;
    })();

    DAILY_REWARDS.DefaultRewardIfAlreadyOwned = (function() {

        /**
         * Properties of a DefaultRewardIfAlreadyOwned.
         * @memberof DAILY_REWARDS
         * @interface IDefaultRewardIfAlreadyOwned
         * @property {string|null} [itemId] DefaultRewardIfAlreadyOwned itemId
         * @property {number|null} [amount] DefaultRewardIfAlreadyOwned amount
         */

        /**
         * Constructs a new DefaultRewardIfAlreadyOwned.
         * @memberof DAILY_REWARDS
         * @classdesc Represents a DefaultRewardIfAlreadyOwned.
         * @implements IDefaultRewardIfAlreadyOwned
         * @constructor
         * @param {DAILY_REWARDS.IDefaultRewardIfAlreadyOwned=} [properties] Properties to set
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
         * @memberof DAILY_REWARDS.DefaultRewardIfAlreadyOwned
         * @instance
         */
        DefaultRewardIfAlreadyOwned.prototype.itemId = "";

        /**
         * DefaultRewardIfAlreadyOwned amount.
         * @member {number} amount
         * @memberof DAILY_REWARDS.DefaultRewardIfAlreadyOwned
         * @instance
         */
        DefaultRewardIfAlreadyOwned.prototype.amount = 0;

        /**
         * Creates a new DefaultRewardIfAlreadyOwned instance using the specified properties.
         * @function create
         * @memberof DAILY_REWARDS.DefaultRewardIfAlreadyOwned
         * @static
         * @param {DAILY_REWARDS.IDefaultRewardIfAlreadyOwned=} [properties] Properties to set
         * @returns {DAILY_REWARDS.DefaultRewardIfAlreadyOwned} DefaultRewardIfAlreadyOwned instance
         */
        DefaultRewardIfAlreadyOwned.create = function create(properties) {
            return new DefaultRewardIfAlreadyOwned(properties);
        };

        /**
         * Encodes the specified DefaultRewardIfAlreadyOwned message. Does not implicitly {@link DAILY_REWARDS.DefaultRewardIfAlreadyOwned.verify|verify} messages.
         * @function encode
         * @memberof DAILY_REWARDS.DefaultRewardIfAlreadyOwned
         * @static
         * @param {DAILY_REWARDS.IDefaultRewardIfAlreadyOwned} message DefaultRewardIfAlreadyOwned message or plain object to encode
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
         * Encodes the specified DefaultRewardIfAlreadyOwned message, length delimited. Does not implicitly {@link DAILY_REWARDS.DefaultRewardIfAlreadyOwned.verify|verify} messages.
         * @function encodeDelimited
         * @memberof DAILY_REWARDS.DefaultRewardIfAlreadyOwned
         * @static
         * @param {DAILY_REWARDS.IDefaultRewardIfAlreadyOwned} message DefaultRewardIfAlreadyOwned message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DefaultRewardIfAlreadyOwned.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DefaultRewardIfAlreadyOwned message from the specified reader or buffer.
         * @function decode
         * @memberof DAILY_REWARDS.DefaultRewardIfAlreadyOwned
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {DAILY_REWARDS.DefaultRewardIfAlreadyOwned} DefaultRewardIfAlreadyOwned
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DefaultRewardIfAlreadyOwned.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DAILY_REWARDS.DefaultRewardIfAlreadyOwned();
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
         * @memberof DAILY_REWARDS.DefaultRewardIfAlreadyOwned
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {DAILY_REWARDS.DefaultRewardIfAlreadyOwned} DefaultRewardIfAlreadyOwned
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
         * @memberof DAILY_REWARDS.DefaultRewardIfAlreadyOwned
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
         * @memberof DAILY_REWARDS.DefaultRewardIfAlreadyOwned
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {DAILY_REWARDS.DefaultRewardIfAlreadyOwned} DefaultRewardIfAlreadyOwned
         */
        DefaultRewardIfAlreadyOwned.fromObject = function fromObject(object) {
            if (object instanceof $root.DAILY_REWARDS.DefaultRewardIfAlreadyOwned)
                return object;
            var message = new $root.DAILY_REWARDS.DefaultRewardIfAlreadyOwned();
            if (object.itemId != null)
                message.itemId = String(object.itemId);
            if (object.amount != null)
                message.amount = object.amount | 0;
            return message;
        };

        /**
         * Creates a plain object from a DefaultRewardIfAlreadyOwned message. Also converts values to other types if specified.
         * @function toObject
         * @memberof DAILY_REWARDS.DefaultRewardIfAlreadyOwned
         * @static
         * @param {DAILY_REWARDS.DefaultRewardIfAlreadyOwned} message DefaultRewardIfAlreadyOwned
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
         * @memberof DAILY_REWARDS.DefaultRewardIfAlreadyOwned
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DefaultRewardIfAlreadyOwned.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DefaultRewardIfAlreadyOwned
         * @function getTypeUrl
         * @memberof DAILY_REWARDS.DefaultRewardIfAlreadyOwned
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DefaultRewardIfAlreadyOwned.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/DAILY_REWARDS.DefaultRewardIfAlreadyOwned";
        };

        return DefaultRewardIfAlreadyOwned;
    })();

    return DAILY_REWARDS;
})();

$root.EQUIPMENTS = (function() {

    /**
     * Properties of a EQUIPMENTS.
     * @exports IEQUIPMENTS
     * @interface IEQUIPMENTS
     * @property {Array.<EQUIPMENTS.IItems>|null} [items] EQUIPMENTS items
     */

    /**
     * Constructs a new EQUIPMENTS.
     * @exports EQUIPMENTS
     * @classdesc Represents a EQUIPMENTS.
     * @implements IEQUIPMENTS
     * @constructor
     * @param {IEQUIPMENTS=} [properties] Properties to set
     */
    function EQUIPMENTS(properties) {
        this.items = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EQUIPMENTS items.
     * @member {Array.<EQUIPMENTS.IItems>} items
     * @memberof EQUIPMENTS
     * @instance
     */
    EQUIPMENTS.prototype.items = $util.emptyArray;

    /**
     * Creates a new EQUIPMENTS instance using the specified properties.
     * @function create
     * @memberof EQUIPMENTS
     * @static
     * @param {IEQUIPMENTS=} [properties] Properties to set
     * @returns {EQUIPMENTS} EQUIPMENTS instance
     */
    EQUIPMENTS.create = function create(properties) {
        return new EQUIPMENTS(properties);
    };

    /**
     * Encodes the specified EQUIPMENTS message. Does not implicitly {@link EQUIPMENTS.verify|verify} messages.
     * @function encode
     * @memberof EQUIPMENTS
     * @static
     * @param {IEQUIPMENTS} message EQUIPMENTS message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EQUIPMENTS.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.items != null && message.items.length)
            for (var i = 0; i < message.items.length; ++i)
                $root.EQUIPMENTS.Items.encode(message.items[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified EQUIPMENTS message, length delimited. Does not implicitly {@link EQUIPMENTS.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EQUIPMENTS
     * @static
     * @param {IEQUIPMENTS} message EQUIPMENTS message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EQUIPMENTS.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a EQUIPMENTS message from the specified reader or buffer.
     * @function decode
     * @memberof EQUIPMENTS
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EQUIPMENTS} EQUIPMENTS
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EQUIPMENTS.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EQUIPMENTS();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.items && message.items.length))
                        message.items = [];
                    message.items.push($root.EQUIPMENTS.Items.decode(reader, reader.uint32()));
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
     * Decodes a EQUIPMENTS message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EQUIPMENTS
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EQUIPMENTS} EQUIPMENTS
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EQUIPMENTS.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a EQUIPMENTS message.
     * @function verify
     * @memberof EQUIPMENTS
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EQUIPMENTS.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.items != null && message.hasOwnProperty("items")) {
            if (!Array.isArray(message.items))
                return "items: array expected";
            for (var i = 0; i < message.items.length; ++i) {
                var error = $root.EQUIPMENTS.Items.verify(message.items[i]);
                if (error)
                    return "items." + error;
            }
        }
        return null;
    };

    /**
     * Creates a EQUIPMENTS message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EQUIPMENTS
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EQUIPMENTS} EQUIPMENTS
     */
    EQUIPMENTS.fromObject = function fromObject(object) {
        if (object instanceof $root.EQUIPMENTS)
            return object;
        var message = new $root.EQUIPMENTS();
        if (object.items) {
            if (!Array.isArray(object.items))
                throw TypeError(".EQUIPMENTS.items: array expected");
            message.items = [];
            for (var i = 0; i < object.items.length; ++i) {
                if (typeof object.items[i] !== "object")
                    throw TypeError(".EQUIPMENTS.items: object expected");
                message.items[i] = $root.EQUIPMENTS.Items.fromObject(object.items[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a EQUIPMENTS message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EQUIPMENTS
     * @static
     * @param {EQUIPMENTS} message EQUIPMENTS
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EQUIPMENTS.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.items = [];
        if (message.items && message.items.length) {
            object.items = [];
            for (var j = 0; j < message.items.length; ++j)
                object.items[j] = $root.EQUIPMENTS.Items.toObject(message.items[j], options);
        }
        return object;
    };

    /**
     * Converts this EQUIPMENTS to JSON.
     * @function toJSON
     * @memberof EQUIPMENTS
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EQUIPMENTS.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for EQUIPMENTS
     * @function getTypeUrl
     * @memberof EQUIPMENTS
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    EQUIPMENTS.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/EQUIPMENTS";
    };

    EQUIPMENTS.Items = (function() {

        /**
         * Properties of an Items.
         * @memberof EQUIPMENTS
         * @interface IItems
         * @property {string|null} [image] Items image
         * @property {string|null} [equipmentName] Items equipmentName
         * @property {string|null} [id] Items id
         * @property {string|null} [equipmentType] Items equipmentType
         * @property {string|null} [rarity] Items rarity
         * @property {number|null} [points] Items points
         */

        /**
         * Constructs a new Items.
         * @memberof EQUIPMENTS
         * @classdesc Represents an Items.
         * @implements IItems
         * @constructor
         * @param {EQUIPMENTS.IItems=} [properties] Properties to set
         */
        function Items(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Items image.
         * @member {string} image
         * @memberof EQUIPMENTS.Items
         * @instance
         */
        Items.prototype.image = "";

        /**
         * Items equipmentName.
         * @member {string} equipmentName
         * @memberof EQUIPMENTS.Items
         * @instance
         */
        Items.prototype.equipmentName = "";

        /**
         * Items id.
         * @member {string} id
         * @memberof EQUIPMENTS.Items
         * @instance
         */
        Items.prototype.id = "";

        /**
         * Items equipmentType.
         * @member {string} equipmentType
         * @memberof EQUIPMENTS.Items
         * @instance
         */
        Items.prototype.equipmentType = "";

        /**
         * Items rarity.
         * @member {string} rarity
         * @memberof EQUIPMENTS.Items
         * @instance
         */
        Items.prototype.rarity = "";

        /**
         * Items points.
         * @member {number} points
         * @memberof EQUIPMENTS.Items
         * @instance
         */
        Items.prototype.points = 0;

        /**
         * Creates a new Items instance using the specified properties.
         * @function create
         * @memberof EQUIPMENTS.Items
         * @static
         * @param {EQUIPMENTS.IItems=} [properties] Properties to set
         * @returns {EQUIPMENTS.Items} Items instance
         */
        Items.create = function create(properties) {
            return new Items(properties);
        };

        /**
         * Encodes the specified Items message. Does not implicitly {@link EQUIPMENTS.Items.verify|verify} messages.
         * @function encode
         * @memberof EQUIPMENTS.Items
         * @static
         * @param {EQUIPMENTS.IItems} message Items message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Items.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.image != null && Object.hasOwnProperty.call(message, "image"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.image);
            if (message.equipmentName != null && Object.hasOwnProperty.call(message, "equipmentName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.equipmentName);
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.id);
            if (message.equipmentType != null && Object.hasOwnProperty.call(message, "equipmentType"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.equipmentType);
            if (message.rarity != null && Object.hasOwnProperty.call(message, "rarity"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.rarity);
            if (message.points != null && Object.hasOwnProperty.call(message, "points"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.points);
            return writer;
        };

        /**
         * Encodes the specified Items message, length delimited. Does not implicitly {@link EQUIPMENTS.Items.verify|verify} messages.
         * @function encodeDelimited
         * @memberof EQUIPMENTS.Items
         * @static
         * @param {EQUIPMENTS.IItems} message Items message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Items.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Items message from the specified reader or buffer.
         * @function decode
         * @memberof EQUIPMENTS.Items
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {EQUIPMENTS.Items} Items
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Items.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EQUIPMENTS.Items();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.image = reader.string();
                        break;
                    }
                case 2: {
                        message.equipmentName = reader.string();
                        break;
                    }
                case 3: {
                        message.id = reader.string();
                        break;
                    }
                case 4: {
                        message.equipmentType = reader.string();
                        break;
                    }
                case 5: {
                        message.rarity = reader.string();
                        break;
                    }
                case 6: {
                        message.points = reader.int32();
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
         * @memberof EQUIPMENTS.Items
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {EQUIPMENTS.Items} Items
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
         * @memberof EQUIPMENTS.Items
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Items.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.image != null && message.hasOwnProperty("image"))
                if (!$util.isString(message.image))
                    return "image: string expected";
            if (message.equipmentName != null && message.hasOwnProperty("equipmentName"))
                if (!$util.isString(message.equipmentName))
                    return "equipmentName: string expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.equipmentType != null && message.hasOwnProperty("equipmentType"))
                if (!$util.isString(message.equipmentType))
                    return "equipmentType: string expected";
            if (message.rarity != null && message.hasOwnProperty("rarity"))
                if (!$util.isString(message.rarity))
                    return "rarity: string expected";
            if (message.points != null && message.hasOwnProperty("points"))
                if (!$util.isInteger(message.points))
                    return "points: integer expected";
            return null;
        };

        /**
         * Creates an Items message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof EQUIPMENTS.Items
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {EQUIPMENTS.Items} Items
         */
        Items.fromObject = function fromObject(object) {
            if (object instanceof $root.EQUIPMENTS.Items)
                return object;
            var message = new $root.EQUIPMENTS.Items();
            if (object.image != null)
                message.image = String(object.image);
            if (object.equipmentName != null)
                message.equipmentName = String(object.equipmentName);
            if (object.id != null)
                message.id = String(object.id);
            if (object.equipmentType != null)
                message.equipmentType = String(object.equipmentType);
            if (object.rarity != null)
                message.rarity = String(object.rarity);
            if (object.points != null)
                message.points = object.points | 0;
            return message;
        };

        /**
         * Creates a plain object from an Items message. Also converts values to other types if specified.
         * @function toObject
         * @memberof EQUIPMENTS.Items
         * @static
         * @param {EQUIPMENTS.Items} message Items
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Items.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.image = "";
                object.equipmentName = "";
                object.id = "";
                object.equipmentType = "";
                object.rarity = "";
                object.points = 0;
            }
            if (message.image != null && message.hasOwnProperty("image"))
                object.image = message.image;
            if (message.equipmentName != null && message.hasOwnProperty("equipmentName"))
                object.equipmentName = message.equipmentName;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.equipmentType != null && message.hasOwnProperty("equipmentType"))
                object.equipmentType = message.equipmentType;
            if (message.rarity != null && message.hasOwnProperty("rarity"))
                object.rarity = message.rarity;
            if (message.points != null && message.hasOwnProperty("points"))
                object.points = message.points;
            return object;
        };

        /**
         * Converts this Items to JSON.
         * @function toJSON
         * @memberof EQUIPMENTS.Items
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Items.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Items
         * @function getTypeUrl
         * @memberof EQUIPMENTS.Items
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Items.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/EQUIPMENTS.Items";
        };

        return Items;
    })();

    return EQUIPMENTS;
})();

$root.ITEM_TABLE = (function() {

    /**
     * Properties of a ITEM_TABLE.
     * @exports IITEM_TABLE
     * @interface IITEM_TABLE
     * @property {Array.<ITEM_TABLE.IItems>|null} [items] ITEM_TABLE items
     */

    /**
     * Constructs a new ITEM_TABLE.
     * @exports ITEM_TABLE
     * @classdesc Represents a ITEM_TABLE.
     * @implements IITEM_TABLE
     * @constructor
     * @param {IITEM_TABLE=} [properties] Properties to set
     */
    function ITEM_TABLE(properties) {
        this.items = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ITEM_TABLE items.
     * @member {Array.<ITEM_TABLE.IItems>} items
     * @memberof ITEM_TABLE
     * @instance
     */
    ITEM_TABLE.prototype.items = $util.emptyArray;

    /**
     * Creates a new ITEM_TABLE instance using the specified properties.
     * @function create
     * @memberof ITEM_TABLE
     * @static
     * @param {IITEM_TABLE=} [properties] Properties to set
     * @returns {ITEM_TABLE} ITEM_TABLE instance
     */
    ITEM_TABLE.create = function create(properties) {
        return new ITEM_TABLE(properties);
    };

    /**
     * Encodes the specified ITEM_TABLE message. Does not implicitly {@link ITEM_TABLE.verify|verify} messages.
     * @function encode
     * @memberof ITEM_TABLE
     * @static
     * @param {IITEM_TABLE} message ITEM_TABLE message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ITEM_TABLE.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.items != null && message.items.length)
            for (var i = 0; i < message.items.length; ++i)
                $root.ITEM_TABLE.Items.encode(message.items[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ITEM_TABLE message, length delimited. Does not implicitly {@link ITEM_TABLE.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ITEM_TABLE
     * @static
     * @param {IITEM_TABLE} message ITEM_TABLE message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ITEM_TABLE.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ITEM_TABLE message from the specified reader or buffer.
     * @function decode
     * @memberof ITEM_TABLE
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ITEM_TABLE} ITEM_TABLE
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ITEM_TABLE.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ITEM_TABLE();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.items && message.items.length))
                        message.items = [];
                    message.items.push($root.ITEM_TABLE.Items.decode(reader, reader.uint32()));
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
     * Decodes a ITEM_TABLE message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ITEM_TABLE
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ITEM_TABLE} ITEM_TABLE
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ITEM_TABLE.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ITEM_TABLE message.
     * @function verify
     * @memberof ITEM_TABLE
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ITEM_TABLE.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.items != null && message.hasOwnProperty("items")) {
            if (!Array.isArray(message.items))
                return "items: array expected";
            for (var i = 0; i < message.items.length; ++i) {
                var error = $root.ITEM_TABLE.Items.verify(message.items[i]);
                if (error)
                    return "items." + error;
            }
        }
        return null;
    };

    /**
     * Creates a ITEM_TABLE message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ITEM_TABLE
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ITEM_TABLE} ITEM_TABLE
     */
    ITEM_TABLE.fromObject = function fromObject(object) {
        if (object instanceof $root.ITEM_TABLE)
            return object;
        var message = new $root.ITEM_TABLE();
        if (object.items) {
            if (!Array.isArray(object.items))
                throw TypeError(".ITEM_TABLE.items: array expected");
            message.items = [];
            for (var i = 0; i < object.items.length; ++i) {
                if (typeof object.items[i] !== "object")
                    throw TypeError(".ITEM_TABLE.items: object expected");
                message.items[i] = $root.ITEM_TABLE.Items.fromObject(object.items[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a ITEM_TABLE message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ITEM_TABLE
     * @static
     * @param {ITEM_TABLE} message ITEM_TABLE
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ITEM_TABLE.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.items = [];
        if (message.items && message.items.length) {
            object.items = [];
            for (var j = 0; j < message.items.length; ++j)
                object.items[j] = $root.ITEM_TABLE.Items.toObject(message.items[j], options);
        }
        return object;
    };

    /**
     * Converts this ITEM_TABLE to JSON.
     * @function toJSON
     * @memberof ITEM_TABLE
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ITEM_TABLE.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ITEM_TABLE
     * @function getTypeUrl
     * @memberof ITEM_TABLE
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ITEM_TABLE.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ITEM_TABLE";
    };

    ITEM_TABLE.Items = (function() {

        /**
         * Properties of an Items.
         * @memberof ITEM_TABLE
         * @interface IItems
         * @property {string|null} [name] Items name
         * @property {string|null} [type] Items type
         * @property {string|null} [itemId] Items itemId
         */

        /**
         * Constructs a new Items.
         * @memberof ITEM_TABLE
         * @classdesc Represents an Items.
         * @implements IItems
         * @constructor
         * @param {ITEM_TABLE.IItems=} [properties] Properties to set
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
         * @memberof ITEM_TABLE.Items
         * @instance
         */
        Items.prototype.name = "";

        /**
         * Items type.
         * @member {string} type
         * @memberof ITEM_TABLE.Items
         * @instance
         */
        Items.prototype.type = "";

        /**
         * Items itemId.
         * @member {string} itemId
         * @memberof ITEM_TABLE.Items
         * @instance
         */
        Items.prototype.itemId = "";

        /**
         * Creates a new Items instance using the specified properties.
         * @function create
         * @memberof ITEM_TABLE.Items
         * @static
         * @param {ITEM_TABLE.IItems=} [properties] Properties to set
         * @returns {ITEM_TABLE.Items} Items instance
         */
        Items.create = function create(properties) {
            return new Items(properties);
        };

        /**
         * Encodes the specified Items message. Does not implicitly {@link ITEM_TABLE.Items.verify|verify} messages.
         * @function encode
         * @memberof ITEM_TABLE.Items
         * @static
         * @param {ITEM_TABLE.IItems} message Items message or plain object to encode
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
         * Encodes the specified Items message, length delimited. Does not implicitly {@link ITEM_TABLE.Items.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ITEM_TABLE.Items
         * @static
         * @param {ITEM_TABLE.IItems} message Items message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Items.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Items message from the specified reader or buffer.
         * @function decode
         * @memberof ITEM_TABLE.Items
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ITEM_TABLE.Items} Items
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Items.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ITEM_TABLE.Items();
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
         * @memberof ITEM_TABLE.Items
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ITEM_TABLE.Items} Items
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
         * @memberof ITEM_TABLE.Items
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
         * @memberof ITEM_TABLE.Items
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ITEM_TABLE.Items} Items
         */
        Items.fromObject = function fromObject(object) {
            if (object instanceof $root.ITEM_TABLE.Items)
                return object;
            var message = new $root.ITEM_TABLE.Items();
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
         * @memberof ITEM_TABLE.Items
         * @static
         * @param {ITEM_TABLE.Items} message Items
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
         * @memberof ITEM_TABLE.Items
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Items.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Items
         * @function getTypeUrl
         * @memberof ITEM_TABLE.Items
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Items.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ITEM_TABLE.Items";
        };

        return Items;
    })();

    return ITEM_TABLE;
})();

$root.LUCKY_WHEEL = (function() {

    /**
     * Properties of a LUCKY_WHEEL.
     * @exports ILUCKY_WHEEL
     * @interface ILUCKY_WHEEL
     * @property {number|null} [minFullSpins] LUCKY_WHEEL minFullSpins
     * @property {number|null} [maxFullSpins] LUCKY_WHEEL maxFullSpins
     * @property {Array.<LUCKY_WHEEL.IItems>|null} [items] LUCKY_WHEEL items
     * @property {number|null} [dailyLimit] LUCKY_WHEEL dailyLimit
     */

    /**
     * Constructs a new LUCKY_WHEEL.
     * @exports LUCKY_WHEEL
     * @classdesc Represents a LUCKY_WHEEL.
     * @implements ILUCKY_WHEEL
     * @constructor
     * @param {ILUCKY_WHEEL=} [properties] Properties to set
     */
    function LUCKY_WHEEL(properties) {
        this.items = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * LUCKY_WHEEL minFullSpins.
     * @member {number} minFullSpins
     * @memberof LUCKY_WHEEL
     * @instance
     */
    LUCKY_WHEEL.prototype.minFullSpins = 0;

    /**
     * LUCKY_WHEEL maxFullSpins.
     * @member {number} maxFullSpins
     * @memberof LUCKY_WHEEL
     * @instance
     */
    LUCKY_WHEEL.prototype.maxFullSpins = 0;

    /**
     * LUCKY_WHEEL items.
     * @member {Array.<LUCKY_WHEEL.IItems>} items
     * @memberof LUCKY_WHEEL
     * @instance
     */
    LUCKY_WHEEL.prototype.items = $util.emptyArray;

    /**
     * LUCKY_WHEEL dailyLimit.
     * @member {number} dailyLimit
     * @memberof LUCKY_WHEEL
     * @instance
     */
    LUCKY_WHEEL.prototype.dailyLimit = 0;

    /**
     * Creates a new LUCKY_WHEEL instance using the specified properties.
     * @function create
     * @memberof LUCKY_WHEEL
     * @static
     * @param {ILUCKY_WHEEL=} [properties] Properties to set
     * @returns {LUCKY_WHEEL} LUCKY_WHEEL instance
     */
    LUCKY_WHEEL.create = function create(properties) {
        return new LUCKY_WHEEL(properties);
    };

    /**
     * Encodes the specified LUCKY_WHEEL message. Does not implicitly {@link LUCKY_WHEEL.verify|verify} messages.
     * @function encode
     * @memberof LUCKY_WHEEL
     * @static
     * @param {ILUCKY_WHEEL} message LUCKY_WHEEL message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LUCKY_WHEEL.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.minFullSpins != null && Object.hasOwnProperty.call(message, "minFullSpins"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.minFullSpins);
        if (message.maxFullSpins != null && Object.hasOwnProperty.call(message, "maxFullSpins"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.maxFullSpins);
        if (message.items != null && message.items.length)
            for (var i = 0; i < message.items.length; ++i)
                $root.LUCKY_WHEEL.Items.encode(message.items[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.dailyLimit != null && Object.hasOwnProperty.call(message, "dailyLimit"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.dailyLimit);
        return writer;
    };

    /**
     * Encodes the specified LUCKY_WHEEL message, length delimited. Does not implicitly {@link LUCKY_WHEEL.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LUCKY_WHEEL
     * @static
     * @param {ILUCKY_WHEEL} message LUCKY_WHEEL message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LUCKY_WHEEL.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LUCKY_WHEEL message from the specified reader or buffer.
     * @function decode
     * @memberof LUCKY_WHEEL
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LUCKY_WHEEL} LUCKY_WHEEL
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LUCKY_WHEEL.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LUCKY_WHEEL();
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
                    message.items.push($root.LUCKY_WHEEL.Items.decode(reader, reader.uint32()));
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
     * Decodes a LUCKY_WHEEL message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LUCKY_WHEEL
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LUCKY_WHEEL} LUCKY_WHEEL
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LUCKY_WHEEL.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LUCKY_WHEEL message.
     * @function verify
     * @memberof LUCKY_WHEEL
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LUCKY_WHEEL.verify = function verify(message) {
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
                var error = $root.LUCKY_WHEEL.Items.verify(message.items[i]);
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
     * Creates a LUCKY_WHEEL message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LUCKY_WHEEL
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LUCKY_WHEEL} LUCKY_WHEEL
     */
    LUCKY_WHEEL.fromObject = function fromObject(object) {
        if (object instanceof $root.LUCKY_WHEEL)
            return object;
        var message = new $root.LUCKY_WHEEL();
        if (object.minFullSpins != null)
            message.minFullSpins = object.minFullSpins | 0;
        if (object.maxFullSpins != null)
            message.maxFullSpins = object.maxFullSpins | 0;
        if (object.items) {
            if (!Array.isArray(object.items))
                throw TypeError(".LUCKY_WHEEL.items: array expected");
            message.items = [];
            for (var i = 0; i < object.items.length; ++i) {
                if (typeof object.items[i] !== "object")
                    throw TypeError(".LUCKY_WHEEL.items: object expected");
                message.items[i] = $root.LUCKY_WHEEL.Items.fromObject(object.items[i]);
            }
        }
        if (object.dailyLimit != null)
            message.dailyLimit = object.dailyLimit | 0;
        return message;
    };

    /**
     * Creates a plain object from a LUCKY_WHEEL message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LUCKY_WHEEL
     * @static
     * @param {LUCKY_WHEEL} message LUCKY_WHEEL
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LUCKY_WHEEL.toObject = function toObject(message, options) {
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
                object.items[j] = $root.LUCKY_WHEEL.Items.toObject(message.items[j], options);
        }
        if (message.dailyLimit != null && message.hasOwnProperty("dailyLimit"))
            object.dailyLimit = message.dailyLimit;
        return object;
    };

    /**
     * Converts this LUCKY_WHEEL to JSON.
     * @function toJSON
     * @memberof LUCKY_WHEEL
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LUCKY_WHEEL.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for LUCKY_WHEEL
     * @function getTypeUrl
     * @memberof LUCKY_WHEEL
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    LUCKY_WHEEL.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/LUCKY_WHEEL";
    };

    LUCKY_WHEEL.Items = (function() {

        /**
         * Properties of an Items.
         * @memberof LUCKY_WHEEL
         * @interface IItems
         * @property {string|null} [itemId] Items itemId
         * @property {number|null} [weight] Items weight
         * @property {number|null} [quantity] Items quantity
         */

        /**
         * Constructs a new Items.
         * @memberof LUCKY_WHEEL
         * @classdesc Represents an Items.
         * @implements IItems
         * @constructor
         * @param {LUCKY_WHEEL.IItems=} [properties] Properties to set
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
         * @memberof LUCKY_WHEEL.Items
         * @instance
         */
        Items.prototype.itemId = "";

        /**
         * Items weight.
         * @member {number} weight
         * @memberof LUCKY_WHEEL.Items
         * @instance
         */
        Items.prototype.weight = 0;

        /**
         * Items quantity.
         * @member {number} quantity
         * @memberof LUCKY_WHEEL.Items
         * @instance
         */
        Items.prototype.quantity = 0;

        /**
         * Creates a new Items instance using the specified properties.
         * @function create
         * @memberof LUCKY_WHEEL.Items
         * @static
         * @param {LUCKY_WHEEL.IItems=} [properties] Properties to set
         * @returns {LUCKY_WHEEL.Items} Items instance
         */
        Items.create = function create(properties) {
            return new Items(properties);
        };

        /**
         * Encodes the specified Items message. Does not implicitly {@link LUCKY_WHEEL.Items.verify|verify} messages.
         * @function encode
         * @memberof LUCKY_WHEEL.Items
         * @static
         * @param {LUCKY_WHEEL.IItems} message Items message or plain object to encode
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
         * Encodes the specified Items message, length delimited. Does not implicitly {@link LUCKY_WHEEL.Items.verify|verify} messages.
         * @function encodeDelimited
         * @memberof LUCKY_WHEEL.Items
         * @static
         * @param {LUCKY_WHEEL.IItems} message Items message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Items.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Items message from the specified reader or buffer.
         * @function decode
         * @memberof LUCKY_WHEEL.Items
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {LUCKY_WHEEL.Items} Items
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Items.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LUCKY_WHEEL.Items();
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
         * @memberof LUCKY_WHEEL.Items
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {LUCKY_WHEEL.Items} Items
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
         * @memberof LUCKY_WHEEL.Items
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
         * @memberof LUCKY_WHEEL.Items
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {LUCKY_WHEEL.Items} Items
         */
        Items.fromObject = function fromObject(object) {
            if (object instanceof $root.LUCKY_WHEEL.Items)
                return object;
            var message = new $root.LUCKY_WHEEL.Items();
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
         * @memberof LUCKY_WHEEL.Items
         * @static
         * @param {LUCKY_WHEEL.Items} message Items
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
         * @memberof LUCKY_WHEEL.Items
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Items.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Items
         * @function getTypeUrl
         * @memberof LUCKY_WHEEL.Items
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Items.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/LUCKY_WHEEL.Items";
        };

        return Items;
    })();

    return LUCKY_WHEEL;
})();

$root.PROGRESS_QUEST = (function() {

    /**
     * Properties of a PROGRESS_QUEST.
     * @exports IPROGRESS_QUEST
     * @interface IPROGRESS_QUEST
     * @property {Array.<PROGRESS_QUEST.IItems>|null} [items] PROGRESS_QUEST items
     */

    /**
     * Constructs a new PROGRESS_QUEST.
     * @exports PROGRESS_QUEST
     * @classdesc Represents a PROGRESS_QUEST.
     * @implements IPROGRESS_QUEST
     * @constructor
     * @param {IPROGRESS_QUEST=} [properties] Properties to set
     */
    function PROGRESS_QUEST(properties) {
        this.items = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PROGRESS_QUEST items.
     * @member {Array.<PROGRESS_QUEST.IItems>} items
     * @memberof PROGRESS_QUEST
     * @instance
     */
    PROGRESS_QUEST.prototype.items = $util.emptyArray;

    /**
     * Creates a new PROGRESS_QUEST instance using the specified properties.
     * @function create
     * @memberof PROGRESS_QUEST
     * @static
     * @param {IPROGRESS_QUEST=} [properties] Properties to set
     * @returns {PROGRESS_QUEST} PROGRESS_QUEST instance
     */
    PROGRESS_QUEST.create = function create(properties) {
        return new PROGRESS_QUEST(properties);
    };

    /**
     * Encodes the specified PROGRESS_QUEST message. Does not implicitly {@link PROGRESS_QUEST.verify|verify} messages.
     * @function encode
     * @memberof PROGRESS_QUEST
     * @static
     * @param {IPROGRESS_QUEST} message PROGRESS_QUEST message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PROGRESS_QUEST.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.items != null && message.items.length)
            for (var i = 0; i < message.items.length; ++i)
                $root.PROGRESS_QUEST.Items.encode(message.items[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified PROGRESS_QUEST message, length delimited. Does not implicitly {@link PROGRESS_QUEST.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PROGRESS_QUEST
     * @static
     * @param {IPROGRESS_QUEST} message PROGRESS_QUEST message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PROGRESS_QUEST.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PROGRESS_QUEST message from the specified reader or buffer.
     * @function decode
     * @memberof PROGRESS_QUEST
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PROGRESS_QUEST} PROGRESS_QUEST
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PROGRESS_QUEST.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PROGRESS_QUEST();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.items && message.items.length))
                        message.items = [];
                    message.items.push($root.PROGRESS_QUEST.Items.decode(reader, reader.uint32()));
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
     * Decodes a PROGRESS_QUEST message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PROGRESS_QUEST
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PROGRESS_QUEST} PROGRESS_QUEST
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PROGRESS_QUEST.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PROGRESS_QUEST message.
     * @function verify
     * @memberof PROGRESS_QUEST
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PROGRESS_QUEST.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.items != null && message.hasOwnProperty("items")) {
            if (!Array.isArray(message.items))
                return "items: array expected";
            for (var i = 0; i < message.items.length; ++i) {
                var error = $root.PROGRESS_QUEST.Items.verify(message.items[i]);
                if (error)
                    return "items." + error;
            }
        }
        return null;
    };

    /**
     * Creates a PROGRESS_QUEST message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PROGRESS_QUEST
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PROGRESS_QUEST} PROGRESS_QUEST
     */
    PROGRESS_QUEST.fromObject = function fromObject(object) {
        if (object instanceof $root.PROGRESS_QUEST)
            return object;
        var message = new $root.PROGRESS_QUEST();
        if (object.items) {
            if (!Array.isArray(object.items))
                throw TypeError(".PROGRESS_QUEST.items: array expected");
            message.items = [];
            for (var i = 0; i < object.items.length; ++i) {
                if (typeof object.items[i] !== "object")
                    throw TypeError(".PROGRESS_QUEST.items: object expected");
                message.items[i] = $root.PROGRESS_QUEST.Items.fromObject(object.items[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a PROGRESS_QUEST message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PROGRESS_QUEST
     * @static
     * @param {PROGRESS_QUEST} message PROGRESS_QUEST
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PROGRESS_QUEST.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.items = [];
        if (message.items && message.items.length) {
            object.items = [];
            for (var j = 0; j < message.items.length; ++j)
                object.items[j] = $root.PROGRESS_QUEST.Items.toObject(message.items[j], options);
        }
        return object;
    };

    /**
     * Converts this PROGRESS_QUEST to JSON.
     * @function toJSON
     * @memberof PROGRESS_QUEST
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PROGRESS_QUEST.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for PROGRESS_QUEST
     * @function getTypeUrl
     * @memberof PROGRESS_QUEST
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    PROGRESS_QUEST.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/PROGRESS_QUEST";
    };

    PROGRESS_QUEST.Items = (function() {

        /**
         * Properties of an Items.
         * @memberof PROGRESS_QUEST
         * @interface IItems
         * @property {number|null} [conditionReach] Items conditionReach
         * @property {string|null} [condition] Items condition
         * @property {string|null} [rewardId] Items rewardId
         * @property {string|null} [questName] Items questName
         * @property {number|null} [rewardQuantity] Items rewardQuantity
         * @property {string|null} [id] Items id
         * @property {number|null} [levelUnlock] Items levelUnlock
         */

        /**
         * Constructs a new Items.
         * @memberof PROGRESS_QUEST
         * @classdesc Represents an Items.
         * @implements IItems
         * @constructor
         * @param {PROGRESS_QUEST.IItems=} [properties] Properties to set
         */
        function Items(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Items conditionReach.
         * @member {number} conditionReach
         * @memberof PROGRESS_QUEST.Items
         * @instance
         */
        Items.prototype.conditionReach = 0;

        /**
         * Items condition.
         * @member {string} condition
         * @memberof PROGRESS_QUEST.Items
         * @instance
         */
        Items.prototype.condition = "";

        /**
         * Items rewardId.
         * @member {string} rewardId
         * @memberof PROGRESS_QUEST.Items
         * @instance
         */
        Items.prototype.rewardId = "";

        /**
         * Items questName.
         * @member {string} questName
         * @memberof PROGRESS_QUEST.Items
         * @instance
         */
        Items.prototype.questName = "";

        /**
         * Items rewardQuantity.
         * @member {number} rewardQuantity
         * @memberof PROGRESS_QUEST.Items
         * @instance
         */
        Items.prototype.rewardQuantity = 0;

        /**
         * Items id.
         * @member {string} id
         * @memberof PROGRESS_QUEST.Items
         * @instance
         */
        Items.prototype.id = "";

        /**
         * Items levelUnlock.
         * @member {number} levelUnlock
         * @memberof PROGRESS_QUEST.Items
         * @instance
         */
        Items.prototype.levelUnlock = 0;

        /**
         * Creates a new Items instance using the specified properties.
         * @function create
         * @memberof PROGRESS_QUEST.Items
         * @static
         * @param {PROGRESS_QUEST.IItems=} [properties] Properties to set
         * @returns {PROGRESS_QUEST.Items} Items instance
         */
        Items.create = function create(properties) {
            return new Items(properties);
        };

        /**
         * Encodes the specified Items message. Does not implicitly {@link PROGRESS_QUEST.Items.verify|verify} messages.
         * @function encode
         * @memberof PROGRESS_QUEST.Items
         * @static
         * @param {PROGRESS_QUEST.IItems} message Items message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Items.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.conditionReach != null && Object.hasOwnProperty.call(message, "conditionReach"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.conditionReach);
            if (message.condition != null && Object.hasOwnProperty.call(message, "condition"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.condition);
            if (message.rewardId != null && Object.hasOwnProperty.call(message, "rewardId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.rewardId);
            if (message.questName != null && Object.hasOwnProperty.call(message, "questName"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.questName);
            if (message.rewardQuantity != null && Object.hasOwnProperty.call(message, "rewardQuantity"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.rewardQuantity);
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.id);
            if (message.levelUnlock != null && Object.hasOwnProperty.call(message, "levelUnlock"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.levelUnlock);
            return writer;
        };

        /**
         * Encodes the specified Items message, length delimited. Does not implicitly {@link PROGRESS_QUEST.Items.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PROGRESS_QUEST.Items
         * @static
         * @param {PROGRESS_QUEST.IItems} message Items message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Items.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Items message from the specified reader or buffer.
         * @function decode
         * @memberof PROGRESS_QUEST.Items
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PROGRESS_QUEST.Items} Items
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Items.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PROGRESS_QUEST.Items();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.conditionReach = reader.int32();
                        break;
                    }
                case 2: {
                        message.condition = reader.string();
                        break;
                    }
                case 3: {
                        message.rewardId = reader.string();
                        break;
                    }
                case 4: {
                        message.questName = reader.string();
                        break;
                    }
                case 5: {
                        message.rewardQuantity = reader.int32();
                        break;
                    }
                case 6: {
                        message.id = reader.string();
                        break;
                    }
                case 7: {
                        message.levelUnlock = reader.int32();
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
         * @memberof PROGRESS_QUEST.Items
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PROGRESS_QUEST.Items} Items
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
         * @memberof PROGRESS_QUEST.Items
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Items.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.conditionReach != null && message.hasOwnProperty("conditionReach"))
                if (!$util.isInteger(message.conditionReach))
                    return "conditionReach: integer expected";
            if (message.condition != null && message.hasOwnProperty("condition"))
                if (!$util.isString(message.condition))
                    return "condition: string expected";
            if (message.rewardId != null && message.hasOwnProperty("rewardId"))
                if (!$util.isString(message.rewardId))
                    return "rewardId: string expected";
            if (message.questName != null && message.hasOwnProperty("questName"))
                if (!$util.isString(message.questName))
                    return "questName: string expected";
            if (message.rewardQuantity != null && message.hasOwnProperty("rewardQuantity"))
                if (!$util.isInteger(message.rewardQuantity))
                    return "rewardQuantity: integer expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.levelUnlock != null && message.hasOwnProperty("levelUnlock"))
                if (!$util.isInteger(message.levelUnlock))
                    return "levelUnlock: integer expected";
            return null;
        };

        /**
         * Creates an Items message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PROGRESS_QUEST.Items
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PROGRESS_QUEST.Items} Items
         */
        Items.fromObject = function fromObject(object) {
            if (object instanceof $root.PROGRESS_QUEST.Items)
                return object;
            var message = new $root.PROGRESS_QUEST.Items();
            if (object.conditionReach != null)
                message.conditionReach = object.conditionReach | 0;
            if (object.condition != null)
                message.condition = String(object.condition);
            if (object.rewardId != null)
                message.rewardId = String(object.rewardId);
            if (object.questName != null)
                message.questName = String(object.questName);
            if (object.rewardQuantity != null)
                message.rewardQuantity = object.rewardQuantity | 0;
            if (object.id != null)
                message.id = String(object.id);
            if (object.levelUnlock != null)
                message.levelUnlock = object.levelUnlock | 0;
            return message;
        };

        /**
         * Creates a plain object from an Items message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PROGRESS_QUEST.Items
         * @static
         * @param {PROGRESS_QUEST.Items} message Items
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Items.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.conditionReach = 0;
                object.condition = "";
                object.rewardId = "";
                object.questName = "";
                object.rewardQuantity = 0;
                object.id = "";
                object.levelUnlock = 0;
            }
            if (message.conditionReach != null && message.hasOwnProperty("conditionReach"))
                object.conditionReach = message.conditionReach;
            if (message.condition != null && message.hasOwnProperty("condition"))
                object.condition = message.condition;
            if (message.rewardId != null && message.hasOwnProperty("rewardId"))
                object.rewardId = message.rewardId;
            if (message.questName != null && message.hasOwnProperty("questName"))
                object.questName = message.questName;
            if (message.rewardQuantity != null && message.hasOwnProperty("rewardQuantity"))
                object.rewardQuantity = message.rewardQuantity;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.levelUnlock != null && message.hasOwnProperty("levelUnlock"))
                object.levelUnlock = message.levelUnlock;
            return object;
        };

        /**
         * Converts this Items to JSON.
         * @function toJSON
         * @memberof PROGRESS_QUEST.Items
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Items.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Items
         * @function getTypeUrl
         * @memberof PROGRESS_QUEST.Items
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Items.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/PROGRESS_QUEST.Items";
        };

        return Items;
    })();

    return PROGRESS_QUEST;
})();

$root.TEST = (function() {

    /**
     * Properties of a TEST.
     * @exports ITEST
     * @interface ITEST
     * @property {string|null} [name] TEST name
     * @property {string|null} [image] TEST image
     */

    /**
     * Constructs a new TEST.
     * @exports TEST
     * @classdesc Represents a TEST.
     * @implements ITEST
     * @constructor
     * @param {ITEST=} [properties] Properties to set
     */
    function TEST(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TEST name.
     * @member {string} name
     * @memberof TEST
     * @instance
     */
    TEST.prototype.name = "";

    /**
     * TEST image.
     * @member {string} image
     * @memberof TEST
     * @instance
     */
    TEST.prototype.image = "";

    /**
     * Creates a new TEST instance using the specified properties.
     * @function create
     * @memberof TEST
     * @static
     * @param {ITEST=} [properties] Properties to set
     * @returns {TEST} TEST instance
     */
    TEST.create = function create(properties) {
        return new TEST(properties);
    };

    /**
     * Encodes the specified TEST message. Does not implicitly {@link TEST.verify|verify} messages.
     * @function encode
     * @memberof TEST
     * @static
     * @param {ITEST} message TEST message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TEST.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        if (message.image != null && Object.hasOwnProperty.call(message, "image"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.image);
        return writer;
    };

    /**
     * Encodes the specified TEST message, length delimited. Does not implicitly {@link TEST.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TEST
     * @static
     * @param {ITEST} message TEST message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TEST.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TEST message from the specified reader or buffer.
     * @function decode
     * @memberof TEST
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TEST} TEST
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TEST.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TEST();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.name = reader.string();
                    break;
                }
            case 2: {
                    message.image = reader.string();
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
     * Decodes a TEST message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TEST
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TEST} TEST
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TEST.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TEST message.
     * @function verify
     * @memberof TEST
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TEST.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.image != null && message.hasOwnProperty("image"))
            if (!$util.isString(message.image))
                return "image: string expected";
        return null;
    };

    /**
     * Creates a TEST message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TEST
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TEST} TEST
     */
    TEST.fromObject = function fromObject(object) {
        if (object instanceof $root.TEST)
            return object;
        var message = new $root.TEST();
        if (object.name != null)
            message.name = String(object.name);
        if (object.image != null)
            message.image = String(object.image);
        return message;
    };

    /**
     * Creates a plain object from a TEST message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TEST
     * @static
     * @param {TEST} message TEST
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TEST.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.name = "";
            object.image = "";
        }
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.image != null && message.hasOwnProperty("image"))
            object.image = message.image;
        return object;
    };

    /**
     * Converts this TEST to JSON.
     * @function toJSON
     * @memberof TEST
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TEST.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for TEST
     * @function getTypeUrl
     * @memberof TEST
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    TEST.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/TEST";
    };

    return TEST;
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

    GameScripts.Test = (function() {

        /**
         * Constructs a new Test service.
         * @memberof GameScripts
         * @classdesc Represents a Test
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Test(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Test.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Test;

        /**
         * Creates new Test service using the specified rpc implementation.
         * @function create
         * @memberof GameScripts.Test
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Test} RPC service. Useful where requests and/or responses are streamed.
         */
        Test.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link GameScripts.Test#helloWorld}.
         * @memberof GameScripts.Test
         * @typedef helloWorldCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {TestHelloWorldRes} [response] TestHelloWorldRes
         */

        /**
         * Calls helloWorld.
         * @function helloWorld
         * @memberof GameScripts.Test
         * @instance
         * @param {IEmpty} request Empty message or plain object
         * @param {GameScripts.Test.helloWorldCallback} callback Node-style callback called with the error, if any, and TestHelloWorldRes
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Test.prototype.helloWorld = function helloWorld(request, callback) {
            return this.rpcCall(helloWorld, $root.Empty, $root.TestHelloWorldRes, request, callback);
        }, "name", { value: "helloWorld" });

        /**
         * Calls helloWorld.
         * @function helloWorld
         * @memberof GameScripts.Test
         * @instance
         * @param {IEmpty} request Empty message or plain object
         * @returns {Promise<TestHelloWorldRes>} Promise
         * @variation 2
         */

        return Test;
    })();

    GameScripts.Lucky_Wheel = (function() {

        /**
         * Constructs a new Lucky_Wheel service.
         * @memberof GameScripts
         * @classdesc Represents a Lucky_Wheel
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Lucky_Wheel(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Lucky_Wheel.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Lucky_Wheel;

        /**
         * Creates new Lucky_Wheel service using the specified rpc implementation.
         * @function create
         * @memberof GameScripts.Lucky_Wheel
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Lucky_Wheel} RPC service. Useful where requests and/or responses are streamed.
         */
        Lucky_Wheel.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link GameScripts.Lucky_Wheel#claimItem}.
         * @memberof GameScripts.Lucky_Wheel
         * @typedef claimItemCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {LuckyWheelClaimItemOutput} [response] LuckyWheelClaimItemOutput
         */

        /**
         * Calls claimItem.
         * @function claimItem
         * @memberof GameScripts.Lucky_Wheel
         * @instance
         * @param {IEmpty} request Empty message or plain object
         * @param {GameScripts.Lucky_Wheel.claimItemCallback} callback Node-style callback called with the error, if any, and LuckyWheelClaimItemOutput
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Lucky_Wheel.prototype.claimItem = function claimItem(request, callback) {
            return this.rpcCall(claimItem, $root.Empty, $root.LuckyWheelClaimItemOutput, request, callback);
        }, "name", { value: "claimItem" });

        /**
         * Calls claimItem.
         * @function claimItem
         * @memberof GameScripts.Lucky_Wheel
         * @instance
         * @param {IEmpty} request Empty message or plain object
         * @returns {Promise<LuckyWheelClaimItemOutput>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link GameScripts.Lucky_Wheel#canClaimItem}.
         * @memberof GameScripts.Lucky_Wheel
         * @typedef canClaimItemCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {LuckyWheelCanClaimOutput} [response] LuckyWheelCanClaimOutput
         */

        /**
         * Calls canClaimItem.
         * @function canClaimItem
         * @memberof GameScripts.Lucky_Wheel
         * @instance
         * @param {IEmpty} request Empty message or plain object
         * @param {GameScripts.Lucky_Wheel.canClaimItemCallback} callback Node-style callback called with the error, if any, and LuckyWheelCanClaimOutput
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Lucky_Wheel.prototype.canClaimItem = function canClaimItem(request, callback) {
            return this.rpcCall(canClaimItem, $root.Empty, $root.LuckyWheelCanClaimOutput, request, callback);
        }, "name", { value: "canClaimItem" });

        /**
         * Calls canClaimItem.
         * @function canClaimItem
         * @memberof GameScripts.Lucky_Wheel
         * @instance
         * @param {IEmpty} request Empty message or plain object
         * @returns {Promise<LuckyWheelCanClaimOutput>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link GameScripts.Lucky_Wheel#getList}.
         * @memberof GameScripts.Lucky_Wheel
         * @typedef getListCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {LuckyWheel} [response] LuckyWheel
         */

        /**
         * Calls getList.
         * @function getList
         * @memberof GameScripts.Lucky_Wheel
         * @instance
         * @param {IEmpty} request Empty message or plain object
         * @param {GameScripts.Lucky_Wheel.getListCallback} callback Node-style callback called with the error, if any, and LuckyWheel
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Lucky_Wheel.prototype.getList = function getList(request, callback) {
            return this.rpcCall(getList, $root.Empty, $root.LuckyWheel, request, callback);
        }, "name", { value: "getList" });

        /**
         * Calls getList.
         * @function getList
         * @memberof GameScripts.Lucky_Wheel
         * @instance
         * @param {IEmpty} request Empty message or plain object
         * @returns {Promise<LuckyWheel>} Promise
         * @variation 2
         */

        return Lucky_Wheel;
    })();

    GameScripts.Daily_Rewards = (function() {

        /**
         * Constructs a new Daily_Rewards service.
         * @memberof GameScripts
         * @classdesc Represents a Daily_Rewards
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Daily_Rewards(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Daily_Rewards.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Daily_Rewards;

        /**
         * Creates new Daily_Rewards service using the specified rpc implementation.
         * @function create
         * @memberof GameScripts.Daily_Rewards
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Daily_Rewards} RPC service. Useful where requests and/or responses are streamed.
         */
        Daily_Rewards.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link GameScripts.Daily_Rewards#canClaimRewards}.
         * @memberof GameScripts.Daily_Rewards
         * @typedef canClaimRewardsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {DailyRewardsCanClaimRewardOutput} [response] DailyRewardsCanClaimRewardOutput
         */

        /**
         * Calls canClaimRewards.
         * @function canClaimRewards
         * @memberof GameScripts.Daily_Rewards
         * @instance
         * @param {IEmpty} request Empty message or plain object
         * @param {GameScripts.Daily_Rewards.canClaimRewardsCallback} callback Node-style callback called with the error, if any, and DailyRewardsCanClaimRewardOutput
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Daily_Rewards.prototype.canClaimRewards = function canClaimRewards(request, callback) {
            return this.rpcCall(canClaimRewards, $root.Empty, $root.DailyRewardsCanClaimRewardOutput, request, callback);
        }, "name", { value: "canClaimRewards" });

        /**
         * Calls canClaimRewards.
         * @function canClaimRewards
         * @memberof GameScripts.Daily_Rewards
         * @instance
         * @param {IEmpty} request Empty message or plain object
         * @returns {Promise<DailyRewardsCanClaimRewardOutput>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link GameScripts.Daily_Rewards#claimRewards}.
         * @memberof GameScripts.Daily_Rewards
         * @typedef claimRewardsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {DailyRewardsClaimRewardsOutput} [response] DailyRewardsClaimRewardsOutput
         */

        /**
         * Calls claimRewards.
         * @function claimRewards
         * @memberof GameScripts.Daily_Rewards
         * @instance
         * @param {IEmpty} request Empty message or plain object
         * @param {GameScripts.Daily_Rewards.claimRewardsCallback} callback Node-style callback called with the error, if any, and DailyRewardsClaimRewardsOutput
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Daily_Rewards.prototype.claimRewards = function claimRewards(request, callback) {
            return this.rpcCall(claimRewards, $root.Empty, $root.DailyRewardsClaimRewardsOutput, request, callback);
        }, "name", { value: "claimRewards" });

        /**
         * Calls claimRewards.
         * @function claimRewards
         * @memberof GameScripts.Daily_Rewards
         * @instance
         * @param {IEmpty} request Empty message or plain object
         * @returns {Promise<DailyRewardsClaimRewardsOutput>} Promise
         * @variation 2
         */

        return Daily_Rewards;
    })();

    GameScripts.Daily_Quest = (function() {

        /**
         * Constructs a new Daily_Quest service.
         * @memberof GameScripts
         * @classdesc Represents a Daily_Quest
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Daily_Quest(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Daily_Quest.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Daily_Quest;

        /**
         * Creates new Daily_Quest service using the specified rpc implementation.
         * @function create
         * @memberof GameScripts.Daily_Quest
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Daily_Quest} RPC service. Useful where requests and/or responses are streamed.
         */
        Daily_Quest.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link GameScripts.Daily_Quest#getList}.
         * @memberof GameScripts.Daily_Quest
         * @typedef getListCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {DailyQuestOutput} [response] DailyQuestOutput
         */

        /**
         * Calls getList.
         * @function getList
         * @memberof GameScripts.Daily_Quest
         * @instance
         * @param {IEmpty} request Empty message or plain object
         * @param {GameScripts.Daily_Quest.getListCallback} callback Node-style callback called with the error, if any, and DailyQuestOutput
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Daily_Quest.prototype.getList = function getList(request, callback) {
            return this.rpcCall(getList, $root.Empty, $root.DailyQuestOutput, request, callback);
        }, "name", { value: "getList" });

        /**
         * Calls getList.
         * @function getList
         * @memberof GameScripts.Daily_Quest
         * @instance
         * @param {IEmpty} request Empty message or plain object
         * @returns {Promise<DailyQuestOutput>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link GameScripts.Daily_Quest#updateQuest}.
         * @memberof GameScripts.Daily_Quest
         * @typedef updateQuestCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {DailyQuestUpdateQuestOutput} [response] DailyQuestUpdateQuestOutput
         */

        /**
         * Calls updateQuest.
         * @function updateQuest
         * @memberof GameScripts.Daily_Quest
         * @instance
         * @param {IDailyQuestUpdateQuestInput} request DailyQuestUpdateQuestInput message or plain object
         * @param {GameScripts.Daily_Quest.updateQuestCallback} callback Node-style callback called with the error, if any, and DailyQuestUpdateQuestOutput
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Daily_Quest.prototype.updateQuest = function updateQuest(request, callback) {
            return this.rpcCall(updateQuest, $root.DailyQuestUpdateQuestInput, $root.DailyQuestUpdateQuestOutput, request, callback);
        }, "name", { value: "updateQuest" });

        /**
         * Calls updateQuest.
         * @function updateQuest
         * @memberof GameScripts.Daily_Quest
         * @instance
         * @param {IDailyQuestUpdateQuestInput} request DailyQuestUpdateQuestInput message or plain object
         * @returns {Promise<DailyQuestUpdateQuestOutput>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link GameScripts.Daily_Quest#claimQuest}.
         * @memberof GameScripts.Daily_Quest
         * @typedef claimQuestCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {DailyQuestClaimQuestOutput} [response] DailyQuestClaimQuestOutput
         */

        /**
         * Calls claimQuest.
         * @function claimQuest
         * @memberof GameScripts.Daily_Quest
         * @instance
         * @param {IDailyQuestClaimQuestInput} request DailyQuestClaimQuestInput message or plain object
         * @param {GameScripts.Daily_Quest.claimQuestCallback} callback Node-style callback called with the error, if any, and DailyQuestClaimQuestOutput
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Daily_Quest.prototype.claimQuest = function claimQuest(request, callback) {
            return this.rpcCall(claimQuest, $root.DailyQuestClaimQuestInput, $root.DailyQuestClaimQuestOutput, request, callback);
        }, "name", { value: "claimQuest" });

        /**
         * Calls claimQuest.
         * @function claimQuest
         * @memberof GameScripts.Daily_Quest
         * @instance
         * @param {IDailyQuestClaimQuestInput} request DailyQuestClaimQuestInput message or plain object
         * @returns {Promise<DailyQuestClaimQuestOutput>} Promise
         * @variation 2
         */

        return Daily_Quest;
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

$root.DailyQuestOutput = (function() {

    /**
     * Properties of a DailyQuestOutput.
     * @exports IDailyQuestOutput
     * @interface IDailyQuestOutput
     * @property {Array.<DailyQuestOutput.IDailyquest>|null} [dailyQuest] DailyQuestOutput dailyQuest
     */

    /**
     * Constructs a new DailyQuestOutput.
     * @exports DailyQuestOutput
     * @classdesc Represents a DailyQuestOutput.
     * @implements IDailyQuestOutput
     * @constructor
     * @param {IDailyQuestOutput=} [properties] Properties to set
     */
    function DailyQuestOutput(properties) {
        this.dailyQuest = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DailyQuestOutput dailyQuest.
     * @member {Array.<DailyQuestOutput.IDailyquest>} dailyQuest
     * @memberof DailyQuestOutput
     * @instance
     */
    DailyQuestOutput.prototype.dailyQuest = $util.emptyArray;

    /**
     * Creates a new DailyQuestOutput instance using the specified properties.
     * @function create
     * @memberof DailyQuestOutput
     * @static
     * @param {IDailyQuestOutput=} [properties] Properties to set
     * @returns {DailyQuestOutput} DailyQuestOutput instance
     */
    DailyQuestOutput.create = function create(properties) {
        return new DailyQuestOutput(properties);
    };

    /**
     * Encodes the specified DailyQuestOutput message. Does not implicitly {@link DailyQuestOutput.verify|verify} messages.
     * @function encode
     * @memberof DailyQuestOutput
     * @static
     * @param {IDailyQuestOutput} message DailyQuestOutput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DailyQuestOutput.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.dailyQuest != null && message.dailyQuest.length)
            for (var i = 0; i < message.dailyQuest.length; ++i)
                $root.DailyQuestOutput.Dailyquest.encode(message.dailyQuest[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified DailyQuestOutput message, length delimited. Does not implicitly {@link DailyQuestOutput.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DailyQuestOutput
     * @static
     * @param {IDailyQuestOutput} message DailyQuestOutput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DailyQuestOutput.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DailyQuestOutput message from the specified reader or buffer.
     * @function decode
     * @memberof DailyQuestOutput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DailyQuestOutput} DailyQuestOutput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DailyQuestOutput.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DailyQuestOutput();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.dailyQuest && message.dailyQuest.length))
                        message.dailyQuest = [];
                    message.dailyQuest.push($root.DailyQuestOutput.Dailyquest.decode(reader, reader.uint32()));
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
     * Decodes a DailyQuestOutput message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DailyQuestOutput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DailyQuestOutput} DailyQuestOutput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DailyQuestOutput.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DailyQuestOutput message.
     * @function verify
     * @memberof DailyQuestOutput
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DailyQuestOutput.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.dailyQuest != null && message.hasOwnProperty("dailyQuest")) {
            if (!Array.isArray(message.dailyQuest))
                return "dailyQuest: array expected";
            for (var i = 0; i < message.dailyQuest.length; ++i) {
                var error = $root.DailyQuestOutput.Dailyquest.verify(message.dailyQuest[i]);
                if (error)
                    return "dailyQuest." + error;
            }
        }
        return null;
    };

    /**
     * Creates a DailyQuestOutput message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DailyQuestOutput
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DailyQuestOutput} DailyQuestOutput
     */
    DailyQuestOutput.fromObject = function fromObject(object) {
        if (object instanceof $root.DailyQuestOutput)
            return object;
        var message = new $root.DailyQuestOutput();
        if (object.dailyQuest) {
            if (!Array.isArray(object.dailyQuest))
                throw TypeError(".DailyQuestOutput.dailyQuest: array expected");
            message.dailyQuest = [];
            for (var i = 0; i < object.dailyQuest.length; ++i) {
                if (typeof object.dailyQuest[i] !== "object")
                    throw TypeError(".DailyQuestOutput.dailyQuest: object expected");
                message.dailyQuest[i] = $root.DailyQuestOutput.Dailyquest.fromObject(object.dailyQuest[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a DailyQuestOutput message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DailyQuestOutput
     * @static
     * @param {DailyQuestOutput} message DailyQuestOutput
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DailyQuestOutput.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.dailyQuest = [];
        if (message.dailyQuest && message.dailyQuest.length) {
            object.dailyQuest = [];
            for (var j = 0; j < message.dailyQuest.length; ++j)
                object.dailyQuest[j] = $root.DailyQuestOutput.Dailyquest.toObject(message.dailyQuest[j], options);
        }
        return object;
    };

    /**
     * Converts this DailyQuestOutput to JSON.
     * @function toJSON
     * @memberof DailyQuestOutput
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DailyQuestOutput.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for DailyQuestOutput
     * @function getTypeUrl
     * @memberof DailyQuestOutput
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    DailyQuestOutput.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/DailyQuestOutput";
    };

    DailyQuestOutput.Dailyquest = (function() {

        /**
         * Properties of a Dailyquest.
         * @memberof DailyQuestOutput
         * @interface IDailyquest
         * @property {number|null} [conditionReach] Dailyquest conditionReach
         * @property {number|null} [rewardQuantity] Dailyquest rewardQuantity
         * @property {string|null} [condition] Dailyquest condition
         * @property {string|null} [rewardId] Dailyquest rewardId
         * @property {string|null} [id] Dailyquest id
         * @property {string|null} [questName] Dailyquest questName
         * @property {number|null} [progress] Dailyquest progress
         * @property {boolean|null} [canClaim] Dailyquest canClaim
         */

        /**
         * Constructs a new Dailyquest.
         * @memberof DailyQuestOutput
         * @classdesc Represents a Dailyquest.
         * @implements IDailyquest
         * @constructor
         * @param {DailyQuestOutput.IDailyquest=} [properties] Properties to set
         */
        function Dailyquest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Dailyquest conditionReach.
         * @member {number} conditionReach
         * @memberof DailyQuestOutput.Dailyquest
         * @instance
         */
        Dailyquest.prototype.conditionReach = 0;

        /**
         * Dailyquest rewardQuantity.
         * @member {number} rewardQuantity
         * @memberof DailyQuestOutput.Dailyquest
         * @instance
         */
        Dailyquest.prototype.rewardQuantity = 0;

        /**
         * Dailyquest condition.
         * @member {string} condition
         * @memberof DailyQuestOutput.Dailyquest
         * @instance
         */
        Dailyquest.prototype.condition = "";

        /**
         * Dailyquest rewardId.
         * @member {string} rewardId
         * @memberof DailyQuestOutput.Dailyquest
         * @instance
         */
        Dailyquest.prototype.rewardId = "";

        /**
         * Dailyquest id.
         * @member {string} id
         * @memberof DailyQuestOutput.Dailyquest
         * @instance
         */
        Dailyquest.prototype.id = "";

        /**
         * Dailyquest questName.
         * @member {string} questName
         * @memberof DailyQuestOutput.Dailyquest
         * @instance
         */
        Dailyquest.prototype.questName = "";

        /**
         * Dailyquest progress.
         * @member {number} progress
         * @memberof DailyQuestOutput.Dailyquest
         * @instance
         */
        Dailyquest.prototype.progress = 0;

        /**
         * Dailyquest canClaim.
         * @member {boolean} canClaim
         * @memberof DailyQuestOutput.Dailyquest
         * @instance
         */
        Dailyquest.prototype.canClaim = false;

        /**
         * Creates a new Dailyquest instance using the specified properties.
         * @function create
         * @memberof DailyQuestOutput.Dailyquest
         * @static
         * @param {DailyQuestOutput.IDailyquest=} [properties] Properties to set
         * @returns {DailyQuestOutput.Dailyquest} Dailyquest instance
         */
        Dailyquest.create = function create(properties) {
            return new Dailyquest(properties);
        };

        /**
         * Encodes the specified Dailyquest message. Does not implicitly {@link DailyQuestOutput.Dailyquest.verify|verify} messages.
         * @function encode
         * @memberof DailyQuestOutput.Dailyquest
         * @static
         * @param {DailyQuestOutput.IDailyquest} message Dailyquest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Dailyquest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.conditionReach != null && Object.hasOwnProperty.call(message, "conditionReach"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.conditionReach);
            if (message.rewardQuantity != null && Object.hasOwnProperty.call(message, "rewardQuantity"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.rewardQuantity);
            if (message.condition != null && Object.hasOwnProperty.call(message, "condition"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.condition);
            if (message.rewardId != null && Object.hasOwnProperty.call(message, "rewardId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.rewardId);
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.id);
            if (message.questName != null && Object.hasOwnProperty.call(message, "questName"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.questName);
            if (message.progress != null && Object.hasOwnProperty.call(message, "progress"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.progress);
            if (message.canClaim != null && Object.hasOwnProperty.call(message, "canClaim"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.canClaim);
            return writer;
        };

        /**
         * Encodes the specified Dailyquest message, length delimited. Does not implicitly {@link DailyQuestOutput.Dailyquest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof DailyQuestOutput.Dailyquest
         * @static
         * @param {DailyQuestOutput.IDailyquest} message Dailyquest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Dailyquest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Dailyquest message from the specified reader or buffer.
         * @function decode
         * @memberof DailyQuestOutput.Dailyquest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {DailyQuestOutput.Dailyquest} Dailyquest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Dailyquest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DailyQuestOutput.Dailyquest();
            while (reader.pos < end) {
                var tag = reader.uint32();
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

        /**
         * Decodes a Dailyquest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof DailyQuestOutput.Dailyquest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {DailyQuestOutput.Dailyquest} Dailyquest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Dailyquest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Dailyquest message.
         * @function verify
         * @memberof DailyQuestOutput.Dailyquest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
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

        /**
         * Creates a Dailyquest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof DailyQuestOutput.Dailyquest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {DailyQuestOutput.Dailyquest} Dailyquest
         */
        Dailyquest.fromObject = function fromObject(object) {
            if (object instanceof $root.DailyQuestOutput.Dailyquest)
                return object;
            var message = new $root.DailyQuestOutput.Dailyquest();
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

        /**
         * Creates a plain object from a Dailyquest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof DailyQuestOutput.Dailyquest
         * @static
         * @param {DailyQuestOutput.Dailyquest} message Dailyquest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Dailyquest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
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

        /**
         * Converts this Dailyquest to JSON.
         * @function toJSON
         * @memberof DailyQuestOutput.Dailyquest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Dailyquest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Dailyquest
         * @function getTypeUrl
         * @memberof DailyQuestOutput.Dailyquest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Dailyquest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/DailyQuestOutput.Dailyquest";
        };

        return Dailyquest;
    })();

    return DailyQuestOutput;
})();

$root.DailyQuestUpdateQuestInput = (function() {

    /**
     * Properties of a DailyQuestUpdateQuestInput.
     * @exports IDailyQuestUpdateQuestInput
     * @interface IDailyQuestUpdateQuestInput
     * @property {Array.<DailyQuestUpdateQuestInput.IItems>|null} [items] DailyQuestUpdateQuestInput items
     */

    /**
     * Constructs a new DailyQuestUpdateQuestInput.
     * @exports DailyQuestUpdateQuestInput
     * @classdesc Represents a DailyQuestUpdateQuestInput.
     * @implements IDailyQuestUpdateQuestInput
     * @constructor
     * @param {IDailyQuestUpdateQuestInput=} [properties] Properties to set
     */
    function DailyQuestUpdateQuestInput(properties) {
        this.items = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DailyQuestUpdateQuestInput items.
     * @member {Array.<DailyQuestUpdateQuestInput.IItems>} items
     * @memberof DailyQuestUpdateQuestInput
     * @instance
     */
    DailyQuestUpdateQuestInput.prototype.items = $util.emptyArray;

    /**
     * Creates a new DailyQuestUpdateQuestInput instance using the specified properties.
     * @function create
     * @memberof DailyQuestUpdateQuestInput
     * @static
     * @param {IDailyQuestUpdateQuestInput=} [properties] Properties to set
     * @returns {DailyQuestUpdateQuestInput} DailyQuestUpdateQuestInput instance
     */
    DailyQuestUpdateQuestInput.create = function create(properties) {
        return new DailyQuestUpdateQuestInput(properties);
    };

    /**
     * Encodes the specified DailyQuestUpdateQuestInput message. Does not implicitly {@link DailyQuestUpdateQuestInput.verify|verify} messages.
     * @function encode
     * @memberof DailyQuestUpdateQuestInput
     * @static
     * @param {IDailyQuestUpdateQuestInput} message DailyQuestUpdateQuestInput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DailyQuestUpdateQuestInput.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.items != null && message.items.length)
            for (var i = 0; i < message.items.length; ++i)
                $root.DailyQuestUpdateQuestInput.Items.encode(message.items[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified DailyQuestUpdateQuestInput message, length delimited. Does not implicitly {@link DailyQuestUpdateQuestInput.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DailyQuestUpdateQuestInput
     * @static
     * @param {IDailyQuestUpdateQuestInput} message DailyQuestUpdateQuestInput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DailyQuestUpdateQuestInput.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DailyQuestUpdateQuestInput message from the specified reader or buffer.
     * @function decode
     * @memberof DailyQuestUpdateQuestInput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DailyQuestUpdateQuestInput} DailyQuestUpdateQuestInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DailyQuestUpdateQuestInput.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DailyQuestUpdateQuestInput();
        while (reader.pos < end) {
            var tag = reader.uint32();
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

    /**
     * Decodes a DailyQuestUpdateQuestInput message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DailyQuestUpdateQuestInput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DailyQuestUpdateQuestInput} DailyQuestUpdateQuestInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DailyQuestUpdateQuestInput.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DailyQuestUpdateQuestInput message.
     * @function verify
     * @memberof DailyQuestUpdateQuestInput
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DailyQuestUpdateQuestInput.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.items != null && message.hasOwnProperty("items")) {
            if (!Array.isArray(message.items))
                return "items: array expected";
            for (var i = 0; i < message.items.length; ++i) {
                var error = $root.DailyQuestUpdateQuestInput.Items.verify(message.items[i]);
                if (error)
                    return "items." + error;
            }
        }
        return null;
    };

    /**
     * Creates a DailyQuestUpdateQuestInput message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DailyQuestUpdateQuestInput
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DailyQuestUpdateQuestInput} DailyQuestUpdateQuestInput
     */
    DailyQuestUpdateQuestInput.fromObject = function fromObject(object) {
        if (object instanceof $root.DailyQuestUpdateQuestInput)
            return object;
        var message = new $root.DailyQuestUpdateQuestInput();
        if (object.items) {
            if (!Array.isArray(object.items))
                throw TypeError(".DailyQuestUpdateQuestInput.items: array expected");
            message.items = [];
            for (var i = 0; i < object.items.length; ++i) {
                if (typeof object.items[i] !== "object")
                    throw TypeError(".DailyQuestUpdateQuestInput.items: object expected");
                message.items[i] = $root.DailyQuestUpdateQuestInput.Items.fromObject(object.items[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a DailyQuestUpdateQuestInput message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DailyQuestUpdateQuestInput
     * @static
     * @param {DailyQuestUpdateQuestInput} message DailyQuestUpdateQuestInput
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DailyQuestUpdateQuestInput.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.items = [];
        if (message.items && message.items.length) {
            object.items = [];
            for (var j = 0; j < message.items.length; ++j)
                object.items[j] = $root.DailyQuestUpdateQuestInput.Items.toObject(message.items[j], options);
        }
        return object;
    };

    /**
     * Converts this DailyQuestUpdateQuestInput to JSON.
     * @function toJSON
     * @memberof DailyQuestUpdateQuestInput
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DailyQuestUpdateQuestInput.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for DailyQuestUpdateQuestInput
     * @function getTypeUrl
     * @memberof DailyQuestUpdateQuestInput
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    DailyQuestUpdateQuestInput.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/DailyQuestUpdateQuestInput";
    };

    DailyQuestUpdateQuestInput.Items = (function() {

        /**
         * Properties of an Items.
         * @memberof DailyQuestUpdateQuestInput
         * @interface IItems
         * @property {string|null} [id] Items id
         * @property {number|null} [amount] Items amount
         */

        /**
         * Constructs a new Items.
         * @memberof DailyQuestUpdateQuestInput
         * @classdesc Represents an Items.
         * @implements IItems
         * @constructor
         * @param {DailyQuestUpdateQuestInput.IItems=} [properties] Properties to set
         */
        function Items(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Items id.
         * @member {string} id
         * @memberof DailyQuestUpdateQuestInput.Items
         * @instance
         */
        Items.prototype.id = "";

        /**
         * Items amount.
         * @member {number} amount
         * @memberof DailyQuestUpdateQuestInput.Items
         * @instance
         */
        Items.prototype.amount = 0;

        /**
         * Creates a new Items instance using the specified properties.
         * @function create
         * @memberof DailyQuestUpdateQuestInput.Items
         * @static
         * @param {DailyQuestUpdateQuestInput.IItems=} [properties] Properties to set
         * @returns {DailyQuestUpdateQuestInput.Items} Items instance
         */
        Items.create = function create(properties) {
            return new Items(properties);
        };

        /**
         * Encodes the specified Items message. Does not implicitly {@link DailyQuestUpdateQuestInput.Items.verify|verify} messages.
         * @function encode
         * @memberof DailyQuestUpdateQuestInput.Items
         * @static
         * @param {DailyQuestUpdateQuestInput.IItems} message Items message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Items.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.amount != null && Object.hasOwnProperty.call(message, "amount"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.amount);
            return writer;
        };

        /**
         * Encodes the specified Items message, length delimited. Does not implicitly {@link DailyQuestUpdateQuestInput.Items.verify|verify} messages.
         * @function encodeDelimited
         * @memberof DailyQuestUpdateQuestInput.Items
         * @static
         * @param {DailyQuestUpdateQuestInput.IItems} message Items message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Items.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Items message from the specified reader or buffer.
         * @function decode
         * @memberof DailyQuestUpdateQuestInput.Items
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {DailyQuestUpdateQuestInput.Items} Items
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Items.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DailyQuestUpdateQuestInput.Items();
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
         * Decodes an Items message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof DailyQuestUpdateQuestInput.Items
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {DailyQuestUpdateQuestInput.Items} Items
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
         * @memberof DailyQuestUpdateQuestInput.Items
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
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

        /**
         * Creates an Items message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof DailyQuestUpdateQuestInput.Items
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {DailyQuestUpdateQuestInput.Items} Items
         */
        Items.fromObject = function fromObject(object) {
            if (object instanceof $root.DailyQuestUpdateQuestInput.Items)
                return object;
            var message = new $root.DailyQuestUpdateQuestInput.Items();
            if (object.id != null)
                message.id = String(object.id);
            if (object.amount != null)
                message.amount = object.amount >>> 0;
            return message;
        };

        /**
         * Creates a plain object from an Items message. Also converts values to other types if specified.
         * @function toObject
         * @memberof DailyQuestUpdateQuestInput.Items
         * @static
         * @param {DailyQuestUpdateQuestInput.Items} message Items
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Items.toObject = function toObject(message, options) {
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
         * Converts this Items to JSON.
         * @function toJSON
         * @memberof DailyQuestUpdateQuestInput.Items
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Items.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Items
         * @function getTypeUrl
         * @memberof DailyQuestUpdateQuestInput.Items
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
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

$root.DailyQuestUpdateQuestOutput = (function() {

    /**
     * Properties of a DailyQuestUpdateQuestOutput.
     * @exports IDailyQuestUpdateQuestOutput
     * @interface IDailyQuestUpdateQuestOutput
     * @property {Array.<string>|null} [questsCanClaim] DailyQuestUpdateQuestOutput questsCanClaim
     */

    /**
     * Constructs a new DailyQuestUpdateQuestOutput.
     * @exports DailyQuestUpdateQuestOutput
     * @classdesc Represents a DailyQuestUpdateQuestOutput.
     * @implements IDailyQuestUpdateQuestOutput
     * @constructor
     * @param {IDailyQuestUpdateQuestOutput=} [properties] Properties to set
     */
    function DailyQuestUpdateQuestOutput(properties) {
        this.questsCanClaim = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DailyQuestUpdateQuestOutput questsCanClaim.
     * @member {Array.<string>} questsCanClaim
     * @memberof DailyQuestUpdateQuestOutput
     * @instance
     */
    DailyQuestUpdateQuestOutput.prototype.questsCanClaim = $util.emptyArray;

    /**
     * Creates a new DailyQuestUpdateQuestOutput instance using the specified properties.
     * @function create
     * @memberof DailyQuestUpdateQuestOutput
     * @static
     * @param {IDailyQuestUpdateQuestOutput=} [properties] Properties to set
     * @returns {DailyQuestUpdateQuestOutput} DailyQuestUpdateQuestOutput instance
     */
    DailyQuestUpdateQuestOutput.create = function create(properties) {
        return new DailyQuestUpdateQuestOutput(properties);
    };

    /**
     * Encodes the specified DailyQuestUpdateQuestOutput message. Does not implicitly {@link DailyQuestUpdateQuestOutput.verify|verify} messages.
     * @function encode
     * @memberof DailyQuestUpdateQuestOutput
     * @static
     * @param {IDailyQuestUpdateQuestOutput} message DailyQuestUpdateQuestOutput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DailyQuestUpdateQuestOutput.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.questsCanClaim != null && message.questsCanClaim.length)
            for (var i = 0; i < message.questsCanClaim.length; ++i)
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.questsCanClaim[i]);
        return writer;
    };

    /**
     * Encodes the specified DailyQuestUpdateQuestOutput message, length delimited. Does not implicitly {@link DailyQuestUpdateQuestOutput.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DailyQuestUpdateQuestOutput
     * @static
     * @param {IDailyQuestUpdateQuestOutput} message DailyQuestUpdateQuestOutput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DailyQuestUpdateQuestOutput.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DailyQuestUpdateQuestOutput message from the specified reader or buffer.
     * @function decode
     * @memberof DailyQuestUpdateQuestOutput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DailyQuestUpdateQuestOutput} DailyQuestUpdateQuestOutput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DailyQuestUpdateQuestOutput.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DailyQuestUpdateQuestOutput();
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
     * Decodes a DailyQuestUpdateQuestOutput message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DailyQuestUpdateQuestOutput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DailyQuestUpdateQuestOutput} DailyQuestUpdateQuestOutput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DailyQuestUpdateQuestOutput.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DailyQuestUpdateQuestOutput message.
     * @function verify
     * @memberof DailyQuestUpdateQuestOutput
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DailyQuestUpdateQuestOutput.verify = function verify(message) {
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
     * Creates a DailyQuestUpdateQuestOutput message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DailyQuestUpdateQuestOutput
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DailyQuestUpdateQuestOutput} DailyQuestUpdateQuestOutput
     */
    DailyQuestUpdateQuestOutput.fromObject = function fromObject(object) {
        if (object instanceof $root.DailyQuestUpdateQuestOutput)
            return object;
        var message = new $root.DailyQuestUpdateQuestOutput();
        if (object.questsCanClaim) {
            if (!Array.isArray(object.questsCanClaim))
                throw TypeError(".DailyQuestUpdateQuestOutput.questsCanClaim: array expected");
            message.questsCanClaim = [];
            for (var i = 0; i < object.questsCanClaim.length; ++i)
                message.questsCanClaim[i] = String(object.questsCanClaim[i]);
        }
        return message;
    };

    /**
     * Creates a plain object from a DailyQuestUpdateQuestOutput message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DailyQuestUpdateQuestOutput
     * @static
     * @param {DailyQuestUpdateQuestOutput} message DailyQuestUpdateQuestOutput
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DailyQuestUpdateQuestOutput.toObject = function toObject(message, options) {
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
     * Converts this DailyQuestUpdateQuestOutput to JSON.
     * @function toJSON
     * @memberof DailyQuestUpdateQuestOutput
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DailyQuestUpdateQuestOutput.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for DailyQuestUpdateQuestOutput
     * @function getTypeUrl
     * @memberof DailyQuestUpdateQuestOutput
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    DailyQuestUpdateQuestOutput.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/DailyQuestUpdateQuestOutput";
    };

    return DailyQuestUpdateQuestOutput;
})();

$root.DailyQuestClaimQuestInput = (function() {

    /**
     * Properties of a DailyQuestClaimQuestInput.
     * @exports IDailyQuestClaimQuestInput
     * @interface IDailyQuestClaimQuestInput
     * @property {Array.<string>|null} [items] DailyQuestClaimQuestInput items
     */

    /**
     * Constructs a new DailyQuestClaimQuestInput.
     * @exports DailyQuestClaimQuestInput
     * @classdesc Represents a DailyQuestClaimQuestInput.
     * @implements IDailyQuestClaimQuestInput
     * @constructor
     * @param {IDailyQuestClaimQuestInput=} [properties] Properties to set
     */
    function DailyQuestClaimQuestInput(properties) {
        this.items = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DailyQuestClaimQuestInput items.
     * @member {Array.<string>} items
     * @memberof DailyQuestClaimQuestInput
     * @instance
     */
    DailyQuestClaimQuestInput.prototype.items = $util.emptyArray;

    /**
     * Creates a new DailyQuestClaimQuestInput instance using the specified properties.
     * @function create
     * @memberof DailyQuestClaimQuestInput
     * @static
     * @param {IDailyQuestClaimQuestInput=} [properties] Properties to set
     * @returns {DailyQuestClaimQuestInput} DailyQuestClaimQuestInput instance
     */
    DailyQuestClaimQuestInput.create = function create(properties) {
        return new DailyQuestClaimQuestInput(properties);
    };

    /**
     * Encodes the specified DailyQuestClaimQuestInput message. Does not implicitly {@link DailyQuestClaimQuestInput.verify|verify} messages.
     * @function encode
     * @memberof DailyQuestClaimQuestInput
     * @static
     * @param {IDailyQuestClaimQuestInput} message DailyQuestClaimQuestInput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DailyQuestClaimQuestInput.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.items != null && message.items.length)
            for (var i = 0; i < message.items.length; ++i)
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.items[i]);
        return writer;
    };

    /**
     * Encodes the specified DailyQuestClaimQuestInput message, length delimited. Does not implicitly {@link DailyQuestClaimQuestInput.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DailyQuestClaimQuestInput
     * @static
     * @param {IDailyQuestClaimQuestInput} message DailyQuestClaimQuestInput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DailyQuestClaimQuestInput.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DailyQuestClaimQuestInput message from the specified reader or buffer.
     * @function decode
     * @memberof DailyQuestClaimQuestInput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DailyQuestClaimQuestInput} DailyQuestClaimQuestInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DailyQuestClaimQuestInput.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DailyQuestClaimQuestInput();
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
     * Decodes a DailyQuestClaimQuestInput message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DailyQuestClaimQuestInput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DailyQuestClaimQuestInput} DailyQuestClaimQuestInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DailyQuestClaimQuestInput.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DailyQuestClaimQuestInput message.
     * @function verify
     * @memberof DailyQuestClaimQuestInput
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DailyQuestClaimQuestInput.verify = function verify(message) {
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
     * Creates a DailyQuestClaimQuestInput message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DailyQuestClaimQuestInput
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DailyQuestClaimQuestInput} DailyQuestClaimQuestInput
     */
    DailyQuestClaimQuestInput.fromObject = function fromObject(object) {
        if (object instanceof $root.DailyQuestClaimQuestInput)
            return object;
        var message = new $root.DailyQuestClaimQuestInput();
        if (object.items) {
            if (!Array.isArray(object.items))
                throw TypeError(".DailyQuestClaimQuestInput.items: array expected");
            message.items = [];
            for (var i = 0; i < object.items.length; ++i)
                message.items[i] = String(object.items[i]);
        }
        return message;
    };

    /**
     * Creates a plain object from a DailyQuestClaimQuestInput message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DailyQuestClaimQuestInput
     * @static
     * @param {DailyQuestClaimQuestInput} message DailyQuestClaimQuestInput
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DailyQuestClaimQuestInput.toObject = function toObject(message, options) {
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
     * Converts this DailyQuestClaimQuestInput to JSON.
     * @function toJSON
     * @memberof DailyQuestClaimQuestInput
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DailyQuestClaimQuestInput.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for DailyQuestClaimQuestInput
     * @function getTypeUrl
     * @memberof DailyQuestClaimQuestInput
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    DailyQuestClaimQuestInput.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/DailyQuestClaimQuestInput";
    };

    return DailyQuestClaimQuestInput;
})();

$root.DailyQuestClaimQuestOutput = (function() {

    /**
     * Properties of a DailyQuestClaimQuestOutput.
     * @exports IDailyQuestClaimQuestOutput
     * @interface IDailyQuestClaimQuestOutput
     * @property {Array.<DailyQuestClaimQuestOutput.IRewards>|null} [rewards] DailyQuestClaimQuestOutput rewards
     */

    /**
     * Constructs a new DailyQuestClaimQuestOutput.
     * @exports DailyQuestClaimQuestOutput
     * @classdesc Represents a DailyQuestClaimQuestOutput.
     * @implements IDailyQuestClaimQuestOutput
     * @constructor
     * @param {IDailyQuestClaimQuestOutput=} [properties] Properties to set
     */
    function DailyQuestClaimQuestOutput(properties) {
        this.rewards = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DailyQuestClaimQuestOutput rewards.
     * @member {Array.<DailyQuestClaimQuestOutput.IRewards>} rewards
     * @memberof DailyQuestClaimQuestOutput
     * @instance
     */
    DailyQuestClaimQuestOutput.prototype.rewards = $util.emptyArray;

    /**
     * Creates a new DailyQuestClaimQuestOutput instance using the specified properties.
     * @function create
     * @memberof DailyQuestClaimQuestOutput
     * @static
     * @param {IDailyQuestClaimQuestOutput=} [properties] Properties to set
     * @returns {DailyQuestClaimQuestOutput} DailyQuestClaimQuestOutput instance
     */
    DailyQuestClaimQuestOutput.create = function create(properties) {
        return new DailyQuestClaimQuestOutput(properties);
    };

    /**
     * Encodes the specified DailyQuestClaimQuestOutput message. Does not implicitly {@link DailyQuestClaimQuestOutput.verify|verify} messages.
     * @function encode
     * @memberof DailyQuestClaimQuestOutput
     * @static
     * @param {IDailyQuestClaimQuestOutput} message DailyQuestClaimQuestOutput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DailyQuestClaimQuestOutput.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.rewards != null && message.rewards.length)
            for (var i = 0; i < message.rewards.length; ++i)
                $root.DailyQuestClaimQuestOutput.Rewards.encode(message.rewards[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified DailyQuestClaimQuestOutput message, length delimited. Does not implicitly {@link DailyQuestClaimQuestOutput.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DailyQuestClaimQuestOutput
     * @static
     * @param {IDailyQuestClaimQuestOutput} message DailyQuestClaimQuestOutput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DailyQuestClaimQuestOutput.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DailyQuestClaimQuestOutput message from the specified reader or buffer.
     * @function decode
     * @memberof DailyQuestClaimQuestOutput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DailyQuestClaimQuestOutput} DailyQuestClaimQuestOutput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DailyQuestClaimQuestOutput.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DailyQuestClaimQuestOutput();
        while (reader.pos < end) {
            var tag = reader.uint32();
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

    /**
     * Decodes a DailyQuestClaimQuestOutput message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DailyQuestClaimQuestOutput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DailyQuestClaimQuestOutput} DailyQuestClaimQuestOutput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DailyQuestClaimQuestOutput.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DailyQuestClaimQuestOutput message.
     * @function verify
     * @memberof DailyQuestClaimQuestOutput
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DailyQuestClaimQuestOutput.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.rewards != null && message.hasOwnProperty("rewards")) {
            if (!Array.isArray(message.rewards))
                return "rewards: array expected";
            for (var i = 0; i < message.rewards.length; ++i) {
                var error = $root.DailyQuestClaimQuestOutput.Rewards.verify(message.rewards[i]);
                if (error)
                    return "rewards." + error;
            }
        }
        return null;
    };

    /**
     * Creates a DailyQuestClaimQuestOutput message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DailyQuestClaimQuestOutput
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DailyQuestClaimQuestOutput} DailyQuestClaimQuestOutput
     */
    DailyQuestClaimQuestOutput.fromObject = function fromObject(object) {
        if (object instanceof $root.DailyQuestClaimQuestOutput)
            return object;
        var message = new $root.DailyQuestClaimQuestOutput();
        if (object.rewards) {
            if (!Array.isArray(object.rewards))
                throw TypeError(".DailyQuestClaimQuestOutput.rewards: array expected");
            message.rewards = [];
            for (var i = 0; i < object.rewards.length; ++i) {
                if (typeof object.rewards[i] !== "object")
                    throw TypeError(".DailyQuestClaimQuestOutput.rewards: object expected");
                message.rewards[i] = $root.DailyQuestClaimQuestOutput.Rewards.fromObject(object.rewards[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a DailyQuestClaimQuestOutput message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DailyQuestClaimQuestOutput
     * @static
     * @param {DailyQuestClaimQuestOutput} message DailyQuestClaimQuestOutput
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DailyQuestClaimQuestOutput.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.rewards = [];
        if (message.rewards && message.rewards.length) {
            object.rewards = [];
            for (var j = 0; j < message.rewards.length; ++j)
                object.rewards[j] = $root.DailyQuestClaimQuestOutput.Rewards.toObject(message.rewards[j], options);
        }
        return object;
    };

    /**
     * Converts this DailyQuestClaimQuestOutput to JSON.
     * @function toJSON
     * @memberof DailyQuestClaimQuestOutput
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DailyQuestClaimQuestOutput.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for DailyQuestClaimQuestOutput
     * @function getTypeUrl
     * @memberof DailyQuestClaimQuestOutput
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    DailyQuestClaimQuestOutput.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/DailyQuestClaimQuestOutput";
    };

    DailyQuestClaimQuestOutput.Rewards = (function() {

        /**
         * Properties of a Rewards.
         * @memberof DailyQuestClaimQuestOutput
         * @interface IRewards
         * @property {string|null} [itemId] Rewards itemId
         * @property {number|null} [amount] Rewards amount
         */

        /**
         * Constructs a new Rewards.
         * @memberof DailyQuestClaimQuestOutput
         * @classdesc Represents a Rewards.
         * @implements IRewards
         * @constructor
         * @param {DailyQuestClaimQuestOutput.IRewards=} [properties] Properties to set
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
         * @memberof DailyQuestClaimQuestOutput.Rewards
         * @instance
         */
        Rewards.prototype.itemId = "";

        /**
         * Rewards amount.
         * @member {number} amount
         * @memberof DailyQuestClaimQuestOutput.Rewards
         * @instance
         */
        Rewards.prototype.amount = 0;

        /**
         * Creates a new Rewards instance using the specified properties.
         * @function create
         * @memberof DailyQuestClaimQuestOutput.Rewards
         * @static
         * @param {DailyQuestClaimQuestOutput.IRewards=} [properties] Properties to set
         * @returns {DailyQuestClaimQuestOutput.Rewards} Rewards instance
         */
        Rewards.create = function create(properties) {
            return new Rewards(properties);
        };

        /**
         * Encodes the specified Rewards message. Does not implicitly {@link DailyQuestClaimQuestOutput.Rewards.verify|verify} messages.
         * @function encode
         * @memberof DailyQuestClaimQuestOutput.Rewards
         * @static
         * @param {DailyQuestClaimQuestOutput.IRewards} message Rewards message or plain object to encode
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
         * Encodes the specified Rewards message, length delimited. Does not implicitly {@link DailyQuestClaimQuestOutput.Rewards.verify|verify} messages.
         * @function encodeDelimited
         * @memberof DailyQuestClaimQuestOutput.Rewards
         * @static
         * @param {DailyQuestClaimQuestOutput.IRewards} message Rewards message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Rewards.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Rewards message from the specified reader or buffer.
         * @function decode
         * @memberof DailyQuestClaimQuestOutput.Rewards
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {DailyQuestClaimQuestOutput.Rewards} Rewards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Rewards.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DailyQuestClaimQuestOutput.Rewards();
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
         * @memberof DailyQuestClaimQuestOutput.Rewards
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {DailyQuestClaimQuestOutput.Rewards} Rewards
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
         * @memberof DailyQuestClaimQuestOutput.Rewards
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
         * @memberof DailyQuestClaimQuestOutput.Rewards
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {DailyQuestClaimQuestOutput.Rewards} Rewards
         */
        Rewards.fromObject = function fromObject(object) {
            if (object instanceof $root.DailyQuestClaimQuestOutput.Rewards)
                return object;
            var message = new $root.DailyQuestClaimQuestOutput.Rewards();
            if (object.itemId != null)
                message.itemId = String(object.itemId);
            if (object.amount != null)
                message.amount = object.amount >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a Rewards message. Also converts values to other types if specified.
         * @function toObject
         * @memberof DailyQuestClaimQuestOutput.Rewards
         * @static
         * @param {DailyQuestClaimQuestOutput.Rewards} message Rewards
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
         * @memberof DailyQuestClaimQuestOutput.Rewards
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Rewards.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Rewards
         * @function getTypeUrl
         * @memberof DailyQuestClaimQuestOutput.Rewards
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
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

$root.LuckyWheel = (function() {

    /**
     * Properties of a LuckyWheel.
     * @exports ILuckyWheel
     * @interface ILuckyWheel
     * @property {number|null} [maxFullSpins] LuckyWheel maxFullSpins
     * @property {number|null} [minFullSpins] LuckyWheel minFullSpins
     * @property {number|null} [dailyLimit] LuckyWheel dailyLimit
     * @property {Array.<LuckyWheel.IItems>|null} [items] LuckyWheel items
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
     * LuckyWheel maxFullSpins.
     * @member {number} maxFullSpins
     * @memberof LuckyWheel
     * @instance
     */
    LuckyWheel.prototype.maxFullSpins = 0;

    /**
     * LuckyWheel minFullSpins.
     * @member {number} minFullSpins
     * @memberof LuckyWheel
     * @instance
     */
    LuckyWheel.prototype.minFullSpins = 0;

    /**
     * LuckyWheel dailyLimit.
     * @member {number} dailyLimit
     * @memberof LuckyWheel
     * @instance
     */
    LuckyWheel.prototype.dailyLimit = 0;

    /**
     * LuckyWheel items.
     * @member {Array.<LuckyWheel.IItems>} items
     * @memberof LuckyWheel
     * @instance
     */
    LuckyWheel.prototype.items = $util.emptyArray;

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
        if (message.maxFullSpins != null && Object.hasOwnProperty.call(message, "maxFullSpins"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.maxFullSpins);
        if (message.minFullSpins != null && Object.hasOwnProperty.call(message, "minFullSpins"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.minFullSpins);
        if (message.dailyLimit != null && Object.hasOwnProperty.call(message, "dailyLimit"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.dailyLimit);
        if (message.items != null && message.items.length)
            for (var i = 0; i < message.items.length; ++i)
                $root.LuckyWheel.Items.encode(message.items[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
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
            for (var i = 0; i < message.items.length; ++i) {
                var error = $root.LuckyWheel.Items.verify(message.items[i]);
                if (error)
                    return "items." + error;
            }
        }
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
            for (var i = 0; i < object.items.length; ++i) {
                if (typeof object.items[i] !== "object")
                    throw TypeError(".LuckyWheel.items: object expected");
                message.items[i] = $root.LuckyWheel.Items.fromObject(object.items[i]);
            }
        }
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
            for (var j = 0; j < message.items.length; ++j)
                object.items[j] = $root.LuckyWheel.Items.toObject(message.items[j], options);
        }
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
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.weight);
            if (message.quantity != null && Object.hasOwnProperty.call(message, "quantity"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.quantity);
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
                message.weight = object.weight >>> 0;
            if (object.quantity != null)
                message.quantity = object.quantity >>> 0;
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
     * Callback as used by {@link Inbox#me}.
     * @memberof Inbox
     * @typedef meCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {InboxList} [response] InboxList
     */

    /**
     * Calls me.
     * @function me
     * @memberof Inbox
     * @instance
     * @param {IEmpty} request Empty message or plain object
     * @param {Inbox.meCallback} callback Node-style callback called with the error, if any, and InboxList
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Inbox.prototype.me = function me(request, callback) {
        return this.rpcCall(me, $root.Empty, $root.InboxList, request, callback);
    }, "name", { value: "me" });

    /**
     * Calls me.
     * @function me
     * @memberof Inbox
     * @instance
     * @param {IEmpty} request Empty message or plain object
     * @returns {Promise<InboxList>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link Inbox#claim}.
     * @memberof Inbox
     * @typedef claimCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {InboxClaimOutput} [response] InboxClaimOutput
     */

    /**
     * Calls claim.
     * @function claim
     * @memberof Inbox
     * @instance
     * @param {IInboxClaimInput} request InboxClaimInput message or plain object
     * @param {Inbox.claimCallback} callback Node-style callback called with the error, if any, and InboxClaimOutput
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Inbox.prototype.claim = function claim(request, callback) {
        return this.rpcCall(claim, $root.InboxClaimInput, $root.InboxClaimOutput, request, callback);
    }, "name", { value: "claim" });

    /**
     * Calls claim.
     * @function claim
     * @memberof Inbox
     * @instance
     * @param {IInboxClaimInput} request InboxClaimInput message or plain object
     * @returns {Promise<InboxClaimOutput>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link Inbox#markdelete}.
     * @memberof Inbox
     * @typedef markdeleteCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {InboxDeleteOutput} [response] InboxDeleteOutput
     */

    /**
     * Calls markdelete.
     * @function markdelete
     * @memberof Inbox
     * @instance
     * @param {IInboxDeleteInput} request InboxDeleteInput message or plain object
     * @param {Inbox.markdeleteCallback} callback Node-style callback called with the error, if any, and InboxDeleteOutput
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Inbox.prototype.markdelete = function markdelete(request, callback) {
        return this.rpcCall(markdelete, $root.InboxDeleteInput, $root.InboxDeleteOutput, request, callback);
    }, "name", { value: "markdelete" });

    /**
     * Calls markdelete.
     * @function markdelete
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
