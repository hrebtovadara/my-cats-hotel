let closeButton = document.querySelector(".nav-header__button");
let header = document.querySelector(".header");
let headerNav = document.querySelector(".header__nav");
let navButton = document.querySelector(".nav-header__button--menu");

header.classList.add("header__with-js");

closeButton.onclick = function () {
  header.classList.toggle("header__with-js");
  headerNav.classList.toggle("header--toggle");
  navButton.classList.toggle("visually-hidden");
  closeButton.classList.toggle("header--close");
}

navButton.onclick = function () {
  header.classList.toggle("header__with-js");
  headerNav.classList.toggle("header--toggle");
  navButton.classList.toggle("visually-hidden");
  closeButton.classList.toggle("header--close");
}

let roomsBlockArr = document.querySelectorAll(".rooms-block");
let roomsInputArr = document.querySelectorAll(".input-rooms");

for (let i = 0; i < roomsInputArr.length; i++) {
  roomsInputArr[i].addEventListener("click", function () {
    for (block of roomsBlockArr) {
      block.classList.add("visually-hidden");
    }
    roomsBlockArr[i].classList.remove("visually-hidden");
  })
}

let filterButton = document.querySelector(".catalog-filters__button");
let filterBlur = document.querySelector(".catalog-filters__blur");
let filterMenu = document.querySelector(".filter");
let filterCloseButton = document.querySelector(".filter__close");

filterButton.onclick = function () {
  filterButton.classList.toggle("catalog-filters--view");
  filterBlur.classList.toggle("catalog-filters--view");
  filterMenu.classList.toggle("catalog-filters--view");
}

filterCloseButton.onclick = function () {
  filterButton.classList.toggle("catalog-filters--view");
  filterBlur.classList.toggle("catalog-filters--view");
  filterMenu.classList.toggle("catalog-filters--view");
}

// window.addEventListener('resize', function() {
//   let width = document.documentElement.clientWidth;

//   if (document.documentElement.clientWidth < 1366) {
//     filterButton.classList.remove("visually-hidden");
//     filterBlur.classList.add("visually-hidden");
//     filterMenu.classList.add("visually-hidden");

//     filterButton.onclick = function () {
//       filterButton.classList.toggle("visually-hidden");
//       filterBlur.classList.toggle("visually-hidden");
//       filterMenu.classList.toggle("visually-hidden");
//     }
  
//     filterCloseButton.onclick = function () {
//       filterButton.classList.toggle("visually-hidden");
//       filterBlur.classList.toggle("visually-hidden");
//       filterMenu.classList.toggle("visually-hidden");
//     }
//   } else {
//     filterButton.classList.add("visually-hidden");
//     filterBlur.classList.add("visually-hidden");
//     filterMenu.classList.remove("visually-hidden");
//   }
// });

// let sortButton = document.querySelector(".sort__button");
// let sortContainer = document.querySelector(".sort__container");

// sortButton.onclick = function() {
//   sortButton.classList.toggle("visually-hidden");
//   sortContainer.classList.toggle("visually-hidden");
// }