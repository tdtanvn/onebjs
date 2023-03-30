import { OneBServicesClient, APIType, Environment, CallGameScriptCommand } from "@oneb-sdk/client";

import {  ITestHelloWorldRes, TestHelloWorldRes } from "./bundle";

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
    const helloWorld = await client.send<ITestHelloWorldRes>(new CallGameScriptCommand("Test", "helloWorld"), TestHelloWorldRes);
    console.log(helloWorld);
  }
}

main();
