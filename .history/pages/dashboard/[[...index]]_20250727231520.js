import BLOG from '@/blog.config'
import { siteConfig } from '@/lib/config'
import { getGlobalData, getPost, getPostBlocks } from '@/lib/db/getSiteData'
import { DynamicLayout } from '@/themes/theme'

/**
 * 노션의 slug로 페이지 접근
 * 1단계 디렉터리만 파싱, 예: /about
 * @param {*} props
 * @returns
 */
const Dashboard = props => {
  const theme = siteConfig('THEME', BLOG.THEME, props.NOTION_CONFIG)
  return <DynamicLayout theme={theme} layoutName='LayoutDashboard' {...props} />
}

export async function getStaticProps({ locale }) {
  const prefix = 'dashboard'
  let fullSlug = 'dashboard'
  const from = `slug-props-${fullSlug}`
  const props = await getGlobalData({ from, locale })
  if (siteConfig('PSEUDO_STATIC', false, props.NOTION_CONFIG)) {
    if (!fullSlug.endsWith('.html')) {
      fullSlug += '.html'
    }
  }

  // 리스트 내에서 글 찾기
  props.post = props?.allPages?.find(p => {
    return p.type.indexOf('Menu') < 0 && p.slug === fullSlug
  })

  // 리스트 외 글 정보 처리
  if (!props?.post) {
    const pageId = prefix
    if (pageId.length >= 32) {
      const post = await getPost(pageId)
      props.post = post
    }
  }
  // 글을 가져올 수 없음
  if (!props?.post) {
    props.post = null
    return {
      props,
      revalidate: process.env.EXPORT
        ? undefined
        : siteConfig(
            'NEXT_REVALIDATE_SECOND',
            BLOG.NEXT_REVALIDATE_SECOND,
            props.NOTION_CONFIG
          )
    }
  }

  // 글 내용 로딩
  if (!props?.post?.blockMap) {
    props.post.blockMap = await getPostBlocks(props.post.id, from)
  }

  delete props.allPages
  return {
    props,
    revalidate: process.env.EXPORT
      ? undefined
      : siteConfig(
          'NEXT_REVALIDATE_SECOND',
          BLOG.NEXT_REVALIDATE_SECOND,
          props.NOTION_CONFIG
        )
  }
}

export const getStaticPaths = () => {
  return {
    paths: [
      { params: { index: [] } }, // 홈 경로에 해당
      { params: { index: ['membership'] } },
      { params: { index: ['balance'] } },
      { params: { index: ['user-profile'] } },
      { params: { index: ['user-profile', 'security'] } }, // 중첩 라우팅, 구조대로 전달
      { params: { index: ['order'] } },
      { params: { index: ['affiliate'] } }
    ],
    fallback: 'blocking' // 또는 true, 블로킹 렌더링
  }
}

export default Dashboard
