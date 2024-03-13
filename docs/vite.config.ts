import { defineConfig } from 'vite'
import {pwa} from './scripts/pwa'

export default defineConfig({
  plugins:[pwa()]
})

