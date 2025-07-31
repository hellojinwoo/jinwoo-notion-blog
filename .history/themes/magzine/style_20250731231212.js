/* eslint-disable react/no-unknown-property */
/**
 * 이 스타일은 현재 테마에만 적용됩니다
 * 여기서는 tailwindCSS의 @apply 구문을 지원하지 않습니다
 * @returns
 */
const Style = () => {
  return (
    <style jsx global>{`
      // 배경색
      .dark body {
        background-color: black;
      }

      /* 사용자 정의 스크롤바 스타일 (Chrome, Safari, Edge에 적용) */
      html::-webkit-scrollbar {
        width: 12px;
      }

      html::-webkit-scrollbar-track {
        background-color: transparent;
      }

      html::-webkit-scrollbar-thumb {
        background: #4e4e4e;
      }
    `}</style>
  )
}

export { Style }
