const express = require('express');
const request = require('supertest');

const server = 'http://localhost:3000';

describe('GET /favorite', function () {
  it('responds with json', (done) => {
    request(server)
      .get('/Favorite')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

describe('POST /Favorite/Add', function () {
  it('responds with json', (done) => {
    request(server)
      .post('/Favorite/Add')
      //name: 'RadhaKrishn',
      .send({
        name: 'show.name',
        vote_average: 1,
        first_air_date: 'show.first_air_date',
        overview: 'show.overview',
        poster_path: 'show.poster_path',
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
