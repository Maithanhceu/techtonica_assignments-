// First up, let's create a new list item and store it in a variable.
var newListItem = document.createElement("li");

// Now let's update the text content of that list item.
newListItem.textContent = "Jalapenos";

// And finally, let's add that list item as a child of the ul.
document.querySelector("ul").appendChild(newListItem);

const myDiv = document.getElementById("myDiv");

const itemIngredients = myDiv.querySelectorAll("ul li");

for (let i = 0; i < itemIngredients.length; i++){
    let checkbox = document.createElement("input");

    var label  = document.createElement("label"); 
    
    label.htmlFor = "id"; 
    
    checkbox.type = "checkbox"; 
    checkbox.name = "name"; 
    checkbox.value = "value"; 
    checkbox.id = "id"; 

    itemIngredients[i].insertBefore(checkbox, itemIngredients[i].firstChild)
    itemIngredients[i].insertBefore(label, checkbox.nextSibling);
    checkbox.addEventListener("click", function (event){
        if (event.target.checked){
        itemIngredients[i].className = "checked";
        } else {
        itemIngredients[i].className = ""; 
        }
    });
} 
