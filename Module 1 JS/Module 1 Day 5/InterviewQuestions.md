# 🎥 JavaScript Data Types & Operators

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