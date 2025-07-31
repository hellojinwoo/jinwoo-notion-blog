/**
 * 웹사이트 미화 애니메이션 효과 관련
 */
module.exports = {
  // 마우스 클릭 불꽃 효과
  FIREWORKS: process.env.NEXT_PUBLIC_FIREWORKS || false, // 스위치
  // 불꽃 색상, https://github.com/Vixcity 의 색상 제출에 감사
  FIREWORKS_COLOR: [
    '255, 20, 97',
    '24, 255, 146',
    '90, 135, 255',
    '251, 243, 140'
  ],

  // 마우스 따라가기 효과
  MOUSE_FOLLOW: process.env.NEXT_PUBLIC_MOUSE_FOLLOW || false, // 스위치
  // 이 두 개는 마우스 따라가기 효과가 활성화된 경우에만 적용됩니다
  // 마우스 유형 1：경로 산점 2：하강 산점 3：상승 산점 4：가장자리에서 마우스로 이동하는 산점 5：추적 원형 산점 6：경로 선 7：집합 산점 8：집합 격자 9：이동 격자 10：상승 입자 11：원형 무작위 색상 입자 12：원뿔 방사 추적 파란색 입자
  MOUSE_FOLLOW_EFFECT_TYPE: 11, // 1-12
  MOUSE_FOLLOW_EFFECT_COLOR: '#ef672a', // 마우스 클릭 효과 색상 #xxxxxx 또는 rgba(r,g,b,a)

  // 벚꽃 낙하 효과
  SAKURA: process.env.NEXT_PUBLIC_SAKURA || false, // 스위치
  // 떠다니는 선분 효과
  NEST: process.env.NEXT_PUBLIC_NEST || false, // 스위치
  // 동적 리본 효과
  FLUTTERINGRIBBON: process.env.NEXT_PUBLIC_FLUTTERINGRIBBON || false, // 스위치
  // 정적 리본 효과
  RIBBON: process.env.NEXT_PUBLIC_RIBBON || false, // 스위치
  // 별비 효과 다크 모드에서만 적용됩니다
  STARRY_SKY: process.env.NEXT_PUBLIC_STARRY_SKY || false, // 스위치
  // ANIMATE.css 애니메이션
  ANIMATE_CSS_URL:
    process.env.NEXT_PUBLIC_ANIMATE_CSS_URL ||
    'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css' // 애니메이션 CDN
}
