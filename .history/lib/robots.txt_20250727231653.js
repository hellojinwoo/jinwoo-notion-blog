import fs from 'fs'

export function generateRobotsTxt(props) {
  const { siteInfo } = props
  const LINK = siteInfo?.link
  const content = `
    # *
    User-agent: *
    Allow: /
  
    # Host
    Host: ${LINK}
  
    # Sitemaps
    Sitemap: ${LINK}/sitemap.xml
  
    `
  try {
    fs.mkdirSync('./public', { recursive: true })
    fs.writeFileSync('./public/robots.txt', content)
  } catch (error) {
    // Vercel 실행 환경에서는 읽기 전용이므로, 여기서 오류가 발생합니다.
    // 하지만 Vercel 빌드 단계나 VPS 등 다른 플랫폼에서는 이 코드가 정상적으로 실행됩니다.
  }
}
