import { Server } from "https://js.sabae.cc/Server.js";
import { JSONDB } from "https://js.sabae.cc/JSONDB.js";

const bbs = new JSONDB("bbs.json");

class MyServer extends Server {
  api(path, req) {
    if (path == "/api/list") {
      return bbs.data;
    } else if (path == "/api/add") {
      bbs.data.push(req);
      bbs.write();
      return "ok";
    }
  }
}

new MyServer(8001);
