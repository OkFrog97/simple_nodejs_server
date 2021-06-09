const http = require('http');
const pid = process.pid;

http
    .createServer((req, res) => {
        for (let i = 0; i < 1e8; i++){
        }
        res.end('Hello, world!');
    })
    .listen(8800, ()=> {
        console.log(`Node is running: ${new Date().toLocaleString()}.\nPID: ${pid}`);
    });

