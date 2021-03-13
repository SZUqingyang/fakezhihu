module.exports = {
    devServer: {
        proxy: {
            '/users': {
                target: 'http://127.0.0.1:8081',
            },
            '/articles': {
                target: 'http://127.0.0.1:8081',
            },
        }
    }
}