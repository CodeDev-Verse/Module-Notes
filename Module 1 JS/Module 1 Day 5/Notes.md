# 🎥 YouTube Live Session: JavaScript Data Types & Operators

---

## 1️⃣ Primitive vs. Non-Primitive Data Types (40-50 mins)
### 📌 Understanding Data Types
JavaScript has two main categories of data types:
- **Primitive (Immutable)**
- **Non-Primitive (Reference Types)**

### 📌 Primitive Data Types (Stored by Value)
- **Number** (`42`, `3.14`, `-10`, `NaN`, `Infinity`)
- **String** (`"Hello"`, `'World'`, `` `Template Literals` ``)
- **Boolean** (`true`, `false`)
- **Null** (Intentional absence of value)
- **Undefined** (Declared but not assigned)
- **Symbol** (Unique identifiers, used in object properties)
- **BigInt** (`9007199254740991n`, used for very large numbers)

### 📌 Non-Primitive Data Types (Stored by Reference)
- **Objects** `{ key: "value" }`
- **Arrays** `[1, 2, 3]`
- **Functions** `(function() { return "Hello"; })`

### 💡 Differences Between Primitive & Non-Primitive
| Feature       | Primitive  | Non-Primitive |
|--------------|-----------|--------------|
| Stored in memory | Stack | Heap |
| Passed by   | Value | Reference |
| Mutable?    | ❌ No | ✅ Yes |

### 📝 Code Example
```js
let a = 10;
let b = a; 
b = 20;
console.log(a); // 10 (primitive data types are copied by value)

let obj1 = { name: "Alice" };
let obj2 = obj1;
obj2.name = "Bob";
console.log(obj1.name); // "Bob" (objects are copied by reference)
```

---

## 2️⃣ `typeof` Operator (20-30 mins)
### 📌 What is `typeof`?
The `typeof` operator returns the data type of a value.

### 📌 How `typeof` Works
```js
console.log(typeof 42);         // "number"
console.log(typeof "hello");    // "string"
console.log(typeof true);       // "boolean"
console.log(typeof undefined);  // "undefined"
console.log(typeof null);       // ❌ "object" (JavaScript bug!)
console.log(typeof {});         // "object"
console.log(typeof []);         // "object"
console.log(typeof function(){}); // "function"
```

### ⚠️ Common Pitfalls
- `typeof null` returns "object" (a long-standing JavaScript bug).
- Arrays return "object" but can be checked using `Array.isArray()`.

---

## 3️⃣ Arithmetic, Comparison & Logical Operators (40-50 mins)
### 📌 Arithmetic Operators
| Operator | Meaning | Example |
|----------|---------|---------|
| `+` | Addition | `5 + 2 = 7` |
| `-` | Subtraction | `5 - 2 = 3` |
| `*` | Multiplication | `5 * 2 = 10` |
| `/` | Division | `5 / 2 = 2.5` |
| `%` | Modulus (Remainder) | `5 % 2 = 1` |
| `**` | Exponentiation | `2 ** 3 = 8` |

### 📌 Comparison Operators
| Operator | Meaning | Example |
|----------|---------|---------|
| `>` | Greater than | `5 > 3` (true) |
| `<` | Less than | `5 < 3` (false) |
| `>=` | Greater than or equal | `5 >= 5` (true) |
| `<=` | Less than or equal | `5 <= 3` (false) |

### 📌 Logical Operators
| Operator | Meaning | Example |
|----------|---------|---------|
| `&&` | AND | `true && false` (false) |
| `||` | OR | `true || false` (true) |
| `!` | NOT | `!true` (false) |
| `??` | Nullish Coalescing | `null ?? "default"` (`"default"`) |

---

## 4️⃣ Assignment, Bitwise, Unary & Relational Operators (40-50 mins)
### 📌 Assignment Operators
| Operator | Example |
|----------|---------|
| `=` | `a = 10` |
| `+=` | `a += 5` (same as `a = a + 5`) |
| `-=` | `a -= 5` |

### 📌 Bitwise Operators
| Operator | Meaning |
|----------|---------|
| `&` | AND |
| `|` | OR |
| `^` | XOR |
| `~` | NOT |
| `<<` | Left Shift |
| `>>` | Right Shift |

### 📌 Unary Operators
- `++` (Increment)
- `--` (Decrement)
- `typeof` (Returns type)
- `delete` (Deletes object property)

### 📌 Relational Operators
| Operator | Meaning | Example |
|----------|---------|---------|
| `in` | Checks property in object | `"name" in person` |
| `instanceof` | Checks object prototype | `obj instanceof Array` |

---

## 5️⃣ Equality Operators (`==`, `===`, `Object.is`) (30-40 mins)
### 📌 Loose vs. Strict Equality
```js
console.log(5 == "5");  // true (type coercion)
console.log(5 === "5"); // false (strict equality)
```

### 📌 `Object.is()`
Works like `===` but handles `NaN` and `-0` better.
```js
console.log(Object.is(NaN, NaN)); // true
console.log(NaN === NaN); // false
console.log(Object.is(-0, 0)); // false
```

---

## 6️⃣ Comma & Conditional Operators (20-30 mins)
### 📌 Comma Operator (,)
```js
let a = (1, 2, 3);
console.log(a); // 3 (returns last value)
```

### 📌 Conditional (`? :`)
```js
let age = 18;
let status = (age >= 18) ? "Adult" : "Minor";
console.log(status); // "Adult"
```

---
# 🎥 YouTube Live Session: JavaScript Data Types & Operators

## 1️⃣ Arithmetic Operators
- What is the difference between `x++` and `++x` in JavaScript?
- How does the `%` (modulus) operator work? Give an example.
- What happens when you divide a number by `0` in JavaScript?
- How can you perform exponentiation in JavaScript without using `Math.pow()`?
- What is the result of `"5" + 2` and `"5" - 2` in JavaScript?
- Explain the behavior of `NaN` in arithmetic operations.
- Why does `0.1 + 0.2` not exactly equal `0.3` in JavaScript?
- How does the `/` operator behave differently for integers and floating-point numbers?
- What is the result of `Infinity - Infinity` in JavaScript?
- Can JavaScript perform implicit type conversion during arithmetic operations? Provide examples.

## 2️⃣ Comparison Operators
- What is the difference between `==` and `===` in JavaScript?
- What will be the output of `"5" > 3` and `"5" < "10"`?
- How does JavaScript compare two objects using comparison operators?
- What is the result of `null == undefined`?
- Why does `false == 0` return `true` in JavaScript?
- How does JavaScript handle comparisons involving `NaN`?
- What happens when comparing different data types, like `true > 0` or `"10" > 5`?
- How does JavaScript treat empty strings in comparison operations?
- What is the result of `"abc" < "bcd"` and why?
- Why does `{}` == `{}` return `false` in JavaScript?

## 3️⃣ Logical Operators
- How does short-circuiting work with `&&` and `||` operators in JavaScript?
- What will be the output of `console.log(0 && "hello")`?
- What is the difference between `||` and `??` (Nullish Coalescing Operator)?
- How does `!` (logical NOT) operator work in JavaScript?
- What happens when you use logical operators on non-boolean values?
- Why does `true || "hello"` return `true`, but `"hello" || true` returns `"hello"`?
- How does JavaScript evaluate multiple logical operators in one expression?
- Can you use logical operators with objects? What happens?
- What is the result of `true && false || true`?
- How can you use logical operators as an alternative to if statements?

## 4️⃣ Assignment Operators
- How does `x += y` work internally in JavaScript?
- What is the difference between `x = x + y` and `x += y`?
- How does `x *= 2` behave when `x` is initially `undefined`?
- Can assignment operators be used with strings in JavaScript?
- What happens when using assignment operators with objects in JavaScript?
- What is the behavior of `x &= y` in JavaScript?
- How does `x ||= y` work, and how is it different from `x = x || y`?
- What is the difference between `x ??= y` and `x ||= y`?
- What is the result of `let x = 0; x += "5";`?
- Can you chain multiple assignment operators in JavaScript?

## 5️⃣ Bitwise Operators
- What does the `&` (AND) bitwise operator do in JavaScript?
- What is the difference between `>>` and `>>>`?
- How does `|` (bitwise OR) work in JavaScript?
- How can you use the `^` (XOR) operator to swap two variables?
- What does `~x` return when `x = 5`?
- How do you check if a number is even using bitwise operators?
- What is the result of `5 & 3` in binary?
- How can the `<<` (left shift) operator be used for multiplication?
- Why is `-1 >>> 1` not negative in JavaScript?
- How does JavaScript handle bitwise operations on floating-point numbers?

## 6️⃣ Unary Operators
- What is the difference between `typeof null` and `typeof undefined`?
- What happens when you apply `typeof` to an object?
- What does the `delete` operator do in JavaScript?
- Can you delete an array element using `delete`?
- What happens if you use `delete` on a variable declared with `let` or `const`?
- How does `void` work in JavaScript?
- What is the result of `+"123"` in JavaScript?
- Why does `+true` return `1`?
- What is the output of `let a = 5; console.log(++a, a++)`?
- How does `typeof function() {}` return "function"?

## 7️⃣ Relational Operators
- What does the `in` operator do in JavaScript?
- How does the `instanceof` operator work?
- What is the result of `"length" in []`?
- What is the difference between `in` and `hasOwnProperty()`?
- Why does `[] instanceof Array` return `true`?
- How does `instanceof` behave with class inheritance?
- What happens when `instanceof` is used on primitives?
- How can you check if an object is an instance of multiple classes?
- What is the result of `"toString" in {}`?
- How do you check if an object has a prototype of `null`?

## 8️⃣ Equality Operators
- What is the difference between `==` and `===` in JavaScript?
- How does JavaScript compare objects using `==` and `===`?
- What is the result of `null == undefined`?
- Why does `NaN == NaN` return `false`?
- How does `Object.is()` differ from `===`?
- What is the result of `0 == "0"`?
- How does JavaScript handle equality comparisons with type coercion?
- Why does `{}` == `{}` return `false`?
- What is the difference between `SameValueZero` and `Strict Equality`?
- How does JavaScript treat equality comparisons in `switch` statements?

## 9️⃣ Comma Operator
- How does the comma operator work in JavaScript?
- What is the result of `(1, 2, 3, 4, 5)`?
- Where is the comma operator commonly used?
- What happens if you use `return (1, 2, 3);` in a function?
- How can the comma operator be useful in `for` loops?
- What is the output of `console.log((2, 3, 4))`?
- Does the comma operator affect function parameter passing?
- Can you use the comma operator outside of expressions?
- How does the comma operator behave with destructuring?
- Why is the comma operator rarely used in modern JavaScript?

## 🔟 Conditional (`? :`) Operator
- How does the ternary operator work?
- What is the syntax of the ternary operator?
- Can you use multiple ternary operators in a single expression?
- What is the result of `true ? "yes" : "no"`?
- How does the ternary operator compare to `if-else`?
- What happens when a function is used inside a ternary expression?
- Can you assign a value using the ternary operator?
- How does nesting ternary operators impact readability?
- How do logical operators interact with the ternary operator?
- Can the ternary operator return different data types?