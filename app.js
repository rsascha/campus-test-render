import express from "express";
import pg from "pg";

const pgHostname = process.env["PG_HOSTNAME"];
const pgPort = process.env["PG_PORT"];
const pgDatabase = process.env["PG_DATABASE"];
const pgUser = process.env["PG_USERNAME"];
const pgPassword = process.env["PG_PASSWORD"];
const pgSsl = process.env["PG_SSL"] === "true";

const { Client } = pg;
const client = new Client({
  host: pgHostname,
  port: pgPort,
  database: pgDatabase,
  user: pgUser,
  password: pgPassword,
  ssl: true,
});

const app = express();
const port = process.env.PORT || 3001;
app.get("/", async (req, res) => {
  await client.connect();
  const result = await client.query("SELECT * FROM test");
  console.debug(result.rows);

  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(result.rows));
});

const server = app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
