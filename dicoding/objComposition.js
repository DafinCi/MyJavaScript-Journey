class Character {
  constructor(name, health, position) {
    this.name = name;
    this.health = health;
    this.position = position;
  }

  canMove() {
    console.log(`${this.name} moves to another position!`);
  }
}

// objek composition menjadi solusi dalam masalah polymorphism yang kompleks

// pendekatan yang digunakan adalah berbasis methodnya

// gini

function canAttack(character) {
  return {
    attack: () => {
      console.log(`${character.name} menyerang dengan pedang`);
    },
  };
}

function canDefend(character) {
  return {
    defend: () => {
      console.log(`${character.name} bertahan dengan perisai`);
    },
  };
}

function canSpell(character) {
  return {
    spell: () => {
      console.log(`${character.name} membaca mantra`);
    },
  };
}
// karena sudah dipecah berdasarkan kemampuan, jika ada karakter baru yang memiliki dua kemampuan atau lebih jadi lebih gampang bikinnya

// caranya dengan menggunakan Object.assign()

function createMonster(name) {
  const character = new Character(name, 100, 0);
  return Object.assign(character, canAttack(character));
}
function createGuardian(name) {
  const character = new Character(name, 100, 0);
  return Object.assign(character, canDefend(character));
}
function createWizard(name) {
  const character = new Character(name, 100, 0);
  return Object.assign(character, canSpell(character));
}
function createWarrior(name) {
  const character = new Character(name, 100, 0);
  return Object.assign(
    character,
    canAttack(character),
    canDefend(character),
    canSpell(character)
  );
}

const objek_monster = createMonster("monster 1");
objek_monster.attack();

const objek_guardian = createGuardian("guardian 1");
objek_guardian.defend();

const objek_wizard = createWizard("wizard 1");
objek_wizard.spell();

const objek_warrior = createWarrior("warrior 1");
objek_warrior.attack();
objek_warrior.defend();
objek_warrior.spell();
