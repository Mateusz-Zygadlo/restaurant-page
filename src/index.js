import homePage from "./components/homePage";
import menuPage from "./components/menuPage";
import navbar from "./components/navbar";
import mediaHelpers from "./components/mediaHelpers";
import handleNavLinks from "./components/handleNavLinks";
import contactPage from "./components/contactPage";

navbar();
mediaHelpers();
homePage();
handleNavLinks();

const content = document.querySelector('.content');

document.addEventListener('click', (e) => {
    const li = document.querySelectorAll('li');
    let index;
    
    for(let i = 0; i < li.length; i++){
        if(li[i].className == e.target.className){
            index = i;
        };
    }

    switch(e.target.className){
        case 'one':
            content.textContent = '';
            navbar();
            mediaHelpers();
            homePage();
            handleNavLinks();
            break;
        case 'two': 
            content.textContent = '';
            navbar();
            mediaHelpers();
            menuPage();
            handleNavLinks();
            break;
        case 'three':
            content.textContent = '';
            navbar();
            mediaHelpers();
            contactPage();
            handleNavLinks();
    }

})