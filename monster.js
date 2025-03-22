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

    // Metoda, ktera vypise informace o monsterovi
    printInfo(){
        console.log(`Monster: ${this.name}, level: ${this.level}, class: ${this.trida}, attack: ${this.attack}, defense: ${this.defense}, xp: ${this.xp}, hp: ${this.hp}`);
    }

    // Staticka metoda pro vytvoreni instance Monster z JSON dat
    static fromJSON(data) {
        const monster = new Monster(data.name, data.level, data.trida);
        Object.assign(monster, data);
        return monster;
      } 
}
export default Monster;