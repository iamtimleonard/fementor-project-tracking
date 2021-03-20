const navToggle = document.querySelector(".nav-toggle");
const navButton = document.querySelector(".nav-button");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("visible");
  navMenu.classList.contains("visible")
    ? (navButton.src = "./images/icon-close.svg")
    : (navButton.src = "./images/icon-hamburger.svg");
});
