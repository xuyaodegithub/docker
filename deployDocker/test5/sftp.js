var fs = require('fs');
var sftp = require('sftp-node');
var options = require('./envConfig.js')
console.log('上传中...');
function argvsList() {
    const processArgsArr = process.argv.filter(item => {
        return item.includes('=')
    })

    const tempObj = {}
    processArgsArr.forEach(item => {
        const itemArray = item.split('=')
        tempObj[itemArray[0]] = itemArray[1] || ''
    })
    return tempObj
}

var tempObj = argvsList()
if (!tempObj.env || !tempObj.pathToRemoteFile || !tempObj.pathToLocalFile) {
    console.log('必须包含 env、pathToRemoteFile 和 pathToLocalFile 参数')
    return
}

sftp.upload(options[tempObj.env], tempObj.pathToRemoteFile, tempObj.pathToLocalFile, function (err, res) {
    if (err) console.log('err: ' + err);
    else {
        console.log('上传成功啦！！');
    }
});
