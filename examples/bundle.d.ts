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
     * Calls GetDailyQuests.
     * @param request Empty message or plain object
     * @param callback Node-style callback called with the error, if any, and DailyQuests
     */
    public getDailyQuests(request: IEmpty, callback: Blueprint.GetDailyQuestsCallback): void;

    /**
     * Calls GetDailyQuests.
     * @param request Empty message or plain object
     * @returns Promise
     */
    public getDailyQuests(request: IEmpty): Promise<DailyQuests>;

    /**
     * Calls GetDailyRewards.
     * @param request Empty message or plain object
     * @param callback Node-style callback called with the error, if any, and DailyRewards
     */
    public getDailyRewards(request: IEmpty, callback: Blueprint.GetDailyRewardsCallback): void;

    /**
     * Calls GetDailyRewards.
     * @param request Empty message or plain object
     * @returns Promise
     */
    public getDailyRewards(request: IEmpty): Promise<DailyRewards>;

    /**
     * Calls GetItemTable.
     * @param request Empty message or plain object
     * @param callback Node-style callback called with the error, if any, and ItemTable
     */
    public getItemTable(request: IEmpty, callback: Blueprint.GetItemTableCallback): void;

    /**
     * Calls GetItemTable.
     * @param request Empty message or plain object
     * @returns Promise
     */
    public getItemTable(request: IEmpty): Promise<ItemTable>;

    /**
     * Calls GetLuckyWheel.
     * @param request Empty message or plain object
     * @param callback Node-style callback called with the error, if any, and LuckyWheel
     */
    public getLuckyWheel(request: IEmpty, callback: Blueprint.GetLuckyWheelCallback): void;

    /**
     * Calls GetLuckyWheel.
     * @param request Empty message or plain object
     * @returns Promise
     */
    public getLuckyWheel(request: IEmpty): Promise<LuckyWheel>;

    /**
     * Calls GetProgressQuests.
     * @param request Empty message or plain object
     * @param callback Node-style callback called with the error, if any, and ProgressQuests
     */
    public getProgressQuests(request: IEmpty, callback: Blueprint.GetProgressQuestsCallback): void;

    /**
     * Calls GetProgressQuests.
     * @param request Empty message or plain object
     * @returns Promise
     */
    public getProgressQuests(request: IEmpty): Promise<ProgressQuests>;
}

export namespace Blueprint {

    /**
     * Callback as used by {@link Blueprint#getDailyQuests}.
     * @param error Error, if any
     * @param [response] DailyQuests
     */
    type GetDailyQuestsCallback = (error: (Error|null), response?: DailyQuests) => void;

    /**
     * Callback as used by {@link Blueprint#getDailyRewards}.
     * @param error Error, if any
     * @param [response] DailyRewards
     */
    type GetDailyRewardsCallback = (error: (Error|null), response?: DailyRewards) => void;

    /**
     * Callback as used by {@link Blueprint#getItemTable}.
     * @param error Error, if any
     * @param [response] ItemTable
     */
    type GetItemTableCallback = (error: (Error|null), response?: ItemTable) => void;

    /**
     * Callback as used by {@link Blueprint#getLuckyWheel}.
     * @param error Error, if any
     * @param [response] LuckyWheel
     */
    type GetLuckyWheelCallback = (error: (Error|null), response?: LuckyWheel) => void;

    /**
     * Callback as used by {@link Blueprint#getProgressQuests}.
     * @param error Error, if any
     * @param [response] ProgressQuests
     */
    type GetProgressQuestsCallback = (error: (Error|null), response?: ProgressQuests) => void;
}

/** Properties of a DailyQuests. */
export interface IDailyQuests {

    /** DailyQuests quests */
    quests?: (DailyQuests.IQuests[]|null);
}

/** Represents a DailyQuests. */
export class DailyQuests implements IDailyQuests {

    /**
     * Constructs a new DailyQuests.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDailyQuests);

    /** DailyQuests quests. */
    public quests: DailyQuests.IQuests[];

    /**
     * Creates a new DailyQuests instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DailyQuests instance
     */
    public static create(properties?: IDailyQuests): DailyQuests;

    /**
     * Encodes the specified DailyQuests message. Does not implicitly {@link DailyQuests.verify|verify} messages.
     * @param message DailyQuests message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDailyQuests, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DailyQuests message, length delimited. Does not implicitly {@link DailyQuests.verify|verify} messages.
     * @param message DailyQuests message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDailyQuests, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DailyQuests message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DailyQuests
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DailyQuests;

    /**
     * Decodes a DailyQuests message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DailyQuests
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DailyQuests;

    /**
     * Verifies a DailyQuests message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DailyQuests message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DailyQuests
     */
    public static fromObject(object: { [k: string]: any }): DailyQuests;

    /**
     * Creates a plain object from a DailyQuests message. Also converts values to other types if specified.
     * @param message DailyQuests
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DailyQuests, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DailyQuests to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DailyQuests
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace DailyQuests {

    /** Properties of a Quests. */
    interface IQuests {

        /** Quests name */
        name?: (string|null);

        /** Quests reward */
        reward?: (DailyQuests.Quests.IReward|null);

        /** Quests description */
        description?: (string|null);

        /** Quests id */
        id?: (string|null);

        /** Quests type */
        type?: (string|null);

        /** Quests target */
        target?: (number|null);
    }

    /** Represents a Quests. */
    class Quests implements IQuests {

        /**
         * Constructs a new Quests.
         * @param [properties] Properties to set
         */
        constructor(properties?: DailyQuests.IQuests);

        /** Quests name. */
        public name: string;

        /** Quests reward. */
        public reward?: (DailyQuests.Quests.IReward|null);

        /** Quests description. */
        public description: string;

        /** Quests id. */
        public id: string;

        /** Quests type. */
        public type: string;

        /** Quests target. */
        public target: number;

        /**
         * Creates a new Quests instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Quests instance
         */
        public static create(properties?: DailyQuests.IQuests): DailyQuests.Quests;

        /**
         * Encodes the specified Quests message. Does not implicitly {@link DailyQuests.Quests.verify|verify} messages.
         * @param message Quests message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: DailyQuests.IQuests, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Quests message, length delimited. Does not implicitly {@link DailyQuests.Quests.verify|verify} messages.
         * @param message Quests message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: DailyQuests.IQuests, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Quests message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Quests
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DailyQuests.Quests;

        /**
         * Decodes a Quests message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Quests
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DailyQuests.Quests;

        /**
         * Verifies a Quests message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Quests message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Quests
         */
        public static fromObject(object: { [k: string]: any }): DailyQuests.Quests;

        /**
         * Creates a plain object from a Quests message. Also converts values to other types if specified.
         * @param message Quests
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DailyQuests.Quests, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Quests to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Quests
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace Quests {

        /** Properties of a Reward. */
        interface IReward {

            /** Reward id */
            id?: (string|null);

            /** Reward quantity */
            quantity?: (number|null);
        }

        /** Represents a Reward. */
        class Reward implements IReward {

            /**
             * Constructs a new Reward.
             * @param [properties] Properties to set
             */
            constructor(properties?: DailyQuests.Quests.IReward);

            /** Reward id. */
            public id: string;

            /** Reward quantity. */
            public quantity: number;

            /**
             * Creates a new Reward instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Reward instance
             */
            public static create(properties?: DailyQuests.Quests.IReward): DailyQuests.Quests.Reward;

            /**
             * Encodes the specified Reward message. Does not implicitly {@link DailyQuests.Quests.Reward.verify|verify} messages.
             * @param message Reward message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: DailyQuests.Quests.IReward, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Reward message, length delimited. Does not implicitly {@link DailyQuests.Quests.Reward.verify|verify} messages.
             * @param message Reward message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: DailyQuests.Quests.IReward, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Reward message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Reward
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DailyQuests.Quests.Reward;

            /**
             * Decodes a Reward message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Reward
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DailyQuests.Quests.Reward;

            /**
             * Verifies a Reward message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Reward message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Reward
             */
            public static fromObject(object: { [k: string]: any }): DailyQuests.Quests.Reward;

            /**
             * Creates a plain object from a Reward message. Also converts values to other types if specified.
             * @param message Reward
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: DailyQuests.Quests.Reward, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Reward to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Reward
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}

/** Properties of a DailyRewards. */
export interface IDailyRewards {

    /** DailyRewards hoursToReceive */
    hoursToReceive?: (number|null);

    /** DailyRewards resetIfFail */
    resetIfFail?: (boolean|null);

    /** DailyRewards steps */
    steps?: (DailyRewards.ISteps[]|null);

    /** DailyRewards enabled */
    enabled?: (boolean|null);

    /** DailyRewards defaultRewardIfAlreadyOwned */
    defaultRewardIfAlreadyOwned?: (DailyRewards.IDefaultRewardIfAlreadyOwned|null);
}

/** Represents a DailyRewards. */
export class DailyRewards implements IDailyRewards {

    /**
     * Constructs a new DailyRewards.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDailyRewards);

    /** DailyRewards hoursToReceive. */
    public hoursToReceive: number;

    /** DailyRewards resetIfFail. */
    public resetIfFail: boolean;

    /** DailyRewards steps. */
    public steps: DailyRewards.ISteps[];

    /** DailyRewards enabled. */
    public enabled: boolean;

    /** DailyRewards defaultRewardIfAlreadyOwned. */
    public defaultRewardIfAlreadyOwned?: (DailyRewards.IDefaultRewardIfAlreadyOwned|null);

    /**
     * Creates a new DailyRewards instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DailyRewards instance
     */
    public static create(properties?: IDailyRewards): DailyRewards;

    /**
     * Encodes the specified DailyRewards message. Does not implicitly {@link DailyRewards.verify|verify} messages.
     * @param message DailyRewards message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDailyRewards, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DailyRewards message, length delimited. Does not implicitly {@link DailyRewards.verify|verify} messages.
     * @param message DailyRewards message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDailyRewards, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DailyRewards message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DailyRewards
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DailyRewards;

    /**
     * Decodes a DailyRewards message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DailyRewards
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DailyRewards;

    /**
     * Verifies a DailyRewards message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DailyRewards message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DailyRewards
     */
    public static fromObject(object: { [k: string]: any }): DailyRewards;

    /**
     * Creates a plain object from a DailyRewards message. Also converts values to other types if specified.
     * @param message DailyRewards
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DailyRewards, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DailyRewards to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DailyRewards
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace DailyRewards {

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
        constructor(properties?: DailyRewards.ISteps);

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
        public static create(properties?: DailyRewards.ISteps): DailyRewards.Steps;

        /**
         * Encodes the specified Steps message. Does not implicitly {@link DailyRewards.Steps.verify|verify} messages.
         * @param message Steps message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: DailyRewards.ISteps, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Steps message, length delimited. Does not implicitly {@link DailyRewards.Steps.verify|verify} messages.
         * @param message Steps message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: DailyRewards.ISteps, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Steps message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Steps
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DailyRewards.Steps;

        /**
         * Decodes a Steps message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Steps
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DailyRewards.Steps;

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
        public static fromObject(object: { [k: string]: any }): DailyRewards.Steps;

        /**
         * Creates a plain object from a Steps message. Also converts values to other types if specified.
         * @param message Steps
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DailyRewards.Steps, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: DailyRewards.IDefaultRewardIfAlreadyOwned);

        /** DefaultRewardIfAlreadyOwned itemId. */
        public itemId: string;

        /** DefaultRewardIfAlreadyOwned amount. */
        public amount: number;

        /**
         * Creates a new DefaultRewardIfAlreadyOwned instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DefaultRewardIfAlreadyOwned instance
         */
        public static create(properties?: DailyRewards.IDefaultRewardIfAlreadyOwned): DailyRewards.DefaultRewardIfAlreadyOwned;

        /**
         * Encodes the specified DefaultRewardIfAlreadyOwned message. Does not implicitly {@link DailyRewards.DefaultRewardIfAlreadyOwned.verify|verify} messages.
         * @param message DefaultRewardIfAlreadyOwned message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: DailyRewards.IDefaultRewardIfAlreadyOwned, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DefaultRewardIfAlreadyOwned message, length delimited. Does not implicitly {@link DailyRewards.DefaultRewardIfAlreadyOwned.verify|verify} messages.
         * @param message DefaultRewardIfAlreadyOwned message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: DailyRewards.IDefaultRewardIfAlreadyOwned, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DefaultRewardIfAlreadyOwned message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DefaultRewardIfAlreadyOwned
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DailyRewards.DefaultRewardIfAlreadyOwned;

        /**
         * Decodes a DefaultRewardIfAlreadyOwned message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DefaultRewardIfAlreadyOwned
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DailyRewards.DefaultRewardIfAlreadyOwned;

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
        public static fromObject(object: { [k: string]: any }): DailyRewards.DefaultRewardIfAlreadyOwned;

        /**
         * Creates a plain object from a DefaultRewardIfAlreadyOwned message. Also converts values to other types if specified.
         * @param message DefaultRewardIfAlreadyOwned
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DailyRewards.DefaultRewardIfAlreadyOwned, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

/** Properties of an ItemTable. */
export interface IItemTable {

    /** ItemTable items */
    items?: (ItemTable.IItems[]|null);
}

/** Represents an ItemTable. */
export class ItemTable implements IItemTable {

    /**
     * Constructs a new ItemTable.
     * @param [properties] Properties to set
     */
    constructor(properties?: IItemTable);

    /** ItemTable items. */
    public items: ItemTable.IItems[];

    /**
     * Creates a new ItemTable instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ItemTable instance
     */
    public static create(properties?: IItemTable): ItemTable;

    /**
     * Encodes the specified ItemTable message. Does not implicitly {@link ItemTable.verify|verify} messages.
     * @param message ItemTable message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IItemTable, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ItemTable message, length delimited. Does not implicitly {@link ItemTable.verify|verify} messages.
     * @param message ItemTable message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IItemTable, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ItemTable message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ItemTable
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ItemTable;

    /**
     * Decodes an ItemTable message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ItemTable
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ItemTable;

    /**
     * Verifies an ItemTable message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an ItemTable message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ItemTable
     */
    public static fromObject(object: { [k: string]: any }): ItemTable;

    /**
     * Creates a plain object from an ItemTable message. Also converts values to other types if specified.
     * @param message ItemTable
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ItemTable, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ItemTable to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ItemTable
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace ItemTable {

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
        constructor(properties?: ItemTable.IItems);

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
        public static create(properties?: ItemTable.IItems): ItemTable.Items;

        /**
         * Encodes the specified Items message. Does not implicitly {@link ItemTable.Items.verify|verify} messages.
         * @param message Items message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ItemTable.IItems, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Items message, length delimited. Does not implicitly {@link ItemTable.Items.verify|verify} messages.
         * @param message Items message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ItemTable.IItems, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Items message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Items
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ItemTable.Items;

        /**
         * Decodes an Items message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Items
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ItemTable.Items;

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
        public static fromObject(object: { [k: string]: any }): ItemTable.Items;

        /**
         * Creates a plain object from an Items message. Also converts values to other types if specified.
         * @param message Items
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ItemTable.Items, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

/** Properties of a LuckyWheel. */
export interface ILuckyWheel {

    /** LuckyWheel minFullSpins */
    minFullSpins?: (number|null);

    /** LuckyWheel maxFullSpins */
    maxFullSpins?: (number|null);

    /** LuckyWheel items */
    items?: (LuckyWheel.IItems[]|null);

    /** LuckyWheel dailyLimit */
    dailyLimit?: (number|null);
}

/** Represents a LuckyWheel. */
export class LuckyWheel implements ILuckyWheel {

    /**
     * Constructs a new LuckyWheel.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILuckyWheel);

    /** LuckyWheel minFullSpins. */
    public minFullSpins: number;

    /** LuckyWheel maxFullSpins. */
    public maxFullSpins: number;

    /** LuckyWheel items. */
    public items: LuckyWheel.IItems[];

    /** LuckyWheel dailyLimit. */
    public dailyLimit: number;

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

/** Properties of a ProgressQuests. */
export interface IProgressQuests {

    /** ProgressQuests quests */
    quests?: (ProgressQuests.IQuests[]|null);
}

/** Represents a ProgressQuests. */
export class ProgressQuests implements IProgressQuests {

    /**
     * Constructs a new ProgressQuests.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProgressQuests);

    /** ProgressQuests quests. */
    public quests: ProgressQuests.IQuests[];

    /**
     * Creates a new ProgressQuests instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProgressQuests instance
     */
    public static create(properties?: IProgressQuests): ProgressQuests;

    /**
     * Encodes the specified ProgressQuests message. Does not implicitly {@link ProgressQuests.verify|verify} messages.
     * @param message ProgressQuests message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProgressQuests, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProgressQuests message, length delimited. Does not implicitly {@link ProgressQuests.verify|verify} messages.
     * @param message ProgressQuests message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProgressQuests, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProgressQuests message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProgressQuests
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProgressQuests;

    /**
     * Decodes a ProgressQuests message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProgressQuests
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProgressQuests;

    /**
     * Verifies a ProgressQuests message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProgressQuests message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProgressQuests
     */
    public static fromObject(object: { [k: string]: any }): ProgressQuests;

    /**
     * Creates a plain object from a ProgressQuests message. Also converts values to other types if specified.
     * @param message ProgressQuests
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProgressQuests, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProgressQuests to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProgressQuests
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace ProgressQuests {

    /** Properties of a Quests. */
    interface IQuests {

        /** Quests name */
        name?: (string|null);

        /** Quests reward */
        reward?: (ProgressQuests.Quests.IReward|null);

        /** Quests description */
        description?: (string|null);

        /** Quests id */
        id?: (string|null);

        /** Quests type */
        type?: (string|null);

        /** Quests target */
        target?: (number|null);
    }

    /** Represents a Quests. */
    class Quests implements IQuests {

        /**
         * Constructs a new Quests.
         * @param [properties] Properties to set
         */
        constructor(properties?: ProgressQuests.IQuests);

        /** Quests name. */
        public name: string;

        /** Quests reward. */
        public reward?: (ProgressQuests.Quests.IReward|null);

        /** Quests description. */
        public description: string;

        /** Quests id. */
        public id: string;

        /** Quests type. */
        public type: string;

        /** Quests target. */
        public target: number;

        /**
         * Creates a new Quests instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Quests instance
         */
        public static create(properties?: ProgressQuests.IQuests): ProgressQuests.Quests;

        /**
         * Encodes the specified Quests message. Does not implicitly {@link ProgressQuests.Quests.verify|verify} messages.
         * @param message Quests message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ProgressQuests.IQuests, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Quests message, length delimited. Does not implicitly {@link ProgressQuests.Quests.verify|verify} messages.
         * @param message Quests message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ProgressQuests.IQuests, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Quests message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Quests
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProgressQuests.Quests;

        /**
         * Decodes a Quests message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Quests
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProgressQuests.Quests;

        /**
         * Verifies a Quests message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Quests message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Quests
         */
        public static fromObject(object: { [k: string]: any }): ProgressQuests.Quests;

        /**
         * Creates a plain object from a Quests message. Also converts values to other types if specified.
         * @param message Quests
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ProgressQuests.Quests, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Quests to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Quests
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace Quests {

        /** Properties of a Reward. */
        interface IReward {

            /** Reward id */
            id?: (string|null);

            /** Reward quantity */
            quantity?: (number|null);
        }

        /** Represents a Reward. */
        class Reward implements IReward {

            /**
             * Constructs a new Reward.
             * @param [properties] Properties to set
             */
            constructor(properties?: ProgressQuests.Quests.IReward);

            /** Reward id. */
            public id: string;

            /** Reward quantity. */
            public quantity: number;

            /**
             * Creates a new Reward instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Reward instance
             */
            public static create(properties?: ProgressQuests.Quests.IReward): ProgressQuests.Quests.Reward;

            /**
             * Encodes the specified Reward message. Does not implicitly {@link ProgressQuests.Quests.Reward.verify|verify} messages.
             * @param message Reward message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ProgressQuests.Quests.IReward, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Reward message, length delimited. Does not implicitly {@link ProgressQuests.Quests.Reward.verify|verify} messages.
             * @param message Reward message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ProgressQuests.Quests.IReward, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Reward message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Reward
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProgressQuests.Quests.Reward;

            /**
             * Decodes a Reward message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Reward
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProgressQuests.Quests.Reward;

            /**
             * Verifies a Reward message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Reward message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Reward
             */
            public static fromObject(object: { [k: string]: any }): ProgressQuests.Quests.Reward;

            /**
             * Creates a plain object from a Reward message. Also converts values to other types if specified.
             * @param message Reward
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ProgressQuests.Quests.Reward, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Reward to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Reward
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
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

    /** Represents a LuckyWheel */
    class LuckyWheel extends $protobuf.rpc.Service {

        /**
         * Constructs a new LuckyWheel service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new LuckyWheel service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): LuckyWheel;

        /**
         * Calls ClaimItem.
         * @param request Empty message or plain object
         * @param callback Node-style callback called with the error, if any, and LuckyWheelClaimItemOutput
         */
        public claimItem(request: IEmpty, callback: GameScripts.LuckyWheel.ClaimItemCallback): void;

        /**
         * Calls ClaimItem.
         * @param request Empty message or plain object
         * @returns Promise
         */
        public claimItem(request: IEmpty): Promise<LuckyWheelClaimItemOutput>;

        /**
         * Calls CanClaimItem.
         * @param request Empty message or plain object
         * @param callback Node-style callback called with the error, if any, and LuckyWheelCanClaimOutput
         */
        public canClaimItem(request: IEmpty, callback: GameScripts.LuckyWheel.CanClaimItemCallback): void;

        /**
         * Calls CanClaimItem.
         * @param request Empty message or plain object
         * @returns Promise
         */
        public canClaimItem(request: IEmpty): Promise<LuckyWheelCanClaimOutput>;

        /**
         * Calls GetList.
         * @param request Empty message or plain object
         * @param callback Node-style callback called with the error, if any, and LuckyWheel
         */
        public getList(request: IEmpty, callback: GameScripts.LuckyWheel.GetListCallback): void;

        /**
         * Calls GetList.
         * @param request Empty message or plain object
         * @returns Promise
         */
        public getList(request: IEmpty): Promise<LuckyWheel>;
    }

    namespace LuckyWheel {

        /**
         * Callback as used by {@link GameScripts.LuckyWheel#claimItem}.
         * @param error Error, if any
         * @param [response] LuckyWheelClaimItemOutput
         */
        type ClaimItemCallback = (error: (Error|null), response?: LuckyWheelClaimItemOutput) => void;

        /**
         * Callback as used by {@link GameScripts.LuckyWheel#canClaimItem}.
         * @param error Error, if any
         * @param [response] LuckyWheelCanClaimOutput
         */
        type CanClaimItemCallback = (error: (Error|null), response?: LuckyWheelCanClaimOutput) => void;

        /**
         * Callback as used by {@link GameScripts.LuckyWheel#getList}.
         * @param error Error, if any
         * @param [response] LuckyWheel
         */
        type GetListCallback = (error: (Error|null), response?: LuckyWheel) => void;
    }

    /** Represents a DailyRewards */
    class DailyRewards extends $protobuf.rpc.Service {

        /**
         * Constructs a new DailyRewards service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new DailyRewards service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): DailyRewards;

        /**
         * Calls CanClaimRewards.
         * @param request Empty message or plain object
         * @param callback Node-style callback called with the error, if any, and DailyRewardsCanClaimRewardOutput
         */
        public canClaimRewards(request: IEmpty, callback: GameScripts.DailyRewards.CanClaimRewardsCallback): void;

        /**
         * Calls CanClaimRewards.
         * @param request Empty message or plain object
         * @returns Promise
         */
        public canClaimRewards(request: IEmpty): Promise<DailyRewardsCanClaimRewardOutput>;

        /**
         * Calls ClaimRewards.
         * @param request Empty message or plain object
         * @param callback Node-style callback called with the error, if any, and DailyRewardsClaimRewardsOutput
         */
        public claimRewards(request: IEmpty, callback: GameScripts.DailyRewards.ClaimRewardsCallback): void;

        /**
         * Calls ClaimRewards.
         * @param request Empty message or plain object
         * @returns Promise
         */
        public claimRewards(request: IEmpty): Promise<DailyRewardsClaimRewardsOutput>;
    }

    namespace DailyRewards {

        /**
         * Callback as used by {@link GameScripts.DailyRewards#canClaimRewards}.
         * @param error Error, if any
         * @param [response] DailyRewardsCanClaimRewardOutput
         */
        type CanClaimRewardsCallback = (error: (Error|null), response?: DailyRewardsCanClaimRewardOutput) => void;

        /**
         * Callback as used by {@link GameScripts.DailyRewards#claimRewards}.
         * @param error Error, if any
         * @param [response] DailyRewardsClaimRewardsOutput
         */
        type ClaimRewardsCallback = (error: (Error|null), response?: DailyRewardsClaimRewardsOutput) => void;
    }

    /** Represents a DailyQuests */
    class DailyQuests extends $protobuf.rpc.Service {

        /**
         * Constructs a new DailyQuests service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new DailyQuests service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): DailyQuests;

        /**
         * Calls GetList.
         * @param request Empty message or plain object
         * @param callback Node-style callback called with the error, if any, and DailyQuestsOutput
         */
        public getList(request: IEmpty, callback: GameScripts.DailyQuests.GetListCallback): void;

        /**
         * Calls GetList.
         * @param request Empty message or plain object
         * @returns Promise
         */
        public getList(request: IEmpty): Promise<DailyQuestsOutput>;

        /**
         * Calls UpdateQuest.
         * @param request DailyQuestsUpdateQuestInput message or plain object
         * @param callback Node-style callback called with the error, if any, and DailyQuestsUpdateQuestOutput
         */
        public updateQuest(request: IDailyQuestsUpdateQuestInput, callback: GameScripts.DailyQuests.UpdateQuestCallback): void;

        /**
         * Calls UpdateQuest.
         * @param request DailyQuestsUpdateQuestInput message or plain object
         * @returns Promise
         */
        public updateQuest(request: IDailyQuestsUpdateQuestInput): Promise<DailyQuestsUpdateQuestOutput>;

        /**
         * Calls ClaimQuest.
         * @param request DailyQuestsClaimQuestInput message or plain object
         * @param callback Node-style callback called with the error, if any, and DailyQuestsClaimQuestOutput
         */
        public claimQuest(request: IDailyQuestsClaimQuestInput, callback: GameScripts.DailyQuests.ClaimQuestCallback): void;

        /**
         * Calls ClaimQuest.
         * @param request DailyQuestsClaimQuestInput message or plain object
         * @returns Promise
         */
        public claimQuest(request: IDailyQuestsClaimQuestInput): Promise<DailyQuestsClaimQuestOutput>;
    }

    namespace DailyQuests {

        /**
         * Callback as used by {@link GameScripts.DailyQuests#getList}.
         * @param error Error, if any
         * @param [response] DailyQuestsOutput
         */
        type GetListCallback = (error: (Error|null), response?: DailyQuestsOutput) => void;

        /**
         * Callback as used by {@link GameScripts.DailyQuests#updateQuest}.
         * @param error Error, if any
         * @param [response] DailyQuestsUpdateQuestOutput
         */
        type UpdateQuestCallback = (error: (Error|null), response?: DailyQuestsUpdateQuestOutput) => void;

        /**
         * Callback as used by {@link GameScripts.DailyQuests#claimQuest}.
         * @param error Error, if any
         * @param [response] DailyQuestsClaimQuestOutput
         */
        type ClaimQuestCallback = (error: (Error|null), response?: DailyQuestsClaimQuestOutput) => void;
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

/** Properties of a DailyQuestsOutput. */
export interface IDailyQuestsOutput {

    /** DailyQuestsOutput dailyQuests */
    dailyQuests?: (DailyQuestsOutput.IDailyquests[]|null);
}

/** Represents a DailyQuestsOutput. */
export class DailyQuestsOutput implements IDailyQuestsOutput {

    /**
     * Constructs a new DailyQuestsOutput.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDailyQuestsOutput);

    /** DailyQuestsOutput dailyQuests. */
    public dailyQuests: DailyQuestsOutput.IDailyquests[];

    /**
     * Creates a new DailyQuestsOutput instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DailyQuestsOutput instance
     */
    public static create(properties?: IDailyQuestsOutput): DailyQuestsOutput;

    /**
     * Encodes the specified DailyQuestsOutput message. Does not implicitly {@link DailyQuestsOutput.verify|verify} messages.
     * @param message DailyQuestsOutput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDailyQuestsOutput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DailyQuestsOutput message, length delimited. Does not implicitly {@link DailyQuestsOutput.verify|verify} messages.
     * @param message DailyQuestsOutput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDailyQuestsOutput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DailyQuestsOutput message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DailyQuestsOutput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DailyQuestsOutput;

    /**
     * Decodes a DailyQuestsOutput message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DailyQuestsOutput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DailyQuestsOutput;

    /**
     * Verifies a DailyQuestsOutput message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DailyQuestsOutput message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DailyQuestsOutput
     */
    public static fromObject(object: { [k: string]: any }): DailyQuestsOutput;

    /**
     * Creates a plain object from a DailyQuestsOutput message. Also converts values to other types if specified.
     * @param message DailyQuestsOutput
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DailyQuestsOutput, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DailyQuestsOutput to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DailyQuestsOutput
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace DailyQuestsOutput {

    /** Properties of a Reward. */
    interface IReward {

        /** Reward id */
        id?: (string|null);

        /** Reward quantity */
        quantity?: (number|null);
    }

    /** Represents a Reward. */
    class Reward implements IReward {

        /**
         * Constructs a new Reward.
         * @param [properties] Properties to set
         */
        constructor(properties?: DailyQuestsOutput.IReward);

        /** Reward id. */
        public id: string;

        /** Reward quantity. */
        public quantity: number;

        /**
         * Creates a new Reward instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Reward instance
         */
        public static create(properties?: DailyQuestsOutput.IReward): DailyQuestsOutput.Reward;

        /**
         * Encodes the specified Reward message. Does not implicitly {@link DailyQuestsOutput.Reward.verify|verify} messages.
         * @param message Reward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: DailyQuestsOutput.IReward, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Reward message, length delimited. Does not implicitly {@link DailyQuestsOutput.Reward.verify|verify} messages.
         * @param message Reward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: DailyQuestsOutput.IReward, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Reward message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Reward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DailyQuestsOutput.Reward;

        /**
         * Decodes a Reward message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Reward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DailyQuestsOutput.Reward;

        /**
         * Verifies a Reward message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Reward message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Reward
         */
        public static fromObject(object: { [k: string]: any }): DailyQuestsOutput.Reward;

        /**
         * Creates a plain object from a Reward message. Also converts values to other types if specified.
         * @param message Reward
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DailyQuestsOutput.Reward, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Reward to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Reward
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Dailyquests. */
    interface IDailyquests {

        /** Dailyquests name */
        name?: (string|null);

        /** Dailyquests reward */
        reward?: (DailyQuestsOutput.IReward|null);

        /** Dailyquests description */
        description?: (string|null);

        /** Dailyquests id */
        id?: (string|null);

        /** Dailyquests type */
        type?: (string|null);

        /** Dailyquests target */
        target?: (number|null);

        /** Dailyquests progress */
        progress?: (number|null);

        /** Dailyquests canClaim */
        canClaim?: (boolean|null);
    }

    /** Represents a Dailyquests. */
    class Dailyquests implements IDailyquests {

        /**
         * Constructs a new Dailyquests.
         * @param [properties] Properties to set
         */
        constructor(properties?: DailyQuestsOutput.IDailyquests);

        /** Dailyquests name. */
        public name: string;

        /** Dailyquests reward. */
        public reward?: (DailyQuestsOutput.IReward|null);

        /** Dailyquests description. */
        public description: string;

        /** Dailyquests id. */
        public id: string;

        /** Dailyquests type. */
        public type: string;

        /** Dailyquests target. */
        public target: number;

        /** Dailyquests progress. */
        public progress: number;

        /** Dailyquests canClaim. */
        public canClaim: boolean;

        /**
         * Creates a new Dailyquests instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Dailyquests instance
         */
        public static create(properties?: DailyQuestsOutput.IDailyquests): DailyQuestsOutput.Dailyquests;

        /**
         * Encodes the specified Dailyquests message. Does not implicitly {@link DailyQuestsOutput.Dailyquests.verify|verify} messages.
         * @param message Dailyquests message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: DailyQuestsOutput.IDailyquests, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Dailyquests message, length delimited. Does not implicitly {@link DailyQuestsOutput.Dailyquests.verify|verify} messages.
         * @param message Dailyquests message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: DailyQuestsOutput.IDailyquests, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Dailyquests message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Dailyquests
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DailyQuestsOutput.Dailyquests;

        /**
         * Decodes a Dailyquests message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Dailyquests
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DailyQuestsOutput.Dailyquests;

        /**
         * Verifies a Dailyquests message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Dailyquests message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Dailyquests
         */
        public static fromObject(object: { [k: string]: any }): DailyQuestsOutput.Dailyquests;

        /**
         * Creates a plain object from a Dailyquests message. Also converts values to other types if specified.
         * @param message Dailyquests
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DailyQuestsOutput.Dailyquests, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Dailyquests to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Dailyquests
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Properties of a DailyQuestsUpdateQuestInput. */
export interface IDailyQuestsUpdateQuestInput {

    /** DailyQuestsUpdateQuestInput questProgress */
    questProgress?: (DailyQuestsUpdateQuestInput.IQuestProgress[]|null);
}

/** Represents a DailyQuestsUpdateQuestInput. */
export class DailyQuestsUpdateQuestInput implements IDailyQuestsUpdateQuestInput {

    /**
     * Constructs a new DailyQuestsUpdateQuestInput.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDailyQuestsUpdateQuestInput);

    /** DailyQuestsUpdateQuestInput questProgress. */
    public questProgress: DailyQuestsUpdateQuestInput.IQuestProgress[];

    /**
     * Creates a new DailyQuestsUpdateQuestInput instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DailyQuestsUpdateQuestInput instance
     */
    public static create(properties?: IDailyQuestsUpdateQuestInput): DailyQuestsUpdateQuestInput;

    /**
     * Encodes the specified DailyQuestsUpdateQuestInput message. Does not implicitly {@link DailyQuestsUpdateQuestInput.verify|verify} messages.
     * @param message DailyQuestsUpdateQuestInput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDailyQuestsUpdateQuestInput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DailyQuestsUpdateQuestInput message, length delimited. Does not implicitly {@link DailyQuestsUpdateQuestInput.verify|verify} messages.
     * @param message DailyQuestsUpdateQuestInput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDailyQuestsUpdateQuestInput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DailyQuestsUpdateQuestInput message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DailyQuestsUpdateQuestInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DailyQuestsUpdateQuestInput;

    /**
     * Decodes a DailyQuestsUpdateQuestInput message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DailyQuestsUpdateQuestInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DailyQuestsUpdateQuestInput;

    /**
     * Verifies a DailyQuestsUpdateQuestInput message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DailyQuestsUpdateQuestInput message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DailyQuestsUpdateQuestInput
     */
    public static fromObject(object: { [k: string]: any }): DailyQuestsUpdateQuestInput;

    /**
     * Creates a plain object from a DailyQuestsUpdateQuestInput message. Also converts values to other types if specified.
     * @param message DailyQuestsUpdateQuestInput
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DailyQuestsUpdateQuestInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DailyQuestsUpdateQuestInput to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DailyQuestsUpdateQuestInput
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace DailyQuestsUpdateQuestInput {

    /** Properties of a QuestProgress. */
    interface IQuestProgress {

        /** QuestProgress id */
        id?: (string|null);

        /** QuestProgress amount */
        amount?: (number|null);
    }

    /** Represents a QuestProgress. */
    class QuestProgress implements IQuestProgress {

        /**
         * Constructs a new QuestProgress.
         * @param [properties] Properties to set
         */
        constructor(properties?: DailyQuestsUpdateQuestInput.IQuestProgress);

        /** QuestProgress id. */
        public id: string;

        /** QuestProgress amount. */
        public amount: number;

        /**
         * Creates a new QuestProgress instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QuestProgress instance
         */
        public static create(properties?: DailyQuestsUpdateQuestInput.IQuestProgress): DailyQuestsUpdateQuestInput.QuestProgress;

        /**
         * Encodes the specified QuestProgress message. Does not implicitly {@link DailyQuestsUpdateQuestInput.QuestProgress.verify|verify} messages.
         * @param message QuestProgress message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: DailyQuestsUpdateQuestInput.IQuestProgress, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QuestProgress message, length delimited. Does not implicitly {@link DailyQuestsUpdateQuestInput.QuestProgress.verify|verify} messages.
         * @param message QuestProgress message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: DailyQuestsUpdateQuestInput.IQuestProgress, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QuestProgress message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QuestProgress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DailyQuestsUpdateQuestInput.QuestProgress;

        /**
         * Decodes a QuestProgress message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QuestProgress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DailyQuestsUpdateQuestInput.QuestProgress;

        /**
         * Verifies a QuestProgress message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QuestProgress message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QuestProgress
         */
        public static fromObject(object: { [k: string]: any }): DailyQuestsUpdateQuestInput.QuestProgress;

        /**
         * Creates a plain object from a QuestProgress message. Also converts values to other types if specified.
         * @param message QuestProgress
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DailyQuestsUpdateQuestInput.QuestProgress, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QuestProgress to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for QuestProgress
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Properties of a DailyQuestsUpdateQuestOutput. */
export interface IDailyQuestsUpdateQuestOutput {

    /** DailyQuestsUpdateQuestOutput questsCanClaim */
    questsCanClaim?: (string[]|null);
}

/** Represents a DailyQuestsUpdateQuestOutput. */
export class DailyQuestsUpdateQuestOutput implements IDailyQuestsUpdateQuestOutput {

    /**
     * Constructs a new DailyQuestsUpdateQuestOutput.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDailyQuestsUpdateQuestOutput);

    /** DailyQuestsUpdateQuestOutput questsCanClaim. */
    public questsCanClaim: string[];

    /**
     * Creates a new DailyQuestsUpdateQuestOutput instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DailyQuestsUpdateQuestOutput instance
     */
    public static create(properties?: IDailyQuestsUpdateQuestOutput): DailyQuestsUpdateQuestOutput;

    /**
     * Encodes the specified DailyQuestsUpdateQuestOutput message. Does not implicitly {@link DailyQuestsUpdateQuestOutput.verify|verify} messages.
     * @param message DailyQuestsUpdateQuestOutput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDailyQuestsUpdateQuestOutput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DailyQuestsUpdateQuestOutput message, length delimited. Does not implicitly {@link DailyQuestsUpdateQuestOutput.verify|verify} messages.
     * @param message DailyQuestsUpdateQuestOutput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDailyQuestsUpdateQuestOutput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DailyQuestsUpdateQuestOutput message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DailyQuestsUpdateQuestOutput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DailyQuestsUpdateQuestOutput;

    /**
     * Decodes a DailyQuestsUpdateQuestOutput message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DailyQuestsUpdateQuestOutput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DailyQuestsUpdateQuestOutput;

    /**
     * Verifies a DailyQuestsUpdateQuestOutput message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DailyQuestsUpdateQuestOutput message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DailyQuestsUpdateQuestOutput
     */
    public static fromObject(object: { [k: string]: any }): DailyQuestsUpdateQuestOutput;

    /**
     * Creates a plain object from a DailyQuestsUpdateQuestOutput message. Also converts values to other types if specified.
     * @param message DailyQuestsUpdateQuestOutput
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DailyQuestsUpdateQuestOutput, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DailyQuestsUpdateQuestOutput to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DailyQuestsUpdateQuestOutput
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DailyQuestsClaimQuestInput. */
export interface IDailyQuestsClaimQuestInput {

    /** DailyQuestsClaimQuestInput items */
    items?: (string[]|null);
}

/** Represents a DailyQuestsClaimQuestInput. */
export class DailyQuestsClaimQuestInput implements IDailyQuestsClaimQuestInput {

    /**
     * Constructs a new DailyQuestsClaimQuestInput.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDailyQuestsClaimQuestInput);

    /** DailyQuestsClaimQuestInput items. */
    public items: string[];

    /**
     * Creates a new DailyQuestsClaimQuestInput instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DailyQuestsClaimQuestInput instance
     */
    public static create(properties?: IDailyQuestsClaimQuestInput): DailyQuestsClaimQuestInput;

    /**
     * Encodes the specified DailyQuestsClaimQuestInput message. Does not implicitly {@link DailyQuestsClaimQuestInput.verify|verify} messages.
     * @param message DailyQuestsClaimQuestInput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDailyQuestsClaimQuestInput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DailyQuestsClaimQuestInput message, length delimited. Does not implicitly {@link DailyQuestsClaimQuestInput.verify|verify} messages.
     * @param message DailyQuestsClaimQuestInput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDailyQuestsClaimQuestInput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DailyQuestsClaimQuestInput message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DailyQuestsClaimQuestInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DailyQuestsClaimQuestInput;

    /**
     * Decodes a DailyQuestsClaimQuestInput message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DailyQuestsClaimQuestInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DailyQuestsClaimQuestInput;

    /**
     * Verifies a DailyQuestsClaimQuestInput message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DailyQuestsClaimQuestInput message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DailyQuestsClaimQuestInput
     */
    public static fromObject(object: { [k: string]: any }): DailyQuestsClaimQuestInput;

    /**
     * Creates a plain object from a DailyQuestsClaimQuestInput message. Also converts values to other types if specified.
     * @param message DailyQuestsClaimQuestInput
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DailyQuestsClaimQuestInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DailyQuestsClaimQuestInput to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DailyQuestsClaimQuestInput
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DailyQuestsClaimQuestOutput. */
export interface IDailyQuestsClaimQuestOutput {

    /** DailyQuestsClaimQuestOutput rewards */
    rewards?: (DailyQuestsClaimQuestOutput.IRewards[]|null);
}

/** Represents a DailyQuestsClaimQuestOutput. */
export class DailyQuestsClaimQuestOutput implements IDailyQuestsClaimQuestOutput {

    /**
     * Constructs a new DailyQuestsClaimQuestOutput.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDailyQuestsClaimQuestOutput);

    /** DailyQuestsClaimQuestOutput rewards. */
    public rewards: DailyQuestsClaimQuestOutput.IRewards[];

    /**
     * Creates a new DailyQuestsClaimQuestOutput instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DailyQuestsClaimQuestOutput instance
     */
    public static create(properties?: IDailyQuestsClaimQuestOutput): DailyQuestsClaimQuestOutput;

    /**
     * Encodes the specified DailyQuestsClaimQuestOutput message. Does not implicitly {@link DailyQuestsClaimQuestOutput.verify|verify} messages.
     * @param message DailyQuestsClaimQuestOutput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDailyQuestsClaimQuestOutput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DailyQuestsClaimQuestOutput message, length delimited. Does not implicitly {@link DailyQuestsClaimQuestOutput.verify|verify} messages.
     * @param message DailyQuestsClaimQuestOutput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDailyQuestsClaimQuestOutput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DailyQuestsClaimQuestOutput message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DailyQuestsClaimQuestOutput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DailyQuestsClaimQuestOutput;

    /**
     * Decodes a DailyQuestsClaimQuestOutput message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DailyQuestsClaimQuestOutput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DailyQuestsClaimQuestOutput;

    /**
     * Verifies a DailyQuestsClaimQuestOutput message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DailyQuestsClaimQuestOutput message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DailyQuestsClaimQuestOutput
     */
    public static fromObject(object: { [k: string]: any }): DailyQuestsClaimQuestOutput;

    /**
     * Creates a plain object from a DailyQuestsClaimQuestOutput message. Also converts values to other types if specified.
     * @param message DailyQuestsClaimQuestOutput
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DailyQuestsClaimQuestOutput, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DailyQuestsClaimQuestOutput to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DailyQuestsClaimQuestOutput
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace DailyQuestsClaimQuestOutput {

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
        constructor(properties?: DailyQuestsClaimQuestOutput.IRewards);

        /** Rewards itemId. */
        public itemId: string;

        /** Rewards amount. */
        public amount: number;

        /**
         * Creates a new Rewards instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Rewards instance
         */
        public static create(properties?: DailyQuestsClaimQuestOutput.IRewards): DailyQuestsClaimQuestOutput.Rewards;

        /**
         * Encodes the specified Rewards message. Does not implicitly {@link DailyQuestsClaimQuestOutput.Rewards.verify|verify} messages.
         * @param message Rewards message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: DailyQuestsClaimQuestOutput.IRewards, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Rewards message, length delimited. Does not implicitly {@link DailyQuestsClaimQuestOutput.Rewards.verify|verify} messages.
         * @param message Rewards message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: DailyQuestsClaimQuestOutput.IRewards, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Rewards message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Rewards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DailyQuestsClaimQuestOutput.Rewards;

        /**
         * Decodes a Rewards message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Rewards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DailyQuestsClaimQuestOutput.Rewards;

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
        public static fromObject(object: { [k: string]: any }): DailyQuestsClaimQuestOutput.Rewards;

        /**
         * Creates a plain object from a Rewards message. Also converts values to other types if specified.
         * @param message Rewards
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DailyQuestsClaimQuestOutput.Rewards, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
     * Calls GetInfo.
     * @param request Empty message or plain object
     * @param callback Node-style callback called with the error, if any, and InboxList
     */
    public getInfo(request: IEmpty, callback: Inbox.GetInfoCallback): void;

    /**
     * Calls GetInfo.
     * @param request Empty message or plain object
     * @returns Promise
     */
    public getInfo(request: IEmpty): Promise<InboxList>;

    /**
     * Calls ClaimItem.
     * @param request InboxClaimInput message or plain object
     * @param callback Node-style callback called with the error, if any, and InboxClaimOutput
     */
    public claimItem(request: IInboxClaimInput, callback: Inbox.ClaimItemCallback): void;

    /**
     * Calls ClaimItem.
     * @param request InboxClaimInput message or plain object
     * @returns Promise
     */
    public claimItem(request: IInboxClaimInput): Promise<InboxClaimOutput>;

    /**
     * Calls MarkDeleteItem.
     * @param request InboxDeleteInput message or plain object
     * @param callback Node-style callback called with the error, if any, and InboxDeleteOutput
     */
    public markDeleteItem(request: IInboxDeleteInput, callback: Inbox.MarkDeleteItemCallback): void;

    /**
     * Calls MarkDeleteItem.
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
    type GetInfoCallback = (error: (Error|null), response?: InboxList) => void;

    /**
     * Callback as used by {@link Inbox#claimItem}.
     * @param error Error, if any
     * @param [response] InboxClaimOutput
     */
    type ClaimItemCallback = (error: (Error|null), response?: InboxClaimOutput) => void;

    /**
     * Callback as used by {@link Inbox#markDeleteItem}.
     * @param error Error, if any
     * @param [response] InboxDeleteOutput
     */
    type MarkDeleteItemCallback = (error: (Error|null), response?: InboxDeleteOutput) => void;
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
     * Calls GetTopScore.
     * @param request GetTopLeaderboardInput message or plain object
     * @param callback Node-style callback called with the error, if any, and TopLeaderboard
     */
    public getTopScore(request: IGetTopLeaderboardInput, callback: Leaderboard.GetTopScoreCallback): void;

    /**
     * Calls GetTopScore.
     * @param request GetTopLeaderboardInput message or plain object
     * @returns Promise
     */
    public getTopScore(request: IGetTopLeaderboardInput): Promise<TopLeaderboard>;

    /**
     * Calls GetMyRank.
     * @param request GetMyRankLeaderboardInput message or plain object
     * @param callback Node-style callback called with the error, if any, and GetMyRankLeaderboardOutput
     */
    public getMyRank(request: IGetMyRankLeaderboardInput, callback: Leaderboard.GetMyRankCallback): void;

    /**
     * Calls GetMyRank.
     * @param request GetMyRankLeaderboardInput message or plain object
     * @returns Promise
     */
    public getMyRank(request: IGetMyRankLeaderboardInput): Promise<GetMyRankLeaderboardOutput>;

    /**
     * Calls UpdateScore.
     * @param request UpdateScoreLeaderboardInput message or plain object
     * @param callback Node-style callback called with the error, if any, and UpdateScoreLeaderboardOutput
     */
    public updateScore(request: IUpdateScoreLeaderboardInput, callback: Leaderboard.UpdateScoreCallback): void;

    /**
     * Calls UpdateScore.
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
    type GetTopScoreCallback = (error: (Error|null), response?: TopLeaderboard) => void;

    /**
     * Callback as used by {@link Leaderboard#getMyRank}.
     * @param error Error, if any
     * @param [response] GetMyRankLeaderboardOutput
     */
    type GetMyRankCallback = (error: (Error|null), response?: GetMyRankLeaderboardOutput) => void;

    /**
     * Callback as used by {@link Leaderboard#updateScore}.
     * @param error Error, if any
     * @param [response] UpdateScoreLeaderboardOutput
     */
    type UpdateScoreCallback = (error: (Error|null), response?: UpdateScoreLeaderboardOutput) => void;
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
    public name: string;

    /** GetTopLeaderboardInput offset. */
    public offset: number;

    /** GetTopLeaderboardInput country. */
    public country: string;

    /** GetTopLeaderboardInput count. */
    public count: number;

    /** GetTopLeaderboardInput reverseOrder. */
    public reverseOrder: boolean;

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
     * Calls GetProfile.
     * @param request Empty message or plain object
     * @param callback Node-style callback called with the error, if any, and PlayerProfileRes
     */
    public getProfile(request: IEmpty, callback: Player.GetProfileCallback): void;

    /**
     * Calls GetProfile.
     * @param request Empty message or plain object
     * @returns Promise
     */
    public getProfile(request: IEmpty): Promise<PlayerProfileRes>;

    /**
     * Calls UpdateProfile.
     * @param request PlayerProfileReq message or plain object
     * @param callback Node-style callback called with the error, if any, and PlayerProfileRes
     */
    public updateProfile(request: IPlayerProfileReq, callback: Player.UpdateProfileCallback): void;

    /**
     * Calls UpdateProfile.
     * @param request PlayerProfileReq message or plain object
     * @returns Promise
     */
    public updateProfile(request: IPlayerProfileReq): Promise<PlayerProfileRes>;

    /**
     * Calls GetData.
     * @param request Empty message or plain object
     * @param callback Node-style callback called with the error, if any, and PlayerDataRes
     */
    public getData(request: IEmpty, callback: Player.GetDataCallback): void;

    /**
     * Calls GetData.
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
    type GetProfileCallback = (error: (Error|null), response?: PlayerProfileRes) => void;

    /**
     * Callback as used by {@link Player#updateProfile}.
     * @param error Error, if any
     * @param [response] PlayerProfileRes
     */
    type UpdateProfileCallback = (error: (Error|null), response?: PlayerProfileRes) => void;

    /**
     * Callback as used by {@link Player#getData}.
     * @param error Error, if any
     * @param [response] PlayerDataRes
     */
    type GetDataCallback = (error: (Error|null), response?: PlayerDataRes) => void;
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
