import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';

export function buildPlugins({ paths, isDev, analyze }: BuildOptions): webpack.WebpackPluginInstance[] {
    const plugins = [
        // для отображения загрузки лоудера - сборки
            new webpack.ProgressPlugin(),
            // использует наш html как образец для build
            new HtmlWebpackPlugin({
                template: paths.html,
            }),
            new MiniCssExtractPlugin({
                filename: 'css/[name].[contenthash:8].css',
                chunkFilename: 'css/[name].[contenthash:8].css',
            }),
            new webpack.DefinePlugin({
                __IS_DEV__: JSON.stringify(isDev),
            }),
            new ReactRefreshWebpackPlugin(),
            
    ]

    if(isDev) {
        plugins.push(new webpack.HotModuleReplacementPlugin())
        plugins.push(
            new BundleAnalyzerPlugin({
                openAnalyzer: false,
                analyzerMode: analyze ? 'server' : 'disabled',
            })
        )
    }
    
    return plugins;
}
