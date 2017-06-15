

const fs = require('fs');
fs.stat('./open-read-write.js',function(err,stat){
    if(stat && stat.isFile){
        fs.open('./open-read-write.js','a',(err,fd)=>{
            
            var readB = new Buffer(stat.size);// 创建一个与文件大小相同的缓冲区
            var offset = 0;
            var len = stat.size;
            var filePostion = 0;
            // fs.read(fd,readB,offset,len,filePostion,(err,readByte,readResult)=>{
            //     //文件内容
            //     console.log(readResult.toString());
            // });
            fs.write(fd,'text',(err)=>{})
        })
    }
})