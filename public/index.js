import Hero from './hero.js';
import Monster from './monster.js';

function createElem(type, parent, options = {}) {
  const elem = document.createElement(type);
  if (options.id) elem.id = options.id;
  if (options.className) elem.className = options.className;
  if (options.innerHTML) elem.innerHTML = options.innerHTML;
  parent && parent.appendChild(elem);
  return elem;
}

function ValidateInputs(name, level, trida) {
  if (name === '' || level === '' || trida === '') {
    alert('Please fill all fields');
    return false;
  }
  if (isNaN(level)) {
    alert('Level must be a number');
    return false;
  }
  return true;
}

function CreateHero() {
  const heroName = document.getElementById('heroName').value;
  const heroLevel = document.getElementById('heroLevel').value;
  const heroClass = document.getElementById('heroClass').value;
  if (!ValidateInputs(heroName, heroLevel, heroClass)) return;
  
  const hero = new Hero(heroName, heroLevel, heroClass) ;
  
  const heroCardContainer = document.getElementById('heroCardContainer');
  const heroCard = createElem('div', heroCardContainer, { id: 'heroCard' });
  
  const heroCardImg = createElem('img', heroCard, { id: 'heroImg' });
  const imgSources = {
    warrior: 'images/Warrior.png',
    mage: 'images/Mage.png',
    rogue: 'images/Rogue.png'
  };
  heroCardImg.src = imgSources[heroClass];
  hero.image = imgSources[heroClass];
  
  const heroInfoDiv = createElem('div', heroCard, { id: 'heroInfoDiv' });
  createElem('h2', heroInfoDiv, { innerHTML: hero.name, className: 'heroInfo' });
  createElem('p', heroInfoDiv, { innerHTML: `Level: ${hero.level}`, className: 'heroInfo' });
  createElem('p', heroInfoDiv, { innerHTML: `Class: ${hero.trida}`, className: 'heroInfo' });
  createElem('p', heroInfoDiv, { innerHTML: `Attack: ${hero.attack}`, className: 'heroInfo' });
  createElem('p', heroInfoDiv, { innerHTML: `Defense: ${hero.defense}`, className: 'heroInfo' });
  createElem('p', heroInfoDiv, { innerHTML: `XP: ${hero.xp}`, className: 'heroInfo' });
  createElem('p', heroInfoDiv, { innerHTML: `HP: ${hero.hp}`, className: 'heroInfo' });
  
  localStorage.setItem('hero', JSON.stringify(hero));
  console.log(hero);
}

function CreateMonster() {
  const monsterName = document.getElementById('monsterName').value;
  const monsterLevel = document.getElementById('monsterLevel').value;
  const monsterClass = document.getElementById('monsterClass').value;
  if (!ValidateInputs(monsterName, monsterLevel, monsterClass)) return;

  
  const monster = new Monster(monsterName, monsterLevel, monsterClass);
  
  const monsterCardContainer = document.getElementById('monsterCardContainer');
  const monsterCard = createElem('div', monsterCardContainer, { id: 'monsterCard' });
  
  const monsterCardImg = createElem('img', monsterCard, { id: 'monsterImg' });
  const imgSources = {
    goblin: 'images/Goblin.png',
    zombie: 'images/Zombie.png',
    dragon: 'images/Dragon.png'
  };
  monsterCardImg.src = imgSources[monsterClass];
  monster.image = imgSources[monsterClass]; // Fixed typo: image not imgage
  
  const monsterInfoDiv = createElem('div', monsterCard, { id: 'monsterInfoDiv' });
  createElem('h2', monsterInfoDiv, { innerHTML: `Name: ${monster.name}`, className: 'monsterInfo' });
  createElem('p', monsterInfoDiv, { innerHTML: `Level: ${monster.level}`, className: 'monsterInfo' });
  createElem('p', monsterInfoDiv, { innerHTML: `Class: ${monster.trida}`, className: 'monsterInfo' });
  createElem('p', monsterInfoDiv, { innerHTML: `Attack: ${monster.attack}`, className: 'monsterInfo' });
  createElem('p', monsterInfoDiv, { innerHTML: `Defense: ${monster.defense}`, className: 'monsterInfo' });
  createElem('p', monsterInfoDiv, { innerHTML: `XP: ${monster.xp}`, className: 'monsterInfo' });
  createElem('p', monsterInfoDiv, { innerHTML: `HP: ${monster.hp}`, className: 'monsterInfo' });
  
  localStorage.setItem('monster', JSON.stringify(monster));
}

function LoadHero() {
  const heroData = JSON.parse(localStorage.getItem('hero'));
  const heroCardContainer = document.getElementById('heroCardContainer');
  heroCardContainer.innerHTML = '';

  if (heroData) {
    const savedHero = Hero.fromJSON(heroData);
    const heroCard = createElem('div', heroCardContainer, { id: 'heroCard' });
    const heroCardImg = createElem('img', heroCard, { id: 'heroImg' });
    heroCardImg.src = savedHero.image; // Use stored image URL

    const heroInfoDiv = createElem('div', heroCard, { id: 'heroInfoDiv' });
    createElem('h2', heroInfoDiv, { innerHTML: savedHero.name, className: 'heroInfo' });
    createElem('p', heroInfoDiv, { innerHTML: `Level: ${savedHero.level}`, className: 'heroInfo' });
    createElem('p', heroInfoDiv, { innerHTML: `Class: ${savedHero.trida}`, className: 'heroInfo' });
    createElem('p', heroInfoDiv, { innerHTML: `Attack: ${savedHero.attack}`, className: 'heroInfo' });
    createElem('p', heroInfoDiv, { innerHTML: `Defense: ${savedHero.defense}`, className: 'heroInfo' });
    createElem('p', heroInfoDiv, { innerHTML: `XP: ${savedHero.xp}`, className: 'heroInfo' });
    createElem('p', heroInfoDiv, { innerHTML: `HP: ${savedHero.hp}`, className: 'heroInfo' });
  } else {
    const errorMessage = createElem('h1', heroCardContainer, { innerHTML: 'No hero found. Please create a hero first.', className: 'errorMessage' });
    heroCardContainer.style.display = 'flex';
    heroCardContainer.style.justifyContent = 'center';
    heroCardContainer.style.alignItems = 'center';
  }
}

function LoadMonster() {
  const monsterData = JSON.parse(localStorage.getItem('monster'));
  const monsterCardContainer = document.getElementById('monsterCardContainer');
  monsterCardContainer.innerHTML = '';

  if (monsterData) {
    const savedMonster = Monster.fromJSON(monsterData);
    const monsterCard = createElem('div', monsterCardContainer, { id: 'monsterCard' });
    const monsterCardImg = createElem('img', monsterCard, { id: 'monsterImg' });
    monsterCardImg.src = savedMonster.image; // Use stored image URL

    const monsterInfoDiv = createElem('div', monsterCard, { id: 'monsterInfoDiv' });
    createElem('h2', monsterInfoDiv, { innerHTML: savedMonster.name, className: 'monsterInfo' });
    createElem('p', monsterInfoDiv, { innerHTML: `Level: ${savedMonster.level}`, className: 'monsterInfo' });
    createElem('p', monsterInfoDiv, { innerHTML: `Class: ${savedMonster.trida}`, className: 'monsterInfo' });
    createElem('p', monsterInfoDiv, { innerHTML: `Attack: ${savedMonster.attack}`, className: 'monsterInfo' });
    createElem('p', monsterInfoDiv, { innerHTML: `Defense: ${savedMonster.defense}`, className: 'monsterInfo' });
    createElem('p', monsterInfoDiv, { innerHTML: `XP: ${savedMonster.xp}`, className: 'monsterInfo' });
    createElem('p', monsterInfoDiv, { innerHTML: `HP: ${savedMonster.hp}`, className: 'monsterInfo' });
  } else {
    const errorMessage = createElem('h1', monsterCardContainer, { innerHTML: 'No monster found. Please create a monster first.', className: 'errorMessage' });
    monsterCardContainer.style.display = 'flex';
    monsterCardContainer.style.justifyContent = 'center';
    monsterCardContainer.style.alignItems = 'center';
  }
}

function HeroAttack() {
  const heroData = JSON.parse(localStorage.getItem('hero'));
  const monsterData = JSON.parse(localStorage.getItem('monster'));
  if (!heroData || !monsterData) {
    alert("Both a hero and a monster must be created before fighting!");
    return;
  }
  const hero = Hero.fromJSON(heroData);
  const monster = Monster.fromJSON(monsterData);
  hero.Utok(monster);
}

function MonsterAttack() {
  const heroData = JSON.parse(localStorage.getItem('hero'));
  const monsterData = JSON.parse(localStorage.getItem('monster'));
  if (!heroData || !monsterData) {
    alert("Both a hero and a monster must be created before fighting!");
    return;
  }
  const hero = Hero.fromJSON(heroData);
  const monster = Monster.fromJSON(monsterData);
  monster.Utok(hero);
}

// Expose functions for HTML onload and buttons
window.CreateHero = CreateHero;
window.CreateMonster = CreateMonster;
window.LoadHero = LoadHero;
window.LoadMonster = LoadMonster;
window.MonsterAttack = MonsterAttack;
window.HeroAttack = HeroAttack;
