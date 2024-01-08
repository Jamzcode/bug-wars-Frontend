import { fileURLToPath } from 'node:url'
import { configDefaults, defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/*'],
      root: fileURLToPath(new URL('./', import.meta.url)),
      coverage: {
        exclude: [
          '**/*.d.js',
          '**/.{eslint,mocha,prettier}rc.{?(c|m)js,yml}',
          'src/router/**',
          'src/types/**',
          'src/main.js',
          //temp ignore
          'src/services/**',
          'src/stores/**',
          'src/views/**',
          'src/App.vue'
        ],
        provider: 'v8',
        reporter: ['text', 'json-summary', 'json'],
        reportOnFailure: true,
        thresholds: {
          lines: 80,
          functions: 80,
          branches: 80,
          statements: 80
        }
      }
    }
  })
)
