import { useGlobal } from '@/lib/global'

/**
 * 페이지 맨 위로 이동
 * 화면이 500픽셀 이상 스크롤되면 이 컨트롤이 나타남
 * @param targetRef 연관된 높이의 대상 html 태그
 * @param showPercent 퍼센트 표시 여부
 * @returns {JSX.Element}
 * @constructor
 */
const JumpToTopButton = () => {
  const { locale } = useGlobal()
  return (
    <div
      title={locale.POST.TOP}
      className='cursor-pointer p-2 text-center'
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      <i className='fas fa-angle-up text-2xl' />
    </div>
  )
}

export default JumpToTopButton
