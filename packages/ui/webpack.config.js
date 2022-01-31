const { resolve } = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: './src/index.ts',
  mode: 'production',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'umd',
    library: '@giffy/ui',
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['babel-loader'],
        exclude: /(node_modules)/,
      },
      {
        test: /\.(png|jpe?g|svg)$/,
        use: ['file-loader'],
        exclude: /(node_modules)/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts'],
  },
  externals: [
    nodeExternals({
      additionalModuleDirs: [resolve(__dirname, '../../node_modules')],
    }),
    {
      react: 'react',
    },
  ],
}
