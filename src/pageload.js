const textStorage = require('./text.json');

const loadBanner = () => {
    const PARENT_BANNER = document.getElementById('tab-container');
    let childrenArray = [];

    const menuTab = document.createElement('td');
    menuTab.setAttribute('class', 'tab');
    menuTab.textContent = "Menu";

    const homeTab = document.createElement('td');
    homeTab.setAttribute('class', 'tab');
    homeTab.textContent = "Home";

    const contactTab = document.createElement('td');
    contactTab.setAttribute('class', 'tab');
    contactTab.textContent = "Contact Us!";

    childrenArray.push(menuTab, homeTab, contactTab);
    appendChildren(PARENT_BANNER, childrenArray);

}

const loadHomePage = () => {
    loadBanner();
    const container = document.getElementById('content');
    let childrenArray = []

    const borgers = document.createElement('img');
    borgers.setAttribute('src', 'burger.jpeg');
    borgers.setAttribute('alt', 'Juicy borgers!');
    borgers.id = 'borger-pic';

    const mainTitle = document.createElement('h1');
    mainTitle.textContent = "Zach's Borgers";

    const intro = document.createElement('p');
    intro.textContent = textStorage.mainIntro;

    const whatIsBorger = document.createElement('h2');
    whatIsBorger.textContent = "What is a Borger?";

    const whatABorgerIs = document.createElement('p');
    whatABorgerIs.textContent = textStorage.mainWhatIsBorger;

    childrenArray.push(borgers, mainTitle, intro, whatIsBorger, whatABorgerIs);
    appendChildren(container, childrenArray);
}

function appendChildren(parent, array){
    for (let x in array){
        parent.appendChild(array[x]);
    }
}

export { loadHomePage };