const compressing = require('compressing');
const path=require('path')
// const filepath=path.resolve(__dirname,'./dist')
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
async function addZip(){
    compressing.zip.compressDir(filepath, __dirname+'/dist.zip')
        .then(() => {
            console.log('success');
        })
        .catch(err => {
            console.error(err);
        });
}
async function unaddZip(argv){
    const compltePath=path.resolve(argv.absoultPath,argv.relativePath)
    const name=compltePath.slice(0,compltePath.lastIndexOf('.'))
    console.log(compltePath,name)
    // 解压缩
    compressing.zip.uncompress(compltePath, name)
        .then(() => {
            console.log('success');
        })
        .catch(err => {
            console.error(err);
        });
}
console.log(process.env.MODE,process.argv,12334)
const argv=argvsList()
// {
//     absoultPath:'',
//     relativePath:'',
//     mode:''
// }
if(!argv.mode || argv.mode==='addzip')addZip(argv);
else unaddZip(argv)
