class Hero{
    constructor(name, level, trida){
        this.name = name;
        this.level = Number(level);
        this.trida = trida;
        this.attack = Number(level * 3);
        this.defense = Number(level * 2);
        this.xp = Number(level * 20);
        this.hp = Number(level * 10);
    }

    // Metoda, ktera vypise informace o hrdinovi
    printInfo(){
        console.log(`Hero: ${this.name}, level: ${this.level}, class: ${this.trida}, attack: ${this.attack}, defense: ${this.defense}, xp: ${this.xp}, hp: ${this.hp}`);
    }
}
export default Hero;