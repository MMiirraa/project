import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }: {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };
    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push('.ts', '.tsx');

    // находит правило, которое обрабатывает svg, если нашел
    // исключаем обработки svg для этого правила - возьмет правило ниже 28стр.
    // @ts-ignore
    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module?.rules?.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });

    config.module?.rules?.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });

    const cssLoader = buildCssLoader(true);
    config.module?.rules?.push(cssLoader);

    return config;
};
