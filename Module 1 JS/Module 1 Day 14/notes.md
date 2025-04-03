# JavaScript Object Prototypes & Prototypal Inheritance - Lecture Plan

## 2. Object Prototypes & Prototype Chain (45-60 mins)

### 🔹 What is a Prototype?
#### 📌 Non-Technical Explanation:
Think of prototypes as blueprints for objects. Imagine a car factory where each car follows a design pattern but can have slight customizations. In JavaScript, objects inherit behaviors from prototypes, just like new cars inherit base features from a blueprint.

#### 📌 Technical Explanation:
A prototype is an internal object from which other objects inherit properties and methods. Every JavaScript object has a hidden reference to its prototype via `__proto__`, which links objects in a chain known as the **Prototype Chain**.

```js
const car = {
  brand: "Toyota",
  start: function() {
    console.log("Car started");
  }
};

console.log(car.__proto__); // Points to Object.prototype
```

#### 📌 Interview Questions:
- What is a prototype in JavaScript?
- How do prototypes differ from classical inheritance in languages like Java?
- What is the significance of `Object.prototype`?

### 🔹 Understanding `__proto__` and `prototype`
#### 📌 Non-Technical Explanation:
- **`__proto__`** is like a hidden link that connects an object to its prototype.
- **`prototype`** is a property of constructor functions, used when creating objects via `new`.

#### 📌 Technical Explanation:
- `__proto__` is an instance-level property that points to the prototype of the object.
- `prototype` is a property of functions, which is assigned to objects when created using `new`.

```js
function Person(name) {
  this.name = name;
}
Person.prototype.sayHello = function() {
  console.log("Hello, " + this.name);
};

const john = new Person("John");
console.log(john.__proto__ === Person.prototype); // true
```

#### 📌 Interview Questions:
- What is the difference between `__proto__` and `prototype`?
- How can you check if an object has a certain prototype?
- What happens if you modify `Object.prototype`?

### 🔹 How JavaScript Resolves Properties & Methods (Prototype Chain)
#### 📌 Non-Technical Explanation:
If you ask a person a question and they don’t know the answer, they ask their teacher. If the teacher doesn’t know, they ask the principal, and so on. Similarly, JavaScript looks for properties/methods in an object first, then its prototype, then its prototype’s prototype, until it reaches `null`.

#### 📌 Technical Explanation:
When accessing a property, JavaScript searches in the object. If not found, it moves up the prototype chain until `null` is reached.

```js
console.log(john.toString()); // Found in Object.prototype
```

#### 📌 Interview Questions:
- What is the prototype chain in JavaScript?
- How does JavaScript resolve method calls in an inheritance hierarchy?
- Can you modify an object's prototype at runtime? What are the implications?

### 🔹 Overriding Prototype Methods & Shadowing
#### 📌 Non-Technical Explanation:
If a student dislikes a school rule, they might create their own rule, which overrides the school rule. In JavaScript, objects can override inherited methods.

#### 📌 Technical Explanation:
If a property/method exists in both an object and its prototype, the object’s property takes precedence.

```js
Person.prototype.sayHello = function() {
  console.log("Hello from prototype");
};

john.sayHello = function() {
  console.log("Hello from instance");
};

john.sayHello(); // "Hello from instance"
```

#### 📌 Interview Questions:
- How can you override a method from the prototype in JavaScript?
- What is method shadowing in JavaScript?
- How does method lookup work in the prototype chain?

---

## 3. Prototypal Inheritance (45-60 mins)

### 🔹 How Objects Inherit from Other Objects
#### 📌 Non-Technical Explanation:
Just like a child inherits traits from their parents, JavaScript objects can inherit properties and methods from other objects.

#### 📌 Technical Explanation:
Objects inherit properties from their prototype, creating a hierarchy.

```js
const animal = {
  makeSound: function() {
    console.log("Animal sound");
  }
};

const dog = Object.create(animal);
dog.bark = function() {
  console.log("Woof!");
};

dog.makeSound(); // Inherited from animal
```

#### 📌 Interview Questions:
- What is prototypal inheritance in JavaScript?
- How is prototypal inheritance different from classical inheritance?
- How can you implement inheritance without using `class`?

### 🔹 Using `Object.create()` for Prototypal Inheritance
#### 📌 Non-Technical Explanation:
`Object.create()` allows one object to inherit from another without using constructors.

#### 📌 Technical Explanation:
`Object.create(proto)` creates a new object with the given prototype.

```js
const cat = Object.create(animal);
cat.makeSound(); // "Animal sound"
```

#### 📌 Interview Questions:
- How does `Object.create()` work?
- What are the benefits of using `Object.create()` for inheritance?
- Can you modify an object's prototype after creation?

### 🔹 Function Constructors & `new` Keyword in Inheritance
#### 📌 Non-Technical Explanation:
A constructor function acts like a mold, allowing multiple objects to be created with shared behavior.

#### 📌 Technical Explanation:
Constructors define object properties, and prototypes define shared methods.

```js
function Animal(name) {
  this.name = name;
}
Animal.prototype.makeSound = function() {
  console.log(this.name + " makes a sound");
};

const lion = new Animal("Lion");
lion.makeSound();
```

#### 📌 Interview Questions:
- How do constructor functions work in JavaScript?
- What is the role of the `new` keyword in JavaScript inheritance?
- How do constructor functions differ from ES6 classes?

### 🔹 ES6 Class Syntax vs. Traditional Prototype-based Inheritance
#### 📌 Non-Technical Explanation:
ES6 `class` makes inheritance more readable and structured, like a template for creating objects.

#### 📌 Technical Explanation:
`class` is syntactic sugar over prototype-based inheritance.

```js
class Animal {
  constructor(name) {
    this.name = name;
  }
  makeSound() {
    console.log(this.name + " makes a sound");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof!");
  }
}

const myDog = new Dog("Buddy");
myDog.makeSound(); // "Buddy makes a sound"
myDog.bark(); // "Woof!"
```
