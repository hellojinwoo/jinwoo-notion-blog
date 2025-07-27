/* eslint-disable react/no-unknown-property */
/**
 * 이 스타일은 현재 테마에만 적용됩니다
 * 여기서는 tailwindCSS의 @apply 문법을 지원하지 않습니다
 * @returns
 */
const Style = () => {
  return (
    <style jsx global>{`
      // 배경색
      .dark body {
        background-color: black;
      }
      // 블러 배경색
      .bg-glassmorphism {
        background: hsla(0, 0%, 100%, 0.4);
        -webkit-backdrop-filter: blur(10px);
        backdrop-filter: blur(10px);
      }

      .dark .bg-glassmorphism {
        background: hsla(0, 0%, 0%, 0.4);
        -webkit-backdrop-filter: blur(10px);
        backdrop-filter: blur(10px);
      }
    `}</style>
  )
}

export { Style }
