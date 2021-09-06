import axios from 'axios';

axios.interceptors.request.use(config => {
    config.headers.Accept = 'application/json';
    config.withCredentials = true;
    return config;
});

axios.interceptors.response.use(
    res => {
        const { data = {}, config } = res;

        // 正常 + 没开通服务号，内部处理，不用提示
        if (+data.result === 1) {
            return data;
        }


        if (+data.result === 109) {
            return data;
        }

        // 非1逻辑由业务内部通过try catch处理
        return data;
    },
    function (error) {
        return Promise.resolve({
            result: (error && error.result) || 404,
            error_msg: error.error_msg || '网络错误',
        });
    },
);
export default axios;
