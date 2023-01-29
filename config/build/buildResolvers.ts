import webpack from 'webpack'

export function buildResolvers(): webpack.ResolveOptions {
  return {
    // чтоб не указывать расширения файла при import
    extensions: ['.tsx', '.ts', '.js'],
  }
}
