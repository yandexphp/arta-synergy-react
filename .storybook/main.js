module.exports = {
  stories: ['../stories/**/*.stories.@(ts|tsx|js|jsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-postcss',
    '@storybook/addon-essentials',
    {
      name: 'storybook-addon-sass-postcss',
      options: {
        loadSassAfterPostCSS: true,
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
        sassLoaderOptions: {
          implementation: require('sass'),
        },
      },
    },
  ],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  }
}
