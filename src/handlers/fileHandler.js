const fs = require('fs');
const path = require('path');

const MIMETYPES = {
  '.jpg': 'image/jpeg',
  '.html': 'text/html',
  '.pdf': 'application/pdf',
  '.css': 'text/css',
  '.json': 'application/json'
}

const determineMimeType = (extension) => {
  return MIMETYPES[extension];
};

const serveFileContent = (resourcePath) => (request, response) => {
  let { pathname } = request.url;

  if (pathname === '/' && request.method === 'GET') {
    pathname = '/index.html';
  }

  const fileName = `${resourcePath}${pathname}`;

  try {
    const content = fs.readFileSync(fileName);
    const extension = path.extname(fileName);
    response.setHeader('Content-Type', determineMimeType(extension));
    response.end(content);
  } catch (error) {
    return false;
  }

  return true;
};

module.exports = { serveFileContent };
