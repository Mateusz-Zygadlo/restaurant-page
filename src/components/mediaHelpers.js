const mediaHelpers = () => {

    const content = document.querySelector('.content')
    
    const media = document.createElement('div');
    media.classList.add('media');

    const logoRestaurant = document.createElement('div');
    logoRestaurant.classList.add('logoRestaurant');
    logoRestaurant.textContent = 'Restaurant Page';

    media.appendChild(logoRestaurant);

    const click = document.createElement('div');
    click.classList.add('click');
    click.textContent = 'click';

    media.appendChild(click);

    content.appendChild(media);
}

export default mediaHelpers;