// This is the webpack config to use during development.
// It enables the hot module replacement, the source maps and inline CSS styles.

import path from "path";
import webpack from "webpack";
import writeStats from "./utils/write-stats";
import notifyStats from "./utils/notify-stats";

const assetsPath = path.resolve(__dirname, "../public/assets");

const WEBPACK_HOST = "localhost";
const WEBPACK_PORT = parseInt(process.env.PORT) + 1 || 3001;

export default {
    devtool: "eval",
    entry: {
        "main": [
            `webpack-dev-server/client?http://${WEBPACK_HOST}:${WEBPACK_PORT}`,
            "webpack/hot/only-dev-server",
            './app/scripts/main'
        ]
    },
    output: {
        path: assetsPath,
        filename: "[name]-[chunkhash].js",
        chunkFilename: "[name]-[chunkhash].js",
        publicPath: `http://${WEBPACK_HOST}:${WEBPACK_PORT}/assets/`
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loaders: ["react-hot", "babel"] },
            {
                test: /\.scss$/,
                loader: "style!raw!sass?outputStyle=expanded&" +
                "includePaths[]=" + (path.resolve(__dirname, "../node_modules/"))
            }
        ]
    },
    progress: true,
    plugins: [

        // hot reload
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),

        new webpack.DefinePlugin({
            "process.env": {
                BROWSER: JSON.stringify(true),
                NODE_ENV: JSON.stringify("development")
            }
        }),

        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),

        // stats
        function() { this.plugin("done", notifyStats); },
        function() { this.plugin("done", writeStats); }

    ]
};