const http = require('http');

const server = http.createServer();
server.on('request',(req, res)=> {
    res.end('welcome');
})

server.listen(3000 , () => {

console.log('OK : server listing on port : 3000');

})