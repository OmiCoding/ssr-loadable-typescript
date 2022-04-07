const path = require('path');
const LoadablePlugin = require('@loadable/webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

const BUILD_PATH = path.join(__dirname, 'build');

module.exports = function (mode, entry, target, filename) {
    return {
        mode,
        entry,
        target,
        name: target,
        output: {
            filename,
            path: BUILD_PATH,
            publicPath: '/static/',
        },
        plugins: [
            new LoadablePlugin({ filename: `${target}-loadable-stats.json` }),
            new MiniCSSExtractPlugin(),
        ],
        module: {
            rules: [
                {
                    test: /\.(js|ts)x?$/,
                    exclude: /(node_modules)/,
                    use: [
                        'babel-loader',
                        {
                            loader: 'ts-loader',
                            options: {
                                onlyCompileBundledFiles: true,
                            },
                        },
                    ],
                },
            ],
        },
        devtools: 'nosources-source-map',
    };
};
