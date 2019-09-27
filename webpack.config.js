const path = require("path");

module.exports = {
    mode: "development",
    devtool: 'inline-source-map',
    entry: path.join(__dirname, "src/index.tsx"),
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "public")
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: "ts-loader",
            exclude: /node_modules/
        }, {
            test: /\.scss$/,
            use: [
                { loader: 'style-loader' },
                { loader: 'css-loader' },
                { loader: 'sass-loader' },
            ]
        }]
    },
    resolve: {
        extensions: [".js", ".ts", ".tsx"]
    },
    devServer: {
        contentBase: path.join(__dirname, "public"),
        open: true,
        inline: true
    }
};
