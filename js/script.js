const menu = document.querySelector(".burger-menu");
const button = menu.querySelector(".burger-menu__button");
const lines = menu.querySelector(".burger-menu__lines");
const links = menu.querySelectorAll(".burger-menu__link");
const overlay = menu.querySelector(".burger-menu__overlay");

button.addEventListener("click", (e) => {
  e.preventDefault();
  toggleMenu();
});

links.forEach((link) => {
  link.addEventListener("click", toggleMenu);
});

overlay.addEventListener("click", toggleMenu);

function toggleMenu() {
  menu.classList.toggle("burger-menu__active");
  document.body.style.overflow = menu.classList.contains("burger-menu__active")
    ? "hidden"
    : "visible";
}
