import type { AxiosRequestConfig } from 'axios';
import { default as axios } from 'axios';

const DOMAIN = process.env.DOMAIN ?? 'https://tasks-api-express.herokuapp.com';

export const defaultAxiosRequestConfig: Readonly<AxiosRequestConfig> = {
  baseURL: `${DOMAIN}/api/v1`,
  withCredentials: false,
  timeout: 30_000,
  paramsSerializer: {
    indexes: null,
  },
};

export const http = axios.create(defaultAxiosRequestConfig);
