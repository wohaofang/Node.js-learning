var cluster = require('cluster');
var http = require('http');
var numCPUs = require('os').cpus().length;

if (cluster.isMaster){
    console.log('[master]'+"strat master...");

    cluster.on('fork',function(worker){
        console.log('[master]'+'fork:worker'+worker.id);
    });

    cluster.on('online',function(worker){
        console.log('[master]'+'online:worker'+worker.id);
    });

    cluster.on('listenting',function(worker,address){
        console.log('master'+'listening :worker'+worker.id+',pid'+worker.process.pid+',Address:'+address.address+':'+address.port);
    });

    cluster.on('disconnect',function(worker){
        console.log('[master]'+'disconnect:worker'+worker.id);
    });

    cluster.on('exit',function(worker){
        console.log('[master]'+'exit:worker'+worker.id);
    });

    for(var i=0;i<numCPUs;i++){
        var wk = cluster.fork();
        wk.send('[master]'+'hi worker'+wk.id);
    }

    setTimeout(function(){
        for(var id in cluster.workers){
            cluster.workers[id].send('[mester]'+'send message to worker'+cluster.workers[id].id);
        }
    },3000)

    Object.keys(cluster.workers).forEach(function(id){
        cluster.workers[id].on('message',function(msg){
            console.log('[master]'+'message'+msg);
        });
    });
}else if(cluster.isWorker){
    console.log('[worker]'+"start worker ..."+cluster.worker.id);

    process.on('message',function(msg){
        console.log('[worker]'+msg);
        process.send('[worker] worker'+cluster.worker.id+'received!');
    });

    http.createServer(function(req,res){
        res.writeHead(200,{
            "content-type":"text/html"
        });
        res.end('worker'+cluster.worker.id+',PID'+process.pid);
    }).listen(3000);
}