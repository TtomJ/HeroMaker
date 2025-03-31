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
    // When converting a class instance into JSON it only captures object data and not methods and prototype
    static fromJSON(data) {
      const hero = new Hero(data.name, data.level, data.trida);
      Object.assign(hero, data);
      return hero;
    }
    Utok(monster){
      const miss = Math.random() < 0.2; // 20%
      const critical = Math.random() < 0.1; // 10%
      if (miss) {
        alert(`${this.name} missed the attack!`);
        return;
      }
      if (critical) {
        this.attack *= 2;
        alert(`${this.name} landed a critical hit!`);
      }
      let damage = this.attack - monster.defense / 2;
      if (damage < 1) {
        damage = 1;
      }
      monster.hp -= damage;
      if (!monster.Nazivu()){
        alert(`${monster.name} is defeated!`);
        this.xp += monster.xp;
        localStorage.setItem('hero', JSON.stringify(this));
        localStorage.removeItem('monster');
        LoadHero();
      } else {
        localStorage.setItem('monster', JSON.stringify(monster));
      }
      LoadMonster();
    }
    Nazivu(){
      return this.hp > 0;
    }
  }
  
  export default Hero;
  