# server.js

JavaScript (Deno) でつくる超かんたんwebアプリ入門  

```js
import { Server } from "https://js.sabae.cc/Server.js";
const list = [];
class MyServer extends Server {
  api(path, req) {
    console.log(req);
    return { name: "jigintern", path: path };
  }
}
new MyServer(8001);
```

## ハンズオンスライド
https://github.com/taisukef/server.js/raw/main/JavaScript(Deno)%E3%81%A7web%E3%82%A2%E3%83%97%E3%83%AA%E5%85%A5%E9%96%80.pdf  
pdf, keynote, powerpoint  
