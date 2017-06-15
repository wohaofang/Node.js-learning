
'use strict'

const fs=require('fs');
const readS=fs.createReadStream('./mkdir.js');
const writeS=fs.createWriteStream('./aa/a.js');
    // fs.mkdir('./a',function(err){
    //     console.log(err);
    // });
    // fs.rename('./a','./aa',(err)=>{
    //     console.log(err);
    // })
    readS.on('data',function(chunk){
        writeS.write(chunk);
    });
    readS.on('end',function(chunk){
        writeS.write(chunk);
    });
