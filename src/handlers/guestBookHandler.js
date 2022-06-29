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
};

module.exports = { handleGuestBook };
