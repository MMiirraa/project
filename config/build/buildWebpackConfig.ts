import { BuildOptions } from "./types/config";
import webpack from "webpack";
import path from 'path'
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildPlugins } from "./buildPlugins";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const {mode, paths} = options

  return {
    mode: mode,
    entry: paths.entry,
    output: {
      // создает выходной файл с хэшем
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true
    },
    module: {
      // обработка файлов типа png и тд
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
    plugins: buildPlugins(options),
  }
}
