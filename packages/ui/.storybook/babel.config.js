const { compilerOptions } = require('../tsconfig.paths.json')
const { paths } = compilerOptions

const pathsMap = Object.entries(paths)

const formattedPaths = pathsMap.map(([alias, [path]]) => {
  const formattedAlias = alias.replace('/*', '')
  const formattedPath = path.replace('/*', '')

  return [formattedAlias, `./src/${formattedPath}`]
})

const alias = Object.fromEntries(formattedPaths)

module.exports = {
  presets: [
    '@babel/preset-react',
    '@babel/preset-env',
    '@babel/preset-typescript',
    'minify',
  ],
  plugins: [
    'inline-react-svg',
    [
      'module-resolver',
      {
        alias,
      },
    ],
  ],
}
