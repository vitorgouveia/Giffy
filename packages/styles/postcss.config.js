// module.exports = {
//   map: {
//     sourcesContent: true,
//     annotation: true,
//   },
//   syntax: 'postcss-scss',
//   plugins: [
//     require('postcss-reporter'),
//     require('autoprefixer'),
//     require('cssnano'),
//     require('postcss-at-else'),
//     require('oldie'),
//     require("postcss-preset-env")
//   ],
// }

module.exports = {
  plugins: [
    require('postcss-reporter'),
    require('autoprefixer'),
    require('cssnano'),
    require('postcss-at-else'),
    require('oldie'),
    require("postcss-preset-env"),
    require("postcss-color-hsla-fallback")
  ],
}
