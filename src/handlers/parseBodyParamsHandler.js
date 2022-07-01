const parseParams = (searchParams) => {
  const params = new URLSearchParams(searchParams);
  const parsedParams = {};

  for (const [key, value] of params.entries()) {
    parsedParams[key] = value;
  }

  return parsedParams;
};

const handleParseBodyParams = (req, res, next) => {
  let payload = '';

  req.setEncoding('utf8');
  req.on('data', (chunk) => {
    payload += chunk;
  });

  req.on('end', () => {
    req.bodyParams = parseParams(payload);
    next();
  });
};

const parseBodyParams = (req, res, next) => {

  if (req.method === 'POST') {
    return handleParseBodyParams(req, res, next);
  }

  next();
};

module.exports = { parseBodyParams };
