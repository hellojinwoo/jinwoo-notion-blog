'use client'

import AlgoliaSearchModal from '@/components/AlgoliaSearchModal'
import Comment from '@/components/Comment'
import replaceSearchResult from '@/components/Mark'
import NotionPage from '@/components/NotionPage'
import ShareBar from '@/components/ShareBar'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import { loadWowJS } from '@/lib/plugins/wow'
import { isBrowser } from '@/lib/utils'
import { Transition } from '@headlessui/react'
import { useRouter } from 'next/router'
import { createContext, useContext, useEffect, useRef, useState } from 'react'
import Announcement from './components/Announcement'
import ArchiveDateList from './components/ArchiveDateList'
import ArticleFooter from './components/ArticleFooter'
import { ArticleHeader } from './components/ArticleInfo'
import { ArticleLock } from './components/ArticleLock'
import BlogListGroupByDate from './components/BlogListGroupByDate'
import BlogRecommend from './components/BlogRecommend'
import CategoryGroup from './components/CategoryGroup'
import CategoryItem from './components/CategoryItem'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { HomeBackgroundImage } from './components/HomeBackgroundImage'
import JumpToTopButton from './components/JumpToTopButton'
import LatestPostsGroup from './components/LatestPostsGroup'
import SlotBar from './components/SlotBar'
import Swiper from './components/Swiper'
import TagGroups from './components/TagGroups'
import TagItem from './components/TagItem'
import CONFIG from './config'
import { Style } from './style'

// 테마 전역 상태
const ThemeGlobalPhoto = createContext()
export const usePhotoGlobal = () => useContext(ThemeGlobalPhoto)

/**
 * 기본 레이아웃 프레임워크
 * 1. 다른 모든 페이지는 LayoutBase에 포함됨
 * 2. 좌우 레이아웃, 모바일은 상단 네비게이션 사용
 * @returns {JSX.Element}
 * @constructor
 */
const LayoutBase = props => {
  const { children, slotTop } = props
  const { onLoading, fullWidth } = useGlobal()
  const collapseRef = useRef(null)
  const router = useRouter()
  const searchModal = useRef(null)
  const [expandMenu, updateExpandMenu] = useState(false)
  useEffect(() => {
    loadWowJS()
  }, [])

  // 홈 배경 이미지
  const headerSlot =
    router.route === '/' &&
    siteConfig('PHOTO_HOME_BACKGROUND', null, CONFIG) ? (
      <HomeBackgroundImage />
    ) : null

  return (
    <ThemeGlobalPhoto.Provider
      value={{ searchModal, expandMenu, updateExpandMenu, collapseRef }}>
      <div
        id='theme-photo'
        className={`${siteConfig('FONT_STYLE')} dark:text-gray-300 duration-300 transition-all bg-white dark:bg-[#2A2A2A] scroll-smooth min-h-screen flex flex-col justify-between`}>
        <Style />

        {/* 헤더 */}
        <Header {...props} />
        {headerSlot}

        {/* 본문 */}
        <div id='container-inner' className='w-full relative flex-grow z-10'>
          <div
            id='container-wrapper'
            className={
              (JSON.parse(siteConfig('LAYOUT_SIDEBAR_REVERSE'))
                ? 'flex-row-reverse'
                : '') + 'relative mx-auto justify-center md:flex items-start'
            }>
            {/* 내용 */}
            <div className={`w-full ${fullWidth ? '' : ''} px-0`}>
              <Transition
                show={!onLoading}
                appear={true}
                enter='transition ease-in-out duration-700 transform order-first'
                enterFrom='opacity-0 translate-y-16'
                enterTo='opacity-100'
                leave='transition ease-in-out duration-300 transform'
                leaveFrom='opacity-100 translate-y-0'
                leaveTo='opacity-0 -translate-y-16'
                unmount={false}>
                {/* 임베드 모듈 */}
                {slotTop}
                {children}
              </Transition>
            </div>
          </div>
        </div>

        {/* 푸터 */}
        <Footer {...props} />

        {/* 검색창 */}
        <AlgoliaSearchModal cRef={searchModal} {...props} />

        {/* 맨 위로 버튼 */}
        <div className='fixed right-4 bottom-4 z-10'>
          <JumpToTopButton />
        </div>
      </div>
    </ThemeGlobalPhoto.Provider>
  )
}

/**
 * 홈
 * @param {*} props
 * @returns 이 테마의 홈은 리스트입니다
 */
const LayoutIndex = props => {
  return <LayoutPostList {...props} />
}

/**
 * 글 목록
 * @param {*} props
 * @returns
 */
const LayoutPostList = props => {
  return (
    <div className='mx-auto'>
      <SlotBar {...props} />
      {/* 슬라이드 컴포넌트 */}
      <Swiper {...props} />
      {/* 공지 */}
      <Announcement {...props} className='mx-auto w-full max-w-5xl my-12' />
    </div>
  )
}

/**
 * 글 상세 페이지
 * @param {*} props
 * @returns
 */
const LayoutSlug = props => {
  const { post, lock, validPassword } = props
  const router = useRouter()
  const waiting404 = siteConfig('POST_WAITING_TIME_FOR_404') * 1000
  useEffect(() => {
    // JS로 여러 동영상을 하나의 분할 동영상으로 합침
    function combineVideo() {
      // id가 notion-article인 요소 찾기
      const notionArticle = document.querySelector(
        '#article-wrapper #notion-article'
      )
      if (!notionArticle) return // 해당 요소를 찾지 못하면 함수 종료

      // 모든 .notion-asset-wrapper 요소 찾기
      const assetWrappers = document.querySelectorAll('.notion-asset-wrapper')
      if (!assetWrappers || assetWrappers.length === 0) return // 해당 요소를 찾지 못하면 함수 종료

      // 중복 생성 방지
      const exists = document.querySelectorAll('.video-wrapper')
      if (exists && exists.length > 0) return

      // 동영상 블록 컨테이너 요소 생성
      const videoWrapper = document.createElement('div')
      videoWrapper.className =
        'video-wrapper py-1 px-3 bg-gray-100 dark:bg-white dark:text-black mx-auto'

      // 캐러셀 컨테이너 요소 생성
      const carouselWrapper = document.createElement('div')
      carouselWrapper.classList.add('notion-carousel-wrapper')

      // 분할 버튼 figcaption 텍스트 배열 생성
      const figCaptionValues = []

      // 모든 .notion-asset-wrapper 요소 순회
      assetWrappers.forEach((wrapper, index) => {
        // .notion-asset-wrapper 요소에 figcaption 자식 요소가 있는지 확인
        const figCaption = wrapper.querySelector('figcaption')

        // .notion-asset-wrapper 요소에 notion-asset-wrapper-video 또는 notion-asset-wrapper-embed 클래스가 있는지 확인
        if (
          !wrapper.classList.contains('notion-asset-wrapper-video') &&
          !wrapper.classList.contains('notion-asset-wrapper-embed')
        )
          return

        if (!figCaption) return // figcaption 자식 요소가 없으면 처리하지 않음

        // figcaption의 텍스트 내용을 배열에 추가
        const figCaptionValue = figCaption
          ? figCaption?.textContent?.trim()
          : `P-${index}`
        figCaptionValues.push(figCaptionValue)

        // 현재 .notion-asset-wrapper 요소를 감싸는 새로운 div 요소 생성
        const carouselItem = document.createElement('div')
        carouselItem.classList.add('notion-carousel')
        carouselItem.appendChild(wrapper)

        // 외부 링크가 있으면 data-src에 저장
        const iframe = wrapper.querySelector('iframe')
        if (iframe) {
          iframe?.setAttribute('data-src', iframe?.getAttribute('src'))
        }

        // 첫 번째 요소면 active로 설정
        if (index === 0) {
          carouselItem.classList.add('active')
        } else {
          iframe?.setAttribute('src', '')
        }

        // 요소를 컨테이너에 추가
        carouselWrapper.appendChild(carouselItem)
        // 원본 .notion-asset-wrapper 요소를 DOM에서 제거
        // wrapper.parentNode.removeChild(wrapper)
      })

      // figcaption 값을 저장할 컨테이너 요소 생성
      const figCaptionWrapper = document.createElement('div')
      figCaptionWrapper.className =
        'notion-carousel-route py-2 max-h-36 overflow-y-auto'

      // figCaptionValues 배열을 순회하며 각 값을 컨테이너 요소에 추가
      figCaptionValues.forEach(value => {
        const div = document.createElement('div')
        div.textContent = value
        div.addEventListener('click', function () {
          // 모든 carouselItem 요소 순회
          document.querySelectorAll('.notion-carousel').forEach(item => {
            // 외부 링크는 data-src에 저장
            const iframe = item.querySelector('iframe')

            // 현재 요소에 해당 figCaption 텍스트가 포함되어 있으면 active로, 아니면 active 해제
            if (item.querySelector('figcaption').textContent.trim() === value) {
              item.classList.add('active')
              if (iframe) {
                iframe.setAttribute('src', iframe.getAttribute('data-src'))
              }
            } else {
              item.classList.remove('active')
              // 비활성 창에서는 재생 중지 (notion 업로드 동영상만 지원, 외부 링크는 지원하지 않음)
              item.querySelectorAll('video')?.forEach(video => {
                video.pause()
              })
              // 외부 링크는 src 설정으로 동영상 재생 중지
              if (iframe) {
                iframe.setAttribute('src', '')
              }
            }
          })
        })
        figCaptionWrapper.appendChild(div)
      })

      if (carouselWrapper.children.length > 0) {
        // figcaption 값을 담은 컨테이너 요소를 notion-article의 첫 번째 자식 요소에 삽입
        videoWrapper.appendChild(carouselWrapper)
        // 분할 버튼은 1개 이상일 때만 표시, 또는 사용자가 강제 표시 요청 시
        if (
          figCaptionWrapper.children.length > 1 ||
          siteConfig('PHOTO_VIDEO_COMBINE_SHOW_PAGE_FORCE', false, CONFIG)
        ) {
          videoWrapper.appendChild(figCaptionWrapper)
        }
        // 페이지에 삽입
        if (
          notionArticle.firstChild &&
          notionArticle.contains(notionArticle.firstChild)
        ) {
          notionArticle.insertBefore(videoWrapper, notionArticle.firstChild)
        } else {
          notionArticle.appendChild(videoWrapper)
        }
      }
    }

    setTimeout(() => {
      combineVideo()
    }, 1500)

    // 404
    if (!post) {
      setTimeout(() => {
        if (isBrowser) {
          const article = document.querySelector(
            '#article-wrapper #notion-article'
          )
          if (!article) {
            router.push('/404').then(() => {
              console.warn('페이지를 찾을 수 없습니다', router.asPath)
            })
          }
        }
      }, waiting404)
    }
    return () => {
      // 모든 class="video-wrapper" 요소 가져오기
      const videoWrappers = document.querySelectorAll('.video-wrapper')

      // 모든 일치하는 요소를 순회하며 제거
      videoWrappers.forEach(wrapper => {
        wrapper.parentNode.removeChild(wrapper) // DOM에서 요소 제거
      })
    }
  }, [post])

  return (
    <>
      {!lock ? (
        post && (
          <div
            id='article-wrapper'
            className='px-2 max-w-5xl 2xl:max-w-[70%] mx-auto'>
            {/* 제목 */}
            <ArticleHeader post={post} />
            {/* 페이지 요소 */}
            <NotionPage post={post} />
            {/* 글 푸터 */}
            <ArticleFooter post={post} />
            {/* 추천 */}
            <BlogRecommend {...props} />
            {/* 공유 섹션 */}
            <ShareBar post={post} />
            {/* 댓글 영역 */}
            <Comment frontMatter={post} />
          </div>
        )
      ) : (
        <ArticleLock validPassword={validPassword} />
      )}
    </>
  )
}

/**
 * 404 페이지
 * @param {*} props
 * @returns
 */
const Layout404 = props => {
  const { locale } = useGlobal()
  const { searchModal } = usePhotoGlobal()
  const router = useRouter()
  // 검색창 표시
  const toggleShowSearchInput = () => {
    if (siteConfig('ALGOLIA_APP_ID')) {
      searchModal.current.openSearch()
    }
  }

  const onKeyUp = e => {
    if (e.keyCode === 13) {
      const search = document.getElementById('search').value
      if (search) {
        router.push({ pathname: '/search/' + search })
      }
    }
  }

  return (
    <>
      <div className='h-52'>
        <h2 className='text-4xl'>{locale.COMMON.NO_RESULTS_FOUND}</h2>
        <hr className='my-4' />
        <div className='max-w-md relative'>
          <input
            autoFocus
            id='search'
            onClick={toggleShowSearchInput}
            onKeyUp={onKeyUp}
            className='float-left w-full outline-none h-full p-2 rounded dark:bg-[#383838] bg-gray-100'
            aria-label='Submit search'
            type='search'
            name='s'
            autoComplete='off'
            placeholder='Type then hit enter to search...'
          />
          <i className='fas fa-search absolute right-0 my-auto p-2'></i>
        </div>
      </div>
      {/* 하단 네비게이션 */}
      <div className='h-full flex-grow grid grid-cols-4 gap-4'>
        <LatestPostsGroup {...props} />
        <CategoryGroup {...props} />
        <ArchiveDateList {...props} />
        <TagGroups {...props} />
      </div>
    </>
  )
}

/**
 * 검색 페이지
 * @param {*} props
 * @returns
 */
const LayoutSearch = props => {
  const { keyword } = props
  const router = useRouter()
  useEffect(() => {
    if (isBrowser) {
      // 검색된 결과 하이라이트
      const container = document.getElementById('posts-wrapper')
      if (keyword && container) {
        replaceSearchResult({
          doms: container,
          search: keyword,
          target: {
            element: 'span',
            className: 'text-red-500 border-b border-dashed'
          }
        })
      }
    }
  }, [router])

  return <LayoutPostList {...props} />
}

/**
 * 아카이브 목록
 * @param {*} props
 * @returns 날짜별로 글을 그룹화하여 정렬
 */
const LayoutArchive = props => {
  const { archivePosts } = props
  return (
    <>
      <div className='mb-10 pb-20 md:py-12 p-3 min-h-screen w-full max-w-5xl 2xl:max-w-[70%] mx-auto'>
        {Object.keys(archivePosts).map(archiveTitle => (
          <BlogListGroupByDate
            key={archiveTitle}
            archiveTitle={archiveTitle}
            archivePosts={archivePosts}
          />
        ))}
      </div>
    </>
  )
}

/**
 * 카테고리 목록
 * @param {*} props
 * @returns
 */
const LayoutCategoryIndex = props => {
  const { categoryOptions } = props
  return (
    <>
      <div id='category-list' className='duration-200 flex flex-wrap'>
        {categoryOptions?.map(category => (
          <CategoryItem key={category.name} category={category} />
        ))}
      </div>
    </>
  )
}

/**
 * 태그 목록
 * @param {*} props
 * @returns
 */
const LayoutTagIndex = props => {
  const { tagOptions } = props
  return (
    <>
      <div id='tags-list' className='duration-200 flex flex-wrap'>
        {tagOptions.map(tag => (
          <TagItem key={tag.name} tag={tag} />
        ))}
      </div>
    </>
  )
}

export {
  Layout404,
  LayoutArchive,
  LayoutBase,
  LayoutCategoryIndex,
  LayoutIndex,
  LayoutPostList,
  LayoutSearch,
  LayoutSlug,
  LayoutTagIndex,
  CONFIG as THEME_CONFIG
}
