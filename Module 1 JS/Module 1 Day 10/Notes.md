# 🏆 Recursion, Closures, and Function Borrowing in JavaScript

## 📌 Recursion in JavaScript

### 🔹 What is Recursion?
Recursion is a technique where a function calls itself until it reaches a base condition. It consists of:

- **Base Case** – The stopping condition that prevents infinite recursion.
- **Recursive Case** – The function calling itself with modified parameters.

### 🔹 Example: Factorial Calculation
```js
function factorial(n) {
    if (n === 0) return 1; // Base Case
    return n * factorial(n - 1); // Recursive Case
}
console.log(factorial(5)); // 120
```

### 🔹 Function Declarations vs. Named & Unnamed Function Expressions in Recursion

There are three common ways to define a function for recursion: **Function Declarations, Named Function Expressions, and Unnamed (Anonymous) Function Expressions.**

#### 🏷 Function Declaration
A **function declaration** is hoisted and available throughout its scope.

```js
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // 120
```
✅ **Advantages:**
- Hoisted, so it can be called before its definition.
- Self-referencing by name.
- Better readability in stack traces.

❌ **Disadvantages:**
- Cannot be reassigned dynamically.
- Potential naming conflicts in the global scope.

---

#### 🏷 Named Function Expression (NFE)
A **Named Function Expression** has an internal function name, useful for recursion within expressions.

```js
const factorial = function fact(n) {
    if (n === 0) return 1;
    return n * fact(n - 1); // Uses its own name for recursion
};
console.log(factorial(5)); // 120
```
✅ **Advantages:**
- Safer than function declarations (avoids hoisting issues).
- Function can refer to itself even if assigned to a different variable.
- Better debugging (function name appears in stack traces).

❌ **Disadvantages:**
- Cannot be called before its definition due to lack of hoisting.

---

#### 🏷 Unnamed (Anonymous) Function Expression
An **Unnamed Function Expression** lacks an internal name, requiring `arguments.callee` for recursion (deprecated in strict mode).

```js
const factorial = function(n) {
    if (n === 0) return 1;
    return n * arguments.callee(n - 1); // Using arguments.callee for recursion
};
console.log(factorial(5)); // 120
```
❌ **Disadvantages:**
- No internal self-reference: If assigned to another variable, it cannot refer to itself.
- `arguments.callee` is deprecated in strict mode.
- Poor debugging (appears as `<anonymous>` in stack traces).

✅ **Best Choice for Recursion:** **Named Function Expressions**
- Provides internal self-reference.
- Works well when assigned to variables.
- Offers better debugging and strict mode compatibility.

### ⚠️ Gotchas & Common Mistakes
- **Missing Base Case** → Infinite Recursion → Stack Overflow
```js
function infinite() {
    return infinite(); // No base case! Causes a stack overflow.
}
```
- **Excessive Function Calls** – Deep recursion can be inefficient.
- **Mutual Recursion** – Functions calling each other can be tricky to debug.

### 🛠 Optimization Techniques
### Tail Call Optimization (TCO) [ES6+]

Tail Call Optimization (TCO) is a technique where recursive function calls do not grow the call stack if the recursive call is the last operation in the function. This can significantly improve performance and prevent stack overflow errors.

**Tail Call Optimization (TCO) in Simple Terms**
Imagine you have a to-do list. Every time you add a new task to the list, you have to remember all the previous tasks before completing the current one. If your list keeps growing without finishing old tasks, your brain gets overloaded and crashes (just like a stack overflow error in recursion).

Now, what if you could finish each task before adding a new one? That way, your brain never gets overloaded, and you can keep going without worrying about remembering too much at once.

This is exactly what Tail Call Optimization (TCO) does in programming!

Normally, when a function calls itself (recursion), the computer keeps a record of every unfinished task (function call).

With TCO, if the function doesn’t need to remember anything before calling itself, the computer can replace the old task with the new one, instead of stacking them up.

This means the computer uses less memory, avoids crashing, and can handle big calculations more efficiently.

🔹 Example in Real Life:
Imagine you’re giving a message to a line of people:

If each person remembers the previous messages and passes them along, they will get overwhelmed.

But if each person forgets the previous message after passing it, they can continue indefinitely without any problem (this is how TCO works!).

📌 Why is TCO useful?
✅ Saves memory
✅ Prevents crashes
✅ Makes recursion work smoothly for big tasks

#### Example Without TCO (Regular Recursion)
```js
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // 120
```
**Issue:** This approach builds up a stack for each recursive call.

#### TCO-Friendly Factorial Function
```js
function optimizedFactorial(n, acc = 1) {
    if (n === 0) return acc;
    return optimizedFactorial(n - 1, acc * n); // Tail call (last operation)
}
console.log(optimizedFactorial(5)); // 120
```
**Why this works:**
- The recursive call is the last operation.
- JavaScript engines can reuse the same stack frame (if TCO is supported).

**Does JavaScript Support TCO?**
- ES6 introduced TCO in strict mode.
- **Not widely supported in V8 (Chrome, Node.js), but works in Safari (JavaScriptCore).**

#### Workaround: Manual Tail Call Optimization Using Loops
```js
function iterativeFactorial(n) {
    let acc = 1;
    while (n > 0) {
        acc *= n;
        n--;
    }
    return acc;
}
console.log(iterativeFactorial(100000)); // Works without stack overflow
```

### Common Gotchas & Mistakes in Recursion
- **Missing Base Case** → Infinite Recursion → Stack Overflow.
- **Excessive Function Calls** – Deep recursion can be inefficient.
- **Mutual Recursion** – Functions calling each other can be tricky to debug.

---

### ❓ Interview Questions
- How does recursion work in JavaScript, and when should you use it?
- What are the risks of deep recursion?
- What is tail call optimization, and does JavaScript support it?
- What is a Named Function Expression, and how does it help in recursion?
- What is an Unnamed Function Expression, and why is `arguments.callee` discouraged?
