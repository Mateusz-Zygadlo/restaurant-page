const contactPage = () => {

    const content = document.querySelector('.content');

    const contact = document.createElement('div');
    contact.classList.add('contact');

    const imgThree = document.createElement('div');
    imgThree.classList.add('imgThree');

    contact.appendChild(imgThree);

    const block = document.createElement('div');
    block.classList.add('block');

    const phone = document.createElement('div');
    phone.classList.add('phone');
    phone.textContent = 'phone: 123-456-789';

    block.appendChild(phone);

    const email = document.createElement('div');
    email.classList.add('email');
    email.textContent = 'email: test@test.com';

    block.appendChild(email);

    const adress = document.createElement('div');
    adress.classList.add('adress');
    adress.textContent = 'adress: unknown';

    block.appendChild(adress);

    contact.appendChild(block);

    content.appendChild(contact);

}

export default contactPage;