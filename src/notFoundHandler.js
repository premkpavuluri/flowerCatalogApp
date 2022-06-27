const notFoundHandler = (request, response) => {
  response.statusCode = 404;
  response.send('Not Found');
  return true;
};

module.exports = { notFoundHandler };
