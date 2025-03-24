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

function LoadHero() {
  // Retrieve hero data from localStorage
  const heroData = JSON.parse(localStorage.getItem('hero'));
  
  // Get the container where the hero card should be displayed
  const heroCardContainer = document.getElementById('heroCardContainer');
  
  // Clear any previous content in the container
  heroCardContainer.innerHTML = '';

  // Check if heroData exists
  if (heroData) {
    // Convert the data into a Hero instance and print info to the console
    const savedHero = Hero.fromJSON(heroData);
    savedHero.printInfo();

    // Create the hero card element
    const heroCard = heroCardContainer.appendChild(document.createElement('div'));
    heroCard.id = 'heroCard';

    // Create and set up the image element for the hero
    const heroCardImg = heroCard.appendChild(document.createElement('img'));
    if (savedHero.trida === 'warrior'){
      heroCardImg.src = 'images/Warrior.png';
    } else if (savedHero.trida === 'mage'){
      heroCardImg.src = 'images/Mage.png';
    } else if (savedHero.trida === 'rogue'){
      heroCardImg.src = 'images/Rogue.png';
    }
    heroCardImg.id = 'heroImg';

    // Create a container for the hero info
    const heroInfoDiv = heroCard.appendChild(document.createElement('div'));
    heroInfoDiv.id = 'heroInfoDiv';

    // Append each piece of hero information
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
  } else {
    // If there is no hero data, display a message in the hero card container
    const errorMessage = document.createElement('h1');
    errorMessage.className = 'errorMessage';
    errorMessage.innerHTML = 'No hero found. Please create a hero first.';
    heroCardContainer.appendChild(errorMessage);
    // Style the hero card container
    heroCardContainer.style.display = 'flex';
    heroCardContainer.style.justifyContent = 'center';
    heroCardContainer.style.alignItems = 'center';
  }
}


function LoadMonster() {
  // Retrieve monster data from localStorage
  const monsterData = JSON.parse(localStorage.getItem('monster'));
  
  // Get the container where the monster card should be displayed
  const monsterCardContainer = document.getElementById('monsterCardContainer');
  
  // Clear any previous content in the container
  monsterCardContainer.innerHTML = ''; 

  // Check if monsterData exists
  if (monsterData) {
    // Convert the data into a Monster instance and print info to the console
    const savedMonster = Monster.fromJSON(monsterData);
    savedMonster.printInfo();

    // Create the monster card element
    const monsterCard = monsterCardContainer.appendChild(document.createElement('div'));
    monsterCard.id = 'monsterCard';

    // Create and set up the image element for the monster
    const monsterCardImg = monsterCard.appendChild(document.createElement('img'));
    if (savedMonster.trida === 'goblin'){
      monsterCardImg.src = 'images/Goblin.png';
    } else if (savedMonster.trida === 'zombie'){
      monsterCardImg.src = 'images/Zombie.png';
    } else if (savedMonster.trida === 'dragon'){
      monsterCardImg.src = 'images/Dragon.png';
    }
    monsterCardImg.id = 'monsterImg';

    // Create a container for the monster info
    const monsterInfoDiv = monsterCard.appendChild(document.createElement('div'));
    monsterInfoDiv.id = 'monsterInfoDiv';

    // Append each piece of monster information
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

  } else {
    // If there is no monster data, display a message in the monster card container
    const errorMessage = document.createElement('h1');
    errorMessage.className = 'errorMessage';
    errorMessage.innerHTML = 'No monster found. Please create a monster first.';
    monsterCardContainer.appendChild(errorMessage);
    // Style the monster card container
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

// Make functions available for HTML onload and buttons
window.CreateHero = CreateHero;
window.CreateMonster = CreateMonster;
window.LoadHero = LoadHero;
window.LoadMonster = LoadMonster;
window.MonsterAttack = MonsterAttack;
window.HeroAttack = HeroAttack;
