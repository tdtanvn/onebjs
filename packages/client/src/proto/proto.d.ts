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

export interface IDailyQuestDefaultOutput {
    dailyQuest?: (DailyQuestDefaultOutput.IDailyquest[]|null);
}

export class DailyQuestDefaultOutput implements IDailyQuestDefaultOutput {
    constructor(properties?: IDailyQuestDefaultOutput);
    public dailyQuest: DailyQuestDefaultOutput.IDailyquest[];
    public static create(properties?: IDailyQuestDefaultOutput): DailyQuestDefaultOutput;
    public static encode(message: IDailyQuestDefaultOutput, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IDailyQuestDefaultOutput, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DailyQuestDefaultOutput;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DailyQuestDefaultOutput;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): DailyQuestDefaultOutput;
    public static toObject(message: DailyQuestDefaultOutput, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace DailyQuestDefaultOutput {

    interface IDailyquest {
        conditionReach?: (number|null);
        rewardQuantity?: (number|null);
        condition?: (string|null);
        rewardId?: (string|null);
        id?: (string|null);
        questName?: (string|null);
        progress?: (number|null);
        canClaim?: (boolean|null);
    }

    class Dailyquest implements IDailyquest {
        constructor(properties?: DailyQuestDefaultOutput.IDailyquest);
        public conditionReach: number;
        public rewardQuantity: number;
        public condition: string;
        public rewardId: string;
        public id: string;
        public questName: string;
        public progress: number;
        public canClaim: boolean;
        public static create(properties?: DailyQuestDefaultOutput.IDailyquest): DailyQuestDefaultOutput.Dailyquest;
        public static encode(message: DailyQuestDefaultOutput.IDailyquest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: DailyQuestDefaultOutput.IDailyquest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DailyQuestDefaultOutput.Dailyquest;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DailyQuestDefaultOutput.Dailyquest;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): DailyQuestDefaultOutput.Dailyquest;
        public static toObject(message: DailyQuestDefaultOutput.Dailyquest, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

export interface IDailyQuestUpdateQuestInput {
    items?: (DailyQuestUpdateQuestInput.IItems[]|null);
}

export class DailyQuestUpdateQuestInput implements IDailyQuestUpdateQuestInput {
    constructor(properties?: IDailyQuestUpdateQuestInput);
    public items: DailyQuestUpdateQuestInput.IItems[];
    public static create(properties?: IDailyQuestUpdateQuestInput): DailyQuestUpdateQuestInput;
    public static encode(message: IDailyQuestUpdateQuestInput, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IDailyQuestUpdateQuestInput, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DailyQuestUpdateQuestInput;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DailyQuestUpdateQuestInput;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): DailyQuestUpdateQuestInput;
    public static toObject(message: DailyQuestUpdateQuestInput, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace DailyQuestUpdateQuestInput {

    interface IItems {
        id?: (string|null);
        amount?: (number|null);
    }

    class Items implements IItems {
        constructor(properties?: DailyQuestUpdateQuestInput.IItems);
        public id: string;
        public amount: number;
        public static create(properties?: DailyQuestUpdateQuestInput.IItems): DailyQuestUpdateQuestInput.Items;
        public static encode(message: DailyQuestUpdateQuestInput.IItems, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: DailyQuestUpdateQuestInput.IItems, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DailyQuestUpdateQuestInput.Items;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DailyQuestUpdateQuestInput.Items;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): DailyQuestUpdateQuestInput.Items;
        public static toObject(message: DailyQuestUpdateQuestInput.Items, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

export interface IDailyQuestUpdateQuestOutput {
    questsCanClaim?: (string[]|null);
}

export class DailyQuestUpdateQuestOutput implements IDailyQuestUpdateQuestOutput {
    constructor(properties?: IDailyQuestUpdateQuestOutput);
    public questsCanClaim: string[];
    public static create(properties?: IDailyQuestUpdateQuestOutput): DailyQuestUpdateQuestOutput;
    public static encode(message: IDailyQuestUpdateQuestOutput, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IDailyQuestUpdateQuestOutput, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DailyQuestUpdateQuestOutput;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DailyQuestUpdateQuestOutput;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): DailyQuestUpdateQuestOutput;
    public static toObject(message: DailyQuestUpdateQuestOutput, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export interface IDailyQuestClaimQuestInput {
    items?: (string[]|null);
}

export class DailyQuestClaimQuestInput implements IDailyQuestClaimQuestInput {
    constructor(properties?: IDailyQuestClaimQuestInput);
    public items: string[];
    public static create(properties?: IDailyQuestClaimQuestInput): DailyQuestClaimQuestInput;
    public static encode(message: IDailyQuestClaimQuestInput, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IDailyQuestClaimQuestInput, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DailyQuestClaimQuestInput;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DailyQuestClaimQuestInput;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): DailyQuestClaimQuestInput;
    public static toObject(message: DailyQuestClaimQuestInput, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export interface IDailyQuestClaimQuestOutput {
    rewards?: (DailyQuestClaimQuestOutput.IRewards[]|null);
}

export class DailyQuestClaimQuestOutput implements IDailyQuestClaimQuestOutput {
    constructor(properties?: IDailyQuestClaimQuestOutput);
    public rewards: DailyQuestClaimQuestOutput.IRewards[];
    public static create(properties?: IDailyQuestClaimQuestOutput): DailyQuestClaimQuestOutput;
    public static encode(message: IDailyQuestClaimQuestOutput, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IDailyQuestClaimQuestOutput, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DailyQuestClaimQuestOutput;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DailyQuestClaimQuestOutput;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): DailyQuestClaimQuestOutput;
    public static toObject(message: DailyQuestClaimQuestOutput, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace DailyQuestClaimQuestOutput {

    interface IRewards {
        itemId?: (string|null);
        amount?: (number|null);
    }

    class Rewards implements IRewards {
        constructor(properties?: DailyQuestClaimQuestOutput.IRewards);
        public itemId: string;
        public amount: number;
        public static create(properties?: DailyQuestClaimQuestOutput.IRewards): DailyQuestClaimQuestOutput.Rewards;
        public static encode(message: DailyQuestClaimQuestOutput.IRewards, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: DailyQuestClaimQuestOutput.IRewards, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DailyQuestClaimQuestOutput.Rewards;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DailyQuestClaimQuestOutput.Rewards;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): DailyQuestClaimQuestOutput.Rewards;
        public static toObject(message: DailyQuestClaimQuestOutput.Rewards, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

export interface IDailyRewardsCanClaimRewardOutput {
    curStep?: (number|null);
    rewards?: (DailyRewardsCanClaimRewardOutput.IRewards[]|null);
}

export class DailyRewardsCanClaimRewardOutput implements IDailyRewardsCanClaimRewardOutput {
    constructor(properties?: IDailyRewardsCanClaimRewardOutput);
    public curStep: number;
    public rewards: DailyRewardsCanClaimRewardOutput.IRewards[];
    public static create(properties?: IDailyRewardsCanClaimRewardOutput): DailyRewardsCanClaimRewardOutput;
    public static encode(message: IDailyRewardsCanClaimRewardOutput, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IDailyRewardsCanClaimRewardOutput, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DailyRewardsCanClaimRewardOutput;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DailyRewardsCanClaimRewardOutput;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): DailyRewardsCanClaimRewardOutput;
    public static toObject(message: DailyRewardsCanClaimRewardOutput, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace DailyRewardsCanClaimRewardOutput {

    interface IRewards {
        itemId?: (string|null);
        step?: (number|null);
        amount?: (number|null);
    }

    class Rewards implements IRewards {
        constructor(properties?: DailyRewardsCanClaimRewardOutput.IRewards);
        public itemId: string;
        public step: number;
        public amount: number;
        public static create(properties?: DailyRewardsCanClaimRewardOutput.IRewards): DailyRewardsCanClaimRewardOutput.Rewards;
        public static encode(message: DailyRewardsCanClaimRewardOutput.IRewards, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: DailyRewardsCanClaimRewardOutput.IRewards, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DailyRewardsCanClaimRewardOutput.Rewards;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DailyRewardsCanClaimRewardOutput.Rewards;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): DailyRewardsCanClaimRewardOutput.Rewards;
        public static toObject(message: DailyRewardsCanClaimRewardOutput.Rewards, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

export interface IDailyRewardsClaimRewardsOutput {
    rewards?: (DailyRewardsClaimRewardsOutput.IRewards[]|null);
}

export class DailyRewardsClaimRewardsOutput implements IDailyRewardsClaimRewardsOutput {
    constructor(properties?: IDailyRewardsClaimRewardsOutput);
    public rewards: DailyRewardsClaimRewardsOutput.IRewards[];
    public static create(properties?: IDailyRewardsClaimRewardsOutput): DailyRewardsClaimRewardsOutput;
    public static encode(message: IDailyRewardsClaimRewardsOutput, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IDailyRewardsClaimRewardsOutput, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DailyRewardsClaimRewardsOutput;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DailyRewardsClaimRewardsOutput;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): DailyRewardsClaimRewardsOutput;
    public static toObject(message: DailyRewardsClaimRewardsOutput, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace DailyRewardsClaimRewardsOutput {

    interface IRewards {
        itemId?: (string|null);
        amount?: (number|null);
    }

    class Rewards implements IRewards {
        constructor(properties?: DailyRewardsClaimRewardsOutput.IRewards);
        public itemId: string;
        public amount: number;
        public static create(properties?: DailyRewardsClaimRewardsOutput.IRewards): DailyRewardsClaimRewardsOutput.Rewards;
        public static encode(message: DailyRewardsClaimRewardsOutput.IRewards, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: DailyRewardsClaimRewardsOutput.IRewards, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DailyRewardsClaimRewardsOutput.Rewards;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DailyRewardsClaimRewardsOutput.Rewards;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): DailyRewardsClaimRewardsOutput.Rewards;
        public static toObject(message: DailyRewardsClaimRewardsOutput.Rewards, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

export interface ILuckyWheel {
    maxFullSpins?: (number|null);
    minFullSpins?: (number|null);
    dailyLimit?: (number|null);
    items?: (LuckyWheel.IItems[]|null);
}

export class LuckyWheel implements ILuckyWheel {
    constructor(properties?: ILuckyWheel);
    public maxFullSpins: number;
    public minFullSpins: number;
    public dailyLimit: number;
    public items: LuckyWheel.IItems[];
    public static create(properties?: ILuckyWheel): LuckyWheel;
    public static encode(message: ILuckyWheel, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: ILuckyWheel, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LuckyWheel;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LuckyWheel;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): LuckyWheel;
    public static toObject(message: LuckyWheel, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace LuckyWheel {

    interface IItems {
        itemId?: (string|null);
        weight?: (number|null);
        quantity?: (number|null);
    }

    class Items implements IItems {
        constructor(properties?: LuckyWheel.IItems);
        public itemId: string;
        public weight: number;
        public quantity: number;
        public static create(properties?: LuckyWheel.IItems): LuckyWheel.Items;
        public static encode(message: LuckyWheel.IItems, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: LuckyWheel.IItems, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LuckyWheel.Items;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LuckyWheel.Items;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): LuckyWheel.Items;
        public static toObject(message: LuckyWheel.Items, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

export interface ILuckyWheelCanClaimOutput {
    canClaim?: (boolean|null);
}

export class LuckyWheelCanClaimOutput implements ILuckyWheelCanClaimOutput {
    constructor(properties?: ILuckyWheelCanClaimOutput);
    public canClaim: boolean;
    public static create(properties?: ILuckyWheelCanClaimOutput): LuckyWheelCanClaimOutput;
    public static encode(message: ILuckyWheelCanClaimOutput, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: ILuckyWheelCanClaimOutput, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LuckyWheelCanClaimOutput;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LuckyWheelCanClaimOutput;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): LuckyWheelCanClaimOutput;
    public static toObject(message: LuckyWheelCanClaimOutput, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export interface ILuckyWheelClaimItemOutput {
    itemReward?: (LuckyWheelClaimItemOutput.IItemreward|null);
    inventory?: (LuckyWheelClaimItemOutput.IInventory[]|null);
}

export class LuckyWheelClaimItemOutput implements ILuckyWheelClaimItemOutput {
    constructor(properties?: ILuckyWheelClaimItemOutput);
    public itemReward?: (LuckyWheelClaimItemOutput.IItemreward|null);
    public inventory: LuckyWheelClaimItemOutput.IInventory[];
    public static create(properties?: ILuckyWheelClaimItemOutput): LuckyWheelClaimItemOutput;
    public static encode(message: ILuckyWheelClaimItemOutput, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: ILuckyWheelClaimItemOutput, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LuckyWheelClaimItemOutput;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LuckyWheelClaimItemOutput;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): LuckyWheelClaimItemOutput;
    public static toObject(message: LuckyWheelClaimItemOutput, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace LuckyWheelClaimItemOutput {

    interface IItemreward {
        itemId?: (string|null);
        weight?: (number|null);
        quantity?: (number|null);
    }

    class Itemreward implements IItemreward {
        constructor(properties?: LuckyWheelClaimItemOutput.IItemreward);
        public itemId: string;
        public weight: number;
        public quantity: number;
        public static create(properties?: LuckyWheelClaimItemOutput.IItemreward): LuckyWheelClaimItemOutput.Itemreward;
        public static encode(message: LuckyWheelClaimItemOutput.IItemreward, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: LuckyWheelClaimItemOutput.IItemreward, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LuckyWheelClaimItemOutput.Itemreward;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LuckyWheelClaimItemOutput.Itemreward;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): LuckyWheelClaimItemOutput.Itemreward;
        public static toObject(message: LuckyWheelClaimItemOutput.Itemreward, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IInventory {
        itemId?: (string|null);
        amount?: (number|null);
    }

    class Inventory implements IInventory {
        constructor(properties?: LuckyWheelClaimItemOutput.IInventory);
        public itemId: string;
        public amount: number;
        public static create(properties?: LuckyWheelClaimItemOutput.IInventory): LuckyWheelClaimItemOutput.Inventory;
        public static encode(message: LuckyWheelClaimItemOutput.IInventory, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: LuckyWheelClaimItemOutput.IInventory, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LuckyWheelClaimItemOutput.Inventory;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LuckyWheelClaimItemOutput.Inventory;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): LuckyWheelClaimItemOutput.Inventory;
        public static toObject(message: LuckyWheelClaimItemOutput.Inventory, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

export interface IInboxList {
    items?: (InboxList.IItems[]|null);
}

export class InboxList implements IInboxList {
    constructor(properties?: IInboxList);
    public items: InboxList.IItems[];
    public static create(properties?: IInboxList): InboxList;
    public static encode(message: IInboxList, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IInboxList, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): InboxList;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): InboxList;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): InboxList;
    public static toObject(message: InboxList, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace InboxList {

    interface IConditions {
        value?: (string|null);
        operator?: (string|null);
        fieldName?: (string|null);
    }

    class Conditions implements IConditions {
        constructor(properties?: InboxList.IConditions);
        public value: string;
        public operator: string;
        public fieldName: string;
        public static create(properties?: InboxList.IConditions): InboxList.Conditions;
        public static encode(message: InboxList.IConditions, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: InboxList.IConditions, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): InboxList.Conditions;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): InboxList.Conditions;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): InboxList.Conditions;
        public static toObject(message: InboxList.Conditions, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IGifts {
        itemId?: (string|null);
        amount?: (number|null);
    }

    class Gifts implements IGifts {
        constructor(properties?: InboxList.IGifts);
        public itemId: string;
        public amount: number;
        public static create(properties?: InboxList.IGifts): InboxList.Gifts;
        public static encode(message: InboxList.IGifts, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: InboxList.IGifts, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): InboxList.Gifts;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): InboxList.Gifts;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): InboxList.Gifts;
        public static toObject(message: InboxList.Gifts, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IItems {
        content?: (string|null);
        conditions?: (InboxList.IConditions[]|null);
        gifts?: (InboxList.IGifts[]|null);
        expiryDate?: (number|null);
        id?: (string|null);
        title?: (string|null);
        canClaim?: (boolean|null);
    }

    class Items implements IItems {
        constructor(properties?: InboxList.IItems);
        public content: string;
        public conditions: InboxList.IConditions[];
        public gifts: InboxList.IGifts[];
        public expiryDate: number;
        public id: string;
        public title: string;
        public canClaim: boolean;
        public static create(properties?: InboxList.IItems): InboxList.Items;
        public static encode(message: InboxList.IItems, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: InboxList.IItems, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): InboxList.Items;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): InboxList.Items;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): InboxList.Items;
        public static toObject(message: InboxList.Items, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

export interface IInboxClaimInput {
    inboxList?: (string[]|null);
}

export class InboxClaimInput implements IInboxClaimInput {
    constructor(properties?: IInboxClaimInput);
    public inboxList: string[];
    public static create(properties?: IInboxClaimInput): InboxClaimInput;
    public static encode(message: IInboxClaimInput, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IInboxClaimInput, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): InboxClaimInput;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): InboxClaimInput;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): InboxClaimInput;
    public static toObject(message: InboxClaimInput, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export interface IInboxClaimOutput {
    inventory?: (InboxClaimOutput.IInventory[]|null);
    inboxList?: (string[]|null);
}

export class InboxClaimOutput implements IInboxClaimOutput {
    constructor(properties?: IInboxClaimOutput);
    public inventory: InboxClaimOutput.IInventory[];
    public inboxList: string[];
    public static create(properties?: IInboxClaimOutput): InboxClaimOutput;
    public static encode(message: IInboxClaimOutput, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IInboxClaimOutput, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): InboxClaimOutput;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): InboxClaimOutput;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): InboxClaimOutput;
    public static toObject(message: InboxClaimOutput, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace InboxClaimOutput {

    interface IInventory {
        itemId?: (string|null);
        amount?: (number|null);
    }

    class Inventory implements IInventory {
        constructor(properties?: InboxClaimOutput.IInventory);
        public itemId: string;
        public amount: number;
        public static create(properties?: InboxClaimOutput.IInventory): InboxClaimOutput.Inventory;
        public static encode(message: InboxClaimOutput.IInventory, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: InboxClaimOutput.IInventory, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): InboxClaimOutput.Inventory;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): InboxClaimOutput.Inventory;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): InboxClaimOutput.Inventory;
        public static toObject(message: InboxClaimOutput.Inventory, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

export interface IInboxDeleteInput {
    inboxList?: (string[]|null);
}

export class InboxDeleteInput implements IInboxDeleteInput {
    constructor(properties?: IInboxDeleteInput);
    public inboxList: string[];
    public static create(properties?: IInboxDeleteInput): InboxDeleteInput;
    public static encode(message: IInboxDeleteInput, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IInboxDeleteInput, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): InboxDeleteInput;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): InboxDeleteInput;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): InboxDeleteInput;
    public static toObject(message: InboxDeleteInput, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export interface IInboxDeleteOutput {
    inboxList?: (string[]|null);
}

export class InboxDeleteOutput implements IInboxDeleteOutput {
    constructor(properties?: IInboxDeleteOutput);
    public inboxList: string[];
    public static create(properties?: IInboxDeleteOutput): InboxDeleteOutput;
    public static encode(message: IInboxDeleteOutput, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IInboxDeleteOutput, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): InboxDeleteOutput;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): InboxDeleteOutput;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): InboxDeleteOutput;
    public static toObject(message: InboxDeleteOutput, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export interface IGetTopLeaderboardInput {
    name?: (string|null);
    offset?: (number|null);
    country?: (string|null);
    count?: (number|null);
    reverseOrder?: (boolean|null);
}

export class GetTopLeaderboardInput implements IGetTopLeaderboardInput {
    constructor(properties?: IGetTopLeaderboardInput);
    public name?: (string|null);
    public offset: number;
    public country: string;
    public count?: (number|null);
    public reverseOrder: boolean;
    public _name?: "name";
    public _count?: "count";
    public static create(properties?: IGetTopLeaderboardInput): GetTopLeaderboardInput;
    public static encode(message: IGetTopLeaderboardInput, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IGetTopLeaderboardInput, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetTopLeaderboardInput;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetTopLeaderboardInput;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): GetTopLeaderboardInput;
    public static toObject(message: GetTopLeaderboardInput, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export interface ITopLeaderboard {
    items?: (TopLeaderboard.IItems[]|null);
}

export class TopLeaderboard implements ITopLeaderboard {
    constructor(properties?: ITopLeaderboard);
    public items: TopLeaderboard.IItems[];
    public static create(properties?: ITopLeaderboard): TopLeaderboard;
    public static encode(message: ITopLeaderboard, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: ITopLeaderboard, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TopLeaderboard;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TopLeaderboard;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): TopLeaderboard;
    public static toObject(message: TopLeaderboard, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace TopLeaderboard {

    interface IItems {
        playerName?: (string|null);
        playerId?: (string|null);
        country?: (string|null);
        score?: (number|null);
        rank?: (number|null);
    }

    class Items implements IItems {
        constructor(properties?: TopLeaderboard.IItems);
        public playerName: string;
        public playerId: string;
        public country: string;
        public score: number;
        public rank: number;
        public static create(properties?: TopLeaderboard.IItems): TopLeaderboard.Items;
        public static encode(message: TopLeaderboard.IItems, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: TopLeaderboard.IItems, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TopLeaderboard.Items;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TopLeaderboard.Items;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): TopLeaderboard.Items;
        public static toObject(message: TopLeaderboard.Items, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

export interface IGetMyRankLeaderboardInput {
    name?: (string|null);
    country?: (string|null);
    reverseOrder?: (boolean|null);
}

export class GetMyRankLeaderboardInput implements IGetMyRankLeaderboardInput {
    constructor(properties?: IGetMyRankLeaderboardInput);
    public name: string;
    public country: string;
    public reverseOrder: boolean;
    public static create(properties?: IGetMyRankLeaderboardInput): GetMyRankLeaderboardInput;
    public static encode(message: IGetMyRankLeaderboardInput, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IGetMyRankLeaderboardInput, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetMyRankLeaderboardInput;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetMyRankLeaderboardInput;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): GetMyRankLeaderboardInput;
    public static toObject(message: GetMyRankLeaderboardInput, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export interface IGetMyRankLeaderboardOutput {
    rank?: (number|null);
    minRank?: (number|null);
    score?: (number|null);
    playerName?: (string|null);
    playerId?: (string|null);
    country?: (string|null);
}

export class GetMyRankLeaderboardOutput implements IGetMyRankLeaderboardOutput {
    constructor(properties?: IGetMyRankLeaderboardOutput);
    public rank: number;
    public minRank: number;
    public score: number;
    public playerName: string;
    public playerId: string;
    public country: string;
    public static create(properties?: IGetMyRankLeaderboardOutput): GetMyRankLeaderboardOutput;
    public static encode(message: IGetMyRankLeaderboardOutput, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IGetMyRankLeaderboardOutput, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetMyRankLeaderboardOutput;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetMyRankLeaderboardOutput;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): GetMyRankLeaderboardOutput;
    public static toObject(message: GetMyRankLeaderboardOutput, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export interface IUpdateScoreLeaderboardInput {
    items?: (UpdateScoreLeaderboardInput.IItems[]|null);
}

export class UpdateScoreLeaderboardInput implements IUpdateScoreLeaderboardInput {
    constructor(properties?: IUpdateScoreLeaderboardInput);
    public items: UpdateScoreLeaderboardInput.IItems[];
    public static create(properties?: IUpdateScoreLeaderboardInput): UpdateScoreLeaderboardInput;
    public static encode(message: IUpdateScoreLeaderboardInput, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IUpdateScoreLeaderboardInput, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UpdateScoreLeaderboardInput;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UpdateScoreLeaderboardInput;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): UpdateScoreLeaderboardInput;
    public static toObject(message: UpdateScoreLeaderboardInput, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace UpdateScoreLeaderboardInput {

    interface IItems {
        score?: (number|null);
        option?: (string|null);
        country?: (string|null);
        name?: (string|null);
    }

    class Items implements IItems {
        constructor(properties?: UpdateScoreLeaderboardInput.IItems);
        public score: number;
        public option: string;
        public country: string;
        public name: string;
        public static create(properties?: UpdateScoreLeaderboardInput.IItems): UpdateScoreLeaderboardInput.Items;
        public static encode(message: UpdateScoreLeaderboardInput.IItems, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: UpdateScoreLeaderboardInput.IItems, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UpdateScoreLeaderboardInput.Items;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UpdateScoreLeaderboardInput.Items;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): UpdateScoreLeaderboardInput.Items;
        public static toObject(message: UpdateScoreLeaderboardInput.Items, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

export interface IUpdateScoreLeaderboardOutput {
    status?: (string|null);
}

export class UpdateScoreLeaderboardOutput implements IUpdateScoreLeaderboardOutput {
    constructor(properties?: IUpdateScoreLeaderboardOutput);
    public status: string;
    public static create(properties?: IUpdateScoreLeaderboardOutput): UpdateScoreLeaderboardOutput;
    public static encode(message: IUpdateScoreLeaderboardOutput, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IUpdateScoreLeaderboardOutput, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UpdateScoreLeaderboardOutput;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UpdateScoreLeaderboardOutput;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): UpdateScoreLeaderboardOutput;
    public static toObject(message: UpdateScoreLeaderboardOutput, options?: $protobuf.IConversionOptions): { [k: string]: any };
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
