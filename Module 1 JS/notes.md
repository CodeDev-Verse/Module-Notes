# 🔥 JavaScript: Map, WeakMap, Set, WeakSet — Complete Guide with Use Cases & Examples

## 🔷 Map in JavaScript

### ✅ What is Map?
A `Map` is a collection of key-value pairs where:
- Keys can be of any type (objects, functions, numbers, etc.)
- Maintains insertion order
- Allows fast retrieval using keys

### 🧠 Real-World Analogy
Like a phonebook where each contact name (key) maps to a phone number (value).

### 🧰 Use Cases

#### 1. Storing App Configurations
Use `Map` to manage key-value settings for your app, like theme, language, or version. This makes it easy to read and update settings at runtime.
```js
const config = new Map([
  ['theme', 'dark'],
  ['version', '1.2.3'],
]);
```
📌 *Why?* Easy to lookup or update settings using keys.

#### 2. Data Caching
Cache data from expensive operations or API calls. If data already exists, retrieve it directly from the cache instead of making a new call.
```js
const cache = new Map();
function fetchData(id) {
  if (cache.has(id)) return cache.get(id);
  const data = expensiveFetch(id);
  cache.set(id, data);
  return data;
}
```
📌 *Why?* Avoids redundant API calls for the same data.

#### 3. Metadata for DOM Elements
Attach additional information to DOM elements without changing the actual elements themselves.
```js
const meta = new Map();
meta.set(buttonElement, { clicked: false });
```
📌 *Why?* Map DOM nodes to extra info without modifying the element.

### 🛠️ Common Methods
```js
map.set(key, value);      // Add key-value
map.get(key);             // Get value
map.has(key);             // Check existence
map.delete(key);          // Remove a key-value
map.clear();              // Remove all entries
map.size;                 // Number of items
```

### 🔁 Iteration
```js
for (let [key, value] of map) {}
map.forEach((value, key) => {});
```

## 🔷 WeakMap in JavaScript

### ✅ What is WeakMap?
Like a `Map`, but:
- Keys must be objects
- Keys are weakly referenced
- Not iterable and has no size info

### 🧠 Real-World Analogy
Like attaching sticky notes to specific items — if the item is gone, the note disappears too.

### 🧰 Use Cases

#### 1. Private Data in Classes
Store private class fields externally and keep them truly private, as they aren't accessible from the outside.
```js
const _private = new WeakMap();
class User {
  constructor(name) {
    _private.set(this, { name });
  }
  getName() {
    return _private.get(this).name;
  }
}
```
📌 *Why?* Data stays hidden and automatically gets cleaned when the object is gone.

#### 2. Memory-Safe DOM Metadata
Store data tied to DOM elements in a memory-safe way. When the DOM element is removed, its associated metadata is also garbage collected.
```js
const states = new WeakMap();
states.set(button, { isHovered: true });
```
📌 *Why?* No memory leaks — when button is removed, its data disappears too.

### 🛠️ Common Methods
```js
weakMap.set(obj, value);
weakMap.get(obj);
weakMap.has(obj);
weakMap.delete(obj);
```

## 🔷 Set in JavaScript

### ✅ What is Set?
A `Set` is a collection of unique values:
- Duplicate entries are ignored
- Maintains insertion order
- Values can be of any type

### 🧠 Real-World Analogy
Like a VIP guest list — no person can be added more than once.

### 🧰 Use Cases

#### 1. Removing Duplicates from Arrays
Transform an array with duplicates into a clean array of unique items.
```js
const numbers = [1, 2, 2, 3];
const unique = [...new Set(numbers)];
```
📌 *Why?* Fast and clean way to ensure uniqueness.

#### 2. Tracking User Actions
Track user interactions like 'click', 'scroll', or 'keypress' only once.
```js
const actions = new Set();
actions.add('click');
actions.add('scroll');
```
📌 *Why?* Prevents duplicate tracking of events.

#### 3. Finding Common Items (Intersection)
Find common elements between two arrays using `Set`.
```js
const a = new Set([1, 2, 3]);
const b = new Set([3, 4, 5]);
const intersection = [...a].filter(x => b.has(x)); // [3]
```
📌 *Why?* Set makes comparing and filtering unique values simple.

### 🛠️ Common Methods
```js
set.add(value);           // Add value
set.has(value);           // Check value
set.delete(value);        // Remove value
set.clear();              // Clear all
set.size;                 // Count
```

### 🔁 Iteration
```js
for (let value of set) {}
set.forEach(value => {});
```

## 🔷 WeakSet in JavaScript

### ✅ What is WeakSet?
A `WeakSet` is like a `Set`, but:
- Only objects can be stored
- Objects are weakly referenced
- Not iterable, no `.size` property

### 🧠 Real-World Analogy
Like writing names on a whiteboard that vanish when people leave the room.

### 🧰 Use Cases

#### 1. Track DOM Elements
Track which DOM elements are active without risking memory leaks.
```js
const hoveredElements = new WeakSet();
hoveredElements.add(div);
```
📌 *Why?* Elements removed from the DOM are automatically garbage collected.

#### 2. Marking Processed Objects
Mark objects as processed to avoid re-processing.
```js
const processed = new WeakSet();
function handle(obj) {
  if (processed.has(obj)) return;
  // process obj
  processed.add(obj);
}
```
📌 *Why?* Helps with deduplication of work and automatic memory cleanup.

### 🛠️ Common Methods
```js
weakSet.add(obj);
weakSet.has(obj);
weakSet.delete(obj);
```

## 🧠 Final Comparison Table

| Feature           | Map | WeakMap | Set | WeakSet |
|-------------------|-----|---------|-----|---------|
| Key/Value         | ✅  | ✅      | ❌  | ❌      |
| Key Type          | Any | Object only | –   | Object only |
| Value Uniqueness  | ❌  | ❌      | ✅  | ✅      |
| Garbage Collected | ❌  | ✅      | ❌  | ✅      |
| Iterable          | ✅  | ❌      | ✅  | ❌      |
| Use Case          | Caching, configs | Private data, DOM refs | Unique lists, user actions | Track active objects safely |

