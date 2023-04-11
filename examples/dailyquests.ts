import { OneBServicesClient, APIType, Environment, CallGameScriptCommand } from "@oneb-sdk/client";

import { DailyQuestsClaimQuestInput, DailyQuestsClaimQuestOutput, DailyQuestsOutput, DailyQuestsUpdateQuestInput, DailyQuestsUpdateQuestOutput, IDailyQuestsClaimQuestInput, IDailyQuestsUpdateQuestInput } from "./bundle";

async function main() {
  const client = new OneBServicesClient({
    gameId: "DEMO",
    enableLog: true,
    environment: Environment.UAT,
    apiType: APIType.BINARY,
  });

  const accessToken = await client.login({
    playerId: "oneb:test01",
    secretKey: "bimat",
  });

  if (accessToken) {
    const dailyQuestsInfo = await client.send<DailyQuestsOutput>(new CallGameScriptCommand("DailyQuests", "getList"), DailyQuestsOutput);
    console.log(dailyQuestsInfo);

    await client.send<DailyQuestsUpdateQuestOutput>(
      new CallGameScriptCommand<IDailyQuestsUpdateQuestInput>(
        "DailyQuests",
        "updateQuest",
        {
          questProgress: [
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
        DailyQuestsUpdateQuestInput
      ),
      DailyQuestsUpdateQuestOutput
    );
    const itemIds = dailyQuestsInfo.dailyQuests.filter((item) => item.canClaim).map((item) => item.id);
    console.log(itemIds);
    if (itemIds.length) {
      const rewardsInfo = await client.send<DailyQuestsClaimQuestOutput>(
        new CallGameScriptCommand<IDailyQuestsClaimQuestInput>("DailyQuests", "claimQuest", { items: itemIds }, DailyQuestsClaimQuestInput),
        DailyQuestsClaimQuestOutput
      );
      console.log(rewardsInfo);
    }
  }
}

main();
