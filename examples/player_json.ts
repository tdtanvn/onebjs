import { GetPlayerDataCommand, UpdatePlayerDataCommand, APIType, Environment, OneBServicesClient } from "@oneb-sdk/client";

async function main() {
  const client = new OneBServicesClient({
    gameId: "DEMO",
    enableLog: true,
    environment: Environment.DEVELOPMENT,
    apiType: APIType.JSON,
  });

  const accessToken = await client.login({
    playerId: "oneb:test001",
    secretKey: "bimat",
  });
  console.log("token", accessToken);

  if (accessToken) {
    const playerData = await client.send(new GetPlayerDataCommand("Data"));
    console.log("playerData", playerData);

    const playerProfile = await client.send(new GetPlayerDataCommand("Profile"));
    console.log("playerProfile", playerProfile);
    //update
    let playerProfileUpdate = await client.send(
      new UpdatePlayerDataCommand("Profile", {
        playerName: "DR.WHO",
        country: "US",
      })
    );
    console.log("playerProfileUpdate", playerProfileUpdate);
  }
}

main();
