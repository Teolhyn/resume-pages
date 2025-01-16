import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  base: '/resume-pages/',
  plugins: [react(),
  viteCompression({
    algorithm: 'gzip',
  }),
  visualizer({ open: true }),
  ],
  optimizeDeps: {
    include: ['loadash', 'axios'],
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    port: 3000,
  },
})
