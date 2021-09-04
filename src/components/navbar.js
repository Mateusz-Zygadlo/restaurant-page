const navbar = () => {

    const content = document.querySelector('.content');

    const nav = document.createElement('nav');
    nav.classList.add('nav');

    const logo = document.createElement('div');
    logo.classList.add('logoNav');
    logo.textContent = 'Restaurant Page';

    const divLinks = document.createElement('div');
    divLinks.classList.add('links');
    
    nav.appendChild(logo);

    const navlinks = document.createElement('div');
    navlinks.classList.add('links');

    const ul = document.createElement('ul');
    
    const liOne = document.createElement('li');
    liOne.classList.add('oneLi');
    liOne.textContent = 'home page';

    ul.appendChild(liOne);

    const liTwo = document.createElement('li');
    liTwo.classList.add('twoLi');
    liTwo.textContent = 'menu';

    ul.appendChild(liTwo);

    const liThree = document.createElement('li');
    liThree.classList.add('threeLi');
    liThree.textContent = 'contact';

    ul.appendChild(liThree);

    divLinks.appendChild(ul);

    nav.appendChild(divLinks);

    content.appendChild(nav);
}

export default navbar;