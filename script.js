// Navbar Fixed
// window.onscroll = function () {
//   const header = document.querySelector("header");
//   const fixedNav = header.offsetTop;

//   if (window.scrollY > fixedNav) {
//     header.classList.add("navbar-fixed");
//   } else {
//     header.classList.remove("navbar-fixed");
//   }
// };

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
const close = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

close.addEventListener("click", function () {
  close.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Daftar
const daftar = document.querySelector("#daftar");
const daftarMenu = document.querySelector("#daftar-menu");
const closeDaftar = document.querySelector("#daftar-menu");

daftar.addEventListener("click", function () {
  daftar.classList.toggle("daftar-active");
  daftarMenu.classList.toggle("hidden");
});

closeDaftar.addEventListener("click", function () {
  closeDaftar.classList.toggle("daftar-active");
  daftarMenu.classList.toggle("hidden");
});

// Masuk
const masuk = document.querySelector("#masuk");
const masukMenu = document.querySelector("#masuk-menu");
const closeMasuk = document.querySelector("#masuk-menu");

masuk.addEventListener("click", function () {
  masuk.classList.toggle("masuk-active");
  masukMenu.classList.toggle("hidden");
});

closeMasuk.addEventListener("click", function () {
  closeMasuk.classList.toggle("masuk-active");
  masukMenu.classList.toggle("hidden");
});

// Tentang
const tentang = document.querySelector("#tentang");
const tentangMenu = document.querySelector("#tentang-menu");
const closeTentang = document.querySelector("#tentang-menu");

tentang.addEventListener("click", function () {
  tentang.classList.toggle("tentang-active");
  tentangMenu.classList.toggle("hidden");
});

closeTentang.addEventListener("click", function () {
  closeTentang.classList.toggle("tentang-active");
  tentangMenu.classList.toggle("hidden");
});

// Support
const support = document.querySelector("#support");
const supportMenu = document.querySelector("#support-menu");
const closeSupport = document.querySelector("#support-menu");

support.addEventListener("click", function () {
  support.classList.toggle("support-active");
  supportMenu.classList.toggle("hidden");
});

closeSupport.addEventListener("click", function () {
  closeSupport.classList.toggle("support-active");
  supportMenu.classList.toggle("hidden");
});
