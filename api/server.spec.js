const server = require('./server');
const request = require('supertest');

describe('server', () => {
  it('[GET] / works', () => {
    return request(server)
      .get('/')
      .expect(200)
      .expect('Content-Length', '16')
      .expect('Content-Type', /json/)
      .then(res => {
        expect(res.body).toEqual({ content: 'up' })
      })
  })
})

describe('get all users', () => {
  it('[GET] /api/users works', () => {
    return request(server)
      .get('/api/users')
      .expect(200)
      .then(res => {
        expect(res.body).toBeInstanceOf(Array);
      })
  })
})