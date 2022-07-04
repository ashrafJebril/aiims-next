import axios from 'axios';
const instance = axios.create({
    baseURL: 'http://localhost:1338/api/'
});

instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.url = config.url + "?populate=deep"
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});


class Http {
    async get(url) {
        return await instance.get(url);
    }
}

const http = new Http();
export default http