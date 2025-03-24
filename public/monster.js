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
        let damage = this.attack - hero.defense / 2;
        if (damage < 1) {
          damage = 1;
        }
        hero.hp -= damage;
        console.log(`${this.name} attacks ${hero.name} for ${damage} damage! Hero HP: ${hero.hp}`);
    
        // Check if hero is defeated and update localStorage accordingly
        if (hero.hp <= 0) {
          alert(`${hero.name} is defeated!`);
          localStorage.removeItem('hero');
        } else {
          localStorage.setItem('hero', JSON.stringify(hero));
        }
    
        // Optionally update the UI (assuming LoadHero is in the global scope)
        if (typeof LoadHero === 'function') {
          LoadHero();
        }
      }


}
export default Monster;