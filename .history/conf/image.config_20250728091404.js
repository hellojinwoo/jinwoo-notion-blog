/**
 * 이미지 관련 설정
 *
 * 예: images.unsplash.com(노션 이미지 호스팅의 모든 이미지를 대체), 만약 노션에 이미 랜덤 이미지 url을 추가했는데 그 서비스가 중단되거나 문제가 생기면, 여기서 해당 url을 설정해 모든 이미지를 한 번에 교체할 수 있습니다.
 * 기본적으로 노션에 업로드한 메인 커버 이미지와 프로필 사진도 교체됩니다. 메인 커버와 프로필 이미지는 다른 이미지 호스팅을 사용하고, 노션에는 링크만 설정하는 것을 권장합니다.
 */
module.exports = {
  NOTION_HOST: process.env.NEXT_PUBLIC_NOTION_HOST || 'https://www.notion.so', // Notion 도메인, 리버스 프록시를 위해 본인 도메인 사용 가능(리버스 프록시가 뭔지 모르면 수정하지 마세요)
  IMAGE_COMPRESS_WIDTH: process.env.NEXT_PUBLIC_IMAGE_COMPRESS_WIDTH || 800, // 이미지 압축 기본 너비, 블로그 커버 및 본문에 적용, 값이 작을수록 로딩 속도 향상
  IMAGE_ZOOM_IN_WIDTH: process.env.NEXT_PUBLIC_IMAGE_ZOOM_IN_WIDTH || 1200, // 글 이미지 클릭 시 확대되는 화질 너비(웹에서 실제 표시 너비와 다름)
  RANDOM_IMAGE_URL: process.env.NEXT_PUBLIC_RANDOM_IMAGE_URL || '', // 랜덤 이미지 API, 아래 키워드가 설정되지 않으면 메인 커버, 프로필, 글 커버 모두 랜덤 이미지로 대체
  RANDOM_IMAGE_REPLACE_TEXT:
    process.env.NEXT_PUBLIC_RANDOM_IMAGE_NOT_REPLACE_TEXT ||
    'images.unsplash.com', // 이미지 교체를 트리거하는 url 키워드(여러 개는 영어 쉼표로 구분), 이미지 주소에 이 키워드가 포함되어야 위 랜덤 이미지로 대체

  // 사이트 이미지
  IMG_LAZY_LOAD_PLACEHOLDER:
    process.env.NEXT_PUBLIC_IMG_LAZY_LOAD_PLACEHOLDER ||
    'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==', // 지연 로딩용 플레이스홀더 이미지 주소(base64 또는 url 지원)
  IMG_URL_TYPE: process.env.NEXT_PUBLIC_IMG_TYPE || 'Notion', // 이 설정은 더 이상 사용되지 않음; AMAZON 방식 미지원, Notion 방식만 지원. ['Notion','AMAZON'] 사이트 이미지 접두사 기본값 Notion:(https://notion.so/images/xx), AMAZON(https://s3.us-west-2.amazonaws.com/xxx)
  IMG_SHADOW: process.env.NEXT_PUBLIC_IMG_SHADOW || false, // 글 이미지에 자동 그림자 추가 여부
  IMG_COMPRESS_WIDTH: process.env.NEXT_PUBLIC_IMG_COMPRESS_WIDTH || 800 // Notion 이미지 압축 너비
}
