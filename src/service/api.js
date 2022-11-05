const http = uni.$u.http;
// demo
export const postMenu = (params, config = {}) =>
  http.post('/ebapi/public_api/index', params, config);
