// const promise = new Promise((resolve, reject)=>{
//     resolve("Your promise is resolved successfuly !!!")
// })

// async function test() {
//     console.log("hello");
//     return promise
// }
// const retVal = test()
// console.log(retVal);
// retVal.then((result)=>{
//     console.log(result);
// })

// function test2() {
//     console.log("hello 2");
//     return "codeDev Verse from normal func"
// }
// const retVal2 = test2()
// console.log(retVal2);


const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Your promise is resolved successfuly !!!")
    }, 10000)
})
const promise2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Your promise is resolved successfuly !!!")
    }, 5000)
})

// function test() {
//     console.log("bye");
//     console.log("bye");
//     console.log("bye");
//     console.log("bye");
//     promise.then((result)=>{
//         console.log(result);
//     })
//     console.log("codedevVerse");
//     console.log("codedevVerse");
//     console.log("codedevVerse");
//     console.log("codedevVerse");
// }
// test()

async function test() {
    console.log("hello");
    const a = await promise
    console.log(a);
    console.log("bye");
    const a2 = await promise2
    console.log(a2);
    console.log("bye");
}
test()
// var a = 20
// function test2() {
//     console.log("my test 2 function");
//     console.log(a);
// }
// test2()