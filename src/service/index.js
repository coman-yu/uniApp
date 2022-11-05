import axios from 'axios';
import { baseUri } from './api.js';

const service = axios.create({
  baseURL: baseUri,
  timeout: 600000,
});

axios.defaults.retry = 4;
axios.defaults.retryDelay = 4000;
axios.defaults.withCredentials = true;

function startLoading() {
  //使用Element loading-start 方法
  uni.showLoading({
    title: '加载中...',
  });
}

function endLoading() {
  //使用Element loading-close 方法
  uni.hideLoading();
}

let needLoadingRequestCount = 0;

export function showFullScreenLoading() {
  if (needLoadingRequestCount === 0) {
    startLoading();
  }
  needLoadingRequestCount++;
}

export function tryHideFullScreenLoading() {
  if (needLoadingRequestCount <= 0) return needLoadingRequestCount--;
  if (needLoadingRequestCount === 0) {
    endLoading();
  }
}

service.interceptors.request.use(
  (config) => {
    showFullScreenLoading();
    return config;
  },
  (error) => {
    tryHideFullScreenLoading();
    return Promise.reject(error);
  },
);

// axios 请求处理超时处理
service.interceptors.response.use(function (response) {
  tryHideFullScreenLoading();
  return response;
});

export default service;
