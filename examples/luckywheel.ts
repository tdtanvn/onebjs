import { OnlineServiceManager, APIType, Environment, CallGameScriptCommand } from "@oneb-sdk/client";

import { LuckyWheelCanClaimOutput, LuckyWheel, LuckyWheelClaimItemOutput } from "./bundle";

async function main() {
  OnlineServiceManager.getInstance().init({
    gameId: "DEMO",
    enableLog: true,
    environment: Environment.DEVELOPMENT,
    apiType: APIType.BINARY,
  });

  const accessToken = await OnlineServiceManager.getInstance().login({
    playerId: "oneb:test001",
    secretKey: "bimat",
  });

  if (accessToken) {
    const luckyWheelInfo = await OnlineServiceManager.getInstance().send<LuckyWheel>(new CallGameScriptCommand("Lucky_Wheel", "getList"), LuckyWheel);
    console.log(luckyWheelInfo);

    const checkCanClaim = await OnlineServiceManager.getInstance().send<LuckyWheelCanClaimOutput>(new CallGameScriptCommand("Lucky_Wheel", "canClaimItem"), LuckyWheelCanClaimOutput);
    console.log(checkCanClaim);

    if (checkCanClaim.canClaim) {
      const rewardsInfo = await OnlineServiceManager.getInstance().send<LuckyWheelClaimItemOutput>(new CallGameScriptCommand("Lucky_Wheel", "claimItem"), LuckyWheelClaimItemOutput);
      console.log(rewardsInfo);
    }
  }
}

main();
