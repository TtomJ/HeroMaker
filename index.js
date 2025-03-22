import Hero from './hero.js';
import Monster from './monster.js';

function CreateHero() {
  const heroName = document.getElementById('heroName').value;
  const heroLevel = document.getElementById('heroLevel').value;
  const heroClass = document.getElementById('heroClass').value;
  console.log(heroName, heroLevel, heroClass);
  const hero = new Hero(heroName, heroLevel, heroClass);

  if (heroName === '' || heroLevel === '' || heroClass === '') {
    alert('Please fill all fields');
    return;
  }
  if (isNaN(heroLevel)) {
    alert('Level must be a number');
    return;
  }

  const heroCardContainer = document.getElementById('heroCardContainer');
  const heroCard = heroCardContainer.appendChild(document.createElement('div'));
  heroCard.id = 'heroCard';

  const heroCardImg = heroCard.appendChild(document.createElement('img'));
  if (heroClass === 'warrior'){
    heroCardImg.src = 'images/Warrior.png';
  } else if (heroClass === 'mage'){
    heroCardImg.src = 'images/Mage.png';
  } else if (heroClass === 'rogue'){
    heroCardImg.src = 'images/Rogue.png';
  }

  const heroInfoDiv = heroCard.appendChild(document.createElement('div'));
  heroInfoDiv.id = 'heroInfoDiv';

  const heroCardName = heroInfoDiv.appendChild(document.createElement('h2'));
  heroCardName.innerHTML = `${hero.name}`;
  const heroCardLevel = heroInfoDiv.appendChild(document.createElement('p'));
  heroCardLevel.innerHTML = `Level: ${hero.level}`;
  const heroCardClassElem = heroInfoDiv.appendChild(document.createElement('p'));
  heroCardClassElem.innerHTML = `Class: ${hero.trida}`;
  const heroCardAttack = heroInfoDiv.appendChild(document.createElement('p'));
  heroCardAttack.innerHTML = `Attack: ${hero.attack}`;
  const heroCardDefense = heroInfoDiv.appendChild(document.createElement('p'));
  heroCardDefense.innerHTML = `Defense: ${hero.defense}`;
  const heroCardXp = heroInfoDiv.appendChild(document.createElement('p'));
  heroCardXp.innerHTML = `XP: ${hero.xp}`;
  const heroCardHp = heroInfoDiv.appendChild(document.createElement('p'));
  heroCardHp.innerHTML = `HP: ${hero.hp}`;

  heroCardImg.id = 'heroImg';
  heroCardName.className = 'heroInfo';
  heroCardLevel.className = 'heroInfo';
  heroCardClassElem.className = 'heroInfo';
  heroCardAttack.className = 'heroInfo';
  heroCardDefense.className = 'heroInfo';
  heroCardXp.className = 'heroInfo';
  heroCardHp.className = 'heroInfo';

  // Save hero to localStorage
  localStorage.setItem('hero', JSON.stringify(hero));
}

function CreateMonster() {
  const monsterName = document.getElementById('monsterName').value;
  const monsterLevel = document.getElementById('monsterLevel').value;
  const monsterClass = document.getElementById('monsterClass').value;
  console.log(monsterName, monsterLevel, monsterClass);
  const monster = new Monster(monsterName, monsterLevel, monsterClass);

  if (monsterName === '' || monsterLevel === '' || monsterClass === '') {
    alert('Please fill all fields');
    return;
  }
  if (isNaN(monsterLevel)) {
    alert('Level must be a number');
    return;
  }

  const monsterCardContainer = document.getElementById('monsterCardContainer');
  const monsterCard = monsterCardContainer.appendChild(document.createElement('div'));
  monsterCard.id = 'monsterCard';

  const monsterCardImg = monsterCard.appendChild(document.createElement('img'));
  if (monsterClass === 'goblin'){
    monsterCardImg.src = 'images/Goblin.png';
  } else if (monsterClass === 'zombie'){
    monsterCardImg.src = 'images/Zombie.png';
  } else if (monsterClass === 'dragon'){
    monsterCardImg.src = 'images/Dragon.png';
  }

  const monsterInfoDiv = monsterCard.appendChild(document.createElement('div'));
  monsterInfoDiv.id = 'monsterInfoDiv';

  const monsterCardName = monsterInfoDiv.appendChild(document.createElement('h2'));
  monsterCardName.innerHTML = `${monster.name}`;
  const monsterCardLevel = monsterInfoDiv.appendChild(document.createElement('p'));
  monsterCardLevel.innerHTML = `Level: ${monster.level}`;
  const monsterCardClassElem = monsterInfoDiv.appendChild(document.createElement('p'));
  monsterCardClassElem.innerHTML = `Class: ${monster.trida}`;
  const monsterCardAttack = monsterInfoDiv.appendChild(document.createElement('p'));
  monsterCardAttack.innerHTML = `Attack: ${monster.attack}`;
  const monsterCardDefense = monsterInfoDiv.appendChild(document.createElement('p'));
  monsterCardDefense.innerHTML = `Defense: ${monster.defense}`;
  const monsterCardXp = monsterInfoDiv.appendChild(document.createElement('p'));
  monsterCardXp.innerHTML = `XP: ${monster.xp}`;
  const monsterCardHp = monsterInfoDiv.appendChild(document.createElement('p'));
  monsterCardHp.innerHTML = `HP: ${monster.hp}`;

  monsterCardImg.id = 'monsterImg';
  monsterCardName.className = 'monsterInfo';
  monsterCardLevel.className = 'monsterInfo';
  monsterCardClassElem.className = 'monsterInfo';
  monsterCardAttack.className = 'monsterInfo';
  monsterCardDefense.className = 'monsterInfo';
  monsterCardXp.className = 'monsterInfo';
  monsterCardHp.className = 'monsterInfo';

  // Save monster to localStorage
  localStorage.setItem('monster', JSON.stringify(monster));
}

// Load saved hero from localStorage and display
function LoadHero() {
  const heroData = JSON.parse(localStorage.getItem('hero'));
  if (heroData) {
    const savedHero = Hero.fromJSON(heroData);
    savedHero.printInfo(); // logs hero details to the console

    // Create hero card in UI (similar to CreateHero)
    const heroCardContainer = document.getElementById('heroCardContainer');
    const heroCard = heroCardContainer.appendChild(document.createElement('div'));
    heroCard.id = 'heroCard';

    const heroCardImg = heroCard.appendChild(document.createElement('img'));
    if (savedHero.trida === 'warrior'){
      heroCardImg.src = 'images/Warrior.png';
    } else if (savedHero.trida === 'mage'){
      heroCardImg.src = 'images/Mage.png';
    } else if (savedHero.trida === 'rogue'){
      heroCardImg.src = 'images/Rogue.png';
    }
    heroCardImg.id = 'heroImg';

    const heroInfoDiv = heroCard.appendChild(document.createElement('div'));
    heroInfoDiv.id = 'heroInfoDiv';

    const heroCardName = heroInfoDiv.appendChild(document.createElement('h2'));
    heroCardName.innerHTML = savedHero.name;
    heroCardName.className = 'heroInfo';

    const heroCardLevel = heroInfoDiv.appendChild(document.createElement('p'));
    heroCardLevel.innerHTML = `Level: ${savedHero.level}`;
    heroCardLevel.className = 'heroInfo';

    const heroCardClassElem = heroInfoDiv.appendChild(document.createElement('p'));
    heroCardClassElem.innerHTML = `Class: ${savedHero.trida}`;
    heroCardClassElem.className = 'heroInfo';

    const heroCardAttack = heroInfoDiv.appendChild(document.createElement('p'));
    heroCardAttack.innerHTML = `Attack: ${savedHero.attack}`;
    heroCardAttack.className = 'heroInfo';

    const heroCardDefense = heroInfoDiv.appendChild(document.createElement('p'));
    heroCardDefense.innerHTML = `Defense: ${savedHero.defense}`;
    heroCardDefense.className = 'heroInfo';

    const heroCardXp = heroInfoDiv.appendChild(document.createElement('p'));
    heroCardXp.innerHTML = `XP: ${savedHero.xp}`;
    heroCardXp.className = 'heroInfo';

    const heroCardHp = heroInfoDiv.appendChild(document.createElement('p'));
    heroCardHp.innerHTML = `HP: ${savedHero.hp}`;
    heroCardHp.className = 'heroInfo';
  }
}

// Load saved monster from localStorage and display
function LoadMonster() {
  const monsterData = JSON.parse(localStorage.getItem('monster'));
  if (monsterData) {
    const savedMonster = Monster.fromJSON(monsterData);
    savedMonster.printInfo(); // logs monster details to the console

    const monsterCardContainer = document.getElementById('monsterCardContainer');
    const monsterCard = monsterCardContainer.appendChild(document.createElement('div'));
    monsterCard.id = 'monsterCard';

    const monsterCardImg = monsterCard.appendChild(document.createElement('img'));
    if (savedMonster.trida === 'goblin'){
      monsterCardImg.src = 'images/Goblin.png';
    } else if (savedMonster.trida === 'zombie'){
      monsterCardImg.src = 'images/Zombie.png';
    } else if (savedMonster.trida === 'dragon'){
      monsterCardImg.src = 'images/Dragon.png';
    }
    monsterCardImg.id = 'monsterImg';

    const monsterInfoDiv = monsterCard.appendChild(document.createElement('div'));
    monsterInfoDiv.id = 'monsterInfoDiv';

    const monsterCardName = monsterInfoDiv.appendChild(document.createElement('h2'));
    monsterCardName.innerHTML = savedMonster.name;
    monsterCardName.className = 'monsterInfo';

    const monsterCardLevel = monsterInfoDiv.appendChild(document.createElement('p'));
    monsterCardLevel.innerHTML = `Level: ${savedMonster.level}`;
    monsterCardLevel.className = 'monsterInfo';

    const monsterCardClassElem = monsterInfoDiv.appendChild(document.createElement('p'));
    monsterCardClassElem.innerHTML = `Class: ${savedMonster.trida}`;
    monsterCardClassElem.className = 'monsterInfo';

    const monsterCardAttack = monsterInfoDiv.appendChild(document.createElement('p'));
    monsterCardAttack.innerHTML = `Attack: ${savedMonster.attack}`;
    monsterCardAttack.className = 'monsterInfo';

    const monsterCardDefense = monsterInfoDiv.appendChild(document.createElement('p'));
    monsterCardDefense.innerHTML = `Defense: ${savedMonster.defense}`;
    monsterCardDefense.className = 'monsterInfo';

    const monsterCardXp = monsterInfoDiv.appendChild(document.createElement('p'));
    monsterCardXp.innerHTML = `XP: ${savedMonster.xp}`;
    monsterCardXp.className = 'monsterInfo';

    const monsterCardHp = monsterInfoDiv.appendChild(document.createElement('p'));
    monsterCardHp.innerHTML = `HP: ${savedMonster.hp}`;
    monsterCardHp.className = 'monsterInfo';
  }
}

// Make functions available for HTML onload and buttons
window.CreateHero = CreateHero;
window.CreateMonster = CreateMonster;
window.LoadHero = LoadHero;
window.LoadMonster = LoadMonster;
