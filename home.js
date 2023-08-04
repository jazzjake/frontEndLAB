
import Suggestion from "./Suggestion.js";

const termsBox = document.getElementById("termsBox");
termsBox.addEventListener('click', function() {
    let button = document.getElementById("submitButton");
    //button.setAttribute('disabled',)
    if(termsBox.checked) {
        button.removeAttribute('disabled'); 
    } else {
        button.setAttribute('disabled', '');
    }
});

const suggestionForm = document.getElementById("suggestionForm");
suggestionForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const suggestion = new Suggestion(suggestionForm);
    suggestion.send();
    //showMessage("Sending your message ... Thank you: " + contact.fullName);
});