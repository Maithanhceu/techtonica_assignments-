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

//Create a vertification checking for email 
const form = document.getElementById("input-container");

form.addEventListener("submit", function (event) { 
    const emailId = document.getElementById("email").value;
    const emailPattern = /^[^\s@]+@[^\s@]+.[^\s@]+$/; 

    // Check if the user input meets the email requirement
    if (!emailPattern.test(emailId)) {
        alert("Please enter a valid email address.");
    } if (emailId.length < 100){
        alert("Please enter a valid email address.");
    }
});

// Make h2 element for Mai Awards 

const h2 = document.createElement("h2");
//code for the h2 innerHTML

h2.innerHTML = '<h2>Mai Awards <span class="blue"> + </span> Relevant Work Experience <span class="blue"> + </span> Fun Facts'

//make paragraph element with the rest of my text :) 

const paragraph = document.createElement("p");
// code for the paragraph innerHTML 
paragraph.innerHTML = '<strong> First-generation college & master graduate</strong>, who grew up in an insular, Vietnamese-American,'
    + 'refugee community in New Orleans-East. I have lived abroad for three years, studying and working at different'
    + '<span class="blue"> higher-educational institutions</span>, before spending a few years working in the'
    + '<span class="blue"> disability space.</span> <br><br> Now as a Software Engineer, I am utilizing my past experience as a '
    + '<strong>learner, educator,</strong> and <strong> disability advocate</strong> into making online spaces more <strong>'
    + '<span class="blue">*accessible*</span></strong>. You can find my resume <a href="#"> here.'
    + '</a> Feel free to contact me at <a href="mailto:ttmai@my.loyno.edu" target="_blank">ttmai@my.loyno.edu</a>, and shoot me a message. <br>'
    + '<br> Outside of coding, I enjoy hiking, meaningful conversations, <a href="https://www.instagram.com/pinkhairasian/" target="_blank">ceramics,</a>';

//Append the elements to the container in HTML 
const textContentContainer = document.getElementById("text-container");
textContentContainer.appendChild(h2);
textContentContainer.appendChild(paragraph);

