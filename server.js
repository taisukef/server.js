import { Server } from "https://js.sabae.cc/Server.js";

const scores = [];

class MyServer extends Server {
  api(path, req, remoteAddr) {
    console.log(path, req);
    if (path == "/api/list") {
      return scores;
    } else if (path == "/api/add") {
      scores.push(req);
      scores.sort((a, b) => b.score - a.score);
      return "ok";
    } else {
      console.log(remoteAddr);
      return { message: "Hello! your IP is: ", remoteAddr, date: new Date() };
    }
  }
};
new MyServer(8001);
