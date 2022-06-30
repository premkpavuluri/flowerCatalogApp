const logRequestHandler = (request, response) => {
  const timeStamp = new Date().toLocaleString();
  request.timeStamp = timeStamp;

  console.log(request.timeStamp, request.method, request.url);

  return false;
};

module.exports = { logRequestHandler };
