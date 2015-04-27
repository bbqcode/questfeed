import React from "react";

import app from "../app";
import HtmlDocument from "./HtmlDocument";

import { navigateAction } from "fluxible-router";

function render(req, res, next) {
    var context = app.createContext();
    context.executeAction(navigateAction, { url: req.url }, function (err) {
        let webpackStats;
        if (process.env.NODE_ENV === "development") {
            webpackStats = require("./webpack-stats.json");

            // Do not cache webpack stats: the script file would change since
            // hot module replacement is enabled in the development env
            delete require.cache[require.resolve("./webpack-stats.json")];
        }

        if (err) {
            if (err.statusCode && err.statusCode === 404) {
                next();
            } else {
                next(err);
            }
            return;
        }

        const markup = React.renderToString(context.createElement());
        const html = React.renderToStaticMarkup(
            <HtmlDocument
                markup={markup}
                script={webpackStats.script}
                css={webpackStats.css}
            />
        );
        const doctype = "<!DOCTYPE html>";
        res.send(doctype + html);
    });

}

export default render;
