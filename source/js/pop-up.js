let bookingPopUp = document.querySelector('.booking');
let bookingBlurFon = document.querySelector(".catalog-filters__blur");
let bookingCloseButton = document.querySelector(".booking__button-close");
let catalogButtons = document.querySelectorAll(".our-rooms__button");

catalogButtons.forEach(element => {
    element.onclick = function() {
        bookingPopUp.classList.remove("visually-hidden");
        bookingBlurFon.classList.remove("catalog-filters--view");
    }
});

bookingCloseButton.onclick = function() {
    bookingPopUp.classList.add("visually-hidden");
    bookingBlurFon.classList.add("catalog-filters--view");
}

//создать блюр