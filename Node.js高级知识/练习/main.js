const chilP = require('child_process');
var n = chilP.fork('./son.js');

n.on('message',function(m){
    console.log('I am'+m+', I am bron at 2017-04-17')
});

n.send({
    hello:'son'
})