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
  
    // Static method to recreate a Hero instance from JSON data
    static fromJSON(data) {
      const hero = new Hero(data.name, data.level, data.trida);
      // If there are additional properties stored, copy them over
      Object.assign(hero, data);
      return hero;
    }
  }
  
  export default Hero;
  