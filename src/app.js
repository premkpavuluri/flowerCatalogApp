const { createRoutes } = require('./server/router.js');
const { serveFileContent } = require('./handlers/fileHandler.js');
const { notFoundHandler } = require('./handlers/notFoundHandler.js');
const { handleGuestBook } = require('./handlers/guestBookHandler.js');
const { loadCommentsHandler } = require('./handlers/loadComments.js');

const createRouter = ({ path, dbPath }) => {
  const handlers = [
    loadCommentsHandler(dbPath),
    handleGuestBook,
    serveFileContent(path),
    notFoundHandler
  ];

  return createRoutes(handlers);
};

module.exports = { createRouter };
