// ELEMENTS SELECTIONS
"use strict";
const btnList = document.querySelectorAll(".btn");
const submit = document.querySelector(".submit");
const btnSelected = document.getElementById("#btn");
const selected = document.querySelector(".selected");
let selectedRating;



// FUNCTIONALITY
submit.addEventListener("click", function (e) {
  e.preventDefault();

   // if (!selectedRating) {
  // return alert('please rate use')
  // }

 if (!selectedRating) {
// SHAKE ANIMATION IF USER DIDNT RATE
  const divContainer = document.querySelector(".container");

  //call shake function .
  shakeAnimation(divContainer)
    return alert("Please rate us 😭");

} else if (selectedRating < 3){
       alert("what can we do to serve you better ?") //if rate is below 3
    }



   // switch to thank you contents
  const rating = document.querySelector(".rating-container");
  const thankYouCard = document.querySelector(".thankyou-section");
  const ratingSpan = document.querySelector("#selected-rating");

  ratingSpan.innerHTML = selectedRating;

  thankYouCard.classList.remove("display-none");
  rating.classList.add("display-none");
});


// FUNCTION TO GET USER INPUT
btnList.forEach((btns) => {
  btns.addEventListener("click", function (e) {
    const clickedBtn = e.target;

    selectedRating = clickedBtn.innerHTML;
    // console.log(selectedRating);
    btns.classList.toggle("btn-focus");
  });
});



//SHAKE ANIMATION
function shakeAnimation(shake) {
  shake.classList.add("shake-animation");
  setTimeout(function () {
    shake.classList.remove("shake.animation");
  }, 500);
}
