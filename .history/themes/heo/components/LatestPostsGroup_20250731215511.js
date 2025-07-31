import LazyImage from '@/components/LazyImage'
import Link from 'next/link'

/**
 * 최신 게시물 목록
 * @param posts 모든 게시물 데이터
 * @param sliceCount 표시할 수량 (기본값 6개)
 * @constructor
 */
const LatestPostsGroup = ({ latestPosts, siteInfo }) => {
  // 현재 경로 가져오기

  if (!latestPosts) {
    return <></>
  }

  return (
    <div className='grid grid-cols-2 gap-4'>
      {latestPosts.map(post => {
        const headerImage = post?.pageCoverThumbnail
          ? post.pageCoverThumbnail
          : siteInfo?.pageCover

        return (
          <Link
            key={post.id}
            passHref
            title={post.title}
            href={post?.href}
            className={'my-3 flex flex-col w-full'}>
            <div className='w-full h-24 md:h-60 overflow-hidden relative rounded-lg mb-2'>
              <LazyImage
                src={`${headerImage}`}
                className='object-cover w-full h-full'
              />
            </div>

            <div
              className={
                ' font-bold  overflow-x-hidden dark:text-white hover:text-indigo-600 px-2 duration-200 w-full rounded ' +
                ' hover:text-indigo-400 cursor-pointer'
              }>
              <div className='line-clamp-2 menu-link'>{post.title}</div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
export default LatestPostsGroup
