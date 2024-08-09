//Psuedo-code for Earth, Wind & Fire: Mai's take on Rock, Paper, Scissor

// create an html template 
// create a title for the page
//Body html 
//create a header that's Mai Game

//add font 
document.body.style.fontFamily = "'Nunito', sans-serif";
document.body.style.display = 'flex';
document.body.style.flexDirection = 'column';
document.body.style.alignItems = 'center';
document.body.style.justifyContent = 'center';
document.body.style.height = '100vh';
document.body.style.margin = '10px';
document.body.style.padding = '20px';
//document.body.style.backgroundColor = 


//documentation to create Element : https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement

const maiGameHeader = document.createElement("h1");
//create the content for the h1
const h1Content = document.createTextNode("Earth, Wind, Fire: Mai's Take on the 'Rock, Paper, Scissors' Game");
    //Append h1 to the maiGameHeader 
    maiGameHeader.appendChild(h1Content);

    //Append maiGameHeader to the body 
    document.body.appendChild(maiGameHeader);

// create a div for the Game 
    const divRules = document.createElement("div"); 
    //create a paragraph element 
    const paragraphRules = document.createElement("p"); 
    //create the HTML with the Rules to the Game 
    paragraphRules.innerHTML = "Hi, welcome to Mai take on 'Rock, Paper, Scisscor'. Here are the *RULES*: <br> <br> "
        + "Earth takes out Fire <br>"
        + "Wind blows away Earth <br>"
        + "Fire consumes Wind <br><br>"
        
        + "Have fun!"
    
    //Append paragraphRules to divRules
    divRules.appendChild(paragraphRules);
    //Append divsRules to the body
    document.body.appendChild(divRules);

    //documentation on how to create form-drop down box https://www.freecodecamp.org/news/html-select-tag-how-to-make-a-dropdown-menu-or-combo-list/

    //create a form element with a dropdown box 
    const formElement = document.createElement("form");

    //created a labelElement 
    const labelElement = document.createElement("label");
        labelElement.setAttribute("for", "elements"); 
        labelElement.textContent = "Earth, Wind, or Fire  " 


    //create a select Element 
    const selectElement = document.createElement("select");
        selectElement.setAttribute("name", "Elements");
        selectElement.setAttribute("id", "gameElements")

    //creating more options to choose from for the dropbox and an array of options 
    const optionsDropBox = ["Earth", "Wind", "Fire"]; 

        //use a for each to add content 

        optionsDropBox.forEach(option => {
            const optionElement = document.createElement("option")
            optionElement.value = option; 
            optionElement.text = option; 
            selectElement.appendChild(optionElement)
        });
        //add font 
        selectElement.style.fontFamily = "'Nunito', sans-serif";

    //create input Element and Attribute 
    const inputElement = document.createElement("input");
        // create input attributes 
        inputElement.setAttribute("type", "submit");
        inputElement.setAttribute("value", "Submit");
        inputElement.setAttribute("id", "input");
    
    formElement.appendChild(labelElement);
    formElement.appendChild(selectElement);
    formElement.appendChild(inputElement);

    //add font for the selector button 

    
    //Append the form to the body 
    document.body.appendChild(formElement);

    //Create a selection for results 
    const gameResults = document.createElement("div"); 
    gameResults.setAttribute("id", "gameResults")

    //InnerHTML for the game 
    const gameParagraph = document.createElement("p");
    gameParagraph.innerHTML = ""; 

    gameResults.appendChild(gameParagraph);
    document.body.appendChild(gameResults);

//create a function to randomize the computer to choose Earth, Wind, or Fire 
function computerChoice(){
    //optionsDropBox variable already holds Earth Wind and Fire in an array for us in line 54
    const randomChoice = Math.floor(Math.random() * 3);
    return optionsDropBox[randomChoice];
}

//create a function that takes the user.input and computerInput 
function eWFGame(event){
    event.preventDefault();
    let result = '';
    const userChoice = document.querySelector("#gameElements").value; 
    const computerInput = computerChoice(); // Get the computer's choice

      // Game Rules: 
    // "Earth takes out Fire"
    // "Wind blows away Earth"
    // "Fire consumes Wind"

    if (userChoice === computerInput){
        result = "It's a tie!"
    } 
    else if (userChoice === "Earth" && computerInput === "Fire" ||
        userChoice === "Wind" && computerInput === "Earth" ||
        userChoice === "Fire" && computerInput === "Wind") {
        result = "You win!"
    } 
    else {
        result = "You Lose"
    }
    gameParagraph.innerHTML = result; 
}

//create a addEventListener 
//documentation: https://www.w3schools.com/js/js_htmldom_eventlistener.asp
// example syntax for .addEventListener 
    //document.getElementById("myBtn").addEventListener("click", displayDate);

    document.querySelector("form").addEventListener("submit", eWFGame);


