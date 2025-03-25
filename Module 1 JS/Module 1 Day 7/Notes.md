# **1. `if...else` in JavaScript (40 mins)**  

### **1.1 Understanding `if...else` Statements**  

#### **Basic Syntax**  
```js
if (condition) {
    // Code executes if condition is true
} else {
    // Code executes if condition is false
}
```

#### **Example:**  
```js
let age = 18;
if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}
```


#### **What Happens Behind the Scenes?**
JavaScript uses **Automatic Semicolon Insertion (ASI)** to **automatically insert semicolons** when it thinks a statement is complete. This can lead to unexpected behavior if you don't explicitly include curly braces `{}`.

##### **Example of Unexpected Behavior**  
```js
if (true) 
    console.log("Hello");
    console.log("World");
```
✅ Expected Output:
```
Hello
```
🚫 Actual Output:
```
Hello
World
```

#### **Why Does This Happen?**
When JavaScript encounters the `if (true)` condition, it assumes the **next immediate statement** is part of the `if` block. Since `console.log("Hello");` is a single statement, JavaScript thinks that’s the **end of the `if` block**. The next `console.log("World");` is **not part of the `if`** and always runs.

🔍 **What Happens Internally?**
- JavaScript **parses** the code and finds `if (true)`.
- It sees `console.log("Hello");` and **assumes the if-block ends**.
- `console.log("World");` is **not inside the if-block** and executes unconditionally.

#### **How to Avoid This Issue?**
✅ **Always use curly braces `{}`** to make the block explicit:
```js
if (true) {
    console.log("Hello");
}
console.log("World"); // Now this runs independently
```


---

### **1.2 The Hidden Gotchas in `if...else`**  

#### **Gotcha 1: Missing Braces & Automatic Semicolon Insertion (ASI)**  
```js
if (true) 
    console.log("Hello");
    console.log("World"); // This always runs!
```
🔍 **Fix:** Always use braces `{}` for clarity.  
```js
if (true) {
    console.log("Hello");
}
console.log("World");
```

#### **Gotcha 2: Type Coercion in Conditionals**  
JavaScript considers some values as **falsy** and others as **truthy** in conditions.  

```js
if ("0") {
    console.log("This runs!"); // "0" is truthy
}
```
🔍 **Fix:** Use **explicit comparisons**.  
```js
if ("0" === true) {
    console.log("This will not run!");
}
```

#### **Gotcha 3: Comparing `null` and `undefined`**  
```js
if (null == undefined) {
    console.log("This runs because of type coercion!");
}
```
🔍 **Fix:** Use **strict equality (`===`)** to avoid unintended behavior.


#### **Why Does This Happen?**
JavaScript **automatically converts values** in conditional statements using **truthy/falsy evaluation**. When a value is used in a boolean context (like inside `if(condition)`), JavaScript **implicitly coerces** it into `true` or `false`.

#### **Falsy Values in JavaScript:**
- `false`
- `0`
- `-0`
- `""` (empty string)
- `null`
- `undefined`
- `NaN`

✅ **Example:**
```js
if ("0") {
    console.log("This runs!");
}
```
🚫 Many expect `"0"` to be `false`, but **it’s a truthy value**, so the block executes.

#### **How Does JavaScript Internally Handle This?**
When evaluating `if ("0")`, JavaScript:
1. **Checks if "0" is a boolean** → No, it’s a string.
2. **Converts "0" into a boolean** → Since it's a non-empty string, it evaluates to `true`.

🔍 **Fix: Always Use Explicit Comparisons**
```js
if ("0" === true) {  // This will not run because "0" is not exactly true
    console.log("This won't execute!");
}
```

---

### **1.3 Readability & Nested Conditions**  

#### **Problem: Deeply Nested Conditions (Pyramid of Doom)**  
```js
if (user) {
    if (user.isActive) {
        if (user.role === "admin") {
            console.log("Access granted!");
        }
    }
}
```
🔍 **Solution: Guard Clauses**  
```js
if (!user || !user.isActive || user.role !== "admin") return;
console.log("Access granted!");
```

A **Guard Clause** is a coding practice where **you immediately return from a function if a condition is not met**, rather than wrapping the entire function in an `if` statement.

#### **Why Use Guard Clauses?**
- **Avoids deep nesting** (Pyramid of Doom).
- **Improves readability** and makes code easier to understand.
- **Prevents unnecessary execution**.

✅ **Without Guard Clauses (Deep Nesting)**
```js
function processOrder(order) {
    if (order) {
        if (order.isPaid) {
            if (!order.isCancelled) {
                console.log("Processing order...");
            }
        }
    }
}
```

✅ **With Guard Clauses (Cleaner Code)**
```js
function processOrder(order) {
    if (!order) return;
    if (!order.isPaid) return;
    if (order.isCancelled) return;
    
    console.log("Processing order...");
}
```

---

### **1.4 Best Practices for Clean `if...else` Statements**  

1. **Use Early Returns:**  
   ```js
   if (!user) return;
   if (!user.isActive) return;
   if (user.role !== "admin") return;
   console.log("Access granted!");
   ```


#### **Why Use Early Returns?**
- **Reduces unnecessary execution**.
- **Keeps code flat and easy to read**.
- **Improves maintainability**.


🚀 **This prevents unnecessary nesting and makes the function clearer!**
2. **Avoid Complex Nested Conditions:** Extract logic into functions.  
3. **Be Mindful of Type Coercion:** Use `===` instead of `==`.  

---

# **2. `switch` Statements (30 mins)**  

### **2.1 When to Use `switch` Instead of `if...else`**  

🔍 **Use `switch` when:**
- You have **multiple possible values** for a single variable.
- You need a **clearer structure** than multiple `if...else if` statements.

```js
let fruit = "apple";
switch (fruit) {
    case "apple":
        console.log("It's an apple!");
        break;
    case "banana":
        console.log("It's a banana!");
        break;
    default:
        console.log("Unknown fruit");
}
```

---

### **2.1.1 How `if...else` and `switch` Work Internally**  

✅ **How `if...else` Works Internally**
1. **Evaluates conditions one by one**.
2. **Executes the first true condition**.
3. **If no condition is met, runs the `else` block**.

✅ **How `switch` Works Internally**
1. **Evaluates the `switch(expression)` once**.
2. **Compares the value using strict equality (`===`)**.
3. **Executes the matching case block**.
4. **Continues executing until a `break` is found**.

---

### **2.2 The Gotchas in `switch` Statements**  

#### **Gotcha 1: Forgetting `break` Causes Fall-Through**  
```js
let color = "red";
switch (color) {
    case "red":
        console.log("Red!");
    case "blue":
        console.log("Blue!"); // Runs even if color is "red"
}
```


### **Why?**  

```js
let color = "red";
switch (color) {
    case "red":
        console.log("Red!");
    case "blue":
        console.log("Blue!"); // Runs even if color is "red"
}
```

🚫 Expected Output:
```
Red!
```
✅ Actual Output:
```
Red!
Blue!
```

#### **Why Does This Happen Internally?**
1. **JavaScript finds the matching case (`"red"`)**.
2. **Executes that case** but **does not stop** unless a `break` is encountered.
3. **Continues executing all the next cases**.

✅ **Fix: Always Use `break`**
```js
switch (color) {
    case "red":
        console.log("Red!");
        break;
    case "blue":
        console.log("Blue!");
        break;
}
```

🔍 **Fix:** Always use `break`.  

#### **Gotcha 2: Type Coercion in `switch`**  
```js
let value = "10";
switch (value) {
    case 10:
        console.log("Matched!"); // Won't match due to strict comparison
        break;
}
```
🔍 **Fix:** Ensure values have the **same type**.

#### **Gotcha 3: Using `default` for Error Handling**  
```js
switch (action) {
    case "create":
    case "update":
    case "delete":
        console.log("Valid action");
        break;
    default:
        throw new Error("Invalid action!");
}
```

---

# **3. Ternary Operator (`? :`) (20 mins)**  

### **3.1 Syntax & Examples**  
```js
let age = 20;
let message = age >= 18 ? "Adult" : "Minor";
console.log(message);
```

### **3.2 Gotchas in Ternary Operators**  

#### **Gotcha 1: Readability Issues in Nested Ternaries**  
```js
let access = user.isAdmin ? "Admin" : user.isEditor ? "Editor" : "User";
```
🔍 **Fix:** Use `if...else` for better readability.

#### **Gotcha 2: Mixing Side Effects in Ternaries**  
```js
isMember ? console.log("Discount applied") : console.log("No discount");
```
🔍 **Fix:** Don't use ternary for execution, only for value assignment.

🔍 **Why Is Ternary Operator Faster?**
- **Avoids extra variable declarations**.
- **More optimized for JavaScript engines**.


---

# **4. Short-Circuiting (`&&`, `||`) (30 mins)**  

### **4.1 Logical `&&` and `||` Behavior**  
- **`&&` (AND) returns the first falsy value or the last truthy value.**  
  ```js
  console.log(0 && "Hello"); // 0
  console.log(1 && "Hello"); // "Hello"
  ```
- **`||` (OR) returns the first truthy value or the last falsy value.**  
  ```js
  console.log(0 || "Hello"); // "Hello"
  console.log(null || undefined); // undefined
  ```

---

### **4.2 Optimizing Conditions with Short-Circuiting**  

#### **Example: Providing Default Values**  
```js
let username = user.name || "Guest";
```
🔍 **Fix for `0`, `""`, and `false` being treated as falsy:**  
```js
let username = user.name ?? "Guest"; // Uses Nullish Coalescing (`??`)
```

---

### **4.3 Common Short-Circuiting Patterns**  

#### **Conditionally Execute a Function**
```js
isAdmin && grantAccess();
```
**Equivalent to:**  
```js
if (isAdmin) {
    grantAccess();
}
```

#### **Combining Ternary and Short-Circuiting**
```js
let status = isLoggedIn ? (isAdmin && "Admin") || "User" : "Guest";
```
🔍 **Fix:** Avoid overcomplication.

---

# **Conclusion & Key Takeaways (5 mins)**  

✅ **Use `if...else` carefully**, avoid deep nesting.  
✅ **Use `switch` for better readability** when checking multiple values.  
✅ **Ternary operators are great** for concise value assignments but should be used wisely.  
✅ **Short-circuiting optimizes code** but must be used carefully to avoid unexpected falsy values.  
