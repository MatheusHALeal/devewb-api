const app = require('../app.js'),
    request = require('supertest'),
    chai = require('chai'),
    expect = chai.expect;

request(app)
  .get('/user')
  .expect('Content-Type', /json/)
  .expect('Content-Length', '15')
  .expect(200)
  .end(function(err, res) {
    if (err) throw err;
  });
