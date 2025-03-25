## **🔹 Conceptual Questions**  

1. **How does JavaScript evaluate conditions internally? Explain with execution context details.**  
2. **What is the difference between `if...else` and `switch`? When would you prefer one over the other?**  
3. **How does automatic type conversion (type coercion) affect `if` conditions?**  
4. **How does JavaScript handle missing braces `{}` in `if...else` statements?**  
5. **Why does `if ("false")` return `true`, but `if (false)` returns `false`?**  

---

## **🔹 Edge Case Questions**  

6. **Why does `if ([])` evaluate to `true`, but `if ([] == false)` also evaluates to `true`?**  
7. **What will be the output of the following code and why?**
   ```js
   if (null == undefined) console.log("Equal");
   if (null === undefined) console.log("Strictly Equal");
   ```
8. **Why does `if (NaN)` always evaluate to `false`?**  
9. **Explain why `if (0)` evaluates to `false`, but `if ("0")` evaluates to `true`.**  
10. **Why should you avoid nested ternary operators in JavaScript?**  

---

## **🔹 Execution Flow & Optimization**  

11. **How does JavaScript optimize `if...else` statements at runtime?**  
12. **What is short-circuiting in JavaScript? How does it help in performance optimization?**  
13. **What will be the output of this code? Why?**
    ```js
    let a = 10;
    let b = a > 5 && console.log("Executed");
    console.log(b);
    ```
14. **Why does this code print `"Default"` even though `value` is defined?**
    ```js
    let value = 0;
    console.log(value || "Default");
    ```
15. **Why is the order of conditions important in `if...else if` chains?**  

---

## **🔹 `switch` Statement Questions**  

16. **How does `switch` internally compare values? Why doesn't `switch("1")` match `case 1`?**  
17. **What happens if you forget the `break` statement inside a `switch`?**  
18. **Why is `switch` sometimes preferred over `if...else`?**  
19. **Can a `switch` statement have conditions other than equality checks?**  
20. **How can you implement a `switch` case that evaluates ranges (`1-10`, `11-20`, etc.)?**  

---

## **🔹 Ternary Operator & Short-Circuiting Questions**  

21. **Why does the following ternary expression not behave as expected?**
    ```js
    let result = true ? false : true ? false : true;
    ```
22. **What is the difference between `||` and `??` in JavaScript?**  
23. **How can you use short-circuiting to assign default values efficiently?**  
24. **What is the difference between `&&` and `||` in condition evaluations?**  
25. **What are the performance benefits of using short-circuiting over traditional `if...else`?**  
