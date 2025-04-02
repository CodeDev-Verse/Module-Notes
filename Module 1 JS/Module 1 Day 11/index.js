// function outer(params) {
//     var a = 10
//     function inner(){
//         console.log(a);
//     }
//     inner()

//     return inner
// }

// var bye = outer()
// bye()


const person1 = { name: "John" };
const person2 = { name: "Doe" };

function sayHello() {
    console.log("Hello, " + this.name);
}
sayHello.call(person1); // Output: Hello, John
sayHello.call(person2); // Output: Hello, Doe