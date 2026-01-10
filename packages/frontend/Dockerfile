FROM node:20-alpine

WORKDIR /app

# 의존성 설치 (캐시 레이어)
COPY package*.json ./
RUN npm install

# 소스 코드 복사
COPY . .

# 포트 노출
EXPOSE 3000

# Vite 개발 서버 실행 (모든 인터페이스에 바인딩)
CMD ["npm", "run", "dev", "--", "--host"]
