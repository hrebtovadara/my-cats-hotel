let bookingPopUp = document.querySelector('.booking');
let bookingCloseButton = document.querySelector(".booking__button-close");
let catalogButtons = document.querySelectorAll(".button-booking");
let bookingBlur = document.querySelectorAll(".booking-blur-fon");
let bookingButtonForm = document.querySelector(".booking__button-form");
let thanksPopUp = document.querySelector(".pop-up-thanks");
let thanksCloseButton = document.querySelector(".pop-up-thanks__button-close");
let formBooking = document.querySelector(".booking__form");


catalogButtons.forEach(element => {
    element.onclick = function() {
        bookingPopUp.classList.remove("visually-hidden");
        bookingBlur.forEach(element => {
            element.classList.add("booking--blur");
        });
    }
});

bookingCloseButton.onclick = function() {
    bookingPopUp.classList.add("visually-hidden");
    bookingBlur.forEach(element => {
        element.classList.remove("booking--blur");
    });
};

formBooking.onsubmit = function() {
    bookingPopUp.classList.add("visually-hidden");
    thanksPopUp.classList.remove("visually-hidden");
}

thanksCloseButton.onclick = function() {
    thanksPopUp.classList.add("visually-hidden");
    bookingBlur.forEach(element => {
        element.classList.remove("booking--blur");
    });
};

bookingButtonForm.onclick = function() {
    event.preventDefault()
}