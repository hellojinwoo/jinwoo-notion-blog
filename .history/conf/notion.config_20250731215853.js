/**
 * Notion 관련 설정 읽기
 * Notion에 사용자 정의 필드를 추가해야 하는 경우 이 파일을 수정할 수 있습니다
 * 이 파일 내용은 환경변수로 덮어쓸 수 있지만, NOTION_CONFIG로는 덮어쓸 수 없습니다
 */
module.exports = {
  // Notion数据库索引，取notion的第几个视图作为站点数据和排序依据
  NOTION_INDEX: process.env.NEXT_PUBLIC_NOTION_INDEX || 0,  // 默认取Notion数据库中的第1个视图
  // 由于计算机是从0开始计数、而非从1开始。因此如果要取第二个视图，可以传1，取第三个视图传2，以此类推,取数据库的最后一个视图可以传-1。

  // 사용자 정의 notion 데이터베이스 필드명 설정
  NOTION_PROPERTY_NAME: {
    password: process.env.NEXT_PUBLIC_NOTION_PROPERTY_PASSWORD || 'password',
    type: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE || 'type', // 글 타입
    type_post: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_POST || 'Post', // type 글 타입이 이 값과 같을 때는 블로그 글입니다.
    type_page: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_PAGE || 'Page', // type 글 타입이 이 값과 같을 때는 단일 페이지입니다.
    type_notice:
      process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_NOTICE || 'Notice', // type 글 타입이 이 값과 같을 때는 공지사항입니다.
    type_menu: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_MENU || 'Menu', // type 글 타입이 이 값과 같을 때는 메뉴입니다.
    type_sub_menu:
      process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_SUB_MENU || 'SubMenu', // type 글 타입이 이 값과 같을 때는 서브메뉴입니다.
    title: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TITLE || 'title', // 문서 제목
    status: process.env.NEXT_PUBLIC_NOTION_PROPERTY_STATUS || 'status',
    status_publish:
      process.env.NEXT_PUBLIC_NOTION_PROPERTY_STATUS_PUBLISH || 'Published', // status 상태값이 이와 같을 때 게시됨, 한국어 가능
    status_invisible:
      process.env.NEXT_PUBLIC_NOTION_PROPERTY_STATUS_INVISIBLE || 'Invisible', // status 상태값이 이와 같을 때 숨김 게시됨, 한국어 가능, 이 외의 다른 페이지 상태는 블로그에 표시되지 않음
    summary: process.env.NEXT_PUBLIC_NOTION_PROPERTY_SUMMARY || 'summary',
    slug: process.env.NEXT_PUBLIC_NOTION_PROPERTY_SLUG || 'slug',
    category: process.env.NEXT_PUBLIC_NOTION_PROPERTY_CATEGORY || 'category',
    date: process.env.NEXT_PUBLIC_NOTION_PROPERTY_DATE || 'date',
    tags: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TAGS || 'tags',
    icon: process.env.NEXT_PUBLIC_NOTION_PROPERTY_ICON || 'icon',
    ext: process.env.NEXT_PUBLIC_NOTION_PROPERTY_EXT || 'ext' // 扩展字段，存放json-string，用于复杂业务
  },
  NOTION_ACTIVE_USER: process.env.NOTION_ACTIVE_USER || '',
  NOTION_TOKEN_V2: process.env.NOTION_TOKEN_V2 || '' // Useful if you prefer not to make your database public
}
