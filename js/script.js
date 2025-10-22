const popUp = document.getElementsByClassName("pop-up")[0];
let input = document.getElementById("number-input");
const SubmitBtn = document.getElementById("SubmitBtn");
const form = document.getElementById('form');
const welcomePopUp = document.getElementsByClassName('welcome-popup')[0];
const crossBtn = document.getElementsByClassName('cross-btn')[0];
const eligiblePopUp = document.getElementsByClassName("eligible-popup")[0];

setTimeout(() => {
  let userAge = JSON.parse(localStorage.getItem("user"));
  
  if (localStorage.getItem("user") === null) {
    popUp.style.display = "block";
    document.body.style.overflow = "hidden";
  }

  else if (userAge >= 18) {
    welcomePopUp.style.display = "none";
    popUp.style.display = "none";
    document.body.style.overflow = "visible";
  }

  else {
    if (userAge <= 17) {
      popUp.style.display = "block";
      document.body.style.overflow = "hidden";
    }
  }
}, 100);


SubmitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  let age = input.value;

  // checking age to store in local storage
  if(age >= 18){
    let dataStr = JSON.stringify(age)
    localStorage.setItem("user", dataStr);
  }

  // chcking age to show pop up
  // welcome popup
  if (age >= 18) {
    welcomePopUp.style.display = "block";
    setTimeout(() => {
      welcomePopUp.style.display = "none";
      document.body.style.overflow = "visible";
    }, 2000);
    popUp.style.display = "none";
  }

// not eligible pop up
  else {
    eligiblePopUp.style.display = "block";
     popUp.style.display = "none";
    setTimeout(() => {
      eligiblePopUp.style.display = "none";
     popUp.style.display = "block";
    }, 2000);
  }

  input.value="";
})


var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});