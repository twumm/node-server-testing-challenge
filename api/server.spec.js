const server = require('./server');
const request = require('supertest');

describe('server', () => {
  it('[GET] / works', () => {
    return request(server)
      .get('/')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect('Content-Length', '12')
      .then(res => {
        expect(res.body).toEqual('<h3>Welcome to the test server</h3>');
      })
  })
})