const CONFIG = {
  NAV_INDEX_PAGE: 'about', // 문서 홈페이지에 표시될 글, 이 경로가 Notion 데이터베이스에 포함되어 있는지 확인하세요

  NAV_AUTO_SORT: process.env.NEXT_PUBLIC_NAV_AUTO_SORT || true, // 카테고리 이름으로 자동 그룹화 정렬 여부; 자동 그룹화는 Notion의 글 순서를 변경할 수 있습니다

  NAV_SHOW_TITLE_TEXT: false, // 제목 표시줄 텍스트 표시
  NAV_USE_CUSTOM_MENU: true, // 사용자 정의 메뉴 사용 (하위 메뉴 지원, 사용자 정의 카테고리 아이콘 지원), true인 경우 모든 category 분류 표시

  // 메뉴
  NAV_MENU_CATEGORY: true, // 카테고리 표시
  NAV_MENU_TAG: true, // 태그 표시
  NAV_MENU_ARCHIVE: true, // 아카이브 표시
  NAV_MENU_SEARCH: true, // 검색 표시

  // 위젯
  NAV_WIDGET_REVOLVER_MAPS:
    process.env.NEXT_PUBLIC_WIDGET_REVOLVER_MAPS || 'false', // 지도 플러그인
  NAV_WIDGET_TO_TOP: true // 맨 위로 이동
}
export default CONFIG
