const PLACEHOLDER_TEXT = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const textStorage = require('./text.json');

const loadBanner = () => {
    const PARENT_BANNER = document.getElementById('tabs');
}

const loadHomePage = () => {
    loadBanner();
    const container = document.getElementById('content');

    let childrenArray = []

    const borgers = document.createElement('img');
    borgers.setAttribute('src', 'burger.jpeg');
    borgers.setAttribute('alt', 'Juicy borgers!');
    borgers.id = 'borger-pic';
    childrenArray.push(borgers);

    const mainTitle = document.createElement('h1');
    mainTitle.textContent = "Zach's Borgers";
    childrenArray.push(mainTitle);

    const intro = document.createElement('p');
    intro.textContent = textStorage.mainIntro;
    childrenArray.push(intro);

    const whatIsBorger = document.createElement('h2');
    whatIsBorger.textContent = "What is a Borger?";
    childrenArray.push(whatIsBorger);

    const whatABorgerIs = document.createElement('p');
    whatABorgerIs.textContent = textStorage.mainWhatIsBorger;
    childrenArray.push(whatABorgerIs);

    appendChildren(container, childrenArray);
}

function appendChildren(parent, array){
    for (let x in array){
        parent.appendChild(array[x]);
    }
}

export { loadHomePage };