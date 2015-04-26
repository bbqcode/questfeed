import path from "path";
import express from "express";

import render from "./server/render";

// Initialize express server

const server = express();

// On development, serve the static files from the webpack dev server.

if (server.get("env") === "development") {
    require("../webpack/server");
}

// Render the app server-side and send it as response

server.use(render);

// Finally, start the express server

server.set("port", process.env.PORT || 3000);

server.listen(server.get("port"), () => {
    console.log(`Express ${server.get("env")} server listening on ${server.get("port")}`);
});