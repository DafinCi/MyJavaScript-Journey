class Smartphones {
  constructor(name, color, brand) {
    this.name = name;
    this.color = color;
    this.brand = brand;
  }

  charging() {
    console.log(`${this.name} sedang ngecas`);
  }
}

class ios extends Smartphones {
  airdrop() {
    console.log("fitur ios yaitu airdrop");
  }
}

class android extends Smartphones {
  split() {
    console.log("fitur android adalah split screen");
  }
}

const andro = new android("android", "black", "brandos");
const iphone = new ios("apple", "orange", "applecorp");

andro.charging();
iphone.charging();

andro.split();
iphone.airdrop();

// cara ngecek induk subclass pake typeof

console.log(iphone instanceof Smartphones); // true
console.log(andro instanceof Smartphones); // true
