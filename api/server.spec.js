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

describe('create user', () => {
  it('[POST] /api/users works', () => {
    return request(server)
      .post('/api/users')
      .expect(201)
      .then(res => {
        expect(res.body).toEqual({ content: 'up' })
      })
  })
})