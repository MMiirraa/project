import path from "path"
import webpack from "webpack"
import { buildCssLoader } from "../build/louders/buildCssLoader"
import { BuildPaths } from "../build/types/config"

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    // указать где лежит src - на 2 папки выше
    src: path.resolve(__dirname, '..', '..', 'src')
  }
  config.resolve?.modules?.push(paths.src)
  config.resolve?.extensions?.push('.ts', '.tsx')
  config.module?.rules?.push(buildCssLoader(true))

  return config
}
