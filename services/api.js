/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import ls from 'local-storage';

const buildAxiosService = (baseURL, skipInterceptor = false) => {
  const defaultHeaders = (config) => {
    return {
      ...config,
      headers: {
        Authorization: config.Authorization || `Bearer ${ls.get('token')}`,
      },
    };
  };
  const service = axios.create({ baseURL });

  if (!skipInterceptor) {
    service.interceptors.request.use(config => defaultHeaders(config));
  }

  return service;
};

export const api = buildAxiosService('https://rocket-path.herokuapp.com');

