// fun dec method for rec

// hoisting works we can call this befor defining
// self refe



function hello(n){
    // 0 === 0 true
    if(n === 0) return; // base cond
    console.log("heelo");
    
    hello(n-1)
    // hello(0)
}

// hello(5)

// let fact = function hello(n){
//     if(n === 0) return; // base cond
//     console.log(n);
    
//     hello(n-1)

//     return hello
// }

// let a = fact(5)
// a(7)


let fact = (function (n){
    if(n === 0) return; // base cond
    console.log(n);
    n - 1
    return function(){
        console.log("surpriseee !!!");
        
        return 1
    }
})()
fact()

// 2 things 
// 1 base condition
// 2 recursive case