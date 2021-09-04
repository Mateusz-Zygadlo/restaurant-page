import homePage from "./components/homePage";
import menuPage from "./components/menuPage";
import navbar from "./components/navbar";
import mediaHelpers from "./components/mediaHelpers";
import handleNavLinks from "./components/handleNavLinks";
import contactPage from "./components/contactPage";

const content = document.querySelector('.content');

const home = () => {
    content.textContent = '';
    navbar();
    mediaHelpers();
    homePage();
    handleNavLinks();
}

home();

const menu = () => {
    content.textContent = '';
    navbar();
    mediaHelpers();
    menuPage();
    handleNavLinks();
}

const contact = () => {
    content.textContent = '';
    navbar();
    mediaHelpers();
    contactPage();
    handleNavLinks();
}

document.addEventListener('click', (e) => {  
    switch(e.target.className){
        case 'oneLi':
            home();
            break;
        case 'twoLi': 
            menu();
            break;
        case 'threeLi':
            contact();
            break;
    }
})