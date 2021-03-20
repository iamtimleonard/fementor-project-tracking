const navToggle = document.querySelector(".nav-toggle");
const navButton = document.querySelector(".nav-button");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("visible");
  navMenu.classList.contains("visible")
    ? (navButton.src = "./images/icon-close.svg")
    : (navButton.src = "./images/icon-hamburger.svg");
});

document.addEventListener("click", (e) => {
  if (
    e.target.parentElement === navMenu ||
    e.target.parentElement.parentElement === navMenu ||
    e.target === navToggle ||
    e.target.parentElement === navToggle
  ) {
    return;
  } else {
    navMenu.classList.remove("visible");
    navButton.src = "./images/icon-hamburger.svg";
  }
});
