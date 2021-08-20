let instance = null;

class Person {
  constructor(name, age, ssn) {
    if (!instance) {
      this._name = name;
      this._age = age;
      this._ssn = ssn;
      instance = this;
    } else {
      return instance;
    }
  }
}

const saqib = new Person("Saqib", 32, "23@31");
const farhan = new Person("Farhan", 12, "2312@31");

console.log(saqib, farhan);
