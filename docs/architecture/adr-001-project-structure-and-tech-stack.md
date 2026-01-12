# ADR 001: 프로젝트 구조 및 기술 스택 선택

## Status

ACCEPTED

## Context

CodeCollab는 실시간 협업 코드 에디터와 AI 코드 리뷰 시스템을 갖춘 멀티테넌트 SaaS 플랫폼입니다.

### 고려사항

1. **개발 속도**: 빠른 프로토타이핑과 반복
2. **확장성**: 수천 명의 동시 사용자 지원
3. **운영성**: 프로덕션 모니터링 및 관찰성
4. **팀 역량**: Elixir/Phoenix 및 TypeScript/React 경험
5. **비용 효율성**: 효율적인 리소스 활용

## Decision

### 1. Monorepo 구조 (npm workspaces)

- **선택**: packages/ 디렉토리 아래 backend, frontend, shared 분리
- **이유**:
  - 공유 타입 정의 가능
  - 의존성 관리 단순화
  - 단일 CI/CD 파이프라인

### 2. 백엔드 기술 스택

- **언어/프레임워크**: Elixir + Phoenix 1.7
- **데이터베이스**: PostgreSQL 16 (Row-Level Security)
- **캐시/Pub-Sub**: Redis 7
- **이유**:
  - Elixir의 뛰어난 동시성 처리 (BEAM VM)
  - Phoenix Channels로 WebSocket 쉬운 구현
  - Pattern matching으로 안전한 코드
  - PostgreSQL RLS로 멀티테넌시 보안

### 3. 프론트엔드 기술 스택

- **언어/라이브러리**: TypeScript + React 18
- **번들러**: Vite 5
- **상태 관리**: Zustand
- **에디터**: Monaco Editor
- **이유**:
  - TypeScript로 타입 안정성
  - React의 널리 알려진 생태계
  - Vite로 빠른 개발 루프
  - Monaco는 VS Code 기반 에디터

### 4. 컨테이너 & 오케스트레이션

- **로컬 개발**: Docker Compose
- **프로덕션**: Kubernetes (향후)
- **이유**:
  - 로컬과 프로덕션 환경 패리티
  - 팀 전체에서 동일한 개발 환경
  - 클라우드 배포 기반 마련

### 5. CI/CD

- **플랫폼**: GitHub Actions
- **전략**:
  - 각 서비스별 독립 워크플로우
  - PR 시 자동 테스트 및 린트
  - main 브랜치 자동 배포
- **이유**:
  - GitHub에 통합
  - 무료 범위 충분
  - 설정 간단

## Consequences

### 긍정적

- 타입 안정성 (TypeScript + Elixir)
- 뛰어난 개발자 경험 (Vite, Phoenix 핫 리로드)
- 프로덕션 레벨의 확장성 (BEAM, PostgreSQL)
- 멀티테넌시 보안 (PostgreSQL RLS)

### 부정적

- Elixir 생태계 상대적으로 작음 (하지만 충분함)
- 팀의 Elixir 학습 곡선 (하지만 이미 경험 있음)
- Docker 오버헤드 (로컬 성능)

### 완화 방안

- 문서화 및 온보딩 가이드 제공
- 오픈소스 참고 자료 활용
- 정기적인 코드 리뷰 및 페어 프로그래밍

## Alternatives Considered

### 1. Node.js 풀스택 (Express + React)

- **장점**: 단일 언어, 간단한 학습
- **단점**: 동시성 처리 약함, 멀티코어 활용 어려움

### 2. Rails + React (Ruby on Rails)

- **장점**: Rails의 풍부한 생태계
- **단점**: 성능, 동시성, 새로운 학습

### 3. Kubernetes 로컬 개발 (Kind/Minikube)

- **장점**: 프로덕션 환경 시뮬레이션
- **단점**: 로컬 성능 저하, 복잡성 증가

## Related

- [ADR 002: WebSocket 동기화 알고리즘](./adr-002-websocket-sync-algorithm.md) (예정)
- [ADR 003: 멀티테넌시 구현 전략](./adr-003-multi-tenancy-strategy.md) (예정)

---

**작성일**: 2026-01-10
**작성자**: [Your Name]
**마지막 업데이트**: 2026-01-10
