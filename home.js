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