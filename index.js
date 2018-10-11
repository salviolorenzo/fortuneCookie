// 1. Make some code run when I click the button
const buttonElement = document.querySelector('[data-trigger]');

function hello(){
    console.log('Hello, click.')
}

buttonElement.addEventListener('click', hello);


// 2. Write some text to the page on button click
// 3. Pull text from an array of text, to write to the page