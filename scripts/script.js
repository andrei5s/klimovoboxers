const openPopupMenu = document.querySelector('.popup-menu');
const menuOpen = document.querySelector('.header__burger');
const menuClose = document.querySelector('.popup-menu__close');

const openPopupSlider = document.querySelector('.popup-slider');
const sliderClose = document.querySelector('.popup-slider__close');
const cards = document.querySelectorAll('.gallerey__cards');
const slides = document.querySelector('.popup-slider__container');
const photo = document.querySelectorAll('.gallery__album');
const sliderButtonLeft = document.querySelector('.popup-slider__previous');
const sliderButtonRight = document.querySelector('.popup-slider__next');
const sliderImg = document.querySelector('.popup-slider__img');

function
openPopup(popup) {
    popup.classList.add('popup_opened');
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

function openMenu() {
    openPopup(openPopupMenu);
}

function closeMenu() {
    closePopup(openPopupMenu);
}

let slideIndex = 0;
pictureFull = null;
newPictureFull = null;

sliderButtonLeft.addEventListener('click', () => chengeSlider('left'));
sliderButtonRight.addEventListener('click', () => chengeSlider('right'));


cards.forEach((item, index) => {
    item.addEventListener('click', () => {
        slideIndex = index;
        showSlides();
    })
})

function showSlides() {
    pictureFull = photo[slideIndex].cloneNode();
    pictureFull.style.width = '80vw';
    pictureFull.style.height = '75vh';
    slides.append(pictureFull);
    openAlbum();
}

const chengeSlider = (dir) => {
    if (dir === 'left') {
        slideIndex > 0 ? slideIndex-- : slideIndex = cards.length - 1;
        console.log(1);
    } else if (dir === 'right') {
        slideIndex < cards.length - 1 ? slideIndex++ : slideIndex = 0;
        console.log(2);
    } else {
        return;
    }

    newPictureFull = photo[slideIndex].cloneNode();
    newPictureFull.style.width = '80vw';
    newPictureFull.style.height = '75vh';

    pictureFull.replaceWith(newPictureFull);
    pictureFull = newPictureFull;
}

function openAlbum() {
    openPopup(openPopupSlider);
}

function closeAlbum() {
    closePopup(openPopupSlider);
    pictureFull && pictureFull.remove();
    newPictureFull && newPictureFull.remove();
}


menuOpen.addEventListener('click', openMenu);
menuClose.addEventListener('click', closeMenu);
sliderClose.addEventListener('click', closeAlbum);