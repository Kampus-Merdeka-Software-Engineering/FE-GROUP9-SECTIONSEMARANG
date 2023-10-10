document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const nav = document.querySelector("nav");
  const header = document.querySelector("header");

  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
    header.classList.toggle("active-header");
    menuToggle.classList.toggle("active-menu");
  });
});
