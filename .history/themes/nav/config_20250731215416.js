const CONFIG = {
  NAV_INDEX_PAGE: 'about', // 문서 홈페이지에 표시되는 게시물, 이 경로가 Notion 데이터베이스에 포함되어 있는지 확인하세요

  NAV_AUTO_SORT: process.env.NEXT_PUBLIC_NAV_AUTO_SORT || true, // 카테고리명으로 자동 그룹화 정렬할지 여부; 자동 그룹화는 Notion의 게시물 순서를 바꿀 수 있습니다

  NAV_SHOW_TITLE_TEXT: false, // 제목 표시줄에 텍스트 표시
  NAV_USE_CUSTOM_MENU: true, // 사용자 정의 메뉴 사용 (서브메뉴 지원, 사용자 정의 카테고리 아이콘 지원), true인 경우 모든 category 카테고리를 표시합니다

  // 메뉴
  NAV_MENU_CATEGORY: true, // 카테고리 표시
  NAV_MENU_TAG: true, // 显示标签
  NAV_MENU_ARCHIVE: true, // 显示归档
  NAV_MENU_SEARCH: true, // 显示搜索

  // Widget
  NAV_WIDGET_REVOLVER_MAPS:
    process.env.NEXT_PUBLIC_WIDGET_REVOLVER_MAPS || 'false', // 地图插件
  NAV_WIDGET_TO_TOP: true // 跳回顶部
}
export default CONFIG
