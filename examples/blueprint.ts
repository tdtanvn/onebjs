import { OnlineServiceManager, GetBlueprintDataCommand, APIType, Environment } from "@oneb-sdk/client";

import { DAILY_REWARDS, EQUIPMENTS, ITEM_TABLE } from "./bundle";

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
    const daily_rewards = await OnlineServiceManager.getInstance().send<DAILY_REWARDS>(new GetBlueprintDataCommand("daily_rewards"), DAILY_REWARDS);
    console.log("daily_rewards", daily_rewards);

    const item_table = await OnlineServiceManager.getInstance().send<ITEM_TABLE>(new GetBlueprintDataCommand("item_table"), ITEM_TABLE);
    console.log("item_table", item_table);

    const equipments = await OnlineServiceManager.getInstance().send<EQUIPMENTS>(new GetBlueprintDataCommand("equipments"), EQUIPMENTS);
    console.log("equipments", equipments);
  }
}

main();
