const API = {
  DEV_BASE_URL: process.env.REACT_APP_DEVELOPMENT_API_URL,
  PROD_BASE_URL: process.env.REACT_APP_PRODUCTION_API_URL,
};

const isDevelopment = () => process.env.NODE_ENV === 'development';

export const apiBaseURL = isDevelopment() ? API.DEV_BASE_URL : API.PROD_BASE_URL;

export const CHECKLIST_URL = (status: string) => `/checklist?status=${status}`;
export const ANSWERS_URL = (id: string) => `/rooms/${id}/answers`;
export const ROOMS_URL = (id?: string) => `/rooms/${id}`;
