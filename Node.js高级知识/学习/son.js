process.on('message',function(m){
    console.log('Son Listen:',m);
});
process.send({
    Hello:'conan'
})