var serviceModule = require('./async-call-callback-version');
var serviceModuleUsingPromise = require('./async-call-promise-version');

//Invode remoteMathService in serviceModule
serviceModule.remoteMathService(function (err, answer) {

    //if any error pass back from the callback function, log the error
    if (err) console.log("error ", err);

    //Check the value of answer, if it not equal to 3, log error; Otherwise, log correct.
    if (answer !== 3) {
        console.log("wrong answer", answer);
    } else {
        console.log("correct");
    }
});

//Invode remoteMathServiceUsingPromise in serviceModuleUsingPromise
serviceModuleUsingPromise.remoteMathServiceUsingPromise().then(function (answer) {

    //Check the value of answer, if it not equal to 3, log error; Otherwise, log correct.
    if (answer !== 3) {
        console.log("wrong answer", answer);
    } else {
        console.log("correct");
    }
}, function(err){
    console.log(err);
});