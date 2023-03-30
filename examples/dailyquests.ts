import { OneBServicesClient, APIType, Environment, CallGameScriptCommand, GetBlueprintDataCommand } from "@oneb-sdk/client";

import { DailyQuestClaimQuestInput, DailyQuestClaimQuestOutput, DailyQuestOutput, DailyQuestUpdateQuestInput, DailyQuestUpdateQuestOutput, IDailyQuestClaimQuestInput, IDailyQuestUpdateQuestInput } from "./bundle";

async function main() {
  const client = new OneBServicesClient({
    gameId: "DEMO",
    enableLog: true,
    environment: Environment.DEVELOPMENT,
    apiType: APIType.BINARY,
  });

  const accessToken = await client.login({
    playerId: "oneb:test002",
    secretKey: "bimat",
  });

  if (accessToken) {
    const dailyQuestsInfo = await client.send<DailyQuestOutput>(new CallGameScriptCommand("Daily_Quest", "getList"), DailyQuestOutput);
    console.log(dailyQuestsInfo);

    await client.send<DailyQuestUpdateQuestOutput>(
      new CallGameScriptCommand<IDailyQuestUpdateQuestInput>(
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
        DailyQuestUpdateQuestInput
      ),
      DailyQuestUpdateQuestOutput
    );
    const itemIds = dailyQuestsInfo.dailyQuest.filter((item) => item.canClaim).map((item) => item.id);
    console.log(itemIds);
    if (itemIds.length) {
      const rewardsInfo = await client.send<DailyQuestClaimQuestOutput>(
        new CallGameScriptCommand<IDailyQuestClaimQuestInput>("Daily_Quest", "claimQuest", { items: itemIds }, DailyQuestClaimQuestInput),
        DailyQuestClaimQuestOutput
      );
      console.log(rewardsInfo);
    }
  }
}

main();
