import {
  OneBServicesClient,
  APIType,
  Environment,
  GetTopScoreLeaderboardCommand,
  UpdateScoreLeaderboardCommand,
  GetMyRankLeaderboardCommand,
} from "@oneb-sdk/client";
import {
  GetMyRankLeaderboardInput,
  GetMyRankLeaderboardOutput,
  IGetMyRankLeaderboardInput,
  IGetMyRankLeaderboardOutput,
  IUpdateScoreLeaderboardInput,
  IUpdateScoreLeaderboardOutput,
  TopLeaderboard,
  UpdateScoreLeaderboardInput,
  UpdateScoreLeaderboardOutput,
} from "./bundle";
import { GetTopLeaderboardInput, IGetTopLeaderboardInput, ITopLeaderboard } from "./bundle";

async function main() {
  const client = new OneBServicesClient({
    gameId: "DEMO",
    enableLog: true,
    environment: Environment.LOCAL,
    apiType: APIType.BINARY,
  });

  const accessToken = await client.login({
    playerId: "oneb:test001",
    secretKey: "bimat",
  });

  if (accessToken) {
    const leaderboard = await client.send<ITopLeaderboard>(
      new GetTopScoreLeaderboardCommand<IGetTopLeaderboardInput>(
        {
          name: "ALL_TIME",
        },
        GetTopLeaderboardInput
      ),
      TopLeaderboard
    );
    console.log(leaderboard);
    const result = await client.send<IUpdateScoreLeaderboardOutput>(
      new UpdateScoreLeaderboardCommand<IUpdateScoreLeaderboardInput>(
        {
          items: [
            {
              name: "ALL_TIME",
              option: "GT",
              score: 1002,
            },
          ],
        },
        UpdateScoreLeaderboardInput
      ),
      UpdateScoreLeaderboardOutput
    );
    console.log(result);
    const myRank = await client.send<IGetMyRankLeaderboardOutput>(
      new GetMyRankLeaderboardCommand<IGetMyRankLeaderboardInput>(
        {
          name: "ALL_TIME",
        },
        GetMyRankLeaderboardInput
      ),
      GetMyRankLeaderboardOutput
    );
    console.log(myRank)
  }
}

main();
