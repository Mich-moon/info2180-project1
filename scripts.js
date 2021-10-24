/* Add your JavaScript to this file */
"use strict";

window.onload = function() {

  var button = document.getElementsByTagName("button")[0];

  // click event for the newsletter button
  button.addEventListener("click", function (element) {
    element.preventDefault();

    var email = document.querySelector('#email');   
    var message = document.querySelector('.message');

    // remove message from previous button click
    if(message.firstChild){
        message.removeChild(message.lastChild);
    }

    if ( email.value.trim().length == 0) {  
        // display error message
        var errorMessageText = document.createTextNode("Please enter a valid email address.");
        var errorMessage = document.createElement("span");
        errorMessage.appendChild(errorMessageText);
        message.appendChild(errorMessage);
    } else {
        // display email message
        var mail = email.value;
        var messageText = document.createTextNode("Thank you! Your email address " +mail+" has been added to out mailing list!");
        var messageBox = document.createElement("span");
        messageBox.appendChild(messageText);
        message.appendChild(messageBox);
    }

  });


};