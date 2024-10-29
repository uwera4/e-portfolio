// script.js
// Error Handling (Jathniel)
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    if (!name || !email || !message) {
    alert("All fields are required!");
    } else if (!validateEmail(email)) {
    alert("Please enter a valid email address!");
    } else {
    alert("Form submitted successfully!");
    }
    });
    function validateEmail(email) {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
    }