const emailInput = document.getElementById('email-input');
const button = document.querySelector('button');
const errorMessage = document.getElementById('error');

button.addEventListener('click', emailValidation);

function emailValidation() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const email = emailInput.value;
    if (emailRegex.test(email)) {
        errorMessage.innerHTML = "";
        emailInput.style.borderColor = "hsl(223, 100%, 88%)";
    } else {
        errorMessage.innerHTML = "Please provide a valid email";
        emailInput.style.borderColor = "red";
    }
};