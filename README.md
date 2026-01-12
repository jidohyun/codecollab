# CodeCollab

AI-Enhanced Real-time Collaborative Code Editor & Review Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Backend Tests](https://github.com/{username}/codecollab/workflows/Backend%20Tests/badge.svg)](https://github.com/{username}/codecollab/actions)
[![Frontend Tests](https://github.com/{username}/codecollab/workflows/Frontend%20Tests/badge.svg)](https://github.com/{username}/codecollab/actions)

## 🎯 프로젝트 비전

CodeCollab은 개발팀이 실시간으로 협업하면서 AI 기반 코드 리뷰를 받을 수 있는 통합 플랫폼입니다.

### 핵심 기능

- **실시간 협업 에디터**: WebSocket 기반 즉시 동기화
- **AI 코드 리뷰**: OpenAI/Claude 통합 자동 리뷰
- **멀티테넌트 아키텍처**: 조직별 데이터 격리
- **관측성**: Prometheus + Grafana 모니터링
- **프로덕션 준비**: Kubernetes 배포 가능

## 📚 기술 스택

### 백엔드

- **언어**: Elixir 1.15
- **프레임워크**: Phoenix 1.7
- **데이터베이스**: PostgreSQL 16 (RLS 지원)
- **캐시/Pub-Sub**: Redis 7
- **API**: REST + GraphQL (예정)

### 프론트엔드

- **언어**: TypeScript 5
- **프레임워크**: React 18
- **번들러**: Vite 5
- **에디터**: Monaco Editor
- **상태 관리**: Zustand

### DevOps

- **컨테이너**: Docker
- **오케스트레이션**: Docker Compose (로컬), Kubernetes (프로덕션)
- **CI/CD**: GitHub Actions
- **모니터링**: Prometheus, Grafana, Loki

## 🚀 빠른 시작

### 필수 조건

- Docker & Docker Compose
- 또는 Elixir 1.15, Node.js 18+, PostgreSQL 16, Redis 7

### 로컬 개발 환경 설정

```bash
# 1. 저장소 클론
git clone https://github.com/{username}/codecollab.git
cd codecollab

# 2. 환경 변수 설정
cp .env.example .env

# 3. Docker로 실행
docker-compose up -d

# 4. 데이터베이스 마이그레이션
docker-compose exec backend mix ecto.create
docker-compose exec backend mix ecto.migrate

# 5. 브라우저에서 접속
# Frontend: http://localhost:3000
# Backend API: http://localhost:4000
# Grafana: http://localhost:3001
```
