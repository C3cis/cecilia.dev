import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: ['@nuxt/icon'],
  devtools: { enabled: true },
  css: ['~/assets/main.css'],
  compatibilityDate: '2025-07-15',
  nitro: {
    preset: 'cloudflare_module',
    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
      wrangler: {
        name: 'russano-dev',
        workers_dev: false,
        route: 'russano.dev/*',
        r2_buckets: [{ binding: 'R2', bucket_name: 'russano-dev' }],
        d1_databases: [{ binding: 'DB', database_name: 'russano-dev' }],
        observability: { logs: { enabled: true, head_sampling_rate: 1, invocation_logs: true } },
      },
    },
    imports: {
      imports: [{ name: 'default', as: 'mime', from: 'mime' }],
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
