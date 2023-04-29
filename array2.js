// Extend the above program to sort the array and then find the 2nd largest and the 2nd smallest element.

let numbers= [];
for(var i=0 ; i<10 ; i++){
    let number = Math.floor(Math.random()*999);
    numbers.push(number);
}

console.log("Array Before Sorting: ");
console.log(numbers);

console.log("Array After Sorting: ");
console.log(numbers.sort());

console.log("Largest element is => ",numbers[9]);
console.log("Second largest element is => ",numbers[8]);
console.log("Smallest element is => ",numbers[0]);
console.log("Second smallest element is => ",numbers[1]);