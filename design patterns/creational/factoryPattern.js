class Person {
  constructor(id, name, age, ssn) {
    this._name = name;
    this._age = age;
    this._ssn = ssn;
    this._id = id;
  }
}

class Teahcer extends Person {
  constructor(id, name, age, ssn) {
    super(id, name, age, ssn);
  }
}

class Student extends Person {
  constructor(id, name, age, ssn) {
    super(id, name, age, ssn);
  }
}

class PersonFactory {
  createPerson(type, info) {
    switch (type) {
      case "student":
        return new Student(info.id, info.name, info.age, info.ssn);
      case "teacher":
        return new Teahcer(info.id, info.name, info.age, info.ssn);
      default:
        break;
    }
  }
}

const factory = new PersonFactory();

const ahmad = factory.createPerson("student", {
  id: "212",
  name: "Ahmad Bhutta",
  age: 23,
  ssn: "231231@21",
});

const bilal = factory.createPerson("teacher", {
  id: "121",
  name: "Bilal Saeed",
  age: 42,
  ssn: "2312@21",
});

console.log(ahmad, bilal);
