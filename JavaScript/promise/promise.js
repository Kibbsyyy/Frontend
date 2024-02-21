let myPromise = new Promise(function (resolve, reject) {
    console.log("Promise is here");
});

const matchWon = false;
let checkScore = new Promise(function(resolve, reject) {
    if (matchWon) {
        resolve("Your team won!");
    } else {
        reject("Your team lost");
    }
});

console.log(checkScore); 

//when a promise resolves, we .then()
//promise.then()
//then()
//.catch()
//.finally()

let checkTransfer = new Promise(function (resolve, reject) {
    //reject("Transaction failed");
    resolve("Funds sent")
});

checkTransfer
    .then(function updateBal(param) {
        console.log(param);
        console.log("Bal is : XXXX");
    })
    .catch(function errorTransfer(error){
        console.log(error);
    })
    .finally(function done() {
        console.log("We are done processing your transfer");
    });
