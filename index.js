const email=document.getElementById("email").addEventListener("submit", function (e) {
    e.preventDefault();

    const emailInput = document.getElementById("email").querySelector("input");
    const emailValue = emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const errorLabel = document.createElement("p");
    errorLabel.textContent = "Valid email required";
    errorLabel.style.color = "red";


    if (emailInput.nextSibling) {
        emailInput.nextSibling.remove();
    }
    if (emailRegex.test(emailValue)) {
        document.querySelector(".container").style.display = "none";
        document.querySelector(".message-container").style.display = "block";

        emailInput.style.border = "1px solid #ccc";
    } else {

        emailInput.style.border = "1px solid red";
        emailInput.parentNode.insertBefore(errorLabel, emailInput.nextSibling); 
    }
});


