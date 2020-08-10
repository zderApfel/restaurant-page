const loadHomePage = () => {
    const container = document.getElementById('content');

    const borgers = document.createElement('img');
    borgers.setAttribute('src', 'burger.jpeg');
    borgers.setAttribute('alt', 'Juicy borgers!');
    borgers.id = 'borger-pic';

    const mainTitle = document.createElement('h1');
    mainTitle.innerHTML = "Zach's Borgers";

    const intro = document.createElement('p');
    intro.innerHTML = "Zach's Borgers is a cutesie-style borger restaurant located in Hell, Michigan. The locals say it is the best (and only) borger place they've ever been to."

    const whatIsBorger = document.createElement('h2');
    whatIsBorger.innerHTML = "What is a Borger?";

    const whatABorgerIs = document.createElement('p');
    whatABorgerIs.innerHTML = "Zach gets this question a lot, it's asked a lot by many customers, in fact. The fact of the matter is that it's not important what a borger is. They taste good, so why ask? Nobody has ever gotten sick from a borger, and nobody is allergic to them either. It's impossible to say any of those things has happened. So please, just calm down and eat your borger."

    appendChildren(container, [borgers, mainTitle, intro, whatIsBorger, whatABorgerIs]);
}

function appendChildren(parent, array){
    for (let x in array){
        parent.appendChild(array[x]);
    }
}

export { loadHomePage };