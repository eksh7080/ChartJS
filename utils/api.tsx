import axios, { AxiosRequestConfig } from 'axios';

const BASE_URL = 'http://localhost:3001/';

const axiosConfig: AxiosRequestConfig = {
    baseURL: BASE_URL,
};

export const API = axios.create(axiosConfig);
