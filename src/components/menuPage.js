const menuPage = () => {

    const content = document.querySelector('.content');
    
    const menu = document.createElement('div');
    menu.classList.add('menu');

    const img = document.createElement('div');
    img.classList.add('img');

    menu.appendChild(img);

    const cardOne = document.createElement('div');
    cardOne.classList.add('one');
    cardOne.classList.add('card');

    const nameOne = document.createElement('div');
    nameOne.classList.add('name');
    nameOne.textContent = 'Lorem ipsum';

    cardOne.appendChild(nameOne);

    const descriptionOne = document.createElement('div');
    descriptionOne.classList.add('description')
    descriptionOne.textContent = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ad voluptatum maiores ipsam';

    cardOne.appendChild(descriptionOne);

    const priceOne = document.createElement('div');
    priceOne.classList.add('price');
    priceOne.textContent = '5.99$';

    cardOne.appendChild(priceOne);

    menu.appendChild(cardOne);

    //
    const cardTwo = document.createElement('div');
    cardTwo.classList.add('two');
    cardTwo.classList.add('card');

    const nameTwo = document.createElement('div');
    nameTwo.classList.add('name');
    nameTwo.textContent = 'Lorem ipsum';

    cardTwo.appendChild(nameTwo);

    const descriptionTwo = document.createElement('div');
    descriptionTwo.classList.add('description')
    descriptionTwo.textContent = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ad voluptatum maiores ipsam';

    cardTwo.appendChild(descriptionTwo);

    const priceTwo = document.createElement('div');
    priceTwo.classList.add('price');
    priceTwo.textContent = '5.99$';

    cardTwo.appendChild(priceTwo);

    menu.appendChild(cardTwo);

    //

    const cardThree = document.createElement('div');
    cardThree.classList.add('three');
    cardThree.classList.add('card');

    const nameThree = document.createElement('div');
    nameThree.classList.add('name');
    nameThree.textContent = 'Lorem ipsum';

    cardThree.appendChild(nameThree);

    const descriptionThree = document.createElement('div');
    descriptionThree.classList.add('description')
    descriptionThree.textContent = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ad voluptatum maiores ipsam';

    cardThree.appendChild(descriptionThree);

    const priceThree = document.createElement('div');
    priceThree.classList.add('price');
    priceThree.textContent = '5.99$';

    cardThree.appendChild(priceThree);

    menu.appendChild(cardThree);

    //

    const cardFour = document.createElement('div');
    cardFour.classList.add('four');
    cardFour.classList.add('card');

    const nameFour = document.createElement('div');
    nameFour.classList.add('name');
    nameFour.textContent = 'Lorem ipsum';

    cardFour.appendChild(nameFour);

    const descriptionFour = document.createElement('div');
    descriptionFour.classList.add('description')
    descriptionFour.textContent = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ad voluptatum maiores ipsam';

    cardFour.appendChild(descriptionFour);

    const priceFour = document.createElement('div');
    priceFour.classList.add('price');
    priceFour.textContent = '5.99$';

    cardFour.appendChild(priceFour);

    menu.appendChild(cardFour);

    content.appendChild(menu);

}

export default menuPage;