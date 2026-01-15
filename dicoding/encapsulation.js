// INI ADALAH CARA UNTUK MENJAGA NILAI PROPERTI DALAM CLASS

class Person {
  constructor(name) {
    this.name = "dapin";
    // pake underscore biar tau klo ini tuh sebenernya gaboleh diubah
    // tapi sebenernya bukan bener bener gabisa diubah
    this._age = 20;
  }

  // pake set untuk menetapkan nilai properti
  set age(age) {
    console.log("kamu tidak boleh mengganti age");
  }

  get age() {
    return this._age;
  }
}

const person1 = new Person("dapin");
console.log(person1.name);
console.log(person1.age);
person1.age = 100;
console.log(person1.age);

// KLO MAU BENER BENER TIDAK DAPAT DIUBAH, CARANYA GINI

class Animal {
  #age = 2;
  constructor(name) {
    this.name = name;
    this.#age = this.#defaultAge();
  }

  set age(age) {
    console.log("maaf ini tidak bisa diubah");
  }

  get age() {
    return this.#age;
  }

  #defaultAge() {
    return 2;
  }
}
// sejak es2022 kita bisa pake hastag buat hak akses private pada property dan method

const hewan1 = new Animal("kucing");
console.log(hewan1.name);
console.log(hewan1.age);
hewan1.age = 3;
