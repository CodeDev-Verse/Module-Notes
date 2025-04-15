console.log("hello!");

setTimeout(()=>{
    console.log("async code 1");
}, 5000)

setTimeout(()=>{
    console.log("async code 2");
}, 1000)

setTimeout(()=>{
    console.log("async code 3");
}, 0)

setTimeout(()=>{
    console.log("async code 4");
}, 6000)

console.log("bye !!");


