const catalogsRouter = (request, response) => {
  const { accept } = request.headers;
  const { pathname } = request.url;

  const onAccept = accept === 'application/json';
  if (pathname === '/catalogs') {
    response.statusCode = 301;
    response.setHeader('Location', '/database/catalogs.json');
    response.end('');
    return true;
  }
};

module.exports = { catalogsRouter };
