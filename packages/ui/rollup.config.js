import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import external from 'rollup-plugin-peer-deps-external'
import typescript from '@rollup/plugin-typescript'
import files from '@rollup/plugin-image'
import { terser } from 'rollup-plugin-terser'
import progress from 'rollup-plugin-progress'

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
      babel(),
      external(),
      resolve(),
      typescript(),
      files(),
      terser(),
      progress(),
    ],
  },
]
