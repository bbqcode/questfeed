import React from "react";

import HtmlDocument from "./HtmlDocument";

let webpackStats;

function renderApp(req, res) {
    if (process.env.NODE_ENV === "development") {
        webpackStats = require("./webpack-stats.json");

        // Do not cache webpack stats: the script file would change since
        // hot module replacement is enabled in the development env
        delete require.cache[require.resolve("./webpack-stats.json")];
    }

    // Render the Application to string
    const markup = React.renderToString(
        <div>Aloo</div>
    );

    // The application component is rendered to static markup
    // and sent as response.
    const html = React.renderToStaticMarkup(
        <HtmlDocument
            markup={markup}
            script={webpackStats.script}
            css={webpackStats.css}
        />
    );
    const doctype = "<!DOCTYPE html>";
    res.send(doctype + html);
}

export default renderApp;
