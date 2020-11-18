let hamburgerOpen = false;

function toggleHamburger(elem) {
  hamburgerOpen = !hamburgerOpen;
  elem.classList.toggle("is-active");

  let mobileMenu = document.getElementById("mobile-navigation");
  mobileMenu.style.display = hamburgerOpen ? "block" : "none";
}
