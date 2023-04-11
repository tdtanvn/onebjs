import { OneBServicesClient, APIType, Environment, CallGameScriptCommand } from "@oneb-sdk/client";

import { LuckyWheelCanClaimOutput, LuckyWheel, LuckyWheelClaimItemOutput } from "./bundle";

async function main() {
  const client = new OneBServicesClient({
    gameId: "DEMO",
    enableLog: true,
    environment: Environment.DEVELOPMENT,
    apiType: APIType.BINARY,
  });

  const accessToken = await client.login({
    playerId: "oneb:test001",
    secretKey: "bimat",
  });

  if (accessToken) {
    const luckyWheelInfo = await client.send<LuckyWheel>(new CallGameScriptCommand("LuckyWheel", "getList"), LuckyWheel);
    console.log(luckyWheelInfo);

    const checkCanClaim = await client.send<LuckyWheelCanClaimOutput>(
      new CallGameScriptCommand("LuckyWheel", "canClaimItem"),
      LuckyWheelCanClaimOutput
    );
    console.log(checkCanClaim);

    if (checkCanClaim.canClaim) {
      const rewardsInfo = await client.send<LuckyWheelClaimItemOutput>(
        new CallGameScriptCommand("LuckyWheel", "claimItem"),
        LuckyWheelClaimItemOutput
      );
      console.log(rewardsInfo);
    }
  }
}

main();
