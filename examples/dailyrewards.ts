import { OneBServicesClient, APIType, Environment, CallGameScriptCommand, GetBlueprintDataCommand } from "@oneb-sdk/client";

import { DailyRewardsCanClaimRewardOutput, DailyRewardsClaimRewardsOutput, DailyRewards } from "./bundle";

async function main() {
  const client = new OneBServicesClient({
    gameId: "DEMO",
    environment: Environment.DEVELOPMENT,
    apiType: APIType.BINARY,
  });

  const accessToken = await client.login({
    playerId: "oneb:test003",
    secretKey: "bimat",
  });

  if (accessToken) {
    const dailyRewardsInfo = await client.send<DailyRewards>(new GetBlueprintDataCommand("DailyRewards"), DailyRewards);
    console.log(dailyRewardsInfo);

    const canClaimRewards = await client.send<DailyRewardsCanClaimRewardOutput>(
      new CallGameScriptCommand("DailyRewards", "canClaimRewards"),
      DailyRewardsCanClaimRewardOutput
    );
    console.log(canClaimRewards);

    if (canClaimRewards?.rewards?.length) {
      const rewardsInfo = await client.send<DailyRewardsClaimRewardsOutput>(
        new CallGameScriptCommand("DailyRewards", "claimRewards"),
        DailyRewardsClaimRewardsOutput
      );
      console.log(rewardsInfo);
    }
  }
}

main();
