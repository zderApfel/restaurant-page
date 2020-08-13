const textStorage = require('./text.json');

const loadMenu = () => {
    const container = document.getElementById('content');
    let childrenArray = [];

    const borgers = document.createElement('img');
    borgers.setAttribute('src', 'burger.jpeg');
    borgers.setAttribute('alt', 'Juicy borgers!');
    borgers.id = 'borger-pic';

    const mainTitle = document.createElement('h1');
    mainTitle.textContent = "Menu";

    const menuList = document.createElement('ul');
    menuList.id = "menu-list";
    for (let x in textStorage.MENU_PAGE.menu){
        let y = document.createElement('li');
        y.textContent = `${textStorage.MENU_PAGE.menu[x].name} -- $${textStorage.MENU_PAGE.menu[x].price}`;
        menuList.appendChild(y);
    }

    childrenArray.push(borgers, mainTitle, menuList);
    appendChildren(container, childrenArray);
    
}

function appendChildren(parent, children){ //Utility to append multiple children
    for (let x = 0; x < children.length; x++){
        parent.appendChild(children[x]);
    }
}

export { loadMenu };