import vitepress from 'vitepress/package.json'

const MODE = process.env.NODE_ENV === 'production' ? 'Production' : 'Development'

const BUILD_INFO = {
  'Environment': MODE,
  'vitepress Version': vitepress.version as string,
  'Build Date': new Date().toISOString(), // new Date().toLocaleString()
}

export default BUILD_INFO
