const result = document.getElementById("result");

let numbers = [1, 2, 9, 4, 5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

result.innerHTML = `The max of the array is ${maximum} and the minimum is ${minimum}`;

let username = "Shafee";
let letters = [...username].join("-");

console.log(letters);
