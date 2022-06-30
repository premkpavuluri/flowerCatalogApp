const catalogsApiHandler = (request, response) => {
  const content = { catalogs: ["abeliophyllym", "ageratum"] };

  response.setHeader('Content-Type', 'application/json');
  response.end(JSON.stringify(content));

  return true;
};

const commentsApiHandler = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.end(JSON.stringify(request.guestBook));

  return true;
};

const homeApiHandler = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.end('{"appName":"FlowerCatalogApp"}');

  return true;
};

const apiRouter = (request, response) => {
  const { pathname } = request.url;

  if (pathname === '/api') {
    return homeApiHandler(request, response);
  }

  if (pathname === '/api/comments') {
    return commentsApiHandler(request, response);
  }

  if (pathname === '/api/catalogs') {
    return catalogsApiHandler(request, response);
  }
};

module.exports = { apiRouter };
