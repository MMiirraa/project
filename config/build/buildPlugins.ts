import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export function buildPlugins({paths, isDev}: BuildOptions): webpack.WebpackPluginInstance[] {
  
  return [
    // для отображения загрузки лоудера - сборки
    new webpack.ProgressPlugin(),
    // использует наш html как образец для build
    new HtmlWebpackPlugin({
        template: paths.html
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev)
    })
  ]
}
