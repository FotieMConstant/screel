// this is the test file, all the tests for the enpoint will be writting in here
// we use chai for tests on dev-around api
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

let server = require('../server');


chai.use(chaiHttp);
