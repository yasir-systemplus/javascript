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
  const _name = name;
  const _age = age;
  let _job = job;

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

// Spread operator

const career = {
  university: "pgc",
  current: "systemplus",
};

const person5 = {
  name: "Farhan",
  fName: "X-Y-Z",
};

const combinedData = {
  ...person,
  ...career,
};

console.log(combinedData);

const numbers = [1, 2, 3, 4, 5];
const number2 = [6, 7, 8];

const combinedNumbers = [...numbers, ...number2];

const ddoubled = numbers.map((n) => n * 2);

const mssage = "We love Pakistan!";

// mssage.replace(" ", "")
const messageArr = mssage.split(" ");

console.log(messageArr.join(""));

const ages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isEven = (x) => x % 2 === 0;

const evenNumbers = numbers.filter((x) => x % 2 === 0);

const words = ["hello", "goodbye", "the", "Antarctica"];

const createLengthTest = (minLength) => (word) => word.length > minLength;

const longWords = words.filter(createLengthTest(5));

console.log(longWords);

const employees = [
  {
    name: "Jane Doe",
    salary: 90000,
  },
  {
    name: "Donald Jones",
    salary: 65000,
  },
  {
    name: "Donna Appleseed",
    salary: 1500000,
  },
  {
    name: "John Smith",
    salary: 250000,
  },
];

const makesMoreThanOneMillion = (employee) => employee.salary > 1000000;

const result = employees.some(makesMoreThanOneMillion);

const formValues = ["Shaun", "Wassell", "Maine", "developer"];

const isNotEmpty = (string) => !!string;

const allFieldsFilled = formValues.every(isNotEmpty);

console.log(allFieldsFilled);

const mixedUpNumbers = [10, 2, 4, 3, 7, 5, 8, 9, 1, 6];

const ascending = (a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
};

const descending = (a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
};

const sortedNumbers = mixedUpNumbers.slice().sort(descending);

console.log(sortedNumbers);

const students = [
  {
    name: "John Olsen",
    age: 54,
    jobTitle: "developer",
    salary: 70000,
  },
  {
    name: "Karen Norris",
    age: 34,
    jobTitle: "engineer",
    salary: 75000,
  },
  {
    name: "Daryl Cline",
    age: 25,
    jobTitle: "secretary",
    salary: 54000,
  },
  {
    name: "Abbey Garcia",
    age: 40,
    jobTitle: "developer",
    salary: 100000,
  },
  {
    name: "Finn Smith",
    age: 29,
    jobTitle: "engineer",
    salary: 40000,
  },
  {
    name: "Eve Wordsworth",
    age: 20,
    jobTitle: "developer",
    salary: 65000,
  },
  {
    name: "Ronald Jacobs",
    age: 60,
    jobTitle: "developer",
    salary: 90000,
  },
];

const developers = employees.filter(
  (employee) => employee.jobTitle === "developer"
);
const developerSalaries = developers.map((developer) => developer.salary);
const totalDeveloperSalaries = developerSalaries.reduce((acc, x) => acc + x, 0);
const averageDeveloperSalary =
  totalDeveloperSalaries / developerSalaries.length;
console.log(averageDeveloperSalary);

const nonDevelopers = employees.filter(
  (employee) => employee.jobTitle !== "developer"
);

const nonDeveloperSalaries = nonDevelopers.map((nonDev) => nonDev.salary);
const totalNonDeveloperSalaries = nonDeveloperSalaries.reduce(
  (acc, x) => acc + x,
  0
);

const averageNonDeveloperSalary =
  totalNonDeveloperSalaries / nonDeveloperSalaries.length;
console.log(averageNonDeveloperSalary);
