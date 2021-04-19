let OSS = require('ali-oss'),path=require('path'),fs=require('fs');

let client = new OSS({
    region: 'oss-cn-hangzhou',
    accessKeyId: 'LTAI5tMVidqb9KC6beoj5GCo',
    accessKeySecret: 'CRQ9Th7262DCULdD0ir222MHuYA0tc',
    // internal:true,//配合region使用。如果指定internal为true，则访问内网节点。
    // secure:true,//配合region使用。如果指定secure为true，则使用HTTPS访问。
    // endpoint:'www.xuyaohtml.top',//如果指定了endpoint，如http://oss-cn-hangzhou.aliyuncs.com，则region会被忽略，endpoint可以指定为HTTPS，也可以是IP的形式。
    // cname:true,//配合endpoint使用。如果指定cname为true，则将endpoint视为用户绑定的自定义域名。
    // bucket:true,//如果未指定bucket，则进行object相关的操作时需要先调用useBucket接口（仅需要调用一次）。
    // timeout:true,//指定访问OSS的API的超时时间，默认值为60000，单位为毫秒。
});

async function listBuckets (agrv) {//查看Bucket列表
    try {
        // let result = await client.listBuckets();
        // console.log(result.buckets,__dirname)
        // const firstBucket=result.buckets[1].name
        // await fileList(firstBucket)
        await putFile(agrv)
        // await getFile(firstBucket,'index.html')
        // await deleteFile(firstBucket,'fs/index.js')
        // await putAllFiles(firstBucket,'../fs/')
    } catch(err) {
        console.log(err)
    }
}
async  function fileList (bucket) {//查看文件列表
    client.useBucket(bucket);
    try {
        let result = await client.list({
            'max-keys': 5//默认返回最多100个
        })
        console.log(result.objects)
    } catch (err) {
        console.log (err)
    }
}
async function putFile(agrv){//上传文件.bucketName,completePath
    client.useBucket(agrv.bucketName);
    const completePath=path.resolve(agrv.absoultPath,agrv.relativePath)
    const idx=completePath.lastIndexOf('/') > -1 ? completePath.lastIndexOf('/') :completePath.lastIndexOf('\\')
    const fileName=completePath.slice(idx+1)
    console.log(completePath)
    try {
        let result = await client.put(fileName, completePath);
        console.log(result);
    } catch (err) {
        console.log (err);
    }
}
async function getFile(bucket,fileName){//下载文件
    client.useBucket(bucket);
    const localPath=path.resolve(__dirname,'./test.txt')
    try {
        let result = await client.get(fileName,localPath);
        console.log(result);
    } catch (err) {
        console.log (err);
    }
}
async function deleteFile(bucket,fileName){//删除文件
    client.useBucket(bucket);
    try {
        let result = await client.delete(fileName);
        console.log(result);
    } catch (err) {
        console.log (err);
    }
}


async function putAllFiles(bucket,dirname){
    const paths=path.resolve(__dirname,dirname)
    client.useBucket(bucket);
    fs.readdir(paths, (err,files)=>{
        if(err)return console.error(err)
        files.forEach(async (file,idx)=>{
            const filePath=path.resolve(paths,`./${file}`)
            const isFile=await isFiles(filePath)
            if(isFile)await putFile(bucket,)
        })
    })
}

async function isFiles(files){
    fs.stat(files,(err,stats)=>{
        if(err)return console.error(err)
        return stats.isFile()
    })
}
// console.log(process.env.MODE,process.argv)
function argvsList(){
    const processArgsArr = process.argv.filter(item => {
        return item.includes('=')
    })

    const tempObj = {}
    processArgsArr.forEach(item => {
        const itemArray = item.split('=')
        tempObj[itemArray[0]] = itemArray[1] || ''
    })
    console.log(tempObj)
    return tempObj
}
const agements=argvsList()
// {
//     bucketName:'',
//     absoultPath:'',
//     relativePath:'',
// }
listBuckets(agements)
