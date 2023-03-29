import { OnlineServiceManager, APIType, Environment, CallGameScriptCommand, GetBlueprintDataCommand } from "@oneb-sdk/client";

import { DailyRewardsCanClaimRewardOutput, DailyRewardsClaimRewardsOutput, DAILY_REWARDS } from "./bundle";

async function main() {
  OnlineServiceManager.getInstance().init({
    gameId: "DEMO",
    environment: Environment.DEVELOPMENT,
    apiType: APIType.BINARY,
  });

  const accessToken = await OnlineServiceManager.getInstance().login({
    playerId: "oneb:test003",
    secretKey: "bimat",
  });

  if (accessToken) {
    const dailyRewardsInfo = await OnlineServiceManager.getInstance().send<DAILY_REWARDS>(new GetBlueprintDataCommand("daily_rewards"), DAILY_REWARDS);
    console.log(dailyRewardsInfo);

    const canClaimRewards = await OnlineServiceManager.getInstance().send<DailyRewardsCanClaimRewardOutput>(new CallGameScriptCommand("Daily_Rewards", "canClaimRewards"), DailyRewardsCanClaimRewardOutput);
    console.log(canClaimRewards);

    if (canClaimRewards?.rewards?.length) {
      const rewardsInfo = await OnlineServiceManager.getInstance().send<DailyRewardsClaimRewardsOutput>(new CallGameScriptCommand("Daily_Rewards", "claimRewards"), DailyRewardsClaimRewardsOutput);
      console.log(rewardsInfo);
    }
  }
}

main();
