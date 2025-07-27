import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import Link from 'next/link'
import { useRouter } from 'next/router'

/**
 * 최신 글 목록
 * @param posts 모든 글 데이터
 * @param sliceCount 보여줄 개수, 기본값 6
 * @constructor
 */
const LatestPostsGroup = ({ latestPosts }) => {
  // 현재 경로 가져오기
  const currentPath = useRouter().asPath
  const { locale } = useGlobal()

  if (!latestPosts) {
    return <></>
  }

  return (
    <div>
      <div className='pb-1 px-2 flex flex-nowrap justify-between'>
        <div className='text-2xl text-gray-600  dark:text-gray-200'>
          <i className='mr-2 fas fa-history' />
          {locale.COMMON.LATEST_POSTS}
        </div>
      </div>

      {latestPosts.map(post => {
        const selected =
          currentPath === `${siteConfig('SUB_PATH', '')}/${post.slug}`

        return (
          <Link
            key={post.id}
            title={post.title}
            href={post?.href}
            passHref
            className={'my-1 flex'}>
            <div
              className={
                (selected
                  ? 'text-white  bg-gray-600 '
                  : 'text-gray-500 dark:text-green-400 ') +
                ' py-1 flex hover:bg-gray-500 px-2 duration-200 w-full ' +
                'hover:text-white dark:hover:text-white cursor-pointer'
              }>
              <li className='line-clamp-2'>{post.title}</li>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
export default LatestPostsGroup
