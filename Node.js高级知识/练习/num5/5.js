const os=require('os');
const shilProcess= require('child_process');
const readline =require('readline');

console.log(`we have ${os.cpus().length} cpu`);
console.log(`free mem is ${parseInt(os.freemem()/1024/1024)}MB`);

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.on('line',(order)=>{
    chileProcess.exec(order,function(err,stdout,stderr){
        if(error){
            console.log(error.stack);
            console.log('Error code:'+errpr.code);
        }
        console.log('Child Process STDOUT'+stdout);
        console.log(`free mem is ${parseInt(os.freemem()/1024/1024)}MB`)
    })
})