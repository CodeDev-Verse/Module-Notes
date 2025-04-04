const arr = [1,2,3,4,5]
const arr2 = []
arr2.push(10)
// console.log(arr2.0); // wrong way to access
// console.log(arr2[0]); // right way to access an ele from aa array

// const arr3 = new Array()
// console.log(arr3);

// const arr4 = new Array("ele1")
// console.log(arr4);
// const arr5 = new Array("ele1", "ele2", "ele3",11,4,56,4)
// console.log(arr5);
// const arr6 = new Array(3) // it will declare the empty array of length 3 
// console.log(arr6);
// const arr7 = new Array("3")
// console.log(arr7);


// METHODS
// Array.from()
// const arr8 = [1,2,3,4,5,6,7]
// const arr9 = Array.from(arr8) // it does shalow copy
// console.log(arr9);

// obj={
//     name:"rishabh"
// }
// Array.isArray() 
// console.log(Array.isArray(arr8)) // it checkes weather the passed param is array or not if it is an aaray then it will return true else false

// Array.of()
// console.log(Array.of(1,"hello", 3, "tata", "bye bye"));

const arr11 = [1,2,3,4,5,6]
// console.log(arr11);
// console.log(arr11.at(2));
// console.log(arr11.__proto__.at.call(arr11, 5));
// const proto = Array.prototype.at
// console.log(proto);
// console.log(proto.call(arr11, 1));
// console.log(Array.prototype.at());
const arr12 = ["hello", "bye bye"]

console.log(arr11.concat(arr12))
console.log(arr12.concat(arr11))

const iterator = arr11.entries()
const iterator2 = arr12.entries()
console.log(iterator2.next());
console.log(iterator2.next());
