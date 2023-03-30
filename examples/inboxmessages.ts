import { OneBServicesClient, APIType, Environment, GetInboxListCommand, ClaimInboxCommand, DeleteInboxCommand } from "@oneb-sdk/client";
import { InboxDeleteOutput } from "./bundle";
import {
  IInboxClaimInput,
  IInboxClaimOutput,
  IInboxDeleteInput,
  IInboxDeleteOutput,
  IInboxList,
  InboxClaimInput,
  InboxClaimOutput,
  InboxDeleteInput,
  InboxList,
} from "./bundle";

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
    const inboxList = await client.send<IInboxList>(new GetInboxListCommand(), InboxList);
    if (inboxList?.items.length) {
      let inboxIds = inboxList.items.filter((item) => item.canClaim).map((item) => item.id);
      console.log(inboxIds);
      const result = await client.send<IInboxClaimOutput>(
        new ClaimInboxCommand<IInboxClaimInput>({ inboxList: inboxIds }, InboxClaimInput),
        InboxClaimOutput
      );
      console.log(result);
      inboxIds = inboxList.items.map((item) => item.id);
      //mark delete
      let info = await client.send<IInboxDeleteOutput>(
        new DeleteInboxCommand<IInboxDeleteInput>(
          {
            inboxList: inboxIds,
          },
          InboxDeleteInput
        ),
        InboxDeleteOutput
      );
      console.log(info)
    }
  }
}

main();
