var a = 10
var b = 20
console.log(a)
console.log(b)

function c() {
    var d = 100
    console.log("inside function");
    function e(params) {
        console.log(params);
    }
    console.log(d);
    e("rishabh")
    return "returned value"
}

var f = c()
console.log(f);
console.log("code ends");
