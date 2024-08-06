// Step 8: class TicketType 
class TicketType {
    constructor (name, price) {
        this.name = name; 
        this.price = price; 
        this.availableTickets = []; 
    }
};

// Step 1: create an Event Class 
class Event {
    constructor (name, description) {
        this.name = name; 
        this.description = description; 
        this.availableTickets = []; 
    }

    //Step 9: addAvailablesTickets 
    addAvailableTickets(ticketName, price) {
        this.availableTickets.push({ ticketName, price });
    };

    // Step 11: allTickets function ()
    allTickets(){
        return "All tickets: " + this.availableTickets.map((ticket, index) => `${index + 1}. ${ticket.ticketName} ($${ticket.price})`).join(" ")
    }

    //Step 13: 
    searchTickets(low, high){
        const eligibleTickets = this.availableTickets.filter(ticket => ticket.price >= low && ticket.price <= high);
        if (eligibleTickets.length === 0){
            return "No tickets available"
        }
        return "Eligible tickets: " + eligibleTickets.map((ticket,index) => `${index + 1}. ${ticket.ticketName} ($${ticket.price})`). join(" ")
    }
};

//Step 2: Create an object and assign values to them 

const eventObj1 = new Event (
    'KLOS Golden Gala', 
    'An evening with holly vampires'
);

//Step 3: Create more objects with diff values

const eventObj2 = new Event (
    'Skillet & Sevendust', 'Victorious war tour'
);

const eventObj3 = new Event ('Jenny Lewis', 'On the line tour 2019'); 

//Step 4: Create an empty Event array 

const eventArray = new Array();

//Step 5: Push single object to an array 

//eventArray.push(eventObj1); 

eventArray.push(eventObj1, eventObj2, eventObj3); 

//Step 6: Console.log eventArray

console.log(eventArray); 

//Step 7: iterate through the eventArray
document.addEventListener('DOMContentLoaded', () => {
    let html = ''; 
    eventArray.forEach((item) => {
        html +=  `<li> ${item.name} - ${item.description} </li>`;
        
    });
    document.querySelector('#event').innerHTML = html; 
});

//Step 12: 

document.addEventListener('DOMContentLoaded', () => {
    let html = '';
    eventArray.forEach((event) => {
      html += `<li>${event.name} - ${event.description} - ${event.allTickets()}</li>`;
    });
    document.querySelector('#event').innerHTML = html;
  });


//step 14 view the search tickets
document.addEventListener('DOMContentLoaded', () => {
    let html = '';
    eventArray.forEach((event) => {
        html += `<li> ${event.name} - ${event.description} - ${event.searchTickets(0, 100)}</li>`
    })
    document.querySelector('#event').innerHTML = html;
})  

//step 10
eventObj1.addAvailableTickets("Floor Seating", 29);
eventObj2.addAvailableTickets("Side", 60);
eventObj2.addAvailableTickets("General Admission", 4);
eventObj3.addAvailableTickets("Balcony", 5);

