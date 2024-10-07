console.log("Hello World!");

for (let i = 0; i <= 5; i++) {
  console.log("Looping of ", i);
}

let counter = 1;
while (counter <= 5) {
  console.log("counting from :", counter);
  counter++;
}

let keepLooping = true;
let i = 1;
while (keepLooping === true) {
  console.log("Counting from :", i);
  keepLooping = Math.random() < 0.2;
  i++;
}

let favFood = ["pizza", "pasta", "vegetable"];
for (let i = 0; i < favFood.length; i++) {
  console.log(favFood[i]);
}

const foods = ["pizza", "chocolate", "ice cream", "cheese"];
for (let food of foods) {
  console.log(food);
}

const favouriteNumbers = [4, 8, 15, 16, 23, 42, Infinity];
for (let number of favouriteNumbers) {
  console.log(number);
}
