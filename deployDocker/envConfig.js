var path = require('path');
var fs = require('fs');

module.exports = {
    dev: {
        host: '47.94.193.216',
        port: '22',
        username: 'root',
        privateKey: fs.readFileSync('./id_rsa')
    },
    test: {
        host: '172.20.11.81',
        port: '22',
        username: 'ken',
        privateKey: './key',
        env: ' test-static.tsign.cn'
    },
    sml: {
        host: '172.24.7.1',
        port: '22',
        username: 'ken',
        privateKey: './key',
        env: ' test-static.tsign.cn'
    },
    pro: {
        host: '172.28.91.237',//172.28.91.238
        port: '22',
        username: 'ken',
        privateKey: './key',
        env: ' test-static.tsign.cn'
    },
}
