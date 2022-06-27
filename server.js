const { createServer } = require('net');
const { parseRequest } = require('./src/parseRequest.js');
const { Response } = require('./src/response.js');
const { flowerCatalogHandler } = require('./src/flowerCatalogHandler.js');
const { serveFileContent } = require('./src/fileHandler.js');
const { notFoundHandler } = require('./src/notFoundHandler.js');
const { handleGuestBook } = require('./src/guestBookHandler.js');

const handle = (handlers) => {
  return (request, response, path) => {
    return handlers.some(handler => handler(request, response, path));
  }
};

const startServer = (PORT, requestHandler, path) => {
  const server = createServer((socket) => {

    socket.on('data', (chunk) => {
      const request = parseRequest(chunk.toString());
      console.log(request.method, request.uri, request.queryParams);
      const response = new Response(socket);
      requestHandler(request, response, path);
    });
  });

  server.listen(PORT, () => console.log(`Server listening on ${PORT}`));
};

const handlers = [serveFileContent, flowerCatalogHandler, handleGuestBook, notFoundHandler];

startServer(80, handle(handlers), process.argv[2]);
