import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'

export default [
  {
    input: ['src/index.js'],
    output: {
      file: 'dist/index.js',
      format: 'esm',
    },
    plugins: [babel({ babelHelpers: 'bundled' }), terser()],
  },
  {
    input: ['src/textarea.js'],
    output: {
      file: 'dist/textarea.js',
      format: 'esm',
    },
    plugins: [babel({ babelHelpers: 'bundled' }), terser()],
  },
  {
    input: ['src/index.js'],
    output: {
      file: 'dist/es5.js',
      format: 'umd',
    },
    plugins: [babel({ babelHelpers: 'bundled' }), terser()],
  },
]
