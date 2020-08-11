const textStorage = require('./text.json');

const loadHomePage = () => {
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