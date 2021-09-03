const handleNavLinks = () => {
    const button = document.querySelector('.click');
    const navLinks = document.querySelector('.links');
    const logo = document.querySelector('.logoRestaurant');

    button.addEventListener('click', () => {
        navLinks.classList.toggle('linksClick');
        button.classList.toggle('click');
        button.classList.toggle('clickAfter');
        logo.classList.toggle('logoRestaurantClick');
    });
}

export default handleNavLinks;