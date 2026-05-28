document.addEventListener("DOMContentLoaded", function () {

  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("nav-menu");

  toggle.addEventListener("click", function () {
    menu.classList.toggle("show");
  });
  // LOADER

window.addEventListener("load", function () {

  const loader = document.getElementById("loader");

  loader.classList.add("loader-hidden");

});

});