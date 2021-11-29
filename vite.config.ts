import { defineConfig } from 'vite';
import wasmPack from 'vite-plugin-wasm-pack';

export default defineConfig({
  build: {
    minify: false,
    rollupOptions: {
      external: /^lit/
    }
  },
  plugins: [wasmPack(['./my-crate'])]
});