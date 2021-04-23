import { Server } from "https://js.sabae.cc/Server.js";

const scores = [];

class MyServer extends Server {
  api(path, req) {
    if (path == "/api/list") {
      return scores;
    } else if (path == "/api/add") {
      scores.push(req);
      scores.sort((a, b) => b.score - a.score);
      return "ok";
    }
  }
};
new MyServer(8001);
