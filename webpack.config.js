const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { Generator } = require("webpack");

module.exports = {
    // ❌ الأخطاء فقط
    stats: "errors-only",

    mode: "development", // production عند النشر
    entry: "/src/assets/js/main.js",

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/bundle.js",
        clean: true, // ينظف مجلد dist
    },

    devServer: {
        static: "./dist",
        open: true,
        port: 8000,
        hot: true,
        client: {
            logging: "error",
        },
    },

    module: {
        rules: [
            // HTML
            {
            test: /\.html$/i,
            loader: "html-loader",
            },

            // CSS
            {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
            },

            // SASS / SCSS
            {
            test: /\.s[ac]ss$/i,
            use: ["style-loader", "css-loader", "sass-loader"],
            },

            // Images
            {
            test: /\.(png|jpg|jpeg|gif|svg)$/i,
            type: "asset/resource",
                generator: {
                    filename: "src/assets/images/[name][ext]",
                },
            },

            // Fonts
            {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: "asset/resource",
                generator: {
                    filename: "src/assets/fonts/[name][ext]",
                },
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index_ar.html",
            filename: "index.html",
        }),
    ],
};
