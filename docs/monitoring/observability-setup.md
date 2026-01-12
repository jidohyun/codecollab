# 관측성(Observability) 설정 가이드

## 구성 요소

### 1. Prometheus
- 메트릭 수집 및 저장
- 포트: 9090
- http://localhost:9090

### 2. Grafana
- 메트릭 시각화
- 포트: 3001
- http://localhost:3001

### 3. Loki
- 로그 수집 및 검색
- 포트: 3100

## 수집할 메트릭

### 백엔드 (Elixir)
- HTTP 요청 수
- 응답 시간 (latency)
- 에러율
- 활성 데이터베이스 연결
- Phoenix Channel 연결 수

### 프론트엔드 (React)
- 페이지 로드 시간
- JavaScript 에러
- 사용자 상호작용 이벤트

### 데이터베이스
- 쿼리 시간
- 연결 풀 상태
- 디스크 사용량

## 알림 규칙 (예정)
- 에러율 > 5%
- P95 응답 시간 > 500ms
- 데이터베이스 연결 고갈
