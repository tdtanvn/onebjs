import { OnlineServiceManager, APIType, Environment, CallGameScriptCommand } from "@oneb-sdk/client";

import {  ITestHelloWorldRes, TestHelloWorldRes } from "./bundle";

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
    const helloWorld = await OnlineServiceManager.getInstance().send<ITestHelloWorldRes>(new CallGameScriptCommand("Test", "helloWorld"), TestHelloWorldRes);
    console.log(helloWorld);
  }
}

main();
