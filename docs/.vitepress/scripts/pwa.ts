import type { VitePWAOptions } from 'vite-plugin-pwa'

export const pwa: Partial<VitePWAOptions> = {
  outDir: '.vitepress/dist',
  registerType: 'prompt',
  includeAssets: ['favicon.svg'],
  includeManifestIcons: false,
  selfDestroying: true,
  scope: '/',
  base: '/',
  manifest: {
    name: 'xkfe·blog',
    short_name: 'xkfe·blog',
    description: 'xkfe·blog 记录随笔与学习笔记;前端学习/资源分享;',
    theme_color: '#ffffff',
    icons: [
      {
        src: 'images/pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'images/pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: 'images/pwa.svg',
        sizes: '512x512',
        type: 'image/svg',
        purpose: 'any maskable',
      },
    ],
  },
  workbox: {
    globPatterns: ['**/*.{css,js,html,svg,png,ico,txt,woff2}'],
    runtimeCaching: [
      {
        urlPattern: /^https:\.qn\.kaife\.cn\/.*/i,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'qn-images-cache',
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 7, // <== 7 days
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
}
