const arr = [10,20,304,40]

const obj = {
    name :"codeDev Verse",
    age : 24,
    greet : function (){
        console.log(`hello guys !!! my name is ${this.name}`);
        
    }
}

const obj2 = {
    name : "Rishabh"
}

obj2.__proto__ = obj



function hello (){
    console.log("hey evryone !!!");
    
}

// console.log(arr);
// console.log(hello);
// console.log(obj);

Object.prototype.kyaHaalHai = function (params) {
    console.log(params);
    
}

const obj3 = {
    name:"codeDev vErse"
}

obj3.kyaHaalHai("bure haal hai")
obj3.kyaHaalHai("sexyyy ek dum")
obj3.kyaHaalHai("mast")