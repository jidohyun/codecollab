# 기여 가이드

CodeCollab 프로젝트에 기여해 주셔서 감사합니다 🙌  
아래 가이드는 원활한 협업과 코드 품질 유지를 위한 기준입니다.

## 개발 환경 설정

### 요구사항

- Docker & Docker Compose
- Git

### 설정 과정

1. Fork 및 Clone

```bash
git clone https://github.com/{your-username}/codecollab.git
cd codecollab
```

2. 로컬 환경 구성

```bash
cp .env.example .env
docker-compose up -d
```

3. 데이터베이스 준비

```bash
docker-compose exec backend mix ecto.create
docker-compose exec backend mix ecto.migrate
```

### 코드 스타일 가이드

Elixir

- Credo 규칙 준수
- `mix credo suggest --strict` 통과 필수

TypeScript/React

- ESLint 규칙 준수
- Prettier 포맷팅
- `npm run lint` 통과 필수

변경사항 제출 (PR)

- 기능 브랜치 생성: `git checkout -b feature/your-feature`
- 변경사항 커밋 (명확한 메시지)
- 브랜치 푸시: `git push origin feature/your-feature`
- GitHub에서 PR 생성
- 리뷰 받고 피드백 반영
- 병합 승인 후 자동 배포

### ADR 작성

새로운 아키텍처 결정은 ADR로 기록합니다.

```md
# ADR-00X: [결정 제목]

## Status

PROPOSED | ACCEPTED | SUPERSEDED

## Context

결정이 필요했던 배경과 문제 상황

## Decision

선택한 결정과 이유

## Consequences

결정으로 인한 결과 (긍정 / 부정)

## Alternatives Considered

고려했지만 채택하지 않은 대안
```
