import { copyFileSync } from 'fs'
import { join } from 'path'

// Copy index.html to 404.html for GitHub Pages routing
const distDir = join(process.cwd(), 'dist')
copyFileSync(
  join(distDir, 'index.html'),
  join(distDir, '404.html')
)
console.log('Created 404.html for GitHub Pages routing')

