import { Server } from "https://js.sabae.cc/Server.js";
import { jsonfs } from "https://js.sabae.cc/jsonfs.js";

const datafn = "data.json";
let data = jsonfs.read(datafn) || [];

class MyServer extends Server {
  api(path, req) {
    if (path == "/api/list") {
      return data;
    } else if (path == "/api/add") {
      data.push(req);
      jsonfs.write(datafn, data);
      return "ok";
    }
  }
}

new MyServer(8001);
