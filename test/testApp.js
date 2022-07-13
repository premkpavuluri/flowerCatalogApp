const request = require('supertest');
const { connectHandlers } = require('../src/app.js');

const appConfig = {
  resourceRoot: './public',
  dbPath: './test/testData/db/comments.json'
};

const app = connectHandlers(appConfig);

describe('GET /bad-request', () => {
  it('Should give 404 on bad Request', (done) => {
    request(app)
      .get('/bad')
      .expect('Not Found')
      .expect(404, done)
  });
});

describe('GET /{filename}', () => {
  it('Should give home page on GET /', (done) => {
    request(app)
      .get('/')
      .expect('content-type', /html/)
      .expect('content-length', "1054")
      .expect(/<title>Flower catalog App<\/title>/)
      .expect(200, done)
  });

  it('Should give Abeliophyllym page on GET /html/abeliophyllum.html',
    (done) => {
      request(app)
        .get('/html/abeliophyllum.html')
        .expect('content-type', /html/)
        .expect('content-length', "693")
        .expect(/<title>Abeliophyllum<\/title>/)
        .expect(200, done)
    });

  it('Should give Ageratum page on GET html/ageratum.html', (done) => {
    request(app)
      .get('/html/ageratum.html')
      .expect('content-type', /html/)
      .expect('content-length', "690")
      .expect(/<title>Ageratum<\/title>/)
      .expect(200, done)
  });
});

describe('GET /guestbook', () => {
  it('Should give guestBook on GET /guestbook', (done) => {
    request(app)
      .get('/guestbook')
      .expect('content-type', /html/)
      .expect('content-length', "1945")
      .expect(/<title>Guest Book<\/title>/)
      .expect(200, done)
  });
});

const dbConfig = {
  resourceRoot: './public',
  dbPath: './test/testData/db/commentsdb.json'
};

describe('POST /logcomment', () => {
  it('Should give /guestbook on POST /logcomment', (done) => {
    request(connectHandlers(dbConfig))
      .post('/logcomment')
      .send('name=pk&comment=hi')
      .expect('Thank you')
      .expect(302, done)
  });
});
