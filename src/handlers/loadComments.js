const fs = require('fs');

const loadCommentsHandler = (path) => (request, response) => {
  const { pathname } = request.url;

  const isGuestBook = pathname === '/guestbook';
  const isAddComment = pathname === '/logcomment';

  if (isAddComment || isGuestBook) {
    const comments = JSON.parse(fs.readFileSync(path, 'utf8'));
    request.guestBook = comments;
    return false;
  }
};

module.exports = { loadCommentsHandler }
