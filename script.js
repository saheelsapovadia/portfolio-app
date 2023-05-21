// Show navbar mobile screen size

const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

// show
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show-menu");
    // console.log("open");
  });
}
//close
if (navMenu) {
  navMenu.addEventListener("click", () => {
    navMenu.classList.toggle("show-menu");
    // console.log("close");
  });
}
