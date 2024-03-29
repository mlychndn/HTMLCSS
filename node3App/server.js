const express = require("express");
const fs = require("fs");

const {
  matchResultHandler,
  statsHandler,
  economyHandler,
} = require("./Handlers/handler");

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.get("/prob1", matchResultHandler);
app.get("/prob2", statsHandler);
app.get("/prob3", economyHandler);

const port = 9000;

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
