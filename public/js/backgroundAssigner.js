// Create a new HTMLCollection that will hold all elements that has the class
let planetItemArray = document.getElementsByClassName("starBackgound");

// Loop through the collection and give one randomly chosen backround to each element
for (let i = 0; i < planetItemArray.length; i++) {
    planetItemArray[i].style.backgroundImage = "url(/static/images/backgrounds/Background" + randomNumber() + "-18.png)";
}

// Function for generating a random number
function randomNumber() {
    let min = Math.ceil(1);
    let max = Math.floor(5);
    return Math.floor(Math.random() * (max - min) + min);
}