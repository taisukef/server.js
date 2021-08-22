import { Server } from "https://js.sabae.cc/Server.js";
import { JSONDB } from "https://js.sabae.cc/JSONDB.js";

const bbs = new JSONDB("bbs.json");
const user = new JSONDB("user.json");

class MyServer extends Server {
  api(path, req) {
    if (path == "/api/list") {
      return bbs.data;
    } else if (path == "/api/add") {
      const u = user.data.find(d => d.name == req.name && d.session == req.session);
      if (!u) {
        return "err";
      }
      delete req.session;
      bbs.data.push(req);
      bbs.write();
      return "ok";
    } else if (path == "/api/regist") {
      const u = user.data.find(d => d.name == req.name);
      if (!u) {
        req.session = Math.random();
        user.data.push(req);
        user.write();
        return req.session;
      }
      if (u.password != req.password) {
        return null; // wrong password
      }
      return u.session;
    }
  }
}

new MyServer(8001);
