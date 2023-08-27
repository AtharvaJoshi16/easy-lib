import resolve from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import scss from 'rollup-plugin-scss';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';
import copy from 'rollup-plugin-copy';
export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs'
    },
    {
      file: 'dist/index.es.js',
      format: 'es',
      exports: 'named'
    }
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/env', '@babel/preset-react'],
      babelHelpers: 'bundled'
    }),
    scss({
      output: 'main.css',
      processor: () => postcss([autoprefixer()])
    }),
    external(),
    resolve(),
    terser(),
    copy({
      targets: [
        { src: 'stories/globals/fonts', dest: 'build/esm' },
        { src: 'stories/globals/fonts', dest: 'build/ejs' },
      ]
    })
  ],
  external: [/\.scss$/]
};
