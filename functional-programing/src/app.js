/* eslint-disable no-unused-vars */
const person = {
  name: "Farhan",
  age: 23,
};

person.name = "Qasim"; // Not allowed

const getDouble = (num) => num * 2;

console.log(getDouble(2));

const getCar = (props) => ({
  ...props,
});

console.log(getCar({ name: "Mehran", cost: 34234 }));

const sayHello = (name) => console.log("Hello " + name);

const sayHello2 = sayHello;
sayHello2("Baseer");

const myFunction = true
  ? () => console.log("First option")
  : () => console.log("Second option");

const DEVELOPMENT = true;

const fetchDataReal = () => {
  // time-intensive operations here!
};

const fetchDataFake = () => ({
  name: "Ahmad",
  age: 52,
});

const fetchData = DEVELOPMENT ? fetchDataFake : fetchDataReal;

const createMultiplier = (y) => (x) => x * y;

const double = createMultiplier(2);
const triple = createMultiplier(3);
const quadruple = createMultiplier(4);

double(3);

// Returning function from functions

const createPrinter = () => {
  const myFavoriteNumber = 42;

  return () => console.log("My favorite number is ${myFavoriteNumber");
};

const printer = createPrinter();
printer();

// Creating Private Variables

const Person = ({ name, age, job }) => {
  var _name = name;
  var _age = age;
  var _job = job;

  return {
    getName: () => _name,
    getAge: () => _age,
    getJob: () => _job,

    setJob: (newJob) => (_job = newJob),
  };
};

const me = Person({ name: "Shaun", age: 25, job: "developer" });
console.log(me.getJob());
me.setJob("senior developer");
console.log(me.getJob());

// Closures

const divide = (x, y) => x / y;

const secondArgumentIsntZero =
  (func) =>
  (...args) => {
    if (args[1] === 0) {
      console.log("Error: dividing by zero");
      return null;
    }

    return func(...args);
  };

const divideSafe = secondArgumentIsntZero(divide);

console.log(divideSafe(7, 0));
console.log(divideSafe(5, 3));
