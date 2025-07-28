/**
 * 글 헤더
 * @param {*} props
 * @returns
 */
export const ArticleHeader = props => {
  const { post } = props

  return (
    <section className='w-full mx-auto mb-4'>
      {/* 제목 부분 */}
      {/* 제목 글꼴 크기를 16px로, 두께를 얇게 설정 */}
      <h2
        className='py-10 dark:text-white text-center'
        style={{
          fontSize: '16px', // 글꼴 크기를 16px로 설정
          fontWeight: '300' // 글꼴 두께를 얇게 설정
        }}>
        {post?.title}
      </h2>
    </section>
  )
}
