import { makeCoffee, sendCoffee } from "./coffee2.js";

const order = "Kopi Espresso";

console.log(`Saya memesan ${order} di kafe.`);

makeCoffee(order)
  .then(
    (value) => {
      return sendCoffee(value);
    },
    (error) => {
      console.error(error.message);
      throw error;
    },
  )
  .then(
    (value) => {
      console.log(`Pramusaji memberikan ${value} pesanan.`);
      console.log(`Saya mendapatkan ${value} dan menghabiskannya.`);
    },
    (error) => {
      console.error(error.message);
      throw error;
    },
  );

/*
 Berapa pun banyaknya proses asinkron yang perlu dilakukan untuk mencapai suatu hasil, kita dapat memanfaatkan method then.
 
  makeCoffee(order)
  .then((value) => {  Do your jobs...  })
  .then((value) => {  Do your jobs...  })
  .then((value) => {  Do your jobs...  })
  .then((value) => {  Do your jobs...  })
  .then((value) => {  Do your jobs...  })
  .then((value) => {  Do your jobs...  })
  .catch((error) => console.log(error.message));
 */
