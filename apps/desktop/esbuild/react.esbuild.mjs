import esbuild from 'esbuild'
import htmlPlugin from '@chialab/esbuild-plugin-html'

await esbuild.build({
  entryPoints: ['src/index.tsx'],

  bundle: true,
  format: 'cjs',
  platform: 'node',
  treeShaking: true,
  outdir: 'dist',
  minifyWhitespace: true,

  plugins: [
    htmlPlugin({
      // scriptsTarget: 'es6',
      // modulesTarget: 'es2020',
    }),
  ],
})
