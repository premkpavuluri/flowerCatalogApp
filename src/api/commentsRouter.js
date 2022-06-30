const commentsRouter = (request, response) => {
  const { pathname } = request.url;

  if (pathname === '/comments') {
    response.statusCode = 302;
    response.setHeader('Location', 'database/comments.json');
    response.end('');
    return true;
  }
};

module.exports = { commentsRouter };
