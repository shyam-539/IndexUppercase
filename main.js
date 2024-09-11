// Arrow function to convert string
const indexedUppercaseString = (str) => {
    return str
        .split('')
        .map((char, index) => index + char.toUpperCase())
        .join('');
};

// Get user input
const userInput = prompt("Enter a string:");

// Process the input and get the result
const result = indexedUppercaseString(userInput);

// Display the result in the div element
document.getElementById('result').textContent = result;
