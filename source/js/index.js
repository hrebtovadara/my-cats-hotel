let closeButton = document.querySelector(".nav-header__button");
let header = document.querySelector(".header");
let headerNav = document.querySelector(".header__nav");
let navButton = document.querySelector(".nav-header__button--menu");

header.classList.add("header--with-js");

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


let feedbackBlockArr = document.querySelectorAll(".feedback-block");
let feedbackInputArr = document.querySelectorAll(".input-feedback");

for (let i = 0; i < feedbackInputArr.length; i++) {
  feedbackInputArr[i].addEventListener("click", function () {
    for (block of feedbackBlockArr) {
      block.classList.add("visually-hidden");
    }
    feedbackBlockArr[i].classList.remove("visually-hidden");
  })
}