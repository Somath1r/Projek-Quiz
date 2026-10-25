
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react(), tailwindcss()],

  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },

  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },

  build: {
    outDir: '../frontend/assets/ui-background',
    emptyOutDir: false,
    lib: {
      entry: path.resolve(__dirname, 'src/background-entry.tsx'),
      formats: ['es'],
      fileName: () => 'background.js',
      cssFileName: 'background',
    },
  },
});
