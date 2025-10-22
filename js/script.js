const popUp = document.getElementsByClassName("pop-up")[0];
let input = document.getElementById("number-input");
const SubmitBtn = document.getElementById("SubmitBtn");
const form = document.getElementById('form');
const welcomePopUp = document.getElementsByClassName('welcome-popup')[0];
const crossBtn = document.getElementsByClassName('cross-btn')[0];
const eligiblePopUp = document.getElementsByClassName("eligible-popup")[0];
const notValidPopUp = document.getElementsByClassName("not-valid-popup")[0];
setTimeout(() => {
  let userAge = JSON.parse(localStorage.getItem("user"));

  if (localStorage.getItem("user") === null) {
    popUp.style.display = "block";
    document.body.style.overflow = "hidden";
  }
  // else if (userAge >= 18 && userAge < 100) {
  //   welcomePopUp.style.display = "none";
  //   popUp.style.display = "none";
  //   document.body.style.overflow = "visible";
  // }

  // else {
  //   if (userAge <= 17 && userAge >= 1) {
  //     popUp.style.display = "block";
  //     document.body.style.overflow = "hidden";
  //   }
  // }
}, 10);


form.addEventListener('submit', (event) => {
  event.preventDefault();
  let age = input.value;

  // checking age to store in local storage
  if (age >= 18 && age < 100) {
    let dataStr = JSON.stringify(age)
    localStorage.setItem("user", dataStr);
    console.log(dataStr)
  }

  // chcking age to show pop up
  // welcome popup
  if (age >= 18 && age < 100) {
    welcomePopUp.style.display = "block";
    setTimeout(() => {
      welcomePopUp.style.display = "none";
      document.body.style.overflow = "visible";
    }, 2000);
    popUp.style.display = "none";
  }

  // not valid age 
  else if (age <= 0 || age >= 100) {
    notValidPopUp.style.display = "block";
    popUp.style.display = "none";
    setTimeout(() => {
      notValidPopUp.style.display = "none";
      popUp.style.display = "block";
    }, 2000);
  }

  // not eligible pop up
  else if (0 < age < 18) {
    eligiblePopUp.style.display = "block";
    popUp.style.display = "none";
    setTimeout(() => {
      eligiblePopUp.style.display = "none";
      popUp.style.display = "block";
    }, 2000);
  }

  input.value = "";
})


var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});