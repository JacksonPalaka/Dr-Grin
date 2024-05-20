'use strict';



/**
 * addEvent on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navbarToggler = document.querySelector("[data-nav-toggler]");

const toggleNav = function () {
  navbar.classList.toggle("active");
  navbarToggler.classList.toggle("active");
}

addEventOnElem(navbarToggler, "click", toggleNav);

const closeNav = function () {
  navbar.classList.remove("active");
  navbarToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNav);



/**
 * header active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});


// video



// chat on whatsapp

function sendWhatsAppMessage() {
  var name = document.getElementById('name').value;
  var phone = document.getElementById('phone').value;
  var problem = document.getElementById('problem').value;

  var message = "Name: " + name + "\nPhone Number: " + phone + "\nProblem: " + problem;
  var whatsappLink = "https://wa.me/919403890078?text=" + encodeURIComponent(message);

  window.open(whatsappLink);

  // Prevent form submission
  return false;
}

// make call

function makeCall() {
  var phoneNumber = '9403890078';
  window.location.href = 'tel:' + phoneNumber;
}





document.addEventListener('DOMContentLoaded', function() {
  const videoElement = document.querySelector('.video1');
  const screenHeight = window.innerHeight;

  window.addEventListener('scroll', function() {
      const videoRect = videoElement.getBoundingClientRect();
      const videoTop = videoRect.top;
      const videoBottom = videoRect.bottom;

      if (videoTop < screenHeight / 2 && videoBottom > screenHeight / 2) {
          videoElement.play().catch(error => {
              console.error('Video play error:', error);
          });
      } else {
          videoElement.pause();
          videoElement.currentTime = 0; // Reset to start when out of view
      }
  });
});
