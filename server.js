const { createServer } = require('net');
const { parseRequest } = require('./src/parseRequest.js');
const { Response } = require('./src/response.js');

const handler = (request, response) => {
  response.send('Flower Catalog App');
  return true;
};

const startServer = (PORT, requestHandler, path) => {
  const server = createServer((socket) => {

    socket.on('data', (chunk) => {
      const request = parseRequest(chunk.toString());
      console.log(request.method, request.uri);
      const response = new Response(socket);
      requestHandler(request, response, path);
    });
  });

  server.listen(PORT, () => console.log(`Server listening on ${PORT}`));
};

startServer(80, handler, process.argv[2]);
