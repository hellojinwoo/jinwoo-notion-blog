const CONFIG = {
  GITBOOK_INDEX_PAGE: 'about', // 문서 홈페이지에 표시될 글, 이 경로가 Notion 데이터베이스에 포함되어 있는지 확인하세요

  GITBOOK_AUTO_SORT: process.env.NEXT_PUBLIC_GITBOOK_AUTO_SORT || true, // 카테고리 이름으로 자동 그룹화 정렬 여부; 자동 그룹화는 Notion의 글 순서를 변경할 수 있습니다

  GITBOOK_LATEST_POST_RED_BADGE:
    process.env.NEXT_PUBLIC_GITBOOK_LATEST_POST_RED_BADGE || true, // 최신 글에 빨간 점 표시 여부

  // 메뉴
  GITBOOK_MENU_CATEGORY: true, // 카테고리 표시
  GITBOOK_BOOK_MENU_TAG: true, // 태그 표시
  GITBOOK_MENU_ARCHIVE: true, // 아카이브 표시
  GITBOOK_MENU_SEARCH: true, // 검색 표시

  // 내비게이션 글 자동 배타적 접기
  GITBOOK_EXCLUSIVE_COLLAPSE: true, // 한 번에 하나의 카테고리만 펼치고, 다른 폴더는 자동으로 닫기

  GITBOOK_FOLDER_HOVER_EXPAND: false, // 왼쪽 내비게이션 폴더에 마우스 오버 시 자동 펼치기; false인 경우 클릭해야 펼쳐짐

  // 위젯
  GITBOOK_WIDGET_REVOLVER_MAPS:
    process.env.NEXT_PUBLIC_WIDGET_REVOLVER_MAPS || 'false', // 지도 플러그인
  GITBOOK_WIDGET_TO_TOP: true // 맨 위로 이동
}
export default CONFIG
