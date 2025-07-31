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

      .bottom-button-group {
        box-shadow: 0px -3px 10px 0px rgba(0, 0, 0, 0.1);
      }
    `}</style>
  )
}

export { Style }
