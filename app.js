// Object Literals

function CallMe(name, sound) {
  return {
    name,
    sound,
    classes: {
      physics: "Upper Floor",
      maths: "Ground Floor",
    },

    sayWithMorePower: function () {
      console.log(this.name.toUpperCase() + this.sound.toUpperCase());
    },
  };
}

const caller = CallMe("yasir", "yahoo!");
const dup = { ...CallMe("yasir", "yahoo!") };
const {
  name,
  sound,
  classes: { maths, physics },
} = dup;

console.log(name + sound);
console.log(maths, physics);

const student = new Map();
student.set("name", "Asad");
student.set("age", 34);

for (const letter of name) {
  console.log(letter);
}

for (const prop of student.keys()) {
  console.log(prop);
}
for (const prop of student.entries()) {
  console.log(`${prop[0]}: ${prop[1]}`);
}

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `${this.name}, age: ${this.age}`;
  }
}

const studentB = new Student("Bilal", 34);
console.log(studentB.introduce());

class PartTimeStudent extends Student {
  constructor(name, age) {
    super(name, age);
  }
}

const studentC = new Student("Faizan", 12);
console.log(studentC.introduce());

const schoolStudents = {
  _list: [],

  get list() {
    return this._list.join(", ");
  },

  set student(value) {
    this._list.push(value);
  },
};

schoolStudents.student = "Ali";
schoolStudents.student = "Sheroz";
schoolStudents.student = "Manzoor";

console.log(schoolStudents.list);
