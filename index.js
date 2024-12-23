const emailForm = document.getElementById("email").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const emailInput = document.getElementById("email").querySelector("input");
    const emailValue = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (emailInput.nextSibling) {
      emailInput.nextSibling.remove();
    }
  
    if (emailRegex.test(emailValue)) {
    
      document.querySelector(".message-container").style.display = "block";
      document.querySelector(".container").style.display = "none";
  
      const emailDisplay = document.querySelector("#messageContainer strong");
      emailDisplay.textContent = emailValue;
  
      emailInput.style.border = "1px solid #ccc";
    } 
    else {
      const errorLabel = document.createElement("p");
      errorLabel.textContent = "Valid email required";
      errorLabel.style.color = "red";
  
      emailInput.style.border = "1px solid red";
      emailInput.parentNode.insertBefore(errorLabel, emailInput.nextSibling);
    }
  });
  
