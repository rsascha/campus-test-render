https://render.com/docs/deploy-node-express-app

https://github.com/render-examples/express-hello-world

> Use this template

This will create a new repository in your GitHub account with the code from this example. Make sure you are using a _public_ repository.

Got to https://render.com/ and sign in using your Github account.

Click link in verification email.

Create a new Web Service on Render and connect to your new repository at Github. You need to install Render for your repository.

Enable PR Previews.

Clone your project to your local machine.

Create a new branch and the following changes to your `app.js`.

```js
const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ a: 1 }));
});

const server = app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
```

Publish your branch and create a PR at Github.

You will receive an eMail with the new URL for your PR Preview.

---

Switch to ECMAScript modules (ESM) in Node.js

Add `"type": "module",` to your `package.json`.

Change `const express = require("express");` to `import express from "express";` in your `app.js`.

---

Install a configure PGAdmin:

```sh
brew install pgadmin4
```

Hostname is <Hostname>.frankfurt-postgres.render.com

---
