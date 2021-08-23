// // * Creating map
// const mySchedule = new Map();

// // * Adding key-value pairs
// mySchedule.set("monday", "🍚");
// mySchedule.set("tuesday", "🍔");
// mySchedule.set("wednesday", "😍");

// console.log(mySchedule);

// // * Accessing values with keys
// console.log(mySchedule.get("monday"));
// console.log(mySchedule.get("tuesday"));

// // * Do your map has that key?
// console.log(mySchedule.has("thursday"));
// console.log(mySchedule.has("monday"));

// // * Length of map
// console.log(mySchedule.size);

// // * Delete a key
// console.log(mySchedule.delete("monday"));
// console.log(mySchedule.delete("sunday"));

// // *I Iterators

// const iterator = mySchedule.entries();

// console.log(iterator.next().value);
// console.log(iterator.next().value);

// console.log("From Loop");
// for (const set of mySchedule.entries()) {
//   console.log(set);
// }

// mySchedule.forEach((value, key) => {
//   console.log(`${key}: ${value}`);
// });

// // * Clearing the map
// mySchedule.clear();

// * Weak Maps

const ahmad = {
  name: "Ahmad Bhutta",
};

const bilal = {
  name: "Bilal",
};

const junaid = {
  name: "juanid",
};

const farhanFromSweden = {
  name: "Farhan",
  country: "Sweden",
};

const persons = new WeakMap();

persons.set(ahmad, "Ahmad Bhutta is a good person.");
persons.set(bilal, "Bilal Saeed is a good person.");
persons.set(junaid, "Junaid is dirty boy.");
persons.set(farhanFromSweden, "Farhan from Sweeden is also a good boi.");

console.log(persons.get(ahmad));
