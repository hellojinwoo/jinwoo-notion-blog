import BLOG from '@/blog.config'
import fs from 'fs'
import { siteConfig } from './config'
/**
 * 사이트맵 생성
 * @param {*} param0
 */
export function generateSitemapXml({ allPages, NOTION_CONFIG }) {
  let link = siteConfig('LINK', BLOG.LINK, NOTION_CONFIG)
  // 링크가 슬래시로 끝나지 않도록 확인하세요
  if (link && link.endsWith('/')) {
    link = link.slice(0, -1)
  }
  const urls = [
    {
      loc: `${link}`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'daily',
      priority: 1.0
    },
    {
      loc: `${link}/archive`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'daily',
      priority: 1.0
    },
    {
      loc: `${link}/category`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'daily'
    },
    {
      loc: `${link}/tag`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'daily'
    }
  ]
  // 페이지를 반복적으로 생성
  allPages?.forEach(post => {
    const slugWithoutLeadingSlash = post?.slug?.startsWith('/')
      ? post?.slug?.slice(1)
      : post.slug
    
    // publishDay가 유효한 날짜인지 확인
    let lastModDate
    try {
      const date = new Date(post?.publishDay)
      lastModDate = isNaN(date.getTime()) ? new Date().toISOString().split('T')[0] : date.toISOString().split('T')[0]
    } catch (error) {
      lastModDate = new Date().toISOString().split('T')[0]
    }
    
    urls.push({
      loc: `${link}/${slugWithoutLeadingSlash}`,
      lastmod: lastModDate,
      changefreq: 'daily'
    })
  })
  const xml = createSitemapXml(urls)
  try {
    fs.writeFileSync('sitemap.xml', xml)
    fs.writeFileSync('./public/sitemap.xml', xml)
  } catch (error) {
    console.warn('파일을 쓸 수 없습니다', error)
  }
}

/**
 * 사이트맵 생성
 * @param {*} urls
 * @returns
 */
function createSitemapXml(urls) {
  let urlsXml = ''
  urls.forEach(u => {
    urlsXml += `<url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    </url>
    `
  })

  return `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
    xmlns:xhtml="http://www.w3.org/1999/xhtml"
    xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
    xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
    ${urlsXml}
    </urlset>
    `
}
