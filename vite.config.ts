/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import dns from 'dns'
dns.setDefaultResultOrder('verbatim')

// https://vitejs.dev/config https://vitest.dev/config
export default defineConfig({
  base: '/nycases-auto-2',
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: '.vitest/setup',
    include: ['**/test.{ts,tsx}'],
  }
})
