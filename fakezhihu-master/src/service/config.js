
import http from 'http';
import https from 'https';

export default {
    // 自定义请求头
    headers: {
        post: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          },
          'Content-Type': 'application/json;charset=UTF-8',
          'X-Requested-With': 'fetch'
    },

    // 设置超时
    timeout: 10000,

    // 分别在node.js中用于定义在执行http和https时使用的自定义代理，默认不启用
    httpAgent: new http.Agent({keepAlive: true}),
    httpsAgent: new https.Agent({keepAlive: true}),

}
