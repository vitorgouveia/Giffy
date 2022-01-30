module.exports = {
  plugins: [
    require('postcss-reporter'),
    require('autoprefixer'),
    require('cssnano'),
    require('postcss-at-else'),
    // require('oldie'),
    require('postcss-preset-env'),
    require('postcss-color-hsla-fallback'),
    require('postcss-prefixer')({
      prefix: 'giffy_css-',
    }),
  ],
}
