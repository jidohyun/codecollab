FROM elixir:1.15-alpine

WORKDIR /app

# 필수 빌드 도구 설치
RUN apk add --no-cache \
    gcc \
    musl-dev \
    make \
    git \
    ca-certificates

# 의존성 캐시 레이어
COPY mix.exs mix.lock ./
RUN mix deps.get

# 소스 코드 복사
COPY . .

# 포트 노출
EXPOSE 4000

# 개발 환경에서 실행
ENV BACKEND_ENV=dev
CMD ["mix", "phx.server"]
