// let promise = new Promise((resolve, reject) => {
//     console.log('Promise started');
// })

// let promise = new Promise((resolve, reject) => {
//     console.log('Promise started');
//     resolve("success")
// })

// let promise = new Promise((resolve, reject) => {
//     console.log('Promise started');
//     reject("Error occurred")
// })

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log('Promise started');
//         resolve("success");
//     })

// }
// let promise = getPromise();
// promise.then((result) => {
//     console.log("Promise resolved successfully", result);
// })

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log('Promise started');
//         reject("Error occurred");
//     })

// }
// let promise = getPromise();
// promise.catch((Error) => {
//     console.log("promise rejected", Error);
// })

// function asyncFunction() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1")
//             resolve("success");
//         }, 3000);
//     })
// }
// console.log("fetching data....");
// let p1 = asyncFunction();
// p1.then((result) => {
//     console.log("Promise resolved successfully", result);
// })





// function asyncFunction() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1")
//             resolve("success");
//         }, 3000);
//     })
// }

// function asyncFunction2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2")
//             resolve("success");
//         }, 4000);
//     })
// }

// console.log("fetching data1....");
// let p1 = asyncFunction();
// p1.then((result) => {
//     // console.log("Promise resolved successfully", result);
//     console.log("fetching data2....");
//     let p2 = asyncFunction2();
//     p2.then((result) => {
//         // console.log("Promise resolved successfully", result);
//     })
// })
