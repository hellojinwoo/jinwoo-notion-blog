import { useEffect, useRef, useState } from 'react'
import PostItemCard from './PostItemCard'

/**
 * 슬라이드 캐러셀
 * @param {*} param0
 * @returns
 */
const InertiaCarousel = ({ posts }) => {
  const carouselRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [lastX, setLastX] = useState(0) // 마지막 위치
  const [velocity, setVelocity] = useState(0)
  const animationRef = useRef(null)

  // 드래그 시작 이벤트
  const startDrag = e => {
    e.preventDefault()
    setIsDragging(true)
    const startPosition = e.pageX || e.touches?.[0].pageX
    setStartX(startPosition - carouselRef.current.offsetLeft)
    setScrollLeft(carouselRef.current.scrollLeft)
    setLastX(startPosition) // 마지막 위치 초기화
    cancelInertiaScroll() // 진행 중인 관성 애니메이션 중지
  }

  // 드래그 중 이벤트
  const duringDrag = e => {
    if (!isDragging) return
    e.preventDefault()
    const currentPosition = e.pageX || e.touches[0].pageX
    const distance = currentPosition - startX
    carouselRef.current.scrollLeft = scrollLeft - distance

    // 현재 속도 계산
    const deltaX = currentPosition - lastX
    setVelocity(deltaX) // 속도 갱신
    setLastX(currentPosition) // lastX를 현재 위치로 갱신
  }

  // 드래그 종료 이벤트, 관성 스크롤 시작
  const endDrag = () => {
    setIsDragging(false)
    startInertiaScroll(velocity) // 최종 속도로 관성 스크롤 시작
  }

  // 관성 스크롤 함수
  const startInertiaScroll = initialVelocity => {
    let currentVelocity = initialVelocity
    const decay = 0.95 // 관성 감쇠 계수
    const animate = () => {
      if (Math.abs(currentVelocity) > 0.5) {
        // 속도가 충분히 클 때만 계속 스크롤
        carouselRef.current.scrollLeft -= currentVelocity
        currentVelocity *= decay // 속도 감쇠
        animationRef.current = requestAnimationFrame(animate)
      } else {
        cancelAnimationFrame(animationRef.current)
      }
    }
    animate()
  }

  // 관성 스크롤 취소
  const cancelInertiaScroll = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
    }
  }

  useEffect(() => {
    return () => cancelInertiaScroll() // 애니메이션 정리
  }, [])

  return (
    <div
      ref={carouselRef}
      className={`flex w-screen overflow-x-auto space-x-6 ${
        isDragging ? 'cursor-grabbing' : 'cursor-grab'
      }`}
      onMouseDown={startDrag}
      onMouseMove={duringDrag}
      onMouseUp={endDrag}
      onMouseLeave={endDrag}
      onTouchStart={startDrag}
      onTouchMove={duringDrag}
      onTouchEnd={endDrag}
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      {/* Carousel items */}

      <div className='min-w-[5vw] md:min-w-[27vw]' />
      {posts &&
        posts?.map((post, index) => (
          <PostItemCard
            className='min-w-[80vw] md:min-w-[50vw]  w-full flex items-end justify-center'
            key={index}
            post={post}
          />
        ))}
    </div>
  )
}

export default InertiaCarousel
