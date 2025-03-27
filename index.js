// Write your code here!

// Remove the <main> element with id 'main'
const mainElement = document.getElementById('main');
if (mainElement) {
  mainElement.remove();
}

// Create a new <h1> element
const newHeader = document.createElement('h1');

// Set the id of the newHeader to 'victory'
newHeader.id = 'victory';

// Set the text content of the newHeader
newHeader.textContent = "YOUR-NAME is the champion"; // Replace YOUR-NAME with your actual name

// Append the newHeader to the body of the document
document.body.append(newHeader);