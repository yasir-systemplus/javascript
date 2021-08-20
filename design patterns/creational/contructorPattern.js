class Person {
  constructor(name, age, ssn) {
    this._name = name;
    this._age = age;
    this._ssn = ssn;
  }
}

class Teahcer extends Person {
  constructor(name, age, ssn, noOfYearsService) {
    super(name, age, ssn);
    this._noOfYearsServuce = noOfYearsService;
  }
}

const ahmadButta = new Teahcer("Ahmad Bhutta", 23, "231231@21", 23);

console.log(ahmadButta);
