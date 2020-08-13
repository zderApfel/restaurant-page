const textStorage = require('./text.json');

const loadContact = () => {
    const container = document.getElementById('content');
    let childrenArray = [];

    const borgers = document.createElement('img');
    borgers.setAttribute('src', 'burger.jpeg');
    borgers.setAttribute('alt', 'Juicy borgers!');
    borgers.id = 'borger-pic';

    const mainTitle = document.createElement('h1');
    mainTitle.textContent = "Contact Us!";

    const mainContent = document.createElement('p');
    mainContent.textContent = textStorage.CONTACT_PAGE.main;

    childrenArray.push(borgers, mainTitle, mainContent);
    appendChildren(container, childrenArray);
}

function appendChildren(parent, children){ //Utility to append multiple children
    for (let x = 0; x < children.length; x++){
        parent.appendChild(children[x]);
    }
}

export { loadContact };