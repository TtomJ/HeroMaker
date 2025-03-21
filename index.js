import Hero from './hero.js';
function CreateHero(){
    const heroName = document.getElementById('heroName').value;
    const heroLevel = document.getElementById('heroLevel').value;
    const heroClass = document.getElementById('heroClass').value;
    console.log(heroName, heroLevel, heroClass);
    const hero = new Hero(heroName, heroLevel, heroClass);
    if (heroName === '' || heroLevel === '' || heroClass === ''){
        alert('Please fill all fields');
        return;
    }
    if (isNaN(heroLevel)){
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
    const heroCardName = heroCard.appendChild(document.createElement('h2'));
    heroCardName.innerHTML = `Name: ${hero.name}`;
    const heroCardLevel = heroCard.appendChild(document.createElement('p'));
    heroCardLevel.innerHTML = `Level: ${hero.level}`;
    const heroCardClass = heroCard.appendChild(document.createElement('p'));
    heroCardClass.innerHTML = `Class: ${hero.trida}`;
    const heroCardAttack = heroCard.appendChild(document.createElement('p'));
    heroCardAttack.innerHTML = `Attack: ${hero.attack}`;
    const heroCardDefense = heroCard.appendChild(document.createElement('p'));
    heroCardDefense.innerHTML = `Defense: ${hero.defense}`;
    const heroCardXp = heroCard.appendChild(document.createElement('p'));
    heroCardXp.innerHTML = `XP: ${hero.xp}`;
    const heroCardHp = heroCard.appendChild(document.createElement('p'));
    heroCardHp.innerHTML = `HP: ${hero.hp}`;
    heroCardImg.id = 'heroImg';
    heroCardName.className = 'heroInfo';
    heroCardLevel.className = 'heroInfo';
    heroCardClass.className = 'heroInfo';
    heroCardAttack.className = 'heroInfo';
    heroCardDefense.className = 'heroInfo';
    heroCardXp.className = 'heroInfo';
    heroCardHp.className = 'heroInfo';

}
window.CreateHero = CreateHero;