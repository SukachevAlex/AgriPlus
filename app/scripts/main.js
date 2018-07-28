const galleryImage = document.querySelector('.gallery-item__image');
const galleryTitle = document.querySelector('.gallery-item__title');
const gallerySubTitle = document.querySelector('.gallery-item__sub-title');

document.querySelector('.header-page').style.height = `${window.innerHeight}px`;

const handleClick = (e) => {
    let element = e.currentTarget.querySelector('.thumbnail__image');
    galleryImage.style.backgroundImage = `url('${element.src.replace('_thumb', '')}')`;
    galleryTitle.innerHTML = element.alt;
    gallerySubTitle.innerHTML = element.dataset.sub;
}

window.onload = function() {
    let thumbs = document.querySelectorAll('.thumbnail__item');
    thumbs.forEach(el => el.addEventListener('click', handleClick));

};