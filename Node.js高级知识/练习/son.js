process.on('message',function(m){
    console.log(' My name is'+m+', I am a man, I am born at 2017-04-17');
});
process.send({
   Hello:'conan'
})