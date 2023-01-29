import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";

export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {
  
  return [
    // для отображения загрузки лоудера - сборки
    new webpack.ProgressPlugin(),
    // использует наш html как образец для build
    new HtmlWebpackPlugin({
        template: paths.html
    }),
  ]
}
