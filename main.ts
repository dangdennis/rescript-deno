// @deno-types="npm:@types/express"
import express from "npm:express@4.18.2";
import data from "./data.json" assert { type: "json" };

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the Dinosaur API!");
});

app.get("/api", (req, res) => {
  res.send(data);
});

app.get("/api/:dinosaur", (req, res) => {
  if (req?.params?.dinosaur) {
    const filtered = data.filter((item) => {
      return item["name"].toLowerCase() === req.params.dinosaur.toLowerCase();
    });
    if (filtered.length === 0) {
      return res.send("No dinosaurs found.");
    } else {
      return res.send(filtered[0]);
    }
  }
});

app.listen(8000);
// import { Application } from "https://deno.land/x/oak@v11.1.0/mod.ts";

// const app = new Application();

// app.use((ctx) => {
//   ctx.response.body = "Hello from Deno and AWS Lightsail!";
// });

// await app.listen({ port: 8000 });
