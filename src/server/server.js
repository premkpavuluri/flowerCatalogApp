const http = require('http');

const startServer = (PORT, router) => {
  const server = http.createServer((request, response) => {

    console.log(request.method, request.url);

    router(request, response);
  });

  server.listen(PORT, () => console.log(`Server listening on ${PORT}`));
};

module.exports = { startServer };
