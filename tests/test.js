const app = require('../app');
const request = require('supertest');
var chai = require('chai');

  describe('GET /user', function() {
    it('responds with json', function() {
      return request(app)
        .get('/user/1')
        .set('Accept', 'application/json')
        .expect(201)
        .then(response => {
          assert(response.body.name, 'Tulla Luana')

        })
    });
  });
