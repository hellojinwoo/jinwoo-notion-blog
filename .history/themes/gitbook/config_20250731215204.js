const CONFIG = {
  GITBOOK_INDEX_PAGE: 'about', // 문서 홈페이지에 표시되는 게시물, 이 경로가 Notion 데이터베이스에 포함되어 있는지 확인하세요

  GITBOOK_AUTO_SORT: process.env.NEXT_PUBLIC_GITBOOK_AUTO_SORT || true, // 카테고리명으로 자동 그룹화 정렬할지 여부; 자동 그룹화는 Notion의 게시물 순서를 바꿀 수 있습니다

  GITBOOK_LATEST_POST_RED_BADGE:
    process.env.NEXT_PUBLIC_GITBOOK_LATEST_POST_RED_BADGE || true, // 최신 게시물에 빨간 점을 표시할지 여부

  // 菜单
  GITBOOK_MENU_CATEGORY: true, // 显示分类
  GITBOOK_BOOK_MENU_TAG: true, // 显示标签
  GITBOOK_MENU_ARCHIVE: true, // 显示归档
  GITBOOK_MENU_SEARCH: true, // 显示搜索

  // 导航文章自动排他折叠
  GITBOOK_EXCLUSIVE_COLLAPSE: true, // 한 번에 하나의 카테고리만 펼치고, 다른 폴더는 자동으로 닫습니다.

  GITBOOK_FOLDER_HOVER_EXPAND: false, // 左侧导航文件夹鼠标悬停时自动展开；若为false，则要点击才能展开

  // Widget
  GITBOOK_WIDGET_REVOLVER_MAPS:
    process.env.NEXT_PUBLIC_WIDGET_REVOLVER_MAPS || 'false', // 地图插件
  GITBOOK_WIDGET_TO_TOP: true // 跳回顶部
}
export default CONFIG
