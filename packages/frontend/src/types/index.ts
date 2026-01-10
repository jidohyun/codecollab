export interface User {
  id: string;
  email: string;
  name: string;
  tenant_id: string;
}

export interface CodeDocument {
  id: string;
  name: string;
  content: string;
  language: string;
  tenant_id: string;
  created_at: string;
  updated_at: string;
}

export interface CodeReview {
  id: string;
  document_id: string;
  ai_generated: boolean;
  comments: ReviewComment[];
  created_at: string;
}

export interface ReviewComment {
  id: string;
  line: number;
  suggestion: string;
  severity: 'info' | 'warning' | 'error';
}
