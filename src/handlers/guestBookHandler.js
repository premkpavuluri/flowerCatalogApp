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

const generateComment = (queryParams) => {
  const comment = {};
  for (const [key, value] of queryParams.entries()) {
    comment[key] = value;
  }

  const date = new Date().toLocaleString();
  return { ...comment, date };
};

const addComment = (request, response) => {
  const comment = generateComment(request.url.searchParams);
  request.guestBook.unshift(comment);

  response.statusCode = 302;
  response.setHeader('Location', '/guestbook');
  response.end('Thank you');
  return true;
};

const handleGuestBook = (guestBook) => (request, response) => {
  const { pathname } = request.url;

  if (pathname === '/logcomment' && request.method === 'GET') {
    request.guestBook = guestBook;
    return addComment(request, response);
  }

  if (pathname === '/guestbook' && request.method === 'GET') {
    request.guestBook = guestBook;
    return serveGuestBook(request, response);
  }
};

module.exports = { handleGuestBook };
