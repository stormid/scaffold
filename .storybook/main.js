const path = require('path');

module.exports = {
  "stories": [
    "./docs/**/*.stories.mdx",
    "./docs/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    {
        name: '@storybook/addon-docs',
        options: {
            configureJSX: true
        },
    },
    '@storybook/addon-storysource',
    '@storybook/addon-a11y',
    {
        name: '@storybook/addon-essentials',
        options: {
            backgrounds: true,
            controls: true,
            actions: false,
            viewport: true
        }
    },
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
        test: /\.scss$/,
        use: [
            'style-loader',
            'css-loader',
            'resolve-url-loader',
             {
                loader: 'sass-loader',
                options: {
                    sourceMap: true,
                    prependData: `@import "~src/css/abstracts/constants";
                                  @import "~src/css/abstracts/functions";
                                  @import "~src/css/abstracts/mixins";`
                },
            },
        ],
        include: path.resolve(__dirname, '../'),
    });
    config.resolve.alias = Object.assign({}, config.resolve.alias || {}, {
        'src': path.join(process.cwd(), 'src'),
        react: 'preact/compat',
        'react-dom': 'preact/compat',
    });
    return config;
}
}