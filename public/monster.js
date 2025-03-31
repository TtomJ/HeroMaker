class Monster{
    constructor(name, level, trida){
        this.name = name;
        this.level = Number(level);
        this.trida = trida;
        this.attack = Number(level * 2);
        this.defense = Number(level * 1);
        this.xp = Number(level * 10);
        this.hp = Number(level * 5);
    }

    printInfo(){
        console.log(`Monster: ${this.name}, level: ${this.level}, class: ${this.trida}, attack: ${this.attack}, defense: ${this.defense}, xp: ${this.xp}, hp: ${this.hp}`);
    }

    // Staticka metoda pro vytvoreni instance Monster z JSON dat
    static fromJSON(data) {
        const monster = new Monster(data.name, data.level, data.trida);
        Object.assign(monster, data);
        return monster;
    } 

    Utok(hero) {
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
        let damage = this.attack - hero.defense / 2;
        if (damage < 1) {
          damage = 1;
        }
        hero.hp -= damage;
        if (!hero.Nazivu()) {
          alert(`${hero.name} is defeated!`);
          this.xp += hero.xp;
          localStorage.setItem('monster', JSON.stringify(this));
          localStorage.removeItem('hero');
          LoadMonster();  
        } else {
          localStorage.setItem('hero', JSON.stringify(hero));
        }
        LoadHero();
      }
    Nazivu(){
        return this.hp > 0;
    }


}
export default Monster;