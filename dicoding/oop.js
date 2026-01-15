// belajar oop javascript
// sebelum adanya es6 constructor function adalah cara yang digunakan untuk membuat obj dan class

function Person(name, age) {
  this.name = name;
  this.age = age;
}

// keknya ini nulis method di js deh
Person.prototype.eat = function () {
  console.log(`${this.name} lagi makan`);
};

// diatas merupakan bahasa pemrograman berbasis prototype
// Prototype adalah salah satu konsep fundamental dalam JavaScript yang memungkinkan pewarisan sifat dan method antar object

const person1 = new Person("dapin", 20);
const person2 = new Person("fizi", 18);

console.log(person1);
console.log(person2);

person1.eat();
person2.eat();

// ES6 CLASS

// mirip seperti java, c++, c#, python

class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // ini methodnya
  eat2() {
    console.log(`${this.name} lagi makan`);
  }
}

const person3 = new Person2("ipin", 17);
const person4 = new Person2("upin", 17);

console.log(person3.name);
console.log(person3.age);
console.log(person4.name);
console.log(person4.age);

person3.eat2();
person4.eat2();
