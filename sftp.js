var fs = require('fs');
var path = require('path');
var sftp = require('sftp-node');

var options = {
    host: '47.94.193.216',
    port: '22',
    username: 'root',
    privateKey: path.resolve(__dirname,'./testFile/id_rsa')
};

sftp.upload(options, '/root/app.js', 'app.js', function(err,res){
    if(err) console.log('err: '+err);
    else{
        console.log('res: '+res);
    }
});
