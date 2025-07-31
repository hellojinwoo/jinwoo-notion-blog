const CONFIG = {
  GITBOOK_INDEX_PAGE: 'about', // 문서 홈페이지에 표시되는 게시물, 이 경로가 Notion 데이터베이스에 포함되어 있는지 확인하세요

  GITBOOK_AUTO_SORT: process.env.NEXT_PUBLIC_GITBOOK_AUTO_SORT || true, // 카테고리명으로 자동 그룹화 정렬할지 여부; 자동 그룹화는 Notion의 게시물 순서를 바꿀 수 있습니다

  GITBOOK_LATEST_POST_RED_BADGE:
    process.env.NEXT_PUBLIC_GITBOOK_LATEST_POST_RED_BADGE || true, // 최신 게시물에 빨간 점을 표시할지 여부

  // 메뉴
  GITBOOK_MENU_CATEGORY: true, // 카테고리 표시
  GITBOOK_BOOK_MENU_TAG: true, // 태그 표시
  GITBOOK_MENU_ARCHIVE: true, // 아카이브 표시
  GITBOOK_MENU_SEARCH: true, // 검색 표시

  // 내비게이션 글 자동 배타적 접기
  GITBOOK_EXCLUSIVE_COLLAPSE: true, // 한 번에 하나의 카테고리만 펼치고, 다른 폴더는 자동으로 닫습니다.

  GITBOOK_FOLDER_HOVER_EXPAND: false, // 좌측 내비게이션 폴더에 마우스를 올렸을 때 자동 확장; false인 경우 클릭해야 확장됩니다

  // Widget
  GITBOOK_WIDGET_REVOLVER_MAPS:
    process.env.NEXT_PUBLIC_WIDGET_REVOLVER_MAPS || 'false', // 地图插件
  GITBOOK_WIDGET_TO_TOP: true // 跳回顶部
}
export default CONFIG
