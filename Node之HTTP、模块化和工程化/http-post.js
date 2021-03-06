const http= require('http');
const url= require('url');
const querystring = require('querystring');

const hostname = '127.0.0.1';
const port = 8888;

const server = http.createServer((req,res)=>{
    var theUrl = url.parse(req.url);
    var getReq = querystring.parse(theUrl.query);
    console.log('method:',req.method);
    console.log('url:',req.url);
    console.log('theUrl:',req.theUrl);
    
    if(req.method == 'POST'){
        var body ='';
        req.on('data',function(data){
            body+=data;
        });
        req.on('end',function(){
            var POST = querystring.parse(body);
            console.log('POST',POST);
        });
    }else if(req.method =='GET'){
        console.log('getReq:',getReq);
    }
   
    res.statusCode =  200;
    res.setHeader('Content-Type','text/plain');
    res.end('Hello World\n');
})

server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
});