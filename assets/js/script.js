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



document.addEventListener('DOMContentLoaded', function () {
  const targets = document.querySelectorAll('.services1');

  function checkPosition() {
      targets.forEach(target => {
          const rect = target.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          const viewportWidth = window.innerWidth;
          const middleOfViewportY = viewportHeight / 2;
          const middleOfViewportX = viewportWidth / 2;
          const middleOfElementY = rect.top + (rect.height / 2);
          const middleOfElementX = rect.left + (rect.width / 2);

          if (Math.abs(middleOfElementY - middleOfViewportY) < rect.height / 2 &&
              Math.abs(middleOfElementX - middleOfViewportX) < rect.width / 2) {
              const video = target.querySelector('video');
              if (video && video.paused) {
                  video.currentTime = 0;
                  video.play();
              }
          } else {
              const video = target.querySelector('video');
              if (video && !video.paused) {
                  video.pause();
              }
          }
      });
  }

  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', checkPosition); // Also check position on resize

  // Initial check
  checkPosition();
});