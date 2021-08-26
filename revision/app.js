const { compose, pipe } = require("lodash/fp");

/**
 * ⚠️ Some of functions are declared with let
 */

/* Function Programming
 * Functions are first class citizens and acts like functions
 * ✅ Functions can be passed as an arguments
 * ✅ Functions can be returned from function
 * ✅ Functions can be assigned to variables
 */

function printer(fn) {
  console.log(fn());
}

function sayHello() {
  return "Hi Yasir";
}

printer(sayHello);

function add5() {
  return function (num) {
    return num + 5;
  };
}

const accumulator = add5();

console.log(accumulator(5));

/*
 * High order functions
 * ✅ take functions as an arguments
 * ✅ returns a function from function
 * ✅ or both at the same time
 */

const numbers = [2, 3, 5, 6, 1];

// ** Example no. 1
numbers.map((num) => num + 1);

// ** Example no. 2
setTimeout(() => {
  console.log("Delayed response");
}, 5000);

/*
 * Function Composition
 */

let trim = (str) => str.trim();
let wrappedInDiv = (str) => `<div>${str}</div>`;
let toLowerCase = (str) => str.toLowerCase();

let str = "         JavaScript        ";

// This is called Function Composition
const result = wrappedInDiv(toLowerCase(trim(str)));

/* Problems
 * ❌ We must from left to right wrappedInDiv<-toLowerCase<-trim
 * ❌ These paranthesis are ugly. We must remove them from the end.
 */

// 💡 Soltion: Composing and piping
// ⬇️ Install: lodash

// ✏️ Tip: compose is a high order function as it takes some functions in args
let transform = compose(wrappedInDiv, toLowerCase, trim);

/*
 * Composing
 * ✅ more cleaner code
 * ✅ easy to read
 * ✅ no nested paranthesis
 * ❌ function order is reverse
 */

let output = transform(str);
console.log(output);

/* To overcome the problem of composing we use pipe
 * Pipline
 * ✅ more cleaner code
 * ✅ easy to read
 * ✅ no nested paranthesis
 * ✅ function order is not reverse
 */

transform = pipe(trim, toLowerCase, wrappedInDiv);
output = transform(str);
console.log(output);

/**
 * Currying
 */

trim = (str) => str.trim();
wrappedInDiv = (str) => `<div>${str}</div>`;
wrappedInSpan = (str) => `<span>${str}</span>`;
toLowerCase = (str) => str.toLowerCase();

/*
 * 😟 Problem here is that there is duplication at
 * dive and span. We must remove it.
 * So we are define in some other way
 */

let wrap = (type, str) => `<${type}>${str}</${type}>`;

// ⛔ but transform = pipe(trim, toLowerCase, wrap('div'));
// ⛔ Wouldn't work like.
// 😃 Here we need currying
// 🔄️ Rewriting wrap method with curried version

wrap = (type) => (str) => `<${type}>${str}</${type}>`;

/*
 * Pure Functions: These produce same output on same input.
 * ✅ No random value
 * ✅ No current date/time
 * ✅ No global state
 * ✅ No mutation of parameters
 * 👏 Self documented
 * 👏 Easily testable
 * 👏 concurrency
 * 👏 Cacheable like pure component in react
 */

function Button(value, target) {
  return `<a href="${target}">${value}</a>`;
}
