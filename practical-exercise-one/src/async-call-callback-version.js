//The function to invoke callOneService function and callTwoService function, expect to return the sum value of the return value of callOneService and callTwoService
function remoteMathService(cb) {

    var one = 0, two = 0;

    //Invoke callOneService, if err is passed back, invoke callback.
    callOneService(function (err, num) {
        if(err){
            cb(err, undefined)
        } else {
            
            //Otherwise set value of the num to one, and invoke callTwoService
            one = num;
            callTwoService(function (err, num) {

                //if err is passed back, invoke callback.
                if(err){
                    cb(err, undefined);
                } else {

                    //Otherwise, set value of the num to two.
                    two = num;
                }

                //If everything works correct, pass no error, and the sum of one and two back.
                cb(undefined, one + two);
            });
        }
    });
}

//After 1 secend, invoke the callback function to return no error and 1.
function callOneService(cb) {
    setTimeout(function () {
        cb(undefined, 1);
    }, 1000);
}

//After 1.5 seconds invoke the callback function to return no error and 2.
function callTwoService(cb) {
    setTimeout(function () {
        cb(undefined, 2);
    }, 1500);
}

//Invoke remoteMathService function
remoteMathService(function (err, answer) {

    //if any error pass back from the callback function, log the error
    if (err) console.log("error ", err);

    //Check the value of answer, if it not equal to 3, log error; Otherwise, log correct.
    if (answer !== 3) {
        console.log("wrong answer", answer);
    } else {
        console.log("correct");
    }
});

module.exports.callOneService = callOneService;
module.exports.callTwoService = callTwoService;
module.exports.remoteMathService = remoteMathService;
