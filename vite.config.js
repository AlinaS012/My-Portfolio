
import { defineConfig } from 'vite';
import {viteSingleFile} from 'vite-plugin-singlefile';

export default defineConfig({
  plugins: [viteSingleFile()],
  // build: {
  //   assetsInlineLimit: 100000000, 
  //   rollupOptions: {
  //     output: {
  //       inlineDynamicImports: true, 
  //     },
  //   },
  // },
  base: '/'
});

