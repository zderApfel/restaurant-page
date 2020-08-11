const textStorage = require('./text.json');

function appendChildren(parent, array){ //Utility function doing a mass "append children" so I don't have to type it multiple times
    for (let x in array){
        parent.appendChild(array[x]);
    }
}

const loadBanner = (defaultActive) => {
    /*
        Page IDs:
            * Home Page: 't2';
            * Menu Page: 't1';
            * Contact Page: 't3';
    */
    
    const PARENT_BANNER = document.getElementById('tab-container');
    let childrenArray = [];

    const menuTab = document.createElement('td');
    menuTab.setAttribute('class', 'not-selected');
    menuTab.textContent = "Menu";
    menuTab.id = "t1";
    menuTab.addEventListener("click", function(){pageChange(menuTab)});

    const homeTab = document.createElement('td');
    homeTab.setAttribute('class', 'not-selected');
    homeTab.textContent = "Home";
    homeTab.id = "t2";
    homeTab.addEventListener("click", function(){pageChange(homeTab)});

    const contactTab = document.createElement('td');
    contactTab.setAttribute('class', 'not-selected');
    contactTab.textContent = "Contact Us!";
    contactTab.id = "t3";
    contactTab.addEventListener("click", function(){selectTab(contactTab)});

    childrenArray.push(menuTab, homeTab, contactTab);

    for (let x = 0; x < childrenArray.length; x++){
        if (childrenArray[x].id == defaultActive){
            childrenArray[x].setAttribute('class', 'selected');
        }
    }

    appendChildren(PARENT_BANNER, childrenArray);

    function selectTab(tab){
        console.log("Changing to " + tab.textContent);
    }

}

const loadHomePage = () => {
    loadBanner('t2');
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

export { loadHomePage };