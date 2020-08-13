const textStorage = require('./text.json');

const loadHome = () => {
    const container = document.getElementById('content');
    let childrenArray = [];

    const borgers = document.createElement('img');
    borgers.setAttribute('src', 'burger.jpeg');
    borgers.setAttribute('alt', 'Juicy borgers!');
    borgers.id = 'borger-pic';

    const mainTitle = document.createElement('h1');
    mainTitle.textContent = "Zach's Borgers";

    const intro = document.createElement('p');
    intro.textContent = textStorage.HOME_PAGE.mainIntro;

    const whatIsBorger = document.createElement('h2');
    whatIsBorger.textContent = "What is a Borger?";

    const whatABorgerIs = document.createElement('p');
    whatABorgerIs.textContent = textStorage.HOME_PAGE.mainWhatIsBorger;

    childrenArray.push(borgers, mainTitle, intro, whatIsBorger, whatABorgerIs);
    appendChildren(container, childrenArray);
}

function appendChildren(parent, children){ //Utility to append multiple children
    for (let x = 0; x < children.length; x++){
        parent.appendChild(children[x]);
    }
}

export { loadHome };