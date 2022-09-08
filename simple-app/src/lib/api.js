import axios from 'axios';
import store from '../redux/store';
import { getLocalAccessToken, getLocalRefreshToken } from '../utils/utils';

const baseURL = process.env.REACT_APP_API_URL;

const refreshToken = (username) => {
    const getRefreshToken = getLocalRefreshToken();
    return userRefreshToken({ username, refreshToken: getRefreshToken });
};

const axiosInstance = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = getLocalAccessToken();

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
    (res) => res,
    async (error) => {
        const originalConfig = error.config;

        if (error.response) {
            // Access Token was expired
            if (error.response.status === 401 && !originalConfig._retry) {
                originalConfig._retry = true;

                try {
                    const { user } = store.getState();
                    const username = user?.userData?.user?.username || '';
                    const rs = await refreshToken(username);
                    const { accessToken } = rs;
                    localStorage.setItem('accessToken', accessToken);

                    originalConfig.headers = {
                        ...originalConfig.headers,
                        Authorization: `Bearer ${accessToken}`,
                    };

                    return axiosInstance(originalConfig);
                } catch (err) {
                    if (err.response && err.response.data) {
                        return Promise.reject(err.response.data);
                    }

                    return Promise.reject(err);
                }
            }

            if (error.response.status === 403 && error.response.data) {
                localStorage.clear();
                window.location = '/';
                return Promise.reject(error.response.data);
            }
        }
        return Promise.reject(error);
    }
);

const endpoints = {
    login: '/auth/login', // post
    register: '/auth/register', // post,
    token: '/auth/token', // post,
    allUsers: '/allUsers', // get,
};

export const userLogin = (data) =>
    axiosInstance
        .post(`${baseURL}${endpoints.login}`, data)
        .then((res) => res.data)
        // eslint-disable-next-line no-console
        .catch((err) => err);
export const userRegister = (data) =>
    axiosInstance
        .post(`${baseURL}${endpoints.register}`, data)
        .then((res) => res.data)
        // eslint-disable-next-line no-console
        .catch((err) => err);
export const userRefreshToken = (data) =>
    axiosInstance
        .post(`${baseURL}${endpoints.token}`, data)
        .then((res) => res.data)
        // eslint-disable-next-line no-console
        .catch((err) => err);
export const getAllUsers = () =>
    axiosInstance
        .get(`${baseURL}${endpoints.allUsers}`)
        .then((res) => res.data)
        // eslint-disable-next-line no-console
        .catch((err) => err);
