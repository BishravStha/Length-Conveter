const input = document.getElementById('input');
const output = document.getElementById('output');
const submitbtn = document.getElementById('submitbtn');

const calculate = () => {
    let userInput = input.value;
    let result = userInput / 100; 
    output.value = result; 
};

submitbtn.addEventListener('click', calculate);
