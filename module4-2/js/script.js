// Array of available categories
var menuCategories = ["Lunch", "Dinner", "Sushi", "Drinks"];

// Function to select a random category
function getRandomCategory() {
  var randomIndex = Math.floor(Math.random() * menuCategories.length);
  return menuCategories[randomIndex];
}

// Update the Specials tile link
var specialsTile = document.querySelector("#specials-tile");
specialsTile.setAttribute("onclick", "$dc.loadMenuItems('" + getRandomCategory() + "');");
