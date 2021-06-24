var fs=require('fs')
fs.mkdirSync('./a')
fs.copyFileSync('./dist/sftp.js','./a/utils.js')
// var process = require('child_process');

// var cmd = ' tar -zcvf ./dist.tar.gz ./dist';
// process.exec(cmd, function(error, stdout, stderr) {
//     console.log("error:"+error);
//     console.log("stdout:"+stdout);
//     console.log("stderr:"+stderr);
// });
