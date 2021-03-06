const key = 'vs54zh8bc83quqnpewyzkdwxpj74db3k';
let url;

const nameInput = document.querySelector('#name-input');
const realmInput = document.querySelector('#realm-input');
const baseURL = 'https://us.api.battle.net/wow/character/';
const profile = document.querySelector('form');
const submitBtn = document.querySelector('.submit');



profile.addEventListener('submit', fetchResults);

function fetchResults(e) {
    e.preventDefault();
    
    url = baseURL + realmInput.value + '/' + nameInput.value + '?locale=en_US&apikey=' + key;

    fetch(url)
        .then(function (result) {
            return result.json();
        })
        .then(function (json) {
            displayResults(json);
        })
};

function displayResults(json) {
    let displayRace;
    let displayClass;
    let displayGender;
    let displayFaction;

    if(json.race == 1) {
        displayRace = 'Human';
    }
    if(json.race == 2) {
        displayRace = 'Orc';
    }
    if(json.race == 3) {
        displayRace = 'Dwarf';
    }
    if(json.race == 4) {
        displayRace = 'Nightelf';
    }
    if(json.race == 5) {
        displayRace = 'Undead';
    }
    if(json.race == 6) {
        displayRace = 'Tauren';
    }
    if(json.race == 7) {
        displayRace = 'Gnome';
    }
    if(json.race == 8) {
        displayRace = 'Troll';
    }
    if(json.race == 9) {
        displayRace = 'Goblin';
    }
    if(json.race == 10) {
        displayRace = 'Blood Elf';
    }
    if(json.race == 11) {
        displayRace = 'Bloodelf';
    }
    if(json.race == 26) {
        displayRace = 'Pandaren';
    }

    if(json.class == 1) {
        displayClass = 'Warrior';
    }
    if(json.class == 2) {
        displayClass = 'Paladin';
    }
    if(json.class == 3) {
        displayClass = 'Hunter';
    }
    if(json.class == 4) {
        displayClass = 'Rogue';
    }
    if(json.class == 5) {
        displayClass = 'Priest';
    }
    if(json.class == 6) {
        displayClass = 'Death Knight';
    }
    if(json.class == 7) {
        displayClass = 'Shaman';
    }
    if(json.class == 8) {
        displayClass = 'Mage';
    }
    if(json.class == 9) {
        displayClass = 'Warlock';
    }
    if(json.class == 10) {
        displayClass = 'Monk';
    }
    if(json.class == 11) {
        displayClass = 'Druid';
    }
    if(json.class == 12) {
        displayClass = 'Demon Hunter';
    }

    if(json.gender == 0) {
        displayGender = 'Male';
    }
    if(json.gender == 1) {
        displayGender = 'Female';
    }

    if(json.faction == 0) {
        displayFaction = 'Alliance';
    }
    if(json.faction == 1) {
        displayFaction = '(For the) Horde!'
    }

    //document.getElementById('imageHere').src = 'https://us.api.battle.net/wow/detheroc/247/39049207-avatar.jpg&apikey=vs54zh8bc83quqnpewyzkdwxpj74db3k';
    // document.getElementById('imageHere').src = json.thumbnail;
    document.getElementById('nameHere').innerHTML = 'Name: ' + json.name;
    document.getElementById('realmHere').innerHTML = 'Realm: ' + json.realm;
    document.getElementById('classHere').innerHTML = 'Class: ' + displayClass;
    document.getElementById('raceHere').innerHTML = 'Race: ' + displayRace;
    document.getElementById('genderHere').innerHTML = 'Gender: ' + displayGender;
    document.getElementById('levelHere').innerHTML = 'Level: ' + json.level;
    document.getElementById('factionHere').innerHTML = 'Faction: ' + displayFaction;

    console.log(json);
}




