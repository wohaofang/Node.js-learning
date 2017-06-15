const http= require('http');

const hostname = '127.0.0.1';
const port = 8888;

const server = http.createServer((req,res)=>{
    console.log(req.method);
    console.log(req.url);
    if(req.url === '/wrong'){
        console.log.log(haha);
    }


    res.statusCode =  200;
    res.setHeader('Content-Type','text/plain');
    res.end('Hello World\n');
})

server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
});