// INI KONSEP OVERRIDING

class Smartphone {
  constructor(name, brand, model) {
    this.name = name;
    this.brand = brand;
    this.model = model;
  }
  charging() {
    console.log(`${this.name} lagi cas kek biasa`);
  }
}

class Android extends Smartphone {
  // overriding properti
  constructor(name, brand, model, device) {
    super(name, brand, model);
    this.device = device;
  }
  // overriding method yaitu dengan menulis ulang nama methodnya
  charging() {
    console.log(`${this.name} lagi ngecas dengan gaya baru`);
  }
}

const objekAndroid = new Android("samsung", "brand china", "s26", "smartTV");
objekAndroid.charging();
