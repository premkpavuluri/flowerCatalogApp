const logRequestHandler = (request, response, next) => {
  const timeStamp = new Date().toLocaleString();
  request.timeStamp = timeStamp;

  console.log(request.timeStamp, request.method, request.url);

  return next();
};

module.exports = { logRequestHandler };
