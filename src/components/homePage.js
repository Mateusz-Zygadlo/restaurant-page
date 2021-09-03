const homePage = () => {

    const content = document.querySelector('.content')
    
    const home = document.createElement('div');
    home.classList.add('home');

    const imgTwo = document.createElement('div');
    imgTwo.classList.add('imgTwo');

    home.appendChild(imgTwo);

    const h1 = document.createElement('h1');
    h1.textContent = 'Welcome to the restaurant shop';

    home.appendChild(h1);

    const button = document.createElement('button');
    button.classList.add('two');
    button.textContent = 'go to the menu';

    home.appendChild(button);

    content.appendChild(home);
}

export default homePage;