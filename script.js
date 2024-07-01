// Hamburger
const navMenu = document.querySelector("#nav-menu");

document.querySelector("#hamburger").onclick = () => {
  navMenu.classList.toggle("hidden");
};

const hamburger = document.querySelector("#hamburger");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
    navMenu.classList.add("hidden");
  }
});

// Daftar
const daftar = document.querySelector("#daftar");
const daftarMenu = document.querySelector("#daftar-menu");

document.querySelector("#daftar").onclick = () => {
  daftarMenu.classList.toggle("hidden");
  navMenu.classList.add("hidden");
};

document.addEventListener("click", function (e) {
  if (!daftar.contains(e.target) && !daftarMenu.contains(e.target)) {
    daftarMenu.classList.add("hidden");
  }
});

// Masuk
const masuk = document.querySelector("#masuk");
const masukMenu = document.querySelector("#masuk-menu");

document.querySelector("#masuk").onclick = () => {
  masukMenu.classList.toggle("hidden");
  navMenu.classList.add("hidden");
};

document.addEventListener("click", function (e) {
  if (!masuk.contains(e.target) && !masukMenu.contains(e.target)) {
    masukMenu.classList.add("hidden");
  }
});

// Tentang
const tentang = document.querySelector("#tentang");
const tentangMenu = document.querySelector("#tentang-menu");

document.querySelector("#tentang").onclick = () => {
  tentangMenu.classList.toggle("hidden");
  navMenu.classList.add("hidden");
};

document.addEventListener("click", function (e) {
  if (!tentang.contains(e.target) && !tentangMenu.contains(e.target)) {
    tentangMenu.classList.add("hidden");
  }
});

// Support
const support = document.querySelector("#support");
const supportMenu = document.querySelector("#support-menu");

document.querySelector("#support").onclick = () => {
  supportMenu.classList.toggle("hidden");
  navMenu.classList.add("hidden");
};

document.addEventListener("click", function (e) {
  if (!support.contains(e.target) && !supportMenu.contains(e.target)) {
    supportMenu.classList.add("hidden");
  }
});

// // Hamburger
// const hamburger = document.querySelector("#hamburger");
// const navMenu = document.querySelector("#nav-menu");

// hamburger.addEventListener("click", function () {
//   hamburger.classList.toggle("hamburger-active");
//   navMenu.classList.toggle("hidden");
// });

// // klik luar side bar

// document.addEventListener("click", function (e) {
//   if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
//     navMenu.classList.remove("active");
//   }
// });

// // Hamburger
// const hamburger = document.querySelector("#hamburger");
// const navMenu = document.querySelector("#nav-menu");
// const close = document.querySelector("#nav-menu");

// hamburger.addEventListener("click", function () {
//   hamburger.classList.toggle("hamburger-active");
//   navMenu.classList.toggle("hidden");
// });

// close.addEventListener("click", function () {
//   close.classList.toggle("hamburger-active");
//   navMenu.classList.toggle("hidden");
// });

// // Daftar
// const daftar = document.querySelector("#daftar");
// const daftarMenu = document.querySelector("#daftar-menu");
// const closeDaftar = document.querySelector("#daftar-menu");

// daftar.addEventListener("click", function () {
//   daftar.classList.toggle("daftar-active");
//   daftarMenu.classList.toggle("hidden");
// });

// closeDaftar.addEventListener("click", function () {
//   closeDaftar.classList.toggle("daftar-active");
//   daftarMenu.classList.toggle("hidden");
// });

// // Masuk
// const masuk = document.querySelector("#masuk");
// const masukMenu = document.querySelector("#masuk-menu");
// const closeMasuk = document.querySelector("#masuk-menu");

// masuk.addEventListener("click", function () {
//   masuk.classList.toggle("masuk-active");
//   masukMenu.classList.toggle("hidden");
// });

// closeMasuk.addEventListener("click", function () {
//   closeMasuk.classList.toggle("masuk-active");
//   masukMenu.classList.toggle("hidden");
// });

// // Tentang
// const tentang = document.querySelector("#tentang");
// const tentangMenu = document.querySelector("#tentang-menu");
// const closeTentang = document.querySelector("#tentang-menu");

// tentang.addEventListener("click", function () {
//   tentang.classList.toggle("tentang-active");
//   tentangMenu.classList.toggle("hidden");
// });

// closeTentang.addEventListener("click", function () {
//   closeTentang.classList.toggle("tentang-active");
//   tentangMenu.classList.toggle("hidden");
// });

// // Support
// const support = document.querySelector("#support");
// const supportMenu = document.querySelector("#support-menu");
// const closeSupport = document.querySelector("#support-menu");

// support.addEventListener("click", function () {
//   support.classList.toggle("support-active");
//   supportMenu.classList.toggle("hidden");
// });

// closeSupport.addEventListener("click", function () {
//   closeSupport.classList.toggle("support-active");
//   supportMenu.classList.toggle("hidden");
// });
