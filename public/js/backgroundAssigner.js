// Create a new HTMLCollection that will hold all elements that has the class
const planetItemArray = document.getElementsByClassName('starBackgound');

// Function for generating a random number
function randomNumber() {
  const min = Math.ceil(1);
  const max = Math.floor(5);
  return Math.floor(Math.random() * (max - min) + min);
}

// Loop through the collection and give one randomly chosen backround to each element
for (let i = 0; i < planetItemArray.length; i += 1) {
  planetItemArray[i].style.backgroundImage = `url(/static/images/backgrounds/Background${randomNumber()}-18.png)`;
}
