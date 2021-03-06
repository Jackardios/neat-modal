import path from 'path'
import svelte from 'rollup-plugin-svelte'
import resolve from '@rollup/plugin-node-resolve'
import sveltePreprocess from 'svelte-preprocess'
import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import execute from 'rollup-plugin-execute'
import postcss from 'rollup-plugin-postcss'

import pkg from './package.json'
const isProduction = !process.env.ROLLUP_WATCH

const name = pkg.name
  .replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
  .replace(/^\w/, m => m.toUpperCase())
  .replace(/-\w/g, m => m[1].toUpperCase())

const onwarn = (warning, rollupWarn) => {
  const ignoredWarnings = [
    {
      ignoredCode: 'CIRCULAR_DEPENDENCY',
      ignoredPath: 'src/'
    }
  ]

  // only show warning when code and path don't match
  // anything in above list of ignored warnings
  if (
    !ignoredWarnings.some(
      ({ ignoredCode, ignoredPath }) =>
        warning.code === ignoredCode &&
        warning.importer.includes(path.normalize(ignoredPath))
    )
  ) {
    rollupWarn(warning)
  }
}

export default [
  {
    input: 'src/index.ts',
    onwarn,
    output: [
      {
        file: pkg.module,
        format: 'es',
        sourcemap: true
      },
      {
        file: pkg.main,
        format: 'umd',
        name,
        sourcemap: true,
        plugins: [
          // we only want to run this once, so we'll just make it part of this output's plugins
          execute(['tsc --outDir ./dist --declaration', 'node scripts/preprocess.js'])
        ]
      }
    ],
    plugins: [
      svelte({
        preprocess: sveltePreprocess()
      }),
      resolve({
        browser: true,
        dedupe: ['svelte']
      }),
      commonjs(),
      typescript()
    ]
  },
  {
    input: 'src/styles/common/index.css',
    output: {
      file: 'dist/styles/neat-modal.css',
      format: 'es'
    },
    plugins: [
      postcss({
        extract: true,
        minimize: isProduction
      })
    ]
  },
  {
    input: 'src/styles/themes/default/index.css',
    output: {
      file: 'dist/styles/neat-modal-theme-default.css',
      format: 'es'
    },
    plugins: [
      postcss({
        extract: true,
        minimize: isProduction
      })
    ]
  }
]
