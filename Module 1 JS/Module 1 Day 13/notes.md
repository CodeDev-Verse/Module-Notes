# **Live Session Script – JavaScript: Object Literals, Constructors & Built-in Objects**  

## **Introduction (5 mins)**  

🎤 **Welcome & Agenda**  
- Welcome everyone to the session.  
- Today, we’ll cover two major topics:  
  1. **Object Literals & Constructors** – How to create objects and the different approaches.  
  2. **Built-in Objects** – Exploring `Date`, `Math`, and `RegExp`.  
- We’ll look at technical and non-technical perspectives.  

---

## **1️⃣ Object Literals & Constructors (40-50 mins)**  

### **💡 What Are Objects in JavaScript?**  

**Non-Technical Explanation:**  
- Think of objects as a way to **group related data** together, just like a folder containing files related to a project.  

**Technical Explanation:**  
- JavaScript objects store key-value pairs, where **keys (or properties)** are strings and **values** can be anything (numbers, strings, arrays, functions).  
- Objects help structure data in a meaningful way.  

### **📌 Creating Objects Using Object Literals (`{}`)**  

```js
const person = {
    name: "John",
    age: 30,
    greet: function() {
        console.log("Hello, " + this.name);
    }
};
person.greet(); // Output: Hello, John
```

**Explanation:**  
- We define an object using `{}`.  
- `name` and `age` are properties, and `greet()` is a method.  
- `this.name` refers to the current object’s `name` property.  

**Non-Technical Analogy:**  
- Imagine an object as a "profile card" containing a person’s name, age, and a function that allows them to introduce themselves.  

### **📌 Creating Objects Using Constructors (`new Object()`, Function Constructors)**  

#### **1️⃣ Using `new Object()`**  
```js
const car = new Object();
car.brand = "Toyota";
car.model = "Camry";
car.drive = function() {
    console.log("Driving a " + this.brand + " " + this.model);
};
car.drive();
```

#### **2️⃣ Using Function Constructors**  
```js
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
    this.drive = function() {
        console.log("Driving a " + this.brand + " " + this.model);
    };
}
const myCar = new Car("Tesla", "Model S");
myCar.drive();
```

### **📌 Adding & Modifying Properties/Methods**  

```js
const user = { name: "Alice", age: 25 };
user.email = "alice@example.com"; // Adding a property
user.age = 26; // Modifying a property
user.greet = function() { console.log("Hi, I'm " + this.name); }; // Adding a method
delete user.age; // Removing a property
```

### **📌 Factory Functions vs. Constructor Functions**  

#### **Factory Function (Returns an Object)**  
```js
function createUser(name, age) {
    return {
        name,
        age,
        greet() {
            console.log("Hello, my name is " + this.name);
        }
    };
}
const user1 = createUser("Bob", 28);
user1.greet();
```

#### **Constructor Function (Uses `new`)**  
```js
function User(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log("Hello, my name is " + this.name);
    };
}
const user2 = new User("Charlie", 32);
user2.greet();
```
# Object Methods Explained

## 1️⃣ Object.keys(obj)
Returns an array of all the property names (keys) of an object.

```js
const obj = { name: "Alice", age: 25 };
console.log(Object.keys(obj)); // ["name", "age"]
```

## 2️⃣ Object.values(obj)
Returns an array of all the values of an object.

```js
console.log(Object.values(obj)); // ["Alice", 25]
```

## 3️⃣ Object.entries(obj)
Returns an array of key-value pairs of an object.

```js
console.log(Object.entries(obj)); // [["name", "Alice"], ["age", 25]]
```

## 4️⃣ Object.assign(target, ...sources)
Copies properties from one or more source objects to a target object.

Useful for merging objects.

```js
const obj1 = { name: "John" };
const obj2 = { age: 30 };
const mergedObj = Object.assign({}, obj1, obj2);
console.log(mergedObj); // { name: "John", age: 30 }
```

## 5️⃣ Object.hasOwn(obj, key)
Checks if an object has a direct (own) property with the given key.

This is safer than using `obj.hasOwnProperty()`.

```js
console.log(Object.hasOwn(obj, "name")); // true
console.log(Object.hasOwn(obj, "gender")); // false
```

## 6️⃣ Object.freeze(obj)
Freezes an object, making it immutable (you cannot add, remove, or modify properties).

```js
const frozenObj = Object.freeze({ name: "Frozen" });
frozenObj.name = "Not Frozen"; // This won't work
console.log(frozenObj.name); // "Frozen"
```

## 7️⃣ Object.seal(obj)
Seals an object, preventing new properties from being added or removed.

Existing properties can still be modified.

```js
const sealedObj = Object.seal({ name: "Alice", age: 25 });
sealedObj.age = 30; // Allowed
sealedObj.gender = "Female"; // Not allowed
console.log(sealedObj); // { name: "Alice", age: 30 }
```

## 8️⃣ Object.getOwnPropertyNames(obj)
Returns an array of all property names of an object, including non-enumerable properties.

```js
console.log(Object.getOwnPropertyNames(obj)); // ["name", "age"]
```

## 9️⃣ Object.getPrototypeOf(obj)
Returns the prototype (i.e., the internal blueprint) of an object.

```js
const arr = [];
console.log(Object.getPrototypeOf(arr) === Array.prototype); // true
```

# Date Object Methods

## 1️⃣ new Date()
Creates a new date object representing the current date and time.

```js
const today = new Date();
console.log(today);
```

## 2️⃣ date.getFullYear()
Returns the four-digit year.

```js
console.log(today.getFullYear()); // 2025
```

## 3️⃣ date.getMonth()
Returns the month (0-based, so January = 0, February = 1, etc.).

```js
console.log(today.getMonth()); // Example: 3 (April)
```

## 4️⃣ date.getDate()
Returns the day of the month.

```js
console.log(today.getDate()); // Example: 2
```

## 5️⃣ date.toDateString()
Returns a human-readable date string.

```js
console.log(today.toDateString()); // Example: "Tue Apr 2 2025"
```

# Math Object Methods

## 1️⃣ Math.random()
Returns a random number between 0 and 1.

```js
console.log(Math.random()); // Example: 0.8453938
```

## 2️⃣ Math.floor(value)
Rounds a number down to the nearest integer.

```js
console.log(Math.floor(4.7)); // 4
```

## 3️⃣ Math.ceil(value)
Rounds a number up to the nearest integer.

```js
console.log(Math.ceil(4.2)); // 5
```

## 4️⃣ Math.round(value)
Rounds a number to the nearest integer (rounds up if .5 or higher).

```js
console.log(Math.round(4.5)); // 5
```

## 5️⃣ Math.PI
Returns the value of π (3.141592653589793).

```js
console.log(Math.PI);
```

# RegExp Object Methods

## 1️⃣ test()
Tests if a string matches a pattern (returns true or false).

```js
const regex = /hello/;
console.log(regex.test("hello world")); // true
console.log(regex.test("goodbye")); // false
```

## 2️⃣ match()
Finds and returns matches in a string.

```js
const text = "Hello JavaScript!";
console.log(text.match(/JavaScript/)); // ["JavaScript"]
```

## 3️⃣ replace()
Replaces text based on a pattern.

```js
const sentence = "I love JavaScript!";
console.log(sentence.replace("love", "enjoy")); // "I enjoy JavaScript!"
```
---

## **Closing (5 mins)**  

🎤 **Recap & Takeaways**  
- Objects help structure and manage data.  
- Factory functions vs. Constructor functions – choose wisely.  
- Built-in objects like `Date`, `Math`, and `RegExp` make coding easier.  

💬 **Q&A** – Ask me anything in the chat!  
🔔 **Call-to-Action** – Subscribe, like, and share if you found this useful!  
