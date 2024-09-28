let y = 20;

y += 80; // y = 20 + 80 = 100

console.log(y);

// object
let people = {
  name: "Rafly Aziz Abdillah",
  age: 21,
};

// Array
let food = ["Rendang", "Dendeng", "Ayam Goreng"];

// Assignments for objects
people.age = 20;
console.log(`nama saya adalah ${people.name} umur saya ${people.age}`);

// Assignments for Array
food[0] = "Rendang Rebus";
console.log(`Makanan ini adalah ${food[0]}`);

// Destructuring for objects
let { name: peopleName, age } = people;

// Destructuring for Array
let [firstFood, secondFood, thirdFood] = food;

console.log(
  `nama saya adalah ${peopleName} umur saya ${age} dan saya suka makanan yaitu ${firstFood}`
);

// Comparison Operator
let numberOne = 100;
let numberTwo = numberOne + 20;

const numberOneBiggerThanNumberTwo = numberOne > numberTwo;
console.log(numberOneBiggerThanNumberTwo);

// Equal Comparison Operator
const equalNumber = 3 == "3";
console.log(equalNumber);

// Logical Operators
let logicalOne = true;
let logicalTwo = false;

console.log("Space");
console.log(logicalOne || logicalTwo);
console.log(logicalTwo || logicalOne);
console.log("space two");

console.log(logicalTwo && logicalOne);
console.log(1 && 10);
console.log(0 || 100);
console.log((logicalOne && logicalTwo) || "Kepo Kau");

// Relational Operators
console.log("\n");
const stockFoods = ["Ayam Goreng", "Nasi Goreng", "Cuma Hitam"];
const isMyFavFoodInStocks = "Ikan Kerapu" in stockFoods;
console.log(isMyFavFoodInStocks);
console.log(stockFoods instanceof Array);

console.log("\n");
// Unary Operators
const cars = {
  name: "Ferrari",
  series: "909",
  driverName: "Rafly",
};

const { name: carName, series } = cars;
delete cars.name;
console.log(cars);

const isTodayRaining = false;

!isTodayRaining ? console.log("Betul Broh") : console.log("Salah Bro");
