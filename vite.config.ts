import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'

import tsconfigPaths from 'vite-tsconfig-paths'


export default defineConfig({
  base: '',
  plugins: [solidPlugin(), tsconfigPaths()],
  publicDir: 'src/public',
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
