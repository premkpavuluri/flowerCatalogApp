const { serveFileContent } = require('./handlers/fileHandler.js');
const { notFoundHandler } = require('./handlers/notFoundHandler.js');
const { createRoutes } = require('./server/router.js');

const createRouter = (resource) => {
  const handlers = [serveFileContent(resource), notFoundHandler];
  return createRoutes(handlers);
};

module.exports = { createRouter };
