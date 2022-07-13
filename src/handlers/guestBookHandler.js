const fs = require('fs');

const formatComment = ({ name, comment, date }) => {
  return `<div>${date} ${name}:${comment}</div>`;
};

const formatComments = (comments) => {
  return comments.map(formatComment).join('');
};

const serveGuestBook = (request, response) => {
  const template = fs.readFileSync('./resources/template.html', 'utf8');
  const comments = formatComments(request.guestBook);
  const html = template.replace('__COMMENTS__', comments);

  response.setHeader('Content-Type', 'text/html');
  response.end(html);
  return true;
};

const persistComments = (comments, fileName) => {
  fs.writeFileSync(fileName, JSON.stringify(comments), 'utf8');
  return true;
};

const addComment = (request, response) => {
  const date = request.timeStamp;
  const comment = { ...request.bodyParams, date };

  request.guestBook.unshift(comment);

  persistComments(request.guestBook, request.dbPath);

  response.statusCode = 302;
  response.setHeader('Location', '/guestbook');
  response.end('Thank you');
  return true;
};

const handleGuestBook = (dbPath) => (request, response, next) => {
  const { pathname } = request.url;

  if (pathname === '/logcomment' && request.method === 'POST') {
    request.dbPath = dbPath;
    return addComment(request, response);
  }

  if (pathname === '/guestbook' && request.method === 'GET') {
    return serveGuestBook(request, response);
  }

  next();
};

module.exports = { handleGuestBook };
