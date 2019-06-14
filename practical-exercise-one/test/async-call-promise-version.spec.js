var expect = require('chai').expect;
var sinon = require('sinon');

var serviceModuleUsingPromise = require('../src/async-call-promise-version');

describe("Test async call promise version", function () {

  var clock, sandbox;

  beforeEach(function () {

    clock = sinon.useFakeTimers();
    sandbox = sinon.createSandbox();

  });

  it("callOneServiceUsingPromise should return 1 after 1 second", function () {

    serviceModuleUsingPromise.callOneServiceUsingPromise().then(function(num){
      clock.tick(1000);
      expect(num).to.equal(1);
    });

  });

  it("callTwoServiceUsingPromise should return 2 after 1.5 second", function () {

    serviceModuleUsingPromise.callTwoServiceUsingPromise().then(function(num){
      clock.tick(1500);
      expect(num).to.equal(2);
    });

  });

  it("remoteMathServiceUsingPromise should return 3 if callOneServiceUsingPromise return 1, and callTwoServiceUsingPromise return 2", function () {

    var stubForCallOneServiceUsingPromise = sandbox.stub(serviceModuleUsingPromise, "callOneServiceUsingPromise");
    var stubForCallTwoServiceUsingPromise = sandbox.stub(serviceModuleUsingPromise, "callTwoServiceUsingPromise");

    stubForCallOneServiceUsingPromise.resolves(1);
    stubForCallTwoServiceUsingPromise.resolves(2);
    serviceModuleUsingPromise.remoteMathServiceUsingPromise().then(function(num){
      expect(num).to.equal(3);
    });
   

    serviceModuleUsingPromise.callOneServiceUsingPromise.restore();
    serviceModuleUsingPromise.callTwoServiceUsingPromise.restore();

  });

  afterEach(function () {

    clock.restore();
    sandbox.restore();

  });

});
