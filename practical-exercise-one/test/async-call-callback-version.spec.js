var expect = require('chai').expect;
var sinon = require('sinon');

var serviceModule = require('../src/async-call-callback-version');

describe("Test async call callback version", function () {

  var clock, sandbox;

  beforeEach(function () {

    clock = sinon.useFakeTimers();
    sandbox = sinon.createSandbox();

  });

  it("callOneService should return 1 after 1 second", function () {

    var callback = sandbox.spy();

    serviceModule.callOneService(callback);
    clock.tick(1000);
    expect(callback.calledWith(undefined, 1)).to.be.true;

  });

  it("callTwoService should return 2 after 1.5 seconds", function () {

    var callback = sandbox.spy();

    serviceModule.callTwoService(callback);
    clock.tick(1500);
    expect(callback.calledWith(undefined, 2)).to.be.true;

  });

  it("remoteMathService should return 3 if callOneService return 1, and callTwoService return 2", function () {

    var stubForCallOneService = sandbox.stub(serviceModule, "callOneService");
    var stubForCallTwoService = sandbox.stub(serviceModule, "callTwoService");
    var callback = sandbox.spy();

    serviceModule.remoteMathService(callback);
    clock.tick(2500);
    stubForCallOneService.callsArgWith(0, undefined, 1);
    stubForCallTwoService.callsArgWith(0, undefined, 2);

    serviceModule.callOneService.restore();
    serviceModule.callTwoService.restore();

    expect(callback.calledWith(undefined, 3)).to.be.true;
  });

  afterEach(function () {

    clock.restore();
    sandbox.restore();

  });

});
