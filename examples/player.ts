import { GetPlayerDataCommand, UpdatePlayerDataCommand, APIType, Environment, OneBServicesClient } from "@oneb-sdk/client";

import { IPlayerProfileReq, PlayerDataRes, PlayerProfileReq, PlayerProfileRes } from "./bundle";

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
  console.log("token", accessToken);

  if (accessToken) {
    const playerData = await client.send<PlayerDataRes>(new GetPlayerDataCommand("Data"), PlayerDataRes);
    console.log("playerData", playerData);

    const playerProfile = await client.send<PlayerProfileRes>(new GetPlayerDataCommand("Profile"), PlayerProfileRes);
    console.log("playerProfile", playerProfile);
    //update
    let playerProfileUpdate = await client.send<PlayerProfileRes>(
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
