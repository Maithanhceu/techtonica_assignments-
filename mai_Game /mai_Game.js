//Psuedo-code for Earth, Wind & Fire: Mai's take on Rock, Paper, Scissor

// create an html template 
// create a title for the page
//Body html 
    //create a header that's Mai Game

    //documentation to create Element : https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
       
const maiGameHeader = document.createElement("h1");
//create the content for the h1
const h1Content = document.createTextNode("Earth, Wind, Fire: Mai's Take on the 'Rock, Paper, Scissors' Game");//Append the h1Content to "h1"
//Append h1 to the maiGameHeader 
maiGameHeader.appendChild(h1Content); 

//Append maiGameHeader to the body 
document.body.appendChild(maiGameHeader);

     // it's a user input for Earth, Wind, Fire
    // this is a basic rock, paper, scissor game 
    // there is a user.input 
    // there is a randomize computer that will insert a num(0,1,3)

// a bunch of if statements for the rules of the game 
    // Earth takes out Fire 
    // Wind blows away Earth 
    // Fire consumes Wind/Air 

    

