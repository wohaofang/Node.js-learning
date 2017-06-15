const fs =require('fs');
const readStream = fs.createReadStream('./stream.js');
const writeStream = fs.createWriteStream('./temp11/stream.js');

readStream.on('data',function(chunk){
    writeStream.write(chunk);//当前数据流出时，写入数据
});

readStream.on('end',function(){
    writeStream.end();//当没有数据时，关闭数据流
})
