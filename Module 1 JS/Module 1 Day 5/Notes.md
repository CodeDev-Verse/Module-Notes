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