const catalogsApiHandler = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.end(JSON.stringify(request.appInfo.catalogs));

  return true;
};

const commentsApiHandler = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.end(JSON.stringify(request.guestBook));

  return true;
};

const homeApiHandler = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.end(JSON.stringify(request.appInfo));

  return true;
};

const apiRouter = (request, response) => {
  const { pathname } = request.url;

  if (pathname === '/api') {
    console.log(request.appInfo);
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
