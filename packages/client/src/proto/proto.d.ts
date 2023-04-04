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
    data?: (Uint8Array|null);
}

export class ProtoMessage implements IProtoMessage {
    constructor(properties?: IProtoMessage);
    public service: Service;
    public functionName?: (string|null);
    public namespace?: (string|null);
    public data?: (Uint8Array|null);
    public _functionName?: "functionName";
    public _namespace?: "namespace";
    public _data?: "data";
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

export interface IEmpty {
}

export class Empty implements IEmpty {
    constructor(properties?: IEmpty);
    public static create(properties?: IEmpty): Empty;
    public static encode(message: IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Empty;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Empty;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): Empty;
    public static toObject(message: Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };
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
