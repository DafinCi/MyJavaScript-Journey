// challage dari gpt
// nomor 1
const number = [1, 2, 3];
const newNumber = [...number, 4];

// nomor 2
const user = {
  name: "Bos",
  age: 21,
};

const user2 = {
  ...user,
  age: 22,
};

console.log(user2.age);
console.log(user2.name);
console.log(user.name);
console.log(user.age);

// challange nested obj
const user3 = {
  name: "Bos",
  age: 21,
  address: {
    city: "Pekalongan",
    postal: 51111,
  },
  skills: ["js", "html"],
};

// soal 1 = buat object baru updateUser tanpa mengubah data user3
const updateUser = {
  ...user3,
  address: {
    ...user3.address,
    city: "Semarang",
  },
};

// soal 2 = buat obj userWithSkill tanpa merubah data user3
const userWithSkill = {
  ...user3,
  skills: [...user3.skills, "react"],
};

// soal 3 = buat obj finalUser
const finalUser = {
  ...user3,
  age: 22,
  address: {
    ...user3.address,
    city: "Jakarta",
  },
  skills: [...user3.skills, "node"],
};

console.log(user3);
console.log(updateUser);
console.log(userWithSkill);
console.log(finalUser);
