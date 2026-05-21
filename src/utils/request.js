import axios from 'axios';
import Config from '@/settings'
import store from '../store'
const service = axios.create({
    // baseURL: 'http://192.168.1.6:8888/',
    // baseURL: 'http://demo.hrsyabc.com:8888/',
    baseURL: 'http://192.168.0.105:8888/',
    // baseURL: 'http://localhost:8888/',
    timeout: Config.timeout
});
service.interceptors.request.use(
    config => {
        if (store.getters.token) {
            config.headers['Authorization'] = getToken()
        }
        config.headers['Content-Type'] = 'application/json'
        return config;
    },
    error => {
        console.log(error);
        return Promise.reject();
    }
);

service.interceptors.response.use(
    response => {
        if (response.status === 200) {
            console.log(response)
            return response.data;
        } else {
            Promise.reject();
        }
    },
    error => {
        console.log(error);
        return Promise.reject();
    }
);

export default service;
