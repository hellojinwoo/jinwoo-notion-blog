/**
 * 게시물 관련 기능
 */
module.exports = {
  // 게시물 URL 접두사
  POST_URL_PREFIX: process.env.NEXT_PUBLIC_POST_URL_PREFIX ?? 'article',
  // POST 타입 게시물의 기본 경로 접두사, 예를 들어 기본 POST 타입의 경로는 /article/[slug]
  // 이 항목을 '' 빈 값으로 설정하면 게시물에 접두사 경로가 없음
  // WP와 유사한 게시물 링크 형식 사용자 정의 기능 지원: https://wordpress.org/documentation/article/customize-permalinks/, 현재는 %year%/%month%/%day%만 구현
  // 예: 링크를 접두사 article + 타임스탬프로 변경하려면 다음과 같이 변경: 'article/%year%/%month%/%day%'

  POST_SCHEDULE_PUBLISH:
    process.env.NEXT_PUBLIC_NOTION_SCHEDULE_PUBLISH || true, // 게시물의 발행 시간 필드에 따라 자동 공개/비공개 제어

  // 공유 바
  POST_SHARE_BAR_ENABLE: process.env.NEXT_PUBLIC_POST_SHARE_BAR || 'true', // 게시물 하단 공유 바 스위치
  POSTS_SHARE_SERVICES:
    process.env.NEXT_PUBLIC_POST_SHARE_SERVICES ||
    'link,wechat,qq,weibo,email,facebook,twitter,telegram,messenger,line,reddit,whatsapp,linkedin', // 공유 서비스, 순서대로 표시, 쉼표로 구분
  // 지원되는 모든 공유 서비스: link(링크 복사),wechat(위챗),qq,weibo(웨이보),email(이메일),facebook,twitter,telegram,messenger,line,reddit,whatsapp,linkedin,vkshare,okshare,tumblr,livejournal,mailru,viber,workplace,pocket,instapaper,hatena

  POST_TITLE_ICON: process.env.NEXT_PUBLIC_POST_TITLE_ICON || true, // 제목 아이콘 표시 여부
  POST_DISABLE_GALLERY_CLICK:
    process.env.NEXT_PUBLIC_POST_DISABLE_GALLERY_CLICK || false, // 갤러리 뷰 클릭 비활성화, 친구 링크 페이지의 갤러리에 링크 삽입 편의
  POST_LIST_STYLE: process.env.NEXT_PUBLIC_POST_LIST_STYLE || 'page', // ['page','scroll] 게시물 목록 스타일: 페이지 분할, 단일 페이지 스크롤 로딩
  POST_LIST_PREVIEW: process.env.NEXT_PUBLIC_POST_PREVIEW || 'false', // 목록에서 게시물 미리보기 로딩 여부
  POST_PREVIEW_LINES: process.env.NEXT_PUBLIC_POST_POST_PREVIEW_LINES || 12, // 미리보기 블로그 행 수
  POST_RECOMMEND_COUNT: process.env.NEXT_PUBLIC_POST_RECOMMEND_COUNT || 6, // 추천 게시물 수량
  POSTS_PER_PAGE: process.env.NEXT_PUBLIC_POST_PER_PAGE || 12, // post counts per page
  POSTS_SORT_BY: process.env.NEXT_PUBLIC_POST_SORT_BY || 'notion', // 정렬 방식 'date'는 시간순, 'notion'은 notion에서 제어

  // 文章过期提醒配置 p.s. 目前此功能暂时只适用于heo主题
  ARTICLE_EXPIRATION_DAYS:
    process.env.NEXT_PUBLIC_ARTICLE_EXPIRATION_DAYS || 90, // 文章过期提醒阈值（天）
  ARTICLE_EXPIRATION_MESSAGE:
    process.env.NEXT_PUBLIC_ARTICLE_EXPIRATION_MESSAGE ||
    '这篇文章发布于 %%DAYS%% 天前，内容可能已过时，请谨慎参考。', // 过期提示信息，使用 %%DAYS%% 作为天数占位符
  ARTICLE_EXPIRATION_ENABLED:
    process.env.NEXT_PUBLIC_ARTICLE_EXPIRATION_ENABLED || 'false', // 是否启用文章过期提醒

  POST_WAITING_TIME_FOR_404:
    process.env.NEXT_PUBLIC_POST_WAITING_TIME_FOR_404 || '8', // 文章加载超时时间，单位秒；超时后跳转到404页面

  // 标签相关
  TAG_SORT_BY_COUNT: true, // 标签是否按照文章数量倒序排列，文章多的标签排在前。
  IS_TAG_COLOR_DISTINGUISHED:
    process.env.NEXT_PUBLIC_IS_TAG_COLOR_DISTINGUISHED === 'true' || true // 对于名称相同的tag是否区分tag的颜色
}
