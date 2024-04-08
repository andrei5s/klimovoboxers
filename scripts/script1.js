const openPopupMenu = document.querySelector('.popup-menu');
const menuOpen = document.querySelector('.header__burger');
const menuClose = document.querySelector('.popup-menu__close');

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

menuOpen.addEventListener('click', openMenu);
menuClose.addEventListener('click', closeMenu);