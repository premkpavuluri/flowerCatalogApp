const fs = require('fs');

const readFile = (fileName) => {
  try {
    return fs.readFileSync(fileName);
  } catch (err) {
    return { error: "not found" };
  }
};

const loadApiDataRouter = (request, response) => {
  const { pathname } = request.url;

  if (pathname === '/api' || pathname === '/api/catalogs') {
    const appInfo = readFile('./db/app.json');
    request.appInfo = JSON.parse(appInfo);
    return false;
  }

  return false;
};

module.exports = { loadApiDataRouter };
