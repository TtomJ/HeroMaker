class Hero {
    constructor(name, level, trida) {
      this.name = name;
      this.level = Number(level);
      this.trida = trida;
      this.attack = Number(level * 3);
      this.defense = Number(level * 2);
      this.xp = Number(level * 20);
      this.hp = Number(level * 10);
    }
  
    // Method to print hero info
    printInfo() {
      console.log(
        `Hero: ${this.name}, level: ${this.level}, class: ${this.trida}, attack: ${this.attack}, defense: ${this.defense}, xp: ${this.xp}, hp: ${this.hp}`
      );
    }
  
    // from JSON to hero instance
    static fromJSON(data) {
      const hero = new Hero(data.name, data.level, data.trida);
      Object.assign(hero, data);
      return hero;
    }

    // Method to attack a monster
    Utok(monster){
      // Calculating damage
      let damage = this.attack - monster.defense / 2;
      if (damage < 1) {
        damage = 1;
      }
      // Applying damage
      monster.hp -= damage;
      console.log(`${this.name} attacks ${monster.name} for ${damage} damage! Monster HP: ${monster.hp}`);

      // Check if monster is defeated 
      if (monster.hp <= 0) {
        alert(`${monster.name} is defeated!`);
        localStorage.removeItem('monster');
      } else {
        localStorage.setItem('monster', JSON.stringify(monster));
      }

      // LoadMonster function is called to update
        LoadMonster();
    }
  }
  
  export default Hero;
  