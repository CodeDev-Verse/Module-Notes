// createing the object 


// 1. object literals
const obj = {
    key:"value",
    name: "codeDev verse",
    greet : function () {
        console.log("hello");
    },
    arr : [1,2,3,4,5,6],
    obj : {
        key1: "value1"
    }
}

// 2. object constructors

const obj2 = new Object()
// obj2 = {}

obj2.key = "value"

// obj2 = {
//      key : "value"
// }

obj2.name = "codeDev Verse"

// obj2 = {
//      key : "value"
//      name : "codeDev verse"
// }



const obj3 = {
    key:"value",
    name: "codeDev verse",
    greet : function () {
        console.log("hello");
    },
    arr : [1,2,3,4,5,6],
    obj : {
        key1: "value1"
    }
}

// console.log(obj3);
obj3.name = "hello"
obj3.byeBye = "bye"
// console.log(obj3);

// access the object
// (.) and ([])
var name = "obj"
// console.log(obj3.name);
// console.log(obj3["name"]);
// console.log(obj3[name]);
// console.log(obj3["0"]);
// console.log(obj3[0]);
// console.log(obj3[1]);

// console.log(Object.keys(obj3));
// console.log(Object.values(obj3));
// console.log(Object.entries(obj3));
let obj4 ={}
Object.assign(obj4, obj3)
// console.log(obj4, obj3)
console.log(Object.hasOwn(obj3, "hello"));
console.log(Object.hasOwn(obj3, "name"));


// const config = Object.freeze({
//     apiUrl: "https://api.example.com",
//     timeout: 5000
//   });
//   config.apiUrl = "https://new-api.example.com"; // ❌ This won't work
//   console.log(config.apiUrl); // Outputs: "https://api.example.com"
  

//   console.log(Object.getOwnPropertyNames(obj3))

//   const date = new Date()
//   console.log(Date.now());
//   console.log(new Date().getDate());
//   console.log(new Date().getDay());
//   console.log(new Date().getFullYear());
//   console.log(new Date().getHours());

console.log(Math.random());
console.log(Math.floor(4.7));


  