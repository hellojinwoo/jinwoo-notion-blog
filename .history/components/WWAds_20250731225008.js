import { siteConfig } from '@/lib/config'

/**
 * 만웨이 광고 플러그인
 * @param {string} orientation - 광고 방향, 'vertical' 또는 'horizontal' 가능
 * @param {boolean} sticky - 고정 위치 여부
 * @returns {JSX.Element | null} - 렌더링된 JSX 요소 또는 null 반환
 */
export default function WWAds({
  orientation = 'vertical',
  sticky = false,
  className
}) {
  const AD_WWADS_ID = siteConfig('AD_WWADS_ID')

  if (!AD_WWADS_ID) {
    return null
  }

  return (
    <div
      data-id={AD_WWADS_ID}
      className={`wwads-cn 
            ${orientation === 'vertical' ? 'wwads-vertical' : 'wwads-horizontal'}
            ${sticky ? 'wwads-sticky' : ''} z-10 ${className || ''}`}
    />
  )
}
