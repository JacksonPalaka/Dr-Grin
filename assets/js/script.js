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
