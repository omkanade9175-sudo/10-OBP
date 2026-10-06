// Q1.What is the difference between null and undefined ?

// undefined:-
// undefined means a variable has been declared, but no value has been assigned to it.

// let a;
// console.log(a); //undefined


// null:-
// null means the programmer intentionally assigns an empty value.

// let b = null;
// console.log(b); //null



// Main Difference-
// undefined	                         null
// Value has not been assigned	        Empty value intentionally assigned
// Usually occurs automatically     	Usually assigned by programmer
// typeof undefined → "undefined"	    typeof null → "object"
// Exam Answer:-
// undefined means a variable has been declared but has not been assigned a value,
//  whereas null represents an intentional absence of a value.



// Q2. What is Hoisting in JavaScript?

// Hoisting is JavaScript's behavior of processing declarations before executing the code.

// Example with var:

// console.log(a); // undefined
// var a = 10;

// The declaration is effectively treated like:

// var a;
// console.log(a);
// a = 10;

// Function declarations are also hoisted:

// sayHello();

// function sayHello() {
//     console.log("Hello");
// }

// For let and const, declarations are hoisted but remain in the
// Temporal Dead Zone (TDZ) until their declaration is reached.



// Q3. Difference between var, let, and const
// Feature          	var     	                     let	      const
// Scope	            Function	                     Block	      Block
// Reassignment      	Yes                              Yes	      No
// Redeclaration      	Yes    	                         No	          No
// Hoisting	            Yes, initialized as undefined	 Yes, TDZ	  Yes, TDZ

// Example:

// var a = 10;
// a = 20;

// let b = 10;
// b = 20;

// const c = 10;
// // c = 20; // Error

// When to use:

// Use const by default when reassignment isn't required.
// Use let when the value needs to change.
// Avoid var in modern JavaScript unless there is a specific reason.



// Q4. When should you use for, while, and do...while?

// for loop: Use when the number of iterations is known.

// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }

// Example: Printing numbers from 1 to 5.

// while loop: Use when the number of iterations is not known and depends on a condition.

// while (password !== "1234") {
//     // ask for password
// }

// do...while loop: Use when the code must execute at least once.

// do {
//     console.log("Menu");
// } while (choice !== 0);






// Q5. Exact Output
// Line 1
// console.log(0 || "" || null || undefined || "hello" || 42); // hello


// Line 2
// console.log("foo" && 10 && [] && 0 && "bar"); //0


// Line 3
// console.log(!!"false");   // true


// Line 4
// let a = 0, b = 1, c = 2;
// console.log(a || b && c);    // 2

let num=[1,2,3];
num.forEach(n=>console.log(n));
console.log(num);