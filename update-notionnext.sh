#!/bin/bash

# NotionNext 간단 업데이트 확인 스크립트
echo "🔄 NotionNext 업데이트 확인 중..."

# 원본 저장소 추가
git remote add upstream https://github.com/tangly1024/NotionNext.git 2>/dev/null || true

# 최신 변경사항 가져오기
git fetch upstream

# 새 업데이트가 있는지 확인
UPDATES=$(git log HEAD..upstream/main --oneline | head -10)

if [ -z "$UPDATES" ]; then
    echo "✅ 이미 최신 버전입니다!"
    exit 0
fi

echo "📢 새로운 업데이트가 있습니다 (최근 10개):"
echo "$UPDATES"
echo ""

echo "⚠️  자동 업데이트는 충돌이 많이 발생합니다."
echo "📋 수동 업데이트 방법:"
echo "1. 중요한 변경사항만 선택적으로 적용: git cherry-pick <commit-hash>"
echo "2. 전체 재설치: 새로 클론 후 설정 파일 복사"
echo "3. 현재 버전 유지: 안정적으로 사용"
echo ""
echo "💡 개인 블로그라면 현재 버전 유지를 추천합니다."