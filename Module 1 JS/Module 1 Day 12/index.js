"use strict";

// how this keyword behaves in global on browser
console.log(this); // refering to globalObject in browser and which is window object

// how this keyword behaves in global in nodeJS
// console.log(this); // global

// how this keyword behaves in functions on browser
function a() {
  console.log(this);
}
a();
window.a();

// this keyword depens on how we are callin it

// whenever i am using this keyword with functions in strict mode it is showing me undef
// whenever i am using this keyword with functions in non-strict mode it is showing me window

// this substitution
// whenver this keyword returns undef or null it is subst by window obj but this will only happen in non-strict mode

// how this behaves in object methods

var obj = {
  name: "codeDev Verse",
  age: "15 days",
  hello: function name() {
    console.log(`my name is ${this.name} and i am ${this.age} yeaars old`);
  },
};

var obj2 = {
  name: "Rishabh",
  age: 24,
};

// obj2.hello()
// here comes the concept of funxt borrowing
obj.hello();
obj.hello.call(obj2);

// how this works in arrow function

var obj3 = {
  name: "codeDev Verse",
  age: "15 days",
  hello: function name() {
    console.log(this, "from normal method");
  },
};

var obj4 = {
  name: "codeDev Verse",
  age: "15 days",
  hello: () => {
    console.log(this, "from arrow method");
  },
};

var obj5 = {
  name: "codeDev Verse",
  age: "15 days",
  hello: function () {
    const bye = () => {
      console.log(this, "from nested arrow method");
    };
    bye();
  },
};

var obj6 = {
  name: "codeDev Verse",
  age: "15 days",
  hello: function () {
    function abc() {
      console.log(this, "from nested normal method");
    }
    abc();
    obj = {
      key: "value",
      tata: function () {
        console.log(this);
      },
    };
    obj.tata();
  },
};

var obj7 = {
  name: "codeDev Verse",
  age: "15 days",
  hello: function () {
    const bye = () => {
      const tata = () => {
        console.log(this);
      };
      tata();
    };
    bye();
  },
};

var obj8 = {
  name: "codeDev Verse",
  age: "15 days",
  hello: () => {
    const hello = () => {
      console.log(this, "from arrow method");
    };
    hello();
  },
};

// obj3.hello();
// obj4.hello();
// obj5.hello();
// obj6.hello();
// obj7.hello();
obj8.hello();
