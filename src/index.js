import { loadMenu } from "./menupage.js";
import { loadHome } from "./mainpage.js";
import { loadContact } from "./contactpage.js";

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
                loadMenu();
                break;
            case "t2":
                tab.setAttribute('class', 'selected');
                loadHome();
                break;
            case "t3":
                tab.setAttribute('class', 'selected');
                loadContact();
                break;
        }
    }
}

function appendChildren(parent, children){ //Utility to append multiple children
    for (let x = 0; x < children.length; x++){
        parent.appendChild(children[x]);
    }
}

loadBanner();