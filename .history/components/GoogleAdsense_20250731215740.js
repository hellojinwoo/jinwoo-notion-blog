import { siteConfig } from '@/lib/config'
import { loadExternalResource } from '@/lib/utils'
import { useEffect } from 'react'

/**
 * 광고 요소 요청
 * 호출 후, 실제로는 광고 단위가 페이지에서 보일 때만 실제로 가져옴
 */
function requestAd(ads) {
  if (!ads || ads.length === 0) {
    return
  }

  const adsbygoogle = window.adsbygoogle
  if (adsbygoogle && ads.length > 0) {
    const observerOptions = {
      root: null, // use the viewport as the root
      threshold: 0.5 // element is considered visible when 50% visible
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const adStatus = entry.target.getAttribute('data-adsbygoogle-status')
          if (!adStatus || adStatus !== 'done') {
            adsbygoogle.push(entry.target)
            observer.unobserve(entry.target) // stop observing once ad is loaded
          }
        }
      })
    }, observerOptions)

    ads.forEach(ad => {
      observer.observe(ad)
    })
  }
}

// adsbygoogle 클래스를 포함한 노드 또는 그 자식 노드를 가져옵니다
function findAdsbyGoogleNode(node) {
  // 노드 및 그 자식 노드가 adsbygoogle 클래스를 포함하는지 확인합니다
  if (node.classList && node.classList.contains('adsbygoogle')) {
    return node
  }
  
  for (let child of node.children || []) {
    const found = findAdsbyGoogleNode(child)
    if (found) return found
  }
  
  return null
}

/**
 * 구글 광고 초기화
 * @returns
 */
export const initGoogleAdsense = ADSENSE_GOOGLE_ID => {
  console.log('Load Adsense')
  loadExternalResource(
    `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_GOOGLE_ID}`,
    'js'
  ).then(url => {
    setTimeout(() => {
      // 페이지 로딩 완료 후 광고를 한 번 로드합니다
      const ads = document.querySelectorAll('ins.adsbygoogle')
      if (window.adsbygoogle && ads.length > 0) {
        requestAd(Array.from(ads))
      }

      // 페이지에 새로 나타나는 광고 단위를 모니터링하는 MutationObserver 인스턴스를 생성합니다
      const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
          // DOM에 추가된 각 노드를 확인합니다
          mutation.addedNodes.forEach(node => {
            // 노드가 adsbygoogle 요소인 경우 광고를 요청합니다
            if (node.nodeType === Node.ELEMENT_NODE) {
              const adsNodes = getNodesWithAdsByGoogleClass(node)
              if (adsNodes.length > 0) {
                requestAd(adsNodes)
              }
            }
          })
        })
      })

      // 특정 유형의 DOM 변화를 모니터링하도록 MutationObserver를 구성합니다
      const observerConfig = {
        childList: true, // 대상 자식 노드의 변화를 관찰합니다
        subtree: true // 대상 노드의 모든 후손 노드를 포함합니다
      }

      // 启动 MutationObserver
      observer.observe(
        document.querySelector('#article-wrapper #notion-article') ||
          document.body,
        observerConfig
      )
    }, 100)
  })
}

/**
 * 문서 내 삽입 광고 단위
 * GoogleAdsense 백엔드에서 해당 광고를 설정하여 생성하고 상응하는 코드를 가져오세요
 * 아래 광고 단위의 data-ad-slot data-ad-format data-ad-layout-key(있는 경우)를 수정하세요
 * 로컬에서 디버깅할 수 있도록 추가했습니다
 */
const AdSlot = ({ type = 'show' }) => {
  const ADSENSE_GOOGLE_ID = siteConfig('ADSENSE_GOOGLE_ID')
  const ADSENSE_GOOGLE_TEST = siteConfig('ADSENSE_GOOGLE_TEST')
  if (!ADSENSE_GOOGLE_ID) {
    return null
  }
  // 글 내 삽입 광고
  if (type === 'in-article') {
    return (
      <ins
        className='adsbygoogle'
        style={{ display: 'block', textAlign: 'center' }}
        data-ad-layout='in-article'
        data-ad-format='fluid'
        data-adtest={ADSENSE_GOOGLE_TEST ? 'on' : 'off'}
        data-ad-client={ADSENSE_GOOGLE_ID}
        data-ad-slot={siteConfig('ADSENSE_GOOGLE_SLOT_IN_ARTICLE')}></ins>
    )
  }

  // 信息流广告
  if (type === 'flow') {
    return (
      <ins
        className='adsbygoogle'
        data-ad-format='fluid'
        data-ad-layout-key='-5j+cz+30-f7+bf'
        style={{ display: 'block' }}
        data-adtest={ADSENSE_GOOGLE_TEST ? 'on' : 'off'}
        data-ad-client={ADSENSE_GOOGLE_ID}
        data-ad-slot={siteConfig('ADSENSE_GOOGLE_SLOT_FLOW')}></ins>
    )
  }

  // 原生广告
  if (type === 'native') {
    return (
      <ins
        className='adsbygoogle'
        style={{ display: 'block', textAlign: 'center' }}
        data-ad-format='autorelaxed'
        data-adtest={ADSENSE_GOOGLE_TEST ? 'on' : 'off'}
        data-ad-client={ADSENSE_GOOGLE_ID}
        data-ad-slot={siteConfig('ADSENSE_GOOGLE_SLOT_NATIVE')}></ins>
    )
  }

  //  展示广告
  return (
    <ins
      className='adsbygoogle'
      style={{ display: 'block' }}
      data-ad-client={ADSENSE_GOOGLE_ID}
      data-adtest={ADSENSE_GOOGLE_TEST ? 'on' : 'off'}
      data-ad-slot={siteConfig('ADSENSE_GOOGLE_SLOT_AUTO')}
      data-ad-format='auto'
      data-full-width-responsive='true'></ins>
  )
}

/**
 * 문서 내부에 삽입되는 광고 단위
 * 텍스트 내용에서 <ins/> 키워드가 나타날 때 자동으로 광고로 교체합니다
 * @param {*} props
 */
const AdEmbed = () => {
  const ADSENSE_GOOGLE_ID = siteConfig('ADSENSE_GOOGLE_ID')
  const ADSENSE_GOOGLE_TEST = siteConfig('ADSENSE_GOOGLE_TEST')
  const ADSENSE_GOOGLE_SLOT_AUTO = siteConfig('ADSENSE_GOOGLE_SLOT_AUTO')
  useEffect(() => {
    setTimeout(() => {
      // class가 notion-text이고 내용이 '<ins/>'인 모든 div 요소를 찾습니다
      const notionTextElements = document.querySelectorAll(
        '#article-wrapper #notion-article div.notion-text'
      )
      // 찾은 요소들을 순회합니다
      notionTextElements?.forEach(element => {
        // 요소의 내용이 '<ins/>'인지 확인합니다
        if (element.textContent.trim() === '<ins/>') {
          // 새로운 <ins> 요소를 생성합니다
          const newInsElement = document.createElement('ins')
          newInsElement.className = 'adsbygoogle w-full py-1'
          newInsElement.style.display = 'block'
          newInsElement.setAttribute('data-ad-client', ADSENSE_GOOGLE_ID)
          newInsElement.setAttribute(
            'data-adtest',
            ADSENSE_GOOGLE_TEST ? 'on' : 'off'
          )
          newInsElement.setAttribute('data-ad-slot', ADSENSE_GOOGLE_SLOT_AUTO)
          newInsElement.setAttribute('data-ad-format', 'auto')
          newInsElement.setAttribute('data-full-width-responsive', 'true')

          // 새로 생성한 <ins> 요소로 기존 div 요소를 교체합니다
          element?.parentNode?.replaceChild(newInsElement, element)
        }
      })
    }, 1000)
  }, [])
  return <></>
}

export { AdEmbed, AdSlot }
