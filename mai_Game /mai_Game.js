//Psuedo-code for Earth, Wind & Fire: Mai's take on Rock, Paper, Scissor

// create an html template 
// create a title for the page
//Body html 
//create a header that's Mai Game

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
        + "Fire consumes Wind <br>"
        + "You get 3 rounds before a winner is declared <br>"
        
        + "Have fun!"
    
    //Append paragraphRules to divRules
    divRules.appendChild(paragraphRules);
    //Append divsRules to the body
    document.body.appendChild(divRules);


// it's a user input for Earth, Wind, Fire
// this is a basic rock, paper, scissor game
// there is a user.input
// there is a randomize computer that will insert a num(0,1,3)

// a bunch of if statements for the rules of the game 
// Earth takes out Fire
// Wind blows away Earth
// Fire consumes Wind/Air 



