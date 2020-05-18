import { listenAndServe } from "https://deno.land/std/http/server.ts";
import { acceptWebSocket, acceptable } from "https://deno.land/std/ws/mod.ts";

const options = {
  hostname: "127.0.0.1",
  port: 3000,
};

listenAndServe(options, async (req) => {
  if (req.method === "GET" && req.url === "/") {
    req.respond({
      status: 200,
      headers: new Headers({
        "content-type": "text/html",
      }),
      body: await Deno.open("./public/index.html"),
    });
  }
});

console.log("Server running on localhost:3000");
