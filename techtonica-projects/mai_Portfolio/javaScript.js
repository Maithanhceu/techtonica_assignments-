// Animated text
const outputElement = document.getElementById("Hello");
const text = 'Hello, world. (:';
let index = 0;

function addCharacter() {
    if (index < text.length) {
        outputElement.textContent += text.charAt(index);
        index++;
        setTimeout(addCharacter, 200); // Adjust speed here
    }
}

addCharacter();


const form = document.querySelector("#contactForm");

form.addEventListener("submit", function (event) { 
    const emailId = document.getElementById("email").value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

    // Check if the user input meets the email requirement
    if (!emailPattern.test(emailId)) {
        alert("Please enter a valid email address.");
        event.preventDefault(); // Prevent form submission
    }
});


