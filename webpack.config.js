const path = require('path');

const webpack = require('webpack');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const {CommonsChunkPlugin} = require('webpack').optimize;
const {NoEmitOnErrorsPlugin, LoaderOptionsPlugin} = require('webpack');

const autoprefixer = require('autoprefixer');
const {BaseHrefWebpackPlugin} = require('base-href-webpack-plugin');
const ProgressPlugin = require('webpack/lib/ProgressPlugin');
//const {CleanWebpackPlugin} = require('clean-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');


//import { environment } from './src/environments/environment';
//const environment = require('environment');
/*

 //const { BaseHrefWebpackPlugin, GlobCopyWebpackPlugin } = require('@angular/cli/plugins/webpack');

 */


//const { AotPlugin } = require('@ngtools/webpack');

/*

 // Import package
 const { BaseHrefWebpackPlugin } = require('base-href-webpack-plugin'); // Or `import 'base-href-webpack-plugin';` if using typescript

 // Add to plugins
 plugins: [
 new BaseHrefWebpackPlugin({ baseHref: '/' })
 ]
 */


const nodeModules = path.join(process.cwd(), 'node_modules');
const entryPoints = ["inline", "polyfills", "sw-register", "styles", "vendor", "main"];


module.exports = {
    "devtool": "source-map",
    "resolve": {
        "extensions": [
            ".ts",
            ".js"
        ],
        "modules": [
            "./node_modules"
        ]
    },
    "resolveLoader": {
        "modules": [
            "./node_modules"
        ]
    },
    "entry": {
        "main": [
            "./src\\main.ts"
        ],
        "polyfills": [
            "./src\\polyfills.ts"
        ],
        "vendor": [
            "./src\\vendor.ts"
        ],
        "styles": [
            "./src\\styles.css"
        ]
    },
    "output": {
        "path": path.join(process.cwd(), "dist"),
        "filename": "scripts/[name].bundle.js",
        "chunkFilename": "[id].chunk.js"
    },

    "module": {
        "rules": [
            {
                "enforce": "pre",
                "test": /\.js$/,
                "loader": "source-map-loader",
                "exclude": [
                    /\/node_modules\//
                ]
            },
            {
                "test": /\.json$/,
                "loader": "json-loader"
            },
            {
                "test": /\.html$/,
                "loader": "raw-loader"
            },

            // Extract css files
            {
                "exclude": [
                    path.join(process.cwd(), "src\\styles.css")
                ],
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: ['css-loader', 'postcss-loader']})
            },

            {
                "exclude": [
                    path.join(process.cwd(), "src\\styles.css")
                ],
                test: /\.less$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: "css-loader!less-loader",
                })
            },

            {
                "exclude": [
                    path.join(process.cwd(), "src\\styles.css")
                ], test: /\.scss?$/, loaders: ['style-loader', 'css-loader', 'sass-loader']
            },
            /*            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader"},
             {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?mimetype=image/svg+xml'},*/
            /*{test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?mimetype=application/font-woff"},
             {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?mimetype=application/font-woff"},
             {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?mimetype=application/octet-stream"},*/

            /* {test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery'},
             {
             "test": /\.(eot|svg)$/,
             "loader": "file-loader?name=[name].[ext]"
             },*/
            /*{
             "test": /\.(jpg|png|gif|otf|ttf|woff|woff2|cur|ani)$/,
             "loader": "url-loader?name=[name].[ext]&limit=10000"
             },*/
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader?name=assets/fonts/[name].[ext]'
            }

            /*{
             test: /\.(jpe?g|png|gif|svg)$/i,
             loaders: [
             'file?hash=sha512&digest=hex&name=[hash].[ext]',
             'image-optimize'
             ]

             }*/
            /*  {
             "exclude": [
             path.join(process.cwd(), "src\\styles.css")
             ],
             "test": /\.css$/,
             "loaders": [
             "exports-loader?module.exports.toString()",
             "css-loader?{\"sourceMap\":false,\"importLoaders\":1}",
             "postcss-loader"
             ]
             },

             {
             "exclude": [
             path.join(process.cwd(), "src\\styles.css")
             ],
             "test": /\.scss$|\.sass$/,
             "loaders": [
             "exports-loader?module.exports.toString()",
             "css-loader?{\"sourceMap\":false,\"importLoaders\":1}",
             "postcss-loader",
             "sass-loader"
             ]
             },
             {
             "exclude": [
             path.join(process.cwd(), "src\\styles.css")
             ],
             "test": /\.less$/,
             "loaders": [
             "exports-loader?module.exports.toString()",
             "css-loader?{\"sourceMap\":false,\"importLoaders\":1}",
             "postcss-loader",
             "less-loader"
             ]
             },
             {
             "exclude": [
             path.join(process.cwd(), "src\\styles.css")
             ],
             "test": /\.styl$/,
             "loaders": [
             "exports-loader?module.exports.toString()",
             "css-loader?{\"sourceMap\":false,\"importLoaders\":1}",
             "postcss-loader",
             "stylus-loader?{\"sourceMap\":false,\"paths\":[]}"
             ]
             },


             {
             "include": [
             path.join(process.cwd(), "src\\styles.css")
             ],
             "test": /\.css$/,
             "loaders": ExtractTextPlugin.extract({
             "use": [
             "css-loader?{\"sourceMap\":false,\"importLoaders\":1}",
             "postcss-loader"
             ],
             "fallback": "style-loader",
             "publicPath": ""
             })
             },
             {
             "include": [
             path.join(process.cwd(), "src\\styles.css")
             ],
             "test": /\.scss$|\.sass$/,
             "loaders": ExtractTextPlugin.extract({
             "use": [
             "css-loader?{\"sourceMap\":false,\"importLoaders\":1}",
             "postcss-loader",
             "sass-loader"
             ],
             "fallback": "style-loader",
             "publicPath": ""
             })
             },
             {
             "include": [
             path.join(process.cwd(), "src\\styles.css")
             ],
             "test": /\.less$/,
             "loaders": ExtractTextPlugin.extract({
             "use": [
             "css-loader?{\"sourceMap\":false,\"importLoaders\":1}",
             "postcss-loader",
             "less-loader"
             ],
             "fallback": "style-loader",
             "publicPath": ""
             })
             },
             {
             "include": [
             path.join(process.cwd(), "src\\styles.css")
             ],
             "test": /\.styl$/,
             "loaders": ExtractTextPlugin.extract({
             "use": [
             "css-loader?{\"sourceMap\":false,\"importLoaders\":1}",
             "postcss-loader",
             "stylus-loader?{\"sourceMap\":false,\"paths\":[]}"
             ],
             "fallback": "style-loader",
             "publicPath": ""
             })
             }*/

            /* {test: /\.tsx?$/,
             loader: 'ts-loader',
             exclude: ["/node_modules/" ,"/\.(spec|e2e)\.ts$/"]
             }*/
            /* ,
             {
             "test": /\.ts$/,
             "loader": "@ngtools/webpack",
             "exclude": [
             /\.(spec|e2e)\.ts$/
             ]
             }*/

            ,
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.ts$/,
                enforce: 'pre',
                loader: 'tslint-loader',
                options: {/* Loader options go here */}
            }
        ]
    },
    "plugins": [
        new NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            "template": "./src\\index.html",
            "filename": "./index.html",
            "hash": false,
            "inject": true,
            "compile": true,
            "favicon": false,
            "minify": false,
            "cache": true,
            "showErrors": true,
            "chunks": "all",
            "excludeChunks": [],
            "title": "HID App",
            "xhtml": true,
            "chunksSortMode": function sort(left, right) {
                let leftIndex = entryPoints.indexOf(left.names[0]);
                let rightindex = entryPoints.indexOf(right.names[0]);
                if (leftIndex > rightindex) {
                    return 1;
                }
                else if (leftIndex < rightindex) {
                    return -1;
                }
                else {
                    return 0;
                }
            }
        }),

        new BaseHrefWebpackPlugin({}),
        new CommonsChunkPlugin({
            "name": "inline",
            "minChunks": null
        }),
        new CommonsChunkPlugin({
            "name": "vendor",
            "minChunks": (module) => module.resource && module.resource.startsWith(nodeModules),
            "chunks": [
                "main"
            ]
        }),

        //catch all - anything used in more than one place
        new CommonsChunkPlugin({
            async: 'used-twice',
            minChunks(module, count) {
                return count >= 2;
            },
        }),

        new webpack.ProvidePlugin({
            $: "jquery",
            jquery: "jquery",
            "window.jQuery": "jquery",
            jQuery: "jquery"
        }),
        new CopyWebpackPlugin([
            {
                context: 'src/app',
                from: '**/*.html',
                to: 'app'
            },
            {from: 'src/assets/images', to: 'assets/images'}
            // ,            { from: 'src/app/home/*.html', to: 'home'}

        ])

        /*,
         new GlobCopyWebpackPlugin({
         "patterns": [
         "assets",
         "favicon.ico"
         ],
         "globOptions": {
         "cwd": "C:\\vijay\\webstromprojects\\hidinterview\\src",
         "dot": true,
         "ignore": "**!/.gitkeep"
         }
         })*/
        ,
        new ProgressPlugin(),
        /*    new ExtractTextPlugin({
         "filename": "[name].bundle.css",
         "disable": true
         }),*/

        new LoaderOptionsPlugin({
            "sourceMap": false,
            "options": {
                "postcss": [
                    autoprefixer()
                ],
                "sassLoader": {
                    "sourceMap": false,
                    "includePaths": []
                },
                "lessLoader": {
                    "sourceMap": false
                },
                "context": ""
            }
        }),
        new ExtractTextPlugin("[name].css"),
        new CleanWebpackPlugin(['dist', 'build'], {
            //root: './full/project/path',
            verbose: true,
            dry: false,
            exclude: ['shared.js']
        }),
        new UglifyJsPlugin(
            {
                sourceMap: true,
                beautify: true,
                compress: {
                    warnings: false
                },
                mangle: {
                    // Skip mangling these
                    except: ['$super', '$', 'exports', 'require']
                }
            })

        /*    ,
         new AotPlugin({
         "tsConfigPath": "src\\tsconfig.json",
         "mainPath": "main.ts",
         "hostReplacementPaths": {
         "environments\\environment.ts": "environments\\environment.ts"
         },
         "exclude": [
         "**!/!*.spec.ts",
         "C:\\vijay\\webstromprojects\\hidinterview\\src\\test.ts"
         ],
         "skipCodeGeneration": true
         })*/
    ],

    "node": {
        "fs": "empty",
        "global": true,
        "crypto": "empty",
        "tls": "empty",
        "net": "empty",
        "process": true,
        "module": false,
        "clearImmediate": false,
        "setImmediate": false
    }
};
