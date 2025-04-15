// map => transforms each and every element present in my array
// returns new array of same length

// filter => filter thr elements based on certain conditions
// will return an new array might be of same length or migthg be smaller in len

// reduce =>  reduce your array to 1 single value
// any value (number , obj, array)

// MAP
// param:
    // ele => current ele on which the operation is beingf performed
    // index (optional) => index of your current ele
    // array (optional) => original array on which i am currently working

// const arr = [1,2,3,4,5,6]

// const newArr = arr.map((ele, idx, arr)=>{
//     return ele*ele
// })
// // const newArr2 = arr.map((ele, idx, arr)=> ele*ele)

// console.log(newArr);
// console.log(arr);

// const arr = [0,1,2,3,4,5,6,7,8]

// const evenArray = arr.filter(Boolean)

// console.log(evenArray);
// console.log(arr);

// REDUCE
// params 
    // accumulator
    // ele / current value
    // indx
    // array

    const arr = [1,2,3,4,5,6,7]
    const sum = arr.reduce((acc, ele, idx, arr)=>{
        return acc + ele
        // 0+1 = 1 // this is my new acc value
    }, 0)

    console.log(sum);
    

    // arr.reduce((acc, ele, idx, arr)=>{
    //     return acc + ele
            // 1+2 = 3 // this is my new acc value
    // }, 1)

    // arr.reduce((acc, ele, idx, arr)=>{
    //     return acc + ele
            // 3+3 = 6 // this is my new acc value
    // }, 3)

    // arr.reduce((acc, ele, idx, arr)=>{
    //     return acc + ele
            // 6+4 = 10 // this is my new acc value
    // }, 6)