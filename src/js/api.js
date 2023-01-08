import axios from 'axios';

const BASE_URL = 'https://vue3-course-api.hexschool.io/v2';

// eslint-disable-next-line consistent-return
export const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
};

export const signApi = async (data) => {
  const config = {
    method: 'post',
    baseURL: BASE_URL,
    url: '/admin/signin',
    data,
  };
  const res = await axios(config);
  document.cookie = `token=${res.data.token}`;
  document.cookie = `expired=${res.data.expired}`;
  return res;
};
export const getProductApi = async () => {
  const config = {
    method: 'get',
    baseURL: BASE_URL,
    url: 'api/lesley588/admin/products',
    headers: { authorization: getCookie('token') },
  };
  const res = await axios(config);
  return res;
};
export const checkUser = async () => {
  const config = {
    method: 'post',
    baseURL: BASE_URL,
    url: '/api/user/check',
    headers: { authorization: getCookie('token') },
  };
  return axios(config);
};
export const editProductApi = async (data, id) => {
  const config = {
    method: 'put',
    baseURL: BASE_URL,
    url: `/api/lesley588/admin/product/${id}`,
    headers: { authorization: getCookie('token') },
    data,
  };
  return axios(config);
};
export const newProductApi = async (data) => {
  const config = {
    baseURL: BASE_URL,
    method: 'post',
    url: '/api/lesley588/admin/product',
    headers: { authorization: getCookie('token') },
    data,
  };
  return axios(config);
};
export const delProductApi = async (id) => {
  const config = {
    baseURL: BASE_URL,
    method: 'delete',
    url: `/api/lesley588/admin/product/${id}`,
    headers: { authorization: getCookie('token') },
  };
  return axios(config);
};
