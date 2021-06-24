let OSS = require('ali-oss'), path = require('path'), fs = require('fs'), abs = '',bucketName='';

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

async function listBuckets(agrv) {//查看Bucket列表
    try {
        // let result = await client.listBuckets();
        // console.log(result.buckets,__dirname)
        // const firstBucket=result.buckets[1].name
        // await fileList(firstBucket)
        await putFile(agrv)
        // await getFile(firstBucket,'index.html')
        // await deleteFile(firstBucket,'fs/index.js')
        // await putAllFiles(firstBucket,'../fs/')
    } catch (err) {
        console.log(err)
    }
}

async function fileList() {//查看文件列表
    client.useBucket(bucketName);
    try {
        let result = await client.list({
            'max-keys': 5//默认返回最多100个
        })
        console.log(result.objects)
    } catch (err) {
        console.log(err)
    }
}

async function putFile(src,dist) {//上传文件.bucketName,completePath
    client.useBucket(bucketName);
    try {
        let result = await client.put(dist, src);
        console.log(result);
    } catch (e) {
        console.log(e);
    }
}

async function getFile(bucket, fileName) {//下载文件
    client.useBucket(bucketName);
    const localPath = path.resolve(__dirname, './test.txt')
    try {
        let result = await client.get(fileName, localPath);
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

async function deleteFile(bucket, fileName) {//删除文件
    client.useBucket(bucketName);
    try {
        let result = await client.delete(fileName);
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}


async function putAllFiles(src,dist) {
    var docs = fs.readdirSync(src);
    docs.forEach(function(doc){
        var _src = src + '/' + doc,
            _dist = dist + '/' + doc;
        var st = fs.statSync( _src);
        // 判断是否为文件
        if( st.isFile()&&doc!=='.DS_Store' ){
            putFile(_src,_dist);
            // console.log(_src+'是文件',_dist)
        }
        // 如果是目录则递归调用自身
        else if( st.isDirectory() ){
            // console.log(_src+'是文件夹')
            putAllFiles( _src,_dist);
        }
    })
}

async function putfolder(folderName,src){
    client.useBucket(bucketName);
    try {
        let result = await client.put(folderName, src);
        console.log(result);
    } catch (e) {
        console.log(e);
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
    abs=path.resolve(__dirname,tempObj.absoultPath)
    bucketName=tempObj.bucketName || ''
    return tempObj
}

const agements = argvsList()
// {
//     bucketName:'',
//     absoultPath:'',
//     relativePath:'',
// }
if(agements.folderName)putfolder(agements.folderName,abs)
else putAllFiles(abs,'dist')
