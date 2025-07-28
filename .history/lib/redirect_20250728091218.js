import fs from 'fs'

export function generateRedirectJson({ allPages }) {
  let uuidSlugMap = {}
  allPages.forEach(page => {
    if (page.type === 'Post' && page.status === 'Published') {
      uuidSlugMap[page.id] = page.slug
    }
  })
  try {
    fs.writeFileSync('./public/redirect.json', JSON.stringify(uuidSlugMap))
  } catch (error) {
    console.warn('파일을 쓸 수 없습니다', error)
  }
}
