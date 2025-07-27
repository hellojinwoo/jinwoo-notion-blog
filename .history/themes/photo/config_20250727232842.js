/**
 * 테마 설정 파일
 */
const CONFIG = {
  // 메뉴 설정
  PHOTO_MENU_CATEGORY: true, // 카테고리 표시
  PHOTO_MENU_TAG: true, // 태그 표시
  PHOTO_MENU_ARCHIVE: true, // 아카이브 표시
  PHOTO_MENU_SEARCH: true, // 검색 표시
  PHOTO_HOME_BACKGROUND: false, // 홈에 배경 이미지 표시 여부, 기본값 꺼짐

  PHOTO_ARTICLE_RECOMMEND: true, // 추천 관련 콘텐츠를 글 하단에 표시
  PHOTO_VIDEO_COMBINE: true, // 동영상 합치기: 여러 캡션이 있는 동영상을 글 앞부분에 합쳐서 분할 버튼 표시
  PHOTO_VIDEO_COMBINE_SHOW_PAGE_FORCE: false, // 한 개만 있어도 분할 버튼 표시
  PHOTO_PREVIEW_CATEGORY_COUNT: 16, // 홈에서 최대 표시 카테고리 수, 0은 무제한

  PHOTO_POST_LIST_COVER: true // 목록에 글 커버 표시
}
export default CONFIG
