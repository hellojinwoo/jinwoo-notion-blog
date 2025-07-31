import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import CONFIG from '../config'

/**
 * 모바일에서 클릭하면 목차 드로어를 호출
 * 화면을 500픽셀 아래로 스크롤하면 이 컨트롤이 나타남
 * @param props 부모 컴포넌트에서 전달한 props
 * @returns {JSX.Element}
 * @constructor
 */
const CatalogFloatButton = props => {
  const { locale } = useGlobal()
  // 이 설정으로 끌 수 있음
  if (!siteConfig('Magzine_WIDGET_TOC', true, CONFIG)) {
    return <></>
  }
  return (
    <div
      onClick={props.onClick}
      className='py-5 px-5 cursor-pointer transform duration-200 flex justify-center items-center w-7 h-7 text-center'
      title={locale.POST.TOP}>
      <i className='fas fa-list-ol' />
    </div>
  )
}

export default CatalogFloatButton
