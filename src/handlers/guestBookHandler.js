const fs = require("fs");

const fetchComments = () => {
  return JSON.parse(fs.readFileSync('database/comments.json', 'utf8'));
};

const dateTimeStamp = () => {
  return new Date().toLocaleString();
};

const generateComments = (comments) => {
  return comments.map(({ date, name, comment }) => {
    return `<div>${date}  ${name} : ${comment}</div>`;
  }).join('');
};

const writeFile = (fileName, content) => {
  fs.writeFileSync(fileName, content, 'utf8');
  return true;
};

const serveGuestBook = (request, response) => {
  const comments = generateComments(fetchComments());
  const template = fs.readFileSync('./resources/gbTemplate.html', 'utf8');
  const html = template.replace('__COMMENTS__', comments);

  response.setHeaders('Content-Type', 'text/html');
  response.send(html);
  return true;
};

const addComment = (request, response) => {
  const comments = fetchComments();
  const date = dateTimeStamp();

  const { queryParams: { name, comment } } = request;
  comments.unshift({ date, name, comment });

  writeFile('database/comments.json', JSON.stringify(comments));

  response.statusCode = 302;
  response.setHeaders('Location', '/guestbook');
  response.send('Thank you');
  return true;
};

const handleGuestBook = (request, response) => {
  const { uri } = request;

  if (uri === '/guestbook') {
    return serveGuestBook(request, response);
  }

  if (uri === '/logcomment') {
    return addComment(request, response);
  }
};

module.exports = { handleGuestBook };
