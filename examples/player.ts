import { OnlineServiceManager, GetPlayerDataCommand, UpdatePlayerDataCommand, APIType, Environment } from "@oneb-sdk/client";

import { IPlayerProfileReq, PlayerDataRes, PlayerProfileReq, PlayerProfileRes } from "./bundle";

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
  console.log("token", accessToken);

  if (accessToken) {
    const playerData = await OnlineServiceManager.getInstance().send<PlayerDataRes>(new GetPlayerDataCommand("Data"), PlayerDataRes);
    console.log("playerData", playerData);

    const playerProfile = await OnlineServiceManager.getInstance().send<PlayerProfileRes>(new GetPlayerDataCommand("Profile"), PlayerProfileRes);
    console.log("playerProfile", playerProfile);
    //update
    let playerProfileUpdate = await OnlineServiceManager.getInstance().send<PlayerProfileRes>(
      new UpdatePlayerDataCommand<IPlayerProfileReq>(
        "Profile",
        {
          playerName: "DR.WHO",
          country: "US",
        },
        PlayerProfileReq
      ),
      PlayerProfileRes
    );
    console.log("playerProfileUpdate", playerProfileUpdate);
  }
}

main();
