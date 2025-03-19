<!-- script.js -->
document.getElementById("signin-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let email = document.getElementById("signin-email").value;
    let password = document.getElementById("signin-password").value;
    if(email && password) {
        document.getElementById("signin-message").textContent = "Sign In Successful";
        document.getElementById("signin-message").style.color = "green";
    } else {
        document.getElementById("signin-message").textContent = "Invalid credentials";
        document.getElementById("signin-message").style.color = "red";
    }
});

document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("signup-name").value;
    let email = document.getElementById("signup-email").value;
    let password = document.getElementById("signup-password").value;
    if(name && email && password) {
        document.getElementById("signup-message").textContent = "Sign Up Successful";
        document.getElementById("signup-message").style.color = "green";
    } else {
        document.getElementById("signup-message").textContent = "Please fill all fields";
        document.getElementById("signup-message").style.color = "red";
    }
});