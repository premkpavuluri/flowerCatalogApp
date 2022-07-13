const logRequestHandler = (option) => (request, response, next) => {
  if (!option) {
    return next();
  }

  const timeStamp = new Date().toLocaleString();
  request.timeStamp = timeStamp;

  console.log(request.timeStamp, request.method, request.url);

  next();
};

module.exports = { logRequestHandler };
