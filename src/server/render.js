import React from "react";
import serialize from "serialize-javascript";
import { navigateAction } from "fluxible-router";

import app from "../app";
import HtmlDocument from "./HtmlDocument";

let webpackStats;

function renderApp(req, res, context, next) {

    if (process.env.NODE_ENV === "development") {
        webpackStats = require("./webpack-stats.json");

        // Do not cache webpack stats: the script file would change since
        // hot module replacement is enabled in the development env
        delete require.cache[require.resolve("./webpack-stats.json")];
    }

    // dehydrate the app and expose its state
    const state = "window.App=" + serialize(app.dehydrate(context)) + ";";

    const Application = app.getComponent();

    try {
        // Render the Application to string
        const markup = React.renderToString(
            <Application context={ context.getComponentContext() } />
        );

        // The application component is rendered to static markup
        // and sent as response.
        const html = React.renderToStaticMarkup(
            <HtmlDocument
                context={ context.getComponentContext() }
                lang={req.locale}
                state={state}
                markup={markup}
                script={webpackStats.script}
                css={webpackStats.css}
            />
        );
        const doctype = "<!DOCTYPE html>";
        res.send(doctype + html);
    }
    catch (e) {
        next(e);
    }
}

function render(req, res, next) {

    // Create a fluxible context (_csrf is needed by the fetchr plugin)
    const context = app.createContext({
        req: req,
        xhrContext: {
            _csrf: req.csrfToken()
        }
    });

    context.executeAction(navigateAction, { url: req.url }, function (err) {
        if (err) {
            console.error("BOOM!", err);
        }
        renderApp(req, res, context, next);
    });
}

export default render;
