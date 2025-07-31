const CONFIG = {
  HEXO_HOME_BANNER_ENABLE: true,
  // 3.14.1 이후 버전에서는 환영 메시지를 blog.config.js에서 설정하며, 영문 쉼표 ','로 여러 개를 구분합니다.
  HEXO_HOME_BANNER_GREETINGS: [
    'Hi，저는 프로그래머입니다',
    'Hi，저는 직장인입니다',
    'Hi，저는 밥 먹는 사람입니다',
    '내 블로그에 오신 것을 환영합니다🎉'
  ], // 홈페이지 큰 이미지 슬로건 텍스트

  HEXO_HOME_NAV_BUTTONS: true, // 홈페이지에 카테고리 큰 아이콘 버튼 표시 여부
  // 알려진 미수정 버그, 모바일에서 true로 설정 시 이미지가 로드되지 않습니다; 임시로 false 설정을 권장합니다.
  HEXO_HOME_NAV_BACKGROUND_IMG_FIXED: false, // 홈페이지 배경 이미지 스크롤 시 고정 여부, true이면 스크롤 시 이미지가 움직이지 않음; false이면 마우스 스크롤에 따라 움직임;
  // 읽기 시작 버튼 표시 여부
  HEXO_SHOW_START_READING: true,

  // 메뉴 설정
  HEXO_MENU_INDEX: true, // 홈페이지 표시
  HEXO_MENU_CATEGORY: true, // 카테고리 표시
  HEXO_MENU_TAG: true, // 태그 표시
  HEXO_MENU_ARCHIVE: true, // 아카이브 표시
  HEXO_MENU_SEARCH: true, // 검색 표시
  HEXO_MENU_RANDOM: true, // 랜덤 이동 버튼 표시

  HEXO_POST_LIST_COVER: true, // 목록에 글 표지 표시
  HEXO_POST_LIST_COVER_HOVER_ENLARGE: false, // 列表鼠标悬停放大

  HEXO_POST_LIST_COVER_DEFAULT: true, // 封面为空时用站点背景做默认封面
  HEXO_POST_LIST_SUMMARY: true, // 文章摘要
  HEXO_POST_LIST_PREVIEW: false, // 读取文章预览
  HEXO_POST_LIST_IMG_CROSSOVER: true, // 博客列表图片左右交错

  HEXO_ARTICLE_ADJACENT: true, // 显示上一篇下一篇文章推荐
  HEXO_ARTICLE_COPYRIGHT: true, // 显示文章版权声明
  HEXO_ARTICLE_NOT_BY_AI: false, // 显示非AI写作
  HEXO_ARTICLE_RECOMMEND: true, // 文章关联推荐

  HEXO_WIDGET_LATEST_POSTS: true, // 显示最新文章卡
  HEXO_WIDGET_ANALYTICS: false, // 显示统计卡
  HEXO_WIDGET_TO_TOP: true,
  HEXO_WIDGET_TO_COMMENT: true, // 跳到评论区
  HEXO_WIDGET_DARK_MODE: true, // 夜间模式
  HEXO_WIDGET_TOC: true, // 移动端悬浮目录

  HEXO_THEME_COLOR: '#928CEE' // 主题色配置（默认为 #928CEE）
}
export default CONFIG
