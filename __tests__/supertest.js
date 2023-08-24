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

describe('POST /User', function () {
  it('responds with right password', () => {
    request(server)
      .post('/User')
      .send({
        username: 'john',
        password: '12345',
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      // .then ( (response) => {
      //   expect(response.body).toEqual(true)
      // })
      
  });

  it('responds with wrong password', () => {
    request(server)
      .post('/User')
      .send({
        username: 'john',
        password: '123',
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      // .then ( (response) => {
      //   expect(response.body).toEqual(false)
      // })
      
  });
});

describe('POST /User/signup', function () {
  it('responds with existed username', () => {
    request(server)
      .post('/User/signup')
      .send({
        username: 'john',
        password: '12345',
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      // .then ( (response) => {
  
      //   expect(response.body.message).toEqual("User already exist")
      // })
      
  });

  it('responds with new username', () => {
    request(server)
      .post('/User/signup')
      .send({
        username: 'Franck',
        password: '12345',
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      // .then ( (response) => {
      //   expect(response.body.username).toEqual(username)
      // })
      
  });
});
