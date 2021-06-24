var options = require('./envConfig.js'), fs = require('fs'), path = require('path');
var processCmd = require('child_process');
const Ssh = require('ssh2');
console.log('上传中...');

function argvsList() {
    console.log(process.argv)
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
if (!tempObj.env || !tempObj.pathToRemoteFile || !tempObj.pathToLocalFile || !tempObj.pName) {
    console.log('必须包含 env、pathToRemoteFile、Pname 和 pathToLocalFile 参数')
    return
}

// const dirList= tempObj.pathToRemoteFile.split('/').filter(i=>i)
const filedir=tempObj.pathToLocalFile.split('/')
fs.mkdirSync(`./${tempObj.pName}`);
console.log(`${tempObj.pathToLocalFile}`,`./${tempObj.pName}/${filedir[filedir.length-1]}`)
fs.copyFileSync(`${tempObj.pathToLocalFile}`,`./${tempObj.pName}/${filedir[filedir.length-1]}`)
var cmd = `tar -zcvf ./${tempObj.pName}.tar.gz ./${tempObj.pName}`;
let buildProject = processCmd.exec(cmd, function(error, stdout, stderr) {
    console.log("error:"+error);
    console.log("stdout:"+stdout);
    console.log("stderr:"+stderr);

});
buildProject.stdout.pipe(process.stdout);
buildProject.on('exit', () => {
    let sshClient = new Ssh.Client();
    uploadProject(sshClient)
// 利用 sftp 方法上传文件

});

function uploadProject(sshClient) {
    sshClient
        .on('ready', () => {
            sshClient.sftp((err, sftp) => {
                sftp.fastPut(
                    `./${tempObj.pName}.tar.gz`, // 本地 assets.tar.gz 文件路径
                    `${tempObj.pathToRemoteFile}/${tempObj.pName}.tar.gz`, // 服务器 assets.tar.gz 文件路径
                    {},
                    (err, result) => {
                        deployProject(sshClient)
                    }
                );
            });
        })
        .connect(options[tempObj.env]);
}

function deployProject(sshClient) {
    sshClient.shell((err, stream) => {
        stream
            .end(
                // cd 服务器存放 assets.tar.gz 文件的目录
                // 将原项目 documents 文件夹，移动到 bak 文件夹中，并打上时间戳
                // 解压 assets.tar.gz
                // 将解压后的文件，移动到原项目 documents 文件夹中（这里的路径根据实际情况调整）
                // 删除 压缩包 assets.tar.gz（慎重）
                // 删除 assets.tar.gz 解压后文件（慎重）
                // 退出
                `
          cd ${tempObj.pathToRemoteFile}
          tar -zxvf ./${tempObj.pName}.tar.gz
          exit
        `
            )
            .on('data', (data) => {
                // 输出部署时的信息
                console.log('data: ', data.toString());
            })
            .on('close', () => {
                console.log('close');
                sshClient.end();
            });
    });
}
