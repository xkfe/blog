import { resolveConfig } from 'vite'
import type { VitePluginPWAAPI } from 'vite-plugin-pwa'
import { pwa } from './pwa.mts'

export async function buildEnd() {
  const config = await resolveConfig({ plugins: [pwa()] }, 'build', 'production')
  // when `vite-plugin-pwa` is presented, use it to regenerate SW after rendering
  const pwaPlugin: VitePluginPWAAPI = config.plugins.find(i => i.name === 'vite-plugin-pwa')?.api
  if (pwaPlugin && pwaPlugin.generateSW && !pwaPlugin.disabled)
  await pwaPlugin.generateSW()
}