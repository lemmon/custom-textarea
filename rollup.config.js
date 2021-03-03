import postcss from 'rollup-plugin-postcss'
import postcssPresetEnv from 'postcss-preset-env'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'

const plugins = [
  postcss({
    inject: false,
    plugins: [
      postcssPresetEnv({
        stage: 0,
      }),
      cssnano({
        autoprefixer: false,
      }),
    ],
  }),
  babel({ babelHelpers: 'bundled' }),
  terser(),
]

export default [
  {
    input: ['src/index.js'],
    output: {
      file: 'dist/index.js',
      format: 'esm',
    },
    plugins: plugins,
  },
  {
    input: ['src/textarea.js'],
    output: {
      file: 'dist/textarea.js',
      format: 'esm',
    },
    plugins: plugins,
  },
  {
    input: ['src/index.js'],
    output: {
      file: 'dist/es5.js',
      format: 'umd',
    },
    plugins: plugins,
  },
]
