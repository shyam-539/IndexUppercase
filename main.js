// Arrow function to convert string
const indexedUppercaseString = (str) => {
    return str
        .split('')
        .map((char, index) => index + char.toUpperCase())
        .join('');
};

// Function to display result in the browser
const userInput = prompt("Enter a string:");
const result = indexedUppercaseString(userInput);
alert(result);
   