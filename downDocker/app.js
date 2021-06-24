let OSS = require('ali-oss'), path = require('path'), fs = require('fs'), abs = '',bucketName='',localPath='';

let client = new OSS({
    region: 'oss-cn-hangzhou',
    accessKeyId: '',
    accessKeySecret: '',
    // internal:true,//配合region使用。如果指定internal为true，则访问内网节点。
    // secure:true,//配合region使用。如果指定secure为true，则使用HTTPS访问。
    // endpoint:'www.xuyaohtml.top',//如果指定了endpoint，如http://oss-cn-hangzhou.aliyuncs.com，则region会被忽略，endpoint可以指定为HTTPS，也可以是IP的形式。
    // cname:true,//配合endpoint使用。如果指定cname为true，则将endpoint视为用户绑定的自定义域名。
    // bucket:true,//如果未指定bucket，则进行object相关的操作时需要先调用useBucket接口（仅需要调用一次）。
    // timeout:true,//指定访问OSS的API的超时时间，默认值为60000，单位为毫秒。
});

async function getFile(filePath) {//下载文件
    client.useBucket(bucketName);
    // const localPath = path.resolve(__dirname, './dist.tar.gz')
    try {
        let result = await client.get(filePath, localPath);
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}
// console.log(process.env.MODE,process.argv)
function argvsList() {
    const processArgsArr = process.argv.filter(item => {
        return item.includes('=')
    })

    const tempObj = {}
    processArgsArr.forEach(item => {
        const itemArray = item.split('=')
        tempObj[itemArray[0]] = itemArray[1] || ''
    })
    bucketName=tempObj.bucketName || ''
    localPath=tempObj.localPath
    return tempObj
}

const agements = argvsList()
getFile(agements.filePath)
