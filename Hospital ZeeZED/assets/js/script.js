'use strict';



/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * PRELOADER
 * 
 * preloader will be visible until document load
 */

const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});



/**
 * MOBILE NAVBAR
 * 
 * show the mobile navbar when click menu button
 * and hidden after click menu close button or overlay
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNav = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNav);

function changePrices() {
  const doctor1 = document.getElementById("doctor1");
  const doctor2 = document.getElementById("doctor2");

  // Change prices dynamically
  doctor1.querySelector('p:nth-child(3)').textContent = "Price: $180";
  doctor2.querySelector('p:nth-child(3)').textContent = "Price: $250";
  
  // Add more doctor price changes as needed
}

/**
 * HEADER & BACK TOP BTN
 * 
 * active header & back top btn when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElementOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

window.addEventListener("scroll", activeElementOnScroll);



/**
 * SCROLL REVEAL
 */

const revealElements = document.querySelectorAll("[data-reveal]");

const revealElementOnScroll = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.15) {
      revealElements[i].classList.add("revealed");
    } else {
      revealElements[i].classList.remove("revealed");
    }
  }
}

window.addEventListener("scroll", revealElementOnScroll);

window.addEventListener("load", revealElementOnScroll);
function calculateQuote() {
  const doctorSelect = document.getElementById("doctor");
  const insuranceSelect = document.getElementById("insurance");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const quoteResult = document.getElementById("quoteResult");

  const selectedDoctor = doctorSelect.value;
  const selectedInsurance = insuranceSelect.value;
  const userName = nameInput.value;
  const userEmail = emailInput.value;

  // Perform calculations based on selected options
  let price = 0;

  if (selectedDoctor === "cardiologist") {
      price += 200;
  } else if (selectedDoctor === "orthopedic") {
      price += 250;
  }

  if (selectedInsurance === "premium") {
      price *= 1.5;
  }

  // Display the quote
  quoteResult.innerHTML = `<p>Dear ${userName},</p>
                           <p>Your instant quote for ${selectedDoctor} with ${selectedInsurance} insurance is: calculated and 
                           <p>We've sent a detailed quote to your email address (${userEmail}).</p>`;
}
