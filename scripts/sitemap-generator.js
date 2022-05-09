 <url>
    <loc>http://127.0.0.1:3000</loc>
    <lastmod>date created</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
</url>

const fs = require('fs')
const globby = require('globby')
function addPage(page) {
  const path = page.replace('pages', '').replace('.js', '').replace('.mdx', '')
  const route = path === '/index' ? '' : path
  return `  <url>
    <loc>${`${process.env.WEBSITE_URL}${route}`}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>`
}