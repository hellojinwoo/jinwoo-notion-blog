// 주의: process.env.XX는 Vercel의 환경 변수입니다. 설정 방법은 다음을 참조하세요: https://docs.tangly1024.com/article/how-to-config-notion-next#c4768010ae7d44609b744e79e2f9959a

const BLOG = {
  // Important page_id！！！Duplicate Template from  https://www.notion.so/tanghh/02ab3b8678004aa69e9e415905ef32a5
  NOTION_PAGE_ID:
    process.env.NOTION_PAGE_ID || '23c711b8a78880ac8b88c59d5ae2a4a1',
  THEME: process.env.NEXT_PUBLIC_THEME || 'heo', // 현재 테마, themes 폴더에서 지원하는 모든 테마를 찾을 수 있습니다; 테마 이름은 폴더명과 같습니다. 예: example,fukasawa,gitbook,heo,hexo,landing,matery,medium,next,nobelium,plog,simple
  LANG: process.env.NEXT_PUBLIC_LANG || 'ko-KR', // e.g 'zh-CN','en-US'  see /lib/lang.js for more.
  SINCE: process.env.NEXT_PUBLIC_SINCE || 2021, // e.g if leave this empty, current year will be used.

  PSEUDO_STATIC: process.env.NEXT_PUBLIC_PSEUDO_STATIC || false, // 의사 정적 경로, 활성화 시 모든 글 URL이 .html로 끝납니다.
  NEXT_REVALIDATE_SECOND: process.env.NEXT_PUBLIC_REVALIDATE_SECOND || 5, // 캐시 업데이트 간격 단위(초); 즉, 각 페이지는 5초의 순수 정적 기간이 있으며, 이 기간에는 아무리 많은 접근이 있어도 notion 데이터를 가져오지 않습니다; 이 값을 크게 하면 Vercel 리소스 절약과 동시에 접근 속도 향상에 도움이 되지만, 글 업데이트에 지연이 발생할 수 있습니다.
  APPEARANCE: process.env.NEXT_PUBLIC_APPEARANCE || 'light', // ['light', 'dark', 'auto'], // light 주간 모드, dark 야간 모드, auto 시간과 테마에 따른 자동 야간 모드
  APPEARANCE_DARK_TIME: process.env.NEXT_PUBLIC_APPEARANCE_DARK_TIME || [18, 6], // 야간 모드 시작 및 종료 시간, false일 때 시간에 따른 자동 야간 모드 전환 비활성화

  AUTHOR: process.env.NEXT_PUBLIC_AUTHOR || 'Jinwoo', // 닉네임 예: jinwoo
  BIO: process.env.NEXT_PUBLIC_BIO || '개발자 블로그입니다', // 작자 소개
  LINK: process.env.NEXT_PUBLIC_LINK || 'https://your-blog-url.com', // 웹사이트 주소
  KEYWORDS: process.env.NEXT_PUBLIC_KEYWORD || 'Notion, Blog, 개발, 블로그', // 웹사이트 키워드 쉼표로 구분
  BLOG_FAVICON: process.env.NEXT_PUBLIC_FAVICON || '/favicon.ico', // 블로그 파비콘 설정, 기본적으로 /public/favicon.ico 사용, 온라인 이미지 지원 예: https://img.imesong.com/favicon.png
  BEI_AN: process.env.NEXT_PUBLIC_BEI_AN || '', // 등록번호 ICP등록 예시
  BEI_AN_LINK:
    process.env.NEXT_PUBLIC_BEI_AN_LINK || 'https://beian.miit.gov.cn/', // 등록 조회 링크, 멍베이 등을 사용했다면 여기에 입력하세요

  // RSS 구독
  ENABLE_RSS: process.env.NEXT_PUBLIC_ENABLE_RSS || true, // RSS 구독 기능 활성화 여부

  // 기타 복잡한 설정
  // 원본 설정 파일이 너무 길고, 모든 사람이 사용하지 않으므로 설정을 /conf/ 디렉토리로 분할했습니다. 필요에 따라 해당 파일을 찾아 수정하세요
  ...require('./conf/comment.config'), // 댓글 플러그인
  ...require('./conf/contact.config'), // 작성자 연락처 설정
  ...require('./conf/post.config'), // 글 및 목록 설정
  ...require('./conf/analytics.config'), // 사이트 방문 통계
  ...require('./conf/image.config'), // 웹사이트 이미지 관련 설정
  ...require('./conf/font.config'), // 웹사이트 폰트
  ...require('./conf/right-click-menu'), // 사용자 정의 우클릭 메뉴 관련 설정
  ...require('./conf/code.config'), // 웹사이트 코드 블록 스타일
  ...require('./conf/animation.config'), // 애니메이션 미화 효과
  ...require('./conf/widget.config'), // 웹페이지에 떠있는 위젯, 채팅 고객 서비스, 펫 위젯, 음악 플레이어 등
  ...require('./conf/ad.config'), // 광고 수익 플러그인
  ...require('./conf/plugin.config'), // 기타 서드파티 플러그인 algolia 전문 색인

  // 고급 사용법
  ...require('./conf/layout-map.config'), // 경로와 레이아웃 매핑 사용자 정의, 예: 특정 경로의 페이지 레이아웃 사용자 정의
  ...require('./conf/notion.config'), // notion 데이터베이스 읽기 관련 확장 설정, 예: 사용자 정의 테이블 헤더
  ...require('./conf/dev.config'), // 개발, 디버깅 시 주의해야 할 설정

  // 사용자 정의 외부 스크립트, 외부 스타일
  CUSTOM_EXTERNAL_JS: [''], // e.g. ['http://xx.com/script.js','http://xx.com/script.js']
  CUSTOM_EXTERNAL_CSS: [''], // e.g. ['http://xx.com/style.css','http://xx.com/style.css']

  // 사용자 정의 메뉴
  CUSTOM_MENU: process.env.NEXT_PUBLIC_CUSTOM_MENU || true, // Menu 타입의 메뉴 지원, 3.12 버전 이전의 Page 타입을 대체

  // 글 목록 관련 설정
  CAN_COPY: process.env.NEXT_PUBLIC_CAN_COPY || true, // 페이지 내용 복사 허용 여부 기본 허용, false로 설정 시 전체 복사 금지

  // 사이드바 레이아웃 반전 여부(좌우 바뀜) 지원 테마: hexo next medium fukasawa example
  LAYOUT_SIDEBAR_REVERSE:
    process.env.NEXT_PUBLIC_LAYOUT_SIDEBAR_REVERSE || false,

  // 환영 메시지 타이핑 효과, Hexo, Matery 테마 지원, 영문 쉼표로 여러 환영 메시지 구분
  GREETING_WORDS:
    process.env.NEXT_PUBLIC_GREETING_WORDS ||
    'Hi，저는 프로그래머입니다, Hi，저는 직장인입니다,Hi，저는 밥 먹는 사람입니다,제 블로그에 오신 것을 환영합니다🎉',

  // uuid에서 slug로 리다이렉트
  UUID_REDIRECT: process.env.UUID_REDIRECT || false
}

module.exports = BLOG
