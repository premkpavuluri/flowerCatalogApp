const http = require('http');

const startServer = (PORT, router) => {
  const server = http.createServer((request, response) => {
    const { host } = request.headers;

    request.url = new URL(`http://${host}${request.url}`);
    console.log(request.method, request.url.pathname);

    router(request, response);
  });

  server.listen(PORT, () => console.log(`Server listening on ${PORT}`));
};

module.exports = { startServer };
