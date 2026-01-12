# 일반적인 문제 해결 (Runbook)

## Docker 관련

### 문제: "docker-compose: command not found"

**해결책**:

```bash
# Docker Compose 설치 확인
docker-compose --version

# 또는 Docker Compose V2
docker compose --version

# V2 사용 시 설정
alias docker-compose='docker compose'
```

### 문제: "Port 4000 already in use"

**해결책**:

```bash
# 포트 사용 프로세스 확인
lsof -i :4000

# 프로세스 종료
kill -9 <PID>

# 또는 Docker 컨테이너 제거
docker-compose down
docker system prune
```

## 데이터베이스

### 문제: "Cannot start backend - database connection refused"

**해결책**:

```bash
# PostgreSQL 서비스 상태 확인
docker-compose ps postgres

# 로그 확인
docker-compose logs postgres

# 재시작
docker-compose restart postgres
```

### 마이그레이션 문제

```bash
# 마이그레이션 상태 확인
docker-compose exec backend mix ecto.migrations

# 재설정
docker-compose exec backend mix ecto.drop
docker-compose exec backend mix ecto.create
docker-compose exec backend mix ecto.migrate
```

## 프론트엔드

### 문제: "npm install 매우 느림"

**해결책**:

```bash
# npm 캐시 정리
npm cache clean --force

# 또는 yarn 사용
npm install -g yarn
yarn install
```

### 문제: "Vite 핫 리로드 안 됨"

**해결책**:

1. docker-compose.yml의 frontend 볼륨 확인
2. 파일 변경 감지 설정 확인
3. `docker-compose restart frontend` 실행
