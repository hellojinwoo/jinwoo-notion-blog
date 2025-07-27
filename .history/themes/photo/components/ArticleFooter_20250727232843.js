import { useGlobal } from '@/lib/global'
import { formatDateFmt } from '@/lib/utils/formatDate'
import Link from 'next/link'

/**
 * 글 푸터
 * @param {*} props
 * @returns
 */
export default function ArticleFooter(props) {
  const { post } = props
  const { locale } = useGlobal()

  return (
    <>
      {/* 카테고리와 태그 부분 */}
      <div className='flex gap-3 font-semibold text-sm items-center justify-center'>
        {/* 카테고리 태그(글이 '페이지' 타입이 아닐 때) */}
        {post?.type !== 'Page' && (
          <>
            <Link
              href={`/category/${post?.category}`}
              passHref
              className='cursor-pointer text-md mr-2 text-green-500'>
              {post?.category}
            </Link>
          </>
        )}

        {/* 태그 부분(글에 태그가 있을 때) */}
        <div className='flex py-1 space-x-3'>
          {post?.tags?.length > 0 && (
            <>
              {locale.COMMON.TAGS} <span>:</span>
            </>
          )}
          {/* 모든 태그 표시 */}
          {post?.tags?.map(tag => {
            return (
              <Link
                href={`/tag/${tag}`}
                key={tag}
                className='text-yellow-500 mr-2'>
                {tag}
              </Link>
            )
          })}
        </div>
      </div>

      {/* 게시일 정보 */}
      {/* 게시일을 글 하단으로 옮기고 스타일 적용 */}
      <div
        className='text-center mt-6'
        style={{
          fontSize: '12px', // 글자 크기 12px로 설정
          fontWeight: '300', // 글자 두께 얇게 설정
          color: 'gray' // 글자 색상을 회색으로 설정
        }}>
        <Link
          href={`/archive#${formatDateFmt(post?.publishDate, 'yyyy-MM')}`}
          passHref
          className='pl-1 cursor-pointer'>
          {post?.publishDay}
        </Link>
      </div>
    </>
  )
}
