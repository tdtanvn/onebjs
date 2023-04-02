import { OneBServicesClient, GetBlueprintDataCommand, APIType, Environment } from "@oneb-sdk/client";

import { DAILY_REWARDS, EQUIPMENTS, ITEM_TABLE } from "./bundle";

async function main() {
  const client = new OneBServicesClient({
    gameId: "DEMO",
    enableLog: false,
    environment: Environment.DEVELOPMENT,
    apiType: APIType.BINARY,
  });

  const accessToken = await client.login({
    playerId: "oneb:test001",
    secretKey: "bimat",
  });

  if (accessToken) {
    const daily_rewards = await client.send<DAILY_REWARDS>(new GetBlueprintDataCommand("daily_rewards"), DAILY_REWARDS);
    console.log("daily_rewards", daily_rewards);

    const item_table = await client.send<ITEM_TABLE>(new GetBlueprintDataCommand("item_table"), ITEM_TABLE);
    console.log("item_table", item_table);

    const equipments = await client.send<EQUIPMENTS>(new GetBlueprintDataCommand("equipments"), EQUIPMENTS);
    console.log("equipments", equipments);
  }
}

main();
