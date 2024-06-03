import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['src/**/*.test.ts'],
    browser: {
      enabled: true,
      name: 'chromium',
      headless: true,
      provider: 'playwright'
    },
    setupFiles: ['./src/setup.ts'],
  },
})