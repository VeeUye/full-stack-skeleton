import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@styles': path.resolve(__dirname, './src/styles'),
    },
  },
  base: './',
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: './src/test/setup/index.ts',
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      exclude: [
        'node_modules/',
        'src/test/setup/**',
        '**/*.d.ts',
        '**/*.config.*',
        '**/types/*',
      ],
    },
  },
})
