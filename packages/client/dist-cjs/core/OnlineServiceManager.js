"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnlineServiceManager = void 0;
const tslib_1 = require("tslib");
const node_fetch_1 = tslib_1.__importDefault(require("node-fetch"));
const GetAuthTokenCommand_1 = require("../commands/GetAuthTokenCommand");
const proto_1 = require("../proto/proto");
const EAPIType_1 = require("./EAPIType");
const EEnvironment_1 = require("./EEnvironment");
const JsonSerializationOption_1 = require("./JsonSerializationOption");
const ProtoSerializationOption_1 = require("./ProtoSerializationOption");
const Request_1 = require("./Request");
class OnlineServiceManager {
    constructor() {
        this.baseURL = new Map([
            ["LOCAL", "http://localhost:3000"],
            ["DEVELOPMENT", "https://dev.api.1bservices.com"],
            ["PRODUCTION", "https://api.1bservices.com"],
        ]);
        if (OnlineServiceManager.instance) {
            return OnlineServiceManager.instance;
        }
        OnlineServiceManager.instance = this;
    }
    static getInstance() {
        if (!OnlineServiceManager.instance) {
            OnlineServiceManager.instance = new OnlineServiceManager();
        }
        return OnlineServiceManager.instance;
    }
    init(param) {
        var _a, _b, _c, _d;
        this.gameId = param.gameId;
        this.gameVersion = (_a = param.gameVersion) !== null && _a !== void 0 ? _a : "";
        this.environment = (_b = param.environment) !== null && _b !== void 0 ? _b : EEnvironment_1.Environment.DEVELOPMENT;
        this.enableLog = (_c = param.enableLog) !== null && _c !== void 0 ? _c : false;
        this.apiType = (_d = param.apiType) !== null && _d !== void 0 ? _d : EAPIType_1.APIType.JSON;
        this.accessToken = "";
        if (this.apiType === EAPIType_1.APIType.JSON) {
            this.serializationOption = new JsonSerializationOption_1.JsonSerializationOption();
        }
        else {
            this.serializationOption = new ProtoSerializationOption_1.ProtoSerializationOption();
        }
    }
    async send(cmd, classMessage) {
        const request = this.apiType === EAPIType_1.APIType.JSON ? cmd.getRequest() : cmd.getBinRequest();
        const uri = `${this.baseURL.get(this.environment)}/${request.service}/${request.param}`;
        if (this.enableLog) {
            console.log(uri, request);
        }
        const response = await (0, node_fetch_1.default)(uri, {
            method: request.verb,
            body: request.verb === Request_1.RequestVerb.POST ? request.body : undefined,
            headers: {
                "Content-Type": this.serializationOption.ContentType,
                Authorization: `Bearer ${this.accessToken}`,
            },
        });
        if (response.ok) {
            const responseData = this.apiType === EAPIType_1.APIType.JSON ? await response.text() : await response.buffer();
            if (this.enableLog) {
                console.log("Response:", responseData);
            }
            return this.serializationOption.Deserialize(responseData, classMessage);
        }
        else {
            const errorMsg = await response.json();
            console.log("Error:", errorMsg);
            return undefined;
        }
    }
    async login(loginInput) {
        const input = { ...loginInput, gameId: this.gameId, gameVersion: this.gameVersion };
        if (this.apiType === EAPIType_1.APIType.JSON) {
            const authInfo = await this.send(new GetAuthTokenCommand_1.GetAuthTokenCommand(input));
            this.accessToken = authInfo.accessToken;
            return this.accessToken;
        }
        else {
            const authInfo = await this.send(new GetAuthTokenCommand_1.GetAuthTokenCommand(input, proto_1.AuthLogin), proto_1.AuthResponse);
            this.accessToken = authInfo.accessToken;
            return this.accessToken;
        }
    }
}
exports.OnlineServiceManager = OnlineServiceManager;
