module.exports = {
  syntax: 'postcss-scss',
  plugins: [
    require('postcss-reporter'),
    require('autoprefixer'),
    require('cssnano'),
    require('postcss-at-else'),
    require('postcss-preset-env'),
    require('postcss-color-hsla-fallback'),
  ],
}
