const path = require("path");

module.exports = {
    mode: "development",
    devtool: 'inline-source-map',
    entry: path.join(__dirname, "src/index.ts"),
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "public")
    },
    module: {
        rules: [{
            test: /\.ts$/,
            use: "ts-loader",
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: [".js", ".ts"]
    },
    devServer: {
        contentBase: path.join(__dirname, "public"),
        open: true,
        inline: true
    }
};
