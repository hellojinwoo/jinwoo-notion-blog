const CONFIG = {
  // 첫 화면 정보란 버튼 텍스트
  MAGZINE_HOME_BANNER_ENABLE: true, // 첫 화면 오른쪽 상단 홍보 영역
  MAGZINE_HOME_BUTTON: true,
  MAGZINE_HOME_BUTTON_URL: '/about',
  MAGZINE_HOME_BUTTON_TEXT: '자세히 알아보기',

  MAGZINE_HOME_HIDDEN_CATEGORY: '공유 에세이', // 메인에 표시하지 않을 글 분류, 영어 쉼표로 구분

  MAGZINE_HOME_TITLE:
    '지금 바로 온라인 비즈니스를 시작하세요. 완전 무료입니다.',
  MAGZINE_HOME_DESCRIPTION:
    'NotionNext를 통해 비즈니스 시작, 운영, 확장에 필요한 모든 도구와 도움을 얻으세요.',
  MAGZINE_HOME_TIPS:
    'AI 시대가 도래했습니다. 슈퍼 개인을 위한 축제의 장입니다!',

  // 메인 하단 추천 글 태그, 예: [추천], 최대 6개 글; 비워두면 최근 업데이트 글 추천
  MAGZINE_RECOMMEND_POST_TAG: '추천',
  MAGZINE_RECOMMEND_POST_COUNT: 6,
  MAGZINE_RECOMMEND_POST_TITLE: '추천 글',
  MAGZINE_RECOMMEND_POST_SORT_BY_UPDATE_TIME: false, // 추천 글 정렬, true면 마지막 수정일 기준 내림차순

  // Style
  MAGZINE_RIGHT_PANEL_DARK: process.env.NEXT_PUBLIC_MAGZINE_RIGHT_DARK || false, // 오른쪽 패널 다크 모드

  MAGZINE_POST_LIST_COVER: true, // 글 목록에 이미지 표지 표시
  MAGZINE_POST_LIST_PREVIEW: true, // 목록에 글 미리보기 표시
  MAGZINE_POST_LIST_CATEGORY: true, // 목록에 글 분류 표시
  MAGZINE_POST_LIST_TAG: true, // 목록에 글 태그 표시

  MAGZINE_POST_DETAIL_CATEGORY: true, // 글 상세에 분류 표시
  MAGZINE_POST_DETAIL_TAG: true, // 글 상세에 태그 표시

  // 글 상세 페이지 연락 카드
  MAGZINE_SOCIAL_CARD: true, // 오른쪽에 '커뮤니티 가입' 버튼 표시 여부
  MAGZINE_SOCIAL_CARD_TITLE_1: '소통 채널',
  MAGZINE_SOCIAL_CARD_TITLE_2: '커뮤니티 참여 및 토론',
  MAGZINE_SOCIAL_CARD_TITLE_3: '클릭하여 커뮤니티 가입',
  MAGZINE_SOCIAL_CARD_URL: 'https://docs.tangly1024.com/article/chat-community',

  // 푸터 메뉴
  MAGZINE_FOOTER_LINKS: [
    {
      name: '친구 링크',
      menus: [
        {
          title: 'Tangly의 학습 노트',
          href: 'https://blog.tangly1024.com'
        },
        {
          title: 'NotionNext',
          href: 'https://www.tangly1024.com'
        }
      ]
    },
    {
      name: '개발자',
      menus: [
        { title: 'Github', href: 'https://github.com/tangly1024/NotionNext' },
        {
          title: '개발 도움말',
          href: 'https://docs.tangly1024.com/article/how-to-develop-with-notion-next'
        },
        {
          title: '기능 피드백',
          href: 'https://github.com/tangly1024/NotionNext/issues/new/choose'
        },
        {
          title: '기술 토론',
          href: 'https://github.com/tangly1024/NotionNext/discussions'
        },
        {
          title: '작성자 소개',
          href: 'https://blog.tangly1024.com/about'
        }
      ]
    },
    {
      name: '지원',
      menus: [
        {
          title: '사이트 관리자 커뮤니티',
          href: 'https://docs.tangly1024.com/article/chat-community'
        },
        {
          title: '문의 및 맞춤 제작',
          href: 'https://docs.tangly1024.com/article/my-service'
        },
        {
          title: '업그레이드 가이드',
          href: 'https://docs.tangly1024.com/article/my-service'
        },
        {
          title: '설치 튜토리얼',
          href: 'https://docs.tangly1024.com/article/how-to-update-notionnext'
        },
        { title: 'SEO 홍보', href: 'https://seo.tangly1024.com/' }
      ]
    },
    {
      name: '솔루션',
      menus: [
        { title: '웹사이트 구축 도구', href: 'https://www.tangly1024.com/' },
        { title: 'NotionNext', href: 'https://docs.tangly1024.com/about' }
      ]
    }
  ],

  // 이전 버전 상단 메뉴
  MAGZINE_MENU_CATEGORY: true, // 카테고리 표시
  MAGZINE_MENU_TAG: true, // 태그 표시
  MAGZINE_MENU_ARCHIVE: true, // 아카이브 표시
  MAGZINE_MENU_SEARCH: true, // 검색 표시

  MAGZINE_WIDGET_TO_TOP: true // 맨 위로 이동
}
export default CONFIG
