const mix = require("laravel-mix");
const path = require("path");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js("resources/js/app.js", "public/js")
    .vue()
    .sass("resources/sass/app.scss", "public/css")
    .webpackConfig({
        output: {
            chunkFilename: mix.inProduction()
                ? "js/[name].[chunkhash].js"
                : "js/[name].js",
        },
        devtool: mix.inProduction() ? "" : "inline-source-map",
        resolve: {
            extensions: ["*", ".js", ".vue"],
            alias: {
                styles: path.resolve(__dirname, "resources/sass"),
                "@": path.resolve(__dirname, "resources/js"),
            },
        },
    });
