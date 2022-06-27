const { createServer } = require('net');
const { parseRequest } = require('./src/parseRequest.js');
const { Response } = require('./src/response.js');
const { flowerCatalogHandler } = require('./src/flowerCatalogHandler.js');

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

startServer(80, flowerCatalogHandler, process.argv[2]);
