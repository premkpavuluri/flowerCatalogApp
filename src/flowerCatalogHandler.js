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

  if (uri === '/catalog') {
    return catalogHandler(request, response);
  }
};

module.exports = { flowerCatalogHandler };
