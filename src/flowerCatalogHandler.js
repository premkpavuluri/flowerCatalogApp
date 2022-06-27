const homePageHandler = (request, response) => {
  response.send('Flower Catalog App Home page');
  return true;
};

const flowerCatalogHandler = (request, response) => {
  const { uri } = request;

  if (uri === '/') {
    return homePageHandler(request, response);
  }
};

module.exports = { flowerCatalogHandler };
