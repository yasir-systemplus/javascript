const message = "We love Pakistan!";

console.log(message.startsWith("we")); //false;
console.log(message.startsWith("We")); //true;
console.log(message.endsWith("!")); //true;

console.log(message.indexOf("e"));
console.log(message.indexOf("a", 3));

console.log(message.includes("S")); //false;
