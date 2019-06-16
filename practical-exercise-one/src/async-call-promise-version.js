//The function to invoke callOneService function and callTwoService function, expect to return the sum value of the return value of callOneService and callTwoService
function remoteMathService() {

    var one = 0, two = 0, answer = 0;

    return new Promise(function (resolve, reject) {

        //Invoke callOneService, set reponse value to 'one'.
        callOneService().then(function (num1) {
            if (num1 && typeof num1 === "number") {
                one = num1;
            }
        }, function (err) {
            reject(err);
        }).then(

            //Invoke callTwoService, set response value to 'two'.
            callTwoService().then(function (num2) {
                if (num2 && typeof num2 === "number") {
                    two = num2;
                }

                //Calculate 'answer', and resolve it.
                answer = one + two;
                resolve(answer);
            }, function (err) {
                reject(err);
            })
        );
    });
}

//After 1 secend, invoke the callback function to return no error and 1.
function callOneService() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(1);
        }, 1000);
    });
}

//After 1.5 seconds invoke the callback function to return no error and 2.
function callTwoService() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(2);
        }, 1500);
    });
}

module.exports.callOneServiceUsingPromise = callOneService;
module.exports.callTwoServiceUsingPromise = callTwoService;
module.exports.remoteMathServiceUsingPromise = remoteMathService;
