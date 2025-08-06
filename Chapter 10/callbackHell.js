// function getData(dataID, getNextData) {
//     setTimeout(() => {
//         console.log("Data received for ID: " + dataID);
//         if (getNextData) {
//             getNextData();
//         }
//     }, 2000);
// }


// // Example of callback hell
// getData(1, () => {
//     console.log("getting next data...2");
//     getData(2, () => {
//         console.log("getting next data...3");
//         getData(3, () => {
//             console.log("getting next data...4");
//             getData(4);
//     });
// });
// });
// getData(2);
// getData(3);