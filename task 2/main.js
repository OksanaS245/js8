const inputs = document.querySelectorAll('input');
const inputsArr = [];

for (let input of inputs) {
    inputsArr.push(input.getAttribute('type'));};

console.log(inputsArr)