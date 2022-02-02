import { babel } from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import external from 'rollup-plugin-peer-deps-external'
import typescript from '@rollup/plugin-typescript'
import files from '@rollup/plugin-image'
import { terser } from 'rollup-plugin-terser'
import progress from 'rollup-plugin-progress'
import { typescriptPaths } from 'rollup-plugin-typescript-paths'

export default [
  {
    input: './src/index.ts',
    output: [
      {
        file: './dist/index.js',
        format: 'cjs',
      },
    ],
    plugins: [
      babel({
        filename: '.babelrc',
      }),
      external(),
      resolve(),
      typescript(),
      files(),
      terser(),
      progress(),
      typescriptPaths({
        tsConfigPath: 'tsconfig.paths.json',
      }),
    ],
  },
]
