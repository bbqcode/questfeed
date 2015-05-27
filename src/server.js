import path from "path";
import express from "express";
import csrf from "csurf";
import bodyParser from "body-parser";
import methodOverride from "method-override";
import session from "express-session";
import cookieParser from "cookie-parser";
import favicon from "serve-favicon";

import render from "./server/render";
import { passport, auth, authCallback } from "./server/authMiddleware";

import app from "./app";

// Initialize express server
const server = express();

server.use(cookieParser());
server.use(bodyParser.json());
server.use(methodOverride());
server.use(session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true
}));
server.use(csrf({cookie: true}));
server.use(favicon(path.resolve(__dirname, "../assets/favicon.ico")));

// Auth middleware
server.use(passport.initialize());
server.use(passport.session());

// Auth routes
server.get("/auth/google", auth);
server.get("/auth/google/return", authCallback);

// On development, serve the static files from the webpack dev server.
if (server.get("env") === "development") {
    require("../webpack/server");
}

// Get access to the fetchr plugin instance
var fetchrPlugin = app.getPlugin("FetchrPlugin");

// Register our quests REST service
fetchrPlugin.registerService(require("./services/questsService"));

// Set up the fetchr middleware
server.use(fetchrPlugin.getXhrPath(), fetchrPlugin.getMiddleware());

// Render the app server-side and send it as response
server.use(render);

// Finally, start the express server
server.set("port", process.env.PORT || 3000);

server.listen(server.get("port"), () => {
    console.log(`Express ${server.get("env")} server listening on ${server.get("port")}`);
});
