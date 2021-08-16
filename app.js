console.log("Yasir ".repeat(20));

function callMe(name = "Unknow", age = "0") {
  console.log(name, age);
}

callMe("Yasir");

const students = (...stnds) => {
  return stnds.join(", ");
};

console.log(students("Bilal", "Farhan"));

const person = {
  name: "Bilal",
  age: 23,
  hobbies: ["Staring", "Gazing", "Waching", "Seeing"],
  getHobbyString: function () {
    return this.hobbies.map((h) => {
      return h.toUpperCase();
    });
  },
};

console.log(person.getHobbyString());

function* countTo5() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

let counter = countTo5();

console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
console.log(counter.next()); // Done with it.
