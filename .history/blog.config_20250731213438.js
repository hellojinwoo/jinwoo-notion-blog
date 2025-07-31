// 주의: process.env.XX는 Vercel의 환경변수입니다. 설정 방법은 다음을 참조하세요: https://docs.tangly1024.com/article/how-to-config-notion-next#c4768010ae7d44609b744e79e2f9959a

const BLOG = {
  // Important page_id！！！Duplicate Template from  https://www.notion.so/tanghh/02ab3b8678004aa69e9e415905ef32a5
  NOTION_PAGE_ID:
    process.env.NOTION_PAGE_ID ||
    '23c711b8a78880ac8b88c59d5ae2a4a1',
  THEME: process.env.NEXT_PUBLIC_THEME || 'heo', // 현재 테마, themes 폴더에서 지원하는 모든 테마를 찾을 수 있습니다. 테마 이름은 폴더명입니다. 예: example,fukasawa,gitbook,heo,hexo,landing,matery,medium,next,nobelium,plog,simple
  LANG: process.env.NEXT_PUBLIC_LANG || 'zh-CN', // e.g 'zh-CN','en-US'  see /lib/lang.js for more.
  SINCE: process.env.NEXT_PUBLIC_SINCE || 2021, // e.g if leave this empty, current year will be used.

  PSEUDO_STATIC: process.env.NEXT_PUBLIC_PSEUDO_STATIC || false, // 유사 정적 경로, 활성화 시 모든 게시물 URL이 .html로 끝납니다.
  NEXT_REVALIDATE_SECOND: process.env.NEXT_PUBLIC_REVALIDATE_SECOND || 5, // 캐시 업데이트 간격 단위(초). 각 페이지는 5초의 순수 정적 기간이 있으며, 이 기간 동안 방문 횟수에 관계없이 notion 데이터를 가져오지 않습니다. 이 값을 늘리면 Vercel 리소스를 절약하고 접속 속도를 향상시킬 수 있지만, 글 업데이트에 지연이 발생할 수 있습니다.
  APPEARANCE: process.env.NEXT_PUBLIC_APPEARANCE || 'light', // ['light', 'dark', 'auto'], // light 주간 모드, dark 야간 모드, auto 시간과 테마에 따라 자동으로 야간 모드
  APPEARANCE_DARK_TIME: process.env.NEXT_PUBLIC_APPEARANCE_DARK_TIME || [18, 6], // 야간 모드 시작과 끝 시간, false로 설정 시 시간에 따른 자동 야간 모드 전환 비활성화

  AUTHOR: process.env.NEXT_PUBLIC_AUTHOR || 'Jinwoo', // 您的昵称 예: jinwoo
  BIO: process.env.NEXT_PUBLIC_BIO || '개발자 블로그입니다', // 작자 소개
  LINK: process.env.NEXT_PUBLIC_LINK || 'https://your-blog-url.com', // 웹사이트 주소
  KEYWORDS: process.env.NEXT_PUBLIC_KEYWORD || 'Notion, Blog, 개발, 블로그', // 웹사이트 키워드 쉼표로 구분
  BLOG_FAVICON: process.env.NEXT_PUBLIC_FAVICON || '/favicon.ico', // 블로그 favicon 설정, 기본값은 /public/favicon.ico 사용, 온라인 이미지 지원 (예: https://img.imesong.com/favicon.png)
  BEI_AN: process.env.NEXT_PUBLIC_BEI_AN || '', // 등록번호 민ICP등XXXXXX
  BEI_AN_LINK: process.env.NEXT_PUBLIC_BEI_AN_LINK || 'https://beian.miit.gov.cn/', // 등록 조회 링크, 맹등록 등을 사용한 경우 여기에 입력하세요

  // RSS구독
  ENABLE_RSS: process.env.NEXT_PUBLIC_ENABLE_RSS || true, // RSS구독 기능 활성화 여부

  // 기타 복잡한 설정
  // 원래 설정 파일이 너무 길고, 모든 사람이 사용하지 않으므로 설정을 /conf/ 디렉토리로 분할했습니다. 필요에 따라 해당 파일을 찾아 수정하세요.
  ...require('./conf/comment.config'), // 댓글 플러그인
  ...require('./conf/contact.config'), // 작성자 연락처 설정
  ...require('./conf/post.config'), // 게시물 및 목록 설정
  ...require('./conf/analytics.config'), // 사이트 접속 통계
  ...require('./conf/image.config'), // 웹사이트 이미지 관련 설정
  ...require('./conf/font.config'), // 웹사이트 폰트
  ...require('./conf/right-click-menu'), // 사용자 정의 우클릭 메뉴 관련 설정
  ...require('./conf/code.config'), // 웹사이트 코드 블록 스타일
  ...require('./conf/animation.config'), // 동적 효과 및 미화 효과
  ...require('./conf/widget.config'), // 웹페이지에 떠 있는 위젯, 채팅 고객서비스, 펫 위젯, 음악 플레이어 등
  ...require('./conf/ad.config'), // 광고 수익 플러그인
  ...require('./conf/plugin.config'), // 기타 서드파티 플러그인 algolia 전문 인덱싱

  // 고급 사용법
  ...require('./conf/layout-map.config'), // 라우팅 및 레이아웃 매핑 사용자 정의, 예: 특정 라우트의 페이지 레이아웃 사용자 정의
  ...require('./conf/notion.config'), // notion 데이터베이스 읽기 관련 확장 설정, 예: 사용자 정의 테이블 헤더
  ...require('./conf/dev.config'), // 개발, 디버깅 시 주의해야 할 설정

  // 사용자 정의 외부 스크립트, 외부 스타일
  CUSTOM_EXTERNAL_JS: [''], // e.g. ['http://xx.com/script.js','http://xx.com/script.js']
  CUSTOM_EXTERNAL_CSS: [''], // e.g. ['http://xx.com/style.css','http://xx.com/style.css']

  // 사용자 정의 메뉴
  CUSTOM_MENU: process.env.NEXT_PUBLIC_CUSTOM_MENU || true, // Menu 타입의 메뉴 지원, 3.12 버전 이전의 Page 타입을 대체

  // 게시물 목록 관련 설정
  CAN_COPY: process.env.NEXT_PUBLIC_CAN_COPY || true, // 페이지 내용 복사 허용 여부, 기본 허용. false로 설정하면 전체적으로 내용 복사 금지.

  // 사이드바 레이아웃 반전 여부(왼쪽이 오른쪽으로, 오른쪽이 왼쪽으로) 지원 테마: hexo next medium fukasawa example
  LAYOUT_SIDEBAR_REVERSE:
    process.env.NEXT_PUBLIC_LAYOUT_SIDEBAR_REVERSE || false,

  // 환영 인사 타이핑 효과, Hexo, Matery 테마 지원, 영문 쉼표로 여러 환영 인사 구분.
  GREETING_WORDS:
    process.env.NEXT_PUBLIC_GREETING_WORDS ||
    'Hi，저는 개발자입니다, Hi，저는 직장인입니다,Hi，저는 밥먹는 사람입니다,제 블로그에 오신 것을 환영합니다🎉',

  // uuid重定向至 slug
  UUID_REDIRECT: process.env.UUID_REDIRECT || false
}

module.exports = BLOG