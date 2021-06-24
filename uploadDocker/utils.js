var http = require('http')
// exports.httpKey=function(){
//
// }
var post_options = {
    host: 'http://kmsmain.testk8s.tsign.cn ',
    // port: '80',
    path: '/decryptByMainKey',
    method: 'POST',
    headers: {
        // 'Content-Type': 'application/x-www-form-urlencoded',
        // 'Content-Length': Buffer.byteLength(post_data)
    }
};
http.request(post_options, function (res) {
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log('Response: ' + chunk);
    });
});
