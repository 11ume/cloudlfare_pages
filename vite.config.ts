import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const isDev = mode === 'development'

  return defineConfig({
    clearScreen: false,
    // base: '/app/',
    build: {
      minify: true,
      sourcemap: true,
      outDir: './build',
    },
    server: {
      hmr: {
        overlay: true,
      },
    },
    define: {
      ...(isDev && { global: 'window' }),
      'window._env_': env,
      'process.env': {
        PUBLIC_URL: '/app',
        APP_RELEASE: env.APP_RELEASE,
      },
    },
    plugins: [
      react(),
    ],
  })
}
