var childP = require('child_process');
var n = childP.fork('./son.js');

n.on('message',function(m){
    console.log('Main Listen:',m);
});

n.send({
    hello:'son'
});