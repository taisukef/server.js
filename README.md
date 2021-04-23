# server.js
JavaScript (Deno) でつくる超かんたんwebアプリ入門  
```
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
