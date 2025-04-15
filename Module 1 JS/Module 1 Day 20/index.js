// // new Promise((resolve, reject)=>{

// // }).then((res)=>{

// // })

// // poora
// // poora nai krenge
// // tod denge

// const cart = ["watch", "mobile", "shoes"];

// // placeOrder(cart) // this will return mr a orderID
// // payment(orderID) // this will return me payment details and updated_bal
// // valletUpdate(updated_bal)

// function placeOrder(cart) {
//   // return mr a orderID
// }

// function payment(orderID) {
//   // return me payment details
// }

// function valletUpdate() {
//   // updates my bal
// }

// placeOrder(cart, function (orderID) {
//   payment(orderID, function () {
//     valletUpdate();
//   });
// });

// // promises

// const promise = placeOrder(cart);

// // {result : undef}

// promise.then(function (orderID) {
//   payment();
// }).then(()=>{

// }).catch(()=>{

// })

// // inversion of control
// // pyramid of doom / callback hell

// // serach
// // add to cart
// // place order
// // payment
// // wallet update


const api = "https://api.github.com/users"
const list = fetch(api)
console.log(list);
