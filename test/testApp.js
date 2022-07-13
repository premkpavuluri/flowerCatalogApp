const request = require('supertest');
const { connectHandlers } = require('../src/app.js');

const appConfig = {
  resourceRoot: './public',
  dbPath: './db/comments.json'
};

const app = connectHandlers(appConfig);

describe('Not found handler', () => {
  it('Should give 404 on bad Request', (done) => {
    request(app)
      .get('/bad')
      .expect('Not Found')
      .expect(404, done)
  });
});

describe('serveFileContent', () => {
  it('Should give home page on GET /', (done) => {
    request(app)
      .get('/')
      .expect('content-type', /html/)
      .expect(/<title>Flower catalog App<\/title>/)
      .expect(200, done)
  });

  it('Should give Abeliophyllym page on GET /html/abeliophyllum.html',
    (done) => {
      request(app)
        .get('/html/abeliophyllum.html')
        .expect('content-type', /html/)
        .expect(/<title>Abeliophyllum<\/title>/)
        .expect(200, done)
    });

  it('Should give Ageratum page on GET html/ageratum.html', (done) => {
    request(app)
      .get('/html/ageratum.html')
      .expect('content-type', /html/)
      .expect(/<title>Ageratum<\/title>/)
      .expect(200, done)
  });
});
