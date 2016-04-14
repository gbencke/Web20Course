var http = require("http");

var Contador = 0;

var server = http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("Me chamaram "+Contador+ " vezes ");
  response.end();
});
 
server.listen(8001);
console.log("Estou escutando é apenas me chamar na porta 8001");

