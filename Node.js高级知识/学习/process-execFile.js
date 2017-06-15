var childProcess = require('child_process');
var path = ".";
childProcess.execFile('ls',['-l',path],function(err,result){
    console.log(result);
})