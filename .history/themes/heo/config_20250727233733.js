const CONFIG = {
  HEO_HOME_POST_TWO_COLS: true, // 홈페이지 블로그를 두 열로 표시, false면 한 열만 표시
  HEO_LOADING_COVER: true, // 페이지 로딩 시 표시되는 커버 애니메이션

  HEO_HOME_BANNER_ENABLE: true,

  HEO_SITE_CREATE_TIME: '2021-09-21', // 사이트 개설일, 사이트 운영일 계산에 사용

  // 홈페이지 상단 알림바(롤링), 필요 없으면 빈 배열로 설정
  HEO_NOTICE_BAR: [
    {
      title: '내 블로그에 오신 것을 환영합니다',
      url: 'https://blog.tangly1024.com'
    },
    {
      title: '문서 센터에서 더 많은 도움을 받으세요',
      url: 'https://docs.tangly1024.com'
    }
  ],

  // 히어로 영역 좌우 컴포넌트 위치 변경
  HEO_HERO_REVERSE: false,
  // 블로그 본문 영역 좌우 컴포넌트 위치 변경
  HEO_HERO_BODY_REVERSE: false,

  // 히어로 영역(홈페이지 상단 카드)
  HEO_HERO_TITLE_1: '프로그래밍과 사고 인식 공유',
  HEO_HERO_TITLE_2: '',
  HEO_HERO_TITLE_3: 'TANGLY1024.COM',
  HEO_HERO_TITLE_4: '새 버전 오픈',
  HEO_HERO_TITLE_5: 'NotionNext4.0 손쉬운 테마 커스터마이즈',
  HEO_HERO_TITLE_LINK: 'https://tangly1024.com',
  // 히어로 영역 커버 문구
  HEO_HERO_COVER_TITLE: '자유롭게 둘러보기',

  // 히어로 영역에 표시되는 3가지 대표 카테고리
  HEO_HERO_CATEGORY_1: { title: '필독 추천', url: '/tag/필독추천' },
  HEO_HERO_CATEGORY_2: { title: '인기 글', url: '/tag/인기글' },
  HEO_HERO_CATEGORY_3: { title: '실용 튜토리얼', url: '/tag/실용튜토리얼' },

  // 히어로 영역 오른쪽 추천 글 태그(예: [추천]), 최대 6개. 빈 값이면 최근 업데이트 글 추천
  HEO_HERO_RECOMMEND_POST_TAG: '추천',
  HEO_HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME: false, // 추천 글 정렬, true면 마지막 수정일 기준 내림차순
  //   HERO_RECOMMEND_COVER: 'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg', // 英雄区右侧图片

  // 오른쪽 프로필 카드 환영 문구(클릭 시 변경)
  HEO_INFOCARD_GREETINGS: [
    '안녕하세요! 저는',
    '🔍 공유와 친절한 도움',
    '🤝 인터랙션과 디자인 전문',
    '🏃 실천하는 행동파',
    '🏠 스마트홈 전문가',
    '🤖️ 디지털/테크 애호가',
    '🧱 팀의 엔진'
  ],

  // 个人资料底部按钮
  HEO_INFO_CARD_URL1: '/about',
  HEO_INFO_CARD_ICON1: 'fas fa-user',
  HEO_INFO_CARD_URL2: 'https://github.com/tangly1024',
  HEO_INFO_CARD_ICON2: 'fab fa-github',
  HEO_INFO_CARD_URL3: 'https://www.tangly1024.com',
  HEO_INFO_CARD_TEXT3: '더 알아보기',

  // 用户技能图标
  HEO_GROUP_ICONS: [
    {
      title_1: 'AfterEffect',
      img_1: '/images/heo/20239df3f66615b532ce571eac6d14ff21cf072602.webp',
      color_1: '#989bf8',
      title_2: 'Sketch',
      img_2: '/images/heo/2023e0ded7b724a39f12d59c3dc8fbdc7cbe074202.webp',
      color_2: '#ffffff'
    },
    {
      title_1: 'Docker',
      img_1: '/images/heo/20231108a540b2862d26f8850172e4ea58ed075102.webp',
      color_1: '#57b6e6',
      title_2: 'Photoshop',
      img_2: '/images/heo/2023e4058a91608ea41751c4f102b131f267075902.webp',
      color_2: '#4082c3'
    },
    {
      title_1: 'FinalCutPro',
      img_1: '/images/heo/20233e777652412247dd57fd9b48cf997c01070702.webp',
      color_1: '#ffffff',
      title_2: 'Python',
      img_2: '/images/heo/20235c0731cd4c0c95fc136a8db961fdf963071502.webp',
      color_2: '#ffffff'
    },
    {
      title_1: 'Swift',
      img_1: '/images/heo/202328bbee0b314297917b327df4a704db5c072402.webp',
      color_1: '#eb6840',
      title_2: 'Principle',
      img_2: '/images/heo/2023f76570d2770c8e84801f7e107cd911b5073202.webp',
      color_2: '#8f55ba'
    },
    {
      title_1: 'illustrator',
      img_1: '/images/heo/20237359d71b45ab77829cee5972e36f8c30073902.webp',
      color_1: '#f29e39',
      title_2: 'CSS3',
      img_2: '/images/heo/20237c548846044a20dad68a13c0f0e1502f074602.webp',
      color_2: '#2c51db'
    },
    {
      title_1: 'JS',
      img_1: '/images/heo/2023786e7fc488f453d5fb2be760c96185c0075502.webp',
      color_1: '#f7cb4f',
      title_2: 'HTML',
      img_2: '/images/heo/202372b4d760fd8a497d442140c295655426070302.webp',
      color_2: '#e9572b'
    },
    {
      title_1: 'Git',
      img_1: '/images/heo/2023ffa5707c4e25b6beb3e6a3d286ede4c6071102.webp',
      color_1: '#df5b40',
      title_2: 'Rhino',
      img_2: '/images/heo/20231ca53fa0b09a3ff1df89acd7515e9516173302.webp',
      color_2: '#1f1f1f'
    }
  ],

  HEO_SOCIAL_CARD: true, // 是否显示右侧，点击加入社群按钮
  HEO_SOCIAL_CARD_TITLE_1: '소통 채널',
  HEO_SOCIAL_CARD_TITLE_2: '우리 커뮤니티에 참여해 토론과 공유를 해보세요',
  HEO_SOCIAL_CARD_TITLE_3: '클릭하여 커뮤니티 가입',
  HEO_SOCIAL_CARD_URL: 'https://docs.tangly1024.com/article/how-to-question',

  // 底部统计面板文案
  HEO_POST_COUNT_TITLE: '게시글 수:',
  HEO_SITE_TIME_TITLE: '사이트 운영일:',
  HEO_SITE_VISIT_TITLE: '방문 수:',
  HEO_SITE_VISITOR_TITLE: '방문자 수:',

  // *****  아래 설정은 무효, 개발용으로만 남겨둠 ****
  // 메뉴 설정
  HEO_MENU_INDEX: true, // 홈페이지 표시
  HEO_MENU_CATEGORY: true, // 카테고리 표시
  HEO_MENU_TAG: true, // 태그 표시
  HEO_MENU_ARCHIVE: true, // 아카이브 표시
  HEO_MENU_SEARCH: true, // 검색 표시

  HEO_POST_LIST_COVER: true, // 리스트에 게시글 커버 표시
  HEO_POST_LIST_COVER_HOVER_ENLARGE: false, // 리스트에서 마우스 오버 시 확대

  HEO_POST_LIST_COVER_DEFAULT: true, // 커버가 없을 때 사이트 배경을 기본 커버로 사용
  HEO_POST_LIST_SUMMARY: true, // 게시글 요약
  HEO_POST_LIST_PREVIEW: false, // 게시글 미리보기 읽기
  HEO_POST_LIST_IMG_CROSSOVER: true, // 블로그 리스트 이미지 좌우 교차

  HEO_ARTICLE_ADJACENT: true, // 이전/다음 게시글 추천 표시
  HEO_ARTICLE_COPYRIGHT: true, // 게시글 저작권 표시
  HEO_ARTICLE_NOT_BY_AI: false, // AI가 작성하지 않은 글 표시
  HEO_ARTICLE_RECOMMEND: true, // 관련 게시글 추천

  HEO_WIDGET_LATEST_POSTS: true, // 최신 게시글 카드 표시
  HEO_WIDGET_ANALYTICS: false, // 통계 카드 표시
  HEO_WIDGET_TO_TOP: true,
  HEO_WIDGET_TO_COMMENT: true, // 댓글 영역으로 이동
  HEO_WIDGET_DARK_MODE: true, // 다크 모드
  HEO_WIDGET_TOC: true // 모바일에서 떠다니는 목차
}
export default CONFIG
