# 로컬 개발 환경 설정 가이드

## 필수 조건

### Docker 기반 (권장)

- Docker 24.0+
- Docker Compose 2.0+
- 4GB 이상 RAM 할당 (Docker Desktop)

### 수동 설정

- Elixir 1.15+
- Node.js 18+
- PostgreSQL 16
- Redis 7

## Docker로 실행하기

### 1. 환경 설정

```bash
cp .env.example .env
```

### 2. 서비스 시작

```bash
docker-compose up -d
```

### 3. 데이터베이스 초기화

```bash
docker-compose exec backend mix ecto.create
docker-compose exec backend mix ecto.migrate
```

### 4. 접속

- Frontend: http://localhost:3000
- Backend API: http://localhost:4000
- Redis: localhost:6379
- PostgreSQL: localhost:5432

## 로그 확인

```bash
# 모든 서비스 로그
docker-compose logs -f

# 특정 서비스 로그
docker-compose logs -f backend
docker-compose logs -f frontend
```

## 서비스 종료

```bash
docker-compose down

# 데이터 제거
docker-compose down -v
```
