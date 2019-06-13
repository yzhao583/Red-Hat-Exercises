//The function to invoke callOneService function and callTwoService function, expect to return the sum value of the return value of callOneService and callTwoService
function remoteMathService() {

    var promise, answer = 0;

    promise = Promise.all([callOneService(), callTwoService()]);

    return new Promise((resolve,reject) => {

        promise.then(datalist => {

            datalist.forEach(num => {
                answer = answer + num;
            });

            resolve(answer);

        }).catch(err => {
            reject(err);
        });
        
    });

}

//After 1 secend, invoke the callback function to return no error and 1.
function callOneService() {
    return new Promise((resolve, reject) => {
        setTimeout(err => {
            if (err) {
                reject(err);
            } else {
                resolve(1);
            }
        }, 1000);
    });
}

//After 1.5 seconds invoke the callback function to return no error and 2.
function callTwoService() {
    return new Promise((resolve, reject) => {
        setTimeout(err => {
            if (err) {
                reject(err);
            } else {
                resolve(2);
            }
        }, 1500);
    });
}

//Invoke remoteMathService function
remoteMathService().then(answer => {

    //Check the value of answer, if it not equal to 3, log error; Otherwise, log correct.
    if (answer !== 3) {
        console.log("wrong answer", answer);
    } else {
        console.log("correct");
    }
}, err => {
    console.log(err);
});
