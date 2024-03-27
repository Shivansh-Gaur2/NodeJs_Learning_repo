const http = require('http');

// function rqListener(req, res){

// }
// nodeJs recieves a request and gives us an object response 
// http.createServer(rqListener);
// http module has a method http.createServer which is 
// used to create a server
// rqListener is a function which will be executed when any request is 
//recieved by the server

const server = http.createServer((req, res) => {console.log(req)});
// this returns a server

server.listen(3000);
//telling the server to listen on port 3000