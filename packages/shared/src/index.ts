// Shared types and utilities
export interface ApiResponse<T> {
  status: 'success' | 'error';
  data?: T;
  error?: string;
}

export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000';
