# API 문서

## REST API

### Authentication
- JWT 토큰 기반 인증
- Authorization 헤더: `Bearer {token}`

### Endpoints

#### Organizations
- GET /api/organizations - 조직 목록
- POST /api/organizations - 조직 생성
- GET /api/organizations/:id - 조직 상세

#### Documents
- GET /api/documents - 문서 목록
- POST /api/documents - 문서 생성
- GET /api/documents/:id - 문서 상세
- PUT /api/documents/:id - 문서 수정
- DELETE /api/documents/:id - 문서 삭제

#### Code Reviews
- GET /api/documents/:id/reviews - 리뷰 목록
- POST /api/documents/:id/reviews - 리뷰 생성

## WebSocket API

### Channels

#### document:editor
실시간 코드 에디터 동기화

**Join**
\`\`\`
join("document:editor:{document_id}", {user_id: "123"})
\`\`\`

**Events**
- `text_change`: 텍스트 변경
- `cursor_move`: 커서 이동
- `selection_change`: 선택 변경

## GraphQL (예정)

통합 GraphQL API 스키마 정의 예정
