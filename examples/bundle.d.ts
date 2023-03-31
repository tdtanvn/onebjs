import * as $protobuf from "protobufjs";
import Long = require("long");
/** Represents a Blueprint */
export class Blueprint extends $protobuf.rpc.Service {

    /**
     * Constructs a new Blueprint service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

    /**
     * Creates new Blueprint service using the specified rpc implementation.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     * @returns RPC service. Useful where requests and/or responses are streamed.
     */
    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Blueprint;

    /**
     * Calls characters.
     * @param request Empty message or plain object
     * @param callback Node-style callback called with the error, if any, and CHARACTERS
     */
    public characters(request: IEmpty, callback: Blueprint.charactersCallback): void;

    /**
     * Calls characters.
     * @param request Empty message or plain object
     * @returns Promise
     */
    public characters(request: IEmpty): Promise<CHARACTERS>;

    /**
     * Calls daily_quest.
     * @param request Empty message or plain object
     * @param callback Node-style callback called with the error, if any, and DAILY_QUEST
     */
    public daily_quest(request: IEmpty, callback: Blueprint.daily_questCallback): void;

    /**
     * Calls daily_quest.
     * @param request Empty message or plain object
     * @returns Promise
     */
    public daily_quest(request: IEmpty): Promise<DAILY_QUEST>;

    /**
     * Calls daily_rewards.
     * @param request Empty message or plain object
     * @param callback Node-style callback called with the error, if any, and DAILY_REWARDS
     */
    public daily_rewards(request: IEmpty, callback: Blueprint.daily_rewardsCallback): void;

    /**
     * Calls daily_rewards.
     * @param request Empty message or plain object
     * @returns Promise
     */
    public daily_rewards(request: IEmpty): Promise<DAILY_REWARDS>;

    /**
     * Calls equipments.
     * @param request Empty message or plain object
     * @param callback Node-style callback called with the error, if any, and EQUIPMENTS
     */
    public equipments(request: IEmpty, callback: Blueprint.equipmentsCallback): void;

    /**
     * Calls equipments.
     * @param request Empty message or plain object
     * @returns Promise
     */
    public equipments(request: IEmpty): Promise<EQUIPMENTS>;

    /**
     * Calls item_table.
     * @param request Empty message or plain object
     * @param callback Node-style callback called with the error, if any, and ITEM_TABLE
     */
    public item_table(request: IEmpty, callback: Blueprint.item_tableCallback): void;

    /**
     * Calls item_table.
     * @param request Empty message or plain object
     * @returns Promise
     */
    public item_table(request: IEmpty): Promise<ITEM_TABLE>;

    /**
     * Calls lucky_wheel.
     * @param request Empty message or plain object
     * @param callback Node-style callback called with the error, if any, and LUCKY_WHEEL
     */
    public lucky_wheel(request: IEmpty, callback: Blueprint.lucky_wheelCallback): void;

    /**
     * Calls lucky_wheel.
     * @param request Empty message or plain object
     * @returns Promise
     */
    public lucky_wheel(request: IEmpty): Promise<LUCKY_WHEEL>;

    /**
     * Calls progress_quest.
     * @param request Empty message or plain object
     * @param callback Node-style callback called with the error, if any, and PROGRESS_QUEST
     */
    public progress_quest(request: IEmpty, callback: Blueprint.progress_questCallback): void;

    /**
     * Calls progress_quest.
     * @param request Empty message or plain object
     * @returns Promise
     */
    public progress_quest(request: IEmpty): Promise<PROGRESS_QUEST>;

    /**
     * Calls test.
     * @param request Empty message or plain object
     * @param callback Node-style callback called with the error, if any, and TEST
     */
    public test(request: IEmpty, callback: Blueprint.testCallback): void;

    /**
     * Calls test.
     * @param request Empty message or plain object
     * @returns Promise
     */
    public test(request: IEmpty): Promise<TEST>;
}

export namespace Blueprint {

    /**
     * Callback as used by {@link Blueprint#characters}.
     * @param error Error, if any
     * @param [response] CHARACTERS
     */
    type charactersCallback = (error: (Error|null), response?: CHARACTERS) => void;

    /**
     * Callback as used by {@link Blueprint#daily_quest}.
     * @param error Error, if any
     * @param [response] DAILY_QUEST
     */
    type daily_questCallback = (error: (Error|null), response?: DAILY_QUEST) => void;

    /**
     * Callback as used by {@link Blueprint#daily_rewards}.
     * @param error Error, if any
     * @param [response] DAILY_REWARDS
     */
    type daily_rewardsCallback = (error: (Error|null), response?: DAILY_REWARDS) => void;

    /**
     * Callback as used by {@link Blueprint#equipments}.
     * @param error Error, if any
     * @param [response] EQUIPMENTS
     */
    type equipmentsCallback = (error: (Error|null), response?: EQUIPMENTS) => void;

    /**
     * Callback as used by {@link Blueprint#item_table}.
     * @param error Error, if any
     * @param [response] ITEM_TABLE
     */
    type item_tableCallback = (error: (Error|null), response?: ITEM_TABLE) => void;

    /**
     * Callback as used by {@link Blueprint#lucky_wheel}.
     * @param error Error, if any
     * @param [response] LUCKY_WHEEL
     */
    type lucky_wheelCallback = (error: (Error|null), response?: LUCKY_WHEEL) => void;

    /**
     * Callback as used by {@link Blueprint#progress_quest}.
     * @param error Error, if any
     * @param [response] PROGRESS_QUEST
     */
    type progress_questCallback = (error: (Error|null), response?: PROGRESS_QUEST) => void;

    /**
     * Callback as used by {@link Blueprint#test}.
     * @param error Error, if any
     * @param [response] TEST
     */
    type testCallback = (error: (Error|null), response?: TEST) => void;
}

/** Properties of a CHARACTERS. */
export interface ICHARACTERS {

    /** CHARACTERS name */
    name?: (string|null);

    /** CHARACTERS items */
    items?: (CHARACTERS.IItems[]|null);
}

/** Represents a CHARACTERS. */
export class CHARACTERS implements ICHARACTERS {

    /**
     * Constructs a new CHARACTERS.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICHARACTERS);

    /** CHARACTERS name. */
    public name: string;

    /** CHARACTERS items. */
    public items: CHARACTERS.IItems[];

    /**
     * Creates a new CHARACTERS instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CHARACTERS instance
     */
    public static create(properties?: ICHARACTERS): CHARACTERS;

    /**
     * Encodes the specified CHARACTERS message. Does not implicitly {@link CHARACTERS.verify|verify} messages.
     * @param message CHARACTERS message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICHARACTERS, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CHARACTERS message, length delimited. Does not implicitly {@link CHARACTERS.verify|verify} messages.
     * @param message CHARACTERS message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICHARACTERS, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CHARACTERS message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CHARACTERS
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CHARACTERS;

    /**
     * Decodes a CHARACTERS message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CHARACTERS
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CHARACTERS;

    /**
     * Verifies a CHARACTERS message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CHARACTERS message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CHARACTERS
     */
    public static fromObject(object: { [k: string]: any }): CHARACTERS;

    /**
     * Creates a plain object from a CHARACTERS message. Also converts values to other types if specified.
     * @param message CHARACTERS
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CHARACTERS, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CHARACTERS to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CHARACTERS
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace CHARACTERS {

    /** Properties of an Items. */
    interface IItems {

        /** Items basePointsSpecialAttack */
        basePointsSpecialAttack?: (number|null);

        /** Items basePointsCriticalHit */
        basePointsCriticalHit?: (number|null);

        /** Items basePointsDefense */
        basePointsDefense?: (number|null);

        /** Items basePointsAttack */
        basePointsAttack?: (number|null);

        /** Items basePointsLife */
        basePointsLife?: (number|null);

        /** Items characterName */
        characterName?: (string|null);

        /** Items id */
        id?: (string|null);

        /** Items bioTitle */
        bioTitle?: (string|null);

        /** Items basePointsAttackSpeed */
        basePointsAttackSpeed?: (number|null);
    }

    /** Represents an Items. */
    class Items implements IItems {

        /**
         * Constructs a new Items.
         * @param [properties] Properties to set
         */
        constructor(properties?: CHARACTERS.IItems);

        /** Items basePointsSpecialAttack. */
        public basePointsSpecialAttack: number;

        /** Items basePointsCriticalHit. */
        public basePointsCriticalHit: number;

        /** Items basePointsDefense. */
        public basePointsDefense: number;

        /** Items basePointsAttack. */
        public basePointsAttack: number;

        /** Items basePointsLife. */
        public basePointsLife: number;

        /** Items characterName. */
        public characterName: string;

        /** Items id. */
        public id: string;

        /** Items bioTitle. */
        public bioTitle: string;

        /** Items basePointsAttackSpeed. */
        public basePointsAttackSpeed: number;

        /**
         * Creates a new Items instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Items instance
         */
        public static create(properties?: CHARACTERS.IItems): CHARACTERS.Items;

        /**
         * Encodes the specified Items message. Does not implicitly {@link CHARACTERS.Items.verify|verify} messages.
         * @param message Items message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CHARACTERS.IItems, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Items message, length delimited. Does not implicitly {@link CHARACTERS.Items.verify|verify} messages.
         * @param message Items message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CHARACTERS.IItems, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Items message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Items
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CHARACTERS.Items;

        /**
         * Decodes an Items message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Items
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CHARACTERS.Items;

        /**
         * Verifies an Items message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Items message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Items
         */
        public static fromObject(object: { [k: string]: any }): CHARACTERS.Items;

        /**
         * Creates a plain object from an Items message. Also converts values to other types if specified.
         * @param message Items
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CHARACTERS.Items, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Items to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Items
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Properties of a DAILY_QUEST. */
export interface IDAILY_QUEST {

    /** DAILY_QUEST items */
    items?: (DAILY_QUEST.IItems[]|null);
}

/** Represents a DAILY_QUEST. */
export class DAILY_QUEST implements IDAILY_QUEST {

    /**
     * Constructs a new DAILY_QUEST.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDAILY_QUEST);

    /** DAILY_QUEST items. */
    public items: DAILY_QUEST.IItems[];

    /**
     * Creates a new DAILY_QUEST instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DAILY_QUEST instance
     */
    public static create(properties?: IDAILY_QUEST): DAILY_QUEST;

    /**
     * Encodes the specified DAILY_QUEST message. Does not implicitly {@link DAILY_QUEST.verify|verify} messages.
     * @param message DAILY_QUEST message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDAILY_QUEST, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DAILY_QUEST message, length delimited. Does not implicitly {@link DAILY_QUEST.verify|verify} messages.
     * @param message DAILY_QUEST message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDAILY_QUEST, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DAILY_QUEST message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DAILY_QUEST
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DAILY_QUEST;

    /**
     * Decodes a DAILY_QUEST message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DAILY_QUEST
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DAILY_QUEST;

    /**
     * Verifies a DAILY_QUEST message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DAILY_QUEST message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DAILY_QUEST
     */
    public static fromObject(object: { [k: string]: any }): DAILY_QUEST;

    /**
     * Creates a plain object from a DAILY_QUEST message. Also converts values to other types if specified.
     * @param message DAILY_QUEST
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DAILY_QUEST, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DAILY_QUEST to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DAILY_QUEST
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace DAILY_QUEST {

    /** Properties of an Items. */
    interface IItems {

        /** Items conditionReach */
        conditionReach?: (number|null);

        /** Items rewardQuantity */
        rewardQuantity?: (number|null);

        /** Items condition */
        condition?: (string|null);

        /** Items rewardId */
        rewardId?: (string|null);

        /** Items id */
        id?: (string|null);

        /** Items questName */
        questName?: (string|null);
    }

    /** Represents an Items. */
    class Items implements IItems {

        /**
         * Constructs a new Items.
         * @param [properties] Properties to set
         */
        constructor(properties?: DAILY_QUEST.IItems);

        /** Items conditionReach. */
        public conditionReach: number;

        /** Items rewardQuantity. */
        public rewardQuantity: number;

        /** Items condition. */
        public condition: string;

        /** Items rewardId. */
        public rewardId: string;

        /** Items id. */
        public id: string;

        /** Items questName. */
        public questName: string;

        /**
         * Creates a new Items instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Items instance
         */
        public static create(properties?: DAILY_QUEST.IItems): DAILY_QUEST.Items;

        /**
         * Encodes the specified Items message. Does not implicitly {@link DAILY_QUEST.Items.verify|verify} messages.
         * @param message Items message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: DAILY_QUEST.IItems, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Items message, length delimited. Does not implicitly {@link DAILY_QUEST.Items.verify|verify} messages.
         * @param message Items message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: DAILY_QUEST.IItems, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Items message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Items
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DAILY_QUEST.Items;

        /**
         * Decodes an Items message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Items
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DAILY_QUEST.Items;

        /**
         * Verifies an Items message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Items message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Items
         */
        public static fromObject(object: { [k: string]: any }): DAILY_QUEST.Items;

        /**
         * Creates a plain object from an Items message. Also converts values to other types if specified.
         * @param message Items
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DAILY_QUEST.Items, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Items to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Items
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Properties of a DAILY_REWARDS. */
export interface IDAILY_REWARDS {

    /** DAILY_REWARDS hoursToReceive */
    hoursToReceive?: (number|null);

    /** DAILY_REWARDS resetIfFail */
    resetIfFail?: (boolean|null);

    /** DAILY_REWARDS steps */
    steps?: (DAILY_REWARDS.ISteps[]|null);

    /** DAILY_REWARDS enabled */
    enabled?: (boolean|null);

    /** DAILY_REWARDS defaultRewardIfAlreadyOwned */
    defaultRewardIfAlreadyOwned?: (DAILY_REWARDS.IDefaultRewardIfAlreadyOwned|null);
}

/** Represents a DAILY_REWARDS. */
export class DAILY_REWARDS implements IDAILY_REWARDS {

    /**
     * Constructs a new DAILY_REWARDS.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDAILY_REWARDS);

    /** DAILY_REWARDS hoursToReceive. */
    public hoursToReceive: number;

    /** DAILY_REWARDS resetIfFail. */
    public resetIfFail: boolean;

    /** DAILY_REWARDS steps. */
    public steps: DAILY_REWARDS.ISteps[];

    /** DAILY_REWARDS enabled. */
    public enabled: boolean;

    /** DAILY_REWARDS defaultRewardIfAlreadyOwned. */
    public defaultRewardIfAlreadyOwned?: (DAILY_REWARDS.IDefaultRewardIfAlreadyOwned|null);

    /**
     * Creates a new DAILY_REWARDS instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DAILY_REWARDS instance
     */
    public static create(properties?: IDAILY_REWARDS): DAILY_REWARDS;

    /**
     * Encodes the specified DAILY_REWARDS message. Does not implicitly {@link DAILY_REWARDS.verify|verify} messages.
     * @param message DAILY_REWARDS message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDAILY_REWARDS, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DAILY_REWARDS message, length delimited. Does not implicitly {@link DAILY_REWARDS.verify|verify} messages.
     * @param message DAILY_REWARDS message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDAILY_REWARDS, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DAILY_REWARDS message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DAILY_REWARDS
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DAILY_REWARDS;

    /**
     * Decodes a DAILY_REWARDS message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DAILY_REWARDS
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DAILY_REWARDS;

    /**
     * Verifies a DAILY_REWARDS message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DAILY_REWARDS message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DAILY_REWARDS
     */
    public static fromObject(object: { [k: string]: any }): DAILY_REWARDS;

    /**
     * Creates a plain object from a DAILY_REWARDS message. Also converts values to other types if specified.
     * @param message DAILY_REWARDS
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DAILY_REWARDS, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DAILY_REWARDS to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DAILY_REWARDS
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace DAILY_REWARDS {

    /** Properties of a Steps. */
    interface ISteps {

        /** Steps itemId */
        itemId?: (string|null);

        /** Steps step */
        step?: (number|null);

        /** Steps amount */
        amount?: (number|null);
    }

    /** Represents a Steps. */
    class Steps implements ISteps {

        /**
         * Constructs a new Steps.
         * @param [properties] Properties to set
         */
        constructor(properties?: DAILY_REWARDS.ISteps);

        /** Steps itemId. */
        public itemId: string;

        /** Steps step. */
        public step: number;

        /** Steps amount. */
        public amount: number;

        /**
         * Creates a new Steps instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Steps instance
         */
        public static create(properties?: DAILY_REWARDS.ISteps): DAILY_REWARDS.Steps;

        /**
         * Encodes the specified Steps message. Does not implicitly {@link DAILY_REWARDS.Steps.verify|verify} messages.
         * @param message Steps message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: DAILY_REWARDS.ISteps, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Steps message, length delimited. Does not implicitly {@link DAILY_REWARDS.Steps.verify|verify} messages.
         * @param message Steps message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: DAILY_REWARDS.ISteps, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Steps message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Steps
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DAILY_REWARDS.Steps;

        /**
         * Decodes a Steps message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Steps
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DAILY_REWARDS.Steps;

        /**
         * Verifies a Steps message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Steps message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Steps
         */
        public static fromObject(object: { [k: string]: any }): DAILY_REWARDS.Steps;

        /**
         * Creates a plain object from a Steps message. Also converts values to other types if specified.
         * @param message Steps
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DAILY_REWARDS.Steps, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Steps to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Steps
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DefaultRewardIfAlreadyOwned. */
    interface IDefaultRewardIfAlreadyOwned {

        /** DefaultRewardIfAlreadyOwned itemId */
        itemId?: (string|null);

        /** DefaultRewardIfAlreadyOwned amount */
        amount?: (number|null);
    }

    /** Represents a DefaultRewardIfAlreadyOwned. */
    class DefaultRewardIfAlreadyOwned implements IDefaultRewardIfAlreadyOwned {

        /**
         * Constructs a new DefaultRewardIfAlreadyOwned.
         * @param [properties] Properties to set
         */
        constructor(properties?: DAILY_REWARDS.IDefaultRewardIfAlreadyOwned);

        /** DefaultRewardIfAlreadyOwned itemId. */
        public itemId: string;

        /** DefaultRewardIfAlreadyOwned amount. */
        public amount: number;

        /**
         * Creates a new DefaultRewardIfAlreadyOwned instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DefaultRewardIfAlreadyOwned instance
         */
        public static create(properties?: DAILY_REWARDS.IDefaultRewardIfAlreadyOwned): DAILY_REWARDS.DefaultRewardIfAlreadyOwned;

        /**
         * Encodes the specified DefaultRewardIfAlreadyOwned message. Does not implicitly {@link DAILY_REWARDS.DefaultRewardIfAlreadyOwned.verify|verify} messages.
         * @param message DefaultRewardIfAlreadyOwned message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: DAILY_REWARDS.IDefaultRewardIfAlreadyOwned, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DefaultRewardIfAlreadyOwned message, length delimited. Does not implicitly {@link DAILY_REWARDS.DefaultRewardIfAlreadyOwned.verify|verify} messages.
         * @param message DefaultRewardIfAlreadyOwned message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: DAILY_REWARDS.IDefaultRewardIfAlreadyOwned, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DefaultRewardIfAlreadyOwned message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DefaultRewardIfAlreadyOwned
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DAILY_REWARDS.DefaultRewardIfAlreadyOwned;

        /**
         * Decodes a DefaultRewardIfAlreadyOwned message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DefaultRewardIfAlreadyOwned
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DAILY_REWARDS.DefaultRewardIfAlreadyOwned;

        /**
         * Verifies a DefaultRewardIfAlreadyOwned message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DefaultRewardIfAlreadyOwned message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DefaultRewardIfAlreadyOwned
         */
        public static fromObject(object: { [k: string]: any }): DAILY_REWARDS.DefaultRewardIfAlreadyOwned;

        /**
         * Creates a plain object from a DefaultRewardIfAlreadyOwned message. Also converts values to other types if specified.
         * @param message DefaultRewardIfAlreadyOwned
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DAILY_REWARDS.DefaultRewardIfAlreadyOwned, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DefaultRewardIfAlreadyOwned to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DefaultRewardIfAlreadyOwned
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Properties of a EQUIPMENTS. */
export interface IEQUIPMENTS {

    /** EQUIPMENTS items */
    items?: (EQUIPMENTS.IItems[]|null);
}

/** Represents a EQUIPMENTS. */
export class EQUIPMENTS implements IEQUIPMENTS {

    /**
     * Constructs a new EQUIPMENTS.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEQUIPMENTS);

    /** EQUIPMENTS items. */
    public items: EQUIPMENTS.IItems[];

    /**
     * Creates a new EQUIPMENTS instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EQUIPMENTS instance
     */
    public static create(properties?: IEQUIPMENTS): EQUIPMENTS;

    /**
     * Encodes the specified EQUIPMENTS message. Does not implicitly {@link EQUIPMENTS.verify|verify} messages.
     * @param message EQUIPMENTS message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEQUIPMENTS, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EQUIPMENTS message, length delimited. Does not implicitly {@link EQUIPMENTS.verify|verify} messages.
     * @param message EQUIPMENTS message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEQUIPMENTS, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a EQUIPMENTS message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EQUIPMENTS
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EQUIPMENTS;

    /**
     * Decodes a EQUIPMENTS message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EQUIPMENTS
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EQUIPMENTS;

    /**
     * Verifies a EQUIPMENTS message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a EQUIPMENTS message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EQUIPMENTS
     */
    public static fromObject(object: { [k: string]: any }): EQUIPMENTS;

    /**
     * Creates a plain object from a EQUIPMENTS message. Also converts values to other types if specified.
     * @param message EQUIPMENTS
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EQUIPMENTS, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EQUIPMENTS to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for EQUIPMENTS
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace EQUIPMENTS {

    /** Properties of an Items. */
    interface IItems {

        /** Items image */
        image?: (string|null);

        /** Items equipmentName */
        equipmentName?: (string|null);

        /** Items id */
        id?: (string|null);

        /** Items equipmentType */
        equipmentType?: (string|null);

        /** Items rarity */
        rarity?: (string|null);

        /** Items points */
        points?: (number|null);
    }

    /** Represents an Items. */
    class Items implements IItems {

        /**
         * Constructs a new Items.
         * @param [properties] Properties to set
         */
        constructor(properties?: EQUIPMENTS.IItems);

        /** Items image. */
        public image: string;

        /** Items equipmentName. */
        public equipmentName: string;

        /** Items id. */
        public id: string;

        /** Items equipmentType. */
        public equipmentType: string;

        /** Items rarity. */
        public rarity: string;

        /** Items points. */
        public points: number;

        /**
         * Creates a new Items instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Items instance
         */
        public static create(properties?: EQUIPMENTS.IItems): EQUIPMENTS.Items;

        /**
         * Encodes the specified Items message. Does not implicitly {@link EQUIPMENTS.Items.verify|verify} messages.
         * @param message Items message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: EQUIPMENTS.IItems, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Items message, length delimited. Does not implicitly {@link EQUIPMENTS.Items.verify|verify} messages.
         * @param message Items message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: EQUIPMENTS.IItems, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Items message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Items
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EQUIPMENTS.Items;

        /**
         * Decodes an Items message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Items
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EQUIPMENTS.Items;

        /**
         * Verifies an Items message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Items message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Items
         */
        public static fromObject(object: { [k: string]: any }): EQUIPMENTS.Items;

        /**
         * Creates a plain object from an Items message. Also converts values to other types if specified.
         * @param message Items
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: EQUIPMENTS.Items, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Items to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Items
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Properties of a ITEM_TABLE. */
export interface IITEM_TABLE {

    /** ITEM_TABLE items */
    items?: (ITEM_TABLE.IItems[]|null);
}

/** Represents a ITEM_TABLE. */
export class ITEM_TABLE implements IITEM_TABLE {

    /**
     * Constructs a new ITEM_TABLE.
     * @param [properties] Properties to set
     */
    constructor(properties?: IITEM_TABLE);

    /** ITEM_TABLE items. */
    public items: ITEM_TABLE.IItems[];

    /**
     * Creates a new ITEM_TABLE instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ITEM_TABLE instance
     */
    public static create(properties?: IITEM_TABLE): ITEM_TABLE;

    /**
     * Encodes the specified ITEM_TABLE message. Does not implicitly {@link ITEM_TABLE.verify|verify} messages.
     * @param message ITEM_TABLE message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IITEM_TABLE, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ITEM_TABLE message, length delimited. Does not implicitly {@link ITEM_TABLE.verify|verify} messages.
     * @param message ITEM_TABLE message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IITEM_TABLE, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ITEM_TABLE message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ITEM_TABLE
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ITEM_TABLE;

    /**
     * Decodes a ITEM_TABLE message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ITEM_TABLE
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ITEM_TABLE;

    /**
     * Verifies a ITEM_TABLE message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ITEM_TABLE message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ITEM_TABLE
     */
    public static fromObject(object: { [k: string]: any }): ITEM_TABLE;

    /**
     * Creates a plain object from a ITEM_TABLE message. Also converts values to other types if specified.
     * @param message ITEM_TABLE
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ITEM_TABLE, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ITEM_TABLE to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ITEM_TABLE
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace ITEM_TABLE {

    /** Properties of an Items. */
    interface IItems {

        /** Items name */
        name?: (string|null);

        /** Items type */
        type?: (string|null);

        /** Items itemId */
        itemId?: (string|null);
    }

    /** Represents an Items. */
    class Items implements IItems {

        /**
         * Constructs a new Items.
         * @param [properties] Properties to set
         */
        constructor(properties?: ITEM_TABLE.IItems);

        /** Items name. */
        public name: string;

        /** Items type. */
        public type: string;

        /** Items itemId. */
        public itemId: string;

        /**
         * Creates a new Items instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Items instance
         */
        public static create(properties?: ITEM_TABLE.IItems): ITEM_TABLE.Items;

        /**
         * Encodes the specified Items message. Does not implicitly {@link ITEM_TABLE.Items.verify|verify} messages.
         * @param message Items message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ITEM_TABLE.IItems, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Items message, length delimited. Does not implicitly {@link ITEM_TABLE.Items.verify|verify} messages.
         * @param message Items message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ITEM_TABLE.IItems, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Items message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Items
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ITEM_TABLE.Items;

        /**
         * Decodes an Items message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Items
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ITEM_TABLE.Items;

        /**
         * Verifies an Items message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Items message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Items
         */
        public static fromObject(object: { [k: string]: any }): ITEM_TABLE.Items;

        /**
         * Creates a plain object from an Items message. Also converts values to other types if specified.
         * @param message Items
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ITEM_TABLE.Items, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Items to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Items
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Properties of a LUCKY_WHEEL. */
export interface ILUCKY_WHEEL {

    /** LUCKY_WHEEL minFullSpins */
    minFullSpins?: (number|null);

    /** LUCKY_WHEEL maxFullSpins */
    maxFullSpins?: (number|null);

    /** LUCKY_WHEEL items */
    items?: (LUCKY_WHEEL.IItems[]|null);

    /** LUCKY_WHEEL dailyLimit */
    dailyLimit?: (number|null);
}

/** Represents a LUCKY_WHEEL. */
export class LUCKY_WHEEL implements ILUCKY_WHEEL {

    /**
     * Constructs a new LUCKY_WHEEL.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILUCKY_WHEEL);

    /** LUCKY_WHEEL minFullSpins. */
    public minFullSpins: number;

    /** LUCKY_WHEEL maxFullSpins. */
    public maxFullSpins: number;

    /** LUCKY_WHEEL items. */
    public items: LUCKY_WHEEL.IItems[];

    /** LUCKY_WHEEL dailyLimit. */
    public dailyLimit: number;

    /**
     * Creates a new LUCKY_WHEEL instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LUCKY_WHEEL instance
     */
    public static create(properties?: ILUCKY_WHEEL): LUCKY_WHEEL;

    /**
     * Encodes the specified LUCKY_WHEEL message. Does not implicitly {@link LUCKY_WHEEL.verify|verify} messages.
     * @param message LUCKY_WHEEL message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILUCKY_WHEEL, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LUCKY_WHEEL message, length delimited. Does not implicitly {@link LUCKY_WHEEL.verify|verify} messages.
     * @param message LUCKY_WHEEL message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILUCKY_WHEEL, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LUCKY_WHEEL message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LUCKY_WHEEL
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LUCKY_WHEEL;

    /**
     * Decodes a LUCKY_WHEEL message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LUCKY_WHEEL
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LUCKY_WHEEL;

    /**
     * Verifies a LUCKY_WHEEL message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LUCKY_WHEEL message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LUCKY_WHEEL
     */
    public static fromObject(object: { [k: string]: any }): LUCKY_WHEEL;

    /**
     * Creates a plain object from a LUCKY_WHEEL message. Also converts values to other types if specified.
     * @param message LUCKY_WHEEL
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LUCKY_WHEEL, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LUCKY_WHEEL to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for LUCKY_WHEEL
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace LUCKY_WHEEL {

    /** Properties of an Items. */
    interface IItems {

        /** Items itemId */
        itemId?: (string|null);

        /** Items weight */
        weight?: (number|null);

        /** Items quantity */
        quantity?: (number|null);
    }

    /** Represents an Items. */
    class Items implements IItems {

        /**
         * Constructs a new Items.
         * @param [properties] Properties to set
         */
        constructor(properties?: LUCKY_WHEEL.IItems);

        /** Items itemId. */
        public itemId: string;

        /** Items weight. */
        public weight: number;

        /** Items quantity. */
        public quantity: number;

        /**
         * Creates a new Items instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Items instance
         */
        public static create(properties?: LUCKY_WHEEL.IItems): LUCKY_WHEEL.Items;

        /**
         * Encodes the specified Items message. Does not implicitly {@link LUCKY_WHEEL.Items.verify|verify} messages.
         * @param message Items message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: LUCKY_WHEEL.IItems, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Items message, length delimited. Does not implicitly {@link LUCKY_WHEEL.Items.verify|verify} messages.
         * @param message Items message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: LUCKY_WHEEL.IItems, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Items message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Items
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LUCKY_WHEEL.Items;

        /**
         * Decodes an Items message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Items
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LUCKY_WHEEL.Items;

        /**
         * Verifies an Items message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Items message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Items
         */
        public static fromObject(object: { [k: string]: any }): LUCKY_WHEEL.Items;

        /**
         * Creates a plain object from an Items message. Also converts values to other types if specified.
         * @param message Items
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: LUCKY_WHEEL.Items, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Items to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Items
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Properties of a PROGRESS_QUEST. */
export interface IPROGRESS_QUEST {

    /** PROGRESS_QUEST items */
    items?: (PROGRESS_QUEST.IItems[]|null);
}

/** Represents a PROGRESS_QUEST. */
export class PROGRESS_QUEST implements IPROGRESS_QUEST {

    /**
     * Constructs a new PROGRESS_QUEST.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPROGRESS_QUEST);

    /** PROGRESS_QUEST items. */
    public items: PROGRESS_QUEST.IItems[];

    /**
     * Creates a new PROGRESS_QUEST instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PROGRESS_QUEST instance
     */
    public static create(properties?: IPROGRESS_QUEST): PROGRESS_QUEST;

    /**
     * Encodes the specified PROGRESS_QUEST message. Does not implicitly {@link PROGRESS_QUEST.verify|verify} messages.
     * @param message PROGRESS_QUEST message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPROGRESS_QUEST, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PROGRESS_QUEST message, length delimited. Does not implicitly {@link PROGRESS_QUEST.verify|verify} messages.
     * @param message PROGRESS_QUEST message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPROGRESS_QUEST, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PROGRESS_QUEST message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PROGRESS_QUEST
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PROGRESS_QUEST;

    /**
     * Decodes a PROGRESS_QUEST message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PROGRESS_QUEST
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PROGRESS_QUEST;

    /**
     * Verifies a PROGRESS_QUEST message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PROGRESS_QUEST message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PROGRESS_QUEST
     */
    public static fromObject(object: { [k: string]: any }): PROGRESS_QUEST;

    /**
     * Creates a plain object from a PROGRESS_QUEST message. Also converts values to other types if specified.
     * @param message PROGRESS_QUEST
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PROGRESS_QUEST, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PROGRESS_QUEST to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for PROGRESS_QUEST
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace PROGRESS_QUEST {

    /** Properties of an Items. */
    interface IItems {

        /** Items conditionReach */
        conditionReach?: (number|null);

        /** Items condition */
        condition?: (string|null);

        /** Items rewardId */
        rewardId?: (string|null);

        /** Items questName */
        questName?: (string|null);

        /** Items rewardQuantity */
        rewardQuantity?: (number|null);

        /** Items id */
        id?: (string|null);

        /** Items levelUnlock */
        levelUnlock?: (number|null);
    }

    /** Represents an Items. */
    class Items implements IItems {

        /**
         * Constructs a new Items.
         * @param [properties] Properties to set
         */
        constructor(properties?: PROGRESS_QUEST.IItems);

        /** Items conditionReach. */
        public conditionReach: number;

        /** Items condition. */
        public condition: string;

        /** Items rewardId. */
        public rewardId: string;

        /** Items questName. */
        public questName: string;

        /** Items rewardQuantity. */
        public rewardQuantity: number;

        /** Items id. */
        public id: string;

        /** Items levelUnlock. */
        public levelUnlock: number;

        /**
         * Creates a new Items instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Items instance
         */
        public static create(properties?: PROGRESS_QUEST.IItems): PROGRESS_QUEST.Items;

        /**
         * Encodes the specified Items message. Does not implicitly {@link PROGRESS_QUEST.Items.verify|verify} messages.
         * @param message Items message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PROGRESS_QUEST.IItems, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Items message, length delimited. Does not implicitly {@link PROGRESS_QUEST.Items.verify|verify} messages.
         * @param message Items message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PROGRESS_QUEST.IItems, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Items message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Items
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PROGRESS_QUEST.Items;

        /**
         * Decodes an Items message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Items
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PROGRESS_QUEST.Items;

        /**
         * Verifies an Items message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Items message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Items
         */
        public static fromObject(object: { [k: string]: any }): PROGRESS_QUEST.Items;

        /**
         * Creates a plain object from an Items message. Also converts values to other types if specified.
         * @param message Items
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PROGRESS_QUEST.Items, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Items to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Items
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Properties of a TEST. */
export interface ITEST {

    /** TEST name */
    name?: (string|null);

    /** TEST image */
    image?: (string|null);
}

/** Represents a TEST. */
export class TEST implements ITEST {

    /**
     * Constructs a new TEST.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITEST);

    /** TEST name. */
    public name: string;

    /** TEST image. */
    public image: string;

    /**
     * Creates a new TEST instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TEST instance
     */
    public static create(properties?: ITEST): TEST;

    /**
     * Encodes the specified TEST message. Does not implicitly {@link TEST.verify|verify} messages.
     * @param message TEST message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITEST, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TEST message, length delimited. Does not implicitly {@link TEST.verify|verify} messages.
     * @param message TEST message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITEST, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TEST message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TEST
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TEST;

    /**
     * Decodes a TEST message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TEST
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TEST;

    /**
     * Verifies a TEST message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TEST message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TEST
     */
    public static fromObject(object: { [k: string]: any }): TEST;

    /**
     * Creates a plain object from a TEST message. Also converts values to other types if specified.
     * @param message TEST
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TEST, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TEST to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for TEST
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of an Empty. */
export interface IEmpty {
}

/** Represents an Empty. */
export class Empty implements IEmpty {

    /**
     * Constructs a new Empty.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEmpty);

    /**
     * Creates a new Empty instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Empty instance
     */
    public static create(properties?: IEmpty): Empty;

    /**
     * Encodes the specified Empty message. Does not implicitly {@link Empty.verify|verify} messages.
     * @param message Empty message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Empty message, length delimited. Does not implicitly {@link Empty.verify|verify} messages.
     * @param message Empty message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an Empty message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Empty
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Empty;

    /**
     * Decodes an Empty message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Empty
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Empty;

    /**
     * Verifies an Empty message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an Empty message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Empty
     */
    public static fromObject(object: { [k: string]: any }): Empty;

    /**
     * Creates a plain object from an Empty message. Also converts values to other types if specified.
     * @param message Empty
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Empty to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Empty
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a GameScripts */
export class GameScripts extends $protobuf.rpc.Service {

    /**
     * Constructs a new GameScripts service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

    /**
     * Creates new GameScripts service using the specified rpc implementation.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     * @returns RPC service. Useful where requests and/or responses are streamed.
     */
    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): GameScripts;
}

export namespace GameScripts {

    /** Represents a Test */
    class Test extends $protobuf.rpc.Service {

        /**
         * Constructs a new Test service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new Test service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Test;

        /**
         * Calls helloWorld.
         * @param request Empty message or plain object
         * @param callback Node-style callback called with the error, if any, and TestHelloWorldRes
         */
        public helloWorld(request: IEmpty, callback: GameScripts.Test.helloWorldCallback): void;

        /**
         * Calls helloWorld.
         * @param request Empty message or plain object
         * @returns Promise
         */
        public helloWorld(request: IEmpty): Promise<TestHelloWorldRes>;
    }

    namespace Test {

        /**
         * Callback as used by {@link GameScripts.Test#helloWorld}.
         * @param error Error, if any
         * @param [response] TestHelloWorldRes
         */
        type helloWorldCallback = (error: (Error|null), response?: TestHelloWorldRes) => void;
    }

    /** Represents a Lucky_Wheel */
    class Lucky_Wheel extends $protobuf.rpc.Service {

        /**
         * Constructs a new Lucky_Wheel service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new Lucky_Wheel service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Lucky_Wheel;

        /**
         * Calls claimItem.
         * @param request Empty message or plain object
         * @param callback Node-style callback called with the error, if any, and LuckyWheelClaimItemOutput
         */
        public claimItem(request: IEmpty, callback: GameScripts.Lucky_Wheel.claimItemCallback): void;

        /**
         * Calls claimItem.
         * @param request Empty message or plain object
         * @returns Promise
         */
        public claimItem(request: IEmpty): Promise<LuckyWheelClaimItemOutput>;

        /**
         * Calls canClaimItem.
         * @param request Empty message or plain object
         * @param callback Node-style callback called with the error, if any, and LuckyWheelCanClaimOutput
         */
        public canClaimItem(request: IEmpty, callback: GameScripts.Lucky_Wheel.canClaimItemCallback): void;

        /**
         * Calls canClaimItem.
         * @param request Empty message or plain object
         * @returns Promise
         */
        public canClaimItem(request: IEmpty): Promise<LuckyWheelCanClaimOutput>;

        /**
         * Calls getList.
         * @param request Empty message or plain object
         * @param callback Node-style callback called with the error, if any, and LuckyWheel
         */
        public getList(request: IEmpty, callback: GameScripts.Lucky_Wheel.getListCallback): void;

        /**
         * Calls getList.
         * @param request Empty message or plain object
         * @returns Promise
         */
        public getList(request: IEmpty): Promise<LuckyWheel>;
    }

    namespace Lucky_Wheel {

        /**
         * Callback as used by {@link GameScripts.Lucky_Wheel#claimItem}.
         * @param error Error, if any
         * @param [response] LuckyWheelClaimItemOutput
         */
        type claimItemCallback = (error: (Error|null), response?: LuckyWheelClaimItemOutput) => void;

        /**
         * Callback as used by {@link GameScripts.Lucky_Wheel#canClaimItem}.
         * @param error Error, if any
         * @param [response] LuckyWheelCanClaimOutput
         */
        type canClaimItemCallback = (error: (Error|null), response?: LuckyWheelCanClaimOutput) => void;

        /**
         * Callback as used by {@link GameScripts.Lucky_Wheel#getList}.
         * @param error Error, if any
         * @param [response] LuckyWheel
         */
        type getListCallback = (error: (Error|null), response?: LuckyWheel) => void;
    }

    /** Represents a Daily_Rewards */
    class Daily_Rewards extends $protobuf.rpc.Service {

        /**
         * Constructs a new Daily_Rewards service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new Daily_Rewards service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Daily_Rewards;

        /**
         * Calls canClaimRewards.
         * @param request Empty message or plain object
         * @param callback Node-style callback called with the error, if any, and DailyRewardsCanClaimRewardOutput
         */
        public canClaimRewards(request: IEmpty, callback: GameScripts.Daily_Rewards.canClaimRewardsCallback): void;

        /**
         * Calls canClaimRewards.
         * @param request Empty message or plain object
         * @returns Promise
         */
        public canClaimRewards(request: IEmpty): Promise<DailyRewardsCanClaimRewardOutput>;

        /**
         * Calls claimRewards.
         * @param request Empty message or plain object
         * @param callback Node-style callback called with the error, if any, and DailyRewardsClaimRewardsOutput
         */
        public claimRewards(request: IEmpty, callback: GameScripts.Daily_Rewards.claimRewardsCallback): void;

        /**
         * Calls claimRewards.
         * @param request Empty message or plain object
         * @returns Promise
         */
        public claimRewards(request: IEmpty): Promise<DailyRewardsClaimRewardsOutput>;
    }

    namespace Daily_Rewards {

        /**
         * Callback as used by {@link GameScripts.Daily_Rewards#canClaimRewards}.
         * @param error Error, if any
         * @param [response] DailyRewardsCanClaimRewardOutput
         */
        type canClaimRewardsCallback = (error: (Error|null), response?: DailyRewardsCanClaimRewardOutput) => void;

        /**
         * Callback as used by {@link GameScripts.Daily_Rewards#claimRewards}.
         * @param error Error, if any
         * @param [response] DailyRewardsClaimRewardsOutput
         */
        type claimRewardsCallback = (error: (Error|null), response?: DailyRewardsClaimRewardsOutput) => void;
    }

    /** Represents a Daily_Quest */
    class Daily_Quest extends $protobuf.rpc.Service {

        /**
         * Constructs a new Daily_Quest service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new Daily_Quest service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Daily_Quest;

        /**
         * Calls getList.
         * @param request Empty message or plain object
         * @param callback Node-style callback called with the error, if any, and DailyQuestOutput
         */
        public getList(request: IEmpty, callback: GameScripts.Daily_Quest.getListCallback): void;

        /**
         * Calls getList.
         * @param request Empty message or plain object
         * @returns Promise
         */
        public getList(request: IEmpty): Promise<DailyQuestOutput>;

        /**
         * Calls updateQuest.
         * @param request DailyQuestUpdateQuestInput message or plain object
         * @param callback Node-style callback called with the error, if any, and DailyQuestUpdateQuestOutput
         */
        public updateQuest(request: IDailyQuestUpdateQuestInput, callback: GameScripts.Daily_Quest.updateQuestCallback): void;

        /**
         * Calls updateQuest.
         * @param request DailyQuestUpdateQuestInput message or plain object
         * @returns Promise
         */
        public updateQuest(request: IDailyQuestUpdateQuestInput): Promise<DailyQuestUpdateQuestOutput>;

        /**
         * Calls claimQuest.
         * @param request DailyQuestClaimQuestInput message or plain object
         * @param callback Node-style callback called with the error, if any, and DailyQuestClaimQuestOutput
         */
        public claimQuest(request: IDailyQuestClaimQuestInput, callback: GameScripts.Daily_Quest.claimQuestCallback): void;

        /**
         * Calls claimQuest.
         * @param request DailyQuestClaimQuestInput message or plain object
         * @returns Promise
         */
        public claimQuest(request: IDailyQuestClaimQuestInput): Promise<DailyQuestClaimQuestOutput>;
    }

    namespace Daily_Quest {

        /**
         * Callback as used by {@link GameScripts.Daily_Quest#getList}.
         * @param error Error, if any
         * @param [response] DailyQuestOutput
         */
        type getListCallback = (error: (Error|null), response?: DailyQuestOutput) => void;

        /**
         * Callback as used by {@link GameScripts.Daily_Quest#updateQuest}.
         * @param error Error, if any
         * @param [response] DailyQuestUpdateQuestOutput
         */
        type updateQuestCallback = (error: (Error|null), response?: DailyQuestUpdateQuestOutput) => void;

        /**
         * Callback as used by {@link GameScripts.Daily_Quest#claimQuest}.
         * @param error Error, if any
         * @param [response] DailyQuestClaimQuestOutput
         */
        type claimQuestCallback = (error: (Error|null), response?: DailyQuestClaimQuestOutput) => void;
    }
}

/** Properties of a TestHelloWorldRes. */
export interface ITestHelloWorldRes {

    /** TestHelloWorldRes counter */
    counter?: (number|null);

    /** TestHelloWorldRes name */
    name?: (string|null);
}

/** Represents a TestHelloWorldRes. */
export class TestHelloWorldRes implements ITestHelloWorldRes {

    /**
     * Constructs a new TestHelloWorldRes.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITestHelloWorldRes);

    /** TestHelloWorldRes counter. */
    public counter: number;

    /** TestHelloWorldRes name. */
    public name: string;

    /**
     * Creates a new TestHelloWorldRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TestHelloWorldRes instance
     */
    public static create(properties?: ITestHelloWorldRes): TestHelloWorldRes;

    /**
     * Encodes the specified TestHelloWorldRes message. Does not implicitly {@link TestHelloWorldRes.verify|verify} messages.
     * @param message TestHelloWorldRes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITestHelloWorldRes, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TestHelloWorldRes message, length delimited. Does not implicitly {@link TestHelloWorldRes.verify|verify} messages.
     * @param message TestHelloWorldRes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITestHelloWorldRes, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TestHelloWorldRes message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TestHelloWorldRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TestHelloWorldRes;

    /**
     * Decodes a TestHelloWorldRes message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TestHelloWorldRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TestHelloWorldRes;

    /**
     * Verifies a TestHelloWorldRes message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TestHelloWorldRes message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TestHelloWorldRes
     */
    public static fromObject(object: { [k: string]: any }): TestHelloWorldRes;

    /**
     * Creates a plain object from a TestHelloWorldRes message. Also converts values to other types if specified.
     * @param message TestHelloWorldRes
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TestHelloWorldRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TestHelloWorldRes to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for TestHelloWorldRes
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DailyQuestOutput. */
export interface IDailyQuestOutput {

    /** DailyQuestOutput dailyQuest */
    dailyQuest?: (DailyQuestOutput.IDailyquest[]|null);
}

/** Represents a DailyQuestOutput. */
export class DailyQuestOutput implements IDailyQuestOutput {

    /**
     * Constructs a new DailyQuestOutput.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDailyQuestOutput);

    /** DailyQuestOutput dailyQuest. */
    public dailyQuest: DailyQuestOutput.IDailyquest[];

    /**
     * Creates a new DailyQuestOutput instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DailyQuestOutput instance
     */
    public static create(properties?: IDailyQuestOutput): DailyQuestOutput;

    /**
     * Encodes the specified DailyQuestOutput message. Does not implicitly {@link DailyQuestOutput.verify|verify} messages.
     * @param message DailyQuestOutput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDailyQuestOutput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DailyQuestOutput message, length delimited. Does not implicitly {@link DailyQuestOutput.verify|verify} messages.
     * @param message DailyQuestOutput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDailyQuestOutput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DailyQuestOutput message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DailyQuestOutput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DailyQuestOutput;

    /**
     * Decodes a DailyQuestOutput message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DailyQuestOutput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DailyQuestOutput;

    /**
     * Verifies a DailyQuestOutput message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DailyQuestOutput message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DailyQuestOutput
     */
    public static fromObject(object: { [k: string]: any }): DailyQuestOutput;

    /**
     * Creates a plain object from a DailyQuestOutput message. Also converts values to other types if specified.
     * @param message DailyQuestOutput
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DailyQuestOutput, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DailyQuestOutput to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DailyQuestOutput
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace DailyQuestOutput {

    /** Properties of a Dailyquest. */
    interface IDailyquest {

        /** Dailyquest conditionReach */
        conditionReach?: (number|null);

        /** Dailyquest rewardQuantity */
        rewardQuantity?: (number|null);

        /** Dailyquest condition */
        condition?: (string|null);

        /** Dailyquest rewardId */
        rewardId?: (string|null);

        /** Dailyquest id */
        id?: (string|null);

        /** Dailyquest questName */
        questName?: (string|null);

        /** Dailyquest progress */
        progress?: (number|null);

        /** Dailyquest canClaim */
        canClaim?: (boolean|null);
    }

    /** Represents a Dailyquest. */
    class Dailyquest implements IDailyquest {

        /**
         * Constructs a new Dailyquest.
         * @param [properties] Properties to set
         */
        constructor(properties?: DailyQuestOutput.IDailyquest);

        /** Dailyquest conditionReach. */
        public conditionReach: number;

        /** Dailyquest rewardQuantity. */
        public rewardQuantity: number;

        /** Dailyquest condition. */
        public condition: string;

        /** Dailyquest rewardId. */
        public rewardId: string;

        /** Dailyquest id. */
        public id: string;

        /** Dailyquest questName. */
        public questName: string;

        /** Dailyquest progress. */
        public progress: number;

        /** Dailyquest canClaim. */
        public canClaim: boolean;

        /**
         * Creates a new Dailyquest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Dailyquest instance
         */
        public static create(properties?: DailyQuestOutput.IDailyquest): DailyQuestOutput.Dailyquest;

        /**
         * Encodes the specified Dailyquest message. Does not implicitly {@link DailyQuestOutput.Dailyquest.verify|verify} messages.
         * @param message Dailyquest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: DailyQuestOutput.IDailyquest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Dailyquest message, length delimited. Does not implicitly {@link DailyQuestOutput.Dailyquest.verify|verify} messages.
         * @param message Dailyquest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: DailyQuestOutput.IDailyquest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Dailyquest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Dailyquest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DailyQuestOutput.Dailyquest;

        /**
         * Decodes a Dailyquest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Dailyquest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DailyQuestOutput.Dailyquest;

        /**
         * Verifies a Dailyquest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Dailyquest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Dailyquest
         */
        public static fromObject(object: { [k: string]: any }): DailyQuestOutput.Dailyquest;

        /**
         * Creates a plain object from a Dailyquest message. Also converts values to other types if specified.
         * @param message Dailyquest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DailyQuestOutput.Dailyquest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Dailyquest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Dailyquest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Properties of a DailyQuestUpdateQuestInput. */
export interface IDailyQuestUpdateQuestInput {

    /** DailyQuestUpdateQuestInput items */
    items?: (DailyQuestUpdateQuestInput.IItems[]|null);
}

/** Represents a DailyQuestUpdateQuestInput. */
export class DailyQuestUpdateQuestInput implements IDailyQuestUpdateQuestInput {

    /**
     * Constructs a new DailyQuestUpdateQuestInput.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDailyQuestUpdateQuestInput);

    /** DailyQuestUpdateQuestInput items. */
    public items: DailyQuestUpdateQuestInput.IItems[];

    /**
     * Creates a new DailyQuestUpdateQuestInput instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DailyQuestUpdateQuestInput instance
     */
    public static create(properties?: IDailyQuestUpdateQuestInput): DailyQuestUpdateQuestInput;

    /**
     * Encodes the specified DailyQuestUpdateQuestInput message. Does not implicitly {@link DailyQuestUpdateQuestInput.verify|verify} messages.
     * @param message DailyQuestUpdateQuestInput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDailyQuestUpdateQuestInput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DailyQuestUpdateQuestInput message, length delimited. Does not implicitly {@link DailyQuestUpdateQuestInput.verify|verify} messages.
     * @param message DailyQuestUpdateQuestInput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDailyQuestUpdateQuestInput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DailyQuestUpdateQuestInput message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DailyQuestUpdateQuestInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DailyQuestUpdateQuestInput;

    /**
     * Decodes a DailyQuestUpdateQuestInput message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DailyQuestUpdateQuestInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DailyQuestUpdateQuestInput;

    /**
     * Verifies a DailyQuestUpdateQuestInput message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DailyQuestUpdateQuestInput message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DailyQuestUpdateQuestInput
     */
    public static fromObject(object: { [k: string]: any }): DailyQuestUpdateQuestInput;

    /**
     * Creates a plain object from a DailyQuestUpdateQuestInput message. Also converts values to other types if specified.
     * @param message DailyQuestUpdateQuestInput
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DailyQuestUpdateQuestInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DailyQuestUpdateQuestInput to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DailyQuestUpdateQuestInput
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace DailyQuestUpdateQuestInput {

    /** Properties of an Items. */
    interface IItems {

        /** Items id */
        id?: (string|null);

        /** Items amount */
        amount?: (number|null);
    }

    /** Represents an Items. */
    class Items implements IItems {

        /**
         * Constructs a new Items.
         * @param [properties] Properties to set
         */
        constructor(properties?: DailyQuestUpdateQuestInput.IItems);

        /** Items id. */
        public id: string;

        /** Items amount. */
        public amount: number;

        /**
         * Creates a new Items instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Items instance
         */
        public static create(properties?: DailyQuestUpdateQuestInput.IItems): DailyQuestUpdateQuestInput.Items;

        /**
         * Encodes the specified Items message. Does not implicitly {@link DailyQuestUpdateQuestInput.Items.verify|verify} messages.
         * @param message Items message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: DailyQuestUpdateQuestInput.IItems, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Items message, length delimited. Does not implicitly {@link DailyQuestUpdateQuestInput.Items.verify|verify} messages.
         * @param message Items message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: DailyQuestUpdateQuestInput.IItems, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Items message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Items
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DailyQuestUpdateQuestInput.Items;

        /**
         * Decodes an Items message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Items
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DailyQuestUpdateQuestInput.Items;

        /**
         * Verifies an Items message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Items message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Items
         */
        public static fromObject(object: { [k: string]: any }): DailyQuestUpdateQuestInput.Items;

        /**
         * Creates a plain object from an Items message. Also converts values to other types if specified.
         * @param message Items
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DailyQuestUpdateQuestInput.Items, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Items to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Items
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Properties of a DailyQuestUpdateQuestOutput. */
export interface IDailyQuestUpdateQuestOutput {

    /** DailyQuestUpdateQuestOutput questsCanClaim */
    questsCanClaim?: (string[]|null);
}

/** Represents a DailyQuestUpdateQuestOutput. */
export class DailyQuestUpdateQuestOutput implements IDailyQuestUpdateQuestOutput {

    /**
     * Constructs a new DailyQuestUpdateQuestOutput.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDailyQuestUpdateQuestOutput);

    /** DailyQuestUpdateQuestOutput questsCanClaim. */
    public questsCanClaim: string[];

    /**
     * Creates a new DailyQuestUpdateQuestOutput instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DailyQuestUpdateQuestOutput instance
     */
    public static create(properties?: IDailyQuestUpdateQuestOutput): DailyQuestUpdateQuestOutput;

    /**
     * Encodes the specified DailyQuestUpdateQuestOutput message. Does not implicitly {@link DailyQuestUpdateQuestOutput.verify|verify} messages.
     * @param message DailyQuestUpdateQuestOutput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDailyQuestUpdateQuestOutput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DailyQuestUpdateQuestOutput message, length delimited. Does not implicitly {@link DailyQuestUpdateQuestOutput.verify|verify} messages.
     * @param message DailyQuestUpdateQuestOutput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDailyQuestUpdateQuestOutput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DailyQuestUpdateQuestOutput message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DailyQuestUpdateQuestOutput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DailyQuestUpdateQuestOutput;

    /**
     * Decodes a DailyQuestUpdateQuestOutput message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DailyQuestUpdateQuestOutput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DailyQuestUpdateQuestOutput;

    /**
     * Verifies a DailyQuestUpdateQuestOutput message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DailyQuestUpdateQuestOutput message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DailyQuestUpdateQuestOutput
     */
    public static fromObject(object: { [k: string]: any }): DailyQuestUpdateQuestOutput;

    /**
     * Creates a plain object from a DailyQuestUpdateQuestOutput message. Also converts values to other types if specified.
     * @param message DailyQuestUpdateQuestOutput
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DailyQuestUpdateQuestOutput, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DailyQuestUpdateQuestOutput to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DailyQuestUpdateQuestOutput
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DailyQuestClaimQuestInput. */
export interface IDailyQuestClaimQuestInput {

    /** DailyQuestClaimQuestInput items */
    items?: (string[]|null);
}

/** Represents a DailyQuestClaimQuestInput. */
export class DailyQuestClaimQuestInput implements IDailyQuestClaimQuestInput {

    /**
     * Constructs a new DailyQuestClaimQuestInput.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDailyQuestClaimQuestInput);

    /** DailyQuestClaimQuestInput items. */
    public items: string[];

    /**
     * Creates a new DailyQuestClaimQuestInput instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DailyQuestClaimQuestInput instance
     */
    public static create(properties?: IDailyQuestClaimQuestInput): DailyQuestClaimQuestInput;

    /**
     * Encodes the specified DailyQuestClaimQuestInput message. Does not implicitly {@link DailyQuestClaimQuestInput.verify|verify} messages.
     * @param message DailyQuestClaimQuestInput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDailyQuestClaimQuestInput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DailyQuestClaimQuestInput message, length delimited. Does not implicitly {@link DailyQuestClaimQuestInput.verify|verify} messages.
     * @param message DailyQuestClaimQuestInput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDailyQuestClaimQuestInput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DailyQuestClaimQuestInput message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DailyQuestClaimQuestInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DailyQuestClaimQuestInput;

    /**
     * Decodes a DailyQuestClaimQuestInput message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DailyQuestClaimQuestInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DailyQuestClaimQuestInput;

    /**
     * Verifies a DailyQuestClaimQuestInput message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DailyQuestClaimQuestInput message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DailyQuestClaimQuestInput
     */
    public static fromObject(object: { [k: string]: any }): DailyQuestClaimQuestInput;

    /**
     * Creates a plain object from a DailyQuestClaimQuestInput message. Also converts values to other types if specified.
     * @param message DailyQuestClaimQuestInput
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DailyQuestClaimQuestInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DailyQuestClaimQuestInput to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DailyQuestClaimQuestInput
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DailyQuestClaimQuestOutput. */
export interface IDailyQuestClaimQuestOutput {

    /** DailyQuestClaimQuestOutput rewards */
    rewards?: (DailyQuestClaimQuestOutput.IRewards[]|null);
}

/** Represents a DailyQuestClaimQuestOutput. */
export class DailyQuestClaimQuestOutput implements IDailyQuestClaimQuestOutput {

    /**
     * Constructs a new DailyQuestClaimQuestOutput.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDailyQuestClaimQuestOutput);

    /** DailyQuestClaimQuestOutput rewards. */
    public rewards: DailyQuestClaimQuestOutput.IRewards[];

    /**
     * Creates a new DailyQuestClaimQuestOutput instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DailyQuestClaimQuestOutput instance
     */
    public static create(properties?: IDailyQuestClaimQuestOutput): DailyQuestClaimQuestOutput;

    /**
     * Encodes the specified DailyQuestClaimQuestOutput message. Does not implicitly {@link DailyQuestClaimQuestOutput.verify|verify} messages.
     * @param message DailyQuestClaimQuestOutput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDailyQuestClaimQuestOutput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DailyQuestClaimQuestOutput message, length delimited. Does not implicitly {@link DailyQuestClaimQuestOutput.verify|verify} messages.
     * @param message DailyQuestClaimQuestOutput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDailyQuestClaimQuestOutput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DailyQuestClaimQuestOutput message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DailyQuestClaimQuestOutput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DailyQuestClaimQuestOutput;

    /**
     * Decodes a DailyQuestClaimQuestOutput message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DailyQuestClaimQuestOutput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DailyQuestClaimQuestOutput;

    /**
     * Verifies a DailyQuestClaimQuestOutput message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DailyQuestClaimQuestOutput message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DailyQuestClaimQuestOutput
     */
    public static fromObject(object: { [k: string]: any }): DailyQuestClaimQuestOutput;

    /**
     * Creates a plain object from a DailyQuestClaimQuestOutput message. Also converts values to other types if specified.
     * @param message DailyQuestClaimQuestOutput
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DailyQuestClaimQuestOutput, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DailyQuestClaimQuestOutput to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DailyQuestClaimQuestOutput
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace DailyQuestClaimQuestOutput {

    /** Properties of a Rewards. */
    interface IRewards {

        /** Rewards itemId */
        itemId?: (string|null);

        /** Rewards amount */
        amount?: (number|null);
    }

    /** Represents a Rewards. */
    class Rewards implements IRewards {

        /**
         * Constructs a new Rewards.
         * @param [properties] Properties to set
         */
        constructor(properties?: DailyQuestClaimQuestOutput.IRewards);

        /** Rewards itemId. */
        public itemId: string;

        /** Rewards amount. */
        public amount: number;

        /**
         * Creates a new Rewards instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Rewards instance
         */
        public static create(properties?: DailyQuestClaimQuestOutput.IRewards): DailyQuestClaimQuestOutput.Rewards;

        /**
         * Encodes the specified Rewards message. Does not implicitly {@link DailyQuestClaimQuestOutput.Rewards.verify|verify} messages.
         * @param message Rewards message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: DailyQuestClaimQuestOutput.IRewards, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Rewards message, length delimited. Does not implicitly {@link DailyQuestClaimQuestOutput.Rewards.verify|verify} messages.
         * @param message Rewards message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: DailyQuestClaimQuestOutput.IRewards, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Rewards message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Rewards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DailyQuestClaimQuestOutput.Rewards;

        /**
         * Decodes a Rewards message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Rewards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DailyQuestClaimQuestOutput.Rewards;

        /**
         * Verifies a Rewards message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Rewards message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Rewards
         */
        public static fromObject(object: { [k: string]: any }): DailyQuestClaimQuestOutput.Rewards;

        /**
         * Creates a plain object from a Rewards message. Also converts values to other types if specified.
         * @param message Rewards
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DailyQuestClaimQuestOutput.Rewards, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Rewards to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Rewards
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Properties of a DailyRewardsCanClaimRewardOutput. */
export interface IDailyRewardsCanClaimRewardOutput {

    /** DailyRewardsCanClaimRewardOutput curStep */
    curStep?: (number|null);

    /** DailyRewardsCanClaimRewardOutput rewards */
    rewards?: (DailyRewardsCanClaimRewardOutput.IRewards[]|null);
}

/** Represents a DailyRewardsCanClaimRewardOutput. */
export class DailyRewardsCanClaimRewardOutput implements IDailyRewardsCanClaimRewardOutput {

    /**
     * Constructs a new DailyRewardsCanClaimRewardOutput.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDailyRewardsCanClaimRewardOutput);

    /** DailyRewardsCanClaimRewardOutput curStep. */
    public curStep: number;

    /** DailyRewardsCanClaimRewardOutput rewards. */
    public rewards: DailyRewardsCanClaimRewardOutput.IRewards[];

    /**
     * Creates a new DailyRewardsCanClaimRewardOutput instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DailyRewardsCanClaimRewardOutput instance
     */
    public static create(properties?: IDailyRewardsCanClaimRewardOutput): DailyRewardsCanClaimRewardOutput;

    /**
     * Encodes the specified DailyRewardsCanClaimRewardOutput message. Does not implicitly {@link DailyRewardsCanClaimRewardOutput.verify|verify} messages.
     * @param message DailyRewardsCanClaimRewardOutput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDailyRewardsCanClaimRewardOutput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DailyRewardsCanClaimRewardOutput message, length delimited. Does not implicitly {@link DailyRewardsCanClaimRewardOutput.verify|verify} messages.
     * @param message DailyRewardsCanClaimRewardOutput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDailyRewardsCanClaimRewardOutput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DailyRewardsCanClaimRewardOutput message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DailyRewardsCanClaimRewardOutput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DailyRewardsCanClaimRewardOutput;

    /**
     * Decodes a DailyRewardsCanClaimRewardOutput message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DailyRewardsCanClaimRewardOutput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DailyRewardsCanClaimRewardOutput;

    /**
     * Verifies a DailyRewardsCanClaimRewardOutput message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DailyRewardsCanClaimRewardOutput message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DailyRewardsCanClaimRewardOutput
     */
    public static fromObject(object: { [k: string]: any }): DailyRewardsCanClaimRewardOutput;

    /**
     * Creates a plain object from a DailyRewardsCanClaimRewardOutput message. Also converts values to other types if specified.
     * @param message DailyRewardsCanClaimRewardOutput
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DailyRewardsCanClaimRewardOutput, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DailyRewardsCanClaimRewardOutput to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DailyRewardsCanClaimRewardOutput
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace DailyRewardsCanClaimRewardOutput {

    /** Properties of a Rewards. */
    interface IRewards {

        /** Rewards itemId */
        itemId?: (string|null);

        /** Rewards step */
        step?: (number|null);

        /** Rewards amount */
        amount?: (number|null);
    }

    /** Represents a Rewards. */
    class Rewards implements IRewards {

        /**
         * Constructs a new Rewards.
         * @param [properties] Properties to set
         */
        constructor(properties?: DailyRewardsCanClaimRewardOutput.IRewards);

        /** Rewards itemId. */
        public itemId: string;

        /** Rewards step. */
        public step: number;

        /** Rewards amount. */
        public amount: number;

        /**
         * Creates a new Rewards instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Rewards instance
         */
        public static create(properties?: DailyRewardsCanClaimRewardOutput.IRewards): DailyRewardsCanClaimRewardOutput.Rewards;

        /**
         * Encodes the specified Rewards message. Does not implicitly {@link DailyRewardsCanClaimRewardOutput.Rewards.verify|verify} messages.
         * @param message Rewards message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: DailyRewardsCanClaimRewardOutput.IRewards, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Rewards message, length delimited. Does not implicitly {@link DailyRewardsCanClaimRewardOutput.Rewards.verify|verify} messages.
         * @param message Rewards message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: DailyRewardsCanClaimRewardOutput.IRewards, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Rewards message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Rewards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DailyRewardsCanClaimRewardOutput.Rewards;

        /**
         * Decodes a Rewards message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Rewards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DailyRewardsCanClaimRewardOutput.Rewards;

        /**
         * Verifies a Rewards message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Rewards message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Rewards
         */
        public static fromObject(object: { [k: string]: any }): DailyRewardsCanClaimRewardOutput.Rewards;

        /**
         * Creates a plain object from a Rewards message. Also converts values to other types if specified.
         * @param message Rewards
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DailyRewardsCanClaimRewardOutput.Rewards, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Rewards to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Rewards
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Properties of a DailyRewardsClaimRewardsOutput. */
export interface IDailyRewardsClaimRewardsOutput {

    /** DailyRewardsClaimRewardsOutput rewards */
    rewards?: (DailyRewardsClaimRewardsOutput.IRewards[]|null);
}

/** Represents a DailyRewardsClaimRewardsOutput. */
export class DailyRewardsClaimRewardsOutput implements IDailyRewardsClaimRewardsOutput {

    /**
     * Constructs a new DailyRewardsClaimRewardsOutput.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDailyRewardsClaimRewardsOutput);

    /** DailyRewardsClaimRewardsOutput rewards. */
    public rewards: DailyRewardsClaimRewardsOutput.IRewards[];

    /**
     * Creates a new DailyRewardsClaimRewardsOutput instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DailyRewardsClaimRewardsOutput instance
     */
    public static create(properties?: IDailyRewardsClaimRewardsOutput): DailyRewardsClaimRewardsOutput;

    /**
     * Encodes the specified DailyRewardsClaimRewardsOutput message. Does not implicitly {@link DailyRewardsClaimRewardsOutput.verify|verify} messages.
     * @param message DailyRewardsClaimRewardsOutput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDailyRewardsClaimRewardsOutput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DailyRewardsClaimRewardsOutput message, length delimited. Does not implicitly {@link DailyRewardsClaimRewardsOutput.verify|verify} messages.
     * @param message DailyRewardsClaimRewardsOutput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDailyRewardsClaimRewardsOutput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DailyRewardsClaimRewardsOutput message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DailyRewardsClaimRewardsOutput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DailyRewardsClaimRewardsOutput;

    /**
     * Decodes a DailyRewardsClaimRewardsOutput message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DailyRewardsClaimRewardsOutput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DailyRewardsClaimRewardsOutput;

    /**
     * Verifies a DailyRewardsClaimRewardsOutput message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DailyRewardsClaimRewardsOutput message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DailyRewardsClaimRewardsOutput
     */
    public static fromObject(object: { [k: string]: any }): DailyRewardsClaimRewardsOutput;

    /**
     * Creates a plain object from a DailyRewardsClaimRewardsOutput message. Also converts values to other types if specified.
     * @param message DailyRewardsClaimRewardsOutput
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DailyRewardsClaimRewardsOutput, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DailyRewardsClaimRewardsOutput to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DailyRewardsClaimRewardsOutput
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace DailyRewardsClaimRewardsOutput {

    /** Properties of a Rewards. */
    interface IRewards {

        /** Rewards itemId */
        itemId?: (string|null);

        /** Rewards amount */
        amount?: (number|null);
    }

    /** Represents a Rewards. */
    class Rewards implements IRewards {

        /**
         * Constructs a new Rewards.
         * @param [properties] Properties to set
         */
        constructor(properties?: DailyRewardsClaimRewardsOutput.IRewards);

        /** Rewards itemId. */
        public itemId: string;

        /** Rewards amount. */
        public amount: number;

        /**
         * Creates a new Rewards instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Rewards instance
         */
        public static create(properties?: DailyRewardsClaimRewardsOutput.IRewards): DailyRewardsClaimRewardsOutput.Rewards;

        /**
         * Encodes the specified Rewards message. Does not implicitly {@link DailyRewardsClaimRewardsOutput.Rewards.verify|verify} messages.
         * @param message Rewards message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: DailyRewardsClaimRewardsOutput.IRewards, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Rewards message, length delimited. Does not implicitly {@link DailyRewardsClaimRewardsOutput.Rewards.verify|verify} messages.
         * @param message Rewards message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: DailyRewardsClaimRewardsOutput.IRewards, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Rewards message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Rewards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DailyRewardsClaimRewardsOutput.Rewards;

        /**
         * Decodes a Rewards message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Rewards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DailyRewardsClaimRewardsOutput.Rewards;

        /**
         * Verifies a Rewards message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Rewards message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Rewards
         */
        public static fromObject(object: { [k: string]: any }): DailyRewardsClaimRewardsOutput.Rewards;

        /**
         * Creates a plain object from a Rewards message. Also converts values to other types if specified.
         * @param message Rewards
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DailyRewardsClaimRewardsOutput.Rewards, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Rewards to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Rewards
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Properties of a LuckyWheel. */
export interface ILuckyWheel {

    /** LuckyWheel maxFullSpins */
    maxFullSpins?: (number|null);

    /** LuckyWheel minFullSpins */
    minFullSpins?: (number|null);

    /** LuckyWheel dailyLimit */
    dailyLimit?: (number|null);

    /** LuckyWheel items */
    items?: (LuckyWheel.IItems[]|null);
}

/** Represents a LuckyWheel. */
export class LuckyWheel implements ILuckyWheel {

    /**
     * Constructs a new LuckyWheel.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILuckyWheel);

    /** LuckyWheel maxFullSpins. */
    public maxFullSpins: number;

    /** LuckyWheel minFullSpins. */
    public minFullSpins: number;

    /** LuckyWheel dailyLimit. */
    public dailyLimit: number;

    /** LuckyWheel items. */
    public items: LuckyWheel.IItems[];

    /**
     * Creates a new LuckyWheel instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LuckyWheel instance
     */
    public static create(properties?: ILuckyWheel): LuckyWheel;

    /**
     * Encodes the specified LuckyWheel message. Does not implicitly {@link LuckyWheel.verify|verify} messages.
     * @param message LuckyWheel message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILuckyWheel, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LuckyWheel message, length delimited. Does not implicitly {@link LuckyWheel.verify|verify} messages.
     * @param message LuckyWheel message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILuckyWheel, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LuckyWheel message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LuckyWheel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LuckyWheel;

    /**
     * Decodes a LuckyWheel message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LuckyWheel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LuckyWheel;

    /**
     * Verifies a LuckyWheel message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LuckyWheel message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LuckyWheel
     */
    public static fromObject(object: { [k: string]: any }): LuckyWheel;

    /**
     * Creates a plain object from a LuckyWheel message. Also converts values to other types if specified.
     * @param message LuckyWheel
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LuckyWheel, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LuckyWheel to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for LuckyWheel
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace LuckyWheel {

    /** Properties of an Items. */
    interface IItems {

        /** Items itemId */
        itemId?: (string|null);

        /** Items weight */
        weight?: (number|null);

        /** Items quantity */
        quantity?: (number|null);
    }

    /** Represents an Items. */
    class Items implements IItems {

        /**
         * Constructs a new Items.
         * @param [properties] Properties to set
         */
        constructor(properties?: LuckyWheel.IItems);

        /** Items itemId. */
        public itemId: string;

        /** Items weight. */
        public weight: number;

        /** Items quantity. */
        public quantity: number;

        /**
         * Creates a new Items instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Items instance
         */
        public static create(properties?: LuckyWheel.IItems): LuckyWheel.Items;

        /**
         * Encodes the specified Items message. Does not implicitly {@link LuckyWheel.Items.verify|verify} messages.
         * @param message Items message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: LuckyWheel.IItems, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Items message, length delimited. Does not implicitly {@link LuckyWheel.Items.verify|verify} messages.
         * @param message Items message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: LuckyWheel.IItems, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Items message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Items
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LuckyWheel.Items;

        /**
         * Decodes an Items message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Items
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LuckyWheel.Items;

        /**
         * Verifies an Items message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Items message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Items
         */
        public static fromObject(object: { [k: string]: any }): LuckyWheel.Items;

        /**
         * Creates a plain object from an Items message. Also converts values to other types if specified.
         * @param message Items
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: LuckyWheel.Items, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Items to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Items
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Properties of a LuckyWheelCanClaimOutput. */
export interface ILuckyWheelCanClaimOutput {

    /** LuckyWheelCanClaimOutput canClaim */
    canClaim?: (boolean|null);
}

/** Represents a LuckyWheelCanClaimOutput. */
export class LuckyWheelCanClaimOutput implements ILuckyWheelCanClaimOutput {

    /**
     * Constructs a new LuckyWheelCanClaimOutput.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILuckyWheelCanClaimOutput);

    /** LuckyWheelCanClaimOutput canClaim. */
    public canClaim: boolean;

    /**
     * Creates a new LuckyWheelCanClaimOutput instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LuckyWheelCanClaimOutput instance
     */
    public static create(properties?: ILuckyWheelCanClaimOutput): LuckyWheelCanClaimOutput;

    /**
     * Encodes the specified LuckyWheelCanClaimOutput message. Does not implicitly {@link LuckyWheelCanClaimOutput.verify|verify} messages.
     * @param message LuckyWheelCanClaimOutput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILuckyWheelCanClaimOutput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LuckyWheelCanClaimOutput message, length delimited. Does not implicitly {@link LuckyWheelCanClaimOutput.verify|verify} messages.
     * @param message LuckyWheelCanClaimOutput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILuckyWheelCanClaimOutput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LuckyWheelCanClaimOutput message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LuckyWheelCanClaimOutput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LuckyWheelCanClaimOutput;

    /**
     * Decodes a LuckyWheelCanClaimOutput message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LuckyWheelCanClaimOutput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LuckyWheelCanClaimOutput;

    /**
     * Verifies a LuckyWheelCanClaimOutput message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LuckyWheelCanClaimOutput message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LuckyWheelCanClaimOutput
     */
    public static fromObject(object: { [k: string]: any }): LuckyWheelCanClaimOutput;

    /**
     * Creates a plain object from a LuckyWheelCanClaimOutput message. Also converts values to other types if specified.
     * @param message LuckyWheelCanClaimOutput
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LuckyWheelCanClaimOutput, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LuckyWheelCanClaimOutput to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for LuckyWheelCanClaimOutput
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a LuckyWheelClaimItemOutput. */
export interface ILuckyWheelClaimItemOutput {

    /** LuckyWheelClaimItemOutput itemReward */
    itemReward?: (LuckyWheelClaimItemOutput.IItemreward|null);

    /** LuckyWheelClaimItemOutput inventory */
    inventory?: (LuckyWheelClaimItemOutput.IInventory[]|null);

    /** LuckyWheelClaimItemOutput _luckyWheel */
    _luckyWheel?: (LuckyWheelClaimItemOutput.I_luckywheel|null);
}

/** Represents a LuckyWheelClaimItemOutput. */
export class LuckyWheelClaimItemOutput implements ILuckyWheelClaimItemOutput {

    /**
     * Constructs a new LuckyWheelClaimItemOutput.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILuckyWheelClaimItemOutput);

    /** LuckyWheelClaimItemOutput itemReward. */
    public itemReward?: (LuckyWheelClaimItemOutput.IItemreward|null);

    /** LuckyWheelClaimItemOutput inventory. */
    public inventory: LuckyWheelClaimItemOutput.IInventory[];

    /** LuckyWheelClaimItemOutput _luckyWheel. */
    public _luckyWheel?: (LuckyWheelClaimItemOutput.I_luckywheel|null);

    /**
     * Creates a new LuckyWheelClaimItemOutput instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LuckyWheelClaimItemOutput instance
     */
    public static create(properties?: ILuckyWheelClaimItemOutput): LuckyWheelClaimItemOutput;

    /**
     * Encodes the specified LuckyWheelClaimItemOutput message. Does not implicitly {@link LuckyWheelClaimItemOutput.verify|verify} messages.
     * @param message LuckyWheelClaimItemOutput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILuckyWheelClaimItemOutput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LuckyWheelClaimItemOutput message, length delimited. Does not implicitly {@link LuckyWheelClaimItemOutput.verify|verify} messages.
     * @param message LuckyWheelClaimItemOutput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILuckyWheelClaimItemOutput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LuckyWheelClaimItemOutput message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LuckyWheelClaimItemOutput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LuckyWheelClaimItemOutput;

    /**
     * Decodes a LuckyWheelClaimItemOutput message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LuckyWheelClaimItemOutput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LuckyWheelClaimItemOutput;

    /**
     * Verifies a LuckyWheelClaimItemOutput message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LuckyWheelClaimItemOutput message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LuckyWheelClaimItemOutput
     */
    public static fromObject(object: { [k: string]: any }): LuckyWheelClaimItemOutput;

    /**
     * Creates a plain object from a LuckyWheelClaimItemOutput message. Also converts values to other types if specified.
     * @param message LuckyWheelClaimItemOutput
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LuckyWheelClaimItemOutput, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LuckyWheelClaimItemOutput to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for LuckyWheelClaimItemOutput
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace LuckyWheelClaimItemOutput {

    /** Properties of an Itemreward. */
    interface IItemreward {

        /** Itemreward itemId */
        itemId?: (string|null);

        /** Itemreward weight */
        weight?: (number|null);

        /** Itemreward quantity */
        quantity?: (number|null);
    }

    /** Represents an Itemreward. */
    class Itemreward implements IItemreward {

        /**
         * Constructs a new Itemreward.
         * @param [properties] Properties to set
         */
        constructor(properties?: LuckyWheelClaimItemOutput.IItemreward);

        /** Itemreward itemId. */
        public itemId: string;

        /** Itemreward weight. */
        public weight: number;

        /** Itemreward quantity. */
        public quantity: number;

        /**
         * Creates a new Itemreward instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Itemreward instance
         */
        public static create(properties?: LuckyWheelClaimItemOutput.IItemreward): LuckyWheelClaimItemOutput.Itemreward;

        /**
         * Encodes the specified Itemreward message. Does not implicitly {@link LuckyWheelClaimItemOutput.Itemreward.verify|verify} messages.
         * @param message Itemreward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: LuckyWheelClaimItemOutput.IItemreward, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Itemreward message, length delimited. Does not implicitly {@link LuckyWheelClaimItemOutput.Itemreward.verify|verify} messages.
         * @param message Itemreward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: LuckyWheelClaimItemOutput.IItemreward, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Itemreward message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Itemreward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LuckyWheelClaimItemOutput.Itemreward;

        /**
         * Decodes an Itemreward message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Itemreward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LuckyWheelClaimItemOutput.Itemreward;

        /**
         * Verifies an Itemreward message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Itemreward message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Itemreward
         */
        public static fromObject(object: { [k: string]: any }): LuckyWheelClaimItemOutput.Itemreward;

        /**
         * Creates a plain object from an Itemreward message. Also converts values to other types if specified.
         * @param message Itemreward
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: LuckyWheelClaimItemOutput.Itemreward, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Itemreward to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Itemreward
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an Inventory. */
    interface IInventory {

        /** Inventory itemId */
        itemId?: (string|null);

        /** Inventory amount */
        amount?: (number|null);
    }

    /** Represents an Inventory. */
    class Inventory implements IInventory {

        /**
         * Constructs a new Inventory.
         * @param [properties] Properties to set
         */
        constructor(properties?: LuckyWheelClaimItemOutput.IInventory);

        /** Inventory itemId. */
        public itemId: string;

        /** Inventory amount. */
        public amount: number;

        /**
         * Creates a new Inventory instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Inventory instance
         */
        public static create(properties?: LuckyWheelClaimItemOutput.IInventory): LuckyWheelClaimItemOutput.Inventory;

        /**
         * Encodes the specified Inventory message. Does not implicitly {@link LuckyWheelClaimItemOutput.Inventory.verify|verify} messages.
         * @param message Inventory message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: LuckyWheelClaimItemOutput.IInventory, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Inventory message, length delimited. Does not implicitly {@link LuckyWheelClaimItemOutput.Inventory.verify|verify} messages.
         * @param message Inventory message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: LuckyWheelClaimItemOutput.IInventory, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Inventory message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Inventory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LuckyWheelClaimItemOutput.Inventory;

        /**
         * Decodes an Inventory message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Inventory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LuckyWheelClaimItemOutput.Inventory;

        /**
         * Verifies an Inventory message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Inventory message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Inventory
         */
        public static fromObject(object: { [k: string]: any }): LuckyWheelClaimItemOutput.Inventory;

        /**
         * Creates a plain object from an Inventory message. Also converts values to other types if specified.
         * @param message Inventory
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: LuckyWheelClaimItemOutput.Inventory, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Inventory to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Inventory
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a _luckywheel. */
    interface I_luckywheel {

        /** _luckywheel lastClaim */
        lastClaim?: (string|null);

        /** _luckywheel dailySpins */
        dailySpins?: (number|null);
    }

    /** Represents a _luckywheel. */
    class _luckywheel implements I_luckywheel {

        /**
         * Constructs a new _luckywheel.
         * @param [properties] Properties to set
         */
        constructor(properties?: LuckyWheelClaimItemOutput.I_luckywheel);

        /** _luckywheel lastClaim. */
        public lastClaim: string;

        /** _luckywheel dailySpins. */
        public dailySpins: number;

        /**
         * Creates a new _luckywheel instance using the specified properties.
         * @param [properties] Properties to set
         * @returns _luckywheel instance
         */
        public static create(properties?: LuckyWheelClaimItemOutput.I_luckywheel): LuckyWheelClaimItemOutput._luckywheel;

        /**
         * Encodes the specified _luckywheel message. Does not implicitly {@link LuckyWheelClaimItemOutput._luckywheel.verify|verify} messages.
         * @param message _luckywheel message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: LuckyWheelClaimItemOutput.I_luckywheel, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified _luckywheel message, length delimited. Does not implicitly {@link LuckyWheelClaimItemOutput._luckywheel.verify|verify} messages.
         * @param message _luckywheel message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: LuckyWheelClaimItemOutput.I_luckywheel, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a _luckywheel message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns _luckywheel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LuckyWheelClaimItemOutput._luckywheel;

        /**
         * Decodes a _luckywheel message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns _luckywheel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LuckyWheelClaimItemOutput._luckywheel;

        /**
         * Verifies a _luckywheel message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a _luckywheel message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns _luckywheel
         */
        public static fromObject(object: { [k: string]: any }): LuckyWheelClaimItemOutput._luckywheel;

        /**
         * Creates a plain object from a _luckywheel message. Also converts values to other types if specified.
         * @param message _luckywheel
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: LuckyWheelClaimItemOutput._luckywheel, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this _luckywheel to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for _luckywheel
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Represents an Inbox */
export class Inbox extends $protobuf.rpc.Service {

    /**
     * Constructs a new Inbox service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

    /**
     * Creates new Inbox service using the specified rpc implementation.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     * @returns RPC service. Useful where requests and/or responses are streamed.
     */
    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Inbox;

    /**
     * Calls getInfo.
     * @param request Empty message or plain object
     * @param callback Node-style callback called with the error, if any, and InboxList
     */
    public getInfo(request: IEmpty, callback: Inbox.getInfoCallback): void;

    /**
     * Calls getInfo.
     * @param request Empty message or plain object
     * @returns Promise
     */
    public getInfo(request: IEmpty): Promise<InboxList>;

    /**
     * Calls claimItem.
     * @param request InboxClaimInput message or plain object
     * @param callback Node-style callback called with the error, if any, and InboxClaimOutput
     */
    public claimItem(request: IInboxClaimInput, callback: Inbox.claimItemCallback): void;

    /**
     * Calls claimItem.
     * @param request InboxClaimInput message or plain object
     * @returns Promise
     */
    public claimItem(request: IInboxClaimInput): Promise<InboxClaimOutput>;

    /**
     * Calls markDeleteItem.
     * @param request InboxDeleteInput message or plain object
     * @param callback Node-style callback called with the error, if any, and InboxDeleteOutput
     */
    public markDeleteItem(request: IInboxDeleteInput, callback: Inbox.markDeleteItemCallback): void;

    /**
     * Calls markDeleteItem.
     * @param request InboxDeleteInput message or plain object
     * @returns Promise
     */
    public markDeleteItem(request: IInboxDeleteInput): Promise<InboxDeleteOutput>;
}

export namespace Inbox {

    /**
     * Callback as used by {@link Inbox#getInfo}.
     * @param error Error, if any
     * @param [response] InboxList
     */
    type getInfoCallback = (error: (Error|null), response?: InboxList) => void;

    /**
     * Callback as used by {@link Inbox#claimItem}.
     * @param error Error, if any
     * @param [response] InboxClaimOutput
     */
    type claimItemCallback = (error: (Error|null), response?: InboxClaimOutput) => void;

    /**
     * Callback as used by {@link Inbox#markDeleteItem}.
     * @param error Error, if any
     * @param [response] InboxDeleteOutput
     */
    type markDeleteItemCallback = (error: (Error|null), response?: InboxDeleteOutput) => void;
}

/** Properties of an InboxList. */
export interface IInboxList {

    /** InboxList items */
    items?: (InboxList.IItems[]|null);
}

/** Represents an InboxList. */
export class InboxList implements IInboxList {

    /**
     * Constructs a new InboxList.
     * @param [properties] Properties to set
     */
    constructor(properties?: IInboxList);

    /** InboxList items. */
    public items: InboxList.IItems[];

    /**
     * Creates a new InboxList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns InboxList instance
     */
    public static create(properties?: IInboxList): InboxList;

    /**
     * Encodes the specified InboxList message. Does not implicitly {@link InboxList.verify|verify} messages.
     * @param message InboxList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IInboxList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified InboxList message, length delimited. Does not implicitly {@link InboxList.verify|verify} messages.
     * @param message InboxList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IInboxList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an InboxList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns InboxList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): InboxList;

    /**
     * Decodes an InboxList message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns InboxList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): InboxList;

    /**
     * Verifies an InboxList message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an InboxList message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns InboxList
     */
    public static fromObject(object: { [k: string]: any }): InboxList;

    /**
     * Creates a plain object from an InboxList message. Also converts values to other types if specified.
     * @param message InboxList
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: InboxList, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this InboxList to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for InboxList
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace InboxList {

    /** Properties of a Conditions. */
    interface IConditions {

        /** Conditions value */
        value?: (string|null);

        /** Conditions operator */
        operator?: (string|null);

        /** Conditions fieldName */
        fieldName?: (string|null);
    }

    /** Represents a Conditions. */
    class Conditions implements IConditions {

        /**
         * Constructs a new Conditions.
         * @param [properties] Properties to set
         */
        constructor(properties?: InboxList.IConditions);

        /** Conditions value. */
        public value: string;

        /** Conditions operator. */
        public operator: string;

        /** Conditions fieldName. */
        public fieldName: string;

        /**
         * Creates a new Conditions instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Conditions instance
         */
        public static create(properties?: InboxList.IConditions): InboxList.Conditions;

        /**
         * Encodes the specified Conditions message. Does not implicitly {@link InboxList.Conditions.verify|verify} messages.
         * @param message Conditions message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: InboxList.IConditions, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Conditions message, length delimited. Does not implicitly {@link InboxList.Conditions.verify|verify} messages.
         * @param message Conditions message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: InboxList.IConditions, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Conditions message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Conditions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): InboxList.Conditions;

        /**
         * Decodes a Conditions message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Conditions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): InboxList.Conditions;

        /**
         * Verifies a Conditions message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Conditions message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Conditions
         */
        public static fromObject(object: { [k: string]: any }): InboxList.Conditions;

        /**
         * Creates a plain object from a Conditions message. Also converts values to other types if specified.
         * @param message Conditions
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: InboxList.Conditions, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Conditions to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Conditions
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Gifts. */
    interface IGifts {

        /** Gifts itemId */
        itemId?: (string|null);

        /** Gifts amount */
        amount?: (number|null);
    }

    /** Represents a Gifts. */
    class Gifts implements IGifts {

        /**
         * Constructs a new Gifts.
         * @param [properties] Properties to set
         */
        constructor(properties?: InboxList.IGifts);

        /** Gifts itemId. */
        public itemId: string;

        /** Gifts amount. */
        public amount: number;

        /**
         * Creates a new Gifts instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Gifts instance
         */
        public static create(properties?: InboxList.IGifts): InboxList.Gifts;

        /**
         * Encodes the specified Gifts message. Does not implicitly {@link InboxList.Gifts.verify|verify} messages.
         * @param message Gifts message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: InboxList.IGifts, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Gifts message, length delimited. Does not implicitly {@link InboxList.Gifts.verify|verify} messages.
         * @param message Gifts message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: InboxList.IGifts, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Gifts message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Gifts
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): InboxList.Gifts;

        /**
         * Decodes a Gifts message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Gifts
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): InboxList.Gifts;

        /**
         * Verifies a Gifts message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Gifts message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Gifts
         */
        public static fromObject(object: { [k: string]: any }): InboxList.Gifts;

        /**
         * Creates a plain object from a Gifts message. Also converts values to other types if specified.
         * @param message Gifts
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: InboxList.Gifts, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Gifts to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Gifts
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an Items. */
    interface IItems {

        /** Items content */
        content?: (string|null);

        /** Items conditions */
        conditions?: (InboxList.IConditions[]|null);

        /** Items gifts */
        gifts?: (InboxList.IGifts[]|null);

        /** Items expiryDate */
        expiryDate?: (number|null);

        /** Items id */
        id?: (string|null);

        /** Items title */
        title?: (string|null);

        /** Items canClaim */
        canClaim?: (boolean|null);
    }

    /** Represents an Items. */
    class Items implements IItems {

        /**
         * Constructs a new Items.
         * @param [properties] Properties to set
         */
        constructor(properties?: InboxList.IItems);

        /** Items content. */
        public content: string;

        /** Items conditions. */
        public conditions: InboxList.IConditions[];

        /** Items gifts. */
        public gifts: InboxList.IGifts[];

        /** Items expiryDate. */
        public expiryDate: number;

        /** Items id. */
        public id: string;

        /** Items title. */
        public title: string;

        /** Items canClaim. */
        public canClaim: boolean;

        /**
         * Creates a new Items instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Items instance
         */
        public static create(properties?: InboxList.IItems): InboxList.Items;

        /**
         * Encodes the specified Items message. Does not implicitly {@link InboxList.Items.verify|verify} messages.
         * @param message Items message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: InboxList.IItems, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Items message, length delimited. Does not implicitly {@link InboxList.Items.verify|verify} messages.
         * @param message Items message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: InboxList.IItems, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Items message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Items
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): InboxList.Items;

        /**
         * Decodes an Items message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Items
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): InboxList.Items;

        /**
         * Verifies an Items message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Items message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Items
         */
        public static fromObject(object: { [k: string]: any }): InboxList.Items;

        /**
         * Creates a plain object from an Items message. Also converts values to other types if specified.
         * @param message Items
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: InboxList.Items, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Items to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Items
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Properties of an InboxClaimInput. */
export interface IInboxClaimInput {

    /** InboxClaimInput inboxList */
    inboxList?: (string[]|null);
}

/** Represents an InboxClaimInput. */
export class InboxClaimInput implements IInboxClaimInput {

    /**
     * Constructs a new InboxClaimInput.
     * @param [properties] Properties to set
     */
    constructor(properties?: IInboxClaimInput);

    /** InboxClaimInput inboxList. */
    public inboxList: string[];

    /**
     * Creates a new InboxClaimInput instance using the specified properties.
     * @param [properties] Properties to set
     * @returns InboxClaimInput instance
     */
    public static create(properties?: IInboxClaimInput): InboxClaimInput;

    /**
     * Encodes the specified InboxClaimInput message. Does not implicitly {@link InboxClaimInput.verify|verify} messages.
     * @param message InboxClaimInput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IInboxClaimInput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified InboxClaimInput message, length delimited. Does not implicitly {@link InboxClaimInput.verify|verify} messages.
     * @param message InboxClaimInput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IInboxClaimInput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an InboxClaimInput message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns InboxClaimInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): InboxClaimInput;

    /**
     * Decodes an InboxClaimInput message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns InboxClaimInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): InboxClaimInput;

    /**
     * Verifies an InboxClaimInput message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an InboxClaimInput message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns InboxClaimInput
     */
    public static fromObject(object: { [k: string]: any }): InboxClaimInput;

    /**
     * Creates a plain object from an InboxClaimInput message. Also converts values to other types if specified.
     * @param message InboxClaimInput
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: InboxClaimInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this InboxClaimInput to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for InboxClaimInput
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of an InboxClaimOutput. */
export interface IInboxClaimOutput {

    /** InboxClaimOutput inventory */
    inventory?: (InboxClaimOutput.IInventory[]|null);

    /** InboxClaimOutput inboxList */
    inboxList?: (string[]|null);
}

/** Represents an InboxClaimOutput. */
export class InboxClaimOutput implements IInboxClaimOutput {

    /**
     * Constructs a new InboxClaimOutput.
     * @param [properties] Properties to set
     */
    constructor(properties?: IInboxClaimOutput);

    /** InboxClaimOutput inventory. */
    public inventory: InboxClaimOutput.IInventory[];

    /** InboxClaimOutput inboxList. */
    public inboxList: string[];

    /**
     * Creates a new InboxClaimOutput instance using the specified properties.
     * @param [properties] Properties to set
     * @returns InboxClaimOutput instance
     */
    public static create(properties?: IInboxClaimOutput): InboxClaimOutput;

    /**
     * Encodes the specified InboxClaimOutput message. Does not implicitly {@link InboxClaimOutput.verify|verify} messages.
     * @param message InboxClaimOutput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IInboxClaimOutput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified InboxClaimOutput message, length delimited. Does not implicitly {@link InboxClaimOutput.verify|verify} messages.
     * @param message InboxClaimOutput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IInboxClaimOutput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an InboxClaimOutput message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns InboxClaimOutput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): InboxClaimOutput;

    /**
     * Decodes an InboxClaimOutput message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns InboxClaimOutput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): InboxClaimOutput;

    /**
     * Verifies an InboxClaimOutput message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an InboxClaimOutput message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns InboxClaimOutput
     */
    public static fromObject(object: { [k: string]: any }): InboxClaimOutput;

    /**
     * Creates a plain object from an InboxClaimOutput message. Also converts values to other types if specified.
     * @param message InboxClaimOutput
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: InboxClaimOutput, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this InboxClaimOutput to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for InboxClaimOutput
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace InboxClaimOutput {

    /** Properties of an Inventory. */
    interface IInventory {

        /** Inventory itemId */
        itemId?: (string|null);

        /** Inventory amount */
        amount?: (number|null);
    }

    /** Represents an Inventory. */
    class Inventory implements IInventory {

        /**
         * Constructs a new Inventory.
         * @param [properties] Properties to set
         */
        constructor(properties?: InboxClaimOutput.IInventory);

        /** Inventory itemId. */
        public itemId: string;

        /** Inventory amount. */
        public amount: number;

        /**
         * Creates a new Inventory instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Inventory instance
         */
        public static create(properties?: InboxClaimOutput.IInventory): InboxClaimOutput.Inventory;

        /**
         * Encodes the specified Inventory message. Does not implicitly {@link InboxClaimOutput.Inventory.verify|verify} messages.
         * @param message Inventory message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: InboxClaimOutput.IInventory, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Inventory message, length delimited. Does not implicitly {@link InboxClaimOutput.Inventory.verify|verify} messages.
         * @param message Inventory message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: InboxClaimOutput.IInventory, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Inventory message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Inventory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): InboxClaimOutput.Inventory;

        /**
         * Decodes an Inventory message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Inventory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): InboxClaimOutput.Inventory;

        /**
         * Verifies an Inventory message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Inventory message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Inventory
         */
        public static fromObject(object: { [k: string]: any }): InboxClaimOutput.Inventory;

        /**
         * Creates a plain object from an Inventory message. Also converts values to other types if specified.
         * @param message Inventory
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: InboxClaimOutput.Inventory, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Inventory to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Inventory
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Properties of an InboxDeleteInput. */
export interface IInboxDeleteInput {

    /** InboxDeleteInput inboxList */
    inboxList?: (string[]|null);
}

/** Represents an InboxDeleteInput. */
export class InboxDeleteInput implements IInboxDeleteInput {

    /**
     * Constructs a new InboxDeleteInput.
     * @param [properties] Properties to set
     */
    constructor(properties?: IInboxDeleteInput);

    /** InboxDeleteInput inboxList. */
    public inboxList: string[];

    /**
     * Creates a new InboxDeleteInput instance using the specified properties.
     * @param [properties] Properties to set
     * @returns InboxDeleteInput instance
     */
    public static create(properties?: IInboxDeleteInput): InboxDeleteInput;

    /**
     * Encodes the specified InboxDeleteInput message. Does not implicitly {@link InboxDeleteInput.verify|verify} messages.
     * @param message InboxDeleteInput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IInboxDeleteInput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified InboxDeleteInput message, length delimited. Does not implicitly {@link InboxDeleteInput.verify|verify} messages.
     * @param message InboxDeleteInput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IInboxDeleteInput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an InboxDeleteInput message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns InboxDeleteInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): InboxDeleteInput;

    /**
     * Decodes an InboxDeleteInput message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns InboxDeleteInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): InboxDeleteInput;

    /**
     * Verifies an InboxDeleteInput message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an InboxDeleteInput message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns InboxDeleteInput
     */
    public static fromObject(object: { [k: string]: any }): InboxDeleteInput;

    /**
     * Creates a plain object from an InboxDeleteInput message. Also converts values to other types if specified.
     * @param message InboxDeleteInput
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: InboxDeleteInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this InboxDeleteInput to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for InboxDeleteInput
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of an InboxDeleteOutput. */
export interface IInboxDeleteOutput {

    /** InboxDeleteOutput inboxList */
    inboxList?: (string[]|null);
}

/** Represents an InboxDeleteOutput. */
export class InboxDeleteOutput implements IInboxDeleteOutput {

    /**
     * Constructs a new InboxDeleteOutput.
     * @param [properties] Properties to set
     */
    constructor(properties?: IInboxDeleteOutput);

    /** InboxDeleteOutput inboxList. */
    public inboxList: string[];

    /**
     * Creates a new InboxDeleteOutput instance using the specified properties.
     * @param [properties] Properties to set
     * @returns InboxDeleteOutput instance
     */
    public static create(properties?: IInboxDeleteOutput): InboxDeleteOutput;

    /**
     * Encodes the specified InboxDeleteOutput message. Does not implicitly {@link InboxDeleteOutput.verify|verify} messages.
     * @param message InboxDeleteOutput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IInboxDeleteOutput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified InboxDeleteOutput message, length delimited. Does not implicitly {@link InboxDeleteOutput.verify|verify} messages.
     * @param message InboxDeleteOutput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IInboxDeleteOutput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an InboxDeleteOutput message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns InboxDeleteOutput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): InboxDeleteOutput;

    /**
     * Decodes an InboxDeleteOutput message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns InboxDeleteOutput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): InboxDeleteOutput;

    /**
     * Verifies an InboxDeleteOutput message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an InboxDeleteOutput message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns InboxDeleteOutput
     */
    public static fromObject(object: { [k: string]: any }): InboxDeleteOutput;

    /**
     * Creates a plain object from an InboxDeleteOutput message. Also converts values to other types if specified.
     * @param message InboxDeleteOutput
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: InboxDeleteOutput, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this InboxDeleteOutput to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for InboxDeleteOutput
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a Leaderboard */
export class Leaderboard extends $protobuf.rpc.Service {

    /**
     * Constructs a new Leaderboard service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

    /**
     * Creates new Leaderboard service using the specified rpc implementation.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     * @returns RPC service. Useful where requests and/or responses are streamed.
     */
    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Leaderboard;

    /**
     * Calls getTopScore.
     * @param request GetTopLeaderboardInput message or plain object
     * @param callback Node-style callback called with the error, if any, and TopLeaderboard
     */
    public getTopScore(request: IGetTopLeaderboardInput, callback: Leaderboard.getTopScoreCallback): void;

    /**
     * Calls getTopScore.
     * @param request GetTopLeaderboardInput message or plain object
     * @returns Promise
     */
    public getTopScore(request: IGetTopLeaderboardInput): Promise<TopLeaderboard>;

    /**
     * Calls getMyRank.
     * @param request GetMyRankLeaderboardInput message or plain object
     * @param callback Node-style callback called with the error, if any, and GetMyRankLeaderboardOutput
     */
    public getMyRank(request: IGetMyRankLeaderboardInput, callback: Leaderboard.getMyRankCallback): void;

    /**
     * Calls getMyRank.
     * @param request GetMyRankLeaderboardInput message or plain object
     * @returns Promise
     */
    public getMyRank(request: IGetMyRankLeaderboardInput): Promise<GetMyRankLeaderboardOutput>;

    /**
     * Calls updateScore.
     * @param request UpdateScoreLeaderboardInput message or plain object
     * @param callback Node-style callback called with the error, if any, and UpdateScoreLeaderboardOutput
     */
    public updateScore(request: IUpdateScoreLeaderboardInput, callback: Leaderboard.updateScoreCallback): void;

    /**
     * Calls updateScore.
     * @param request UpdateScoreLeaderboardInput message or plain object
     * @returns Promise
     */
    public updateScore(request: IUpdateScoreLeaderboardInput): Promise<UpdateScoreLeaderboardOutput>;
}

export namespace Leaderboard {

    /**
     * Callback as used by {@link Leaderboard#getTopScore}.
     * @param error Error, if any
     * @param [response] TopLeaderboard
     */
    type getTopScoreCallback = (error: (Error|null), response?: TopLeaderboard) => void;

    /**
     * Callback as used by {@link Leaderboard#getMyRank}.
     * @param error Error, if any
     * @param [response] GetMyRankLeaderboardOutput
     */
    type getMyRankCallback = (error: (Error|null), response?: GetMyRankLeaderboardOutput) => void;

    /**
     * Callback as used by {@link Leaderboard#updateScore}.
     * @param error Error, if any
     * @param [response] UpdateScoreLeaderboardOutput
     */
    type updateScoreCallback = (error: (Error|null), response?: UpdateScoreLeaderboardOutput) => void;
}

/** Properties of a GetTopLeaderboardInput. */
export interface IGetTopLeaderboardInput {

    /** GetTopLeaderboardInput name */
    name?: (string|null);

    /** GetTopLeaderboardInput offset */
    offset?: (number|null);

    /** GetTopLeaderboardInput country */
    country?: (string|null);

    /** GetTopLeaderboardInput count */
    count?: (number|null);

    /** GetTopLeaderboardInput reverseOrder */
    reverseOrder?: (boolean|null);
}

/** Represents a GetTopLeaderboardInput. */
export class GetTopLeaderboardInput implements IGetTopLeaderboardInput {

    /**
     * Constructs a new GetTopLeaderboardInput.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGetTopLeaderboardInput);

    /** GetTopLeaderboardInput name. */
    public name?: (string|null);

    /** GetTopLeaderboardInput offset. */
    public offset: number;

    /** GetTopLeaderboardInput country. */
    public country: string;

    /** GetTopLeaderboardInput count. */
    public count?: (number|null);

    /** GetTopLeaderboardInput reverseOrder. */
    public reverseOrder: boolean;

    /** GetTopLeaderboardInput _name. */
    public _name?: "name";

    /** GetTopLeaderboardInput _count. */
    public _count?: "count";

    /**
     * Creates a new GetTopLeaderboardInput instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetTopLeaderboardInput instance
     */
    public static create(properties?: IGetTopLeaderboardInput): GetTopLeaderboardInput;

    /**
     * Encodes the specified GetTopLeaderboardInput message. Does not implicitly {@link GetTopLeaderboardInput.verify|verify} messages.
     * @param message GetTopLeaderboardInput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGetTopLeaderboardInput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GetTopLeaderboardInput message, length delimited. Does not implicitly {@link GetTopLeaderboardInput.verify|verify} messages.
     * @param message GetTopLeaderboardInput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGetTopLeaderboardInput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetTopLeaderboardInput message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetTopLeaderboardInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetTopLeaderboardInput;

    /**
     * Decodes a GetTopLeaderboardInput message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetTopLeaderboardInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetTopLeaderboardInput;

    /**
     * Verifies a GetTopLeaderboardInput message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GetTopLeaderboardInput message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetTopLeaderboardInput
     */
    public static fromObject(object: { [k: string]: any }): GetTopLeaderboardInput;

    /**
     * Creates a plain object from a GetTopLeaderboardInput message. Also converts values to other types if specified.
     * @param message GetTopLeaderboardInput
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GetTopLeaderboardInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GetTopLeaderboardInput to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for GetTopLeaderboardInput
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a TopLeaderboard. */
export interface ITopLeaderboard {

    /** TopLeaderboard items */
    items?: (TopLeaderboard.IItems[]|null);
}

/** Represents a TopLeaderboard. */
export class TopLeaderboard implements ITopLeaderboard {

    /**
     * Constructs a new TopLeaderboard.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITopLeaderboard);

    /** TopLeaderboard items. */
    public items: TopLeaderboard.IItems[];

    /**
     * Creates a new TopLeaderboard instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TopLeaderboard instance
     */
    public static create(properties?: ITopLeaderboard): TopLeaderboard;

    /**
     * Encodes the specified TopLeaderboard message. Does not implicitly {@link TopLeaderboard.verify|verify} messages.
     * @param message TopLeaderboard message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITopLeaderboard, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TopLeaderboard message, length delimited. Does not implicitly {@link TopLeaderboard.verify|verify} messages.
     * @param message TopLeaderboard message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITopLeaderboard, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TopLeaderboard message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TopLeaderboard
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TopLeaderboard;

    /**
     * Decodes a TopLeaderboard message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TopLeaderboard
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TopLeaderboard;

    /**
     * Verifies a TopLeaderboard message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TopLeaderboard message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TopLeaderboard
     */
    public static fromObject(object: { [k: string]: any }): TopLeaderboard;

    /**
     * Creates a plain object from a TopLeaderboard message. Also converts values to other types if specified.
     * @param message TopLeaderboard
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TopLeaderboard, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TopLeaderboard to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for TopLeaderboard
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace TopLeaderboard {

    /** Properties of an Items. */
    interface IItems {

        /** Items playerName */
        playerName?: (string|null);

        /** Items playerId */
        playerId?: (string|null);

        /** Items country */
        country?: (string|null);

        /** Items score */
        score?: (number|null);

        /** Items rank */
        rank?: (number|null);
    }

    /** Represents an Items. */
    class Items implements IItems {

        /**
         * Constructs a new Items.
         * @param [properties] Properties to set
         */
        constructor(properties?: TopLeaderboard.IItems);

        /** Items playerName. */
        public playerName: string;

        /** Items playerId. */
        public playerId: string;

        /** Items country. */
        public country: string;

        /** Items score. */
        public score: number;

        /** Items rank. */
        public rank: number;

        /**
         * Creates a new Items instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Items instance
         */
        public static create(properties?: TopLeaderboard.IItems): TopLeaderboard.Items;

        /**
         * Encodes the specified Items message. Does not implicitly {@link TopLeaderboard.Items.verify|verify} messages.
         * @param message Items message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: TopLeaderboard.IItems, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Items message, length delimited. Does not implicitly {@link TopLeaderboard.Items.verify|verify} messages.
         * @param message Items message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: TopLeaderboard.IItems, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Items message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Items
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TopLeaderboard.Items;

        /**
         * Decodes an Items message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Items
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TopLeaderboard.Items;

        /**
         * Verifies an Items message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Items message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Items
         */
        public static fromObject(object: { [k: string]: any }): TopLeaderboard.Items;

        /**
         * Creates a plain object from an Items message. Also converts values to other types if specified.
         * @param message Items
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: TopLeaderboard.Items, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Items to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Items
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Properties of a GetMyRankLeaderboardInput. */
export interface IGetMyRankLeaderboardInput {

    /** GetMyRankLeaderboardInput name */
    name?: (string|null);

    /** GetMyRankLeaderboardInput country */
    country?: (string|null);

    /** GetMyRankLeaderboardInput reverseOrder */
    reverseOrder?: (boolean|null);
}

/** Represents a GetMyRankLeaderboardInput. */
export class GetMyRankLeaderboardInput implements IGetMyRankLeaderboardInput {

    /**
     * Constructs a new GetMyRankLeaderboardInput.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGetMyRankLeaderboardInput);

    /** GetMyRankLeaderboardInput name. */
    public name: string;

    /** GetMyRankLeaderboardInput country. */
    public country: string;

    /** GetMyRankLeaderboardInput reverseOrder. */
    public reverseOrder: boolean;

    /**
     * Creates a new GetMyRankLeaderboardInput instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetMyRankLeaderboardInput instance
     */
    public static create(properties?: IGetMyRankLeaderboardInput): GetMyRankLeaderboardInput;

    /**
     * Encodes the specified GetMyRankLeaderboardInput message. Does not implicitly {@link GetMyRankLeaderboardInput.verify|verify} messages.
     * @param message GetMyRankLeaderboardInput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGetMyRankLeaderboardInput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GetMyRankLeaderboardInput message, length delimited. Does not implicitly {@link GetMyRankLeaderboardInput.verify|verify} messages.
     * @param message GetMyRankLeaderboardInput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGetMyRankLeaderboardInput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetMyRankLeaderboardInput message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetMyRankLeaderboardInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetMyRankLeaderboardInput;

    /**
     * Decodes a GetMyRankLeaderboardInput message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetMyRankLeaderboardInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetMyRankLeaderboardInput;

    /**
     * Verifies a GetMyRankLeaderboardInput message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GetMyRankLeaderboardInput message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetMyRankLeaderboardInput
     */
    public static fromObject(object: { [k: string]: any }): GetMyRankLeaderboardInput;

    /**
     * Creates a plain object from a GetMyRankLeaderboardInput message. Also converts values to other types if specified.
     * @param message GetMyRankLeaderboardInput
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GetMyRankLeaderboardInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GetMyRankLeaderboardInput to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for GetMyRankLeaderboardInput
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a GetMyRankLeaderboardOutput. */
export interface IGetMyRankLeaderboardOutput {

    /** GetMyRankLeaderboardOutput rank */
    rank?: (number|null);

    /** GetMyRankLeaderboardOutput minRank */
    minRank?: (number|null);

    /** GetMyRankLeaderboardOutput score */
    score?: (number|null);

    /** GetMyRankLeaderboardOutput playerName */
    playerName?: (string|null);

    /** GetMyRankLeaderboardOutput playerId */
    playerId?: (string|null);

    /** GetMyRankLeaderboardOutput country */
    country?: (string|null);
}

/** Represents a GetMyRankLeaderboardOutput. */
export class GetMyRankLeaderboardOutput implements IGetMyRankLeaderboardOutput {

    /**
     * Constructs a new GetMyRankLeaderboardOutput.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGetMyRankLeaderboardOutput);

    /** GetMyRankLeaderboardOutput rank. */
    public rank: number;

    /** GetMyRankLeaderboardOutput minRank. */
    public minRank: number;

    /** GetMyRankLeaderboardOutput score. */
    public score: number;

    /** GetMyRankLeaderboardOutput playerName. */
    public playerName: string;

    /** GetMyRankLeaderboardOutput playerId. */
    public playerId: string;

    /** GetMyRankLeaderboardOutput country. */
    public country: string;

    /**
     * Creates a new GetMyRankLeaderboardOutput instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetMyRankLeaderboardOutput instance
     */
    public static create(properties?: IGetMyRankLeaderboardOutput): GetMyRankLeaderboardOutput;

    /**
     * Encodes the specified GetMyRankLeaderboardOutput message. Does not implicitly {@link GetMyRankLeaderboardOutput.verify|verify} messages.
     * @param message GetMyRankLeaderboardOutput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGetMyRankLeaderboardOutput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GetMyRankLeaderboardOutput message, length delimited. Does not implicitly {@link GetMyRankLeaderboardOutput.verify|verify} messages.
     * @param message GetMyRankLeaderboardOutput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGetMyRankLeaderboardOutput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetMyRankLeaderboardOutput message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetMyRankLeaderboardOutput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetMyRankLeaderboardOutput;

    /**
     * Decodes a GetMyRankLeaderboardOutput message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetMyRankLeaderboardOutput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetMyRankLeaderboardOutput;

    /**
     * Verifies a GetMyRankLeaderboardOutput message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GetMyRankLeaderboardOutput message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetMyRankLeaderboardOutput
     */
    public static fromObject(object: { [k: string]: any }): GetMyRankLeaderboardOutput;

    /**
     * Creates a plain object from a GetMyRankLeaderboardOutput message. Also converts values to other types if specified.
     * @param message GetMyRankLeaderboardOutput
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GetMyRankLeaderboardOutput, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GetMyRankLeaderboardOutput to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for GetMyRankLeaderboardOutput
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of an UpdateScoreLeaderboardInput. */
export interface IUpdateScoreLeaderboardInput {

    /** UpdateScoreLeaderboardInput items */
    items?: (UpdateScoreLeaderboardInput.IItems[]|null);
}

/** Represents an UpdateScoreLeaderboardInput. */
export class UpdateScoreLeaderboardInput implements IUpdateScoreLeaderboardInput {

    /**
     * Constructs a new UpdateScoreLeaderboardInput.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUpdateScoreLeaderboardInput);

    /** UpdateScoreLeaderboardInput items. */
    public items: UpdateScoreLeaderboardInput.IItems[];

    /**
     * Creates a new UpdateScoreLeaderboardInput instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UpdateScoreLeaderboardInput instance
     */
    public static create(properties?: IUpdateScoreLeaderboardInput): UpdateScoreLeaderboardInput;

    /**
     * Encodes the specified UpdateScoreLeaderboardInput message. Does not implicitly {@link UpdateScoreLeaderboardInput.verify|verify} messages.
     * @param message UpdateScoreLeaderboardInput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUpdateScoreLeaderboardInput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UpdateScoreLeaderboardInput message, length delimited. Does not implicitly {@link UpdateScoreLeaderboardInput.verify|verify} messages.
     * @param message UpdateScoreLeaderboardInput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUpdateScoreLeaderboardInput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an UpdateScoreLeaderboardInput message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UpdateScoreLeaderboardInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UpdateScoreLeaderboardInput;

    /**
     * Decodes an UpdateScoreLeaderboardInput message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UpdateScoreLeaderboardInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UpdateScoreLeaderboardInput;

    /**
     * Verifies an UpdateScoreLeaderboardInput message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an UpdateScoreLeaderboardInput message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UpdateScoreLeaderboardInput
     */
    public static fromObject(object: { [k: string]: any }): UpdateScoreLeaderboardInput;

    /**
     * Creates a plain object from an UpdateScoreLeaderboardInput message. Also converts values to other types if specified.
     * @param message UpdateScoreLeaderboardInput
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UpdateScoreLeaderboardInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UpdateScoreLeaderboardInput to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for UpdateScoreLeaderboardInput
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace UpdateScoreLeaderboardInput {

    /** Properties of an Items. */
    interface IItems {

        /** Items score */
        score?: (number|null);

        /** Items option */
        option?: (string|null);

        /** Items country */
        country?: (string|null);

        /** Items name */
        name?: (string|null);
    }

    /** Represents an Items. */
    class Items implements IItems {

        /**
         * Constructs a new Items.
         * @param [properties] Properties to set
         */
        constructor(properties?: UpdateScoreLeaderboardInput.IItems);

        /** Items score. */
        public score: number;

        /** Items option. */
        public option: string;

        /** Items country. */
        public country: string;

        /** Items name. */
        public name: string;

        /**
         * Creates a new Items instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Items instance
         */
        public static create(properties?: UpdateScoreLeaderboardInput.IItems): UpdateScoreLeaderboardInput.Items;

        /**
         * Encodes the specified Items message. Does not implicitly {@link UpdateScoreLeaderboardInput.Items.verify|verify} messages.
         * @param message Items message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: UpdateScoreLeaderboardInput.IItems, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Items message, length delimited. Does not implicitly {@link UpdateScoreLeaderboardInput.Items.verify|verify} messages.
         * @param message Items message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: UpdateScoreLeaderboardInput.IItems, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Items message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Items
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UpdateScoreLeaderboardInput.Items;

        /**
         * Decodes an Items message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Items
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UpdateScoreLeaderboardInput.Items;

        /**
         * Verifies an Items message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Items message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Items
         */
        public static fromObject(object: { [k: string]: any }): UpdateScoreLeaderboardInput.Items;

        /**
         * Creates a plain object from an Items message. Also converts values to other types if specified.
         * @param message Items
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: UpdateScoreLeaderboardInput.Items, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Items to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Items
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Properties of an UpdateScoreLeaderboardOutput. */
export interface IUpdateScoreLeaderboardOutput {

    /** UpdateScoreLeaderboardOutput status */
    status?: (string|null);
}

/** Represents an UpdateScoreLeaderboardOutput. */
export class UpdateScoreLeaderboardOutput implements IUpdateScoreLeaderboardOutput {

    /**
     * Constructs a new UpdateScoreLeaderboardOutput.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUpdateScoreLeaderboardOutput);

    /** UpdateScoreLeaderboardOutput status. */
    public status: string;

    /**
     * Creates a new UpdateScoreLeaderboardOutput instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UpdateScoreLeaderboardOutput instance
     */
    public static create(properties?: IUpdateScoreLeaderboardOutput): UpdateScoreLeaderboardOutput;

    /**
     * Encodes the specified UpdateScoreLeaderboardOutput message. Does not implicitly {@link UpdateScoreLeaderboardOutput.verify|verify} messages.
     * @param message UpdateScoreLeaderboardOutput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUpdateScoreLeaderboardOutput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UpdateScoreLeaderboardOutput message, length delimited. Does not implicitly {@link UpdateScoreLeaderboardOutput.verify|verify} messages.
     * @param message UpdateScoreLeaderboardOutput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUpdateScoreLeaderboardOutput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an UpdateScoreLeaderboardOutput message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UpdateScoreLeaderboardOutput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UpdateScoreLeaderboardOutput;

    /**
     * Decodes an UpdateScoreLeaderboardOutput message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UpdateScoreLeaderboardOutput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UpdateScoreLeaderboardOutput;

    /**
     * Verifies an UpdateScoreLeaderboardOutput message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an UpdateScoreLeaderboardOutput message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UpdateScoreLeaderboardOutput
     */
    public static fromObject(object: { [k: string]: any }): UpdateScoreLeaderboardOutput;

    /**
     * Creates a plain object from an UpdateScoreLeaderboardOutput message. Also converts values to other types if specified.
     * @param message UpdateScoreLeaderboardOutput
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UpdateScoreLeaderboardOutput, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UpdateScoreLeaderboardOutput to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for UpdateScoreLeaderboardOutput
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a Player */
export class Player extends $protobuf.rpc.Service {

    /**
     * Constructs a new Player service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

    /**
     * Creates new Player service using the specified rpc implementation.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     * @returns RPC service. Useful where requests and/or responses are streamed.
     */
    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Player;

    /**
     * Calls getProfile.
     * @param request Empty message or plain object
     * @param callback Node-style callback called with the error, if any, and PlayerProfileRes
     */
    public getProfile(request: IEmpty, callback: Player.getProfileCallback): void;

    /**
     * Calls getProfile.
     * @param request Empty message or plain object
     * @returns Promise
     */
    public getProfile(request: IEmpty): Promise<PlayerProfileRes>;

    /**
     * Calls updateProfile.
     * @param request PlayerProfileReq message or plain object
     * @param callback Node-style callback called with the error, if any, and PlayerProfileRes
     */
    public updateProfile(request: IPlayerProfileReq, callback: Player.updateProfileCallback): void;

    /**
     * Calls updateProfile.
     * @param request PlayerProfileReq message or plain object
     * @returns Promise
     */
    public updateProfile(request: IPlayerProfileReq): Promise<PlayerProfileRes>;

    /**
     * Calls getData.
     * @param request Empty message or plain object
     * @param callback Node-style callback called with the error, if any, and PlayerDataRes
     */
    public getData(request: IEmpty, callback: Player.getDataCallback): void;

    /**
     * Calls getData.
     * @param request Empty message or plain object
     * @returns Promise
     */
    public getData(request: IEmpty): Promise<PlayerDataRes>;
}

export namespace Player {

    /**
     * Callback as used by {@link Player#getProfile}.
     * @param error Error, if any
     * @param [response] PlayerProfileRes
     */
    type getProfileCallback = (error: (Error|null), response?: PlayerProfileRes) => void;

    /**
     * Callback as used by {@link Player#updateProfile}.
     * @param error Error, if any
     * @param [response] PlayerProfileRes
     */
    type updateProfileCallback = (error: (Error|null), response?: PlayerProfileRes) => void;

    /**
     * Callback as used by {@link Player#getData}.
     * @param error Error, if any
     * @param [response] PlayerDataRes
     */
    type getDataCallback = (error: (Error|null), response?: PlayerDataRes) => void;
}

/** Properties of a PlayerProfileRes. */
export interface IPlayerProfileRes {

    /** PlayerProfileRes playerName */
    playerName?: (string|null);

    /** PlayerProfileRes created */
    created?: (number|Long|null);

    /** PlayerProfileRes playerId */
    playerId?: (string|null);

    /** PlayerProfileRes gameId */
    gameId?: (string|null);

    /** PlayerProfileRes country */
    country?: (string|null);

    /** PlayerProfileRes lastLogin */
    lastLogin?: (number|Long|null);

    /** PlayerProfileRes ban */
    ban?: (boolean|null);
}

/** Represents a PlayerProfileRes. */
export class PlayerProfileRes implements IPlayerProfileRes {

    /**
     * Constructs a new PlayerProfileRes.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPlayerProfileRes);

    /** PlayerProfileRes playerName. */
    public playerName: string;

    /** PlayerProfileRes created. */
    public created: (number|Long);

    /** PlayerProfileRes playerId. */
    public playerId: string;

    /** PlayerProfileRes gameId. */
    public gameId: string;

    /** PlayerProfileRes country. */
    public country: string;

    /** PlayerProfileRes lastLogin. */
    public lastLogin: (number|Long);

    /** PlayerProfileRes ban. */
    public ban: boolean;

    /**
     * Creates a new PlayerProfileRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlayerProfileRes instance
     */
    public static create(properties?: IPlayerProfileRes): PlayerProfileRes;

    /**
     * Encodes the specified PlayerProfileRes message. Does not implicitly {@link PlayerProfileRes.verify|verify} messages.
     * @param message PlayerProfileRes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPlayerProfileRes, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PlayerProfileRes message, length delimited. Does not implicitly {@link PlayerProfileRes.verify|verify} messages.
     * @param message PlayerProfileRes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPlayerProfileRes, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PlayerProfileRes message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PlayerProfileRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PlayerProfileRes;

    /**
     * Decodes a PlayerProfileRes message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PlayerProfileRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PlayerProfileRes;

    /**
     * Verifies a PlayerProfileRes message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PlayerProfileRes message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PlayerProfileRes
     */
    public static fromObject(object: { [k: string]: any }): PlayerProfileRes;

    /**
     * Creates a plain object from a PlayerProfileRes message. Also converts values to other types if specified.
     * @param message PlayerProfileRes
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PlayerProfileRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PlayerProfileRes to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for PlayerProfileRes
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a PlayerProfileReq. */
export interface IPlayerProfileReq {

    /** PlayerProfileReq playerName */
    playerName?: (string|null);

    /** PlayerProfileReq country */
    country?: (string|null);
}

/** Represents a PlayerProfileReq. */
export class PlayerProfileReq implements IPlayerProfileReq {

    /**
     * Constructs a new PlayerProfileReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPlayerProfileReq);

    /** PlayerProfileReq playerName. */
    public playerName: string;

    /** PlayerProfileReq country. */
    public country: string;

    /**
     * Creates a new PlayerProfileReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlayerProfileReq instance
     */
    public static create(properties?: IPlayerProfileReq): PlayerProfileReq;

    /**
     * Encodes the specified PlayerProfileReq message. Does not implicitly {@link PlayerProfileReq.verify|verify} messages.
     * @param message PlayerProfileReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPlayerProfileReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PlayerProfileReq message, length delimited. Does not implicitly {@link PlayerProfileReq.verify|verify} messages.
     * @param message PlayerProfileReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPlayerProfileReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PlayerProfileReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PlayerProfileReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PlayerProfileReq;

    /**
     * Decodes a PlayerProfileReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PlayerProfileReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PlayerProfileReq;

    /**
     * Verifies a PlayerProfileReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PlayerProfileReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PlayerProfileReq
     */
    public static fromObject(object: { [k: string]: any }): PlayerProfileReq;

    /**
     * Creates a plain object from a PlayerProfileReq message. Also converts values to other types if specified.
     * @param message PlayerProfileReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PlayerProfileReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PlayerProfileReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for PlayerProfileReq
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a PlayerDataRes. */
export interface IPlayerDataRes {

    /** PlayerDataRes customField */
    customField?: (string|null);

    /** PlayerDataRes inventory */
    inventory?: (PlayerDataRes.IInventory[]|null);

    /** PlayerDataRes level */
    level?: (number|null);
}

/** Represents a PlayerDataRes. */
export class PlayerDataRes implements IPlayerDataRes {

    /**
     * Constructs a new PlayerDataRes.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPlayerDataRes);

    /** PlayerDataRes customField. */
    public customField: string;

    /** PlayerDataRes inventory. */
    public inventory: PlayerDataRes.IInventory[];

    /** PlayerDataRes level. */
    public level: number;

    /**
     * Creates a new PlayerDataRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlayerDataRes instance
     */
    public static create(properties?: IPlayerDataRes): PlayerDataRes;

    /**
     * Encodes the specified PlayerDataRes message. Does not implicitly {@link PlayerDataRes.verify|verify} messages.
     * @param message PlayerDataRes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPlayerDataRes, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PlayerDataRes message, length delimited. Does not implicitly {@link PlayerDataRes.verify|verify} messages.
     * @param message PlayerDataRes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPlayerDataRes, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PlayerDataRes message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PlayerDataRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PlayerDataRes;

    /**
     * Decodes a PlayerDataRes message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PlayerDataRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PlayerDataRes;

    /**
     * Verifies a PlayerDataRes message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PlayerDataRes message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PlayerDataRes
     */
    public static fromObject(object: { [k: string]: any }): PlayerDataRes;

    /**
     * Creates a plain object from a PlayerDataRes message. Also converts values to other types if specified.
     * @param message PlayerDataRes
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PlayerDataRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PlayerDataRes to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for PlayerDataRes
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace PlayerDataRes {

    /** Properties of an Inventory. */
    interface IInventory {

        /** Inventory itemId */
        itemId?: (string|null);

        /** Inventory amount */
        amount?: (number|null);
    }

    /** Represents an Inventory. */
    class Inventory implements IInventory {

        /**
         * Constructs a new Inventory.
         * @param [properties] Properties to set
         */
        constructor(properties?: PlayerDataRes.IInventory);

        /** Inventory itemId. */
        public itemId: string;

        /** Inventory amount. */
        public amount: number;

        /**
         * Creates a new Inventory instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Inventory instance
         */
        public static create(properties?: PlayerDataRes.IInventory): PlayerDataRes.Inventory;

        /**
         * Encodes the specified Inventory message. Does not implicitly {@link PlayerDataRes.Inventory.verify|verify} messages.
         * @param message Inventory message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PlayerDataRes.IInventory, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Inventory message, length delimited. Does not implicitly {@link PlayerDataRes.Inventory.verify|verify} messages.
         * @param message Inventory message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PlayerDataRes.IInventory, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Inventory message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Inventory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PlayerDataRes.Inventory;

        /**
         * Decodes an Inventory message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Inventory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PlayerDataRes.Inventory;

        /**
         * Verifies an Inventory message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Inventory message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Inventory
         */
        public static fromObject(object: { [k: string]: any }): PlayerDataRes.Inventory;

        /**
         * Creates a plain object from an Inventory message. Also converts values to other types if specified.
         * @param message Inventory
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PlayerDataRes.Inventory, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Inventory to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Inventory
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
