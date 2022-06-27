const homePageHandler = (request, response) => {
  response.send('Flower Catalog App Home page');
  return true;
};

const catalogHandler = (request, response) => {
  const { queryParams } = request;
  const { name } = queryParams;

  if (!name) {
    response.send('Invalid flower catalog');
    return true;
  }

  response.send(`${name}'s page`);
  return true;
};

const flowerCatalogHandler = (request, response) => {
  const { uri } = request;

  if (uri === '/') {
    return homePageHandler(request, response);
  }

  if (uri === '/catalog') {
    return catalogHandler(request, response);
  }
};

module.exports = { flowerCatalogHandler };
