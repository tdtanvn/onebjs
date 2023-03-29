# Getting Started

This repository contains npm packages @oneb-sdk/client and [OneB Tech](https://oneb.tech) provide a Game Backend as a Service (GBaaS) solution for game developers.

## Installation

The package can be installed via npm by running the following command
```
npm install @oneb-sdk/client
```
or
```
yarn install @oneb-sdk/client
```
## Usage

### Example
Here is an example of how to use the @oneb-sdk/client package to work with players in the GBaaS system:
```typescript
import { OnlineServiceManager, GetPlayerDataCommand, UpdatePlayerDataCommand, APIType, Environment } from "@oneb-sdk/client";

OnlineServiceManager.getInstance().init({
    gameId: "DEMO",
    environment: Environment.DEVELOPMENT,
    apiType: APIType.JSON,
  });
// get accesstoken
const accessToken = await OnlineServiceManager.getInstance().login({
  playerId: "oneb:newplayer001",
  secretKey: "key_here",
});
if(accessToken) {
  //get player profile
  const playerProfile = await OnlineServiceManager.getInstance().send(new GetPlayerDataCommand("Profile"));

  //get player data
  const playerData = await OnlineServiceManager.getInstance().send(new GetPlayerDataCommand("Data"));
}

```
Similarly, here is an example of how to use the @oneb-sdk/client package to get game data using Binary messages in the GBaaS system:
```javascript
import { OnlineServiceManager, GetBlueprintDataCommand, APIType, Environment } from "@oneb-sdk/client";
import { DAILY_REWARDS, } from "./bundle";

OnlineServiceManager.getInstance().init({ gameId: "DEMO",apiType: APIType.BINARY});
const accessToken = await OnlineServiceManager.getInstance().login({playerId: "oneb:test001", secretKey: "bimat"});
const daily_rewards = await OnlineServiceManager.getInstance().send<DAILY_REWARDS>(new GetBlueprintDataCommand("daily_rewards"), DAILY_REWARDS);

```
Call cloud scripts
```javascript
import { OnlineServiceManager, CallGameScriptCommand } from "@oneb-sdk/client";
import {  ITestHelloWorldRes, TestHelloWorldRes } from "./bundle";

const helloWorld = await OnlineServiceManager.getInstance().send<ITestHelloWorldRes>(new CallGameScriptCommand("Test", "helloWorld"), TestHelloWorldRes);

await OnlineServiceManager.getInstance().send<UpdateQuestOutput>(
  new CallGameScriptCommand<IUpdateQuestInput>(
    "Daily_Quest",
    "updateQuest",
    {
      items: [
        {
          id: "coin",
          amount: 12,
        },
        {
          id: "cash",
          amount: 1,
        },
      ],
    },
    IUpdateQuestInput
  ),
  UpdateQuestOutput
);
```

## Docs
For more information on how to use the OneB packages, please refer to the respective documentation.

* [Docs](https://oneb.tech/docs/) - Getting Started
* [Concepts](https://oneb.tech/docs/category/basic-concepts) - Basic concepts
* [Game Features](https://oneb.tech/docs/category/game-features) - understand features in games

## License

This project is licensed under the MIT License 

