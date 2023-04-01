import {
  OneBServicesClient,
  APIType,
  Environment,
  GetTopScoreLeaderboardCommand,
  UpdateScoreLeaderboardCommand,
  GetMyRankLeaderboardCommand,
} from "@oneb-sdk/client";
import {
  GetMyRankLeaderboardOutput,
  IGetMyRankLeaderboardOutput,
  IUpdateScoreLeaderboardOutput,
  TopLeaderboard,
  UpdateScoreLeaderboardOutput,
} from "./bundle";
import { ITopLeaderboard } from "./bundle";

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

  if (accessToken) {
    const leaderboard = await client.send<ITopLeaderboard>(
      new GetTopScoreLeaderboardCommand({
        name: "ALL_TIME"
      }),
      TopLeaderboard
    );
    console.log(leaderboard);
    const result = await client.send<IUpdateScoreLeaderboardOutput>(
      new UpdateScoreLeaderboardCommand({
        items: [
          {
            name: "ALL_TIME",
            option: "GT",
            score: 1002,
          },
        ],
      }),
      UpdateScoreLeaderboardOutput
    );
    console.log(result);
    const myRank = await client.send<IGetMyRankLeaderboardOutput>(
      new GetMyRankLeaderboardCommand({
        name: "ALL_TIME",
      }),
      GetMyRankLeaderboardOutput
    );
    console.log(myRank);
  }
}

main();
