import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'

const production = process.env.ROLLUP_WATCH

export default {
  input: 'src/index.js',
  output: [{
      file: 'dist/bundle.cjs.js',
      format: 'cjs'
    },
    {
      file: 'dist/bundle.esm.js',
      format: 'esm'
    },
    {
      file: 'dist/bundle.umd.js',
      format: 'umd',
      name: 'bundle',
      exports: 'auto'
    }
  ],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_module/**'
    }),
    production && terser()
  ]
}
