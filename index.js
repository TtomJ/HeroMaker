function vypisUdaje() {
    const heroData = localStorage.getItem('hrdina');
    // Parsnu informace
    const hrdina = JSON.parse(heroData);
    console.log('Parsed hero data:', hrdina); // Debugging log
    
    // div pro hrdinu
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('hrdina-karta');
    
    // element pro kazdou informaci aby to vypadalo nejak
    const nameLabel = document.createElement('label');
    nameLabel.textContent = 'Jméno:';
    const nameElement = document.createElement('p');
    nameElement.textContent = `${hrdina.jmeno}`;
    
    const levelLabel = document.createElement('label');
    levelLabel.textContent = 'Level:';
    const levelElement = document.createElement('p');
    levelElement.textContent = `${hrdina.level}`;
    
    const classLabel = document.createElement('label');
    classLabel.textContent = 'Třída:';
    const classElement = document.createElement('p');
    classElement.textContent = `${hrdina.trida}`;
    
    // kazda classa bude mit svoji fotecku
    const imgElement = document.createElement('img');
    const tridaImages = {
        'Bojovník': 'warrior.jpg',
        'Lučištník': 'pivo.jpg',
        'Šaman': 'kalimek.jpg'
    };
    imgElement.src = tridaImages[hrdina.trida];
    imgElement.alt = hrdina.trida;
    imgElement.classList.add('hrdina-image');
    
    // Append the p elements and image element to the card container
    cardContainer.appendChild(nameLabel);
    cardContainer.appendChild(nameElement);
    cardContainer.appendChild(levelLabel);
    cardContainer.appendChild(levelElement);
    cardContainer.appendChild(classLabel);
    cardContainer.appendChild(classElement);
    cardContainer.appendChild(imgElement);
    
    // Append the card container to the heroDetailsContainer
    const container = document.getElementById('heroDetailsContainer');
    container.appendChild(cardContainer);
}

function vytvorHrdinu(){
    // Tato funkce přiřadí hrdinovi po stistku tlačítka
    // informace, které uložíte do vytvořeného objektu hrdina 
    // Využij document.getElementById, localStorage.setItem a JSON.stringify
    // Retrieve the hero data from input fields
    const jmeno = document.getElementById('jmeno').value;
    const level = document.getElementById('level').value;
    const trida = document.getElementById('tridy').value;
    
    // Create a hero object
    const hrdina = {
        jmeno: jmeno,
        level: level,
        trida: trida
    };
    
    // ulozeni do pameti prohlizece
    localStorage.setItem('hrdina', JSON.stringify(hrdina));
    // prompt pro showcase
    alert(`Nový hrdina byl nastaven:\nJméno: ${hrdina.jmeno}\nLevel: ${hrdina.level}\nTřída: ${hrdina.trida}`);
}