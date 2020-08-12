const textStorage = require('./text.json');

const loadBanner = () => {   
    const PARENT_BANNER = document.getElementById('tab-container');
    let childrenArray = [];

    const menuTab = document.createElement('td');
    menuTab.setAttribute('class', 'not-selected');
    menuTab.textContent = "Menu";
    menuTab.id = "t1";
    menuTab.addEventListener("click", function(){changeTab(menuTab)});

    const homeTab = document.createElement('td');
    homeTab.setAttribute('class', 'not-selected');
    homeTab.textContent = "Home";
    homeTab.id = "t2";
    homeTab.addEventListener("click", function(){changeTab(homeTab)});

    const contactTab = document.createElement('td');
    contactTab.setAttribute('class', 'not-selected');
    contactTab.textContent = "Contact Us!";
    contactTab.id = "t3";
    contactTab.addEventListener("click", function(){changeTab(contactTab)});

    childrenArray.push(menuTab, homeTab, contactTab);

    appendChildren(PARENT_BANNER, childrenArray);
    changeTab(homeTab);

    function changeTab(tab){
        console.log(tab.id);
        let container = document.getElementById("content");
        while (container.firstChild){
            container.removeChild(container.firstChild);
        }
        for (let x = 0; x < childrenArray.length; x++){
            childrenArray[x].setAttribute("class", "not-selected");
        }
        switch (tab.id){
            case "t1":
                tab.setAttribute('class', 'selected');
                loadMenu(tab);
                break;
            case "t2":
                tab.setAttribute('class', 'selected');
                loadHome(tab);
                break;
            case "t3":
                tab.setAttribute('class', 'selected');
                loadContact(tab);
                break;
        }
    }
}

//Page Load Methods

const loadMenu = (tab) => {
    const container = document.getElementById('content');
}

const loadHome = (tab) => {
    const container = document.getElementById('content');
    let childrenArray = []

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

const loadContact = (tab) => {
    const container = document.getElementById('content');
}

function appendChildren(parent, children){ //Utility to append multiple children
    for (let x = 0; x < children.length; x++){
        parent.appendChild(children[x]);
    }
}

export { loadBanner };