function promiseExecutor(resolve, reject) {
  setTimeout(() => {
    console.log("Melakukan sesuatu sebelum Promise diselesaikan.");

    // Penentuan hasil dari proses asinkron
    const number = Math.random();

    // Nilai fulfillment dari Promise
    if (number > 0.5) {
      resolve(`you did it ${number}`);
    }
    // Nilai rejection dari Promise
    else {
      reject(`sorry, something went wrong ${number}`);
    }
  }, 2000);
}

export function doSomething() {
  return new Promise(promiseExecutor);
}
