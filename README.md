# server.js

JavaScript (Deno) でつくる超かんたんwebアプリ入門  

```js
import { Server } from "https://js.sabae.cc/Server.js";

class MyServer extends Server {
  api(path, req) {
    console.log(req);
    return { name: "jigintern", path: path };
  }
}

new MyServer(8001);
```

## ハンズオンスライド

- [PDF](https://taisukef.github.io/server.js/JavaScript(Deno)%E3%81%A7web%E3%82%A2%E3%83%97%E3%83%AA%E5%85%A5%E9%96%80.pdf)
- [Keynote](https://taisukef.github.io/server.js/JavaScript(Deno)%E3%81%A7web%E3%82%A2%E3%83%97%E3%83%AA%E5%85%A5%E9%96%80.key)
- [PowerPoint](https://taisukef.github.io/server.js/JavaScript(Deno)%E3%81%A7web%E3%82%A2%E3%83%97%E3%83%AA%E5%85%A5%E9%96%80.pptx)

※オープンデータなので、自由に改変、二次配布可能です。いろいろご活用ください。
