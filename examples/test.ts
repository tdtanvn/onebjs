const { GetPlayerDataCommand, UpdatePlayerDataCommand, APIType, Environment, OneBServicesClient } = require("@oneb-sdk/client");

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
  try {
    await client.login({
      playerId: "oneb:test001",
      secretKey: "abc",
    });
  } catch (error) {
    const {message} = error
    console.log("error here----", message, error)
  }
  console.log("token", accessToken);

  if (accessToken) {
    client.send(new GetPlayerDataCommand("Data")).then(playerData=>{
      console.log("playerData", playerData);
    })
    

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
