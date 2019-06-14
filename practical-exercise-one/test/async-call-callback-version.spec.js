var should = require('chai').should();
var expect = require('chai').expect;

var serviceModule = require('../src/async-call-callback-version');

describe("Test async call callback version", function() {
  describe("Test callOneService", function() {
    it("should return 1", function(done) {
      serviceModule.callOneService(function(undefined, num) {
        expect(num).to.equal(1);
        done();
      });
    });
  });

  describe("Test callTwoService", function() {
    it("should return 2", function(done) {
      serviceModule.callTwoService(function(undefined, num) {
        expect(num).to.equal(2);
        done();
      });
    });
  });
});
