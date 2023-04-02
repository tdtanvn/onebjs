# @oneb-sdk/client

## Description

OneB SDK for JavaScript, OneBServices Client for JS Game engines such as Cocos creator, Three.js, Pixi.js, Phaser...

[OneB Services](https://oneb.tech) is a Game backend as a service (GBaaS)

<p>Our APIs are encrypted into binary, boosting your game's performance beyond expectations while also increasing its overall security.</p>
<p>With OneB, you have the freedom to host on your system, providing you with complete control over your game data and user data, with no need to share it with anyone else. This added level of security and privacy ensures that your game's data is protected and kept confidential at all times.</p>
<p>With OneB, you can write and debug code directly on the cloud, enabling you to effortlessly modify game features without the need to rebuild game client versions. This feature not only saves you time but also provides a more streamlined development process, allowing you to focus on creating the best possible gaming experience for your players.</p>

## Installing

To install this package, simply type add or install @oneb-sdk/client
using your favorite package manager:

- `npm install @oneb-sdk/client`
- `yarn add @oneb-sdk/client`
- `pnpm add @oneb-sdk/client`

## Getting Started

### Import

The OneB SDK is modulized by clients and commands.
To send a request, you only need to import the `OneBServicesClient` and
the commands you need, for example, `CallGameScriptCommand`:

```js
// ES5 example
const { OneBServicesClient, CallGameScriptCommand } = require("@oneb-sdk/client");
```

```ts
// ES6+ example
import { OneBServicesClient, CallGameScriptCommand  } from "@oneb-sdk/client";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. gameId, environment, api type).
- Initiate command with input parameters.
- Call `send` operation on the client with command object as input

```js
// a client can be shared by different commands.
const client = new OneBServicesClient({ gameId: "DEMO" });

const command = new GetBlueprintDataCommand(dataName);

client.send(command);
```

#### Async/await

We recommend using [await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
operator to wait for the promise returned by send operation as follows:

```js
// async/await.
try {
  const data = await client.send(command);
  // process data.
} catch (error) {
  // error handling.
} finally {
  // finally.
}
```

Async-await is clear, concise, intuitive, easy to debug and has better error handling
as compared to using Promise chains or callbacks.

#### Promises

You can also use [Promise chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#chaining)
to execute send operation.

```js
client.send(command).then(
  (data) => {
    // process data.
  },
  (error) => {
    // error handling.
  }
);
```

Promises can also be called using `.catch()` and `.finally()` as follows:

```js
client
  .send(command)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  })
  .finally(() => {
    // finally.
  });
```

#### working with protobuf

The client can also support the use protobuf to send/receive binary messages by setting apiType in the config,
To send a binary request, you:

- Initiate client with apiType is BINARY
- Download protobuf message from our services and build it to the proto class
- Call `send` operation on the client with proto class

```ts
const client = new OneBServicesClient({apiType: APIType.BINARY });

const command = new GetBlueprintDataCommand<ITRequest>(dataName, TRequest);

```

### Troubleshooting

When the service returns an exception, the error will include the exception information,

```js
try {
  const data = await client.send(command);
  // process data.
} catch (error) {
  console.log(error);
}
```

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

### Docs

For more information on how to use the OneB-SDK packages, please refer to the respective documentation.

* [Docs](https://oneb.tech/docs/) - Getting Started
* [Concepts](https://oneb.tech/docs/category/basic-concepts) - Basic concepts
* [Game Features](https://oneb.tech/docs/category/game-features) - understand features in games
