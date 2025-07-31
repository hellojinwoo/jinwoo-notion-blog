import { isIterable } from '../utils'

/**
 * 모든 글의 태그 가져오기
 * @param allPosts
 * @param sliceCount 기본 잘라낼 개수는 12개, 0이면 전체 반환
 * @param categoryOptions categories의 드롭다운 옵션
 * @returns {Promise<{}|*[]>}
 */

/**
 * 모든 글의 카테고리 가져오기
 * @param allPosts
 * @returns {Promise<{}|*[]>}
 */
export function getAllCategories({
  allPages,
  categoryOptions,
  sliceCount = 0
}) {
  const allPosts = allPages?.filter(
    page => page.type === 'Post' && page.status === 'Published'
  )
  if (!allPosts || !categoryOptions) {
    return []
  }
  // 计数
  let categories = allPosts?.map(p => p.category)
  categories = [...categories.flat()]
  const categoryObj = {}
  categories.forEach(category => {
    if (category in categoryObj) {
      categoryObj[category]++
    } else {
      categoryObj[category] = 1
    }
  })
  const list = []
  if (isIterable(categoryOptions)) {
    for (const c of categoryOptions) {
      const count = categoryObj[c.value]
      if (count) {
        list.push({ id: c.id, name: c.value, color: c.color, count })
      }
    }
  }

  // 按照数量排序
  // list.sort((a, b) => b.count - a.count)
  if (sliceCount && sliceCount > 0) {
    return list.slice(0, sliceCount)
  } else {
    return list
  }
}
