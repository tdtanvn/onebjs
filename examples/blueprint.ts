import { OneBServicesClient, GetBlueprintDataCommand, APIType, Environment } from "@oneb-sdk/client";

import { DailyRewards, ItemTable } from "./bundle";

async function main() {
  const client = new OneBServicesClient({
    gameId: "DEMO",
    enableLog: false,
    environment: Environment.DEVELOPMENT,
    apiType: APIType.JSON,
  });

  const accessToken = await client.login({
    playerId: "oneb:test001",
    secretKey: "bimat",
  });

  if (accessToken) {
    const daily_rewards = await client.send<DailyRewards>(new GetBlueprintDataCommand("DailyRewards"), DailyRewards);
    console.log("daily_rewards", daily_rewards);

    const item_table = await client.send<ItemTable>(new GetBlueprintDataCommand("ItemTable"), ItemTable);
    console.log("item_table", item_table);
  }
}

main();
