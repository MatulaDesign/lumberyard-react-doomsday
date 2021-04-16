import { uglify } from 'rollup-plugin-uglify';
import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json';

export default {
  input: 'lib/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      strict: false,
    },
  ],
  plugins: [typescript(), uglify()],
  external: ['react', 'react-dom'],
};
