import { default as axios } from 'axios';

const DOMAIN = process.env.DOMAIN ?? 'https://tasks-api-express.herokuapp.com';

export const http = axios.create({
  baseURL: `${DOMAIN}/api/v1`,
  withCredentials: false,
  timeout: 30_000,
  paramsSerializer: {
    indexes: null,
  },
});
