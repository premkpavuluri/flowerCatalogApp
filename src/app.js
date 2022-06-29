const { createRoutes } = require('./server/router.js');
const { serveFileContent } = require('./handlers/fileHandler.js');
const { notFoundHandler } = require('./handlers/notFoundHandler.js');
const { handleGuestBook } = require('./handlers/guestBookHandler.js');

const createRouter = ({ path, guestBook }) => {
  const handlers = [handleGuestBook(guestBook), serveFileContent(path), notFoundHandler];
  return createRoutes(handlers);
};

module.exports = { createRouter };
