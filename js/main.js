const MENU_ICON = document.querySelector(".menu-icon");
const NAV = document.querySelector("nav");

function showNav() {
    NAV.classList.toggle('show-nav');
}

MENU_ICON.addEventListener('click', showNav);