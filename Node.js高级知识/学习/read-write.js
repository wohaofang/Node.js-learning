

const fs = require('fs');

// fs.readFile('./read-write.js',(err,data)=>{
//     if(err){
//         console.log(err);
//         return false;
//     }
//     console.log(data.toString());
// })

// fs.writeFile('./temp11/text.txt','DingMing love GaoJuan',(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log('success');
//     }
// })
fs.readdir('./',(err,list)=>{
    if(err){
        console.log(err);
        return false;
    }
    list.forEach((item)=>{
        fs.stat(item,(err,fsstat)=>{
            if(err){
                console.log(err)
            }else{
                console.log(item)
                console.log(fsstat)
            }
        })
    })
    //console.log(list);
})