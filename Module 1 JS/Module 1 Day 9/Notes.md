### **1. Function Declaration & Expression**  

#### **Function Declaration vs. Function Expression**  
- **Function Declaration**  
  ```js
  function greet() {
      console.log("Hello!");
  }
  greet(); // Hello!
  ```
  - Function declarations are **hoisted**, meaning they can be called before their definition in the code.  
  - They exist in the global scope or the block scope where defined.

- **Function Expression**  
  ```js
  const greet = function() {
      console.log("Hello!");
  };
  greet(); // Hello!
  ```
  - Function expressions are **not hoisted**, meaning they cannot be called before their definition.  
  - They are stored as values inside variables.

#### **Hoisting Behavior**  
- Function declarations are hoisted:
  ```js
  greet(); // ✅ Works fine
  function greet() {
      console.log("Hello!");
  }
  ```
- Function expressions are not:
  ```js
  greet(); // ❌ ReferenceError: Cannot access 'greet' before initialization
  const greet = function() {
      console.log("Hello!");
  };
  ```

#### **Named vs. Anonymous Functions**  
- Named function expression:  
  ```js
  const greet = function sayHello() {
      console.log("Hello!");
  };
  ```
  - `sayHello` is only available inside the function itself. 

Imagine a superhero like Batman 🦇.

Inside his Batcave, he knows he is Batman.

But when he walks around as Bruce Wayne, nobody calls him Batman.

Similarly, sayHello knows its own name inside the function, but outside, JavaScript only sees greet, just like the world sees only Bruce Wayne.


Behind the scenes, JavaScript creates an internal structure like this:

  ```js
greet -> FunctionObject {
    name: "sayHello",
    [[Environment]]: <Reference to Outer Scope>,
    [[FunctionScope]]: {
        sayHello: <Reference to Function Itself>
    }
}

  ```

# How JavaScript Handles Named Function Expressions

## **Understanding Named Function Expressions**
When you declare a **named function expression**, like this:

```js
const greet = function sayHello() {
    console.log("Hello!");
};
```

Two things happen:
1. `greet` is stored **globally**.
2. `sayHello` is **only available inside** the function.

This means that calling `sayHello()` outside the function will result in an error:

```js
sayHello(); // ❌ ReferenceError: sayHello is not defined
```

---

## **Why Does `sayHello` Only Exist Inside the Function?**

### **Step 1: JavaScript Reads the Code**
When JavaScript encounters:

```js
const greet = function sayHello() {
    console.log("Hello!");
};
```

It needs to decide **where `sayHello` should be available**.

- `greet` is declared in the **global scope**.
- `sayHello` is **inside** the function, so JavaScript makes it available **only inside the function**.

---

### **Step 2: Function Scope Rules**
JavaScript follows a rule called **Function Scope**:
- Any variable **declared inside a function** is only accessible **inside that function**.
- This applies to function names as well!

Since `sayHello` is written **inside** the function, it is stored in a **temporary, local memory**.

---

### **Step 3: Execution Context & Memory**
When the function is created, JavaScript does **two things**:
1. **Stores `greet` globally**, so it can be used anywhere.
2. **Stores `sayHello` inside the function’s Local Execution Context**, which means it can only be used within the function.

Once the function finishes executing, **its local memory is cleared**, and `sayHello` **vanishes**.

---

## **What Happens When We Try to Access `sayHello`?**
### ✅ **Inside the function → Works!**
```js
const greet = function sayHello() {
    console.log("Hello!");  // ✅ Works inside the function
    sayHello();             // ✅ Also works inside
};
greet(); // Runs fine
```

### ❌ **Outside the function → Error!**
```js
console.log(sayHello); // ❌ ReferenceError: sayHello is not defined
```
Since `sayHello` was never stored **globally**, it does not exist outside the function.

---

## **Final Answer: How JavaScript Restricts `sayHello`**
### **JavaScript ensures `sayHello` is only inside the function by:**
✅ Storing `sayHello` in the function’s **local execution context** (local memory).  
❌ Removing it from memory **once the function finishes executing**.  

---

## **Analogy: A Temporary Work ID Badge 🎟️**
Think of it like a **temporary ID badge** at an office:
- You receive a **temporary badge** when you enter.
- Inside the office, you can use it to access rooms.
- **When you leave, you return the badge**—it doesn’t work outside.

Similarly, `sayHello` **only works inside the function**.  
Once the function is done, **JavaScript removes it from memory**—just like returning the badge!  



---

 
- Anonymous function expression:  

  ```js
  const greet = function() {
      console.log("Hello!");
  };
  ```

---

### **2. Arrow Functions vs. Regular Functions**  

#### **Syntax Differences**
```js
// Regular function
function add(a, b) {
    return a + b;
}

// Arrow function
const add = (a, b) => a + b;
```
- If there’s only one parameter, parentheses can be omitted:
  ```js
  const square = x => x * x;
  ```
- If there’s only one expression, `{}` and `return` can be omitted.

#### **this Binding Differences**  
- Regular functions bind `this` dynamically based on the caller.
- Arrow functions **do not** have their own `this`; they inherit from their surrounding scope.

Example:
```js
const obj = {
    value: 10,
    regularFunction: function() {
        console.log(this.value); // 10
    },
    arrowFunction: () => {
        console.log(this.value); // undefined (inherits `this` from surrounding scope)
    }
};

obj.regularFunction(); // 10
obj.arrowFunction(); // undefined
```

#### **Limitations of Arrow Functions**
- No `arguments` object:
  ```js
  function regular() {
      console.log(arguments); // Works
  }
  
  const arrow = () => {
      console.log(arguments); // ❌ ReferenceError
  };
  ```
- No `super` keyword:
  ```js
  class Parent {
      constructor() {
          this.name = "Parent";
      }
  }

  class Child extends Parent {
      constructor() {
          super();
          this.show = () => console.log(super.name); // ❌ Error: super is not defined
      }
  }
  ```

---

### **3. Function Parameters (Default, Rest)**  

#### **Default Parameters**  
```js
function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
}
greet(); // Hello, Guest!
```
- Default values only apply if `undefined` is passed.
  ```js
  greet(null); // Hello, null!
  greet(undefined); // Hello, Guest!
  ```

#### **Rest Parameters**  
- Allows passing multiple values into a function.
  ```js
  function sum(...numbers) {
        console.log(numbers)
      return numbers.reduce((acc, num) => acc + num, 0);
  }
  console.log(sum(1, 2, 3, 4)); // 10
  ```

#### **arguments Object vs. Rest Parameters**  
- `arguments` exists in regular functions but not in arrow functions.
  ```js
  function test() {
      console.log(arguments); // Works
  }

  const testArrow = () => {
      console.log(arguments); // ❌ ReferenceError
  };
  ```

# **arguments Object**
The arguments object is an array-like object available inside regular functions. It holds all the arguments passed to the function, even if the function has defined parameters.

Key Characteristics of arguments
Available only in regular functions (not in arrow functions).

Array-like but not a true array (does not have array methods like map, filter, forEach).

Includes all arguments passed to the function, even if they are not explicitly declared in the function definition.

Not available in strict mode ('use strict') in ES6+.


# **Rest Parameters (...args)**
Rest parameters (...args) were introduced in ES6 (ES2015) to replace the arguments object with a cleaner and more powerful alternative.

Key Characteristics of Rest Parameters
Available in both regular and arrow functions.

Is a true array, meaning it supports array methods (map, filter, reduce, etc.).

Only captures arguments that are not explicitly defined in the function signature.

Works in strict mode without issues.

# Which One Should You Use?
* Use Rest Parameters (...args) if:

You need a real array with array methods.

You’re writing modern JavaScript (ES6+).

You want better readability and cleaner code.

* Use arguments (only if needed) if:

You’re working with older JavaScript (ES5 or below).

You need to access all arguments, including explicitly named ones.

You’re working in non-strict mode.

# Why Can’t Arrow Functions Use arguments?
Arrow functions do not have their own arguments object. Instead, they inherit arguments from their nearest enclosing regular function. This behavior is due to how JavaScript handles function execution contexts and lexical scoping. Let's break this down step by step.

Step-by-Step Explanation of Why Arrow Functions Don’t Have arguments

Step 1: Understanding Execution Context
When a function is invoked, JavaScript creates an execution context for it. This execution context contains:

* this Binding

* Lexical Environment

* Variable Scope

* arguments Object (for regular functions only)

In regular functions, the arguments object is automatically created inside the execution context. However, arrow functions do not create their own execution context. Instead, they inherit their execution context from the surrounding function (lexical scope).

Step 2: Arrow Functions Do Not Have Their Own Execution Context
Arrow functions behave differently from regular functions:

They do not have their own this binding (they inherit this from their surrounding scope).

They do not have their own arguments object (they inherit arguments from the closest non-arrow function).

Instead of creating their own execution context, arrow functions simply use the execution context of their surrounding function.


# What Happens Behind the Scenes?
🔍 Regular Functions: this is Set at Call Time
When a regular function is executed, JavaScript creates an execution context.

A new this value is assigned based on how the function was called.

🔍 Arrow Functions: this is Set at Definition Time
Arrow functions do not create their own execution context.

Instead, they inherit this from the nearest enclosing regular function or global scope.

This is known as lexical scoping.

---

### **4. Immediately Invoked Function Expressions (IIFEs)**  

#### **Syntax & Purpose**  
- IIFE is a function that executes immediately upon definition.
  ```js
  (function() {
      console.log("Executed!");
  })();
  ```
- With arrow function:
  ```js
  (() => {
      console.log("Executed!");
  })();
  ```

#### **Avoiding Global Scope Pollution**  
- Variables declared inside an IIFE do not pollute the global scope.
  ```js
  (function() {
      var secret = "Hidden";
      console.log(secret); // Hidden
  })();

  console.log(secret); // ❌ ReferenceError
  ```

#### **Use Cases**
- **Encapsulation**  
  ```js
  const module = (function() {
      let privateVar = "I am private";
      return {
          getPrivate: () => privateVar
      };
  })();

  console.log(module.getPrivate()); // I am private
  ```

---
