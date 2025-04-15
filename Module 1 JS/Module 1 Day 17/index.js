// map
// map is a key value pair
    // key can be anything / of any type (obj, fun, num, etc.)
    // the order in which u do insert the things, this order is maintained
    // allows fast retrival of keys

    // syntax 
    // const myMap = new Map([])


    // use case 
    // config files
    // const config = new Map([
    //     ["theme" , "dark"],
    //     ["version", "1.2.4"],
    //     [`{name :"my app"}`, "my app"]
    // ])

    // console.log(config);
    // data caching
    // const cache = new Map()
    // function fetchData(id) {
    //     if(cache.has(id)) return cache.get(id)
    //     const data  = apiCall(id)
    //     cache.set(id, data)
    //     return data
    // }
    
    // metaData from DOM ele
    // const meta = new Map()
    // meta.set(buttonElement, {clicked:false})

// iteration
// for(let [key, value] of config){
//     console.log(key, value);
// }

// config.forEach((value, key)=>{
//     console.log(key, value);
// })

// config.map((value, key)=>{
//     console.log(key, value);
// })

// inbuilt methods in map
// set
// get
// delete
// clear
// has
// size (not a method)

// console.log(config.size);
// console.log(config.get("version"));
// const key = {name :"my app"};
// console.log(config.get(`{name :"my app"}`));

// console.log(config.has(`{name :"my app"}`));
// console.log(config.delete("version"));
// console.log(config.set("version", "1.2.0"));
// config.clear()
// console.log(config);


// sets
    // it ignoresd the duplicate values
    // values can be of any types

// syntax

    // const myset = new Set([1,2,2,4,4,6, 7])

    // console.log(myset);

    // useCase
    // removing your duplicate values from array

    // track user actions

    // finding commomn ele in array
    // const arr2 = [1,2,2,3,4,5]
    // const arr3 = [5,6,6,7,8,9]

    // const a = new Set(arr2)
    // const b = new Set(arr3)

    // console.log(a,b);
    // const ans  = [...a].filter((ele)=>{
    //     return b.has(ele)
    // })
    // console.log(ans);
    
// add
// has
// delete
// clear
// size

// sets are also iteratable
// for(let val of myset){
//     console.log(val);
// }


    
// weakmap
// keys must be objects
// not iterable
// does not have size ka info

const wm = new WeakMap()
const obj = {key:"value"}
wm.set(obj, "value")
console.log(wm);
console.log(wm.get(obj))
// console.log(wm.get(entries))



// weakset


