const app = require('../app');
const request = require('supertest');


describe('GET /user', function() {
    it('?', function(done) {
      request(app)
        .get('/user/1')
        .expect(function(res) {
          res.body.id = 1;
          res.body.name = "Tulla Luana";
        })
    });
  });
