var headerMenu = document.querySelector("#header-menu");
var menuHamburger = document.querySelector("#menu-hamburger");

function showMenu () {
	headerMenu.classList.toggle("header--active");
  menuHamburger.classList.toggle("menu-btn--active");
}
