// Notes -- 4.8.25

for (let number = 0; number < 12; number += 2) {
    console.log(number);
    console.log("loop running");
}

for (let i = 1; i < 10; i += 2) {
    if (i === 7) {
        break;
    }
    console.log('Total elephants: ' + i);
}

console.log('Hello!');

// Total elephants: 1
// Total elephants: 3
// Total elephants: 5

// When i reaches 7, the console will print "Hello!



// Exercise 1 -- Example of 'break' keyword IRL 

// you could be sifting through a row of fruits 
// trying to find a specific fruit.
let fruits = ["Apple", "Pear", "Orange", "Kiwi", "Cherry"];

for (let i = 0; i < fruits.length; i++) {
    console.log(`The fruit at index ${i} is ${fruits[i]}.`)
    if (fruits[i] != "Orange") {
        console.log(`${fruits[i]} is not an Orange.`);
    } else {
        console.log(`Orange found! Ending loop.`);
        break;
    }
}



// Notes cont. -- 'While' Loop 

let foodPlaces = ["McDonalds", "Burger King", "Wendy's", "Chick-Fil-A"];

let i = 0;
while (i < foodPlaces.length) {
    console.log(`The restaurant is ${foodPlaces[i]}`)
    i++;
}



// Exercise 2 - Looping Triangle 

i = 0;
// initialize the loop starting point 
let result = "";
// initialize with empty string or emptiness 
while (i < 7) {
    // loop continues 7 times 
    result = result + "🐸";
    // first iteration: result = "" + "#" --> result = "#"
    // second iteration: result = "#" (from above) + "#"
    // --> result = "##"
    // so on and so forth  
    console.log(result);
    // prints to the console every iteration
    i++;
    // iterates 
}

// Exercise 3 - Doubling Numbers Until 100

let num = 2; 
do {
console.log(num);
num = num * 2; 
} while (num < 100);
