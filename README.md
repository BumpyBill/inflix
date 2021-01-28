# inflix

![Requires.io](https://img.shields.io/requires/github/BumpyBill/inflix)

Inflix is an easy-to-use Discord API wrapper for Deno.

## Instillation

```ts
import Inflix from "https://deno.land/x/inflix/index.ts";
```

## Usage

### Example

```ts
import Inflix from "https://deno.land/x/inflix/index.ts";

const client = new Inflix.Client();
client.login("Your Token Here");

client.on("ready", () => {
  console.log("Bot Online");
});
```

### Documentation

#### Events

```ts
<client>.on(<Event>, (<Argument(s)>) => {
  // Code
})
```

- ###### guild_create
  ```ts
  @param guild Guild
  ```
- ###### message_create
  ```ts
  @param message Message
  ```
- ###### message_update
  ```ts
  @param message Message
  ```
- ###### ready

- ###### typing_start
  ```ts
  @param user User
  ```

#### Client

```ts
const client = new Inflix.Client();

// Or with debug mode

const client = new Inflix.Client(true);
```

##### Methods

- ###### login
  ```ts
  @param token string
  ```

##### Properties

- ###### user

  ```ts
  @type ClientUser
  ```

- ###### debug
  ```ts
  @type boolean
  ```

#### Client User

##### Properties

- ###### username
  ```ts
  @type string
  ```
- ###### discriminator
  ```ts
  @type string | number
  ```
- ###### verified
  ```ts
  @type boolean
  ```
- ###### id
  ```ts
  @type string
  ```
- ###### flags
  ```ts
  @type number
  ```
- ###### email
  ```ts
  @type string
  ```
- ###### bot
  ```ts
  @type boolean
  ```
- ###### avatar
  ```ts
  @type string
  ```

## License

![License](https://img.shields.io/github/license/BumpyBill/inflix)

Copyright (c) 2021 BumpyBill

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
