const fs = require('fs');

const MIMETYPES = {
  'png': 'image/png',
  'html': 'text/html',
  'pdf': 'application/pdf'
}

const determineMimeType = (fileName) => {
  const fileType = fileName.slice(fileName.lastIndexOf('.') + 1);
  return MIMETYPES[fileType];
};

const serveFileContent = ({ uri }, response, path) => {
  if (uri === '/') {
    uri = '/index.html';
  }

  const fileName = `${path}${uri}`;
  if (!fs.existsSync(fileName)) {
    return false;
  }

  response.setHeaders('Content-Type', determineMimeType(fileName));
  const content = fs.readFileSync(fileName);
  response.send(content);

  return true;
};

module.exports = { serveFileContent };
