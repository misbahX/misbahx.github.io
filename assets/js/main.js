const toggle = document.querySelector(".toggle");
const toggleClose = document.querySelector(".toggle-close");
const nav = document.querySelector(".nav-container nav");

toggle.addEventListener("click", function () {
  nav.classList.add("active");

  toggleClose.addEventListener("click", function () {
    nav.classList.remove("active");
  });
});
