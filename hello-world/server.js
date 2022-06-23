"use strict";

import express from "express";

// Constants
const PORT = 8080;
// const HOST = "0.0.0.0";

// App
const app = express();
app.get("/", (req, res) => {
  res.send("Hello World");
});

// app.listen(PORT, HOST);
app.listen(PORT, () => console.log(`This app is listening on port ${PORT}`));
// console.log(`Running on http://${HOST}:${PORT}`);

// got rid of the host because when deploying to ECS, AWS will provide it's own host, doesn't make sense to have express be listening on 0.0.0.0 - https://www.freecodecamp.org/news/how-to-deploy-a-node-js-application-to-amazon-web-services-using-docker-81c2a2d7225b/
