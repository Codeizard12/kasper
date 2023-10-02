

function validateEmail() {
    // Regular expression pattern to match the email format
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var validText = document.getElementById("validTxt");
    var eInput = document.getElementById("emailInput");
    // Check if the email matches the pattern
    if (pattern.test(eInput.value)==false) {
        validText.style.display="block"; // Email is valid
    } else{
        validText.style.display="none"; // Email is invalid
    }

    
  }