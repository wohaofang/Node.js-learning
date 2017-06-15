// const readline = require('readline');
// const fs = require('fs');
// const rl = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// })

// rl.on('line',(name)=>{
//     const path = `${__dirname}/${name}`;
//     fs.stat(path,(err,data)=>{
//         if(err){
//             console.log(`无法打开文件：${path}`);
//         }else{
//             fs.readFile(path,(err,data)=>{
//                 if(err){
//                     console.log('err',err);
//                     return false;
//                 }
//                 console.log(data,toString());
//             })
//         }
//     })
// })

const readline = require('readline');
const fs = require('fs');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (name) => {
    const path = `${__dirname}/${name}`;
    fs.stat(path, (err, data) => {
        if(err) {
            console.log(`无法打开文件：${path}`);
        }else {
            fs.readFile(path, (err, data) => {
                if(err) {
                    console.log('err', err);
                    return false;   
                }
                console.log(data.toString());
            });

        }
    });
});