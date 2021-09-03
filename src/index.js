const navbar = () => {
    const click1 = document.querySelector('.click');
    const navLinks = document.querySelector('.links');
    const logo = document.querySelector('.logoRestaurant');

    click1.addEventListener('click', () => {
        navLinks.classList.toggle('linksClick');
        click1.classList.toggle('click');
        click1.classList.toggle('clickAfter');
        logo.classList.toggle('logoRestaurantClick');
    });
}
navbar();