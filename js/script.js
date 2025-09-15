// Alert button area //
const alertButton = document.getElementById('alertButton');


alertButton.addEventListener('click', function () {
 alert('Proceed to Checkout.');
 
});
// Add paragraph area //
const addParagraphButton = document.getElementById('addParagraphButton');
const addParagraphContainer = document.getElementById('addParagraphButton');


addParagraphButton.addEventListener('click', function () {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'Congratulations!!!';
    paragraphContainer.appendChild(newParagraph);

});

// Form validation area //
const usernameInput = document.getElementById('username');
const greetButton = document.getElementById('greetButton');
const greetingMessage = document.getElementById('greetingMessage');

// Get references to the form elements

// Function to check if the input contains only letters
function isValidName(name){
    const namePattern = /^[a-zA-Z\s]+$/;  // Regular expression to allow only letters 
    return namePattern.test(name);

}

// Add an event listener to the button
greetButton.addEventListener('click', function () {
    // Get the value of the input
const username = usernameInput.value.trim();


if (username ==='') {
    greetingMessage.textContent = 'Please enter your name.';

} else if (!isValidName(username)) {

        greetingMessage.textContent = 'Invalid input. Please use only letters.';

} else {
        greetingMessage.textContent = `Hello, ${username}!`;

}
});

// Increment and Decrement area //

const counterDisplay = document.getElementById('counter');
const incrementButton = document.getElementById('incrementButton');
const decrementButton = document.getElementById('decrementButton');


// Initialize the counter
let counter = 0;

// Increment the counter and update the display when the button is clicked
incrementButton.addEventListener('click', function () {
    counter += 1;
    counterDisplay.textContent = counter;
});


// Decrement the counter and update the display when the button is clicked
decrementButton.addEventListener('click', function () {
    counter -= 1;
    counterDisplay.textContent = counter;
});

const resetButton = document.getElementById('resetButton');

//add an event listener to the Reset Button to refresh the page
resetButton.addEventListener('click', function () {
    location.reload(); //Refresh the page
});

// Toggle menu area //

const menu = document.getElementById('menu');
const menuButton = document.getElementById('menuButton');

// Toggle the menu visibility when the menu button is clicked 
menuButton.addEventListener('click', function () {
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';    
    } 
});