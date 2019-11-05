var request = require('supertest');
var app = require('../index.js');
describe('GET /hi', function() {
 it('respond with Hello World', function(done) {
 //navigate to root and check the the response is "Hello World"
 request(app).get('/hi').expect('Hello World', done);
 });
});