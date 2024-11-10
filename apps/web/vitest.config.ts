import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./src/test/setup/index.ts'],
    include: ['src/**/*.test.{ts,tsx}'],
    environmentOptions: {
      happyDOM: {
        settings: {
          disableJavaScriptEvaluation: false,
          disableIframePageLoading: true,
          disableComputedStyleRendering: true,
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
