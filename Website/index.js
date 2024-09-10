const result = document.getElementById("result");

let numbers = [1, 2, 9, 4, 5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

result.innerHTML = `The max of the array is ${maximum} and the minimum is ${minimum}`;

let username = "Shafee";
let letters = [...username].join("-");

console.log(letters);

let vegetables = ["carrot", "potato", "capsicum"];
let fruits = ["banana", "apples", "Orange"];

let newveggies = [...vegetables];

let foods = [...fruits, ...vegetables, 90, "milk"];
console.log(foods);

function openFridge(...foods) {
  console.log(...foods);
}

function getFood(...foods) {
  return foods;
}

const food1 = "Pizza";
const food2 = "Hamburger";
const food3 = "Burrito";
const food4 = "hotdog";
const food5 = "Ramen";

//invoke function
openFridge(food1, food2, food3, food4, food5);

const edibles = getFood(food1, food2, food3, food4, food5);
console.log(edibles);
