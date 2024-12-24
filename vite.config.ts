import * as path from 'path';

import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import svgLoader from 'vite-svg-loader';
import svgr from 'vite-plugin-svgr';

const env = loadEnv('all', process.cwd(), '');
const basePath = env.VITE_BASE_PATH || '/';

// https://vite.dev/config/
// eslint-disable-next-line import/no-default-export
export default defineConfig({
  plugins: [react(), svgLoader(), svgr()],
  base: basePath,
  resolve: {
    alias: [
      {
        find: '@config',
        replacement: path.resolve(__dirname, 'src/config'),
      },
      {
        find: '@types',
        replacement: path.resolve(__dirname, 'src/types'),
      },
      {
        find: '@components',
        replacement: path.resolve(__dirname, 'src/components'),
      },
      {
        find: '@pages',
        replacement: path.resolve(__dirname, 'src/pages'),
      },
      {
        find: '@contexts',
        replacement: path.resolve(__dirname, 'src/contexts'),
      },
      {
        find: '@utils',
        replacement: path.resolve(__dirname, 'src/utils'),
      },
      {
        find: '@store',
        replacement: path.resolve(__dirname, 'src/store'),
      },
      {
        find: '@assets',
        replacement: path.resolve(__dirname, 'src/assets'),
      },
      {
        find: '@icons',
        replacement: path.resolve(__dirname, 'src/assets/icons'),
      },
      {
        find: '@hocs',
        replacement: path.resolve(__dirname, 'src/hocs'),
      },
      {
        find: '@hooks',
        replacement: path.resolve(__dirname, 'src/hooks'),
      },
    ],
  },
});
