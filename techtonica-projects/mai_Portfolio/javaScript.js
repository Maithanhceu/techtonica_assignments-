const form = document.querySelector("contactForm")
form.addEventListener("submit", function (){
  const passwordId = document.querySelector("#password").value; 
  const emailId = document.querySelector("#email").value;
  const emailPattern = /^[^\s@]+@[^\s@]+.[^\s@]+$/; 

  //if statement to see.value. if the user input is meeting the email requirement
  if (!emailId.match(emailPattern)) {
    alert("Please submit a valid email address");
  } if (passwordId.length < 6){
    alert("Password must be 6 characters long")
  }
})
 

