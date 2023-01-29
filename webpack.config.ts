import path from 'path'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'

const config: webpack.Configuration = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  output: {
    // создает выходной файл с хэшем
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'build'),
    clean: true
  },
  module: {
    // обработка файлов типа png и тд
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    // чтоб не указывать расширения файла при import
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    // для отображения загрузки лоудера - сборки
    new webpack.ProgressPlugin(),
    // использует наш html как образец для build
    new HTMLWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html')
    }),
  ]
}

export default config;
